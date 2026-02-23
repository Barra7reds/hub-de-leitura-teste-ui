/// <reference types="cypress"/>


describe('Funcionalidade: Catálogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve clicar no botão Adicionar á cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', '1')
    });

    it('Deve clicar em todos os botões Adicionar a cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
    });

    it('Deve clicar no primeiro botão de Adicionar a cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no último botão de Adicionar a cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('Deve clicar no terceiro botão de Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    });

    it('Deve clicar no sétimo botão Adicionar a cesta usando o contains', () => {
        cy.get('.btn-primary').eq(7).click()

    });

    it('Deve clicar no botão Adicionar a cesta do livro "O Senhor dos Anéis"', () => {
        cy.contains('Dom Quixote').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
    });


});