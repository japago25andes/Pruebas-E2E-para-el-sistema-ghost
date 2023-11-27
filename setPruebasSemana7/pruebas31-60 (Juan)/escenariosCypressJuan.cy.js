Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  function login() {
    cy.visit("http://165.22.184.25:3001/ghost/#/signin");
    cy.get("#identification")
      .type("automatizacion@yopmail.com")
      .should("have.value", "automatizacion@yopmail.com");
    cy.get("#password")
      .type("Automatizacion123")
      .should("have.value", "Automatizacion123");
    cy.get('button[type="submit"]').click();
  }
  
  function navToTags() {
    cy.get('[data-test-nav="tags"]').click();
    cy.get('a.gh-btn[href="#/tags/new/"]').eq(0).click();
    cy.screenshot();
  }
  
  function navigateToPosts() {
    cy.get('[data-test-nav="posts"]').click();
    cy.get('a[href="#/editor/post/"]').eq(0).click();
    cy.screenshot();
  }
  
  function publishPost() {
    cy.get('[data-test-button="publish-flow"]').click();
    cy.get('[data-test-button="continue"]').click();
    cy.get('[data-test-button="confirm-publish"]').click();
    cy.screenshot();
  }

  //Escenario 1: Crear publicación con lista numerada y no numerada

  describe("Crear publicación con lista numerada y no numerada", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con listas")
        .should("have.value", "Publicación con listas");
  
      // Agregar lista numerada
      cy.get('p[data-koenig-dnd-droppable="true"]').type("1. Item 1{enter}");
      cy.get('p[data-koenig-dnd-droppable="true"]').type("2. Item 2{enter}");
  
      // Agregar lista no numerada
      cy.get('p[data-koenig-dnd-droppable="true"]').type("- Item A{enter}");
      cy.get('p[data-koenig-dnd-droppable="true"]').type("- Item B{enter}");
  
      cy.screenshot();
  
      publishPost();
    });
  });
 
  //Escenario 2: Crear publicación con contenido incrustado de SoundCloud

  describe("Crear publicación con contenido incrustado de SoundCloud", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de SoundCloud")
        .should("have.value", "Publicación con contenido de SoundCloud");
  
      // Agregar contenido incrustado de SoundCloud
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/soundcloud{enter}");
      cy.get('[data-testid="soundcloud-input"]').type("https://soundcloud.com/es/bw11-voltage-drop-original-mix");
      cy.screenshot();
  
      publishPost();
    });
  });

  //Escenario 3: Crear publicación con tabla utilizando Markdown o HTML

  describe("Crear publicación con tabla", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con tabla")
        .should("have.value", "Publicación con tabla");
  
      // Agregar tabla utilizando Markdown
      cy.get('p[data-koenig-dnd-droppable="true"]').type("| Columna 1 | Columna 2 |{enter}");
      cy.get('p[data-koenig-dnd-droppable="true"]').type("| --------- | --------- |{enter}");
      cy.get('p[data-koenig-dnd-droppable="true"]').type("| Valor 1   | Valor 2   |{enter}");
  
      // También puedes agregar una tabla utilizando HTML
      cy.get('p[data-koenig-dnd-droppable="true"]').type("<table><tr><th>Columna 1</th><th>Columna 2</th></tr><tr><td>Valor 1</td><td>Valor 2</td></tr></table>");
  
      cy.screenshot();
  
      publishPost();
    });
  });

  //Escenario 4: Crear publicación con contenido incrustado de Instagram

  describe("Crear publicación con contenido incrustado de Instagram", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Instagram")
        .should("have.value", "Publicación con contenido de Instagram");
  
      // Agregar contenido incrustado de Instagram
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/instagram{enter}");
      cy.get('[data-testid="instagram-input"]').type("https://www.instagram.com/p/C0HDJT5ppUg/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
 //Escenario 5: Escenario 6: Crear publicación con citas destacadas
 describe("Crear publicación con citas destacadas", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con citas destacadas")
        .should("have.value", "Publicación con citas destacadas");
  
      // Agregar cita destacada
      cy.get('p[data-koenig-dnd-droppable="true"]').type("> Esta es una cita destacada{enter}");
      cy.screenshot();
  
      publishPost();
    });
  });

//Escenario 6: Crear publicación con contenido incrustado de GitHub Gist

describe("Crear publicación con contenido incrustado de GitHub Gist", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de GitHub Gist")
        .should("have.value", "Publicación con contenido de GitHub Gist");
  
      // Agregar contenido incrustado de GitHub Gist
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/gist{enter}");
      cy.get('[data-testid="github-gist-input"]').type("https://gist.github.com/jcruzmz11/a786c1c091bc3dfe4ce2b7306c5dcc2b");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 7: Crear publicación con contenido incrustado de SlideShare

describe("Crear publicación con contenido incrustado de SlideShare", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de SlideShare")
        .should("have.value", "Publicación con contenido de SlideShare");
  
      // Agregar contenido incrustado de SlideShare
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/slideshare{enter}");
      cy.get('[data-testid="slideshare-input"]').type("https://es.slideshare.net/ClarkBoyd/chatgpt-and-the-future-of-work-clark-boyd");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 8:  Crear publicación con contenido de Twitch

describe("Crear publicación con contenido de Twitch", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Twitch")
        .should("have.value", "Publicación con contenido de Twitch");
  
      // Agregar contenido de Twitch
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/twitch{enter}");
      cy.get('[data-testid="twitch-input"]').type("https://www.twitch.tv/videos/1988006203?filter=archives&sort=time");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 9: Crear publicación con contenido incrustado de CodePen

describe("Crear publicación con contenido incrustado de CodePen", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de CodePen")
        .should("have.value", "Publicación con contenido de CodePen");
  
      // Agregar contenido incrustado de CodePen
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/codepen{enter}");
      cy.get('[data-testid="codepen-input"]').type("https://codepen.io/Alejandrogrd/pen/gMZbWp");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 10: Crear publicación con contenido de Mixcloud

describe("Crear publicación con contenido de Mixcloud", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Mixcloud")
        .should("have.value", "Publicación con contenido de Mixcloud");
  
      // Agregar contenido de Mixcloud
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/mixcloud{enter}");
      cy.get('[data-testid="mixcloud-input"]').type("https://www.mixcloud.com/pineappleundertones/rwanda-night-in-london-nov-18-2023/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 11: Crear publicación con contenido de Pinterest

describe("Crear publicación con contenido de Pinterest", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Pinterest")
        .should("have.value", "Publicación con contenido de Pinterest");
  
      // Agregar contenido de Pinterest
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/pinterest{enter}");
      cy.get('[data-testid="pinterest-input"]').type("https://www.pinterest.es/pin/422281209895616/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 12: Crear publicación con contenido de Reddit

describe("Crear publicación con contenido de Reddit", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Reddit")
        .should("have.value", "Publicación con contenido de Reddit");
  
      // Agregar contenido de Reddit
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/reddit{enter}");
      cy.get('[data-testid="reddit-input"]').type("https://www.reddit.com/r/AITAH/comments/184b6pn/aitah_for_not_signing_on_blank_piece_of_paper_to/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 13: Crear publicación con contenido de Dropbox

describe("Crear publicación con contenido de Dropbox", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Dropbox")
        .should("have.value", "Publicación con contenido de Dropbox");
  
      // Agregar contenido de Dropbox
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/dropbox{enter}");
      cy.get('[data-testid="dropbox-input"]').type("https://www.dropbox.com/scl/fi/5vgqcfn2adlyrr6ujabzl/ESPACIO.jpg?rlkey=2r6v0ntu8ojqzs6yvpvxwpq50&dl=0");
      cy.screenshot();
  
      publishPost();
    });
  });
  

//Escenario 14: Crear publicación con contenido de Flickr

describe("Crear publicación con contenido de Flickr", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Flickr")
        .should("have.value", "Publicación con contenido de Flickr");
  
      // Agregar contenido de Flickr
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/flickr{enter}");
      cy.get('[data-testid="flickr-input"]').type("https://www.flickr.com/photos/norby/51207789671/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 15: Crear publicación con contenido de Kickstarter

describe("Crear publicación con contenido de Kickstarter", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Kickstarter")
        .should("have.value", "Publicación con contenido de Kickstarter");
  
      // Agregar contenido de Kickstarter
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/kickstarter{enter}");
      cy.get('[data-testid="kickstarter-input"]').type("https://www.kickstarter.com/projects/spacebetweenent/prison-witch-the-complete-series-special-covers?ref=section-homepage-function%20toLowerCase()%20%7B%20%5Bnative%20code%5D%20%7D-1-staff_picks_newest");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 16: Crear publicación con contenido de Prezi

describe("Crear publicación con contenido de Prezi", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Prezi")
        .should("have.value", "Publicación con contenido de Prezi");
  
      // Agregar contenido de Prezi
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/prezi{enter}");
      cy.get('[data-testid="prezi-input"]').type("https://prezi.com/qekmfcqff0kf/presentacion-sobre-mascotas/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 17: Crear publicación con contenido de Storify

describe("Crear publicación con contenido de Storify", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Storify")
        .should("have.value", "Publicación con contenido de Storify");
  
      // Agregar contenido de Storify
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/storify{enter}");
      cy.get('[data-testid="storify-input"]').type("https://storify.me/ig/whitebutwoody");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 18: Crear publicación con contenido de Scribd

describe("Crear publicación con contenido de Scribd", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Scribd")
        .should("have.value", "Publicación con contenido de Scribd");
  
      // Agregar contenido de Scribd
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/scribd{enter}");
      cy.get('[data-testid="scribd-input"]').type("https://es.scribd.com/document/653671591/texto-de-durkheim");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 19: Crear publicación con contenido de BuzzFeed

describe("Crear publicación con contenido de Quora", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Quora")
        .should("have.value", "Publicación con contenido de Quora");
  
      // Agregar contenido de Quora
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/quora{enter}");
      cy.get('[data-testid="quora-input"]').type("https://es.quora.com/Por-qu%C3%A9-Nagasaki-e-Hiroshima-eran-habitables-poco-despu%C3%A9s-de-1945-mientras-que-Chern%C3%B3bil-no-volver%C3%A1-a-ser-habitable-por-siglos-Cu%C3%A1l-es-la-diferencia");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 20: Crear publicación con contenido de TikTok

describe("Crear publicación con contenido de TikTok", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de TikTok")
        .should("have.value", "Publicación con contenido de TikTok");
  
      // Agregar contenido de TikTok
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/tiktok{enter}");
      cy.get('[data-testid="tiktok-input"]').type("https://www.tiktok.com/@danielnoveloo/video/7281857552244133125?lang=es");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 21: Crear publicación con contenido de DailyMotion

describe("Crear publicación con contenido de DailyMotion", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de DailyMotion")
        .should("have.value", "Publicación con contenido de DailyMotion");
  
      // Agregar contenido de DailyMotion
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/dailymotion{enter}");
      cy.get('[data-testid="dailymotion-input"]').type("https://www.dailymotion.com/video/x8pxfc8");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 22: Crear publicación con contenido de LinkedIn Slideshare

describe("Crear publicación con contenido de LinkedIn Slideshare", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con presentación de LinkedIn SlideShare")
        .should("have.value", "Publicación con presentación de LinkedIn SlideShare");
  
      // Agregar contenido de LinkedIn SlideShare
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/slideshare{enter}");
      cy.get('[data-testid="slideshare-input"]').type("https://www.linkedin.com/posts/leonardocueto_mp-activity-7132370750837018625-9rFo?utm_source=share&utm_medium=member_desktop");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 23: Crear publicación con contenido de Giphy

describe("Crear publicación con contenido de Giphy", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Giphy")
        .should("have.value", "Publicación con contenido de Giphy");
  
      // Agregar contenido de Giphy
      cy.get('p[data-koenig-dnd-droppable="true"]').type('<iframe src="https://giphy.com/embed/l0IybQ6l8nfKjxQv6" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactionseditor-reaction-l0IybQ6l8nfKjxQv6">via GIPHY</a></p>');
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 24: Crear publicación con contenido de TED Talks

describe("Crear publicación con contenido de TED Talks", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con charla de TED Talks")
        .should("have.value", "Publicación con charla de TED Talks");
  
      // Agregar contenido de TED Talks
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/embed{enter}");
      cy.get('[data-testid="embed-input"]').type("https://www.ted.com/talks/ian_bremmer_when_biden_met_xi_and_what_s_going_on_with_the_us_and_china");
      cy.screenshot();
  
      publishPost();
    });
  });
  

//Escenario 25: Crear publicación con contenido de Medium

describe("Crear publicación con contenido de Medium", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Medium")
        .should("have.value", "Publicación con contenido de Medium");
  
      // Agregar contenido de Medium
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/embed{enter}");
      cy.get('[data-testid="embed-input"]').type("https://thetaoist.online/the-problem-you-think-you-have-is-never-the-real-problem-147e1fad0135");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 26: Crear publicación con contenido de Tumblr

describe("Crear publicación con contenido de Tumblr", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Tumblr")
        .should("have.value", "Publicación con contenido de Tumblr");
  
      // Agregar contenido de Tumblr
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/embed{enter}");
      cy.get('[data-testid="embed-input"]').type("https://www.tumblr.com/bettykwong/734521845549826049?source=share");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 27: Crear publicación con contenido de Imgur

describe("Crear publicación con contenido de Imgur", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Imgur")
        .should("have.value", "Publicación con contenido de Imgur");
  
      // Agregar contenido de Imgur
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/embed{enter}");
      cy.get('[data-testid="embed-input"]').type("https://imgur.com/gallery/XbjRvt3");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 28: Crear publicación con contenido de Freepik

describe("Crear publicación con contenido de Freepik", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Freepik")
        .should("have.value", "Publicación con contenido de Freepik");
  
      // Agregar contenido de Freepik
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/embed{enter}");
      cy.get('[data-testid="embed-input"]').type("https://www.freepik.es/vector-gratis/ilustracion-plana-taller-santa_33461232.htm#&position=2&from_view=collections&uuid=95f9df32-0961-4fd3-9360-ec0e614f323d");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 29: Crear publicación con contenido de Pexels

describe("Crear publicación con contenido de Pexels", () => {
    beforeEach(() => {
      login();
    });
  
    it("passes", () => {
      navigateToPosts();
  
      cy.get(".gh-editor-title.ember-text-area.gh-input")
        .type("Publicación con contenido de Pexels")
        .should("have.value", "Publicación con contenido de Pexels");
  
      // Agregar contenido de Pexels
      cy.get('p[data-koenig-dnd-droppable="true"]').type("/image{enter}");
      cy.get('[data-testid="image-input"]').type("https://www.pexels.com/es-es/foto/madera-ligero-paisaje-verano-19031635/");
      cy.screenshot();
  
      publishPost();
    });
  });
  
//Escenario 30: Crear publicación con contenido de Pixabay

describe("Crear publicación con contenido de Pixabay", () => {
  beforeEach(() => {
    login();
  });

  it("passes", () => {
    navigateToPosts();

    cy.get(".gh-editor-title.ember-text-area.gh-input")
      .type("Publicación con contenido de Pixabay")
      .should("have.value", "Publicación con contenido de Pixabay");

    // Agregar contenido de Pixabay
    cy.get('p[data-koenig-dnd-droppable="true"]').type("/image{enter}");
    cy.get('[data-testid="image-input"]').type("https://pixabay.com/es/photos/peras-corte-rebanar-fruta-comida-8396722/");
    cy.screenshot();

    publishPost();
  });
});
