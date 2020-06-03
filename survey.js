const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? Nicknames are also acceptable: ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) =>{
              console.log(`${answer} likes to ${answer2} while listening to ${answer3}. Eating ${answer5} for ${answer4} is ${answer}'s favourite meal and dish. ${answer6} is their favourite sport and their super power is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});