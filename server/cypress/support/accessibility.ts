export function printHumanReadbleAccessibilityLog(violations: any[]) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );

  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes, help }: any) => ({
      id, // the id of the rule this also helps us in configuring custom action for a rule.
      impact, // criticality of the violation
      description, // description of the violation
      nodes: nodes.length, //how many times the violation occured
      help, // help on how to fix the violation
    })
  );

  // calling the table funtion to print these logs
  cy.task("table", violationData);
}
