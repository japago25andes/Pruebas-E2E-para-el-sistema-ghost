// Función para la funcionalidad 16: Edición de Publicaciones
function editPost(updatedContent) {
  cy.visit('http://68.183.128.146:3001/ghost');
  cy.get('#identification').type('<USERNAME>');
  cy.get('#password').type('<PASSWORD>');
  cy.get('#ember5').click();
  cy.get('[data-test-nav="posts"]').click();
  cy.get('a[href="#/editor/post/"]').eq(0).click();
  cy.get('.gh-editor-title').clear().type('Publicación existente');
  cy.get('.koenig-editor__editor').clear().type(updatedContent);
  cy.get('[data-test-button="publish-flow"]').click();
  cy.get('[data-test-button="continue"]').click();
  cy.get('[data-test-button="confirm-publish"]').click();
}

// Función para la funcionalidad 17: Listado de Publicaciones en Ghost
function viewAllPosts() {
  cy.visit('http://68.183.128.146:3001/ghost');
  cy.get('#identification').type('<USERNAME>');
  cy.get('#password').type('<PASSWORD>');
  cy.get('#ember5').click();
  cy.get('[data-test-nav="posts"]').click();
  cy.get('a[href="#/"]').click();
}

// Función para la funcionalidad 18: Edición de una Etiqueta Existente en Ghost
function editTagColor(tagName, newColor) {
  cy.visit('http://68.183.128.146:3001/ghost');
  cy.get('#identification').type('<USERNAME>');
  cy.get('#password').type('<PASSWORD>');
  cy.get('#ember5').click();
  cy.get('[data-test-nav="tags"]').click();
  cy.get('a.gh-btn[href="#/tags/new/"]').eq(0).click();
  cy.get('#tag-name').type(tagName);
  cy.get('[name="accent-color"]').type(newColor);
  cy.get('#tag-description').type('Description for the tag');
  cy.get('[data-test-button="save"]').click();
}

// Función para la funcionalidad 19: Listado de Etiquetas en Ghost
function viewAllTags() {
  cy.visit('http://68.183.128.146:3001/ghost');
  cy.get('#identification').type('<USERNAME>');
  cy.get('#password').type('<PASSWORD>');
  cy.get('#ember5').click();
  cy.get('[data-test-nav="tags"]').click();
  cy.get('a[href="#/"]').click();
}




// Feature 16: Edición de Publicaciones

describe('Edición de Publicaciones', () => {
  beforeEach(() => {
    cy.visit('http://68.183.128.146:3001/ghost/');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion');
    cy.contains('Sign in').click();
    cy.contains('View site').click();
  });

  it('debería permitir a los usuarios editar publicaciones existentes', () => {
    cy.visit('http://68.183.128.146:3001/ghost/#/posts');

    cy.contains('Publicación existente').click();

    cy.get('[data-test-editor-content]').clear().type('<UPDATED LOREM>');

    cy.get('[data-test-button="publish-menu"]').click();
    cy.get('[data-test-button="publish"]').click();

    cy.url().should('include', '/posts');
    cy.get('.gh-notification-content').should('contain', 'Publicación actualizada.');

    // Tomar una captura de pantalla
    cy.screenshot('Edición de Publicaciones');
  });
});



// Feature 17. Listado de Publicaciones
describe('Listado de Publicaciones en Ghost', () => {
  beforeEach(() => {
    cy.visit('http://68.183.128.146:3001/ghost/');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion');
    cy.contains('Sign in').click();
    cy.contains('View site').click();
  });

  it('debería permitir a los usuarios ver un listado de todas las publicaciones', () => {
    cy.visit('http://68.183.128.146:3001/ghost/#/posts');

    cy.url().should('include', '/posts');
    cy.get('[data-test-post-list]').should('exist');
    
    // ... (resto de las validaciones)

    cy.get('[data-test-post-list-item] a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href').and('include', '/post/');
    });

    // Tomar una captura de pantalla
    cy.screenshot('Listado de Publicaciones');
  });
});

// Feature 18. Edición de una Etiqueta Existente

describe('Edición de una Etiqueta Existente en Ghost', () => {
  beforeEach(() => {
    cy.visit('http://68.183.128.146:3001/ghost/');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion');
    cy.contains('Sign in').click();
    cy.contains('View site').click();
  });

  it('debería permitir a los usuarios editar una etiqueta existente', () => {
    cy.visit('http://68.183.128.146:3001/ghost/#/tags');

    cy.contains('[data-test-tag-name]', 'Etiqueta existente').click();

    cy.get('#tag-color').clear().type('9900FF');

    cy.get('[data-test-button="save"]').click();

    cy.url().should('include', '/tags');
    cy.get('.gh-notification-content').should('contain', 'Configuración de etiqueta guardada.');

    // Tomar una captura de pantalla
    cy.screenshot('Edición de una Etiqueta Existente');
  });
});

// Feature 19. Listado de Etiquetas

describe('Listado de Etiquetas en Ghost', () => {
  beforeEach(() => {
    cy.visit('http://68.183.128.146:3001/ghost/');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion');
    cy.contains('Sign in').click();
    cy.contains('View site').click();
  });

  it('debería permitir a los usuarios ver un listado de todas las etiquetas', () => {
    cy.visit('http://68.183.128.146:3001/ghost/#/tags');

    cy.get('[data-test-tag-name]').should('exist');

    cy.get('[data-test-tag-name]').should('have.length.greaterThan', 0);

    cy.get('[data-test-tag-name]').each((tag) => {
      cy.wrap(tag).should('contain', 'Nombre');
      cy.wrap(tag).should('contain', 'Color');
    });

    cy.get('[data-test-tag-name]').each((tag) => {
      cy.wrap(tag).click();
      cy.go('back');
    });

    // Tomar una captura de pantalla
    cy.screenshot('Listado de Etiquetas');
  });
});


//Feature 20:  Integraciones y Plugins

describe('Integraciones y Plugins en Ghost', () => {
  beforeEach(() => {
    cy.visit('http://68.183.128.146:3001/ghost/');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion');
    cy.contains('Sign in').click();
    cy.contains('View site').click();
  });

  it('debería permitir a los usuarios integrar la aplicación con otras herramientas y añadir plugins', () => {
    cy.visit('http://68.183.128.146:3001/ghost/#/integrations');

    cy.get('[data-test-integration-name]').should('exist');

    cy.get('[data-test-integration-name]').should('have.length.greaterThan', 0);

    cy.get('[data-test-integration-name]').each((integration) => {
      cy.wrap(integration).should('contain', 'Nombre');
      cy.wrap(integration).should('contain', 'Descripción');
    });

    cy.get('[data-test-integration-name]').each((integration) => {
      cy.wrap(integration).click();
      cy.go('back');
    });

    // Tomar una captura de pantalla
    cy.screenshot('Integraciones y Plugins');
  });
});