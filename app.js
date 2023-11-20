const starwars=[
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://th.bing.com/th/id/R.121b35a07700fef964e869613e7774a5?rik=OA0touxwC9Lljg&riu=http%3a%2f%2fwww.mwctoys.com%2fimages3%2freview_pfc3po_1.jpg&ehk=kucEH6eh1bL7Q8XiC4j4NP2Gqu1DqSBV6NO5ggYDQ30%3d&risl=&pid=ImgRaw&r=0",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://vignette.wikia.nocookie.net/es.starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg/revision/latest?cb=20160716165228",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
  ]

  const row = document.querySelector(".row");
  let isStatus = true;
  
  document.getElementById("show-btn").addEventListener("click", function (e) {
    if (isStatus === true) {
      row.innerHTML = ""; // Önceki içeriği temizle
  
      for (const character of starwars) {
        row.innerHTML += `
          <div class="col-lg-3 mb-5">
            <div class="card " style="width: 300px; height: 450px; overflow: hidden; display: flex; flex-direction: column; background-color:black; color:white;">
              <img src="${character.pic}" class="card-img-top" alt="${character.name}" style="object-fit: cover; flex: 1 1 0; height: 350px;"> 
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">${character.homeworld || "Unknown"}</p> 
              </div>
            </div>
          </div>
        `;
      }
      e.target.style.cssText = "width: 150px; height: 50px; margin: 50px; background: gold; color:black;";
      e.target.textContent = "Kaldır";
      isStatus = false;
    } else {
      document.querySelectorAll(".col-lg-3").forEach(card => card.remove());
      e.target.style.cssText = "width: 150px; height: 50px; margin: 50px; background: silver;color:black;";
      e.target.textContent = "Listele";
      isStatus = true;
    }
  });
  