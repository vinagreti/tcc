export enum STEP_TYPE {
  SHOULD = "should",
  VISIT = "visit",
}

export enum COMPARISON_TYPE {
  "have.text" = "have.text",
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

export type TestStep = TestStepShould | TestStepVisit;

export type TestFlow = {
  itShould: string;
  steps: TestStep[];
};

export type TestSet = {
  name: string;
  description: string;
  flows: TestFlow[];
};
