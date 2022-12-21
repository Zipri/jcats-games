import readlineSync from 'readline-sync';

export const log = (i) => console.log(i);

export const welcome = () => {
  log('Welcome to the Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);
  return name;
};
