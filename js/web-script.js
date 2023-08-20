/////////////// page-scroll //////////////////////////
// jQuery carikan elemen yang namanya page-scroll dan pada saat di klik jalankan fungsinya
$(".page-scroll").on("click", function (e) {
  ///////////////////////////
  // ambil isi href
  var href = $(this).attr("href");
  // $(this) cari elemen yg bersangkutan atau a yang inigin di klik
  // attr untuk mengambil isi atribut
  ///////////////////////////////
  //tangkap element this/bersangkutan
  var elemenHref = $(href);
  ///////////////////////////////////
  // pindahkan scroll
  $("html, body").animate(
    // jQuery carikan elemn html, body

    {
      scrollTop: elemenHref.offset().top,
      // animasikan elemen href yang dituju
    },
    1000
  );
  e.preventDefault();
  // e ketika di klik href tidak jalan
});

// /////////////////////////////////////////////////////

///////////////// header ul, slider /////////////////////
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("header ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slider");
});

///////////////// img background//////////////////////////

function imgSlider(anything) {
  document.querySelector(".landing").src = anything;
}

function changeBgColor(color) {
  const nav = document.querySelector(".nav");
  nav.style.background = color;
}

// /////////////////Card/////////////////////////////
const cardToggle = document.querySelectorAll(".toggle span");
const card = document.querySelectorAll(".card");

cardToggle[0].addEventListener("click", function () {
  card[0].classList.toggle("activeOne");
});
// //////////////////// ///////////////////////

/////////////////// card-second/////////////////
const cardSecondToggleSecond = document.querySelector(".toggle-second span");
const cardSecond = document.querySelector(".card-second");

cardSecondToggleSecond.addEventListener("click", function () {
  cardSecond.classList.toggle("activeTwo");
});
// ///////////////////////////////////////////////////
