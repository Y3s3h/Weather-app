const inputbox = document.querySelector('.inputbox');
const searchbtn = document.getElementById('searchbtn');

const weather_img = document.querySelector('.weatherimage');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const locationnotfound = document.querySelector('.locationnotfound');

const weatherbody = document.querySelector('.weatherbody');





 async function checkweather(city){
const api_key = "563b887c56f8af4c14f38fa78ede2186";
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response=>response.json());



if(weather_data.cod === `404`){
    locationnotfound.style.display ="flex";
weatherbody.style.display ="none";

return;

}
locationnotfound.style.display ="none";
weatherbody.style.display ="flex";

temperature.innerHTML=`${ Math.round(weather_data.main.temp-273.15)}°C`;
description.innerHTML=`${  weather_data.weather[0].description}`;
humidity.innerHTML=`${  weather_data.main.humidity}%`;
windspeed.innerHTML=`${  weather_data.wind.speed}Km/H`;


switch(weather_data.weather[0].main){

case 'haze':
    weather_img.src="/pics/stormday.png";
    break;


    case 'Clear':
    weather_img.src="/pics/sunnyday.png";
    break;

    case 'Rain':
        weather_img.src="/pics/rainyday.png";
        break;


        case 'Snow':
            weather_img.src="/pics/snowday.png";
            break;


            case 'Clouds':
    weather_img.src="/pics/cloudyday.png";
    break;


}




}

searchbtn.addEventListener('click',()=>{

checkweather(inputbox.value);

});
