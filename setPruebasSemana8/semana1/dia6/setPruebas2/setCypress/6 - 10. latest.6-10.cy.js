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

describe("Casos de prueba 6 - 10", function () {
  beforeEach(() => {
    login();
  });

  it("Edicion de un tag", function () {
    cy.get("#ember29").click();
    cy.get('[href="#/tags/"]').click();
    cy.get('a[title="Edit tag"].gh-list-data.gh-tag-list-title').eq(0).click();

    cy.get("#tag-name").type("Motores V12");
    cy.get(".input-color > .gh-input").type("38C52D");
    cy.contains(".gh-btn.gh-btn-primary.gh-btn-icon", "Save").click();
    cy.wait(2000);
    cy.get(".gh-main ").scrollTo("top");
    cy.screenshot("version5/editTag", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });

    cy.get("#tag-name").clear().type("Default name");
    cy.get(".input-color > .gh-input").type("FFFFFF");
    cy.contains(".gh-btn.gh-btn-primary.gh-btn-icon", "Save").click();
    cy.wait(1000);
  });

  it("Cambiar titulo", function () {
    cy.get('[href="#/settings/"]').click();
    cy.contains("button.text-green", "Edit").click();
    cy.get('input[type="text"][placeholder="Site title"]')
      .clear()
      .type("Automatizacion Test");
    cy.contains("button", "Save").click();

    cy.screenshot("version5/changeTitle", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(3000);
    cy.contains("button.text-green", "Edit").click();
    cy.get('input[type="text"][placeholder="Site title"]')
      .clear()
      .type("Default");
    cy.contains("button", "Save").click();
  });

  it("Seleccionar DarkMode", function () {
    cy.get(".nightshift-toggle").click();
    cy.screenshot("version5/darkMode", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(2000);
    cy.get(".nightshift-toggle").click();
  });

  it("Nuevo colaborador", function () {
    cy.get('[href="#/settings/"]').click();
    cy.contains("a", "Staff").click();
    cy.contains("button", "Invite people").click();
    cy.wait(500);
    cy.get('input[type="text"][placeholder="jamie@example.com"]').type(
      "prueba@gmail.com"
    );
    cy.contains("button", "Send invitation now").click();
    cy.screenshot("version5/newColab", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
    cy.wait(5000);
  });

  it("Cancelar invitacion contribuyente", function () {
    cy.get('[href="#/settings/"]').click();
    cy.contains("a", "Staff").click();
    cy.get('button[title="Invited"]').click();
    cy.wait(2000);
    cy.contains("span", "Revoke").parents("button").click({ force: true });
    cy.wait(2000);
    cy.screenshot("version5/revokeColab", {
      overwrite: true,
      disableTimersAndAnimations: false,
    });
  });
});
