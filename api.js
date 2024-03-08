

const temp = document.getElementById('temp')
const cityOutput = document.getElementById('city')
const conditions = document.getElementById('conditions')
const searchBox = document.getElementById("city-select")
const searchBtn = document.querySelector(".search button");

const apiKey = "194ab465b0f4b48abc011b738dab2a39";
const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=`;



async function getWeather(city) {

    const response = await fetch(url + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    cityOutput.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "ºF";
    conditions.innerHTML = data.weather[0].main;
}


searchBtn.addEventListener('click', () =>{getWeather(searchBox.value) } 
)

