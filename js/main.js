var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSpan1 = document.querySelector(".result1");
var elSpan2 = document.querySelector(".result2");
var elSpan3 = document.querySelector(".result3");
var elSpan4 = document.querySelector(".result4");
var elSpan = document.querySelector(".span");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var inputVal = +elInput.value;

  if (inputVal <= 0 || isNaN(inputVal)) {
    elSpan.textContent = "0 dan kotta son kiriting yoki son kiriting";
    elInput.classList.add("is-invalid");
    elInput.classList.remove("is-valid");
  } else {
    elSpan.textContent = "";
    elInput.classList.add("is-valid");
    elInput.classList.remove("is-invalid");
  }

//   console.log(person());

  elSpan1.textContent = person().toFixed(2);
  elSpan2.textContent = bike().toFixed(2);
  elSpan3.textContent = car().toFixed(2);
  elSpan4.textContent = airplane().toFixed(2);
});

function person(x = 3.6) {
  return elInput.value / x;
}
function bike(x = 20.1) {
  return elInput.value / x;
}
function car(x = 70) {
  return elInput.value / x;
}
function airplane(x = 800) {
  return elInput.value / x;
}
