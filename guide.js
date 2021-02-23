document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
    {

        const url = "https://plante-2af1.restdb.io/rest/planter";
        const imgURL = "https://plante-2af1.restdb.io/media/";

        const options = {
            headers: {
                'x-apikey': "602e76225ad3610fb5bb6339"
            }
        }


        async function hentData() {
            console.log("data");

            const respons = await fetch(url, options);
            plante = await respons.json();

            console.log("Plante", plante);
            visBilleder(plante);
        }

        hentData();


        function visBilleder() {
            console.log("visBilleder");

            document.querySelector(".sol_guide img").src = imgURL + plante.sol_ikon[0];
            document.querySelector(".sol_guide img:nth-of-type(2n)").src = imgURL + plante.sol_ikon[1];
            document.querySelector(".sol_guide img:nth-of-type(3n)").src = imgURL + plante.sol_ikon[2];
            document.querySelector(".sol_guide img:nth-of-type(4n)").src = imgURL + plante.sol_ikon[3];
            document.querySelector(".sol_guide img:nth-of-type(5n)").src = imgURL + plante.sol_ikon[4];
            document.querySelector(".sol_guide img:nth-of-type(6n)").src = imgURL + plante.sol_ikon[5];

            document.querySelector(".vand_guide img").src = imgURL + plante.vand_guide[0];
            document.querySelector(".vand_guide img:nth-of-type(2n)").src = imgURL + plante.vand_guide[1];
            document.querySelector(".vand_guide img:nth-of-type(3n)").src = imgURL + plante.vand_guide[2];
            document.querySelector(".vand_guide img:nth-of-type(4n)").src = imgURL + plante.vand_guide[3];
            document.querySelector(".vand_guide img:nth-of-type(5n)").src = imgURL + plante.vand_guide[4];
            document.querySelector(".vand_guide img:nth-of-type(6n)").src = imgURL + plante.vand_guide[5];

        }
    })
