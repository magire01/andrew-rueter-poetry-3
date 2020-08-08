console.log("test");

//poetry buttons

$("#poetry-nav").on("click", function() {
    poetryPage();
});

$("#story-nav").on("click", function() {
    storyPage();
});

$("#movies-nav").on("click", function() {
    moviesPage();
});

$("#contact-nav").on("click", function() {
    contactPage();
});

$("#about-nav").on("click", function() {
    aboutPage();
});

//About Page
const aboutPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3>About Me</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



// poetry page
const poetryPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3>Poetry</h3></div>`);
    poemEntry();
    poemButton();
}

class Poem {
    constructor (id, name, date, text, info) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.text = text;
        this.info = info;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDate() {
        return this.date;
    }
    getText() {
        return this.text;
    }
    getInfo() {
        return this.info;
    }
}

const poems = [
    new Poem (0, "Poem of the Century", "August 4", "peom text<br>poem Text<br>poemtext", "Published by: SomethinSmoething Magezine"),
    new Poem (1, "Another one", "August 2", "peom text<br>poem Text<br>poemtext<br>poemtext<br>poemtext<br>", "Hello Poetry Link"),
    new Poem (2, "the first poem", "July 29", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info"),
    new Poem (3, "Poem of the day", "July 28", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Reddit Link"),
    new Poem (4, "War sucks", "July 19", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (5, "Mood, bummed", "July 7", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (6, "Maybe there are too many poems", "July 3", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (7, "I'll keep going", "July 1", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (8, "Seven poems? these must be very easy to add", "June 20", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
];

const poemEntry = () => {
    
    for(let i = 0; i < poems.length; i++) {
        if (i < 2) {
            $("#main-page").append(`<div class="post-border"><button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}</button><div class="row entryDiv" id="entryDiv${poems[i].id}"><div class="row"><p>${poems[i].text}</p></div></div><p class="col-md-6 datePosted">Date Posted: ${poems[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${poems[i].info}</p></div>`);
        } else {
            $("#main-page").append(`<div class="post-border"><button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}<span class="readPoem"><p> Read Poem </p></span></button><div class="row entryDiv" id="entryDiv${poems[i].id}"></div><p class="col-md-6 datePosted">Date Posted: ${poems[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${poems[i].info}</p></div>`);
        }
        
    }
}

const poemButton = () => {
    $("body").on("click", ".poem-button", function() {
        const id = $(this).data("id");
        //Console Log Test for Poem text
        // console.log(`Poem text test: ${poems[id].text}`);
        $(`#entryDiv${id}`).empty();
        $(`#entryDiv${id}`).append(`<div class="row"><p>${poems[id].text}</p></div>`);
    });
}


//story page
const storyPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3>Short Stories</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



//movies page
const moviesPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3>Movies</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}


//contact page
const contactPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3>Contact</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}


//
aboutPage();
