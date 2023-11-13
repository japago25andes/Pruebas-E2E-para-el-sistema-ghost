context('Aliasing', () => {

    it('2. Feature: Creacion de un nuevo draft', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('#ember25 > .gh-nav-viewname').click()
        cy.get('[class="view-actions-top-row"]').click()
        cy.get('[placeholder="Post title"]').type('Nuevo post')
        cy.get('[class="kg-prose"]').type('Descripciono escritura del nuevo post')
        cy.get('[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').click()
        cy.get('[class="gh-btn gh-btn-black gh-btn-large"]').click()
        cy.get('[data-test-button="confirm-publish"]').click()
        cy.wait(2000)

    })


})
