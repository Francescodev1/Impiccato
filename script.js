const lettere = "abcdefghijklmnopqrstuvwxyz";
const parole = [
  // elenco delle parole
  "salame",
  "catamarano",
  "bamba",
  "poltiglia",
  "bicicletta",
  "cappuccino",
  "gelato",
  "pizza",
  "pasta",
  "caffè",
  "tiramisù",
  "panettone",
  "focaccia",
  "spaghetti",
  "formaggio",
  "lasagna",
  "risotto",
  "gnocchi",
  "espresso",
  "prosciutto",
  "mozzarella",
  "limoncello",
  "cannoli",
  "biscotti",
  "ciabatta",
  "pesto",
  "tortellini",
  "cappelletti",
  "amaretto",
  "grappa",
  "panna",
  "cioccolato",
  "vino",
  "tramezzino",
  "bruschetta",
  "minestrone",
  "polenta",
  "tartufo",
  "frittata",
  "cacciatorini",
  "focaccine",
  "ciambella",
  "crostata",
  "cavatelli",
  "tagliatelle",
  "orecchiette",
  "crespelle",
  "cassata",
  "gelatina",
  "biscotto",
  "cannelloni",
  "cavallucci",
  "ciambellone",
  "cioccolatino",
  "cornetto",
  "croissant",
  "fagiolini",
  "frittelle",
  "gorgonzola",
  "grissini",
  "lasagnette",
  "linguine",
  "mascarpone",
  "merendina",
  "muffin",
  "nocciola",
  "panettino",
  "parmigiano",
  "pasticcini",
  "pizzette",
  "polpettone",
  "ravioli",
  "ricciarelli",
  "salsiccia",
  "sbrisolona",
  "scamorza",
  "scrocchiarelle",
  "semifreddo",
  "sformato",
  "sorbetto",
  "stracciatella",
  "strudel",
  "tiramisu",
  "tortelloni",
  "tortine",
  "trancio",
  "trentino",
  "trippa",
  "tubetti",
  "tuffo",
  "tuttologo",
  "ubriaco",
  "uovo",
  "valdostano",
  "vaporiera",
  "vermicelli",
  "vitello",
  "zanella",
  "zampone",
  "zabaione",
  "zafferano",
  "ziti",
  "zucchero",
  "zuppa",
  "zuppetta",
  "zuccotto",
  "zucca",
  "zuppiere",
  "zimino",
  "zenzero",
  "zeppole",
  "zampogna",
  "zingarella",
  "zingarata",
  "zingaro",
  "zampognari",
  "zaffera",
  "zodiaco",
  "zattera",
  "zarzuela",
  "zibibbo",
  "zanzara",
  "zaino",
  "zibellino",
  "zefiro",
  "zoo",
  "zona",
  "zolfo",
  "zircone",
  "zolletta",
  "zampe",
  "zecca",
  "zimarra",
  "zio",
  "zero",
  "zeta",
  "zigzag",
  "zucchina",
  "zabaglione",
  "zolletta",
  "zecchino",
  "zenit",
  "zucchetto"
];

const parolaContainer = document.getElementById("parolaUser");
const parolaFalso = document.getElementById("falso");
const parolaDaIndovinare = document.getElementById("parolaDaIndovinare");
const vite = document.getElementById("vite");
const reload = document.getElementById("ricomincia");
let immagine = document.getElementById("img");
const tastieraContainer = document.getElementById("tastiera");

vite.textContent = 6;
let punteggio = 0;
let array = [];
let arrayp = [];
let jollyUsed = false;

function getParola() {
  let numero = Math.floor(Math.random() * parole.length);
  parolaDaIndovinare.textContent = parole[numero];
  parolaDaIndovinare.textContent.split("").forEach((lettera) => {
    const paragrafoContainer = document.createElement("p");
    paragrafoContainer.textContent = "_";
    parolaContainer.appendChild(paragrafoContainer);
  });
}

function gestisciClick(lettera) {
  lettera.addEventListener("click", function () {
    const letteraCliccata = lettera.textContent.toLowerCase();
    const parolaSegreta = parolaDaIndovinare.textContent;
    const lettereParola = parolaSegreta.split("");

    if (array.includes(letteraCliccata)) {
    } else if (lettereParola.includes(letteraCliccata)) {
      lettereParola.forEach((letteraParola, index) => {
        if (letteraParola === letteraCliccata) {
          parolaContainer.children[index].textContent = letteraCliccata;
          array.push(letteraCliccata);

          if (confrontoArray(lettereParola, array)) {
            immagine.src = "assets/vittoria.png";
            tastieraContainer.classList.add("opacity-0");
            setTimeout(() => {
              location.reload();
            }, 6000);
          }
        }
      });

      lettera.classList.add("rilievo3");
    } else if (arrayp.includes(letteraCliccata)) {
    } else {
      arrayp.push(letteraCliccata);
      lettera.classList.add("rilievo4");
      punteggio++;
      let risultato = 6 - punteggio;
      vite.textContent = risultato;

      if (risultato == 0) {
        parolaContainer.classList.remove("d-flex");
        parolaContainer.classList.add("d-none");
        parolaFalso.classList.remove("d-none");
        parolaFalso.classList.add("d-flex");

        immagine.src = "assets/error6.png";
        tastieraContainer.classList.add("opacity-0");

        setTimeout(() => {
          immagine.src = "assets/perso.png";
        }, 5000);
        setTimeout(() => {
          location.reload();
        }, 6000);
      } else if (risultato == 1) {
        vite.style.color = "rgb(220, 79, 82)";
        immagine.src = "assets/error5.png";
      } else if (risultato == 2) {
        immagine.src = "assets/error4.png";
      } else if (risultato == 3) {
        immagine.src = "assets/error3.png";
      } else if (risultato == 4) {
        immagine.src = "assets/error2.png";
      } else if (risultato == 5) {
        immagine.src = "assets/error1.png";
      }
    }
  });
}

reload.addEventListener("click", function () {
  location.reload();
});

function confrontoArray(array1, array2) {
  const arrayOrdinato1 = array1.slice().sort();
  const arrayOrdinato2 = array2.slice().sort();

  if (arrayOrdinato1.length == arrayOrdinato2.length) {
    return true;
  }
}

// Genera i bottoni delle lettere
function generaTastiera() {
  lettere.split("").forEach(lettera => {
    const bottone = document.createElement("button");
    bottone.id = lettera;
    bottone.classList.add("btn", "btn-outline-light", "rounded-circle", "m-1");
    bottone.textContent = lettera.toUpperCase();
    tastieraContainer.appendChild(bottone);
    gestisciClick(bottone);
  });

  // Aggiungi il bottone del jolly
  const bottoneJolly = document.createElement("button");
  bottoneJolly.id = "jolly";
  bottoneJolly.classList.add("btn", "btn-outline-light", "rounded-circle", "m-1");
  bottoneJolly.textContent = "Jolly";
  tastieraContainer.appendChild(bottoneJolly);
  bottoneJolly.addEventListener("click", useJolly);
}

function useJolly() {
  if (jollyUsed) {
    alert("Puoi usare il jolly solo una volta!");
    return;
  }

  const parolaSegreta = parolaDaIndovinare.textContent;
  const lettereParola = parolaSegreta.split("");
  let trovato = false;

  // Cerca la prima lettera non rivelata nella parola
  for (let i = 0; i < lettereParola.length; i++) {
    if (parolaContainer.children[i].textContent === "_") {
      alert("Suggerimento: Prova la lettera '" + lettereParola[i] + "'");
      trovato = true;
      break;
    }
  }

  if (!trovato) {
    alert("Tutte le lettere sono già rivelate!");
  }

  jollyUsed = true; // Segna il jolly come usato
}

generaTastiera();
getParola();
