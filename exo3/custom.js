let toucheAEnfoncee = false; // Indique si la touche "a" est enfoncée
let toucheBEnfoncee = false; // Indique si la touche "b" est enfoncée

document.addEventListener("keydown", function(event) {
  if (event.key == "a") {
    toucheAEnfoncee = true;
  } else if (event.key == "b") {
    toucheBEnfoncee = true;
  }

  // Si les touches "a" et "b" sont enfoncées, affiche le message
  if (toucheAEnfoncee && toucheBEnfoncee) {
    document.getElementById("message").innerHTML = "Combinaison de touches appuyée!";
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key == "a") {
    toucheAEnfoncee = false;
  } else if (event.key == "b") {
    toucheBEnfoncee = false;
  }
});

document.addEventListener("keydown", function(event) {
  // Si la touche "c" est enfoncée, change la couleur du texte
  if (event.key == "c") {
    document.getElementById("message").style.color = "red";
  }
});
