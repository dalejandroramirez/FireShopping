/// <reference types="cypress" />

import { deleteTestUser } from "../../../src/firebase/usersController";

describe("Gestionar la gestion de usuarios", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("FireShopping");
  });

  it("Se renderiza Correctamente", () => {
    cy.contains("FireShopping");
  });

  it("Acceder a la ruta de login", () => {
    cy.contains("Login").click();
    cy.contains("Bienvenido al Login");
  });

  it("Acceder a la ruta de register", () => {
    const registerTittle = "Registrate si quieres!!!";
    cy.contains(registerTittle).should("not.exist");
    cy.contains("...o registrate").click();
    cy.contains(registerTittle).should("exist");
  });

  it("Registrar un usuario", async () => {
    await deleteTestUser();
    const email = "pruebacypress@ya.com";
    const password = "pruebacypress@ya.com";

    // cy.contains("...o registrate").click();
    // cy.get('input[placeholder="example@host.com"]').type(email);
    // cy.get(".claveregister").type(password);
    // cy.get(".submit-button").click()
    // cy.contains("Bienvenido a FireShopping")
  });

  it("Podemos iniciar sesión", () => {
    const email = "pruebacypress@ya.com";
    const password = "pruebacypress@ya.com";
    cy.contains("Login").click();
    cy.get(".correo-btn").type(email);
    cy.get(".password-btn").type(password);
    cy.get(".login-btn").click();
  });
});

describe("Testear la app de notas", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("FireShopping");
  });

  it("Aparece texto si no estamos logueados", () => {
    cy.get("div.list-route").click();
    const text = "Necesario estar logeado";
    cy.contains(text);
  });

  it("Posibilidad de escribir title y description", ()=> {
    const email = "pruebacypress@ya.com";
    const password = "pruebacypress@ya.com";
    cy.contains("Login").click();
    cy.get(".correo-btn").type(email);
    cy.get(".password-btn").type(password);
    cy.get(".login-btn").click();
    cy.get("div.list-route").click();
    cy.get('input[placeholder="Titulo"]').type("Titulo Nuevo")
    cy.get('textarea[placeholder="Description"]').type("Descripcion Nueva")
    cy.get(".btn-create-task").click();

  })
});
