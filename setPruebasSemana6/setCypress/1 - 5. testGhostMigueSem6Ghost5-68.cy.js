import {faker} from '@faker-js/faker'

describe('Ghost Miguel Guatava', function() {
    beforeEach(()=>{
        cy.login('automatizacion@yopmail.com', 'Automatizacion')
    });
   
  
    //Caso 1
    it('1. Feature: Adicion Tag datos faker', function(){
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[href="#/tags/new/"]').click()
        cy.get('#tag-name').type(faker.vehicle.vehicle())
        cy.get('.input-color > .gh-input').type('52b337')
        cy.get('#tag-description').type(faker.lorem.paragraph())
        cy.get('[data-test-button="save"]').click()
        cy.wait(2000)
        cy.screenshot('version4-44/addTag', {overwrite:true, disableTimersAndAnimations: false})
    })

    
    //Caso 2
    it('2. Feature: Creacion de un nuevo draft', () => {
        cy.get('#ember25 > .gh-nav-viewname').click()
        cy.get('[class="view-actions-top-row"]').click()
        cy.get('[placeholder="Post title"]').type('Nuevo post')
        cy.get('[class="kg-prose"]').type('Descripcion escritura del nuevo post')
        cy.get('[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').click()
        cy.get('[class="gh-btn gh-btn-black gh-btn-large"]').click()
        cy.get('[data-test-button="confirm-publish"]').click()
        cy.wait(2000)
        cy.screenshot('version4-44/newDraft', {overwrite:true, disableTimersAndAnimations: false})
    })

    //Caso 3
     it('3. Feature: Cambio de nombre de perfil', () => {
        cy.get('#ember33').click()
        cy.contains('Your profile').click()
        cy.get('#user-name').type('Miguel Guatava');
        cy.contains('Save').click()
        cy.wait(2000)
        cy.screenshot('version4-44/changeName', {overwrite:true, disableTimersAndAnimations: false})
    })

    //Caso 4
    it('4. Feature: Creacion de un nuevo POST', function() {
        cy.get('[title="New post"]').click()
        cy.get('*[placeholder="Post title"]').type('Nuevo post');
        cy.get('p').type('Se hace una descripcion del nuevo post para la prueba')
        cy.get('.darkgrey > span').click()
        cy.get('.gh-publish-cta > .gh-btn > span').click()
        cy.contains('Publish post, right now').click()
        cy.wait(2000)
        cy.screenshot('version4-44/newPost', {overwrite:true, disableTimersAndAnimations: false})
    })

    //Caso 5
    it('5. Feature: Creacion nuevo member', () => {
        cy.get('[href="#/settings/"]').click()
        cy.get('[href="#/settings/staff/"]').click()
        cy.get('[data-test-button="invite-staff-user"]').click()
        cy.wait(500)     
        cy.get('[class="email ember-text-field gh-input ember-view"]').type('prueba@gmail.com')
        cy.get('[data-test-option="Contributor"]').click()
        cy.get('[data-test-button="send-user-invite"]').click()
        cy.wait(2000)   
        cy.screenshot('version4-44/newMember', {overwrite:true, disableTimersAndAnimations: false})

    })



})