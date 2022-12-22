import readlineSync from 'readline-sync';

export const log = (i) => console.log(i);

export const welcome = () => {
  log('Welcome to the Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);
  return name;
};

export const isTaskComplete = (question, result, name) => {
  log(question);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toString() === result.toString()) {
    log('Correct!');
    return true;
  }
  log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  log(`Let's try again, ${name}!`);
  return false;
};
