// rumus mencari luas segitiga
document.getElementById("submit").addEventListener("click", function () {
  const alas = document.getElementById("alassegi").value;
  const tinggi = document.getElementById("tinggisegi").value;

  document.getElementById("result").innerText = 0.5 * alas * tinggi;
});

document.getElementById("resetluas").addEventListener("click", function () {
  document.getElementById("result").innerText = "";
  document.getElementById("alassegi").value = "";
  document.getElementById("tinggisegi").value = "";
});

// rumus mencari keliling segitiga
const sisiA = document.getElementById("sisia");
const sisiB = document.getElementById("sisib");
const sisiC = document.getElementById("sisic");

const resultKelilingSegi = document.getElementById("resultkelilingsegi");

document
  .getElementById("submitkelilingsegi")
  .addEventListener("click", function () {
    const numberSisiA = Number(sisiA.value);
    const numberSisiB = Number(sisiB.value);
    const numberSisiC = Number(sisiC.value);

    resultKelilingSegi.innerText = numberSisiA + numberSisiB + numberSisiC;
  });

document.getElementById("resetkelilingsegi").addEventListener("click", () => {
  sisiA.value = "";
  sisiB.value = "";
  sisiC.value = "";

  resultKelilingSegi.innerText = 0;
});


// Hitung Luas Jajar Genjang

const sisiAlas = document.getElementById("alasjajar").value;
const sisiTinggi = document.getElementById("tinggijajar").value;

const luasJajar = document.getElementById("resultluasjajar");

document.getElementById("submitluasjajar").addEventListener("click", function () {

  const numberSisiAlas = Number(sisiAlas);
  const numberSisiTinggi = Number(sisiTinggi);

  luasJajar.innerText = sisiAlas * sisiTinggi;

})

