<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Nom du produit</title>

    <meta charset="utf-8">
    <meta name="description" content="Plateforme incroyable de e-commerce">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet" />
    <link href="../css/product.css" rel="stylesheet" />
    <link rel="shortcut icon" href="../images/favicon-32x32.png">

    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>

  <body>
    <header>
      <div class="limitedWidthBlockContainer informations">
        <div class="limitedWidthBlock">
          <ul>
            <li><img src="../images/icons/phone.svg" alt="logo de téléphone" class="informations__phone">01 23 45 67 89</li>
            <li><img src="../images/icons/mail.svg" alt="logo d'une enveloppe" class="informations__mail">support@name.com</li>
            <li><img src="../images/icons/adress.svg" alt="logo d'un point de géolocalisation" class="informations__address">01 23 45 67 89</li>
          </ul>
        </div>
      </div>
      <div class="limitedWidthBlockContainer menu">
        <div class="limitedWidthBlock">
          <a href="./index.html">
            <img class="logo" src="../images/logo.png" alt="Logo de l'entreprise">
          </a>
          <nav>
            <ul>
              <a href="./index.html"><li>Accueil</li></a>
              <a href="./cart.html"><li>Panier</li></a>
            </ul>
          </nav>
        </div>
      </div>
      <img class="banniere" src="../images/banniere.png" alt="Baniere">
    </header>

    <main class="limitedWidthBlockContainer">
      <div class="limitedWidthBlock">
        <section class="item">
          <article>
            <div class="item__img">
              <!-- <img src="../images/logo.png" alt="Photographie d'un canapé"> -->
            </div>
            <div class="item__content">

              <div class="item__content__titlePrice">
                <h1 id="title"><!-- Nom du produit --></h1>
                <p>Prix : <span id="price"><!-- 42 --></span>€</p>
              </div>

              <div class="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
              </div>

              <div class="item__content__settings">
                <div class="item__content__settings__color">
                  <label for="color-select">Choisir une couleur :</label>
                  <select name="color-select" id="colors">
                      <option value="">--SVP, choisissez une couleur --</option>
<!--                       <option value="vert">vert</option>
                      <option value="blanc">blanc</option> -->
                  </select>
                </div>

                <div class="item__content__settings__quantity">
                  <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                  <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
                </div>
              </div>

              <div class="item__content__addButton">
                <button id="addToCart">Ajouter au panier</button>
              </div>

            </div>
          </article>
        </section>
      </div>
    </main>
    
    <footer>
      <div class="limitedWidthBlockContainer footerMain">
        <div class="limitedWidthBlock">
          <div>
            <img class="logo" src="../images/logo.png" alt="Logo de l'entreprise">
          </div>
          <div>
            <p>10 quai de la charente <br>75019 Paris 19</p>
          </div>
          <div>
            <p>Téléphone : 01 23 45 67 89</p>
          </div>
          <div>
            <p>Email : support@name.com</p>
          </div>
        </div>
      </div>
      <div class="limitedWidthBlockContainer footerSecondary">
        <div class="limitedWidthBlock">
          <p>© Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All Rights Reserved | Powered by <3</p>
        </div>
      </div>
    </footer>
  <script src="../js/product.js"></script>
  </body>
</html>
