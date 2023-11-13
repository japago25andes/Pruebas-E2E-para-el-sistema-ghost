import {faker} from '@faker-js/faker'

describe('Ghost Miguel Guatava', function() {
    beforeEach(()=>{
        cy.login('mf.guatava47@uniandes.edu.co', 'Sebas7912King*')
    });
   
   
    it('Adicion Tag datos faker', function(){
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[href="#/tags/new/"]').click()
        cy.get('#tag-name').type(faker.vehicle.vehicle())
        cy.get('.input-color > .gh-input').type('52b337')
        cy.get('#tag-description').type(faker.lorem.paragraph())
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)    
    })

    it('Edicion de un tag', function() {
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[class="gh-tag-list-name"]').contains('Motores').click()
        cy.get('#tag-name').type('Motores V12')
        cy.get('.input-color > .gh-input').type('38C52D')
        cy.get('#tag-description').type('Motores v12 de alta potencia')
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)      
    })

    
    it('Nuevo colaborador', function(){
        cy.get('[href="#/settings/"]').click()
        cy.get('[href="#/settings/staff/"]').click()
        cy.get('[data-test-button="invite-staff-user"]').click()
        cy.wait(500)     
        cy.get('[class="email ember-text-field gh-input ember-view"]').type('prueba@gmail.com')
        cy.get('[data-test-option="Contributor"]').click()
        cy.get('[data-test-button="send-user-invite"]').click()
        cy.wait(2000)     
    })
    
    it ('Cancelar invitacion contribuyente', function(){
        cy.get('[href="#/settings/"]').click()
        cy.get('[href="#/settings/staff/"]').click()
        cy.get('[class="apps-configured-action red-hover"]').click()
        cy.wait(2000)   
    })
    
    it('Seleccionar DarkMode', function(){
        
    })
})