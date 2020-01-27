const inquirer = require("inquirer");

const axios = require("axios");

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./assets/js/generateHTML"); //Don't need to put .js

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
        if (answers.color == '') {
      console.log("Surely you have a favorite color? Let's try this again!");
      } else {
      console.log("You chose " + answers.color + ". I love that color, too!");
      }
      if (answers.name == '') {
        console.log("Oh no! You forgot to write something here! That won't do, let's try this again!");
      } else {
      console.log("Onwards!"); 
                 
   axios //API CALL FOR GITHUB
      .get("https://api.github.com/users/" + answers.name)
      .then(function(res) {
        pdf.create(generateHTML(answers, res)).toFile('./user.pdf', function(err) {
        console.log(res.data.blog);   //blog
        console.log("GitHub Stars: " + "<p>" + res.data.starred_url + "</p>"); // # of GitHub stars
  if (err) return console.log(err);
    console.log(res); // { filename: './user.pdf' }
    (async () => { //This opens PDF in new browser via open npm
      await open('./user.pdf');
  })()
})
})
  .catch(error => {
      console.log(error)
  });  
}})
 