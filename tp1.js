const random = document.querySelector("#random");
const body = document.querySelector("body");
const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const couleur = document.querySelector("#couleur");
const ajouterH1 = document.querySelector("#ajouterH1");
const ajouterP = document.querySelector("#ajouterP");
const FondCouleur = ["red", "blue", "white", "yellow"];
const ajouH1 = document.querySelector("#ajouH1");
const ajouP = document.querySelector("#ajouP");
const cacheP = document.querySelector("#cacheP");
let pAll = document.querySelectorAll("p");

random.addEventListener("click", () => {
  const changeColor =
    FondCouleur[Math.floor(Math.random() * FondCouleur.length)];

  body.style.backgroundColor = changeColor;
});

couleur.addEventListener("click", () => {
    whiteAndBlack();
});

ajouterH1.addEventListener("click", () => {
    creatH1();
});

ajouterP.addEventListener("click", () => {
   let paragra =  creatP();
    creatbutton(paragra);
    console.log(paragra);
    buttonDeleteP(paragra)
});

cacheP.addEventListener("click", () => {
    blockAnNone();
});





