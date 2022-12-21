#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { log, welcome } from './common-functions.js';

const operation = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = Math.floor(Math.random() * operations.length);
  return operations[randomOperation];
};

const isQuestionComplete = (name, operandA, action, operandB, result) => {
  log(`Question: ${operandA} ${action} ${operandB}`);
  const answer = readlineSync.question('Your answer: ');
  if (+answer === result) {
    log('Correct!');
    return true;
  }
  log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  log(`Let's try again, ${name}!`);
  return false;
};

const game = (name) => {
  log('What is the result of the expression?');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const action = operation();
    const operandA = Math.floor(Math.random() * 10);
    const operandB = Math.floor(Math.random() * 10);
    let result;
    switch (action) {
      case '+':
        result = operandA + operandB;
        if (isQuestionComplete(name, operandA, action, operandB, result)) {
          correctAnswers += 1;
        } else {
          correctAnswers = 100;
        }
        break;
      case '-':
        result = operandA - operandB;
        if (isQuestionComplete(name, operandA, action, operandB, result)) {
          correctAnswers += 1;
        } else {
          correctAnswers = 100;
        }
        break;
      case '*':
        result = operandA * operandB;
        if (isQuestionComplete(name, operandA, action, operandB, result)) {
          correctAnswers += 1;
        } else {
          correctAnswers = 100;
        }
        break;
      default: break;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

const start = () => {
  const name = welcome();
  game(name);
};

start();
