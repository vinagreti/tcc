import { spawn } from "child_process";
import { testParser } from "./../../../helpers/test-parser";
import { TestSet } from "@models/test-flow.model";
import {
  listFiles,
  createFolder,
  dropFolder,
  writeFile,
} from "./files.helpers";

const ansiToHtml = require("ansi-html");

const slug = (text: string) => {
  return text
    .replace(" ", "-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/\s+/g, "-");
};

// run spawn - run script in terminal
const runSpawn = async (
  testFolderPath: string,
  script: string,
  forceColor: boolean = false
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const npm = spawn(
      "npm",
      ["run", script, "--color=always", "-- --spec", `${testFolderPath}/**/*`],
      {
        stdio: "pipe",
        shell: true,
        env: { ...process.env, FORCE_COLOR: forceColor } as any,
      }
    );

    let stdout = "";
    let stderr = "";

    npm.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    npm.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    npm.on("close", (code) => {
      // TODO: remove cypress and nodejs sensitive data from the outputs before returning them
      if (code !== 0) {
        // in case of error we need to parse the error and return it as a string
        const htmlError = ansiToHtml(stdout);
        reject(htmlError);
      } else {
        // in case of success we need to parse the output and return it as a string
        const htmlOutput = ansiToHtml(stdout);
        resolve(htmlOutput);
      }
    });
  });
};

const generateTestName = (title: string) => {
  const time = Date.now();
  const testName = `${slug(title)}-${time}`;
  return testName;
};

const generateTestFolderPath = (testName: string, testSet: TestSet) => {
  const testFolderPath = `${__dirname}/../../cypress/e2e/${testName}`;
  return testFolderPath;
};

const createTestFiles = async (testName: string, testSet: TestSet) => {
  const testFolderPath = generateTestFolderPath(testName, testSet);
  const testPath = `${testFolderPath}/${testName}.cy.ts`;
  const testInstructions = testParser(testSet);
  await createFolder(testFolderPath);
  await writeFile(testPath, testInstructions);
};

const generateScreenshotFolder = (testName: string) => {
  const screenshotFolder = `${__dirname}/../../cypress/screenshots/${testName}.cy.ts`;
  return screenshotFolder;
};

// run tests - run the e2e tests and return the output as a string
export const runTests = async (testSet: TestSet) => {
  const testName = generateTestName(testSet.title);
  const testFolderPath = generateTestFolderPath(testName, testSet);
  const screenshotFolder = generateScreenshotFolder(testName);
  await createTestFiles(testName, testSet);
  const cypressFolderPath = generateTestFolderPath(testName, testSet);
  const log = await runSpawn(cypressFolderPath, "e2e", true);
  const files = await listFiles(screenshotFolder);
  await dropFolder(testFolderPath);
  return { log, testName, files };
};
