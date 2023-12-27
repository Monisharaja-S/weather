fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((values)=>{
  
  let cards="";
  values.map((country)=>{
    cards +=`<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4" id="col">
    <div class="card h-100" id="cards">
         <div class="card-header" id="header">${country.name.common}</div>
       <div class="card-body">
          <img src="${country.flags.svg}" alt="Flag" class="card-img-top" id="image">
          <div class="card-text" id="text">Capital:${country.capital}<br>
            Region:${country.region}<br>
            Code:${country.cca3}<br>
            Population:${country.population}
           </div>
          <button class="btn btn-primary" onclick="getWeather('${country.capital}')">Click for Weather</button>
      </div>
   </div>
</div>`


window.getWeather = (name) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=dfcfcbbc148fdd638022a00a5111fb4a`)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };
      showWeatherAlert(weatherInfo);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
};
const showWeatherAlert = (weatherInfo) => {
  alert(`
 Weather Report is
    Temperature: ${weatherInfo.temperature} K
    Description: ${weatherInfo.description}
    Humidity: ${weatherInfo.humidity}%
    Wind Speed: ${weatherInfo.windSpeed} m/s
  `);
}
    
  });
 document.getElementById("card").innerHTML=cards


   
})

