import express from "express";
import cors from "cors";
import { runTests } from "./helpers/e2e-jobs.helper";
import { TestSet } from "@models/test-flow.model";
const serveIndex = require("serve-index");
const path = require("path");

const app = express();
const port = 3000;
const hostname = "0.0.0.0";
const screenshotPath = path.join(__dirname, "../cypress/screenshots");

// body json
app.use(express.json());

// CORS
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.post("/run", async (req: express.Request, res: express.Response) => {
  const testSet: TestSet = req.body;
  const testResult = await runTests(testSet);
  res.send(testResult);
});

app.use(
  "/static",
  express.static(screenshotPath),
  serveIndex(screenshotPath, { icons: true, hidden: true })
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on ${hostname} port ${port}`);
});
