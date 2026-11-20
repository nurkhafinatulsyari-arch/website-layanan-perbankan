const daftarFoto = ["foto1.jpg", "foto2.jpg"];
let indeks = 0;

const elemenFoto = document.getElementById("foto-tampil");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

function gantiFoto(arah) {
  indeks = (indeks + arah + daftarFoto.length) % daftarFoto.length;
  elemenFoto.src = daftarFoto[indeks];
}

btnPrev.addEventListener("click", () => gantiFoto(-1));
btnNext.addEventListener("click", () => gantiFoto(1));
