import { faker } from "@faker-js/faker";

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

function generateSpecialWord() {
  const randomWord = faker.lorem.words(1);
  const specialChars = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
  const randomSpecialChar =
    specialChars[Math.floor(Math.random() * specialChars.length)];
  return randomWord + randomSpecialChar;
}

describe("Cambiar lenguaje", () => {
  beforeEach(() => {
    login();
  });

  // Función para generar un nombre de archivo basado en la fecha y hora
  const timestamp = () => {
    const now = new Date();
    return now.toISOString().replace(/:/g, '-').replace(/\..+/, '');
  };

  // Función auxiliar para esperar y tomar screenshot
  const waitAndScreenshot = (name) => {
    cy.wait(1000);
    cy.screenshot(`${name}_${timestamp()}`);
  };

  // Iniciar sesión antes de cada prueba
  beforeEach(() => {
    cy.visit('http://165.22.184.25:3001/ghost');
    cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
    cy.get('input[name="password"]').type('Automatizacion123');
    cy.get('.login').click();
    cy.url().should('include', '/dashboard'); // Asegurarse de que el inicio de sesión fue exitoso
    waitAndScreenshot('login');
  });

  // Función para generar texto aleatorio
  const generateRandomText = (length) => {
    return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
  };

  // Función para generar texto con caracteres especiales
  function generateSpecialCharacters(length) {
    const specialChars = "!@#$%^&*()_+{}:\"<>?[];',./`~";
    let result = '';
    for (let i = 0; i < length; i++) {
      result += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
    return result;
  }


  it('Creates a new post with Faker content', () => {
    cy.contains('Posts').click();
    waitAndScreenshot('2');

    cy.contains('New post').click();
    waitAndScreenshot('3');

    // Usar Faker para generar título y contenido del post
    const randomTitle = faker.lorem.sentence();
    const randomContent = faker.lorem.paragraph();
    cy.get('*[placeholder="Post title"]').type(randomTitle);
    cy.get('p').type(randomContent);
    waitAndScreenshot('4');

    cy.contains('Publish').click();
    waitAndScreenshot('5');

    cy.get('.gh-publish-cta > .gh-btn > span').click();
    waitAndScreenshot('6');

    cy.contains('Publish post, right now').click();
    waitAndScreenshot('7');

    cy.contains("Boom. It’s out there.").should('be.visible');
    waitAndScreenshot('8');
  });

  it('Edits an existing post with Faker content', () => {
    cy.contains('Posts').click();
    waitAndScreenshot('9');

    cy.get('[class="gh-content-entry-title"]').eq(0).click();
    waitAndScreenshot('10');

    // Editar título y contenido
    const editedTitle = faker.lorem.sentence();
    const editedContent = faker.lorem.paragraph();

    cy.get('*[placeholder="Post title"]').type(editedTitle);
    waitAndScreenshot('11');

    cy.get('p').eq(0).type(editedContent);
    waitAndScreenshot('12');

    cy.contains('Publish').click();
    waitAndScreenshot('13');

    cy.get('.gh-publish-cta > .gh-btn > span').click();
    waitAndScreenshot('14');

    cy.contains('Publish post, right now').click();
    waitAndScreenshot('15');

    cy.contains("Boom. It’s out there.").should('be.visible');
    waitAndScreenshot('16');
  });

  it('Creates a new tag with Faker content', () => {
    cy.contains('Tags').click();
    waitAndScreenshot('17');

    cy.contains('New tag').click();
    waitAndScreenshot('18');

    // Usar Faker para generar título, color y contenido del tag
    const randomName = faker.lorem.sentence();
    const randomColor = faker.internet.color().slice(1);;
    const randomDescription = faker.lorem.paragraph();

    cy.get('#tag-name').type(randomName);
    waitAndScreenshot('19');

    cy.get('[data-test-input="accentColor"]').type(randomColor);
    waitAndScreenshot('20');

    cy.get('[name="description"]').type(randomDescription);
    waitAndScreenshot('21');

    cy.contains('Save').click();
    waitAndScreenshot('22');

    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view').should('exist');
    waitAndScreenshot('23');
  });

  it('Edits an existing tag with Faker content', () => {
    cy.contains('Tags').click();
    waitAndScreenshot('24');

    cy.get('[class="gh-tag-list-name"]').eq(0).click();
    waitAndScreenshot('25');

    // Usar Faker para generar título, color y contenido del tag
    const randomName = faker.lorem.sentence();
    const randomColor = faker.internet.color().slice(1);;
    const randomDescription = faker.lorem.paragraph();

    cy.get('#tag-name').type(randomName);
    waitAndScreenshot('26');

    cy.get('[data-test-input="accentColor"]').type(randomColor);
    waitAndScreenshot('27');

    cy.get('[name="description"]').type(randomDescription);
    waitAndScreenshot('28');

    cy.contains('Save').click();
    waitAndScreenshot('29');

    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view').should('exist');
    waitAndScreenshot('30');
  });

  it('Creates a new draft with Faker content', () => {
    cy.contains('Drafts').click();
    waitAndScreenshot('31');

    cy.contains('New post').click();
    waitAndScreenshot('32');

    // Usar Faker para generar título y contenido del post
    const randomTitle = faker.lorem.sentence();
    const randomContent = faker.lorem.paragraph();
    cy.get('*[placeholder="Post title"]').type(randomTitle);
    cy.get('p').type(randomContent);
    waitAndScreenshot('33');

    cy.contains('Publish').click();
    waitAndScreenshot('34');

    cy.get('.gh-publish-cta > .gh-btn > span').click();
    waitAndScreenshot('35');

    cy.contains('Publish post, right now').click();
    waitAndScreenshot('36');

    cy.contains("Boom. It’s out there.").should('be.visible');
    waitAndScreenshot('37');
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

describe("Cambiar lenguaje con palabra aleatorio", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    cy.get('[data-test-nav="settings"]').click();

    cy.get('[data-testid="publication-language"]').contains("Edit").click();

    cy.get('input[type="text"][placeholder="Site language"]')
      .clear()
      .type(faker.lorem.words(1));

    cy.get('[data-testid="publication-language"]').contains("Save").click();
    cy.screenshot();
  });
});
describe("Cambiar lenguaje con caracteres especiales", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    cy.get('[data-test-nav="settings"]').click();

    cy.get('[data-testid="publication-language"]').contains("Edit").click();

    cy.get('input[type="text"][placeholder="Site language"]')
      .clear()
      .type(generateSpecialWord());

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

    cy.get("#tag-name").type(`#${faker.lorem.words(10)}`);

    cy.get('[data-test-button="save"]').click();
    cy.screenshot();
  });
});

describe("Creación tag interno con caracteres especiales", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navToTags();

    cy.get("#tag-name")
      .type('#tag-interno-con&caracteres%especiales#*()"')
      .should("have.value", '#tag-interno-con&caracteres%especiales#*()"');
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
describe("Creación tag con metadata de caracteres especiales", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navToTags();

    cy.get("#tag-name").type("tag-metada").should("have.value", "tag-metada");

    cy.get('button[type="button"]').contains("Expand").eq(0).click();

    cy.get("#meta-title").type("Meta title").should("have.value", "Meta title");

    cy.get("#meta-description").type(generateSpecialWord());

    cy.get('[data-test-button="save"]').click();
    cy.screenshot();
  });
});

describe("Creación tag con metadata que supera el limite maximo de caracteres", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navToTags();

    cy.get("#tag-name").type("tag-metada").should("have.value", "tag-metada");

    cy.get('button[type="button"]').contains("Expand").eq(0).click();

    cy.get("#meta-title").type("Meta title").should("have.value", "Meta title");

    cy.get("#meta-description").type(faker.lorem.words(200));

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

describe("Crear post con botón con craracteres especiales", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con botón")
      .should("have.value", "Post con botón");

    cy.get('p[data-koenig-dnd-droppable="true"]').type("/button{enter}");

    cy.get('[data-testid="button-input-text"]').type(generateSpecialWord());

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

describe("Crear post con link de youtube invalido", () => {
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
      .type("https://www.youtuberrr.com/watch?v=JFFq8xgBQZI&ab_channel=Rammor")
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

describe("Crear post con markdown invalido", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con Markdown")
      .should("have.value", "Post con Markdown");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/markdown{enter}");

    cy.get(".markdown-editor").type(`
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
describe("Crear post con link de X invalido", () => {
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
      .type(
        `https://xtwit.com/marcasatempo1999/status/1728499045058953716?s=20`
      )
      .type("{enter}");
    cy.wait(2000);

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

describe("Crear post con link de vimeo invalido", () => {
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
      .type(`https://vimeodos2012.com/877150472`)
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

describe("Crear post con bookmark invalido", () => {
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
      .type(`https://es.wikipediacolombia.org/wiki/Colombia`)
      .type("{enter}");
    cy.wait(3000);

    cy.screenshot();

    publishPost();
  });
});

describe("Crear post con bookmark vacio", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Post con bookmark")
      .should("have.value", "Post con bookmark");
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/bookmark{enter}");

    cy.get('[data-testid="bookmark-url"]').type(` `).type("{enter}");
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
        `https://open.spotifycolbog.com/intl-es/track/7iQXYTyuG13aoeHxGG28Nh?si=a0b7fd5f22fb43d0`
      )
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

    cy.get('[data-testid="embed-url"]').type(` `).type("{enter}");
    cy.wait(3000);

    cy.screenshot();

    publishPost();
  });
});
