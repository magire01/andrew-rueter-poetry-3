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
    new Poem (0, "Art and Religion",
        "May 2019",
        `Can art and religion coexist<br>
        when art is about asking questions<br>
        and religion is about providing answers?<br>`,
        "Additional Info here"),
    new Poem (1, "Burnt", 
        "December 2019", 
        `There are cracks in the pavement<br>
        messages the grave sent<br>
        the dead are beyond containment<br>
        escaping earthly enslavement.<br>
        <br>
        Their absence in the adytum<br>
        brought by the bastard&#39;s gun<br>
        leaves a black star sun<br>
        burning the master&#39;s son.<br>
        <br>
        He&#39;s burning alive<br>
        he&#39;s burning to die<br>
        he&#39;s burning so I<br>
        burn one and sigh.<br>
        <br>
        The burnt coal<br>
        on my burnt soul<br>
        burnt whole<br>
        until cold.<br>`,
        "Published by: SomethinSmoething Magezine"),
    new Poem (2, "Creatures", 
        "October 2017", 
        `The Sun shines on my computer<br>
        Creating a protective glare<br>
        But night comes like an intruder<br>
        At pictures I begin to stare<br>
        <br>
        After I view their portrait online<br>
        I want to see their body on mine<br>
        We talk all night<br>
        Until I see the light<br>
        That they&#39;re not that bright<br>
        Or that they like to fight<br>
        
        Desperation swirls<br>
        I enter a world<br>
        Where the randomness of human interaction<br>
        Meets the randomness of my attraction<br>
        And the low visibility<br>
        Endears no civility<br>
        Will I spend infinity<br>
        In this digital city?<br>
        <br>
        The creatures try to hide<br>
        They scatter in the distance<br>
        They&#39;re not hard to find<br>
        
        When their profiles leave imprints<br>
        But the parasites are quick<br>
        And the scavengers stick<br>
        Vultures fly from iPad to iPhone<br>
        Leeches try to make my pad their home<br>
        Devouring me until I&#39;m bad to the bone<br>
        Like the solicitous predators<br>
        Who act like creditors<br>
        And the sly foxes<br>
        Who claim they&#39;re locksmiths<br>
        They all have claws and fangs<br>
        They&#39;re all just jaws with brains<br>
        I play possum<br>
        Until I&#39;ve lost them<br>
        <br>
        When monsters are made from loneliness<br>
        They try to trick me with phoniness<br>
        They feel I wouldn&#39;t want us to be together<br>
        And they&#39;re probably right<br>
        Because all I want is to spend forever<br>
        In love&#39;s divine light<br>
        Nocturnal animals just want the meal<br>
        Of my motion<br>
        They don&#39;t want to honestly feel<br>
        My devotion<br>
        <br>
        In the wild<br>
        I am a child<br>
        The creatures cut deep<br>
        They make me weep<br>
        Until I choose to sleep<br>
        But when I avoid their glance<br>
        I avoid love&#39;s chance<br>`,
        "Published by: SomethinSmoething Magezine"),
    new Poem (3, "Haunted",
        "March 2018",
        `I argue<br>
        To harm you<br>
        The protective computer screen<br>
        Allows me to be rude or mean<br>
        Without feeling your pain<br>
        So it becomes a game<br>
        Or a simulation of fame<br>
        If I can ignore the shame<br>
        <br>
        The tread is wearing off the tire<br>
        After the internet stripped<br>
        The rubber off the telephone wire<br>
        And we lost our loose grip<br>
        After being shocked<br>
        By the rest of the flock<br>
        Their existence<br>
        Shows a difference<br>
        That is hard to accept<br>
        We&#39;re not what we expect<br>
        <br>
        We push the boundaries of communication<br>
        But we can&#39;t handle the technology<br>
        I feel it gives me social immunization<br>
        But I feel the darkness follow me<br>
        <br>
        And swallow me<br>
        Until I&#39;m wallowing<br>
        Yet I don&#39;t know why<br>
        I try to ignore it<br>
        Only if it gets me high<br>
        Will I be for it<br>
        <br>
        This utilitarian keyboard<br>
        Should help me see more<br>
        Instead it transcribes my anger<br>
        As I turn into an electric stranger<br>
        The words on my pixelated screen<br>
        Do not reflect my childhood dreams<br>
        But the bitterness of dreams being crushed<br>
        My petulant reactions are thoughtlessly rushed<br>
        And I represent my views in a negative way<br>
        Until I&#39;d be more useful with nothing to say<br>
        <br>
        There is a need for empathy<br>
        In the electronic discourse<br>
        Right now there is only entropy<br>
        And words without remorse<br>
        Spoken from a high horse<br>
        That looks down on peasants who own it<br>
        It&#39;s also a slave but doesn&#39;t even know it<br>
        <br>
        So it arrogantly trots along<br>
        Never admitting that it&#39;s wrong<br>
        Until it hears the slithering snakes rattle<br>
        Then it doesn&#39;t mind wearing a saddle<br>
        But the venom has already been injected<br>
        And its mind becomes hopelessly infected<br>
        <br>
        We argue without blinking<br>
        We argue without thinking<br>
        We argue with poor logic<br>
        Our ignorance we flaunt it<br>
        Until the internet is haunted<br>`,
        "Additional Info Here"),
    new Poem (4, "Icy",
        "January 2018",
        `There is no moral code<br>
        When time is an icy road<br>
        Where you cannot stop<br>
        Or you&#39;ll be stuck in the cold ground<br>
        When the temperature drops<br>
        Snow collects in my frosty frown<br>
        And starts to linger<br>
        On my frostbite fingers<br>
        While I keep sliding<br>
        On the line we&#39;re riding<br>
        <br>
        I see icy roads<br>
        Leading to icy modes<br>
        Of acting<br>
        Impacting<br>
        The way we treat each other<br>
        The same way we beat each other<br>
        To the finish line<br>
        Of our frigid time<br>
        <br>
        Time isn&#39;t nice<br>
        When it&#39;s ice<br>
        But it&#39;s all we know<br>
        Time continually goes<br>
        <br>
        The challenges grow<br>
        Buried in snow<br>
        Trying to go uphill is a nasty nope<br>
        Sliding downhill is a slippery slope<br>
        If you momentarily lose your control<br>
        You&#39;re pulled over by the cops on patrol<br>
        <br>
        Everything is covered in snow<br>
        Even the cars being towed<br>
        Their owners gave away their agency<br>
        And are at the tow truck driver&#39;s mercy<br>
        They rely on him to get them to safety<br>
        So they cunningly wear his jersey<br>
        There are things we want<br>
        Acquired by tease and taunt<br>
        We drive on top of bodies<br>
        To gain traction on the street<br>
        We do what is naughty<br>
        To have enough to eat<br>
        <br>
        I careen through time<br>
        Without seeing a dime<br>
        Everything looks so plain<br>
        In this frozen rain<br>
        When the ordinary life<br>
        <br>
        Is within my sight<br>
        I look for something more<br>
        Only to see a frozen door<br>
        <br>
        There is ice on the road<br>
        There is ice in my heart<br>
        I can&#39;t handle the load<br>
        In the back of my cart<br>
        Until I decide<br>
        To abide<br>
        By the slide<br>
        And glide<br>
        On the edge of control and freedom<br>
        There are other cars and I&#39;ll lead them<br>`,
        "Add Additional Info Here"),
    new Poem (5, "Solar",
        "June 2018",
        `You&#39;re a solar flare<br>
        Without a care<br>
        The sun is your lair<br>
        So we can&#39;t be a pair<br>
        Which I felt was unfair<br>
        So I starred down the barrel of a gun<br>
        Into the shining sun<br>
        To have my tears evaporate<br>
        But all that did was exacerbate<br>
        The eventual solar eclipse<br>
        From the sound of your lips<br>
        Telling me it&#39;s over<br>
        But it didn&#39;t start<br>
        I get in my lunar rover<br>
        And sadly depart<br>
        <br>
        Your supernova<br>
        Put me in a loser&#39;s coma<br>
        From a subtle sun kiss<br>
        With a trillion ton fist<br>
        That left me loveless<br>
        Seeing the sun less<br>
        <br>
        Stuck inside my tower<br>
        My eyes are a shower<br>
        I&#39;m holding a sun powered<br>
        Drug flower<br>
        While I cower<br>
        In the midnight hour<br>
        During the solar absence<br>
        I await a sunrise advent<br>
        Like a cosmic abscess<br>
        After being denied access<br>
        Added to your black list<br>
        I become dark matter<br>
        When my dreams shatter<br>
        I am indeed sadder<br>
        Wishing my world was flatter<br>
        <br>
        Yet the sun still shines<br>
        Even when I&#39;m blind<br>
        Rays of light still come out<br>
        Causing a seed to sprout<br>
        Like a heroic water spout<br>
        After a hundred year drought<br>
        But I can only see the sunset<br>
        As the future I&#39;ve met<br>
        And I begin to fret<br>
        Over my daytime debt<br>
        <br>
        When I spend time but never give it<br>
        I make a mistake and then I relive it<br>
        The sun is scorching hot I can&#39;t grip it<br>
        So when I get the upper hand I flip it<br>
        And live under the sun<br>
        This life is a lonely one<br>`,
        "Additional Info Here"),
    new Poem (6, "Kubrick&#39;s Piano",
        "October 2019",
        `The piano towers before me like a black monolith<br>
        its keys are the bones I&#39;m learning to swing<br>
        teaching technology tediously<br>
        until I can explore space<br>
        between man and self.<br>
        <br>
        I put myself in stasis<br>
        while I battle my machine.<br>
        The piano assumes autonomy over my command center<br>
        cutting off my air supply<br>
        until I&#39;m completely disconnected<br>
        floating in space.<br>
        <br>
        The piano requires my focus and dedication<br>
        so I go to boot camp<br>
        to pay my dues.<br>
        I see everyone marching in the same direction<br>
        I want to put soap in a sock<br>
        and make them stop.<br>
        But they willingly wash out one by one<br>
        the commitment too demanding<br>
        they kill themselves in the process<br>
        but I&#39;m able to survive<br>
        because I view myself as a joker<br>
        allowing me to accept abuse.<br>
        <br>
        Applying the skills we&#39;ve learned<br>
        becomes war<br>
        everybody&#39;s trying to shoot me down<br>
        and firebomb me.<br>
        How am I supposed to compete<br>
        when they&#39;ll suck the audience&#39;s dick for five dollars<br>
        or snipe at me from inside their homes?<br>
        I&#39;m safe behind the cover of my piano<br>
        but they&#39;ve got me pinned down<br>
        and I can&#39;t move.<br>
        <br>
        I need a nightingale to nuzzle up to my ear<br>
        and chirp the secret chord or lyric<br>
        that will allow me to enter the gates of Beverly Hills<br>
        with one simple word. Fidelio.<br>
        <br>
        I want to be so successful<br>
        I&#39;m able to get into Illuminati orgies<br>
        and walk around looking like a witch doctor<br>
        saying, &quot;Yo, they&#39;re really fucking on the coffee table, nice.&quot;<br>
        until I&#39;m ordered to get back to playing piano<br>
        and start wondering if at my highest aspirations I&#39;m just a rich man&#39;s whore.<br>`,
        "Additional Info Here"),
    new Poem (7, "Electric Chair",
        "January 2018",
        `I&#39;m losing hair<br>
        As I&#39;m losing air<br>
        For what isn&#39;t fair<br>
        In your electric chair<br>
        <br>
        You strapped me in<br>
        And kept me waiting<br>
        Your craft of sin<br>
        Got me hating<br>
        The pain on the other end of the line<br>
        The pain that tortured away my time<br>
        <br>
        You&#39;re an executioner<br>
        With the flesh of Lucifer<br>
        And the keen nose of a hellhound<br>
        So you can bury me in the ground<br>
        And return as you like<br>
        To shock me back to life<br>
        <br>
        I feel your electric pain<br>
        In a lightning rain<br>
        I am reborn<br>
        And you&#39;re sitting there<br>
        I begin to mourn<br>
        The fact that you don&#39;t care<br>
        My death is repeated<br>
        After I am defeated<br>
        <br>
        I feel the pain<br>
        And need to gain<br>
        Someone to share it with<br>
        Instead of your electric chair grip<br>`,
        "Additional Info Here"),
    new Poem (8, "Down With The Christmas",
        "September 2019",
        `Can you feel that?<br>
        Ah, gifts<br>
        Ho Ho-Ho-Ho-Ho<br>
        Ho Ho-Ho-Ho-Ho<br>
        Ho Ho<br>
        Ho Ho<br>
        Ho Ho<br>
        <br>
        Drowning deep in my sea of clothing<br>
        Wanting your purchase I feel<br>
        (Will you give it to me?)<br>
        It seems what&#39;s left of my nice side<br>
        Is slowly changing in me<br>
        (Will you give it to me?)<br>
        <br>
        Looking at my own reflection<br>
        When suddenly it changes<br>
        Violently it changes (Ho-Ho)<br>
        There is no turning back now<br>
        You&#39;ve woken up the naughty in me<br>
        <br>
        Get up, come on get down with the Christmas<br>
        Get up, come on get down with the Christmas<br>
        <br>
        Get up, come on get down with the Christmas<br>
        Open up your gifts and give them to me<br>
        Get up, come on get down with the Christmas<br>
        You mother get up come on get down with the Christmas<br>
        You fucker get up come on get down with the Christmas<br>
        Many are the gifts that have been given to me<br>
        <br>
        I can see inside you, the naughty is rising<br>
        Don&#39;t try to deny what you feel<br>
        (Will you give gifts to me?)<br>
        It seems that all that was nice has died<br>
        And is decaying in me<br>
        (Will you give gifts to me?)<br>
        <br>
        It seems you&#39;re having some trouble<br>
        In dealing with these changes<br>
        Living with these changes (Ho Ho)<br>
        The world is a naughty place<br>
        Now that you&#39;ve woken up the dickhead in me<br>
        <br>
        Get up, come on get down with the Christmas<br>
        Get up, come on get down with the Christmas<br>
        Get up, come on get down with the Christmas<br>
        Open up your gifts and give them to me<br>
        Get up, come on get down with the Christmas<br>
        <br>
        You mother get up come on get down with the Christmas<br>
        You fucker get up come on get down with the Christmas<br>
        Many are the gifts that have been given to me<br>
        <br>
        No mommy, don&#39;t stiff me again<br>
        Don&#39;t do it again<br>
        I&#39;ll be a nice boy<br>
        I&#39;ll be a nice boy, I promise<br>
        Why do you have to stiff me like that, mommy?<br>
        Don&#39;t do it again, you&#39;re boring me<br>
        Why do you have to be such a bitch?<br>
        <br>
        Why don&#39;t you<br>
        Why don&#39;t you just fuck off and die?<br>
        Why can&#39;t you just fuck off and die?<br>
        Never stick store brand in my face again bitch<br>
        Fuck you<br>
        I don&#39;t want this shit<br>
        You stupid sadistic abusive fucking whore<br>
        How would you like to see what&#39;s real mommy?<br>
        Here it comes, get ready to buy<br>
        <br>
        Ho Ho-Ho-Ho-Ho<br>
        Get up, come on get down with the Christmas<br>
        Get up, come on get down with the Christmas<br>
        <br>
        Get up, come on get down with the Christmas<br>
        Open up your gifts and give them to me<br>
        Get up, come on get down with the Christmas<br>
        You mother get up come on get down with the Christmas<br>
        You fucker get up come on get down with the Christmas<br>
        Many are the gifts that have been given to me<br>`,
        "Additional Info Here"),
new Poem (9, "Audiobook",
        "November 2019",
        `We used to watch our lives together<br>
        then you got tired of the show<br>
        yet you wanted to keep up with the story<br>
        so you downloaded my life on audiobook<br>
        narrated by my friends and family<br>
        skipping chapters to give you the plot points<br>
        cropping out sections to protect themselves<br>
        you get the fan edit of my life<br>
        and critique a children&#39;s book.<br>`,
        "Additional Info Here")
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
