/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro de leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    it('Deve fazer cadastro com sucesso, usando a função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Gabriel Melo')
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('teste123')
        cy.get('#confirm-password').type('teste123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        // Falhando de propósito para validar o vídeo de falha - "dashboard"
    });


    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11999999999')
        cy.get('#password').type('teste123')
        cy.get('#confirm-password').type('teste123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
        cadastroPage.preencherCadastro('Gabriel Melo', `teste${Date.now()}@teste.com`, '11999999999', 'teste123', 'teste123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve validar mensagens ao tentar cadastrar sem preencher o nome', () => {
        cadastroPage.preencherCadastro ('', ``, '11992299999', 'teste123', 'teste123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
    });

    
});
