interface BMIValues {
  value1: number;
  value2: number;
}

const parseBMIArguments = (args: Array<string>): BMIValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const calculateBmi = (a: number, b: number): string => {
  const heightInMeters = a / 100;
  const BMI = b / Math.pow(heightInMeters, 2);

  if (BMI < 16) {
    console.log("Underweight");
    return "Underweight";
  } else if (BMI > 15 && BMI < 26) {
    console.log("Normal (healthy weight)");
    return "Normal (healthy weight)";
  } else if (BMI > 25) {
    console.log("Overweight");
    return "Overweight";
  }
  return "BMI n/a";
};

try {
  const { value1, value2 } = parseBMIArguments(process.argv);
  calculateBmi(value1, value2);
} catch (e) {
  console.log("Something went wrong", e.message);
}

export default { calculateBmi };
