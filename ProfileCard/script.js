let boxText = document.querySelector("#text");
const sub = document.querySelector("#sub");
sub.addEventListener("click", function () {
  boxText.textContent = "Your are subscribed";
  boxText.classList.add("box-text");
  setTimeout(function () {
    boxText.classList.remove("box-text");
    boxText.textContent = " ";
  }, 2500);
});
const message = document.querySelector("#mess");
message.addEventListener("click", function () {
  boxText.textContent = "Thanks for your messege";
  boxText.classList.add("box-text");
  setTimeout(function () {
    boxText.classList.remove("box-text");
    boxText.textContent = " ";
  }, 2500);
});
