// On identifie l'URL et on récupère l'id

let str = window.location.href;
let url = new URL(str);
let urlSearchParamId = url.searchParams.get("id");
const urlProduct = "http://localhost:3000/api/products/";

// déclarations pour le panier
const colorArticles = document.querySelector("#colors");
const quantityArticles = document.querySelector("#quantity");
let article = "";
getArticle();

// On récupère les article du back avec une fonction

function getArticle() {
    fetch(urlProduct + urlSearchParamId)
    .then((res) => {
        return res.json();
    })

    .then(async function (API) {
        article = await API;
        console.table(article);
        if (article) {
            CatchArticles(article);
        }
    })

    .catch((error) => {
        window.alert("Erreur ! Impossible de récupérer les articles de l'API");
        document.location.href = "index.html"
    })
}

// On détail la fonction qui récupère les articles dans le back
// On utilise innerHTML pour placer les articles et on appel la fonction

function CatchArticles(article){
    let ArticleImg = document.querySelector(".item__img");
    ArticleImg.innerHTML = `<img src="${article.imageUrl}" alt="${article.altTxt}"><img>`;
    let ArticleName = document.querySelector(`.item__content__titlePrice`);
    ArticleName.innerHTML = `<h1 id="title">${article.name}</h1>
    <p>Prix : <span id="price">${article.price}</span>€</p>`;
    let ArticleDescription = document.getElementById('description');
    ArticleDescription.innerHTML = `<p>${article.description}</p>`;

    for (let colors of article.colors) {
        let ArticleColors = document.createElement("option");
        document.querySelector("#colors").appendChild(ArticleColors);
        ArticleColors.value = colors;
        ArticleColors.innerHTML = colors;
    }
    addCart(article);
}

// On ajoute un objet au panier avec un Click event sur le bouton Cart avec une fonction

function addCart(article) {
    const BtnCart = document.querySelector("#addToCart");

    BtnCart.addEventListener("click", (event)=>{

// On créé une alerte qui empêche de ne rien sélectionner

        if (quantityArticles.value < 1) {
            window.alert("Erreur ! Merci de mettre une quantité.");
        }

        else if (colorArticles.selectedIndex < 1) {
            window.alert("Erreur ! Merci de selectionner une couleur.");
        }

        else if (quantityArticles.value > 100 ){
            window.alert("Erreur ! Vous ne pouvez acheter que 100 articles maximum par commande.");
        }
            if (quantityArticles.value > 0 && quantityArticles.value <=100 && colorArticles.selectedIndex > 0){
                let choiceColor = colorArticles.value;
                let choiceQuantity = quantityArticles.value;

// On définie toutes les informations d'un produit (map)

                let detailProduit = {
                    idProduit: urlSearchParamId,
                    couleurProduit: choiceColor,
                    quantiteProduit: Number(choiceQuantity),
                    nomProduit: article.name,
                    prixProduit: article.price,
                    descriptionProduit: article.description,
                    imgProduit: article.imageUrl,
                    altImgProduit: article.altTxt
                };

                let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

// On identifie et analyse les quantités et les couleurs des produits pour les additionner

                if (produitLocalStorage) {
                    const resultFind = produitLocalStorage.find(
                        (resultat) => resultat.idProduit === urlSearchParamId && resultat.couleurProduit === choiceColor);
                        if (resultFind) {
                            let newQuantite = 
                            parseInt(detailProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                            resultFind.quantiteProduit = newQuantite;
                            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                            window.location.href ="cart.html";
                        } else {
                            produitLocalStorage.push(detailProduit);
                            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                            window.location.href ="cart.html";
                        }
                } else {
                    produitLocalStorage =[];
                    produitLocalStorage.push(detailProduit);
                    localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                    window.location.href ="cart.html";
                }}
    });
}
