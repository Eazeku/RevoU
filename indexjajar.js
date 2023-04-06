// Hitung Luas Jajar Genjang

const sisiAlas = document.getElementById("alasjajar");
const sisiTinggi = document.getElementById("tinggijajar");

const resultJajar = document.getElementById("resultluasjajar");

document.getElementById("submitluasjajar").addEventListener("click", function () {

  const numberSisiAlas = Number(sisiAlas.value);
  const numberSisiTinggi = Number(sisiTinggi.value);

  resultJajar.innerText = numberSisiAlas * numberSisiTinggi;

  document.getElementById("resetluasjajar").addEventListener("click", () => {
    sisiAlas.value = "";
    sisiTinggi.value = "";

    resultJajar.innerText = 0;
  });
})

// Hitung Keliling Jajar Genjang

const sisiA = document.getElementById("sisiA");
const sisiB = document.getElementById("sisiB");

const resultKeliling = document.getElementById("resultkelilingjajar");

document.getElementById("submitkelilingjajar").addEventListener("click", ()=> {
    const numberSisiA = Number(sisiA.value);
    const numberSisiB = Number(sisiB.value);

  resultKeliling.innerText = 2 * numberSisiA + numberSisiB;

})

document.getElementById("resetkelilingjajar").addEventListener("click", () => {
    sisiA.value = "";
    sisiB.value = "";

    resultKeliling.innerText = 0; 
})