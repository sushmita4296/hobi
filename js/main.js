$(document).ready(function () {
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.client-active').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

//    isotope
var $grid = $('.active-stuff').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })

  $('.stuff-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

    // menu active
    $('.button-group > button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    



})