context('Aliasing', () => {

    it('6. Feature: Creacion tag nuevo member', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        if (cy.get('[class="nightshift-toggle on"]').length > 0){
            cy.get('[class="nightshift-toggle on"]').click();
        }else{
            cy.get('[class="nightshift-toggle"]').click();
        }
        

    })

})
