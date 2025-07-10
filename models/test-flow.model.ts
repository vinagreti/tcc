export enum STEP_TYPE {
  SHOULD = "should",
  VISIT = "visit",
  CLICK = "click",
  FILL = "fill",
  URL = "URL",
}

export enum COMPARISON_TYPE {
  "have.text" = "have.text",
  "include.text" = "include.text",
  "be.empty" = "be.empty",
}

export type TestStepBaseProps = {
  type: STEP_TYPE;
  value: string;
};

export type TestStepShould = TestStepBaseProps & {
  type: STEP_TYPE.SHOULD;
  target: string;
  comparison: COMPARISON_TYPE;
};

export type TestStepVisit = TestStepBaseProps & {
  type: STEP_TYPE.VISIT;
};

export type TestStepClick = TestStepBaseProps & {
  type: STEP_TYPE.CLICK;
};

export type TestStepFill = TestStepBaseProps & {
  type: STEP_TYPE.FILL;
  target: string;
};

export type TestStepUrl = TestStepBaseProps & {
  type: STEP_TYPE.URL;
  target: string;
};

export type TestStep =
  | TestStepShould
  | TestStepVisit
  | TestStepClick
  | TestStepFill
  | TestStepUrl;

export type TestFlow = {
  itShould: string;
  steps: TestStep[];
};

export type TestSetAuthData = {
  url: string;
  usernameInput: string;
  username: string;
  passwordInput: string;
  password: string;
  successElement: string;
  successValue: string;
};

export type TestSet = {
  id: string;
  title: string;
  description: string;
  authorization?: boolean;
  authData?: TestSetAuthData;
  flows: TestFlow[];
};

export type TestsMap = { [key: string]: TestSet };

export type TestResult = {
  log: string;
  testName: string;
  files: string[];
};
