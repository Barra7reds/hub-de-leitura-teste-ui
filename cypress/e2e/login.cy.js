/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer o login com sucesso', () => {
       cy.visit('http://localhost:3000/index.html') 
       cy.visit('http://localhost:3000/login.html')
       cy.get('#email').type('teste1@teste.com')
       cy.get('#password').type('teste2134')
       cy.get('#login-btn').click()
       
    });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('teste1@teste.com', 'teste2134')
    });

    it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer login com sucesso - Usando importação da massa de dados', () => {
         cy.login(user.email, user.password)
        })
    
});