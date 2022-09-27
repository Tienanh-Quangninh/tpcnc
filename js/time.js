window.onload = function auto() {
    sunmoon();
    livetime();
    weather();
}
function livetime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let todayi = date.getDay();
    if (todayi == 0) {
        todayis.innerHTML = "CN";
    }
    else if (todayi == 1) {
        todayis.innerHTML = "Thứ 2";
    }
    else if (todayi == 2) {
        todayis.innerHTML = "Thứ 3";
        
    }
    else if (todayi == 3) {
        todayis.innerHTML = "Thứ 4";
       

    }
    else if (todayi == 4) {
        todayis.innerHTML = "Thứ 5";
      

    }
    else if (todayi == 5) {
        todayis.innerHTML = "Thứ 6";
        
    }
    else if (todayi == 6) {
        todayis.innerHTML = "Thứ 7";
        
    }
    else {

    }
    let currentTime = `${hours}:${minutes}:${seconds} - ${todayis.innerHTML}, ${day}/${month}/${year}`;

    document.getElementById('livetime').innerHTML = currentTime;

}
setInterval(livetime, 1000);   

function sunmoon() {
    const date = new Date();
    let hours = date.getHours();
    if (hours >= 19 || hours <= 6) {
        document.querySelector('.moon').style.display = 'inline';
        document.querySelector('.sun').style.display = 'none';
        document.querySelector('.dark-mode-slide-btn').click();
    }
    else if (hours >= 00 || hours <= 6){
        document.querySelector('.moon').style.display = 'inline';
        document.querySelector('.sun').style.display = 'none';
        document.querySelector('.dark-mode-slide-btn').click();
    }
    else {
        document.querySelector('.moon').style.display = 'none';
        document.querySelector('.sun').style.display = 'inline';
    }

}
setInterval(sunmoon(), 10000);  


function weather() {
    const APP_ID = 'ff532977349290d86ac2bc3243a8ca5a';
    const DEFAULT_VALUE = '--';
    const searchInput = document.querySelector('#search-input');
    const cityName = document.querySelector('.city-name');
    const weatherState_today = document.querySelector('.weather-qstate');
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature_today = document.querySelector('.temperature');
    const temperature_0 = document.querySelector('.temperature0');
    const temperature_1 = document.querySelector('.temperature1');
    const temperature_2 = document.querySelector('.temperature2');
    const temperature_3 = document.querySelector('.temperature3');
    const temperature_4 = document.querySelector('.temperature4');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.wind-speed');
    const temperature_max = document.querySelector('.temperature-max');
    const temperature_min = document.querySelector('.temperature-min');
    const numtext = document.querySelector('.num-text');
    const numtext1 = document.querySelector('.num-text1');
    const numtext2 = document.querySelector('.num-text2');
    const numtext3 = document.querySelector('.num-text3');
    const numtext4 = document.querySelector('.num-text4');
    const date = new Date();
    var numday = date.getDay();
    if (numday == 0) {
        numtext.innerHTML = "CN";
        numtext1.innerHTML = "Thứ 2";
        numtext2.innerHTML = "Thứ 3";
        numtext3.innerHTML = "Thứ 4";
        numtext4.innerHTML = "Thứ 5";
    }
    else if (numday == 1) {
        numtext.innerHTML = "Thứ 2";
        numtext1.innerHTML = "Thứ 3";
        numtext2.innerHTML = "Thứ 4";
        numtext3.innerHTML = "Thứ 5";
        numtext4.innerHTML = "Thứ 6";
    }
    else if (numday == 2) {
        numtext.innerHTML = "Thứ 3";
        numtext1.innerHTML = "Thứ 4";
        numtext2.innerHTML = "Thứ 5";
        numtext3.innerHTML = "Thứ 6";
        numtext4.innerHTML = "Thứ 7";
    }
    else if (numday == 3) {
        numtext.innerHTML = "Thứ 4";
        numtext1.innerHTML = "Thứ 5";
        numtext2.innerHTML = "Thứ 6";
        numtext3.innerHTML = "Thứ 7";
        numtext4.innerHTML = "CN";

    }
    else if (numday == 4) {
        numtext.innerHTML = "Thứ 5";
        numtext1.innerHTML = "Thứ 6";
        numtext2.innerHTML = "Thứ 7";
        numtext3.innerHTML = "CN";
        numtext4.innerHTML = "Thứ 2";

    }
    else if (numday == 5) {
        numtext.innerHTML = "Thứ 6";
        numtext1.innerHTML = "Thứ 7";
        numtext2.innerHTML = "CN";
        numtext3.innerHTML = "Thứ 2";
        numtext4.innerHTML = "Thứ 3";
    }
    else if (numday == 6) {
        numtext.innerHTML = "Thứ 7";
        numtext1.innerHTML = "CN";
        numtext2.innerHTML = "Thứ 2";
        numtext3.innerHTML = "Thứ 3";
        numtext4.innerHTML = "Thứ 4";
    }
    else {

    }
    // const sunrise = document.querySelector('.sunrise');
    // const sunset = document.querySelector('.sunset');
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${APP_ID}&units=metric&lang=vi&cnt=5`)
            .then(async res => {
                const data = await res.json();
                cityName.innerHTML = data.city.name || DEFAULT_VALUE;
                weatherState_today.innerHTML = data.list[0].weather[0].description || DEFAULT_VALUE;
                weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
                temperature_today.innerHTML = Math.round(data.list[0].main.temp) || DEFAULT_VALUE;
                temperature_0.innerHTML = temperature_today.innerHTML;
                temperature_1.innerHTML = Math.round(data.list[1].main.temp) || DEFAULT_VALUE;
                temperature_2.innerHTML = Math.round(data.list[2].main.temp) || DEFAULT_VALUE;
                temperature_3.innerHTML = Math.round(data.list[3].main.temp) || DEFAULT_VALUE;
                temperature_4.innerHTML = Math.round(data.list[4].main.temp) || DEFAULT_VALUE;
                // sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
                // sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
                humidity.innerHTML = data.list[0].main.humidity + "%" || DEFAULT_VALUE;
                windSpeed.innerHTML = (data.list[0].wind.speed * 3.6).toFixed(2) +"&nbsp;km/h"|| DEFAULT_VALUE;
                temperature_max.innerHTML = Math.round(data.list[0].main.temp_max) || DEFAULT_VALUE;
                temperature_min.innerHTML = Math.round(data.list[0].main.temp_min) || DEFAULT_VALUE;
            
    });
}
