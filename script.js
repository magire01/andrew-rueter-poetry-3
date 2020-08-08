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
    $("#main-page").append("<h3>About Me</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



// poetry page
const poetryPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Poetry</h3>");
    poemEntry();
    poemButton();
}

class Poem {
    constructor (id, name, date, text) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.text = text;
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
}

const poems = [
    new Poem (0, "Poem of the Century", "August 4", "peom text<br>poem Text<br>poemtext"),
    new Poem (1, "Another one", "August 2", "peom text<br>poem Text<br>poemtext<br>poemtext<br>poemtext<br>"),
    new Poem (2, "the first poem", "July 29", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>")
];

const poemEntry = () => {

    for(let i = 0; i < poems.length; i++) {
        $("#main-page").append(`<div class="row post-border">`);
        $("#main-page").append(`<button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}</button>`);
        $("#main-page").append(`<div class="row entryDiv" id="entryDiv${poems[i].id}">`);
        $("#main-page").append(`</div></div>`);
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
    $("#main-page").append("<h3>Short Stories</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



//movies page
const moviesPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Movies</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}


//contact page
const contactPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Contact</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}


//
aboutPage();
