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


Then('I click user', async function() {
    let element = await this.driver.$('[class="gh-user-avatar relative"]');
    return await element.click();
});

Then('I click profile', async function() {
    let element = await this.driver.$('[data-test-nav="user-profile"]');
    return await element.click();
});

When('I clear and enter name profile {string}', async function (namep) {
    // Selecciona el elemento por su selector CSS
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
