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

			document.querySelector(".ikon img").src = src = "https://plante-2af1.restdb.io/media/602e7152e1697e5a00016d03";
			document.querySelector(".ikon:nth-of-type(2n) img").src = "https://plante-2af1.restdb.io/media/602e7153e1697e5a00016d04";
			document.querySelector(".ikon:nth-of-type(3n) img").src = "https://plante-2af1.restdb.io/media/602e7153e1697e5a00016d05";

			document.querySelector(".vand_guide img").src = "https://plante-2af1.restdb.io/media/602e7155e1697e5a00016d09";
			document.querySelector(".vand_guide .ikon:nth-of-type(2n) img").src = "https://plante-2af1.restdb.io/media/602e7155e1697e5a00016d0a";
			document.querySelector(".vand_guide .ikon:nth-of-type(3n) img").src = "https://plante-2af1.restdb.io/media/602e7156e1697e5a00016d0b";
		}
	})
