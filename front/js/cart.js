//On récupère le local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);
const zonePanier = document.querySelector("#cart__items");

//Si on accède à la page panier sans l'avoir rempli (page vide) sinon, on développe
function recupPanier(){
  if (produitLocalStorage === null || produitLocalStorage == 0) {
    const panierVide = `<p>Avez-vous oublié quelque-chose ? Votre panier est vide.</p>`;
    zonePanier.innerHTML = panierVide;
  } else {
    //on récupère les info du produit dans le local storage et on insère dans l'HTML
    for (let produit in produitLocalStorage){
      zonePanier.innerHTML += `<article class="cart__item" data-id="${produitLocalStorage[produit].idProduit}" data-color="${produitLocalStorage[produit].couleurProduit}">
      <div class="cart__item__img">
        <img src="${produitLocalStorage[produit].imgProduit}" alt="${produitLocalStorage[produit].altImgProduit}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${produitLocalStorage[produit].nomProduit}</h2>
          <p>${produitLocalStorage[produit].couleurProduit}</p>
          <p>${produitLocalStorage[produit].prixProduit} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté :</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produitLocalStorage[produit].quantiteProduit}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`;
    }
  }
}

recupPanier();

//Fonction pour afficher la quantité totale d'article et le prix total
function printTotal(){
  var totalArticles = document.getElementsByClassName("itemQuantity");
  var totalArray = totalArticles.length, totalTotal = 0;
  // i pour incrément
  for (var i = 0; i < totalArray; ++i) {
    totalTotal += totalArticles[i].valueAsNumber;
  }
  // pour affichage de la quantité totale
  let totalProduitQuantite = document.getElementById("totalQuantity");
  totalProduitQuantite.innerHTML = totalTotal;
  console.log(totalTotal);

  // pour recherche des prix et calcul du prix total
  totalPrix = 0;

  for (var i = 0; i < totalArray; ++i) {
    totalPrix += totalArticles[i].valueAsNumber*produitLocalStorage[i].prixProduit;
  }
  // pour affichage du prix total
  let totalProduitPrix = document.getElementById("totalPrice");
  totalProduitPrix.innerHTML = totalPrix;
  console.log(totalPrix);
}

printTotal();

function suppProduit() {
  //SelectorAll car plusieurs options de suppression (id et couleur)
  let btn_supp = document.querySelectorAll(".deleteItem");

  //On fait en sorte que s soit le numéro d'array à supprimer
  for (let s = 0; s < btn_supp.length; s++) {

    //Action à faire au click du bouton supprimer
    btn_supp[s].addEventListener('click', (event)=>{
      event.preventDefault();

      //On récupère l'id et la couleur du produit à supprimer
      let suppId = produitLocalStorage[s].idProduit;
      let suppColor = produitLocalStorage[s].couleurProduit;

      //On selectionne les produits du tableau qui sont différent de l'id et la couleur du produit à supprimer dans la liste
      produitLocalStorage = produitLocalStorage.filter( produit => produit.idProduit !== suppId || produit.couleurProduit !== suppColor);

      //On refait la liste sans l'élément à supprimer, ce qui supprime l'élément ciblé
      localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

      //On prévient que l'article est suppprimé
      alert("L'article à été retiré du panier");
      
      //On recharge la page
      location.reload();
    })
  }
}

suppProduit();

//On modifie la quantité

/*function modifQuantite() {
  let quantityModif = document.querySelectorAll(".itemQuantity");
  quantityModif.forEach((quantityModif) => {
    quantityModif.addEventListener("click", () => {
      let panier = JSON.parse(localStorage.getItem("produit"));
      for (let m = 0; m < quantityModif.length; m++)
        if (
          panier[m].idProduit === quantityModif.dataset.idProduit &&
          panier[m].couleurProduit === quantityModif.dataset.couleurProduit
        ) {
          let num = [m];
          let nouveauPanier = JSON.parse(localStorage.getItem("produit"));
          nouveauPanier.splice(num, 1);
          localStorage.produit = JSON.stringify(nouveauPanier);
          return location.reload();
        }
    });
  });    
}*/


function modifQuantite() {
  let quantityModif = document.querySelectorAll(".itemQuantity");

  for (let m = 0; m < quantityModif.length; m++){
    quantityModif[m].addEventListener("change" , (event)=> {
      event.preventDefault();

      //On va chercher l'article avec son Id et sa couleur
      //let goodId = produitLocalStorage[m].idProduit;
      //let qttyModif = produitLocalStorage[m].quantiteProduit;
      let qttChange = quantityModif[m].valueAsNumber;

      //const resultatModif = produitLocalStorage.find((prod) => prod.qttChange !== qttyModif);

      //resultatModif.quantiteProduit = qttChange;
      //const resultatModif = produitLocalStorage[m];
      produitLocalStorage[m].quantiteProduit = qttChange;
      //produitLocalStorage[m].idProduit = event.target.idProduit;
      

      localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

      //On rafraîchit le site
      location.reload();
      console.table(produitLocalStorage);
    })
  }
}

modifQuantite();

//Mise en place de lecture de formumaire avec regex
function getForm() {

  let form = document.querySelector(".cart__order__form");

  let lettreRegex = new RegExp("^[a-zA-Z ,.'-]+$");
  let addressRegex = new RegExp("[0-9]{0,3}(?:[,. ]){0,2}[-0-9a-zA-Z ]{1,50}");
  //comprend des lettres et des chiffres + 1@ + des lettres et des chiffres + 1 point + entre 2 et 10 lettres
  let emailRegex = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");

  //On écoute la modification en direct du prénom, nom, adresse, ville et e-mail
  form.firstName.addEventListener('change',function(){
    correctFirstName(this);
  });

  form.lastName.addEventListener('change', function(){
    correctLastName(this);
  });

  form.address.addEventListener('change', function(){
    correctAddress(this);
  });

  form.city.addEventListener('change', function(){
    correctCity(this);
  });

  form.email.addEventListener('change', function(){
    correctEmail(this);
  });

  //une fois qu'on détecte une modification, on vérifie si les regex sont respectés
  const correctFirstName = function(inputFirstName){
    let firstNameErr = inputFirstName.nextElementSibling; //modifie le <p>

    //On test si ce qui est écrit est correct
    if (lettreRegex.test(inputFirstName.value)) {
      firstNameErr.innerHTML = '';
    } else {
      firstNameErr.innerHTML = "Ce champ n'est pas valide.";
    }
  };

  const correctLastName = function(inputLastName){
    let lastNameErr = inputLastName.nextElementSibling; //modifie le <p>

    //On test si ce qui est écrit est correct
    if (lettreRegex.test(inputLastName.value)) {
      lastNameErr.innerHTML = '';
    } else {
      lastNameErr.innerHTML = "Ce champ n'est pas valide.";
    }
  };

  const correctAddress = function(inputAddress){
    let addressErr = inputAddress.nextElementSibling; //modifie le <p>

    //On test si ce qui est écrit est correct
    if (addressRegex.test(inputAddress.value)) {
      addressErr.innerHTML = '';
    } else {
      addressErr.innerHTML = "Ce champ n'est pas valide.";
    }
  };

  const correctCity = function(inputCity){
    let cityErr = inputCity.nextElementSibling; //modifie le <p>

    //On test si ce qui est écrit est correct
    if (lettreRegex.test(inputCity.value)) {
      cityErr.innerHTML = '';
    } else {
      cityErr.innerHTML = "Ce champ n'est pas valide.";
    }
  };

  const correctEmail = function(inputEmail){
    let emailErr = inputEmail.nextElementSibling; //modifie le <p>

    //On test si ce qui est écrit est correct
    if (emailRegex.test(inputEmail.value)) {
      emailErr.innerHTML = '';
    } else {
      emailErr.innerHTML = "Ce champ n'est pas valide.";
    }
  };
}
getForm();

//On POST les infos du formulaire dans le localStorage
function postForm(){
  const submit = document.getElementById("order");
  submit.addEventListener("click", (event)=>{

    //On créé le tableau du local storage (comme pour le produit)
    /*let idIndice = [];
    for (let i = 0; i<produitLocalStorage.length;i++) {
      idIndice.push(produitLocalStorage[i].idProduit);
    }*/
    event.preventDefault();
    let idArticle = produitLocalStorage[0].idProduit;
    let idArticles = idArticle.slice(3,13);

    const order = {
      contact : {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      },
      articles: idArticles,
    }

    if(order.contact.firstName==0 || order.contact.lastName==0 || order.contact.address==0 || order.contact.city==0 || order.contact.email==0) {
      alert ("Les champs renseignés ne sont pas valides");
      location.reload;
    }else{
      const method = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },
      };

      //On utilise notre methode post dans le fetch en retournant les infos de commande
      fetch("http://localhost:3000/api/products/order", method)
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        localStorage.clear(); //on efface le localStorage
        //localStorage.setItem("orderId", order.articles); //on créé le bon de commande
        let orderId = order.articles;
        document.location.href = `confirmation.html?_cde=${orderId}`; // on redirige l'utilisateur vers la page confirmation
      })
      .catch((err) => {
        alert ("erreur fetch : "+err.message)
      });
    }
  })
}
postForm();
