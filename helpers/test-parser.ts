import {
  STEP_TYPE,
  TestFlow,
  TestSet,
  TestStep,
  TestStepClick,
  TestStepFill,
  TestStepShould,
  TestStepVisit,
} from "./../models/test-flow.model";

export const testParser = (testSet: TestSet) => {
  return writeDescribe(testSet);
};

function writeDescribe(testSet: TestSet) {
  return `// ${testSet.description}\ndescribe('${
    testSet.name
  }', () => {\n\n${writeIts(testSet)}\n\n});`;
}

function writeIts(testSet: TestSet) {
  return testSet.flows
    .map((flow) => {
      return writeIt(flow);
    })
    .join("\n\n");
}

function writeIt(testFlow: TestFlow) {
  return `  it('should ${testFlow.itShould}', () => {\n${writeSteps(
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
    case STEP_TYPE.FILL:
      return writeFillStep(testStep);
    case STEP_TYPE.CLICK:
      return writeClickStep(testStep);
  }
}

function writeVisitStep(testStep: TestStepVisit) {
  return `    cy.visit('${testStep.value}');`;
}

function writeShouldStep(testStep: TestStepShould) {
  return `    cy.get('${testStep.target}').should('${testStep.comparison}', '${testStep.value}');`;
}

function writeFillStep(testStep: TestStepFill) {
  return `    cy.get('${testStep.target}').type('${testStep.value}');`;
}

function writeClickStep(testStep: TestStepClick) {
  return `    cy.get('${testStep.value}').click();`;
}
