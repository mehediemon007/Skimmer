;(function($){

    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();

    new WOW().init();

    // scrollTop init

    var totop = $('#toTop'),
        win = $(window),
        videoLightbox = $('.skim-video-lightbox');

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

    // win.on('scroll', function () {

    //     if (win.scrollTop() > 150) {
    //         totop.fadeIn();
    //     } else {
    //         totop.fadeOut();
    //     }
        
    // });

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

    // Date Picker

    if($(".date-input").length){
        $(".date-input").datepicker({
            format:'dd-mm-yyyy',
            autoclose:true,
        }).datepicker("setDate",'now');
    }
    
    // Filter Select

    if($("select").length){

        $("select").niceSelect();

    }

     // Slider One Column

     $(".testi-slider").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    })

    // Slider Three Column

    $(".social-slider").owlCarousel({
        items:3,
        loop:true,
        dots:false,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        margin:24,
    })

    // Slider Two Column

    $(".blog-slider").owlCarousel({
        items:2,
        loop:true,
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
        loop:true,
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

    // Slider Four Column

    $(".sliderFourCol").owlCarousel({
        items:4,
        loop:true,
        dots:false,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive:{
            0:{
                items: 1,
                margin: 16
            },
            380:{
                items:2,
                margin: 16
            },
            992:{
                items:3,
                margin: 16
            },
            1200:{
                items:4,
                margin:30
            }
        }
    })

    // Slider Three Fraction Column

    $(".sliderThreeHalfCol").owlCarousel({
        items:3.5,
        loop:true,
        margin:20,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dots:false,
        responsive:{
            0:{
                items: 1.5,
                margin: 16
            },
            575:{
                items: 2.5,
                margin: 20
            },
            768:{
                items: 3.5,
            },
            992:{
                items: 2.5,
            },
            1200:{
                items: 3.5,
                margin: 30
            }
        }
    })

    // Slider Three Column Rtl

    $(".sliderThreeHalfColLeft").owlCarousel({
        items:3.5,
        loop:true,
        margin:30,
        nav:true,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        dots:false,
        rtl:true,
        responsive:{
            0:{
                items: 1.5,
                margin: 16
            },
            575:{
                items: 2.5,
                margin: 20
            },
            768:{
                items: 3.5,
            },
            992:{
                items: 2.5,
            },
            1200:{
                items: 3.5,
                margin: 30
            }
        }
    })

    // Banner Carousel

    $(".sliderTwoHalfCol").owlCarousel({
        items:2.5,
        loop:true,
        margin:30,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items: 1.25,
                margin: 20
            },
            575:{
                items: 1.75,
                margin: 20
            },
            768:{
                items:2.5,
                margin: 30
            },
            1200:{
                items: 1.75
            },
            1400:{
                items:2.5
            }
        }
    });

    // Brands Carousel

    $(".brands-wpr").owlCarousel({
        items:4,
        margin:85,
        stagePadding: 30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items: 2,
                margin: 30
            },
            768:{
                items: 3,
            },
            992:{
                items: 4,
                margin: 85
            }
        }
    });

    // Brands Carousel

    $(".brands-wpr.sliderThreeCol").owlCarousel({
        items:3,
        margin:85,
        stagePadding: 30,
        dots:false
    });

    // Review Carousel

    $(".reviewSlider").owlCarousel({
        items:1,
        dots:true,
        nav:false,
    })

    $(".owl-dots button").attr('aria-label', 'owlDot');
    $(".owl-nav button").attr('aria-label', 'owlNav');

    // Video Lightbox

    if (videoLightbox.length) {
        videoLightbox.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // Password Type Toggle

    if($(".pass-input").length){

        $(".pass-input > i").click(function(){
            $(this).toggleClass("fa-eye-slash");
            if($(this).parents().siblings("input").attr("type") == "text"){
               $(this).parents().siblings("input").attr("type","password")
            }
            else{
             $(this).parents().siblings("input").attr("type","text")
            }
        })

    }

    // Language Switcher  active

    $(".lang-switcher").on("click", function(e){
        $(".lang-list").toggleClass("lang-list-open");
    });

    $(".lang-list li").each(function(){

        $(this).on("click", function(){
            var flagSrc = $(this).children(".flag").children("img").attr("src"); 
            var langText = $(this).children(".lang-text").text();
            $(".lang-switcher > .flag img").attr("src", flagSrc);
            $(".lang-switcher > .lang span").text(langText);
        });

    });

    // Login Tab

    $(".log-tab-links .nav-link").on("click",function(){

        var el = $(".auth-heading");
        el.text(el.text() ==  "SIGN IN!" ? "REGISTER" : "SIGN IN!");
  
    })
    
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
