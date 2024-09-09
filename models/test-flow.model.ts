export enum STEP_TYPE {
  SHOULD = "should",
  VISIT = "visit",
}

export enum CHECK_TYPE {
  "have.text" = "have.text",
}

export type TestStep = {
  type: STEP_TYPE;
  target: string;
  should: CHECK_TYPE;
  value: string;
};

export type TestFlow = {
  itShould: string;
  steps: TestStep[];
};

export type TestSet = {
  name: string;
  description: string;
  flows: TestFlow[];
};
