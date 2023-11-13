context('Aliasing', () => {

    it('5. Feature: Creacion nuevo member', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('#ember30').click()
        cy.get('[class="ember-view gh-btn gh-btn-primary"]').click()
        cy.get('#member-name').type('John Jairo Vasques')
        cy.get('#member-email').type('john@gmail.com')
        cy.get('#member-note').type('En este lugar se ingresa la informacion que se requiera de un miembro')
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)

    })

})
