export const calculationBMIData = (height, weight) => {
  var category;
  var risk;
  height = parseFloat(height);
  weight = parseFloat(weight);

  height = height / 100;
  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2);
  if (bmi < 18) {
    category = "Underweight";
    risk = "Malnutrition risk";
  } else if (18 < bmi && bmi < 25) {
    category = "Normal weight";
    risk = "Low risk";
  } else if (25 < bmi && bmi < 30) {
    category = "Overweight";
    risk = "Enchanced risk";
  } else if (30 < bmi && bmi < 35) {
    category = "Moderately obese";
    risk = "Medium risk";
  } else if (35 < bmi && bmi < 40) {
    category = "Severely obese";
    risk = "High risk";
  } else {
    category = "Very severely obese";
    risk = "Very High risk";
  }

  return {
    bmi,
    category,
    risk
  };
};
