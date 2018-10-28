context('Heroes', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('nav ul.menu-list a').contains('Heroes').click();
  });

  specify('Contains Ragnar', function() {
    cy.get('.list .name').contains('Ragnar Lothbrok');
  });

  specify('Contains 6 heroes', function() {
    cy.get('.list .name').should('have.length', 6);
  });

  specify('Selects Ragnar', function() {
    cy.get('.list .name')
      .contains('Ragnar')
      .click();
    cy.get('.list li .box')
      .filter('.selected')
      .should('have.length', 1);

    // cy.get('.editarea input.name').contains('Ragnar');
    // cy.get('.editarea input.name').should('be.visible');
  });
});
