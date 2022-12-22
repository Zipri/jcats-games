#!/usr/bin/env node
import { isTaskComplete, log, start } from './common-functions.js';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const game = (name) => {
  log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const operandA = Math.floor(Math.random() * 20);
    const operandB = Math.floor(Math.random() * 20);
    const result = gcd(operandA, operandB);
    if (isTaskComplete(`Question: ${operandA} ${operandB}`, result, name)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

start(game);
