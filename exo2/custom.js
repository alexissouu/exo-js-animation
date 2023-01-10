let bouton = document.querySelector("#bouton")
let boite = document.querySelector("#boite")
let body = document.querySelector("body")



function afficherBoite() {
    document.getElementById("boite").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

//   function fermerBoite() {
//   document.getElementById("boite").style.display = "none";
//   document.body.style.backgroundColor = "#fff";
// }

bouton.addEventListener('click', () => {
    boite.style.display = 'none'
    body.style.backgroundColor = "white"
})