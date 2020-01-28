const answers = require('./../../index');

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

  function generateHTML(answers, res) { //put answers first because that's what we accessed first in the index.js
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[answers.color].wrapperBackground};
         padding-top: 100px;
         }
        .footing {
          background-color: ${colors[answers.color].wrapperBackground};
          height: 25px;
        }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 1.8em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[answers.color].headerBackground};
         color: ${colors[answers.color].headerColor};
         padding: 10px;
         width: 85%;
         border-radius: 6px;
         }
         #photoimg {
         width: 180px;
         height: 180px;
         border-radius: 50%;
         margin-left: 230px;
         margin-top: -70px;
         border: 6px solid ${colors[answers.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 10px;
           margin-bottom: 10px;
         }

         #locateimg {
           height: 40px;
           width: 40px;
           margin-left: 210px;
         }

         #githubimg {
          height: 40px;
          width: 40px;
          margin-left: 50px;
        }

        #blogimg {
          height: 40px;
          width: 40px;
          margin-left: 48px;
        }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[answers.color].headerBackground};
           color: ${colors[answers.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </head>
      <body>
      <div class="photo-header">
        <div class="wrapper">
          <img id="photoimg" src="${res.data.avatar_url}">
            <h2>Hi!</h2> <!--Off-green background-->
            <h2>My name is ${res.data.name}.</h2>

            <!--Location Link to Map +  Icon-->

              <a href="https://www.google.com/maps/place/${res.data.location}"> 
              <img id="locateimg" src="file:///Users/melanierogoff/Desktop/nodegeneratorHW/assets/images/location.jpeg">

            </a>

              <!--GitHub Link To Profile +  Icon-->

                <a href='https://github.com/${answers.name}'>
                <img id="githubimg" src="file:///Users/melanierogoff/Desktop/nodegeneratorHW/assets/images/github.png">

                
              <!--Blog Link On Icon-->

                <a href="${res.data.blog}">
                  <img id="blogimg" src="file:///Users/melanierogoff/Desktop/nodegeneratorHW/assets/images/blog.png">
                </a>
  </div>
  </div>

    <div class="container"> <!--White background-->
      <p style="text-align:center;">${res.data.bio}</p>
      <div class="card">
        <row>
        <h6 style="text-align:center;">Public Repositories</h6>
      </row>
      <row>
        <p style="text-align:center;">${res.data.public_repos}</p>
      </row>
      </div>
    
      <div class="card">
          <row>
          <h6 style="text-align:center;">GitHub Stars</h6>
        </row>

          <row>
          <p style="text-align:center;">${res.data.subscribers_count}</p>
        </row>
        </div>

        <div class="card" id="moveToRight">
          <row>
            <h6 style="text-align:center;">Followers</h6>
          </row>

            <row>
          <p style="text-align:center;">${res.data.followers}</p>
          </row>

          </div>

          <div class="card" id="mover">
          <row>
            <h6 style="text-align:center;">Following</h6>
          </row>

          <row>
            <p style="text-align:center;">${res.data.following}</p>
          </row>

          </div>
    </div>

    <div class="footing"></div>
  </body>
      </html>`
        }
    
//Don't need to put parens because this is a function - we're exporting the function
//When exporting f(x)'s, we don't need to put () b/c we're not trying to call the f(x) -- we just want to export the f(x) itself
module.exports = generateHTML;