// function replaceName() {
//     let name = prompt("Tuliskan nama anda", "");
// document.getElementById("name").innerHTML = name
// }

// document.getElementById('tombol').addEventListener("click", function() {
//     replaceName();
// })
// let umur = 17
// console.log(umur)


// var submitButton = document.getElementById("submit");

// console.log(inputNama.value)
// console.log(inputTanggal.value)
// console.log(inputJenisKelamin.value)
// console.log(inputPesan.value)

// function submit() {
//     var inputNama = document.getElementById("nama").value;
//     var inputTanggal = document.getElementById("tanggal").value;
//     // var inputJenisKelamin = document.getElementByName("jenis_kelamin");
//     var inputPesan = document.getElementById("pesan").value;

//     alert(inputNama + "nyusahin");

//     console.log(inputNama.value);
//     console.log(inputTanggal.value);
//     console.log(inputJenisKelamin.value);
//     console.log(inputPesan.value);
//     console.log("data sudah ada")
// }

// console.log("halo gess")
// let nama = "";

// MENAMPLKAN GAMBAR
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
}

// MENAMPILKAN ALERT
function menampilkanAlert() {
    var namaPengguna = prompt("Selamat datang! Silakan masukkan nama Anda:");
    if (namaPengguna != null) {
        alert("Halo, " + namaPengguna + "! Selamat datang di situs ini!");
    }

    console.log(namaPengguna);
    document.getElementById('usersName').innerHTML = namaPengguna;
    if (!namaPengguna) {
        document.getElementById('usersName').innerHTML = "Pengguna";
    }
}

// MENAMPILKAN DATA
function menampilkanData() {
    var nama = document.getElementById('nama').value;
    var tanggal = document.getElementById('tanggal').value;
    var jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var pesan = document.getElementById('pesan').value;

    var waktu = new Date();
    var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][waktu.getDay()];
    var tanggalWaktu = waktu.toLocaleDateString();
    var jam = waktu.toLocaleTimeString();
    var zonaWaktu = Intl.DateTimeFormat().resolvedOptions().timeZone;

    document.getElementById('subject').innerHTML = 
    hari + " " + tanggalWaktu + " " + jam + " " + zonaWaktu +
    "\n\nNama :" + nama + "\nTanggal: " + tanggal + "\nJenis Kelamin: " + jenisKelamin + "\nPesan: " + pesan;

    console.log('Nama: ' + nama);
    console.log('Tanggal: ' + tanggal);
    console.log('Jenis Kelamin: ' + jenisKelamin);
    console.log('Pesan: ' + pesan);
    console.log("data sudah masuk");
}
    console.log("hallo world!")