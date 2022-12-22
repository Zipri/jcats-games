#!/usr/bin/env node
import { isTaskComplete, log, start } from './common-functions.js';

const getProgression = () => {
  const MIN = 5;
  const MAX = 10;
  const firstNumber = Math.floor(Math.random() * 20);
  const delta = Math.floor(Math.random() * 20);
  const arrayLength = MIN + Math.floor(Math.random() * (MAX - MIN));
  const progression = [firstNumber];
  for (let i = 1; i < arrayLength; i += 1) progression.push(progression[i - 1] + delta);
  const position = Math.floor(Math.random() * arrayLength);
  const result = progression[position];
  const firstPart = progression.slice(0, position);
  const secondPart = progression.slice(position + 1, arrayLength);
  return [firstPart, secondPart, result];
};

const game = (name) => {
  log('What number is missing in the progression?');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const buffer = getProgression();

    if (isTaskComplete(
      `Question: ${buffer[0].join(' ')} .. ${buffer[1].join(' ')}`,
      buffer[2],
      name,
    )) {
      correctAnswers += 1;
    } else {
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

start(game);
