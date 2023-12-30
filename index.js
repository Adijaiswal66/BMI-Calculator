const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "please enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = "Your BMI is: " + bmi + " Kg/m&sup2 ";
    if (bmi <= 18.6) {
      results.innerHTML =
        "Your BMI is: " + bmi + " Kg/m&sup2 and you are underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = "Your BMI is: " + bmi + " Kg/m&sup2 and it is normal";
    } else {
      results.innerHTML =
        "Your BMI is: " + bmi + " Kg/m&sup2 and you are overweight";
    }
  }
});
form.addEventListener("reset", function (e) {
  let results = document.querySelector("#results");
  results.innerHTML = "";
});
