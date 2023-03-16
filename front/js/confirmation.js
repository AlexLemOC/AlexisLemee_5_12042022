//let order = window.localStorage.getItem("orderId"); //récupération de l'id de commande
//console.log(order);

var str = window.location.href;
var url = new URL(str);
var idCommande = url.searchParams.get("_cde");
console.log(idCommande);

function confirm(){
  //const orderId = document.getElementById("orderId");
  //orderId.innerText = order;//.slice(3,13);
  let zoneConf = document.querySelector(".confirmation");
  if (idCommande === null){
    idCommande = '';//On enlève l'affichage du mot "null" pour laisser un vide quand c'est vide.
  }//On modifie le message pour qu'il soit plus poli et on insère le numéro de commande
  zoneConf.innerHTML = `<p>Merci pour votre commande ! <br>Votre numéro de commande est : <span id="orderId">${idCommande}</span> <br>Conservez-le car nous ne le gardons pas en mémoire.</p>`;//.slice(3,13);
  
  //localStorage.clear(); //Suppression du numéro de commande
  history.pushState(null, '', 'confirmation.html');
  console.log(localStorage);
}

confirm();
