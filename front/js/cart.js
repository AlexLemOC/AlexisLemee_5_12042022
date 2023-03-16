// On récupère les objets "produit" dans le local storage

let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

// On récupère les articles avec une fonction puis innerHTML pour les transférer sur la page du panier

function recupPanier() {
  if (produitLocalStorage === null || produitLocalStorage == 0) {
    let panierVide = `<p>Avez-vous oublié quelque-chose ? Votre panier est vide.</p>`;
    document.querySelector("#cart__items").innerHTML = panierVide;
  } else { 
    for (let produit in produitLocalStorage) {
      let ArticleCart = document.querySelector("#cart__items");
      totalPrice = 
        produitLocalStorage[produit].prixProduit *
        produitLocalStorage[produit].quantiteProduit;
      ArticleCart.innerHTML += `
    <article class="cart__item" data-id="${produitLocalStorage[produit].idProduit}">
      <div class="cart__item__img">
        <img src="${produitLocalStorage[produit].imgProduit}" alt="${produitLocalStorage[produit].altImgProduit}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
        <h2>${produitLocalStorage[produit].nomProduit} - ${produitLocalStorage[produit].couleurProduit}</h2>
        <p>${totalPrice} €</p>
        </div>
        <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produitLocalStorage[produit].quantiteProduit}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
        </div>
      </div>
      </article>
      `;
    }
  }
}
recupPanier();

// On modifie la quantité dans le panier avec une fonction.

function modifQuantite() {
  let quantityModif = document.getElementsByClassName("itemQuantity");
  for (let k = 0; k < quantityModif.length; k++) {
    quantityModif[k].addEventListener("change", (event) => {
      if (quantityModif[k] = quantityModif[k]) {
        let quantityModifs = produitLocalStorage[k].quantiteProduit;
        let quantityModifValue = quantityModif[k].valueAsNumber;

        const resultFind = produitLocalStorage.filter(
          (resultat) => resultat.quantityModifValue !== quantityModifs

        );

        resultFind.quantiteProduit = quantityModifValue;
        produitLocalStorage[k].quantiteProduit = resultFind.quantiteProduit;

        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        location.reload();
      }
    });
  }
}
modifQuantite();

// On affiche le coût total des article via une formule dans une fonction

function total() {;
  let elementQuantity = document.querySelectorAll(".itemQuantity");
  if (elementQuantity === null) {
    return;
  } else {
    let lengthElements = elementQuantity.length;
    totalQuantity = 0;
    for (var i = 0; i < lengthElements; ++i) {
      totalQuantity += elementQuantity[i].valueAsNumber;
    }
    totalPrice = 0;

    for (var i = 0; i < lengthElements; ++i) {
      totalPrice +=
        elementQuantity[i].valueAsNumber * produitLocalStorage[i].prixProduit;
    }

    let productTotalQuantity = document.querySelector(".cart__price");
    productTotalQuantity.innerHTML = `<p>Total (<span id="totalQuantity>${totalQuantity}</span> articles) : <span id="totalPrice">${totalPrice}</span> €)</p>`;
  }
}
total();

// on créé une fonction qui permet de supprimer un article du panier

function suppProduit() {
  let deleteButton = document.querySelectorAll(".deleteItem");
  let elementQuantities = document.querySelector(".itemQuantity");

  if (elementQuantities === null) {
    return;
  } else {
    let lengthElements = elementQuantities.length;
    for (var i = 0; i < lengthElements; ++i) {
      totalQuantities += elementQuantities[i].valueAsNumber;
    }
    totalQuantities = elementQuantities;
    console.log(totalQuantities);

    for (let a = 0; a < deleteButton.length; a++) {
      deleteButton[a].addEventListener("click", () => {
        let deleteId = produitLocalStorage[a].idProduit;
        let deleteColor = produitLocalStorage[a].couleurProduit;
        let deleteName = produitLocalStorage[a].nomProduit;

        produitLocalStorage = produitLocalStorage.filter(
          (resultat) =>
            resultat.idProduit !== deleteId ||
            resultat.couleurProduit !== deleteColor ||
            resultat.nomProduit !== deleteName
        );

        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

        alert("L'article a été retiré du panier");
        location.reload();
      });
    }
  }
}
suppProduit();

// On vérifie avec des regex, les input utilisateur

let form = document.querySelector(".cart__order__form");

let validEmail = false;
let validCity = false;
let validAddress = false;
let validLastName = false;
let validFirstName = false;

let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
let addressErrorMsg = document.getElementById("addressErrorMsg");
let cityErrorMsg = document.getElementById("cityErrorMsg");
let emailErrorMsg = document.getElementById("emailErrorMsg");

form.firstName.addEventListener("input", function () {
  let reg = /[a-zA-Z]+/;
  let str = form.firstName.value;
  if(reg.test(str)) {
    validFirstName = true;
  }
  else {
    validFirstName = false;
  }
})

form.lastName.addEventListener("input", function () {
  let reg = /[a-zA-Z]+/;
  let str = form.lastName.value;
  if(reg.test(str)) {
    validLastName = true;
  }
  else {
    validLastName = false;
  }
})

form.address.addEventListener("input", function () {
  let reg = /[0-9]+ ([a-zA-Z]+( [a-zA-Z]+)+)/;
  let str = form.address.value;
  if(reg.test(str)) {
    validAddress = true;
  }
  else {
    validAddress = false;
  }
})

form.city.addEventListener("input", function () {
  let reg = /[a-zA-Z]+/;
  let str = form.city.value;
  if(reg.test(str)) {
    validCity = true;
  }
  else {
    validCity = false;
  }
})

form.email.addEventListener("input", function () {
  let reg = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  let str = form.email.value;
  if(reg.test(str)) {
    validEmail = true;
  }
  else {
    validEmail = false;
  }
})

// On vérifie les regex au click souris et on indique si c'est valide ou pas

let button_order = document.getElementById("order")
button_order.addEventListener("click", (event) => {
  event.preventDefault();

  if(!produitLocalStorage || produitLocalStorage.length < 1 ){
    alert("Le panier est vide");
  }else {
    if (validAddress === true && validLastName === true && validFirstName === true && validEmail === true  && validCity === true ) {
      postForm();
    }
    if (validEmail === false ) {
      emailErrorMsg.innerHTML = `<p>Le champ Email est mal renseigné</p>`;
    }
    else if (validEmail === true) {
      emailErrorMsg.innerHTML = `<p></p>`;
    }
    if (validAddress === false ) {
      addressErrorMsg.innerHTML = `<p>Le champ Address est mal renseigné</p>`;
    }
    else if (validAddress === true) {
      addressErrorMsg.innerHTML = `<p></p>`;
    }
    if (validCity === false ) {
      cityErrorMsg.innerHTML = `<p>Le champ Ville est mal renseigné</p>`;
    }
    else if (validCity === true) {
      cityErrorMsg.innerHTML = `<p></p>`;
    }
    if (validLastName === false ) {
      lastNameErrorMsg.innerHTML = `<p>Le champ Nom est mal renseigné</p>`;
    }
    else if (validLastName === true) {
      lastNameErrorMsg.innerHTML = `<p></p>`;
    }
    if (validFirstName === false ) {
      firstNameErrorMsg.innerHTML = `<p>Le champ Prénom est mal renseigné</p>`;
    }
    else if (validFirstName === true) {
      firstNameErrorMsg.innerHTML = `<p></p>`;
    }
  }
});

//On envoie la requête post après la validation des input via une fonction qui envoie vers le panier

function postForm() {
  let inputName = document.getElementById("firstName");
  let inputLastName = document.getElementById("lastName");
  let inputAdress = document.getElementById("address");
  let inputCity = document.getElementById("city");
  let inputMail = document.getElementById("email");
  let idProducts = [];
  for (let i = 0; i < produitLocalStorage.length; i++) {
    idProducts.push(produitLocalStorage[i].idProduit);
  }
  console.log(idProducts);

  const order = {
    contact: {
      firstName: inputName.value,
      lastName: inputLastName.value,
      address: inputAdress.value,
      city: inputCity.value,
      email: inputMail.value,
    },
    products: idProducts,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

// On utilise la methode post dans le fetch en retournant les infos de commande
  fetch("http://localhost:3000/api/products/order", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.localStorage.clear(); // on efface le localStorage
      document.location.href = "confirmation.html?id=" + data.orderId;
    })
    .catch((err) => {
      alert("Problème avec fetch : " + err.message);
    });
}

// On efface le localStorage via une fonction pour ne pas garder les informations et pour permettre de passer une autre commande.

function clearLocalStorage() {
  window.localStorage.clear();
  location.reload();
}
