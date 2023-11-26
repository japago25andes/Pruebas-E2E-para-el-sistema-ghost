Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

function login() {
  cy.visit("http://165.22.184.25:3001/ghost/#/signin");
  cy.get("#identification")
    .type("automatizacion@yopmail.com")
    .should("have.value", "automatizacion@yopmail.com");
  cy.get("#password")
    .type("Automatizacion123")
    .should("have.value", "Automatizacion123");
  cy.get('button[type="submit"]').click();
}

function navToTags() {
  cy.get('[data-test-nav="tags"]').click();
  cy.get('a.gh-btn[href="#/tags/new/"]').eq(0).click();
  cy.screenshot();
}

function navigateToPosts() {
  cy.get('[data-test-nav="posts"]').click();
  cy.get('a[href="#/editor/post/"]').eq(0).click();
  cy.screenshot();
}

function publishPost() {
  cy.get('[data-test-button="publish-flow"]').click();
  cy.get('[data-test-button="continue"]').click();
  cy.get('[data-test-button="confirm-publish"]').click();
  cy.screenshot();
}

describe("Change language", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    cy.get('[data-test-nav="settings"]').click();

    cy.get('[data-testid="publication-language"]').contains("Edit").click();

    cy.get('input[type="text"][placeholder="Site language"]')
      .clear()
      .type("es")
      .should("have.value", "es");

    cy.get('[data-testid="publication-language"]').contains("Save").click();
    cy.screenshot();
  });
});

describe("Creación tag interno", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navToTags();

    cy.get("#tag-name")
      .type("#tag-interno")
      .should("have.value", "#tag-interno");
    cy.get('[data-test-button="save"]').click();
    cy.screenshot();
  });
});

describe("Creación tag con metadata", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navToTags();

    cy.get("#tag-name").type("tag-metada").should("have.value", "tag-metada");

    cy.get('button[type="button"]').contains("Expand").eq(0).click();

    cy.get("#meta-title").type("Meta title").should("have.value", "Meta title");

    cy.get("#meta-description")
      .type("Meta description")
      .should("have.value", "Meta description");

    cy.get('[data-test-button="save"]').click();
    cy.screenshot();
  });
});

describe("Crear post con botón", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con botón")
      .should("have.value", "Post con botón");

    cy.get('p[data-koenig-dnd-droppable="true"]').type("/button{enter}");

    cy.get('[data-testid="button-input-text"]')
      .type("Botón test")
      .should("have.value", "Botón test");

    cy.get('[data-testid="button-input-url"]')
      .type("https://www.google.com")
      .should("have.value", "https://www.google.com");
    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con link de youtube", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con link de youtube")
      .should("have.value", "Post con link de youtube");

    cy.get('p[data-koenig-dnd-droppable="true"]').type("/youtube{enter}");

    cy.get('[data-testid="embed-url"]')
      .type("https://www.youtube.com/watch?v=JFFq8xgBQZI&ab_channel=Rammor")
      .type("{enter}");
    cy.wait(5000);
    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con markdown", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con Markdown")
      .should("have.value", "Post con Markdown");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/markdown{enter}");

    cy.get(".markdown-editor").type("# Heading level 1");
    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con HTML", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con html")
      .should("have.value", "Post con html");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/html{enter}");

    cy.get('.cm-content[contenteditable="true"]').type(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Prueba HTML</title>
    </head>
    <body>
        <h1>Hola, Mundo!</h1>
        <p>Esto es un párrafo de prueba.</p>
        <a href="https://www.ejemplo.com">Enlace de Ejemplo</a>
    </body>
    </html>

    `);
    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con link de X", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con link de X")
      .should("have.value", "Post con link de X");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/twitter{enter}");

    cy.get('[data-testid="embed-url"]')
      .type(`https://x.com/marca/status/1728499045058953716?s=20`)
      .type("{enter}");
    cy.wait(2000);

    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con link de X", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con link de X")
      .should("have.value", "Post con link de X");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/twitter{enter}");

    cy.get('[data-testid="embed-url"]')
      .type(`https://x.com/marca/status/1728499045058953716?s=20`)
      .type("{enter}");
    cy.wait(2000);
    cy.get(
      '[data-test-unsplash-photo="oem64GHBGH8"] > .gh-unsplash-photo-container > .gh-unsplash-photo-overlay > .gh-unsplash-photo-footer > .gh-unsplash-button'
    );
    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con link de vimeo", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con link de vimeo")
      .should("have.value", "Post con link de vimeo");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/vimeo{enter}");

    cy.get('[data-testid="embed-url"]')
      .type(`https://vimeo.com/877150472`)
      .type("{enter}");
    cy.wait(2000);

    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con bookmark", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con bookmark")
      .should("have.value", "Post con bookmark");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/bookmark{enter}");

    cy.get('[data-testid="bookmark-url"]')
      .type(`https://es.wikipedia.org/wiki/Colombia`)
      .type("{enter}");
    cy.wait(3000);

    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con spotify", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con spotify")
      .should("have.value", "Post con spotify");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/spotify{enter}");

    cy.get('[data-testid="embed-url"]')
      .type(
        `https://open.spotify.com/intl-es/track/7iQXYTyuG13aoeHxGG28Nh?si=a0b7fd5f22fb43d0`
      )
      .type("{enter}");
    cy.wait(3000);

    cy.screenshot();

    publishPost();
  });
});
