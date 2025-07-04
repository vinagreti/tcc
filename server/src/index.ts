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
  res.setHeader("Access-Control-Expose-Headers", "*");
  try {
    const testResult = await runTests(testSet);
    res.send({
      testName: testResult.testName,
      log: prepareHtml(testResult.log),
    });
  } catch (error: any) {
    res
      .set({
        Etag: "12345",
      })
      .status(400)
      .send({
        error: prepareHtml(error),
      });
  }
});

app.use(
  "/static",
  express.static(screenshotPath),
  serveIndex(screenshotPath, { icons: true, hidden: true })
);

app.listen(port, hostname, () => {
  console.log(`Server listening on ${hostname} port ${port}`);
});

function prepareHtml(log: string) {
  return log
    .replace(/background:#000;/g, "background:#fff;") // remove black bg
    .replace(/color:#888;/g, "color:#000;") // change color to black
    .replace(/color:#fff;/g, "color:#000;");
}
