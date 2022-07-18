var S1 = document.getElementById("ContenedorUsuario")
var S2 = document.getElementById("Menú")
var S3 = document.getElementById("IconoCerrar")

function AbrirMenú() {S2.style.display = "block"}
S1.addEventListener('click', AbrirMenú)

function CerrarMenú() {S2.style.display = "none"}
S3.addEventListener('click', CerrarMenú)