#!/usr/bin/env node
import readlineSync from 'readline-sync';

const log = (i) => console.log(i);

const welcome = () => {
  log('Welcome to the Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);
  return name;
};

const game = (name) => {
  log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const questionNumber = Math.floor(Math.random() * 100);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === correctAnswer) {
      log('Correct!');
      correctAnswers += 1;
    } else {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      log(`Let's try again, ${name}!`);
      correctAnswers = 100;
    }
  }
  if (correctAnswers === 3) log(`Congratulations, ${name}!`);
};

const start = () => {
  const name = welcome();
  game(name);
};

start();
