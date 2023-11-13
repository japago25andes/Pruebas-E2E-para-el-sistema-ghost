context('Aliasing', () => {


    it('1. Feature: Creacion de un nuevo tag', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[href="#/tags/new/"]').click()
        cy.get('#tag-name').type('Camiones')
        cy.get('.input-color > .gh-input').type('38C52D')
        cy.get('#tag-description').type('aca se escribe la descripcion del tag')
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)
    })

})
