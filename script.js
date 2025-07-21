function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (isNaN(height) || isNaN(weight)) {
    result.innerText = "Please enter valid height and weight!";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  result.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
