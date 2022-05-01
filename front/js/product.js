//Identification de l'URL et récupération de l'id
var str = window.location.href;
var url = new URL(str);
var idProduit = url.searchParams.get("_id");
console.log(idProduit);

//déclarations pour le panier
const couleurChoisie = document.querySelector("#colors");
const quantiteChoisie = document.querySelector("#quantity");
let product = "";

fetch("http://localhost:3000/api/products/" + idProduit)
    .then ((res) => res.json())
    .then (async(objetProduit) => {
        console.table(objetProduit);
        product = await objetProduit;
        leKanap(objetProduit);
    })
    .catch((err) => {
        document.querySelector(".item").innerHTML = "<h1>erreur 404</h1>";
        console.log("erreur 404 sur ressource api "+err);
    });

//fonction d'affichage du produit
function leKanap(product) {
    //déclaration de la zone image et insertion img + alt
    let articleImg = document.querySelector(".item__img");
    articleImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

    let articleNamePrice = document.querySelector(".item__content__titlePrice");
    articleNamePrice.innerHTML = `<h1 id="title">${product.name}</h1>
    <p>Prix : <span id="price">${product.price}</span>€</p>`;
    document.title = product.name;

    let articleDescription = document.querySelector("#description");
    articleDescription.innerHTML = product.description;

    for (let couleur of product.colors) {
        console.table(couleur);
        let articleColors = document.createElement("option");
        document.querySelector("#colors").appendChild(articleColors);
        articleColors.value = couleur;
        articleColors.innerHTML = couleur;
    }
    ajoutCart(product);
}

//fonction du panier (Cart)
function ajoutCart(product) {
    const btnAddCart = document.querySelector("#addToCart");
    
    //écoute du bouton pour ajoueter au panier
    btnAddCart.addEventListener('click', (event)=>{
        if (quantiteChoisie.value > 0 && quantiteChoisie.value <=100 && couleurChoisie.value != 0){
            
            let colorPicked = couleurChoisie.value;

            let quantityPicked = quantiteChoisie.value;

            //création de la liste avec le mot "produit" pour chaque ligne pour le localStorage
            let detailProduit = {
                idProduit: idProduit,
                couleurProduit: colorPicked,
                quantiteProduit: Number(quantityPicked),
                nomProduit: product.name,
                prixProduit: product.price,
                descriptionProduit: product.description,
                imgProduit: product.imageUrl,
                altImgProduit: product.altTxt
            };

    
            let articleLocalStorage = JSON.parse(localStorage.getItem("produit"));

            const popupConfirmation =() =>{
                if(window.confirm(`Vous avez ajouté ${quantityPicked} ${product.name} ${colorPicked} au panier 
Pour voir le contenu de votre panier, cliquez sur OK`)){
                    window.location.href ="cart.html";
                }
            }

            if (articleLocalStorage) {
            const resultFind = articleLocalStorage.find(
                (kanap) => kanap.idProduit === idProduit && kanap.couleurProduit === colorPicked);
                //Si le produit commandé existe déjà dans le panier
                if (resultFind) {
                    let newQuantite =
                    parseInt(detailProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                    resultFind.quantiteProduit = newQuantite;
                    localStorage.setItem("produit", JSON.stringify(articleLocalStorage));
                    console.table(articleLocalStorage);
                    popupConfirmation();
                //Si le produit commandé est un nouveau produit dans le panier
                } else {
                    articleLocalStorage.push(detailProduit);
                    localStorage.setItem("produit", JSON.stringify(articleLocalStorage));
                    console.table(articleLocalStorage);
                    popupConfirmation();
                }
            //Si le panier est vide
            } else {
                articleLocalStorage =[];
                articleLocalStorage.push(detailProduit);
                localStorage.setItem("produit", JSON.stringify(articleLocalStorage));
                console.table(articleLocalStorage);
                popupConfirmation();
            }
        } else {
            window.confirm(`Pour ajouter un article au panier, 
veuillez choisir une couleur et une quantité.`)
        }
    });
}