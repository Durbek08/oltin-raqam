let Inp = document.querySelector("#input");
let Btnp = document.querySelector("#check");
let Random = document.querySelector("#random-number");
let body = document.querySelector("body");
let guess = document.querySelector("#guess");

let a = Math.floor(Math.random() * 20);
Random.textContent = "?";

Btnp.addEventListener("click", function () {
  if (a == Inp.value) {
    body.style.backgroundColor = "green";
  } else {
    if (a < Inp.value) {
      guess.textContent = "Bu son katta ";
      body.style.backgroundColor = "red";
    } else {
      guess.textContent = "Bu son kichkina ";
      body.style.backgroundColor = "red";
    }
  }
});
