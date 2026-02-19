/// <reference types="cypress"/>


describe("Funcionalidade: Contato", () => {

  it("Deve preencher fórmulario de contato com sucesso", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Gabriel')
    cy.get('#email').type('gabriel@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher nome", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#name').clear()
    cy.get('#email').type('gabriel@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });

  it("Deve validar mensagem de erro ao enviar sem preencher email", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Gabriel')
    cy.get('#email').clear()
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')

  });

  it("Deve validar mensagem de erro ao enviar sem preencher assunto", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Gabriel')
    cy.get('#email').type('gabriel@email.com')
    //cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it("Deve validar mensagem de erro ao enviar sem preencher a mensagem", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#name').type('Gabriel')
    cy.get('#email').type('gabriel@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').clear()
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });
  });
