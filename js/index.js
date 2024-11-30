// THIS IS NOT MY CODE - used for teaching purposings on refactoring 
// Tutorial copied from:
// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.prev').addEventListener("click", (e) => {
	plusSlides(-1);
});

document.querySelector('.next').addEventListener("click", (e) => {
	plusSlides(1);
});

document.querySelectorAll('.dot').forEach((el, i) => {
	el.addEventListener('click', () => showSlides(slideIndex = i + 1) );
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

