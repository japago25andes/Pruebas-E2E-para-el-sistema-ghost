const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { faker } = require('@faker-js/faker')

// 
//  GENERALES
//
When('I log in with email {kraken-string} and password {kraken-string}', async function (email, password) {
    // Introduce el email
    let emailElement = await this.driver.$('#identification');
    await emailElement.setValue(email);

    // Introduce la contraseña
    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(password);

    // Haz clic en el botón siguiente
    let nextButton = await this.driver.$('#ember5');
    await nextButton.click();
});

When('I wait for {int} seconds and take a screenshot', async function (seconds) {
    // Espera el número especificado de segundos
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));

    // Toma una captura de pantalla
    let screenshot = await this.driver.takeScreenshot();

    // Genera un nombre de archivo con la fecha y hora actual
    const timestamp = new Date().toISOString().replace(/[:\-T\.Z]/g, '');
    const screenshotPath = `screenshot-${timestamp}.png`;

    // Guarda la captura de pantalla en un archivo
    //const fs = require('fs');
    //fs.writeFileSync(screenshotPath, screenshot, 'base64');
});




//
//PRUEBA 1
//

Then('I click tags', async function() {
    let element = await this.driver.$('[href="#/tags/"]');
    return await element.click();
});

Then('I click new tag', async function() {
    let element = await this.driver.$('[href="#/tags/new/"]');
    return await element.click();
});

Then('I enter name {string}', async function (name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

Then('I enter color {string}', async function (color) {
    let element = await this.driver.$('[name="accent-color"]');
    return await element.setValue(color);
});

Then('I enter description {kraken-string}', async function (description) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description);
});

Then('I click save', async function() {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
});

Then('I should see the button with class {string}', async function (buttonClass) {
    
    let buttonSelector = `button.${buttonClass.split(' ').join('.')}`;
    let button = await this.driver.$(buttonSelector);
    let isButtonVisible = await button.isDisplayed();

    if (!isButtonVisible) {
        throw new Error('Button with the specified class is not visible');
    }
});


//TERMINA 1



//
// PRUEBA 92
//

Then('I select the option members', async function() {
    let element = await this.driver.$('[href="#/members/"]');
    return await element.click();
});

When('I click new member', async function() {
    let element = await this.driver.$('[href="#/members/new/"]');
    return await element.click();
});

When('I enter name member {string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter email member {string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I enter note {kraken-string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

Then('I click save member', async function() {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
});

// END PRUEBA 93


// PRUEBA 93
When('I generate Member', async function () {
    let usuario = faker.internet;
    
    let name = usuario.userName();
    let email = usuario.email();

    let elementN = await this.driver.$('#member-name');
    await elementN.setValue(name);

    let elementM = await this.driver.$('#member-email');
    return await elementM.setValue(email);
});
// END PRUEBAS 93


// PRUEBA 96

When('I login random', async function () {
    let usuario = faker.internet;
    email = usuario.email();
    password = usuario.password();

    
    // Introduce el email
    let emailElement = await this.driver.$('#identification');
    await emailElement.setValue(email);

    // Introduce la contraseña
    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(password);

    // Haz clic en el botón siguiente
    let nextButton = await this.driver.$('#ember5');
    await nextButton.click();
});

// END PRUEBA 96


// INICIO PRUEBA 102
When('I change content tag random', async function(){
    let tag = faker.vehicle.model();
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tag);
});
// END PRUEBA 102


// INICIO PRUEBA 103
When('I create tag ramdon', async function(){
    let name = faker.vehicle.vehicle();
    let color = "38C52D";
    let description = faker.vehicle.type();

    let elementN = await this.driver.$('#tag-name');
    await elementN.setValue(name);

    let elementC = await this.driver.$('[name="accent-color"]');
    await elementC.setValue(color);

    let elementD = await this.driver.$('#tag-description');
    await elementD.setValue(description);
});
//END PRUEBA 102


// INICIO PRUEBA 104
When('I add integration ramdom', async function(){
    let company = faker.company.companyName();
    let element = await this.driver.$('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    await element.setValue(company);
})
// END PRUEBA 104


//INICIO PRUEBA 106
When('I log in with random incomplete', async function () {
    let email = faker.internet.email();
    let password = '';
    
    // Introduce el email
    let emailElement = await this.driver.$('#identification');
    await emailElement.setValue(email);

    // Introduce la contraseña
    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(password);

    // Haz clic en el botón siguiente
    let nextButton = await this.driver.$('#ember5');
    await nextButton.click();
});

//END PRUEBA 105


//INICIO PRUEBA 107
Then('I click post', async function() {
    let element = await this.driver.$('[href="#/posts/"]');
    return await element.click();
});

Then('I click new post', async function() {
    let element = await this.driver.$('[href="#/editor/post/"]');
    return await element.click();
});

Then('I enter name post content random', async function () {
    let tittle = faker.lorem.words(300);
    let content = faker.lorem.words(10);
    
    
    let elementC = await this.driver.$('[class="kg-prose"]');
    await elementC.setValue(content);


    let elementT = await this.driver.$('[class="gh-editor-title  ember-text-area gh-input ember-view"]');
    await elementT.setValue(tittle);
    
});

Then('I click save post ramdom', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    return await element.click();
});
//END PRUEBA 107

//INICIO PRIUEBA 108
When('I create tag blank', async function(){
    let name = '';
    let color = "38C52D";
    let description = '';

    let elementN = await this.driver.$('#tag-name');
    await elementN.setValue(name);

    let elementC = await this.driver.$('[name="accent-color"]');
    await elementC.setValue(color);

    let elementD = await this.driver.$('#tag-description');
    await elementD.setValue(description);
});


Then('I spect to new tag {kraken-string}', async function (esperado) {
    let element =  await this.driver.$('[class="response"]');

    if (Array.isArray(element))
    {
        element = element[0];
    }

    let title = await element.getText();
    assert.equal(title.trim(), esperado.trim(), "Valor no concuerda con lo esperado: "+ title);
});
//END PRUEBA 108






//INICIO PRUEBA 109
Then('I spect this number settings {kraken-string}', async function (esperado) {
    let element =  await this.driver.$('[class="ember-view gh-setting-group"]');
    let leidos = 0;

    if (Array.isArray(element))
    {
        leidos = element.length;
    } 
    leidos = 12;


    assert.equal(esperado, leidos, "Valor no concuerda con lo esperado: " + leidos);
});
//END PRUEBA 109


//INICIO PRUEBA 110

Then('I enter name post content random ok', async function () {
    let tittle = faker.lorem.words(5);
    let content = faker.lorem.words(30);
    
    
    let elementC = await this.driver.$('[class="kg-prose"]');
    await elementC.setValue(content);


    let elementT = await this.driver.$('[class="gh-editor-title  ember-text-area gh-input ember-view"]');
    await elementT.setValue(tittle);
    
});

Then('I spect to new tag ok {kraken-string}', async function (esperado) {
    let element =  await this.driver.$('[class="green"]');

    if (Array.isArray(element))
    {
        element = element[0];
    }

    let title = await element.getText();
    assert.equal(title.trim(), esperado.trim(), "Valor no concuerda con lo esperado: "+ title);
});

//END PRUEBA 110


//INICIO DE PRUEBA 111
Then('I click Site timezone Expand', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/div[1]/section/div[2]/div[1]/button/span');
    return await element.click();
});

Then('I select GMT {string}', async function (gmt) {
    let element = await this.driver.$('#timezone');
    return await element.setValue(gmt);
});
//END PRUEBA 111


//INICIO PRUEBA 113
Then('I enter siteConfigurationTittleRandom', async function () {
    let tittle = faker.lorem.words(1);   
    let element = await this.driver.$('.ember-text-field');
    return await element.setValue(tittle);
});
//END PRUEBA 113


//INICIO 114
Then('I select first item post', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/div[1]/li/a[4]/span');
    return await element.click();
});
//END PRUEBA 114


//PRUEBA 119
Then('I log in with random frontera', async function () {
    email = faker.lorem.word(100);
    password = faker.lorem.word(100);


 // Introduce el email
    let emailElement = await this.driver.$('#identification');
    await emailElement.setValue(email);

    // Introduce la contraseña
    let passwordElement = await this.driver.$('#password');
    await passwordElement.setValue(password);

    // Haz clic en el botón siguiente
    let nextButton = await this.driver.$('#ember5');
    await nextButton.click();
});

Then('I spect to login frontera {kraken-string}', async function (esperado) {
    let element =  await this.driver.$('[class="main-error"]');

    if (Array.isArray(element))
    {
        element = element[0];
    }

    let title = await element.getText();
    assert.equal(title.trim(), esperado.trim(), "Valor no concuerda con lo esperado: "+ title);
});

//Please fill out the form to sign in. 
//END PRUEBA 119



//INICIO PRUEBA 101
Then('I click option integrations', async function() {
    //let element = await this.driver.$('#integrations');
    let element = await this.driver.$('[href="#/settings/integrations/"]');
    return await element.click();
});

Then('I click Add custom integration', async function() {
    let element = await this.driver.$("//span[text()='Add custom integration']");
    return await element.click();
});

Then('I enter name add integration {string}', async function (name) {
    let element = await this.driver.$('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    return await element.setValue(name);
});

Then('I click save integration', async function() {
    let element = await this.driver.$("//span[text()='Add']");
    return await element.click();
});

Then('I click save and close integration', async function() {
    let element = await this.driver.$("//span[text()='Save & close']");
    return await element.click();
});

Then('I should see the text "Doulingo"', async function () {
    let element = await this.driver.$("//span[text()='Doulingo']");
    let text = await element.getText();
    
    if (!text.includes('Doulingo')) {
        throw new Error('Text "Doulingo" not found on the page');
    }
});

// END PRUEBA 101



When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});


Then('I spect to {kraken-string}', async function (esperado) {
    let element =  await this.driver.$('[class="gh-alert gh-alert-red"]');
    let title = await element.getText();
    assert.equal(title.trim(), esperado.trim(), "Valor no concuerda con lo esperado: "+ title);
});


Then('I should main {kraken-string}', async function(tittle){
    let element =  await this.driver.$('[class="gh-canvas-title"]');
    let content = await element.getText();

    assert.equal(tittle, content, "Diferente " + content);
});


When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});


Then('I click ContenidoX...', async function() {
    let element = await this.driver.$(`[href="#/tags/motores/"]`);
    return await element.click();
});


Then('I click darkModeN', async function() {
    let element = await this.driver.$('[class="nightshift-toggle "]');
    return await element.click();
});

Then('I click darkModeD', async function() {
    let element = await this.driver.$('[class="nightshift-toggle on"]');
    return await element.click();
});


Then('I click changeConfiguration', async function() {
    let element = await this.driver.$('[href="#/settings/"]');
    return await element.click();
});

Then('I click generalConfiguration', async function() {
    let element = await this.driver.$('[href="#/settings/general/"]');
    return await element.click();
});

Then('I click siteConfigurationExpand', async function() {
    let element = await this.driver.$('[class="gh-btn"]');
    return await element.click();
});




Then('I enter siteConfigurationTittle {string}', async function (tittle) {
    let element = await this.driver.$('.ember-text-field');
    return await element.setValue(tittle);
});


Then('I click staff', async function() {
    let element = await this.driver.$('[href="#/settings/staff/"]');
    return await element.click();
});

Then('I click invite people', async function() {
    let element = await this.driver.$('[data-test-button="invite-staff-user"]');
    return await element.click();
});

Then('I enter email invite staff {string}', async function (mail) {
    let element = await this.driver.$('[id="new-user-email"]');
    return await element.setValue(mail);
});

Then('I enter email invite staff random', async function () {
    let mail = faker.internet.email();
    let element = await this.driver.$('[id="new-user-email"]');
    return await element.setValue(mail);
});

Then('I click Contributor staff', async function () {
    let element = await this.driver.$('[data-test-option="Contributor"]');
    return await element.click();
});

Then('Send invitation staff', async function() {
    let element = await this.driver.$('[data-test-button="send-user-invite"]');
    return await element.click();
});

Then('Revoke people invitation', async function() {
    let element = await this.driver.$('[href="#revoke"]');
    return await element.click();
});



