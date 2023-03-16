// On récupère l'id qui a été déposé dans l'URL

let str = window.location.href;
let url = new URL(str);
let urlSearchParamId = url.searchParams.get("id");

// On utilise une fonction pour utiliser l'id afin de placer le n° de commande
// Ce numéro avait été récupéré via innerHTML

function confirm(){
  let orderId = document.querySelector(".confirmation");
  orderId.innerHTML = `<p>Merci pour vottre commande ! <br>Votre numéro de commande est : <span id="orderId">${urlSearchParamId}</span><br>Conservez-le car nous ne le gardons pas en mémoire.</p>`;
  if (urlSearchParamId === null ){
    window.location.href ="index.html";
    window.alert("Erreur ! Vous devez posséder un panier pour accder à cette page.");
  }
  //Suppression du numéro de commande comme demandé dans l'étape 11
  history.pushState(null, '', 'confirmation.html');
}

confirm();
