const searchValue = document.querySelector('.search input');
const searchButton = document.getElementById('srch');



async function checkData(city){

   

    const apiKey = 'cd1e9a1ca25b3d4a4ca59148f9563b01';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    const  response = await fetch(apiUrl);
    var data = await response.json();


    const temperature = document.querySelector('.temp');    
    const cityName = document.querySelector('.city');
    const humidity = document.querySelector('.humidity-percentage');
    const windSpeed = document.querySelector('.windSpeed');
    const images = document.querySelector('.image-icon');

    temperature.textContent = `${Math.round(data.main.temp)}°c`;
    cityName.textContent = data.name;
    humidity.textContent = data.main.humidity +"%";
    windSpeed.textContent = data.wind.speed +" "+"km/h";

    if(data.weather[0].main === 'Rain'){
        images.src = 'images/rain.png';
    }
    else if(data.weather[0].main === 'Haze'){
        images.src = 'images/mist.png';
    }
    else if(data.weather[0].main === 'Clouds'){
        images.src = 'images/clouds.png';
    }
    else if(data.weather[0].main === 'Clear'){
        images.src = 'images/clear.png';
    }
    else if(data.weather[0].main === 'Drizzle'){
        images.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main === 'Mist'){
        images.src = 'images/mist.png';
    }
}


searchButton.addEventListener('click', ()=>{
    checkData(searchValue.value);    
})
