const { Given, When, Then } = require('@cucumber/cucumber');
const faker = require('@faker-js/faker');

//-------------------------------------------------------------------------------------------------------------------
// Se realiza la modificacion para que tome los pantallazos con cada paso
//-------------------------------------------------------------------------------------------------------------------

When('I wait for {int} seconds and take a screenshot', async function (seconds) {
    // Espera el número especificado de segundos
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));

    // Toma una captura de pantalla
    let screenshot = await this.driver.takeScreenshot();

    // Genera un nombre de archivo con la fecha y hora actual
    const timestamp = new Date().toISOString().replace(/[:\-T\.Z]/g, '');
    const screenshotPath = `screenshot-${timestamp}.png`;

    // Guarda la captura de pantalla en un archivo
    const fs = require('fs');
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 1 --
//-------------------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 2 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click drafts', async function() {
    let element = await this.driver.$('[href="#/posts/?type=draft"]');
    return await element.click();
});

Then('I click new drafts', async function() {
    let element = await this.driver.$('[href="#/editor/post/"]');
    return await element.click();
});

Then('I enter title {string}', async function (title) {
    let element = await this.driver.$('[placeholder="Post title"]');
    return await element.setValue(title);
});

Then('I enter post {kraken-string}', async function (post) {
    let element = await this.driver.$('[class="kg-prose"]');
    return await element.setValue(post);
});

Then('I click publish', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]');
    return await element.click();
});

Then('I click continue', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-black gh-btn-large"]');
    return await element.click();
});

Then('I click confirmation', async function() {
    let element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
});

Then('I should see the text "Boom."', async function () {
    
    let element = await this.driver.$('[class="gh-publish-title"]');
    let text = await element.getText();

    if (!text.includes('Boom.')) {
        throw new Error('Text "Boom." not found on the page');
    }
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 3 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click user', async function() {
    let element = await this.driver.$('[class="gh-user-avatar relative"]');
    return await element.click();
});

Then('I click profile', async function() {
    let element = await this.driver.$('[data-test-nav="user-profile"]');
    return await element.click();
});

When('I clear and enter name profile {string}', async function (namep) {
    
    let element = await this.driver.$('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    
    // Borra el contenido del campo
    await element.setValue('');
    
    // Establece el nuevo valor
    return await element.setValue(namep);
});

When('I click save profile', async function() {
    let element = await this.driver.$('[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]"]');
    return await element.click();
});

Then('the element with class {string} should contain the text {string}', async function (className, expectedText) {
    let elements = await this.driver.$$(className.split(' ').map(c => `.${c}`).join(''));
    let found = false;

    for (const element of elements) {
        let text = await element.getText();
        if (text.includes(expectedText)) {
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error(`Text "${expectedText}" not found in elements with class "${className}"`);
    }
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 4 --
//-------------------------------------------------------------------------------------------------------------------

Then('I select the option to create a new post', async function() {
    let element = await this.driver.$('[title="New post"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 5 --
//-------------------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 6 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click ContenidoX...', async function() {
    let element = await this.driver.$(`[class="gh-tag-list-name"]`);
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 7 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click darkModeN', async function() {
    let element = await this.driver.$('[class="nightshift-toggle "]');
    return await element.click();
});

Then('I click darkModeD', async function() {
    let element = await this.driver.$('[class="nightshift-toggle on"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 8 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click changeConfiguration', async function() {
    let element = await this.driver.$('[href="#/settings/"]');
    return await element.click();
});

Then('I click generalConfiguration', async function() {
    let element = await this.driver.$('[class="flex items-center gap-5 undefined"]');
    return await element.click();
});

Then('I click siteConfigurationExpand', async function() {
    let element = await this.driver.$('[class="relative order-2 flex w-full items-center mt-1.5"]');
    return await element.click();
});

Then('I clear and enter name site {string}', async function (namep) {
    // Selecciona el elemento por su selector CSS
    let element = await this.driver.$('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]');
    
    // Borra el contenido del campo
    await element.setValue('');
    
    // Establece el nuevo valor
    return await element.setValue(namep);
});

Then('I click save tittle', async function() {
    let element = await this.driver.$('[class="cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 9 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click staff', async function() {
    let element = await this.driver.$('#staff');
    return await element.click();
});

Then('I invite people', async function() {
    let element = await this.driver.$("//span[text()='Invite people']");
    return await element.click();
});

Then('I click email invite', async function() {
    let element = await this.driver.$('[class="absolute inset-0 rounded-md border text-grey-300 transition-all peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-925 border-transparent bg-grey-150 dark:bg-grey-900"]');
    return await element.click();
});

Then('I click send invitation', async function() {
    let element = await this.driver.$('[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 10 --
//-------------------------------------------------------------------------------------------------------------------

Then('I revoke people invitation', async function() {
    let element = await this.driver.$('[title="Invited"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 11 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click internal tags', async function() {
    let element = await this.driver.$("//span[text()='Internal tags']");
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 12 --
//-------------------------------------------------------------------------------------------------------------------

When('I enter a random name for the tag', async function () {
    const randomName = faker.name.firstName(); // Genera un nombre aleatorio
    let nameField = await this.driver.$('#tag-name'); // Asegúrate de usar el selector correcto
    return await nameField.setValue(randomName);
});

When('I enter a random color for the tag', async function () {
    const randomColor = faker.internet.color(); // Genera un color aleatorio
    let colorField = await this.driver.$('[name="accent-color"]'); // Asegúrate de usar el selector correcto
    return await colorField.setValue(randomColor);
});

When('I enter a random description for the tag', async function () {
    const randomDescription = faker.lorem.sentence(); // Genera una descripción aleatoria
    let descriptionField = await this.driver.$('#tag-description'); // Asegúrate de usar el selector correcto
    return await descriptionField.setValue(randomDescription);
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 13 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click edit publication language', async function() {
    let element = await this.driver.$('[class="cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 14 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click options post', async function() {
    let element = await this.driver.$('[href="#/posts/"]');
    return await element.click();
});

Then('I click options new post', async function() {
    let element = await this.driver.$('[href="#/editor/post/"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 17 --
//-------------------------------------------------------------------------------------------------------------------

Then('I should see the text "Post"', async function () {
    let element = await this.driver.$('[href="#/posts/"]');
    let text = await element.getText();
    
    if (!text.includes('Posts')) {
        throw new Error('Text "Posts" not found on the page');
    }
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 18 --
//-------------------------------------------------------------------------------------------------------------------

Then('I selected the tag edition', async function() {
    let element = await this.driver.$('[title="Edit tag"]');
    return await element.click();
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 19 --
//-------------------------------------------------------------------------------------------------------------------

Then('I should see the text "Tags"', async function () {
    let element = await this.driver.$('[class="gh-canvas-title"]');
    let text = await element.getText();
    
    if (!text.includes('Tags')) {
        throw new Error('Text "Tags" not found on the page');
    }
});

//-------------------------------------------------------------------------------------------------------------------
// PASOS PRUEBA NUMERO -- 19 --
//-------------------------------------------------------------------------------------------------------------------

Then('I click option integrations', async function() {
    let element = await this.driver.$('#integrations');
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