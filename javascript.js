       document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
           {


               const url = "https://plante-2af1.restdb.io/rest/planter";
               const options = {
                   headers: {
                       'x-apikey': "602e76225ad3610fb5bb6339"
                   }
               }



               async function hentData() {
                   const respons = await fetch(url, options);
                   const json = await respons.json();
                   vis(json);
               }

               hentData();

               function vis(json) {
                   console.log(json);
                   const template = document.querySelector("template");

                   json.forEach(planter => {
                       const klon = template.cloneNode(true).content;

                       klon.querySelector("#titelPlante").textContent = planter.navn;

                       planteSection = document.querySelector("#multi_planter");

                       planteSection.appendChild(klon);
                   })
               }

           })
