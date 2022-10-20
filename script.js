//comment
let cityData = document.querySelector('[city]');
let mainData = document.querySelector('[main]');
let descriptionData = document.querySelector('[description]');
let tempData = document.querySelector('[temp]');
let likeData = document.querySelector('[feels_like]');
let humData = document.querySelector('[humidity]');
let windData = document.querySelector('[windspeed]');

const newCityForm = document.querySelector('[data-new-city-form]');
const newCityInput = document.querySelector('[data-city-name]');
const newSubmitBtn = document.querySelector('[data-button]');

newSubmitBtn.addEventListener('click', e => {
    const cityName = newCityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b55d4af647732f3bd6ef206211780bf`, {mode:'cors'})
        .then(function(response) {
        return response.json()
    })
        .then(function(response) {
            console.log(response)
            cityData.innerHTML = response.name;
            const kelTemp = response.main.temp;
            console.log(kelTemp);
            const fahTemp = (kelTemp - 273.15) * 9/5 + 32;
            tempData.innerHTML = fahTemp;
            const kelFeels = response.main.feels_like;
            console.log(kelFeels);
            const fahFeels = (kelFeels - 273.15) * 9/5 + 32;
            likeData.innerHTML = fahFeels;
            humData.innerHTML = response.main.humidity;
            mainData.innerHTML = response.weather[0].main;
            descriptionData.innerHTML = response.weather[0].description;
            windData.innerHTML = response.wind.speed;
    })
})
/*function cityWeather(response) {
        this.city = response.name;
        this.main = response.weather[0].main;
        this.description = response.weather[0].description
        this.temp = fahTemp;
        this.feels = fahFeels;
        this.humidity = response.main.humidity;
        this.windspeed = response.wind.speed;
}
*/