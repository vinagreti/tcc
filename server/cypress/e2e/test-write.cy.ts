describe("google test", () => {

  it("should have google title", () => {
    cy.visit("https://example.cypress.io/");
    cy.get("h1").should("have.text", "Kitchen Sink");
  });

  it("should have google title", () => {
    cy.visit("https://example.cypress.io/");
    cy.get("h1").should("have.text", "Kitchen Sink");
  });

});