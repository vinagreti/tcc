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
  const testInstructions = writeDescribe(testSet);
  console.log(testInstructions);
  return testInstructions.trim();
};

function sanitize(str: string) {
  return (str || "").replace(/'/g, "\\'");
}

function writeDescribe(testSet: TestSet) {
  return `//*** ${sanitize(testSet.name)} ***//\n\n// ${sanitize(
    testSet.description
  )}\n\ndescribe('${sanitize(testSet.name)}', () => {\n\n${writeIts(
    testSet
  )}\n\n});`;
}

function writeIts(testSet: TestSet) {
  return testSet.flows
    .map((flow) => {
      return writeIt(flow);
    })
    .join("\n\n");
}

function writeIt(testFlow: TestFlow) {
  return `  it('should ${sanitize(testFlow.itShould)}', () => {\n${writeSteps(
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
    case STEP_TYPE.URL:
      return writeClickStep(testStep as any);
    default:
      throw new Error(`Unknown step type ${testStep}`);
  }
}

function writeVisitStep(testStep: TestStepVisit) {
  return `    cy.visit('${sanitize(testStep.value)}');`;
}

function writeShouldStep(testStep: TestStepShould) {
  return `    cy.get('${sanitize(testStep.target)}').should('${sanitize(
    testStep.comparison
  )}', '${sanitize(testStep.value)}');`;
}

function writeFillStep(testStep: TestStepFill) {
  return `    cy.get('${sanitize(testStep.target)}').type('${sanitize(
    testStep.value
  )}');`;
}

function writeClickStep(testStep: TestStepClick) {
  return `    cy.get('${sanitize(testStep.value)}').click();`;
}
