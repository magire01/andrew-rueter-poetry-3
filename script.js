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
    
}

const poemEntry = () => {
    $("#main-page").append(`<div class="row poetryDiv">`);
    const entries = {
        poem1: {
            id: 1,
            name: "Poem of the Century",
            date: "August 4",
            text: "peom text\lpoem Text\lpoemtext"
        },
        poem2: {
            id: 2,
            name: "Another one",
            date: "August 2",
            text: "peom text\lpoem Text\lpoemtext\npoemtext\npoemtext\n"
        },
        poem3: {
            id: 3,
            name: "the first poem",
            date: "July 29",
            text: "this some serious peom text\lpoem Text\lpoemtext\npoemtext\nbut this is prob the most important poemtext\n"
        }
        
    }

    $("#main-page").append(`<button class="row" id='poem-btn' data-id=${entries.poem1.id}>${entries.poem1.name}</button>)`);
    $("#main-page").append(`<button class="row" id='poem-btn' data-id=${entries.poem2.id}>${entries.poem2.name}</button>)`);
    $("#main-page").append(`<button class="row" id='poem-btn' data-id=${entries.poem3.id}>${entries.poem3.name}</button>)`);
    $("#main-page").append(`/<div>`);
}

const storyPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Short Stories</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}

const moviesPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Movies</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}

const contactPage = () => {
    $("#main-page").empty();
    $("#main-page").append("<h3>Contact</h3>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



aboutPage();