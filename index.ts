import express from "express";
import calculateBmi from "./bmiCalculator";

console.log(calculateBmi);

const app = express();

app.get("/hello", (req, res) => {
  console.dir(req.query);
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const a: number = Number(req.query.height);
  const b: number = Number(req.query.weight);

  console.log(a);
  console.log(b);

  const bmiResult: string = calculateBmi(a, b);

  console.log(bmiResult);

  res.send("BMI");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
