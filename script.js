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

const aboutPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>About Me</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}

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
// const entries = {
//     poem1: {
//         id: 1,
//         name: "Poem of the Century",
//         date: "August 4",
//         text: "peom text\lpoem Text\lpoemtext"
//     },
//     poem2: {
//         id: 2,
//         name: "Another one",
//         date: "August 2",
//         text: "peom text\lpoem Text\lpoemtext\npoemtext\npoemtext\n"
//     },
//     poem3: {
//         id: 3,
//         name: "the first poem",
//         date: "July 29",
//         text: "this some serious peom text\lpoem Text\lpoemtext\npoemtext\nbut this is prob the most important poemtext\n"
//     }
// };

const poemEntry = () => {

    for(let i = 0; i < poems.length; i++) {
        $("#main-page").append(`<div class="row">`);
        $("#main-page").append(`<button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}</button>`);
        $("#main-page").append(`<div class="row entryDiv${poems[i].id}" id="entryDiv">`);
        $("#main-page").append(`</div></div>`);
    }

    
    // $("#main-page").append(`<div class="row poetryDiv">`);

    // $("#main-page").append(`<div class="row entryDiv1">`);
    // $("#main-page").append(`<button class="row poem-button" id='poem-btn' data-id=${poems[0].id}>${poems[0].name}</button>)`);
    // poemButton();
    // $("#main-page").append(`</div>`);
    // $("#main-page").append(`<button class="row poem-button" id='poem-btn' data-id=${poems[1].id}>${poems[1].name}</button>)`);
    // $("#main-page").append(`<button class="row poem-button" id='poem-btn' data-id=${poems[2].id}>${poems[2].name}</button>)`);
    
    // $("#main-page").append(`</div>`);
}

// const poemText = () => {

// }

const poemButton = () => {
    $("body").on("click", ".poem-button", function() {
        const id = $(this).data("id");
        console.log(`Poem text test: ${poems[id].text}`);
        $(`.entryDiv${id}`).empty();
        $(`.entryDiv${id}`).append(`<div class="row"><p>${poems[id].text}</p></div>`);
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
