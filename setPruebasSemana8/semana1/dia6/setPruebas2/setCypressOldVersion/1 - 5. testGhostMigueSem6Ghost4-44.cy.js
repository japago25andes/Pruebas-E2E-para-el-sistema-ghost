import {faker} from '@faker-js/faker'

describe('Ghost Miguel Guatava', function() {
    beforeEach(()=>{
        cy.login('mf.guatava47@uniandes.edu.co', 'Sebas7912King*')
    });
   
    //Caso 1
    it('1. Feature: Adicion Tag datos faker', function(){
        cy.get('#ember29').click()
        cy.get('[href="#/tags/"]').click()
        cy.get('[href="#/tags/new/"]').click()
        cy.get('#tag-name').type(faker.vehicle.vehicle())
        cy.get('.input-color > .gh-input').type('52b337')
        cy.get('#tag-description').type(faker.lorem.paragraph())
        //cy.get('[data-test-button="save"]').click()
        cy.contains('Save').click()
        
        cy.wait(2000)
        cy.screenshot('version4-44/addTag', {overwrite:true, disableTimersAndAnimations: false})
    })

    //Caso 2
    it('2. Feature: Creacion de un nuevo draft', () => {
        cy.get('[href="#/posts/?type=draft"]').click()
        cy.contains('New post').click()
        cy.get('[placeholder="Post title"]').type('Nuevo post')
        cy.get('[data-placeholder="Begin writing your post..."]').type('Nuevo post')
        //cy.get('[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').click()
        cy.contains("Publish").click()
        cy.get('[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.get('[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click()
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
        cy.get('[data-placeholder="Begin writing your post..."]').type('Nuevo post')
        cy.contains("Publish").click()
        cy.get('[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.get('[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click()
        cy.wait(2000)
        cy.screenshot('version4-44/newPost', {overwrite:true, disableTimersAndAnimations: false})
    })

   //Caso 5
   it('5. Feature: Creacion nuevo member', () => {
        cy.get('[href="#/settings/"]').click()
        cy.get('[href="#/settings/staff/"]').click()
        cy.contains('Invite people').click()
        cy.wait(500)     
        cy.get('[class="email ember-text-field gh-input ember-view"]').type('prueba@gmail.com')
        cy.contains('Send invitation now →').click()
        cy.wait(2000)   
        cy.screenshot('version4-44/newMember', {overwrite:true, disableTimersAndAnimations: false})
    })


})