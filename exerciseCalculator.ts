interface calculateExercisesResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseExerciseTarget = (target: string): number => {
  if (!isNaN(Number(target))) {
    return Number(target);
  } else throw new Error("Provided target value was not a number!");
};

const parseExerciseHours = (args: Array<string>): Array<number> => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const exerciseHours: Array<number> = args.map((a) => Number(a));

  if (!exerciseHours.some(isNaN)) {
    return exerciseHours;
  } else {
    throw new Error("Provided exercise hour values were not numbers!");
  }
};

const calculateExercises = (
  periodHours: Array<number>,
  target: number
): calculateExercisesResult => {
  const periodLength = periodHours.length;

  const trainingDays = periodHours.filter((a) => a > 0).length;

  const averageHoursPerDay =
    periodHours.reduce((a, b) => a + b, 0) / periodLength;

  const targetReached = averageHoursPerDay >= target ? true : false;

  const hoursVsTarget = averageHoursPerDay / target;

  let rating;
  let ratingDescription;

  if (hoursVsTarget > 1) {
    rating = 3;
    ratingDescription = "very good";
  } else if (hoursVsTarget > 0.8 && hoursVsTarget < 1) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "not good";
  }

  const exerciseFeedback = {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: targetReached,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: averageHoursPerDay,
  };

  return exerciseFeedback;
};

const target: number = parseExerciseTarget(process.argv[2]);

const periodHours: Array<number> = parseExerciseHours(process.argv.slice(3));
console.log(calculateExercises(periodHours, target));
