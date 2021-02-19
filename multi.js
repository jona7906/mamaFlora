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

           let filter = "navn";
           const filterknapper = document.querySelectorAll(".filter button");

           filterknapper.forEach(knap => knap.addEventListener("click", sorter))

           function sorter() {
               console.log("sortering");
               filter = this.dataset.kategori;
               document.querySelector(".valgt").classList.remove("valgt");
               this.classList.add("valgt");
               hentData();
           }

           function vis(json) {
               console.log(json);
               const template = document.querySelector("template");
               let multiPlanter = document.querySelector("#multiPlanter");





               json.forEach(planter => {
                   const klon = template.cloneNode(true).content;

                   klon.querySelector("#titelPlante").textContent = planter.navn;

                   planteSection = document.querySelector("#multi_planter");

                   klon.querySelector("button.buttonPlante").addEventListener("click", visPlante);

                   klon.querySelector("#imgPlante").src = imgURL + planter.pic[0];

                   if (filter == "navn") {
                       planteSection.appendChild(klon);
                   }
                   if (filter == "vand") {
                       planteSection.appendChild(klon);
                   }
                   if (filter == "sol") {
                       planteSection.appendChild(klon);
                   }
               })

           }

           function visPlante(planter) {
               /*window.location.href = `singleview.html`;*/
               location.href = `singleview.html?id=${planter._id}`;
           }

       })
