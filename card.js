// pemilihan ukuran
const sizeOptionItems = document.querySelectorAll(".size-option-item");
sizeOptionItems.forEach((item) => {
  item.addEventListener("click", () => {
    sizeOptionItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
// end pemilihan ukuran

// image carausel

var mainphoto = document.getElementById("mainphoto");
var imagecarausel = document.getElementsByClassName("imgcarausel");

imagecarausel[0].onclick = function () {
  mainphoto.src = imagecarausel[0].src;
};
imagecarausel[1].onclick = function () {
  mainphoto.src = imagecarausel[1].src;
};
imagecarausel[2].onclick = function () {
  mainphoto.src = imagecarausel[2].src;
};
imagecarausel[3].onclick = function () {
  mainphoto.src = imagecarausel[3].src;
};
// end carausel

// wa transsaksi
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const parent = e.target.closest(".produk-detail");
    const gambar = parent.querySelector("#mainphoto").src;
    const nama = parent.querySelector("h2").innerHTML;
    const ukuran = parent.querySelector(".size-option-item.active").innerHTML;
    const jumlah = parent.querySelector('input[type="number"]').value;

    const nohp = "6283838439753";
    const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=hallo, saya ingin membeli kaos ${nama} ukuran ${ukuran} jumlah ${jumlah} sekian`;

    const productId = button.getAttribute("data-id"); // ambil data-id dari button

    // Kirim produk ID dan pesan ke URL WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${nohp}&text=hallo, saya ingin membeli produk kaos ${nama} sebanyak ${jumlah} dan ukuran ${ukuran}`;

    window.open(url, "_blank");
  });
});
