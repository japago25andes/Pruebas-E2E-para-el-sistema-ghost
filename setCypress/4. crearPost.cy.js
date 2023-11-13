context('Aliasing', () => {

    it('4. Feature: Creacion de un nuevo post', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('[title="New post"]').click()
        cy.get('#ember68').type('Nuevo post')
        cy.get('p').type('Se hace una descripcion del nuevo post para la prueba')
        cy.get('.darkgrey > span').click()
        cy.get('.gh-publish-cta > .gh-btn > span').click()
        cy.get('#ember80 > span').click()
        cy.get('.gh-post-bookmark-title').contains('Nuevo post')
        cy.wait(2000)

    })

})
