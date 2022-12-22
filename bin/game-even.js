#!/usr/bin/env node
import { isTaskComplete, log, start } from './common-functions.js';

const game = (name) => {
  log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const questionNumber = Math.floor(Math.random() * 100);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    if (isTaskComplete(`Question: ${questionNumber}`, correctAnswer, name)) {
      correctAnswers += 1;
    } else {
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

start(game);
