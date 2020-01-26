const inquirer = require("inquirer");

const axios = require("axios");

const open = require('open');

const fs = require('fs');

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
    
  fs.writeFile('user.html', generateHTML(answers), (err) => { //This writes the generateHTML(answers) to a new file
    if (answers.color == '') {
      console.log("Surely you have a favorite color? Let's try this again!");
      } else {
      console.log("You chose " + answers.color + ". I love that color, too!");
      }
      if (answers.name == '') {
        console.log("Oh no! You forgot to write something here! That won't do, let's try this again!");
      } else {
      console.log("Onwards!"); 
           
    pdf.create(generateHTML(answers)).toFile('./user.pdf', function(err, res) {
      
   axios //API CALL FOR GITHUB
      .get("https://api.github.com/users/" + answers.name)
      .then(function(res) {
        console.log(res.data.name);
        console.log("<a href='https://github.com/" + answers.name + "/>"); //User profile
        console.log("Hi!" + "<h2> My name is " + res.data.name); //username
        console.log(res.data.bio); //Bio 
        console.log("<img src='" + res.data.avatar_url + "'/>"); //bio image
        console.log(res.data.blog);   //blog
        console.log("<a href='https://www.google.com/maps/place/" + res.data.location + "/>"); //THEN NEED TO MAKE IT A LINK TO GOOGLE MAPS
        console.log("Public Repositories: " + "<p>" + res.data.public_repos + "</p>"); // # of public repos
        console.log("Followers: " + "<p>" + res.data.followers + "</p>"); // # of followers
        console.log("Following: " + "<p>" + res.data.following + "</p>"); // # following
        console.log("GitHub Stars: " + "<p>" + res.data.starred_url + "</p>"); // # of GitHub stars
      })
      .catch(error => {
        console.log(error)
    });  

if (err) return console.log(err);
      console.log(res); // { filename: './user.pdf' }
      (async () => { //This opens PDF in new browser via open npm
        await open('./user.pdf');
      })();
   });
  }})
  answers = answers.name;
  module.exports = answers;
})

