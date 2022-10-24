// Quand la page charge, on appel la fonction asynchrone.

window.onload = fillSection();
const urlProduct = "http://localhost:3000/api/products";

// On récupère les articles dans le back de manière asynchrone

async function getArticles() {
  let articlesCatch = await fetch(urlProduct)
  return await articlesCatch.json();
}

// On appel la liste de produits quand la page a chargé

async function fillSection() {
  setTimeout(() => {
    getListProduct;
  }, 500);
}

// On fait une promesse en utilisant le timer pour afficher la liste des produits

const getListProduct = new Promise(() => {
  setTimeout(() => {
    let result = getArticles ()
    .then(function (data){
      const articles = data;
      for (let article in articles) {
          let ZoneArticles = document.getElementById("items");
          ZoneArticles.innerHTML += `<a href="./product.html?id=${data[article]._id}">
          <article>
            <img src="${data[article].imageUrl}" alt="${data[article].altTxt}">
            <h3 class="productName">${data[article].name}</h3>
            <p class="productDescription">${data[article].description}</p>
          </article>
        </a><img>`
      }
    })
    .catch (function(error){
      return error;
    });
  }, 300);
});
