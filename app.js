let listeMot = [
  "Developpeur Web",
  "Ardennais",
  "Joueur Hearthstone"
]

let phrase = document.querySelector(".phrase");
let ajoutMot = document.querySelector(".ajoutMot");


for(lettre of listeMot[0]) {
setInterval(()=> {
    ajoutMot.textContent += lettre;
  },2000)
}