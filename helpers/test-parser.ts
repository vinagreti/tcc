import {
  COMPARISON_TYPE,
  STEP_TYPE,
  TestFlow,
  TestSet,
  TestSetAuthData,
  TestStep,
  TestStepClick,
  TestStepShould,
} from "./../models/test-flow.model";

export const testParser = (testSet: TestSet) => {
  const testInstructions = writeDescribe(testSet);
  // console.log(testInstructions);
  return testInstructions.trim();
};

function sanitize(str: string) {
  return (`${str}` || "").replace(/'/g, "\\'");
}

function writeDescribe(testSet: TestSet) {
  const hasSession = testSet.authorization && !!testSet.authData;
  const hasBeforeEach = hasSession;
  const hasAccessibility = true;
  const hasBefore = hasAccessibility;

  let template = `import { printHumanReadbleAccessibilityLog } from "./../../support/accessibility";\n\n`;
  template += `//*** ${sanitize(testSet.title)} ***//`;
  template += `\n// ${sanitize(testSet.description)}`;
  template += `\ndescribe('${sanitize(testSet.title)}', () => {\n`;
  //if (hasBefore) template += `\n${writeBefore(testSet)}\n`;
  if (hasBeforeEach) template += `\n${writeBeforeEach(testSet)}\n`;
  template += `\n${writeIts(testSet)}\n\n});`;
  return template;
}

function writeBeforeEach(testSet: TestSet) {
  const hasSession = testSet.authorization && !!testSet.authData;
  return `  beforeEach(() => {\n${
    hasSession ? writeSession(testSet.authData!) : ""
  }\n  });`;
}

function writeSession(authData: TestSetAuthData) {
  return `    cy.session('Authorizations', () => {\n  ${writeVisitStep(
    authData.url
  )}\n  ${writeFillStep(
    authData.usernameInput,
    authData.username
  )}\n  ${writeFillStep(
    authData.passwordInput,
    authData.password,
    true
  )}\n  ${writeShouldStep({
    target: authData.successElement,
    value: authData.successValue,
    comparison: COMPARISON_TYPE["include.text"],
  } as TestStepShould)}\n    });`;
}

function writeAccessibility() {
  return `   cy.injectAxe();\n    cy.checkA11y(null, undefined, printHumanReadbleAccessibilityLog, true);`;
}

function writeBefore(testSet: TestSet) {
  const hasAccessibility = true;
  return `  before(() => {\n${hasAccessibility ? addAxios() : ""}\n  });`;
}

function addAxios() {
  return `   cy.injectAxe();`;
}

function writeIts(testSet: TestSet) {
  return testSet.flows
    .map((flow, itIndex) => {
      return writeIt(flow, itIndex);
    })
    .join("\n\n");
}

function writeIt(testFlow: TestFlow, itIndex: number) {
  return `  it('${itIndex}: should ${sanitize(
    testFlow.itShould
  )}', () => {\n${writeSteps(
    testFlow
  )}\n    cy.screenshot('${itIndex}');\n ${writeAccessibility()}\n  });`;
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
      return writeVisitStep(testStep.value);
    case STEP_TYPE.SHOULD:
      return writeShouldStep(testStep);
    case STEP_TYPE.FILL:
      return writeFillStep(testStep.target, testStep.value);
    case STEP_TYPE.CLICK:
      return writeClickStep(testStep);
    case STEP_TYPE.URL:
      return writeClickStep(testStep as any);
    default:
      throw new Error(`Unknown step type ${testStep}`);
  }
}

function writeVisitStep(url: string) {
  return `    cy.visit('${sanitize(url)}');`;
}

function writeShouldStep(testStep: TestStepShould) {
  return `    cy.get('${sanitize(testStep.target)}').should('${sanitize(
    testStep.comparison
  )}', '${sanitize(testStep.value)}');`;
}

function writeFillStep(target: string, value: string, enter?: boolean) {
  return `    cy.get('${sanitize(target)}').type('${sanitize(value)}${
    enter ? "{enter}" : ""
  }');`;
}

function writeClickStep(testStep: TestStepClick) {
  return `    cy.get('${sanitize(testStep.value)}').click();`;
}
