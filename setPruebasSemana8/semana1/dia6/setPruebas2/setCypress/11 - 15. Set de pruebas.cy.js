function login() {
  cy.visit('http://localhost:2369/ghost/#/signin');
  cy.get('#identification').type('daniel@yopmail.com').should('have.value', 'daniel@yopmail.com');
  cy.get('#password').type('danielforerodeveloper').should('have.value', 'danielforerodeveloper');
  cy.get('button[type="submit"]').click(); 
}

function navToTags() {
  cy.get('[data-test-nav="tags"]')
  .click()

  cy.get('a.gh-btn[href="#/tags/new/"]')
  .eq(0)
  .click()
}

describe('Change language', () => {
  beforeEach(() => {
    login();
  });

  it('passes', () => {
    cy.get('[data-test-nav="settings"]')
    .click()

    cy.get('[data-testid="publication-language"] ')
    .contains('Edit')
    .click()

    cy.get('input[type="text"][placeholder="Site language"]')
    .clear()
    .type('es').should('have.value', 'es')

    cy.get('[data-testid="publication-language"] ')
    .contains('Save')
    .click()    });
});

describe('Creación tag interno', () => {
  beforeEach(() => {
    login();
  });

  it('passes', () => {
    navToTags();

    cy.get('#tag-name')
    .type('#tag-interno').should('have.value', '#tag-interno')

    cy.get('[data-test-button="save"]')
    .click()  });
});

describe('Creación tag con metadata', () => {
  beforeEach(() => {
    login();
  });

  it('passes', () => {
    navToTags();

    cy.get('#tag-name')
    .type('tag-metada').should('have.value', 'tag-metada')

    cy.get('button[type="button"]').contains('Expand')
    .eq(0)
    .click()

    cy.get('#meta-title')
    .type('Meta title').should('have.value', 'Meta title')

    cy.get('#meta-description')
    .type('Meta description').should('have.value', 'Meta description')

    cy.get('[data-test-button="save"]')
    .click()  });
});


describe('Crear post con botón', () => {
  beforeEach(() => {
    login();
  });

  it('passes', () => {

    cy.get('[data-test-nav="posts"]')
    .click()

    cy.get('a[href="#/editor/post/"]')
    .eq(0)
    .click()

    cy.get('.gh-editor-title.ember-text-area.gh-input')
    .type('Post con botón').should('have.value', 'Post con botón')

    cy.get('p[data-koenig-dnd-droppable="true"]')
    .type('/button')
    .type('{enter}')
  
    cy.get('[data-testid="button-input-text"]')
    .type('Botón test').should('have.value', 'Botón test')

    cy.get('[data-testid="button-input-url"]')
    .type('https://www.google.com').should('have.value', 'https://www.google.com')

    cy.get('[data-test-button="publish-flow"]')
    .click()

    cy.get('[data-test-button="continue"]')
    .click()

    cy.get('[data-test-button="confirm-publish"]')
    .click()  

});
});

