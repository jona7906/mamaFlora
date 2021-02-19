document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
    {

        const imgURL = "";
        const url = "https://plante-2af1.restdb.io/rest/planter";
        const options = {
            headers: {
                'x-apikey': "602e76225ad3610fb5bb6339"
            }
        }

        const urlPara = new URLSearchParams(window.location.search);
        const id = urlPara.get("id");

        async function hentData() {
            console.log("data");
            const respons = await fetch(url + `${id}`, options);
            const json = await respons.json();
            vis(json);
        }

        hentData();

        function vis() {}

    })
