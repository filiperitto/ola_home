
$(function(){
    $.contextMenu({
        selector: '.cta-menu-epi', 
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-episode')),        
    });
    $('.context-menu-list').css({ top: y + 50, left: x });
});

$(function(){
    $.contextMenu({
        selector: '.cta-share', 
        trigger: 'left',
        items: $.contextMenu.fromMenu($('#contextMenu-share')),  
        top: y + 50, 
        left: x       
    });
    $('.context-menu-list').css({ top: y + 50, left: x });
});

 $(document).ready(function() {
 
    
    // MAIN MENU ANIMATION
    // Menu change
    $(this).scrollTop(0); // importante <--
    var nav = $('header');


    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            nav.addClass("fixed-top");
        } else {
            nav.removeClass("fixed-top");
        }
    });
 
    // Preloader
    setTimeout(function(){
        $('.preloader').addClass('loaded');
    }, 2000);
 
});

$(function () {

    /*=== light-mode Switch ===*/
    $('.light-mode-cta').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('light-mode');
    });

    /*=== ContextMenu do Header ===*/
    $('.dropcta').click(function () {
        $('.dropmenu-header').toggleClass('open');
        $('.inv-modal').toggleClass('open');
    });

    /*=== Ativador Footer Player Switch ===*/
    $('.cta-player').click(function () {
        $('.footer-player').toggleClass('open');
        $('.content-container').toggleClass('player-open');
        $('.sidebar').toggleClass('player-open');
        $('.fila-sidebar').toggleClass('active');
        $('.nowplaying').toggleClass('active');
    });

    /*=== Ativador do sibar playlist  ===*/
    $('.cta-button-playlist-header').click(function () {
        $('.fila-sidebar').toggleClass('grow');
        $('.nowplaying').toggleClass('shrink');
    });
    
    /*=== Ativar o playlist e o Nowplayingr ===*/
    $('.cta-big-player').click(function () {
        $('.nowplaying').toggleClass('open');
        $('.fila-sidebar').toggleClass('open');
    });
    /*=== fix para o mobile  ===*/
    if ($(window).width() < 750) {
        $('.cta-big-player').click(function () {
            $('body').toggleClass('overhidden');
        }); 
     }

    /*=== Fechar o playlist e o Nowplaying ===*/
    $('.cta-close-nowplaying').click(function () {
        $('.nowplaying').toggleClass('open');
        $('.fila-sidebar').toggleClass('open');
    });
    /*=== fix para o mobile  ===*/
    if ($(window).width() < 750) {
        $('.cta-close-nowplaying').click(function () {
            $('body').toggleClass('overhidden');
        }); 
     }

    /*=== Tabs da playlist ===*/
    $('.epi-tabs').click(function () {
        $(this).addClass('active');
        $('.queue-tabs').removeClass('active');
        
        $('.queue-playlist').removeClass('select');
        $('.epi-playlist').addClass('select');
    });
    $('.queue-tabs').click(function () {
        $(this).addClass('active');
        $('.epi-tabs').removeClass('active');
        
        $('.epi-playlist').removeClass('select');
        $('.queue-playlist').addClass('select');
    });



});

    new Glider(document.querySelector('.epi-glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: {
          prev: '.prev-epi',
          next: '.next-epi'
        },
        responsive: [
          {
            breakpoint: 750,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 'auto',
              slidesToScroll: 1,
              itemWidth: 150
            }
          }
        ]
      });

    new Glider(document.querySelector('.originais-glider'), {
        slidesToShow: 'auto',
        slidesToScroll: 1,
        arrows: {
        prev: '.prev-ori',
        next: '.next-ori'
        },
        responsive: [
        {
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

    new Glider(document.querySelector('.genero-glider'), {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: {
          prev: '.prev-gen',
          next: '.next-gen'
        },
        responsive: [
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
/*
  var swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 9,
    spaceBetween: 30,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var swiper = new Swiper('.swiper-container', {
    //init: false,
    breakpoints: {
        10: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1100: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
    }
});

*/