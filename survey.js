const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your first name? ', (firstName) => {
  console.log(`Hello, ${firstName}`);

  rl.question('What is your favorite animal? ', (animal) => {
    console.log(`${animal} is a great choice!`);

    rl.question('What is your favorite way to eat eggs? ', (eggs) => {
      console.log(`yum!, ${eggs} eggs`);

      rl.question('What is your favorite color? ', (color) => {
        console.log(`${color} is my fav too!`);

        rl.question('If you could be a tree, what kind of tree would you be? ', (tree) => {
          console.log(`${firstName}'s favorite animal is a ${animal}. They like their eggs ${eggs}, and their favorite color is ${color}.
          If ${firstName} could be a tree, they would be a ${tree}`);


          rl.close();
        });
      });
    });
  });
});





