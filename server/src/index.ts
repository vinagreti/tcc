import { testParser } from "./../../helpers/test-parser";
import express from "express";
import * as fs from "node:fs/promises";
import { spawn } from "child_process";
import cors from "cors";
const ansiToHtml = require("ansi-html");

const app = express();
const port = 3000;
const hostname = "0.0.0.0";

// body json
app.use(express.json());

// CORS
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.post("/run", async (req: express.Request, res: express.Response) => {
  const body = req.body;
  const testFile = testParser(body);
  await clearE2eFolder();
  await writeFile("test-write", testFile);
  const log = await runSpawn("e2e", true);
  res.send(log);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on ${hostname} port ${port}`);
});

async function writeFile(filename: string, content: string) {
  try {
    await fs.writeFile(
      `${__dirname}/../cypress/e2e/${filename}.cy.ts`,
      content
    );
  } catch (err) {
    console.log(err);
  }
}

async function clearE2eFolder() {
  const directory = `${__dirname}/../cypress/e2e`;

  try {
    await fs.rmdir(directory, {
      recursive: true,
    });
  } catch {}

  await fs.mkdir(directory);

  return true;
}

async function runSpawn(
  script: string,
  forceColor: boolean = false
): Promise<string> {
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
}
