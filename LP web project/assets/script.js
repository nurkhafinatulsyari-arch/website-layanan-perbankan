const sliderGuru = document.getElementById("sliderGuru");
const daftarFoto = sliderGuru.querySelectorAll("img");
const btnAtas = document.getElementById("btnAtas");
const btnBawah = document.getElementById("btnBawah");

let indeks = 0;

function geserSlide() {
  const jarakGeser = daftarFoto[indeks].offsetTop - daftarFoto[0].offsetTop;
  sliderGuru.style.transform = `translateY(-${jarakGeser}px)`;
}

btnBawah.addEventListener("click", () => {
  indeks = (indeks + 1) % daftarFoto.length;
  geserSlide();
});

btnAtas.addEventListener("click", () => {
  indeks = (indeks - 1 + daftarFoto.length) % daftarFoto.length;
  geserSlide();
});
