/// <reference types="cypress" />
/* eslint-env mocha */
/* global cy */

import data from '../../db';

const hero = data.heroes[3];
const heroCount = 6;
const heroToDelete = data.heroes[5];
const newHero = {
  id: 'heroMadelyn',
  name: 'Madelyn',
  description: 'chief of theatre props'
};

const resetData = () =>
  cy.request('POST', 'http://localhost:3000/api/reset', data);

const containsHeroes = count =>
  cy.get('.list .name').should('have.length', count);

const detailsAreVisible = visible => {
  const val = visible ? '' : 'not.';
  return cy.get('.editarea input[name=id]').should(`${val}be.visible`);
};

context('Heroes', () => {
  beforeEach(() => {
    resetData().then(() => {
      cy.visit('http://localhost:3000');
      cy.get('nav ul.menu-list a')
        .contains('Heroes')
        .click();
    });
  });

  specify(`Contains ${hero.name}`, () => {
    cy.get('.list .name').contains(hero.name);
  });

  specify('Contains 6 heroes', () => {
    containsHeroes(heroCount);
  });

  specify(`Deletes ${heroToDelete.name}`, () => {
    cy.get(`.list .delete-item[data-id=${heroToDelete.id}]`).click();
    cy.get(`#modal [data-modal-response=yes]`).click();

    containsHeroes(heroCount - 1);
  });

  context(`${hero.name} Details`, () => {
    beforeEach(() => {
      resetData().then(() => {
        cy.get(`.list .edit-item[data-id=${hero.id}]`).click();
      });
    });

    specify(`Shows Details for ${hero.name}`, () => {
      const match = new RegExp(hero.id);
      detailsAreVisible(true);
      cy.get('.editarea input[name=id]')
        .invoke('val')
        .should('match', match);
    });

    specify(`Saves changes to ${hero.name}`, () => {
      const newDescription = 'slayer of javascript';
      cy.get('.editarea input[name=description]')
        .clear()
        .type(newDescription);
      cy.get('.editarea input[name=description]')
        .invoke('val')
        .should('not.match', new RegExp(hero.description))
        .and('match', new RegExp(newDescription));
      cy.get('.editarea .save-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(newDescription);
      containsHeroes(heroCount);
    });

    specify(`Cancels changes to ${hero.name}`, () => {
      const newDescription = 'slayer of javascript';
      cy.get('.editarea input[name=description]')
        .clear()
        .type(newDescription);
      cy.get('.editarea input[name=description]')
        .invoke('val')
        .should('not.match', new RegExp(hero.description))
        .and('match', new RegExp(newDescription));
      cy.get('.editarea .cancel-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(hero.description);
      containsHeroes(heroCount);
    });
  });

  context(`Add New Hero`, () => {
    beforeEach(() => {
      resetData().then(() => {
        cy.get('.content-container .add-button').click();
      });
    });

    specify(`Saves changes to ${newHero.name}`, () => {
      cy.get('.editarea input[name=name]')
        .clear()
        .type(newHero.name);
      cy.get('.editarea input[name=description]')
        .clear()
        .type(newHero.description);
      cy.get('.editarea .save-button').click();
      detailsAreVisible(false);
      cy.get('.list .description').contains(newHero.description);
      containsHeroes(heroCount + 1);
    });
  });
});
