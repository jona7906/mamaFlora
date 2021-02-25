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
            document.querySelector("#pleje").innerHTML = plante.pleje;

            document.querySelector("#egenskaber").innerHTML = plante.Egenskaber;

            document.querySelector(".sol img").src = imgURL + plante.sol_ikon;

            document.querySelector(".vand img").src = imgURL + plante.vand_ikon;

            document.querySelector(".navn").textContent = plante.navn;
            document.querySelector(".latin").textContent = plante.latin;

            // Indsætter billeder fra databasen til de t img-tags
            document.querySelector(".img1").src = imgURL + plante.pic;
            document.querySelector(".img2").src = imgURL + plante.pic_hover;
            document.querySelector(".img3").src = imgURL + plante.pic_home;

            document.querySelector(".koebknap").href = plante.koebslink;
            document.querySelector(".tilbageknap").addEventListener("click", tilbageTilMenu);
        }

        function tilbageTilMenu() {
            console.log("tilbageTilMenu")
            history.back();
        }

    })

// sætter variablen "slideNummer" = 1
let slideNummer = 1;

visSlides(slideNummer); // Kalder funktionen "visSlides" og sender slideNummer værdien med (dvs. 1). funktionen visSlide får værdien fra variablen "slideNummer" med sig

function plusSlides(n) {
    console.log("N:" + n); // n = 1 ved pil frem og -1 ved pil tilbage. Det er angivet i HTML filen.
    visSlides(slideNummer += n); // Kalder funktionen "visSlides" og sender slideNummer værdien med, samt lægger n (1/-1) til.
}

// Kør funktion visSlides - har værdien fra "n" med sig (1/-1)
function visSlides(n) {

    let i; // Opretter variablen i så den kan tælles på
    let slides = document.getElementsByClassName("billede_slideshow"); // Opretter variablen slides = classerne med "billede_slideshow"
    let dots = document.getElementsByClassName("dot"); // Opretter varibalen dots = classerne med "dot"

    // To if-sætninger til at styre hvilket nummer af ".billede_slideshow" der skal vises.
    // Hvis n (her 4) > 3 så sæt slideNummer = 1, således at billede 1 bliver vist (se consollen)
    if (n > slides.length) {
        console.log("N = " + n); // N = 4 da n bliver 3(slideNummer) + 1(n) = 4
        console.log("Hvor mange img'er der = " + slides.length); // Der er 2 diver med classen billede_slideshow

        slideNummer = 1 // Sæt slideNummer = 1 dvs vis billede 1
    }

    // Hvis n (her 0) < 1 så sæt slideNummer = 3 således at billede 3 bliver vist
    if (n < 1) {
        console.log("N = " + n); // N = 0 da n bliver 1 - 1 = 0
        console.log("Hvor mange img'er der = " + slides.length); // Der er 3 diver med classen billede_slideshow


        slideNummer = slides.length // Sæt slideNummer = 3 dvs vis billede 3
    }
    // For = loop igennem kode et antal gange
    for (i = 0; i < slides.length; i++) { // Sætter først i = 0. Derefter, hvis i(0) < 2(slide.length) så plus én til i.
        slides[i].style.display = "none"; // variable "slides" får tallet 1 og sætter display til none
    }
    for (i = 0; i < dots.length; i++) { // Sætter først i = 0. Derefter, hvis i(0) < 2 (dot.length) så plus én til i.
        dots[i].className = dots[i].className.replace(" valgt_dot", ""); // variable "dot" får tallet 1 og erstatter classname "valgt_dot" med ingenting
    }

    slides[slideNummer - 1].style.display = "block"; // de billeder hvor i = 0 får display block, således at man ikke kan se billederne
    dots[slideNummer - 1].className += " valgt_dot"; // Den prik uden i = 0 får tilføjet klassen "valgt_dot"
}
