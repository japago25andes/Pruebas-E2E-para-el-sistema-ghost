Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

function login() {
  cy.visit("http://68.183.128.146:3001/ghost");
  cy.get('input[name="identification"]')
    .type("automatizacion@yopmail.com")
    .should("have.value", "automatizacion@yopmail.com");
  cy.get(".password")
    .type("Automatizacion")
    .should("have.value", "Automatizacion");
  cy.get('button[type="submit"]').click();
}

describe("Casos de prueba 6 - 10", function () {
  beforeEach(() => {
    login();
  });

  it("Edicion de un tag", function () {
    cy.get("#ember29").click();
    cy.get('[href="#/tags/"]').click();
    cy.get('a[title="Edit tag"].gh-list-data.gh-tag-list-title').eq(0).click();

    cy.get("#tag-name").clear().type("Motores V12", { force: true });
    cy.get(".input-color > .gh-input").type("38C52D");
    cy.contains(".gh-btn.gh-btn-primary.gh-btn-icon", "Save").click();
    cy.get(".gh-main ").scrollTo("top");
    cy.wait(2000);
    cy.screenshot("version4/editTag", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });

    cy.get("#tag-name").clear().type("Default test", { force: true });
    cy.get(".input-color > .gh-input").type("FFFFFF");
    cy.contains(".gh-btn.gh-btn-primary.gh-btn-icon", "Save").click();
    cy.wait(2000);
  });

  it("Cambiar titulo", function () {
    cy.get('[href="#/settings/"]').eq(0).click();
    cy.get('a[href="#/settings/general/"]').click();
    cy.contains("button", "Expand").click();
    cy.get(".gh-main ").scrollTo("top");

    cy.get(".ember-text-field.gh-input.ember-view")
      .eq(0)
      .clear()
      .type("Automatizacion Test", { force: true });
    cy.get(".gh-main ").scrollTo("top");
    cy.contains("button", "Save").click();
    cy.screenshot("version4/changeTitle", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(3000);
    cy.get(".ember-text-field.gh-input.ember-view")
      .eq(0)
      .clear()
      .type("Default", { force: true });
    cy.get(".gh-main ").scrollTo("top");

    cy.contains("button", "Save").click();
  });

  it("Seleccionar DarkMode", function () {
    cy.get(".nightshift-toggle").click();
    cy.screenshot("version4/darkMode", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(2000);
    cy.get(".nightshift-toggle").click();
  });

  it("Nuevo colaborador", function () {
    cy.contains("a", "Staff").click();
    cy.contains("button", "Invite people").click();
    cy.wait(500);
    cy.get('input[name="email"]').type("prueba@gmail.com");
    cy.contains("button", "Send invitation now").click();
    cy.screenshot("version4/newColab", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(5000);
  });

  it("Cancelar invitacion contribuyente", function () {
    cy.contains("a", "Staff").click();
    cy.contains("a", "Revoke").click();
    cy.wait(1000);

    cy.screenshot("version4/revokeColab", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(1000);
  });
});
