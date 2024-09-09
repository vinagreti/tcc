import { testParser } from "./../../helpers/test-parser";
import express from "express";

const fs = require("node:fs/promises");
const exec = require("child_process").exec;
const cors = require("cors");

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
  exec("npm run e2e", (error: unknown, stdout: unknown, stderr: unknown) => {
    res.send(stdout);
  });
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
    const folderExists = await fs.access(directory);
    await fs.rmdir(directory, {
      recursive: true,
      force: true,
    });
  } catch (error) {}

  await fs.mkdir(directory);

  return true;
}
