//Header Fixed
(function () {

    var headerScroll = getId('header-main'),
        scrollHeight = 10,
        classHeader = 'fixed-top';

    //SCROLL
    window.addEventListener("scroll", scrollOn);

    function scrollOn() {
        animatedScroll(headerScroll, classHeader, scrollHeight);
    }

    //Função que on scroll muda o comportamento do elemento
    function animatedScroll(element, classN, height) {
        y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
        if (y > height) {
            element.className = classN;
        } else {
            element.className = '';
        }
    }

    // Função toggle adiciona ou tira a class do elemento
    function toggle(element, classe) {
        element.className = element.className ? '' : classe;
    }

    //Função que retorna o id do elemento
    function getId(id) {
        return document.getElementById(id);
    }


})();
//------------------------ Header




// Get a reference to the splash dialog
var splash = document.querySelector(".preloader");

// When the window is loaded....
window.addEventListener("load", function () {

    // Check to see if the cookie indicates a first-time visit
    if (document.cookie.indexOf("visited=true") === -1) {

        // Reveal the splash (remember: splash is hidden by default by CSS)
        splash.classList.remove("loaded");

        // .5 seconds later, hide the splash
        setTimeout(function () {
            splash.classList.add("loaded");

            // >> Set cookie to visited here <<
        }, 2000);
    }
});
//------------------------ Splash 



function light_modeToggle() {
    this.classList.toggle('active');
    document.body.classList.toggle('light-mode');
}
document.querySelector('.light-mode-cta').addEventListener('click', light_modeToggle);
//------------------------ Toggle Light-mode



function menuheaderToggle() {
    document.getElementById('dropmenu-header').classList.toggle('open');
    document.getElementById('inv-moda').classList.toggle('open');
}
// Select all the elements with example class.
var menuHeader = document.querySelectorAll('.dropcta');
// Loop through the elements.
for (var i = 0; i < menuHeader.length; i++) {
// Add the class margin to the individual elements.
menuHeader[i].addEventListener('click', menuheaderToggle);
}
//------------------------ Toggle Menu Header



function footerPlayerToggle() {
    document.getElementById("footer-player").classList.toggle('open');
    document.getElementById("content-container").classList.toggle('player-open');
    document.getElementById("sidebar").classList.toggle('player-open');
    document.getElementById("fila-sidebar").classList.toggle('active');
    document.getElementById("nowplaying").classList.toggle('active');
}
// Select all the elements with example class.
var playerSwitch = document.querySelectorAll('.cta-player');
// Loop through the elements.
for (var i = 0; i < playerSwitch.length; i++) {
// Add the class margin to the individual elements.
playerSwitch[i].addEventListener('click', footerPlayerToggle);
}
//------------------------ Footer Player Switch



function PlaylistToggle() {
    document.getElementById("fila-sidebar").classList.toggle('grow');
    document.getElementById("nowplaying").classList.toggle('shrink');
    document.getElementById("div-dumie-fila").classList.toggle('open');
}
// Select all the elements with example class.
var playlistSwitch = document.querySelectorAll('.cta-button-playlist-header');
// Loop through the elements.
for (var i = 0; i < playlistSwitch.length; i++) {
// Add the class margin to the individual elements.
playlistSwitch[i].addEventListener('click', PlaylistToggle);
}
//------------------------ playlist Switch



function PlaylistNowplayingToggle() {
    document.getElementById("nowplaying").classList.toggle('open');
    document.getElementById("fila-sidebar").classList.toggle('open');
}
// Select all the elements with example class.
var playlistNpSwitch = document.querySelectorAll('.cta-big-player');
// Loop through the elements.
for (var i = 0; i < playlistNpSwitch.length; i++) {
// Add the class margin to the individual elements.
playlistNpSwitch[i].addEventListener('click', PlaylistNowplayingToggle);
}
//------------------------ Ativar o playlist e o Nowplayingr



var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 750) {
	function fixPlaylistNowplayingToggle() {
        document.getElementById("body").classList.toggle('overhidden');
    }
    // Select all the elements with example class.
    var fixplaylistNpSwitch = document.querySelectorAll('.cta-big-player');
    // Loop through the elements.
    for (var i = 0; i < fixplaylistNpSwitch.length; i++) {
    // Add the class margin to the individual elements.
    fixplaylistNpSwitch[i].addEventListener('click', fixPlaylistNowplayingToggle);
    }
    
	function fixclosePlaylistNowplayingToggle() {
        document.getElementById("body").classList.toggle('overhidden');
    }
    // Select all the elements with example class.
    var fixcloseplaylistNpSwitch = document.querySelectorAll('.cta-close-nowplaying');
    // Loop through the elements.
    for (var i = 0; i < fixcloseplaylistNpSwitch.length; i++) {
    // Add the class margin to the individual elements.
    fixcloseplaylistNpSwitch[i].addEventListener('click', fixclosePlaylistNowplayingToggle);
    }
} 
//------------------------ fix body scroll para mobile



function closePlaylistNowplayingToggle() {
    document.getElementById("nowplaying").classList.toggle('open');
    document.getElementById("fila-sidebar").classList.toggle('open');
}
// Select all the elements with example class.
var closeplaylistNpSwitch = document.querySelectorAll('.cta-close-nowplaying');
// Loop through the elements.
for (var i = 0; i < closeplaylistNpSwitch.length; i++) {
// Add the class margin to the individual elements.
closeplaylistNpSwitch[i].addEventListener('click', closePlaylistNowplayingToggle);
}
//------------------------ Fechar o playlist e o Nowplaying



function PlaylistTabsepiToggle() {
    this.classList.toggle('active');
    document.getElementById('queue-tabs').classList.toggle('active');
    document.getElementById('queue-playlist').classList.toggle('select');
    document.getElementById('epi-playlist').classList.toggle('select');
}
// Select all the elements with example class.
var playlistTabsepiSwitch = document.querySelectorAll('.epi-tabs');
// Loop through the elements.
for (var i = 0; i < playlistTabsepiSwitch.length; i++) {
// Add the class margin to the individual elements.
playlistTabsepiSwitch[i].addEventListener('click', PlaylistTabsepiToggle);
}
//------------------------ Tabs switch da playlist



function PlaylistTabsqueueToggle() {
    this.classList.toggle('active');
    document.getElementById('epi-tabs').classList.toggle('active');
    document.getElementById('queue-playlist').classList.toggle('select');
    document.getElementById('epi-playlist').classList.toggle('select');
}
// Select all the elements with example class.
var playlistTabsqueueSwitch = document.querySelectorAll('.queue-tabs');
// Loop through the elements.
for (var i = 0; i < playlistTabsqueueSwitch.length; i++) {
// Add the class margin to the individual elements.
playlistTabsqueueSwitch[i].addEventListener('click', PlaylistTabsqueueToggle);
}
//------------------------ Tabs switch da playlist




function AloStoriesToggle() {
    document.getElementById('storie-box').classList.toggle('open');
}
// Select all the elements with example class.
var AloStoriesSwitch = document.querySelectorAll('.cta-ola-stories');
// Loop through the elements.
for (var i = 0; i < AloStoriesSwitch.length; i++) {
// Add the class margin to the individual elements.
AloStoriesSwitch[i].addEventListener('click', AloStoriesToggle);
}
//------------------------ Stories Alo




new Glider(document.querySelector('.epi-glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    duration: 2,
    arrows: {
        prev: '.prev-epi',
        next: '.next-epi'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 1,
            itemWidth: 150
        }
    }]
});
//------------------------ Slider Episode Module 



new Glider(document.querySelector('.originais-glider'), {
    slidesToShow: 'auto',
    slidesToScroll: 1,
    duration: 2,
    arrows: {
        prev: '.prev-ori',
        next: '.next-ori'
    },
    responsive: [{
            breakpoint: 350,
            settings: {
                itemWidth: 107
            }
        },
        {
            breakpoint: 425,
            settings: {
                itemWidth: 129
            }
        },
        {
            breakpoint: 450,
            settings: {
                itemWidth: 101
            }
        },
        {
            breakpoint: 750,
            settings: {
                itemWidth: 166
            }
        }
    ]
});
//------------------------ Slider Originais Module



new Glider(document.querySelector('.genero-glider'), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    duration: 2,
    arrows: {
        prev: '.prev-gen',
        next: '.next-gen'
    },
    responsive: [
        {
            breakpoint: 360,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2.5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3.5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 750,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1350,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 7,
                slidesToScroll: 1
            }
        }
    ]
});
//------------------------ Slider Genero Module


$(function () {
    $.contextMenu({
        selector: '.cta-menu-epi',
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-episode')),
    });
});
$(function () {
    $.contextMenu({
        selector: '.cta-share',
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-share')),
    });
    $('.context-menu-list').css({
        top: y + 50,
        left: x
    });
});
//------------------------ Header