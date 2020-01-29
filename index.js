const inquirer = require("inquirer");

const axios = require("axios");

const open = require('open');

const pdf = require('html-pdf');

const generateHTML = require("./assets/js/generateHTML"); 

const questions = ["What is your GitHub user name?", "What is your favorite color?"];

inquirer
  .prompt([
    {
      type: "checkbox",
      message: questions[1],
      name: "color",
      choices: [
        "green", //this references colors from  generateHTML.js
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

      axios
      .get(`https://api.github.com/users/${answers.name}/starred`)
      .then(function(res) {
        let stars = res.data[0].stargazers_count;
      })

   axios //API CALL FOR GITHUB
      .get("https://api.github.com/users/" + answers.name)
      .then(function(res) {
        const help = res.data.location;
          help.split(', ').join("");
        const helper = help.split(",").map(function(item) {
            return item.trim();
        });
          helper.join;  
          
        pdf.create(generateHTML(answers, res, helper, stars)).toFile('./user.pdf', function(err) { //passing answers & res in generateHTML because we want to ensure that the generateHTML JS file can access the response from the axios call, and we do this by passing them as parameters here. 
         //The above gets the error that stars is undefined, unsure why
          if (err) return console.log(err);
            //console.log(res); // { filename: './user.pdf' }
          (async () => { //This opens PDF in new browser via open npm
            await open('./user.pdf');
          })()
        })
        })
        
//Have to put catch LAST because catch ONLY happens if there's an error, and if we put catch beforehand, it could try to open it before the pdf finishes being created
    .catch(error => {
      console.log(error)
    })

  }
})
 