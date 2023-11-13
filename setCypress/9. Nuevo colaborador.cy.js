context('Aliasing', () => {

    it('6. Feature: Creacion tag nuevo member', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('[href="#/settings/"]').click()
        cy.get('[href="#/settings/staff/"]').click()
        cy.get('[data-test-button="invite-staff-user"]').click()
        cy.wait(500)     
        cy.get('[class="email ember-text-field gh-input ember-view"]').type('prueba@gmail.com')
        cy.get('[data-test-option="Contributor"]').click()
        cy.get('[data-test-button="send-user-invite"]').click()
        cy.wait(2000)  
        

    })

})
