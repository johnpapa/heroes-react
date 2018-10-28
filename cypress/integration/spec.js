/// <reference types="cypress" />

const hero = {
  id: 'HeroLagertha',
  name: 'Lagertha the Shieldmaiden',
  description: 'aka Hlaðgerðr',
};

context('Heroes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('nav ul.menu-list a')
      .contains('Heroes')
      .click();
  });

  specify(`Contains ${hero.name}`, () => {
    cy.get('.list .name').contains(hero.name);
  });

  specify('Contains 6 heroes', () => {
    cy.get('.list .name').should('have.length', 6);
  });

  context('Ragnar Details', () => {
    beforeEach(() => {
      cy.get('.list .name')
        .contains(hero.name)
        .click();
    });

    specify('Highlights Ragnar', () => {
      cy.get('.list li .box')
        .filter('.selected')
        .should('have.length', 1);
    });

    specify('Shows Details for ${hero.name}', () => {
      // this works
      cy.get('body').contains('Details');

      cy.get('.editarea input[name=id]').should('be.visible');
      cy.get('.editarea input[name=id]').should(
        'have.value',
        hero.id
      );
    });
  });
});
