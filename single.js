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
            document.querySelector("p").innerHTML = plante.pleje;
            document.querySelector("p:nth-of-type(2n)").innerHTML = plante.Egenskaber;
            document.querySelector(".img1").src = imgURL + plante.pic;
        }

    })
