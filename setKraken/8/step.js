const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
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

