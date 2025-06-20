import * as fs from "node:fs/promises";
import { spawn } from "child_process";
import { testParser } from "./../../../helpers/test-parser";
import { TestSet } from "@models/test-flow.model";

const ansiToHtml = require("ansi-html");

const slug = (text: string) => {
  return text
    .replace(" ", "-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/\s+/g, "-");
};

// clear e2e folder
const clearE2eFolder = async () => {
  const directory = `${__dirname}/../../cypress/e2e`;

  try {
    await fs.rm(directory, {
      recursive: true,
    });
  } catch {}

  await fs.mkdir(directory);

  return true;
};

// run spawn - run script in terminal
const runSpawn = async (
  script: string,
  forceColor: boolean = false
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const npm = spawn("npm", ["run", script, "--color=always"], {
      stdio: "pipe",
      shell: true,
      env: { ...process.env, FORCE_COLOR: forceColor } as any,
    });

    let stdout = "";
    let stderr = "";

    npm.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    npm.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    npm.on("close", (code) => {
      let htmlOutput;
      // TODO: remove cypress and nodejs sensitive data from the outputs before returning them
      if (code !== 0) {
        // in case of error we need to parse the error and return it as a string
        htmlOutput = ansiToHtml(stdout);
      } else {
        // in case of success we need to parse the output and return it as a string
        htmlOutput = ansiToHtml(stdout);
      }
      resolve(htmlOutput);
    });
  });
};

// write file - write file to the e2e folder
const writeFile = async (filename: string, content: string) => {
  try {
    await fs.writeFile(
      `${__dirname}/../../cypress/e2e/${filename}.cy.ts`,
      content
    );
  } catch (err) {
    console.log(err);
  }
};

// run tests - run the e2e tests and return the output as a string
export const runTests = async (testSet: TestSet) => {
  const testInstructions = testParser(testSet);
  const time = Date.now();
  const testName = `${slug(testSet.title)}-${time}`;
  await clearE2eFolder();
  await writeFile(testName, testInstructions);
  const runResult = await runSpawn("e2e", true);
  const log = runResult
    .replace(/background:#000;/g, "background:#fff;") // remove black bg
    .replace(/color:#888;/g, "color:#000;") // change color to black
    .replace(/color:#fff;/g, "color:#000;");
  return { log, testName };
};
