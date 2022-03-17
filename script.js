function convertendoDolar() {
  let t1 = document.getElementById("num");
  let res = document.getElementById("res");
  let random = parseInt(Math.random() * 11);

  if (t1.value <= 0 || t1.value > 10) {
    res.innerHTML = "[ERROR] DIGTE UM VALOR VÁLIDO";
  } else if (random == t1.value) {
    res.innerHTML = `ACERTOU!! número gerado: ${random}`;
  } else {
    res.innerHTML = `ERROUUU, número gerado era: ${random}`;
  }
  t1.value = "";
}
