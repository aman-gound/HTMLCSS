const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
one.addEventListener("click", function () {
  document.querySelector(".card").style.background = "rgba(255,255,255,0.1)";
  document.querySelector(".back-face").style.background =
    "rgba(255,255,255,0.1)";
  document.querySelector(".mode").style.background = "rgba(255,255,255,0.1)";
});
two.addEventListener("click", function () {
  document.querySelector(".card").style.background = "rgba(236, 34, 34, 0.6)";
  document.querySelector(".back-face").style.background =
    "rgba(236, 34, 34, 0.6)";
  document.querySelector(".mode").style.background = "rgba(236, 34, 34, 0.6)";
});
three.addEventListener("click", function () {
  document.querySelector(".card").style.background = "rgba(98, 27, 231, 0.609)";
  document.querySelector(".back-face").style.background =
    "rgba(98, 27, 231, 0.609)";
  document.querySelector(".mode").style.background = "rgba(98, 27, 231, 0.609)";
});
