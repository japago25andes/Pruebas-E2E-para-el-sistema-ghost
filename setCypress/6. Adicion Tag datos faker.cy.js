context('Aliasing', () => {

    it('6. Feature: Creacion tag nuevo member', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[href="#/tags/new/"]').click()
        cy.get('#tag-name').type('Nombre tag')
        cy.get('.input-color > .gh-input').type('52b337')
        cy.get('#tag-description').type('aca va la descripcion de los paragrafos')
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)   

    })

})
