// Dapatkan elemen dengan id "dateTime"
const dateTimeElement = document.getElementById("dateTime");

// Fungsi untuk mengupdate tanggal dan waktu
function updateDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    // Tampilkan tanggal dan waktu pada elemen dengan id "dateTime"
    dateTimeElement.textContent = "Tanggal dan Waktu saat ini: " + formattedDate;
}

// Panggil fungsi updateDateTime() saat halaman dimuat
updateDateTime();

// Perbarui tanggal dan waktu setiap detik (opsional)
setInterval(updateDateTime, 1000);

// script.js
var toggleButton = document.getElementById("toggleButton");
var myPhoto = document.getElementById("myPhoto");

toggleButton.addEventListener("click", function() {
    if (myPhoto.style.display === "none") {
        myPhoto.style.display = "block"; // Tampilkan foto
        toggleButton.textContent = "Sembunyikan Foto";
    } else {
        myPhoto.style.display = "none"; // Sembunyikan foto
        toggleButton.textContent = "Tampilkan Foto";
    }
});

function gantiNama() {
    var inputNama = document.getElementById("inputName").value;
    var nama = document.querySelector(".home_name");
    nama.innerText = inputNama;
}