;(function($){

    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    new WOW().init();

    // scrollTop init

    var totop = $('#toTop'),
        win = $(window)

    totop.on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 500)

    });
    
    if($('.counter').length){

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        
    }

    var mobileMenuIcon = $('.mobile-menu-icon');

    
    if (mobileMenuIcon.length) {
        mobileMenuIcon.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $('.skim-nav-menu').slideToggle();
        });

    }

    // $('li.menu-item-has-children > a').on('click', function (e) {

    //     e.preventDefault();
    
    //     var thisElement = $(e.target);
    
    //     if($(thisElement).next('.sub-menu').length){

    //         $("i",this).toggleClass('fa-angle-down fa-angle-up');
    //         thisElement.siblings('.sub-menu > li').fadeToggle();
    //         thisElement.siblings('.sub-menu').slideToggle();

    //     }
        
    // });

    // Slider One Column

    $(".testi-slider").owlCarousel({
        items:1,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    })

    $(".blogs-slider").owlCarousel({
        items:1,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    })

    // Slider Three Column

    $(".social-slider").owlCarousel({
        items:3,
        dots:false,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        margin:24,
    })

    // Slider Two Column

    $(".blog-slider").owlCarousel({
        items:2,
        nav:false,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        margin:24,
        responsive:{
            0:{
                items: 1,
            },
            992:{
                items: 2,
            }
        }
    })

    $(".skiff-slider").owlCarousel({
        items:2,
        nav:false,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        margin:24,
        responsive:{
            0:{
                items: 1,
            },
            992:{
                items: 2,
            }
        }
    })

    $(".owl-dots button").attr('aria-label', 'owlDot');
    $(".owl-nav button").attr('aria-label', 'owlNav');

})(jQuery);

(function(){

    // Sticky Nav

    const header = document.querySelector(".skim-header");
    window.onscroll = ()=>{
        this.scrollY > 50 ? header.classList.add("sticky") : header.classList.remove("sticky");
    }

    // Property Size Range

    const sizeRange = document.getElementById('size-range'),
          sizeThumb = document.getElementById('size-range-thumb'),
          sizeRangeValue = document.getElementById('size-range-value'),
          sizeRangeProgress = document.getElementById('size-range-progress');

        if( sizeRange != null || sizeRange != undefined){

            sizeRangeValue.innerHTML = ( sizeRange.value - 1 ) + "$";

            sizeRange.oninput = function(){
    
                sizeRangeValue.innerHTML = this.value + "$";
                sizeThumb.style.left = ( (this.value / 800) * 100 ) + "%";
                sizeRangeProgress.style.width = ( (this.value / 800 ) * 100) + "%"
    
            }

        }
        
    // Property Price Range

    const priceRange = document.getElementById('price-range'),
          priceThumb = document.getElementById('price-range-thumb'),
          priceRangeValue = document.getElementById('price-range-value'),
          priceRangeProgress = document.getElementById('price-range-progress');

        if( priceRange != null || priceRange != undefined){

            priceRangeValue.innerHTML = ( priceRange.value - 1 ) + "$";

            priceRange.oninput = function(){
    
                priceRangeValue.innerHTML = this.value + "$";
                priceThumb.style.left = ( (this.value / 800) * 100 ) + "%";
                priceRangeProgress.style.width = ( (this.value / 800 ) * 100) + "%"
    
            }

        }
})()
