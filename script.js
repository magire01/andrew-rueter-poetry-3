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
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3 class="page-title"> About Me </h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



// poetry page
const poetryPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3 class="page-title">Poetry</h3></div>`);
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
    
}

const poems = [
    new Poem (0, "Poem of the Century", "August 4", "peom text<br>poem Text<br>poemtext", "Published by: SomethinSmoething Magezine"),
    new Poem (1, "Another one", "August 2", "peom text<br>poem Text<br>poemtext<br>poemtext<br>poemtext<br>", "Hello Poetry Link"),
    new Poem (2, "the first poem", "July 29", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info"),
    new Poem (3, "Poem of the day", "July 28", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Reddit Link"),
    new Poem (4, "War sucks", "July 19", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (5, "Mood, bummed", "July 7", "this some serious peom text<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (6, "there are too many poems", "July 3", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (7, "I'll keep going", "July 1", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (8, "the poems", "June 18", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (9, "more poems more time", "June 15", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
    new Poem (10, "It's over 9 poems", "June 8", "lets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one linelets see how wide we can get one line<br>poem Text<br>poemtext<br>poemtext<br>but this is prob the most important poemtext<br>", "Additional Info test"),
];

const poemEntry = () => {
    
    for(let i = 0; i < poems.length; i++) {
        if (i < 2) {
            $("#main-page").append(`<div class="post-border"><button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}</button><div class="row entryDiv" id="entryDiv${poems[i].id}"><div class="row"><p>${poems[i].text}</p></div></div><p class="col-md-6 datePosted">Date Posted: ${poems[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${poems[i].info}</p></div>`);
        } else {
            $("#main-page").append(`<div class="post-border"><button class="row poem-button" id='poem-btn' data-id=${poems[i].id}>${poems[i].name}<span class="readPoem"><p> Read  </p></span></button><div class="row entryDiv" id="entryDiv${poems[i].id}"></div><p class="col-md-6 datePosted">Date Posted: ${poems[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${poems[i].info}</p></div>`);
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
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3 class="page-title">Short Stories</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}



//movies page
const moviesPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3 class="page-title">Movies</h3></div>`);
    movieEntry();
    movieButton();

}

class Movie {
    constructor (id, name, date, text, info) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.text = text;
        this.info = info;
    }
    
}

const movies = [
    new Movie (0, "Movie Title 1", "August 4", "Movietext Movietext Movietext <br>Movietext <br>Movietext Movietext Movietext Movietext ", "Something something"),
    new Movie (1, "Movie Title 2", "August 3", "Movietext Movietext Movietext <br>Movietext <br>Movietext Movietext Movietext Movietext ", "Something something"),
    new Movie (2, "Movie Title 3", "August 2", "Movietext Movietext Movietext <br>Movietext <br>Movietext Movietext Movietext Movietext ", "Something something"),
    new Movie (3, "Movie Title 4", "August 3", "Movietext Movietext Movietext <br>Movietext <br>Movietext Movietext Movietext Movietext ", "Something something")
];

const movieEntry = () => {
    for(let i = 0; i < movies.length; i++) {
        if (i < 2) {
            $("#main-page").append(`<div class="post-border"><button class="row movie-button" id='poem-btn' data-id=${movies[i].id}>${movies[i].name}</button><div class="row entryDiv" id="mEntryDiv${movies[i].id}"><div class="row"><p>${movies[i].text}</p></div></div><p class="col-md-6 datePosted">Date Posted: ${movies[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${movies[i].info}</p></div>`);
        } else {
            $("#main-page").append(`<div class="post-border"><button class="row movie-button" id='movie-btn' data-id=${movies[i].id}>${movies[i].name}<span class="readPoem"><p> Read </p></span></button><div class="row entryDiv" id="mEntryDiv${movies[i].id}"></div><p class="col-md-6 datePosted">Date Posted: ${movies[i].date}</p><p class="col-md-6 datePosted">Additional Info: ${movies[i].info}</p></div>`);
        }
        
    }
}

const movieButton = () => {
    $("body").on("click", ".movie-button", function() {
        const id = $(this).data("id");
        //Console Log Test for Poem text
        console.log(`Movie text test: ${movies[id].text}`);
        $(`#mEntryDiv${id}`).empty();
        $(`#mEntryDiv${id}`).append(`<div class="row"><p>${movies[id].text}</p></div>`);
    });
}


//contact page
const contactPage = () => {
    $("#main-page").empty();
    $("#main-page").append(`<div class="col-md-8 blankColWidth"></div><div class="col-md-4"><h3 class="page-title">Contact</h3></div>`);
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");
    $("#main-page").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime omnis quibusdam praesentium, culpa cupiditate, saepe, facere expedita nostrum neque magnam esse dolore obcaecati voluptatibus ex sint repudiandae cumque accusantium nulla.</p>");

}

aboutPage();
