// Personal API Key for OpenWeatherMap API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const myKey = '954a621bd74eb250eb3ffa2848d0b434';
const contentToShow = document.getElementById('content');
const dateToShow = document.getElementById('date');
const tempToShow = document.getElementById('temp');
const buttonOfGernerate = document.getElementById('generate');
const boxText = document.querySelectorAll(".my-content");

//Hidden the text in the entryholder
Array.from(boxText).forEach( (text) =>{
    text.style.visibility = "hidden"
});

// Generate a dynamic Date in JS
let date = new Date();
let myDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;

//Add onclink listener to the button "Gernerate"
buttonOfGernerate.addEventListener('click', (event)=>{/* Function called by event listener */
    event.preventDefault();
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    console.log(feelings);
    apiData(baseUrl, zip, myKey)
    .then((data) => {

        // Call postData function and data from the apiData is the parameter
        postData('/addData', {temp: tempConverter(data.main.temp), date: myDate, feelings: feelings });

    }).then( () => {
            //make sure the user anwered somethings annd update the UI
            if (zip !== "" && feelings !== "" ){
                uiUpdate();
                //Make the the text in the entryholder visible
                Array.from(boxText).forEach( (text) =>{
                    text.style.visibility = "visible"
                });
            }else {
                //Alert box to tell user to write anwer
                alert("Please enter all the contents correctly!");
            }     
        })
    });


/* Function to GET Web API Data*/
//Get data from Open Weather Map
const apiData = async(baseUrl, zip, myKey) => {
    const apiRes = await fetch(`${baseUrl}?q=${zip},us&appid=${myKey}`);
    try {
        const data = await apiRes.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to POST data */
const postData = async(url = '', data = {}) => {
    const serverRes = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            temp: data.temp,
            date: data.date,
            feelings: data.feelings
        })
    });

    try {
        const newData = await serverRes.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
};

/* Function to GET Project Data */
const uiUpdate = async () => {
    const reqToServer = await fetch('/all');
    try {
        const serverData = await reqToServer.json();
        dateToShow.innerHTML = serverData.date;
        tempToShow.innerHTML = serverData.temp + " ℃";
        contentToShow.innerHTML = serverData.feelings;
    }
    catch (error) {
        console.log('error', error);
    }
}
//Function that K to ℃
function tempConverter(temp) {
    return (temp -  273.15).toFixed(2); //Two decimal places
}