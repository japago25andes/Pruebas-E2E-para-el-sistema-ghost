context('Aliasing', () => {

    it('3. Feature: Cambio de nombre de perfil', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#identification').type('j.pardog@uniandes.edu.co')
        cy.get('#password').type('pardo12345')
        cy.get('#ember5 > span').click()
        cy.wait(2000)
        cy.get('.gh-user-avatar').click()
        cy.get('#ember65').click()
        cy.get('#\\:rn\\:').clear().type('Leonardo Cardozo')
        cy.get('[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]"]').click()
        cy.get('[data-testid="owner-user"] > .flex > :nth-child(1)').contains('Leonardo Cardozo')
        cy.wait(2000)

    })

})
