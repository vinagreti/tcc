import {
  STEP_TYPE,
  TestFlow,
  TestSet,
  TestStep,
} from "./../models/test-flow.model";

export const testParser = (testSet: TestSet) => {
  return writeDescribe(testSet);
};

function writeDescribe(testSet: TestSet) {
  return `describe("${testSet.name}", () => {\n\n${writeIts(testSet)}\n\n});`;
}

function writeIts(testSet: TestSet) {
  return testSet.flows
    .map((flow) => {
      return writeIt(flow);
    })
    .join("\n\n");
}

function writeIt(testFlow: TestFlow) {
  return `  it("should ${testFlow.itShould}", () => {\n${writeSteps(
    testFlow
  )}\n  });`;
}

function writeSteps(testFlow: TestFlow) {
  return testFlow.steps
    .map((step) => {
      return writeStep(step);
    })
    .join("\n");
}

function writeStep(testStep: TestStep) {
  switch (testStep.type) {
    case STEP_TYPE.VISIT:
      return writeVisitStep(testStep);
    case STEP_TYPE.SHOULD:
      return writeShouldStep(testStep);
  }
}

function writeVisitStep(testStep: TestStep) {
  return `    cy.visit("${testStep.value}");`;
}

function writeShouldStep(testStep: TestStep) {
  return `    cy.get("${testStep.target}").should("${testStep.should}", "${testStep.value}");`;
}
