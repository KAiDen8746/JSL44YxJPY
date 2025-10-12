// 代码生成时间: 2025-10-12 22:33:43
// Importing necessary libraries
import { mode } from 'mathjs';

export default function ({ app }) {
  // Define a function to calculate mean
  const calculateMean = (data) => {
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array');
    }
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  };

  // Define a function to calculate median
  const calculateMedian = (data) => {
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array');
    }
    const sortedData = [...data].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 !== 0 ? sortedData[middleIndex] :
      (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
  };

  // Define a function to calculate mode
  const calculateMode = (data) => {
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array');
    }
    return mode(data);
  };

  // Define a function to calculate standard deviation
  const calculateStandardDeviation = (data) => {
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array');
    }
    const mean = calculateMean(data);
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    return Math.sqrt(variance);
  };

  // Expose the functions to the Nuxt.js app context
  app.$dataAnalysis = {
    mean: calculateMean,
    median: calculateMedian,
    mode: calculateMode,
    standardDeviation: calculateStandardDeviation
  };
};