   document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
       {
           const url = "https://plante-2af1.restdb.io/rest/planter";
           const options = {
               headers: {
                   'x-apikey': "602e76225ad3610fb5bb6339"
               }
           }

           const imgURL = "https://plante-2af1.restdb.io/media/";

           async function hentData() {
               const respons = await fetch(url, options);
               const json = await respons.json();
               vis(json);
           }

           hentData();

           let planteSection = document.querySelector("#multi_planter");
           let filter = "navn"; // opretter variablen "filter" og sætter den = navn, således at det er den data-kategori den er lig med.
           const filterknapper = document.querySelectorAll(".filter .sorter"); // opretter variablen oog henvender sig til alle de knapper der skal kunne filtreres på i DOM'en
           const overskriften = document.querySelector(".overskrift_filter"); // Opretter varibalen "overskriften" så overskriften kan ændre sig ud fra sortering

           filterknapper.forEach(knap => knap.addEventListener("click", sorter)) // eventlistener på alle filterknapperne - hvis der trykkes skal den køre funktionen "sorter"


           function sorter() { // funktionen "sorter"
               console.log("sortering"); // Tjekker om funktionen bliver kaldt
               filter = this.dataset.kategori; // filter variablen sættes lig med den dataset knap som der blev trykket på
               document.querySelector(".valgt").classList.remove("valgt"); // Knappen med klassen "valgt" får den klasse fjernet
               this.classList.add("valgt"); // den nye knap får klassen "valgt"

               hentData(); // Henter data - funktionen vis bliver derunder kørt, og den nye data bliver vist

               overskriften.textContent = this.textContent;
           }

           function vis(json) { // funktion "vis" med data fra databasen
               console.log(json); // Tjekker om funktionen bliver vist
               const template = document.querySelector("template"); // Opretter en variable til templaten
               planteSection.textContent = "";

               json.forEach(planter => { // Looper igennem databasen
                   const klon = template.cloneNode(true).content; // Gør det muligt at klone ned i template

                   klon.querySelector("article h3").textContent = planter.navn; // overskriften hentes fra databasen

                   klon.querySelector("article img").src = imgURL + planter.pic[0]; // billedet hentes fra databasen

                   klon.querySelector("img").addEventListener("mouseover", skiftBilled); // Laver en eventlistener som kører funktion "skiftBilled" når musen holdes over img

                   function skiftBilled() { // Funktionen "skiftBilled"
                       console.log("hover på billedet " + this.outerHTML); // Tjekker om funktionen køres på "this" (den gældende i "planter")

                       this.src = imgURL + planter.pic_hover; //Det gældende img får skiftet billedet ud med "pic_hover" fra databasen

                   }

                   klon.querySelector("img").addEventListener("mouseout", skiftTilbage); // Laver en eventlistener som kører funktion "skiftTilbage" når musen fjernes fra img

                   function skiftTilbage() {
                       console.log("hover på billedet " + this.outerHTML); // Tjekker om funktionen køres på "this" (den gældende i "planter")

                       this.src = imgURL + planter.pic; //Det gældende img får skiftet billedet ud med "pic" fra databasen
                   }

                   klon.querySelector("article button").addEventListener("click", () => {
                       visPlante(planter);
                   })

                   klon.querySelector(".article_billede").addEventListener("click", () => {
                       visPlante(planter);
                   })


                   // alle filter

                   if (filter == "navn") {
                       planteSection.appendChild(klon);

                   }

                   // vand filtre
                   if (filter == "lidt_vand") {
                       if (planter.vand == 1) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }

                   if (filter == "moderat_vand") {
                       if (planter.vand == 2) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }

                   if (filter == "meget_vand") {
                       if (planter.vand == 3) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }
                   // sol filtre
                   if (filter == "lidt_sol") {
                       if (planter.sol == 1) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }

                   if (filter == "moderat_sol") {
                       if (planter.sol == 2) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }

                   if (filter == "meget_sol") {
                       if (planter.sol == 3) {
                           planteSection.appendChild(klon);
                           console.log(planter);
                       }
                   }

                   // spiselig
                   if (filter == "spiselig") {

                       if (planter.spiselig == "ja") {
                           planteSection.appendChild(klon);
                       }
                   }

                   // blomstrende
                   if (filter == "blomster") {

                       if (planter.blomster == "ja") {
                           planteSection.appendChild(klon);
                       }
                   }

                   // om den hænger
                   if (filter == "form") {

                       if (planter.form == "ned") {
                           planteSection.appendChild(klon);
                       }
                   }

                   // Luftrenseende
                   if (filter == "luftrensende") {

                       if (planter.luftrensende == "ja") {
                           planteSection.appendChild(klon);
                       }
                   }
                   // sværhedsgraden er nem
                   if (filter == "grad") {

                       if (planter.grad == "nem") {
                           planteSection.appendChild(klon);
                       }
                   }

               })

           }

           function visPlante(hvad) {
               /*window.location.href = `singleview.html`;*/
               location.href = `singleview.html?id=${hvad._id}`;
           }

       })
