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

// Open weather -------
/* Weather API
* https://openweathermap.org/current#name
* https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
*/

console.clear();
// const temperature = document.querySelector("#temperature");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

async function currentWeather() {
	/* City information
	* https://openweathermap.org/api/geocoding-api
	*/
    const data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=eb033ff797572dbf5b7af2e6327d1f3c
`
	)
		.then((response) => {
			response.json()
				.then(function (data) {				
					const img = document.createElement("img");
					
					/* Icon documentation
					* https://openweathermap.org/weather-conditions
					*/
					img.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);	
					icon.appendChild(img);
				
					city.innerText = data.name;
					description.innerText = data.weather[0].description;
					temperature.innerText = `${data.main.temp} °C`;
				});
		});
}
currentWeather();
