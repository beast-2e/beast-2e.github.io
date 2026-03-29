const BEASTIES = [
    {
        headshotSrc: 'images/A_Beast.png',
        name: 'A Beast',
        pronouns: 'he/him/they/proto',
        year: '2027?',
        course: 'being fuzzy',
        bio: "I'm a local fluffy ball of chaos, feel free to hug me and give me headpats but please be gentle when interacting with me.\nI may or may not be created by one of the other beasties, and so share interests and hobbies with that one",
        isAlum: false,
    },

    {
        headshotSrc: '',
        name: 'Asa',
        pronouns: 'he/him',
        year: '2028',
        course: '6-3 (computer science)',
        bio: 'i enjoy rust, nix, and biking',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Becca.png',
        name: 'Becca',
        pronouns: 'she/her',
        year: '2026',
        course: '8 + 6-1 (physics + computer science), minor in 21M (music)',
        bio: 'puzzles are my entire personality. also much love for quantum and music and being in random places.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Bo.jpg',
        name: 'Bo',
        pronouns: 'he/him',
        year: '2029',
        course: '20 (biological engineering)',
        bio: 'I like technical theater and playing board, card and video games with friends, including but not limited to deep rock galactic, magic the gathering and minecraft :)',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Bryan.jpg',
        name: 'Bryan',
        pronouns: '',
        year: '2029',
        course: '10 + 6-3 (chemical engineering + computer science)',
        bio: 'Constantly watching movies if not actively drowning in coursework.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Cristian.jpg',
        name: 'Cristian',
        pronouns: 'he/him',
        year: '2029',
        course: '16 (aerospace engineering)',
        bio: 'Yurrrrr, its ya boy Cristian, the safest. I am a suspecting Course 16 person. I love doing stupid stuff like painting, building, showering, walking, etc. My favorite movies are Good Will Hunting, The Shawshank Redemption, and The Secret Life of Walter Mitty. If you ever need to want to hear my voice listen to this: <a href="https://youtu.be/gDESmAHp_5E?si=l5OLVle9XmJNcyke">https://youtu.be/gDESmAHp_5E?si=l5OLVle9XmJNcyke</a> and <a href="https://youtu.be/fC7oUOUEEi4?si=okEzbyOEqY9gZPuc">https://youtu.be/fC7oUOUEEi4?si=okEzbyOEqY9gZPuc</a> Follow the insta <a href="https://www.instagram.com/Th3_Sequel">@Th3_Sequel</a>',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Daniel.png',
        name: 'Daniel',
        pronouns: '',
        year: '2027',
        course: 'CMS + 21W',
        bio: 'yfn HASS major // I fucking love this place // 🇵🇷 🇵🇷 🇵🇷',
        isAlum: false,
    },

    {
        headshotSrc: 'images/David.jpg',
        name: 'David',
        pronouns: 'he/him',
        year: '2029',
        course: '6 + 18 (computer science + mathematics)',
        bio: '',
        isAlum: false,
    },

    {
        headshotSrc: 'images/eun.jpg',
        name: 'Eun',
        pronouns: 'they/she',
        year: '2026',
        course: "6 + WGS (computer science + women's & gender studies)",
        bio: 'I LOVE NERTZ!!!! i enjoy listening to music (jo yuri and iz*one! &#60;3), reading good (and bad &#59;-&#59;) fic, cool graphs and data, bread, & spending time with family and friends. my favorite quote: "how lucky i am to have something that makes saying goodbye so hard" - winnie the pooh, in the voice of my oldest sister zizi',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Izar.png',
        name: 'Izar',
        pronouns: '',
        year: '2026',
        course: '6-4 (computer science)',
        bio: 'hi! when i\'m not busy with dance practice, i love watching horror/romcom movies and anime (any love is war fans??), playing badminton, and watching speedruns of games i\'ve never heard of before. insta: <a href="http://instagram.com/izarprobknows">@izarprobknows</a>',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Joshua.jpeg',
        name: 'Joshua',
        pronouns: 'he/they',
        year: '2027',
        course: '6-3 (computer science), minor in 11 (urban studies and planning)',
        bio: 'Hi, I\'m Joshua! Love playing video games, hanging out with friends, playing board games, and tinkering with computers in my free time! You can follow me at <a href="http://instagram.com/thejokister">@thejokister</a> on Instagram.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/kano.jpg',
        name: 'Kanokwan',
        pronouns: 'she/her',
        year: '2025.5',
        course: '2 + 17 (meche + political science/global studies)',
        bio: 'hi i\'m kano! i like to make things, break things, and play with things. kurt vonnegut is my current fav author: cat\'s cradle and slaughterhouse-five are excellent books. i enjoy many many quotes, this week\'s notable one being &quot;the same hot water that softens the potato also hardens the egg.&quot; this is my ig, where i\'m most active: <a href="https://www.instagram.com/pakaprow">@pakaprow</a>. this is my twitter, where i\'m most dangerous: <a href="https://twitter.com/bbywch">@bbywch</a>. thank you.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Katie.png',
        name: 'Katie',
        pronouns: 'she/her',
        year: '2028',
        course: '1-12 (climate system science and engineering), also hoping to minor in public policy',
        bio: 'I am on the MIT cross country and track teams. I consider myself passionate about environmental and social issues. I am a crazy plant lady so I love gardening, as well as cooking and eating plant-based food. I also love crochet, wordplay, and the ukulele.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Mahdi.jpeg',
        name: 'Mahdi',
        pronouns: 'he/him',
        year: '2027',
        course: '6-9 (computation and cognition), minor in 8 (physics)',
        bio: 'Hiiii if you ever wanna trap me just throw me into a really good manhwa',
        isAlum: false,
    },

    {
        headshotSrc: '',
        name: 'Max',
        pronouns: 'they/them',
        year: '2026',
        course: '2A + 8-flex (mechanical engineering + physics)',
        bio: '',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Miau.png',
        name: 'Miau',
        pronouns: '',
        year: '2028',
        course: '6-9 + 24 (computation and cognition + linguistics)',
        bio: 'I am an evil beast >:3. I am one of the miauest miau of all the miaus. I can meow in 6 languages. And trust me... I certainly will.',
        isAlum: false,
    },

    {
        headshotSrc: '',
        name: 'Ming',
        pronouns: 'she/they',
        year: '2027',
        course: '20 (biological engineering), probably 21T (theater arts)',
        bio: 'hey hey im ming! i do art sometimes (painting and tape art) and need to get back into anime! find me on discord @mingming9620 or insta <a href="https://www.instagram.com/mngmng.ii">@mngmng.ii</a>~  i am a PLEASURE educator on floor so come find me if you ever need to chat <33',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Raleigh.jpg',
        name: 'Raleigh',
        pronouns: 'he/him',
        year: '2026? (probably 2027)',
        course: '6-3 (computer science)',
        bio: "hello!! hobbies/interests.... i'm in vgo (trumpet player) and i am also generally a bit of a Video Gamer (mainly singleplayer games though definitely not competitive stuff). been playing a lot of minecraft and yakuza recently, might have changed by the time u read this. also into reading litrpg slop and cultivation slop and such (currently reading dungeon crawler carl at the time of writing this bio). i dont have social media sorry",
        isAlum: false,
    },

    {
        headshotSrc: 'images/Riley.jpg',
        name: 'Riley',
        pronouns: 'he/him',
        year: '202?',
        course: '6-3 (computer science)',
        bio: "Hi, I'm Riley! Outside of computer science, my interests include linguistics, music, and fire spinning. I love to listen to people talk about things they're passionate about, and I'm almost always down to get roped into whatever shenanigans people are getting up to.",
        isAlum: false,
    },

    {
        headshotSrc: 'images/Serena An.jpeg',
        name: 'Serena',
        pronouns: 'she/her',
        year: '2026',
        course: '18 (mathematics)',
        bio: 'I\'m a math major who took a gap year to study Korean before coming to MIT. My hobbies include cooking, blogging, learning Japanese, and teaching friends how to play Nertz! Personal website: <a href="https://www.mit.edu/~anser/index.html">https://www.mit.edu/~anser</a>.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Sofia.png',
        name: 'Sofia',
        pronouns: 'she/her',
        year: '2027',
        course: '18 + 6-4 (mathematics + computer science)',
        bio: 'Hi! I\'m Sofia. I like sailing, ice skating, food, traveling, coding, and doing pretty much anything fun with friends. Instagram: <a href="http://instagram.com/sofia.domingc">@sofia.domingc</a> though I don\'t post much.',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Woongju.jpg',
        name: 'Woongju',
        pronouns: 'he/him',
        year: '2029',
        course: '8 + 18 (physics + mathematics)',
        bio: '',
        isAlum: false,
    },

    {
        headshotSrc: 'images/William Feng.png',
        name: 'William',
        pronouns: 'he/him',
        year: '2028',
        course: '6-5 + 18',
        bio: 'maker of things :) also VGO violinist and member of origaMIT, come say hi!!',
        isAlum: false,
    },

    {
        headshotSrc: 'images/Anastasya.jpg',
        name: 'Anastasiya / Unpopular Opinion',
        pronouns: 'she/they',
        year: '2019',
        course: '8 (physics), minor in computer science',
        bio: 'I love cuddles and passionately yelling at people about physics',
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Anu/Ara',
        pronouns: 'she/her, they/them',
        year: '2017',
        course: '6-3 (computer science)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Heidi.png',
        name: 'Heidi',
        pronouns: 'she/her',
        year: '2024',
        course: '18C + 24-2 (math with computer science + linguistics)',
        bio: "hi I'm heidi! outside of academics I like doing theater tech, watching movies, and learning about random things like airline logistics",
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Isabelle',
        pronouns: '',
        year: '2020',
        course: '',
        bio: 'Had way too much fun with cruft from the loading dock and ate way too much bad free food\nHad a blast overall and hope the vlla & speaker system Willy and I setup lives on',
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Javier',
        pronouns: '',
        year: '2024',
        course: '6-3 (computer science)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Jessica.jpg',
        name: 'Jessica',
        pronouns: '',
        year: '2024',
        course: '6-3 (computer science)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Josephine.jpg',
        name: 'Josephine',
        pronouns: 'she/her',
        year: '2024',
        course: '10B + 7 (chemical-biological engineering + biology)',
        bio: 'I guess I like a lot of things - I enjoy running + cycling, baking, reading and writing, playing music... aka down to do or try pretty much whatever! Favorite recent read is definitely Anthony Bourdain\'s Kitchen Confidential (+ all of his shows). Although my all time favorite thing to watch is definitely old Top Gear UK. Instagram: <a href="https://www.instagram.com/jose.phos.phine/">@jose.phos.phine</a>.',
        isAlum: true,
    },

    {
        headshotSrc: 'images/jwu.jpg',
        name: 'jwu',
        pronouns: 'she/her',
        year: '2014',
        course: '2 (mechanical engineering)',
        bio: "Hi! I had a great time living on Beast for all four years of undergrad. I'm currently working as an engineer for the government. My undergrad thesis was supposed to be about archer fish (in my profile) but unfortunately they all died during Winter Break. On another note... in my free time I play video games (just like in undergrad lol) and read light novels. I love Miyazaki films especially Howl's Moving Castle and Spirited Away. I hope everyone enjoys their life at MIT and treasure the time you spend with your friends there :)",
        isAlum: true,
    },

    {
        headshotSrc: 'images/Kaivu.jpg',
        name: 'Kaivu',
        pronouns: 'he/him',
        year: '2024',
        course: '18 + 6-4 (mathematics + computer science)',
        bio: 'I like science, tennis, and words. I\'m easy to find on messenger! Goodreads: <br><a href="https://www.goodreads.com/user/show/144931661-kaivu-hariharan">144931661-kaivu-hariharan</a>',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Karina.jpeg',
        name: 'Karina',
        pronouns: 'she/her',
        year: '2022',
        course: '6-14 (computer science and economics)',
        bio: 'NYC finance bro and EDM bro',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Keaten Clarno.jpg',
        name: 'Keaten',
        pronouns: 'they/them or any',
        year: '2024',
        course: '24-1 + 8-flex (philosophy + astrophysics)',
        bio: 'hello, i am keaten! i have a companion dog whose name is tiptoe, and i enjoy reading a lot (fantasy, philosophy, scifi), walking, having good conversations, cooking vegan foods, traveling and meeting people, and dancing :)',
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Kevin',
        pronouns: 'he/him',
        year: '2015',
        course: '6-3 (computer science)',
        bio: "I managed to barely survive and graduate, and now I've been working at Google for 5 years. Currently enjoying remote work, though it's made me into a bit of a hermit. My years on Beast were some of the best (and hardest) years of my life, so, uh, make the most of it!",
        isAlum: true,
    },

    {
        headshotSrc: 'images/Maddy.jpg',
        name: 'Maddy',
        pronouns: 'she/they',
        year: '2022',
        course: '21S -- 5 + CMS (chemistry + comparative media studies)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/beast-logo.png',
        name: 'Matthew',
        pronouns: 'he/they',
        year: '2023 + MEng',
        course: '6-1 + 18 (computer science + mathematics)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Merryn',
        pronouns: 'she/her',
        year: '2020',
        course: '9 (brain and cognitive sciences), minor in 7 (biology)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Mitali.jpeg',
        name: 'Mitali',
        pronouns: '',
        year: '2024',
        course: '20 (biological engineering), minors in 11 + E&S (urban studies and planning + environment & sustainability)',
        bio: "Hi! I'm a proud beast alum who is currently traveling with MISTI and loves music, the outdoors (in small doses), and yapping :&#41;",
        isAlum: true,
    },

    {
        headshotSrc: 'images/Nate.png',
        name: 'Nate',
        pronouns: 'he/they',
        year: '2024',
        course: '6-9 (computation and cognition), minors in 18 + 24-2 (mathematics + linguistics)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Rai.jpg',
        name: 'Rai',
        pronouns: 'she/her',
        year: '2025',
        course: '6-9 (computation and cognition)',
        bio: 'hi, i\'m rai! while on hall, i was on gamescomm (hosting a lot of baba), swagcomm (ask me about the pemis sweatpants), and hall chair (mostly making cursed party posters and hosting lunches during renovations). nowadays i have a slightly better sleep schedule, and i work on games for both my day job and for fun. hmu to talk about games!! :)',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Sebastian.png',
        name: 'Sebastian',
        pronouns: 'he/him',
        year: '2017',
        course: '24-2 (linguistics)',
        bio: 'Howdy! Linguistics major-turned-high-school-physics-teacher here, musician and writer, obsessed with music, languages, and books. Avid concertgoer, traveler, and hiker. Usually a little bit confused and always very excited!',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Thao Do.jpg',
        name: 'Thao',
        pronouns: 'she/her',
        year: '2025',
        course: '2A (mechanical engineering - manufacturing)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: '',
        name: 'Tina',
        pronouns: 'she/they',
        year: '2018',
        course: '6-3 (computer science) and one class away from a minor in CMS!',
        bio: 'I loved living on Beast because it was a place where I felt very free to become myself and meet and have fun with friends turned family. I did an M.Eng and kept visiting Beast. I am currently a software engineer living in the bay area in CA and Wolf Alice is my favorite band. at MIT, i co-led MIT Design for America, was an FLP and Camp Kesem counselor, helped plan MakeMIT hardware hackathon for 2 years, and danced in MIT Dance Troupe and MIT Bhangra. I loved taking project-based classes and HASS classes and being part of the Lifelong Kindergarten group at MIT Media Lab.',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Toomas.jpg',
        name: 'Toomas',
        pronouns: 'any',
        year: '2023',
        course: '6-2 (computer science)',
        bio: 'I am a person who likes playing video games and wasting time on youtube',
        isAlum: true,
    },

    {
        headshotSrc: 'images/William.jpeg',
        name: 'William/Loco',
        pronouns: '',
        year: '2018',
        course: '16 (aerospace engineering)',
        bio: '',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Willy.jpeg',
        name: 'Willy',
        pronouns: 'he/they',
        year: '2019',
        course: "21W (what's that?)",
        bio: 'I do artsy/design/coding stuff... Instagram: <a href="https://www.instagram.com/williamvvu">@williamvvu</a>',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Ygor.png',
        name: 'Ygor',
        pronouns: 'he/him',
        year: '2024',
        course: '5 (chemistry)',
        bio: 'I like to talk with people, cook and puzzles. Most likely place to find me at 8am is in the kitchen making banana pancakes (some would argue it is a banana omelette) talking with people passing by, I will be very grateful if you make the kitchen smell like something good like coffee. You can ask me to try some desserts you probably never tried before',
        isAlum: true,
    },

    {
        headshotSrc: 'images/Teresa Gao.jpg',
        name: 'Teresa',
        pronouns: 'she/her',
        year: '2023',
        course: '9 + 6-3 (brain and cognitive sciences + computer science and engineering)',
        bio: 'i love to write, dance, play viola, and otherwise explore the great indoors. i\'ve also been one of the people developing and maintaining this website since 2022! feel free to say hi <a href="https://www.instagram.com/teresa_gao">@teresa_gao</a>.',
        isAlum: true,
    },

    /* Template (it's okay to leave some fields blank) */
    // {
    //     headshotSrc: '',
    //     name: '',
    //     pronouns: '',
    //     year: '',
    //     course: '',
    //     bio: '',
    //     isAlum: false,
    // },
];

/**
 * First sort by most to least recent graduation year if standard,
 * then sort by name in alphabetical order.
 */
const beastieSort = (beastie1, beastie2) => {
    const year1 = beastie1.year;
    const year2 = beastie2.year;

    const isStandard1 = /^\d{4}/.test(year1);
    const isStandard2 = /^\d{4}/.test(year2);
    if (isStandard1 !== isStandard2) {
        return isStandard1 ? -1 : 1;
    }

    const prefix1 = isStandard1 ? year1.slice(0, 4) : "";
    const prefix2 = isStandard2 ? year2.slice(0, 4) : "";
    if (prefix1 !== prefix2) {
        return prefix2.localeCompare(prefix1);
    }

    if (year1 !== year2) {
        return year2.localeCompare(year1);
    }

    const name1 = beastie1.name.toUpperCase();
    const name2 = beastie2.name.toUpperCase();
    if (name1 < name2) return -1;
    if (name1 > name2) return 1;

    return 0;
};

BEASTIES.sort(beastieSort);
Object.freeze(BEASTIES);
