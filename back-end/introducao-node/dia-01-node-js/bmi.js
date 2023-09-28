const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

const calculateBMI = (height, weight) => {
  return weight / (height * height);;
};

const handleBMIResult = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN);
  
  const resultFind = statuses.find((status) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[status];

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
};



function main() {
  const height = readline.questionFloat("What's your height? (m) \n ");
  const weight = readline.questionFloat("What's your wieght? (kg) \n ");

  const bmi = calculateBMI(height, weight);

  console.log(`BMI is ${bmi.toFixed(2)}`);

  const bmiResult = handleBMIResult(bmi);

  console.log(bmiResult);
}

main();
