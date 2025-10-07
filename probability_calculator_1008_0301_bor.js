// 代码生成时间: 2025-10-08 03:01:21
// probability_calculator.js
// This module provides a probability distribution calculator

const calculateProbabilityDistribution = (data) => {
  // Ensure data is provided and is an object
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data provided. Data must be an object.');
  }

  // Ensure data has required properties
  if (!data.values || !Array.isArray(data.values) ||
      !data.probability || typeof data.probability !== 'function') {
    throw new Error('Invalid data properties. Data must contain values array and a probability function.');
  }

  // Calculate the sum of all probabilities
  const totalProbability = data.values.reduce((acc, currentValue) => {
    return acc + data.probability(currentValue);
  }, 0);

  // Check if the total probability is close to 1 due to floating point precision
  if (Math.abs(totalProbability - 1) > 0.00001) {
    throw new Error('The sum of all probabilities does not equal 1.');
  }

  // Return the probability distribution object
  return data.values.map((value) => {
    return {
      value: value,
      probability: data.probability(value)
    };
  });
};

// Example usage:
// const data = {
//   values: [1, 2, 3, 4],
//   probability: (value) => 1 / (4 - value + 1)
// };

// try {
//   const distribution = calculateProbabilityDistribution(data);
//   console.log(distribution);
// } catch (error) {
//   console.error(error.message);
// }
