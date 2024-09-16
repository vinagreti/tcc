export enum STEP_TYPE {
  SHOULD = "should",
  VISIT = "visit",
  CLICK = "click",
  WRITE = "write",
}

export enum COMPARISON_TYPE {
  "have.text" = "have.text",
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

export type TestStep = TestStepShould | TestStepVisit;

export type TestFlow = {
  itShould: string;
  steps: TestStep[];
};

export type TestSet = {
  id: string;
  name: string;
  description: string;
  flows: TestFlow[];
};

export type TestsMap = { [key: string]: TestSet };
