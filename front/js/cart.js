<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Cart</title>

    <meta charset="utf-8">
    <meta name="description" content="Plateforme incroyable de e-commerce">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet" />
    <link href="../css/cart.css" rel="stylesheet" />

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
      <div class="limitedWidthBlock" id="limitedWidthBlock">
        <div class="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section class="cart">
            <section id="cart__items">
             <!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> -->
            </section>
            <div class="cart__price">
              <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
            </div>
            <div class="cart__order">
              <form method="get" class="cart__order__form">
                <div class="cart__order__form__question">
                  <label for="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required>
                  <p id="firstNameErrorMsg"><!-- ceci est un message d'erreur --></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required>
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="address">Adresse: </label>
                  <input type="text" name="address" id="address" required>
                  <p id="addressErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="city">Ville: </label>
                  <input type="text" name="city" id="city" required>
                  <p id="cityErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="email">Email: </label>
                  <input type="email" name="email" id="email" required>
                  <p id="emailErrorMsg"></p>
                </div>
                <div class="cart__order__form__submit">
                  <input type="submit" value="Commander !" id="order">
                </div>
              </form>
            </div>
          </section>
        </div>
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
  <script src="../js/cart.js"></script>
  </body>
</html>
