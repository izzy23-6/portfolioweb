describe("Home", () => {
  beforeEach(() => {
    // Because we're only testing the homepage
    // in this test file, we can run this command
    // before each individual test instead of
    // repeating it in every test.
    cy.visit("/");
  });

  it("Should display the main headline.", () => {
    // By using `data-qa` selectors, we can separate
    // CSS selectors used for styling from those used
    // exclusively for testing our application.
    // See: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
cy.server();
// Route the API request to a stubbed response.
cy.route({
  method: "GET",
  url: "/api/skills*",
  response: { name: "Python" }
});
cy.visit("/");

  cy.get('[data-cy="name"]').should('contain', 'Python');
  });
});
