/// <reference types="cypress"/>

describe('Testes de busca e compra de produtos',()=>{

    beforeEach(()=>{
        cy.visit('https://advantageonlineshopping.com/#/')
    })

    it.only('Registra um usuário no sistema', () => {
        cy.get('#menuUserLink').click()
        cy.get('a.create-new-account').click();
        cy.contains('h3', 'CREATE ACCOUNT').should('be.visible')
        cy.get('input[name="usernameRegisterPage"]').type('userTeste')
        cy.get('input[name="emailRegisterPage"]').type('Teste@email.com')
        cy.get('input[name="passwordRegisterPage"]').type('1User')
        cy.get('[a-hint="Confirm password"] > .inputContainer > label').type('1User')
        cy.get('input[name="i_agree"]').click()
        cy.get('#register_btn').click();





    });
    
    it('Faz login de um usuário no sistema', () => {
        cy.get('#menuUserLink').click()
        cy.get('input[name="username"]').type('');
        cy.get('input[name="password"]').type('');

    });

    it('Realiza a busca de um tablet e valida sua existencia', () => {
        cy.get('#searchSection', {timeout: 10000})
        cy.get('#searchSection').invoke('show').click()
        cy.get('#autoComplete').type('tablets{enter}')
        cy.get('a.productName').contains('HP ElitePad 1000 G2 Tablet').should('be.visible').click()
        cy.get('button[name="save_to_cart"]').should('be.visible')
    });

    it('adiciona e valida a existencia de um produto no carrinho', () => {
        cy.get('#searchSection', {timeout: 10000})
        cy.get('#searchSection').invoke('show').click()
        cy.get('#autoComplete').type('tablets{enter}')
    });

    
})