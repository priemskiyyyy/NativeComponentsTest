export const getAverage = (data: Set<unknown>): number => {
  let average = 0;

  data.forEach(stat => {
    average += Number(stat) || 0;
  });

  return average / data.size || 0;
};

export const getPercentageDifference = (a = 1, b = 1) => {
  return (Math.abs(a - b) / ((a + b) / 2)) * 100;
};
