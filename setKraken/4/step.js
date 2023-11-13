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

Then('I select the option to create a new post', async function() {
    let element = await this.driver.$('[title="New post"]');
    return await element.click();
});

When('I enter title {string}', async function (title) {
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

