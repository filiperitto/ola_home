(function (){
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
})();
//------------------------ Splash 


(function(){
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
})();
//------------------------ Slider Episode Module 


(function(){
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
})();
//------------------------ Slider Originais Module


(function(){
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
                    slidesToShow: 2.2,
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
})();
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