document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
	{

		const imgURL = "https://plante-2af1.restdb.io/media/";
		const url = "https://plante-2af1.restdb.io/rest/planter/";

		const options = {
			headers: {
				'x-apikey': "602e76225ad3610fb5bb6339"
			}
		}
		const urlPara = new URLSearchParams(window.location.search);
		const id = urlPara.get("id");

		console.log(id);

		async function hentData() {
			console.log("data");

			const respons = await fetch(url + `${id}`, options);
			plante = await respons.json();

			console.log("Planten", plante);
			visPlanten(plante);
		}

		hentData();

		function visPlanten() {
			console.log("visPlanten");
			document.querySelector("#Pleje").innerHTML = plante.pleje;

			document.querySelector("p:nth-of-type(2n)").innerHTML = plante.Egenskaber;

			document.querySelector(".sol img").src = imgURL + plante.sol_ikon;

			document.querySelector(".vand img").src = imgURL + plante.vand_ikon;

			document.querySelector(".navn").textContent = plante.navn;
			document.querySelector(".latin").textContent = plante.latin;

			document.querySelector(".img1").src = imgURL + plante.pic;
			document.querySelector(".img2").src = imgURL + plante.pic_hover;
		}

	})

let slideNummer = 1;
visSlides(slideNummer);

function plusSlides(n) {
	visSlides(slideNummer += n);
}

function currentSlide(n) {
	showSlides(slideNummer = n);
}

function visSlides(n) {
	let i;
	let slides = document.getElementsByClassName("billede_slideshow");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideNummer = 1
	}
	if (n < 1) {
		slideNummer = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" valgt_dot", "");
	}

	slides[slideNummer - 1].style.display = "block";
	dots[slideNummer - 1].className += " valgt_dot";
}
