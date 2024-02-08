function whiteAndBlack() {
  console.log(p.style.backgroundColor);
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
}

function buttonDeleteP(para) {
  const delButton = document.createElement("button");
  document.body.appendChild(delButton);
  delButton.textContent = "X";

  console.log(delButton);
  delButton.addEventListener("click", () => {
    console.log(para);
    const p = document.querySelector("p");
    if (para.style.display === "block") {
      p.remove();
    } else console.log("erreur echec ");
  });
}

function creatbutton(para) {
  // Créer un bouton "masquer/révéler"

  const toggleButton = document.createElement("button");

  document.body.appendChild(toggleButton);
  toggleButton.textContent = "Masquer/Révéler";

  console.log(toggleButton);

  toggleButton.addEventListener("click", () => {
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
}

function creatH1() {
  const newH1 = document.createElement("h1");
  document.body.appendChild(newH1);
  let inputValue = ajouH1.value;
  newH1.innerText = inputValue;
  h1.innerHTML = inputValue;
  ajouH1.value = " ";
}

function creatP() {
  const para = document.createElement("p");
  document.body.appendChild(para);

  let inputVal = ajouP.value;
  para.innerText = inputVal;
  p.innerHTML += inputVal;

  ajouP.value = "";

  // Ajouter le paragraphe nouvellement créé au tableau pAll
  pAll = Array.from(document.querySelectorAll("p"));
  pAll.push(para); // Ajouter le paragraphe nouvellement créé au tableau pAll
  return para;
}

function blockAnNone() {
  pAll.forEach((paragraph) => {
    if (paragraph.style.display === "block" || paragraph.style.display === "") {
      paragraph.style.display = "none";
    } else {
      paragraph.style.display = "block";
    }
  });
}
