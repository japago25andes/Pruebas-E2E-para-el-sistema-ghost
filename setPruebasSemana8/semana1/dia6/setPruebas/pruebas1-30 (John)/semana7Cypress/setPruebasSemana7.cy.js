// Importar la librería Faker
import { faker } from '@faker-js/faker'

describe('Ghost Blog Tests with Cypress', () => {
    // Función para generar un nombre de archivo basado en la fecha y hora
    const timestamp = () => {
        const now = new Date();
        return now.toISOString().replace(/:/g, '-').replace(/\..+/, '');
    };

    // Función auxiliar para esperar y tomar screenshot
    const waitAndScreenshot = (name) => {
        cy.wait(1000);
        cy.screenshot(`${name}_${timestamp()}`);
    };

    // Iniciar sesión antes de cada prueba
    beforeEach(() => {
        cy.visit('http://165.22.184.25:3001/ghost');
        cy.get('input[name="identification"]').type('automatizacion@yopmail.com');
        cy.get('input[name="password"]').type('Automatizacion123');
        cy.get('.login').click();
        cy.url().should('include', '/dashboard'); // Asegurarse de que el inicio de sesión fue exitoso
        waitAndScreenshot('login');
    });

    // Función para generar texto aleatorio
    const generateRandomText = (length) => {
        return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
    };

    // Función para generar texto con caracteres especiales
    function generateSpecialCharacters(length) {
        const specialChars = "!@#$%^&*()_+{}:\"<>?[];',./`~";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }
        return result;
    }


    it('1. Creates a new post with Faker content', () => {
        cy.contains('Posts').click();
        waitAndScreenshot('2');

        cy.contains('New post').click();
        waitAndScreenshot('3');

        // Usar Faker para generar título y contenido del post
        const randomTitle = faker.lorem.sentence();
        const randomContent = faker.lorem.paragraph();
        cy.get('*[placeholder="Post title"]').type(randomTitle);
        cy.get('p').type(randomContent);
        waitAndScreenshot('4');

        cy.contains('Publish').click();
        waitAndScreenshot('5');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('6');

        cy.contains('Publish post, right now').click();
        waitAndScreenshot('7');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('8');
    });

    it('2. Edits an existing post with Faker content', () => {
        cy.contains('Posts').click();
        waitAndScreenshot('9');

        cy.get('[class="gh-content-entry-title"]').eq(0).click();
        waitAndScreenshot('10');

        // Editar título y contenido
        const editedTitle = faker.lorem.sentence();
        const editedContent = faker.lorem.paragraph();

        cy.get('*[placeholder="Post title"]').type(editedTitle);
        waitAndScreenshot('11');

        cy.get('p').eq(0).type(editedContent);
        waitAndScreenshot('12');

        cy.contains('Publish').click();
        waitAndScreenshot('13');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('14');

        cy.contains('Publish post, right now').click();
        waitAndScreenshot('15');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('16');
    });

    it('3. Creates a new tag with Faker content', () => {
        cy.contains('Tags').click();
        waitAndScreenshot('17');

        cy.contains('New tag').click();
        waitAndScreenshot('18');

        // Usar Faker para generar título, color y contenido del tag
        const randomName = faker.lorem.sentence();
        const randomColor = faker.internet.color().slice(1);;
        const randomDescription = faker.lorem.paragraph();

        cy.get('#tag-name').type(randomName);
        waitAndScreenshot('19');

        cy.get('[data-test-input="accentColor"]').type(randomColor);
        waitAndScreenshot('20');

        cy.get('[name="description"]').type(randomDescription);
        waitAndScreenshot('21');

        cy.contains('Save').click();
        waitAndScreenshot('22');

        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view').should('exist');
        waitAndScreenshot('23');
    });

    it('4. Edits an existing tag with Faker content', () => {
        cy.contains('Tags').click();
        waitAndScreenshot('24');

        cy.get('[class="gh-tag-list-name"]').eq(0).click();
        waitAndScreenshot('25');

        // Usar Faker para generar título, color y contenido del tag
        const randomName = faker.lorem.sentence();
        const randomColor = faker.internet.color().slice(1);;
        const randomDescription = faker.lorem.paragraph();

        cy.get('#tag-name').type(randomName);
        waitAndScreenshot('26');

        cy.get('[data-test-input="accentColor"]').type(randomColor);
        waitAndScreenshot('27');

        cy.get('[name="description"]').type(randomDescription);
        waitAndScreenshot('28');

        cy.contains('Save').click();
        waitAndScreenshot('29');

        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view').should('exist');
        waitAndScreenshot('30');
    });

    it('5. Creates a new draft with Faker content', () => {
        cy.contains('Drafts').click();
        waitAndScreenshot('31');

        cy.contains('New post').click();
        waitAndScreenshot('32');

        // Usar Faker para generar título y contenido del post
        const randomTitle = faker.lorem.sentence();
        const randomContent = faker.lorem.paragraph();
        cy.get('*[placeholder="Post title"]').type(randomTitle);
        cy.get('p').type(randomContent);
        waitAndScreenshot('33');

        cy.contains('Publish').click();
        waitAndScreenshot('34');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('35');

        cy.contains('Publish post, right now').click();
        waitAndScreenshot('36');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('37');
    });

    it('6. Edits an existing draft with Faker content', () => {
        cy.contains('Drafts').click();
        waitAndScreenshot('38');

        cy.get('[class="gh-content-entry-title"]').eq(0).click();
        waitAndScreenshot('39');

        // Editar título y contenido
        const editedTitle = faker.lorem.sentence();
        const editedContent = faker.lorem.paragraph();

        cy.get('*[placeholder="Post title"]').type(editedTitle);
        waitAndScreenshot('40');

        cy.get('p').eq(0).type(editedContent);
        waitAndScreenshot('41');

        cy.contains('Publish').click();
        waitAndScreenshot('42');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('43');

        cy.contains('Publish post, right now').click();
        waitAndScreenshot('44');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('45');
    });

    it('7. Creates a new post with random content max description', () => {
        cy.contains('Posts').click();
        waitAndScreenshot('46');

        cy.contains('New post').click();
        waitAndScreenshot('47');

        const randomTitle = `Post - ${generateRandomText(10)}`;
        const randomContent = `Content - ${generateRandomText(1000)}`;
        cy.get('*[placeholder="Post title"]').type(randomTitle);
        cy.get('p').type(randomContent);
        waitAndScreenshot('48');

        cy.contains('Publish').click();
        cy.get('.gh-publish-cta > .gh-btn > span').click();
        cy.contains('Publish post, right now').click();
        waitAndScreenshot('49');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('50');
    });

    it('8. Edits an existing post with ramdom content max title', () => {
        cy.contains('Posts').click();
        waitAndScreenshot('51');

        cy.get('[class="gh-content-entry-title"]').eq(0).click();
        waitAndScreenshot('52');

        // Editar título y contenido
        const editedTitle = `Edited - ${generateRandomText(500)}`;
        const editedContent = `Edited Content - ${generateRandomText(50)}`;
        cy.get('*[placeholder="Post title"]').type(editedTitle);
        cy.get('p').eq(0).type(editedContent);
        waitAndScreenshot('53');

        cy.contains('Publish').click();
        cy.contains("Validation failed: Title cannot be longer than 255 characters.").should('be.visible');
        waitAndScreenshot('54');

    });

    it('9. Name edition with invalid data', () => {
        cy.get('[class="gh-user-avatar relative"]').click();
        waitAndScreenshot('55');

        cy.get('[data-test-nav="user-profile"]').click();
        waitAndScreenshot('56');

        const randomNumber = faker.datatype.number({ min: 1000000 })
        cy.get('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]').eq(0).clear().type(randomNumber);
        waitAndScreenshot('57');

        cy.contains('Save & close').click();
        waitAndScreenshot('58');

        cy.contains(randomNumber).should('be.visible');
        waitAndScreenshot('59');

    });


    it('10. Mail edition with invalid data', () => {
        cy.get('[class="gh-user-avatar relative"]').click();
        waitAndScreenshot('60');

        cy.get('[data-test-nav="user-profile"]').click();
        waitAndScreenshot('61');

        const randomName = faker.person.fullName();
        cy.get('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]').eq(1).clear().type(randomName);
        cy.get('[class="peer z-[1] order-2 h-8 w-full bg-transparent px-3 py-1 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-9 md:py-2 md:text-md dark:text-white rounded-md"]').eq(0).clear();
        waitAndScreenshot('62');

        cy.contains("Please enter a valid email address").should('be.visible');
        waitAndScreenshot('63');

    });

    it('11. Edit title invalid data', () => {
        cy.get('[class="settings_svg__a"]').eq(1).click();
        waitAndScreenshot('64');

        cy.get('#general').click();
        waitAndScreenshot('65');

        cy.contains('Edit').eq(0).click();
        waitAndScreenshot('66');

        const randomSpecialString = generateSpecialCharacters(10);
        cy.get('[placeholder="Site title"]').clear().type(randomSpecialString);
        waitAndScreenshot('67');

        cy.contains('Save').eq(0).click();
        waitAndScreenshot('68');

        cy.contains("Saved").should('be.visible');
        waitAndScreenshot('69');

    });

    it('12. Creates a new page with Faker content', () => {
        cy.contains('Pages').click();
        waitAndScreenshot('70');

        cy.contains('New page').click();
        waitAndScreenshot('71');

        // Usar Faker para generar título y contenido del page
        const randomTitle = faker.lorem.sentence();
        const randomContent = faker.lorem.paragraph();
        cy.get('*[placeholder="Page title"]').type(randomTitle);
        cy.get('p').type(randomContent);
        waitAndScreenshot('72');

        cy.contains('Publish').click();
        waitAndScreenshot('73');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('74');

        cy.contains('Publish page, right now').click();
        waitAndScreenshot('75');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('76');
    });

    it('13. Edits an existing page with faker content', () => {
        cy.contains('Pages').click();
        waitAndScreenshot('77');

        cy.get('[class="gh-content-entry-title"]').eq(0).click();
        waitAndScreenshot('78');

        // Editar título y contenido
        const editedTitle = faker.lorem.sentence();
        const editedContent = faker.lorem.paragraph();

        cy.get('*[placeholder="Page title"]').type(editedTitle);
        waitAndScreenshot('79');

        cy.get('p').eq(0).type(editedContent);
        waitAndScreenshot('80');

        cy.contains('Publish').click();
        waitAndScreenshot('81');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('82');

        cy.contains('Publish page, right now').click();
        waitAndScreenshot('83');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('84');
    });

    it('14. Creates a new post with invalid data', () => {
        cy.contains('Posts').click();
        waitAndScreenshot('85');

        cy.contains('New post').click();
        waitAndScreenshot('86');

        const randomTitle = generateSpecialCharacters(20);
        const randomContent = generateSpecialCharacters(100);
        cy.get('*[placeholder="Post title"]').type(randomTitle, { parseSpecialCharSequences: false });
        cy.get('p').type(randomContent, { parseSpecialCharSequences: false });
        waitAndScreenshot('87');

        cy.contains('Publish').click();
        waitAndScreenshot('88');

        cy.get('.gh-publish-cta > .gh-btn > span').click();
        waitAndScreenshot('89');

        cy.contains('Publish post, right now').click();
        waitAndScreenshot('90');

        cy.contains("Boom. It’s out there.").should('be.visible');
        waitAndScreenshot('91');
    });



    it('15. Creates a new tag with invalid data', () => {
        cy.contains('Tags').click();
        waitAndScreenshot('92');

        cy.contains('New tag').click();
        waitAndScreenshot('93');

        const randomName = generateSpecialCharacters(20);
        const randomColor = faker.internet.color().slice(1);;
        const randomDescription = generateSpecialCharacters(100);

        cy.get('#tag-name').type(randomName, { parseSpecialCharSequences: false });
        waitAndScreenshot('94');

        cy.get('[data-test-input="accentColor"]').type(randomColor);
        waitAndScreenshot('95');

        cy.get('[name="description"]').type(randomDescription, { parseSpecialCharSequences: false });
        waitAndScreenshot('96');

        cy.contains('Save').click();
        waitAndScreenshot('97');

        cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.gh-btn-green.ember-view').should('exist');
        waitAndScreenshot('98');
    });



});
