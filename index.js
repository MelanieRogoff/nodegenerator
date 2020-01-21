const questions = ["What is your GitHub user name?", "What is your favorite color?"];

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "checkbox",
      message: questions[1],
      name: "color",
      choices: [
        "Green",
        "Blue",
        "Pink",
        "Red",
      ]
    }, 
    {
      type: "input",
      message: questions[0],
      name: "name"
    }
  ])
  .then(answers => {
      if (answers.color == '') {
        console.log("Surely you have a favorite color? Let's try this again!") 
        } else {
        console.log("You chose " + answers.color + ". I love that color, too!");
        }

      if (answers.name == '') {
        console.log("Oh no! You don't have a username? That won't do, let's try this again!");
      } else {
      console.log("I love your username, " + answers.name + ", it's so original! Loading GitHub profile now.");
  }
});
  


function init() {

}

init();
