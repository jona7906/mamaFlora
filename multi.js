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

                   klon.querySelector("article h3").textContent = planter.navn;

                   planteSection = document.querySelector("#multi_planter");

                   /*planteSection.innerHTML = "";*/
                   klon.querySelector("img").addEventListener("mouseover", skiftBilled);

                   function skiftBilled() {
                       console.log("hover på billedet " + this.outerHTML);

                       this.src = imgURL + planter.pic_hover;



                   }

                   klon.querySelector("img").addEventListener("mouseout", skiftTilbage);

                   function skiftTilbage() {
                       console.log("hover på billedet " + this.outerHTML);

                       this.src = imgURL + planter.pic;
                   }








                   klon.querySelector("article button").addEventListener("click", () => {
                       visPlante(planter);
                   })

                   klon.querySelector("article img").src = imgURL + planter.pic[0];

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

           function visPlante(hvad) {
               /*window.location.href = `singleview.html`;*/
               location.href = `singleview.html?id=${hvad._id}`;
           }

       })
