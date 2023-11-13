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