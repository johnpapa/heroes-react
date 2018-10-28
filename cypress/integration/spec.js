context('Heroes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('nav ul.menu-list a')
      .contains('Heroes')
      .click();
  });

  specify('Contains Ragnar', () => {
    cy.get('.list .name').contains('Ragnar Lothbrok');
  });

  specify('Contains 6 heroes', () => {
    cy.get('.list .name').should('have.length', 6);
  });

  context('Ragnar Details', () => {
    beforeEach(() => {
      cy.get('.list .name')
        .contains('Ragnar')
        .click();
    });

    specify('Highlights Ragnar', () => {
      cy.get('.list li .box')
        .filter('.selected')
        .should('have.length', 1);
    });

    specify('Shows Details for Ragnar', () => {
      // cy.get('.editarea input.name').contains('Ragnar');
      cy.get('.editarea input.name').should('be.visible');
    });
  });
});
