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

    $('li.menu-item-has-children > a').on('click', function (e) {

        e.preventDefault();
    
        var thisElement = $(e.target);
    
        if($(thisElement).next('.sub-menu').length){

            $("i",this).toggleClass('fa-angle-down fa-angle-up');
            thisElement.siblings('.sub-menu > li').fadeToggle();
            thisElement.siblings('.sub-menu').slideToggle();

        }
        
    });

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
        responsive:{
            0:{
                items: 1,
            },
            576:{
                items: 2,
            },
            992:{
                items: 3,
            }
        }
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
                nav: true
            },
            992:{
                items: 2,
                nav: false
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
                nav: true,
            },
            992:{
                items: 2,
                nav:false,
            }
        }
    })

    // Single Skiff Slider

    jQuery(document).ready(function() {
        var skiffPreview = jQuery(".skiff-preview");
        var skiffThumb = jQuery(".skiff-thumb");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;
    
        skiffPreview.owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            animateIn: "fadeIn",
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            dots: false,
            loop: false,
            responsiveRefreshRate: 200,

        }).on("changed.owl.carousel", syncPosition);
    
        skiffThumb.on("initialized.owl.carousel", function() {

            skiffThumb .find(".owl-item").eq(0).addClass("current");

        }).owlCarousel({
            items: slidesPerPage,
            smartSpeed: 1000,
            slideSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            responsive:{
                0:{
                    items: 3,
                    margin: 16
                },
                768:{
                    items: slidesPerPage,
                    margin:32
                }
            }

        }).on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block
    
            skiffThumb
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = skiffThumb.find(".owl-item.active").length - 1;
            var start = skiffThumb
            .find(".owl-item.active")
            .first()
            .index();
            var end = skiffThumb
            .find(".owl-item.active")
            .last()
            .index();
        
            if (current > end) {
                skiffThumb.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
                skiffThumb.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }
    
        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            skiffPreview.data("owl.carousel").to(number, 100, true);
          }
        }
    
        skiffThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = jQuery(this).index();
          skiffPreview.data("owl.carousel").to(number, 300, true);
        });

    });

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
