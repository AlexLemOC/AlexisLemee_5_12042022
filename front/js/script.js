/*insertInSection();

// On prend les produits dans l'API
async function getArticles() {
    var articlesFetch = await fetch("http://localhost:3000/api/products")
    return await articlesFetch.json();
}

    // On rempli le DOM si la promesse est tennue
async function insertInSection() {
    var result = await getArticles ()
    .then(function (resultatAPI){
        const articles = resultatAPI;
        console.table(articles);
        for (let article in articles) {

            // Ajout de <a> dans le DOM à l'endroit de la class .items
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${resultatAPI[article]._id}`;

            // Ajout de <article> comme enfant de <a> dans le DOM
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Ajout de <img> comme enfant de <article> dans le DOM
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // Ajout de <h3> comme enfant de <article> avec class .productName et nom du produit
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // Ajout de <p> comme enfant de <article> avec class .productDescription et description produit
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;
        }
    })
    .catch (function(error){
        return error;
    });
}*/

// Récupération des produits de l'api
//------------------------------------------------------------------------
fetch("http://localhost:3000/api/products")
  // quand tu as la réponse donne le résultat en json.
  .then((res) => res.json())
  // ce que l'on a reçu et qui a été traité en json sera appelé objetProduits
  .then((objetProduits) => {
    // donne moi des informations en console sur ce qui est récupéré sous forme tableau.
    console.table(objetProduits);
    // appel de la fonction d'affichage des produits
    lesKanaps(objetProduits);
  })
  // dans le cas d'une erreur remplace le contenu de titre par un h1 au contenu de erreur 404 et renvoit en console l'erreur.
  .catch((err) => {
    document.querySelector(".titles").innerHTML = "<h1>erreur 404</h1>";
    console.log("erreur 404, sur ressource api:" + err);
  });
//----------------------------------------------------------------------
// fonction d'affichage des produits de l'api sur la page index
//----------------------------------------------------------------------
function lesKanaps(index) {
  // déclaration de variable de la zone d'article
  let zoneArticle = document.querySelector("#items");
  // boucle pour chaque indice(nommé 'article') dans index
  for (let article of index) {
    /* création et ajout des zones d'articles, insertion de l'adresse produit via chemin      
    produit + paramètres(son id);*/
 
    zoneArticle.innerHTML += `<a href="./product.html?_id=${article._id}">
    <article>
      <img src="${article.imageUrl}" alt="${article.altTxt}">
      <h3 class="productName">${article.name}</h3>
      <p class="productDescription">${article.description}</p>
    </article>
  </a>`;
  }
}
//localStorage.clear();