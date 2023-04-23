
;(function($){

  $('.social-slider').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
  })

})(jQuery);

/* nav toggle mobile */ 

const nav = document.querySelector('#frame-1');

const openNavBtn = document.querySelector('#group-631774');
const closeNavBtn = document.querySelector('#nav_toggle-close');



const openNav = () =>{
    nav.style.display = "flex";
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'flex';
    console.log("this was made by josh chandler :)")
}

openNavBtn.addEventListener("click", openNav )



const CloseNav = () =>{
    nav.style.display = "none";
    openNavBtn.style.display = 'flex';
    closeNavBtn.style.display = 'none';

}

closeNavBtn.addEventListener('click', CloseNav )


/* end of nav */ 



/* modal */ 
document.querySelectorAll('.image-container img').forEach(image =>{
	image.onclick= () =>{
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
    console.log("i was clicked")
	}
});

document.querySelector('.popup-image').onclick = () =>{
	document.querySelector('.popup-image').style.display = 'none';
}



console.log(document.querySelectorAll('.image-container img'))


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



