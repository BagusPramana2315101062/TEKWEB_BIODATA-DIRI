// Tampilkan pesan selamat datang
function tampilkanPesan() {
  alert("Halo, saya Bagus Pramana, selamat datang di website saya!");
}

// Ubah tema warna background
let temaGelap = true;
function ubahTema() {
  const body = document.body;
  if (temaGelap) {
    body.style.backgroundColor = "#f1f1f1";
    body.style.color = "#181a1b";
    document.querySelector("main").style.background = "#fff";
    document.querySelector("header").style.background = "#e0e0e0";
    document.querySelector("footer").style.background = "#e0e0e0";
    temaGelap = false;
  } else {
    body.style.backgroundColor = "#181a1b";
    body.style.color = "#f1f1f1";
    document.querySelector("main").style.background = "#222325";
    document.querySelector("header").style.background = "#23272a";
    document.querySelector("footer").style.background = "#23272a";
    temaGelap = true;
  }
}
