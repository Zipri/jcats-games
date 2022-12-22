#!/usr/bin/env node
import { isTaskComplete, log, start } from './common-functions.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) if (n % i === 0) return 'no';
  return 'yes';
};

const game = (name) => {
  log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;
  const MIN = 2;
  const MAX = 20;

  while (correctAnswers < 3) {
    const number = MIN + Math.floor(Math.random() * (MAX - MIN));
    const result = isPrime(number);
    if (isTaskComplete(`Question: ${number}`, result, name)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

start(game);
