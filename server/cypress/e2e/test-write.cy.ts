describe("New test", () => {

  it("should have Kitchen Sink title", () => {
    cy.visit("https://example.cypress.io/");
    cy.get("h1").should("have.text", "Kitchen Sink");
  });

});