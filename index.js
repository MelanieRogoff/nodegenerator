const inquirer = require("inquirer");

const open = require('open');

const fs = require('fs');

const pdf = require('html-pdf');

const generateHTML = require("./generateHTML"); //Don't need to put .js

const questions = ["What is your GitHub user name?", "What is your favorite color?"];

inquirer
  .prompt([
    {
      type: "checkbox",
      message: questions[1],
      name: "color",
      choices: [
        "green", //this is referencing generateHTML.js
        "blue",
        "pink",
        "red",
      ]
    }, 
    {
      type: "input",
      message: questions[0],
      name: "name"
    }
  ])
  .then(answers => {
  fs.writeFile('user.html', generateHTML(answers), (err) => { //This writes the generateHTML(answers) to a new file
    if (answers.color == '') {
      console.log("Surely you have a favorite color? Let's try this again!");
      } else {
      console.log("You chose " + answers.color + ". I love that color, too!");
      }
    if (answers.name == '') {
      console.log("Oh no! You don't have a username? That won't do, let's try this again!");
    } else {
    console.log("I love your username, " + answers.name + ", it's so original! Loading GitHub profile now.");
    pdf.create(generateHTML(answers)).toFile('./user.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: './user.pdf' }
      (async () => { //This opens the PDF in a new browser via open npm
        await open('./user.pdf');
      })();
   });
}
  });
});


