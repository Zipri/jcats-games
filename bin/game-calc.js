#!/usr/bin/env node
import { isTaskComplete, log, start } from './common-functions.js';

const operation = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = Math.floor(Math.random() * operations.length);
  return operations[randomOperation];
};

const game = (name) => {
  log('What is the result of the expression?');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const action = operation();
    const operandA = Math.floor(Math.random() * 10);
    const operandB = Math.floor(Math.random() * 10);
    const result = eval(`${operandA} ${action} ${operandB}`);
    if (isTaskComplete(`Question: ${operandA} ${action} ${operandB}`, result, name)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

start(game);
