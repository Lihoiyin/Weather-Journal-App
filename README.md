# Weather-Journal App Project

## Technology
HTML, CSS, Javascript

## How to use
1.Install Node.js and install express, body-parser and cors in your terminal. <br>
<br>
2.Set up project environment and enter the command line "node server.js" in your terminal to start the server.

## Project Information
To Use asynchronous programming and express.js making a one page Web API connected with OpenWeather API that can dynamically update the UI with the user data. 

## Development Strategy (Udacity)
1.Start by setting up your project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.<br>
<br>
2.Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.<br>
<br>
3.Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.<br>
<br>
4.After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.<br>
<br>
5.Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values.
