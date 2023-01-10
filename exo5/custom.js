let imageActuelle = 1; // Numéro de l'image affichée

document.getElementById("bouton").addEventListener("click", function() {
  // Cache l'image actuelle
let imageActuelle = 1; // Numéro de l'image actuellement affichée

  document.getElementById("bouton").addEventListener("click", function() {
    // Affiche l'image 1 au clic sur le bouton
    afficherImage(1);
  });
  
  document.addEventListener("click", function(event) {
    // Si l'élément cible de l'événement est l'image actuelle
    if (event.target == document.getElementById("image" + imageActuelle)) {
      // Si le clic se trouve à droite de l'image
      if (event.clientX > document.getElementById("image" + imageActuelle).offsetLeft + 100) {
        // Affiche la prochaine image
        afficherImage(imageActuelle + 1);
      } else {
        // Affiche la précédente image
        afficherImage(imageActuelle - 1);
      }
    }
  });
  
  function afficherImage(numero) {
    // Si l'image demandée existe
    if (document.getElementById("image" + numero)) {
      // Cache l'image actuelle
      document.getElementById("image" + imageActuelle).classList.remove("visible");
      document.getElementById("image" + imageActuelle).classList.add("invisible");
      // Affiche la nouvelle image
      document.getElementById("image" + numero).classList.remove("invisible");
      document.getElementById("image" + numero).classList.add("visible");
      // Met à jour l'image actuelle
      imageActuelle = numero;
    }
  }
  
})