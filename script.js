function processData(data){

    // this if else statement is checking if city exists. If yes it will show all the weather data
    if(!data.error){
        document.getElementById("current-day").style.display = "block"
        document.getElementsByClassName("weather-by-hour-container")[0].style.display = "flex"
        document.getElementsByClassName("weather-by-hour-main-container")[0].style.display = "block"
        document.getElementsByClassName("weather-by-hour-container")[1].style.display = "flex"
        document.getElementsByClassName("weather-by-hour-main-container")[1].style.display = "block"
        document.getElementsByClassName("weather-by-hour-container")[2].style.display = "flex"
        document.getElementsByClassName("weather-by-hour-main-container")[2].style.display = "block"
    }

    let sunriseFromData = data.forecast.forecastday[0].astro.sunrise
    let sunsetFromData = data.forecast.forecastday[0].astro.sunset
    let sunrise = sunriseFromData[0] + sunriseFromData[1] + sunriseFromData[3] + sunriseFromData[4]
    let sunset;
    if(sunsetFromData[6] == "A"){
        sunset = sunsetFromData[0] + sunsetFromData[1] + sunsetFromData[3] + sunsetFromData[4]
    } else if (sunsetFromData[6] == "P"){
        sunset = sunsetFromData[0] + sunsetFromData[1] + sunsetFromData[3] + sunsetFromData[4]
        sunset = Number(sunset) + 1200
    }

    const iconsTabDay = ["icons/sun.png", "icons/partly-cloudy.png", "icons/cloudy.png", "icons/fog.png", "icons/partly-rainy.png", "icons/partly-snowy.png", "icons/storm.png", "icons/snowy.png", "icons/rainy.png", "icons/heavy-rain.png", "icons/heavy-snow.png", "icons/light-thunder.png", "icons/thunder.png", "icons/hail.png", "icons/light-snow-thunder.png"]

    const iconsTabNight = ["icons/night.png", "icons/night-partly-cloudy.png", "icons/fog.png", "icons/night-partly-rainy.png", "icons/night-partly-snowy.png", "icons/night-storm.png", "icons/snowy.png", "icons/rainy.png", "icons/heavy-rain.png", "icons/heavy-snow.png", "icons/thunder.png", "icons/hail.png", "icons/light-snow-thunder.png"]

    
    let image = document.getElementById("weather-image");
    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let minTemp = document.getElementById("min-temp");
    let maxTemp = document.getElementById("max-temp");
    let wind = document.getElementById("wind");
    let windDir = document.getElementById("wind-dir");
    let pressure = document.getElementById("pressure");


            
    city.innerHTML = data.location.name
    temp.innerHTML = "Temp: " + data.current.temp_c + "\&#176;" + "C"
    minTemp.innerHTML = "Min temp: " + data.forecast.forecastday[0].day.mintemp_c + "\&#176;" + "C"
    maxTemp.innerHTML = "Max temp: " + data.forecast.forecastday[0].day.maxtemp_c + "\&#176;" + "C"
    wind.innerHTML = "Wiatr: " + data.current.wind_kph + "km/h"
    pressure.innerHTML = "Ciśnienie: " + data.current.pressure_mb + " hPa"


    /*Today's weather images*/

    let h0img = document.getElementsByClassName("mini-weather-icon")[0];
    let h4img = document.getElementsByClassName("mini-weather-icon")[1];
    let h8img = document.getElementsByClassName("mini-weather-icon")[2];
    let h12img = document.getElementsByClassName("mini-weather-icon")[3];
    let h16img = document.getElementsByClassName("mini-weather-icon")[4];
    let h20img = document.getElementsByClassName("mini-weather-icon")[5];

    h0img = changeHImage(sunrise, sunset, 0, h0img, 0);
    h4img = changeHImage(sunrise, sunset, 4, h4img, 0);
    h8img = changeHImage(sunrise, sunset, 8, h8img, 0);
    h12img = changeHImage(sunrise, sunset, 12, h12img, 0);
    h16img = changeHImage(sunrise, sunset, 16, h16img, 0);
    h20img = changeHImage(sunrise, sunset, 20, h20img, 0);

    /*Today's temperature*/

    let h0temp = document.getElementsByClassName("temp-by-hour")[0]
    let h4temp = document.getElementsByClassName("temp-by-hour")[1]
    let h8temp = document.getElementsByClassName("temp-by-hour")[2]
    let h12temp = document.getElementsByClassName("temp-by-hour")[3]
    let h16temp = document.getElementsByClassName("temp-by-hour")[4]
    let h20temp = document.getElementsByClassName("temp-by-hour")[5]

    h0temp.innerHTML = data.forecast.forecastday[0].hour[0].temp_c + "\&#176;" + "C"
    h4temp.innerHTML = data.forecast.forecastday[0].hour[4].temp_c + "\&#176;" + "C"
    h8temp.innerHTML = data.forecast.forecastday[0].hour[8].temp_c + "\&#176;" + "C"
    h12temp.innerHTML = data.forecast.forecastday[0].hour[12].temp_c + "\&#176;" + "C"
    h16temp.innerHTML = data.forecast.forecastday[0].hour[16].temp_c + "\&#176;" + "C"
    h20temp.innerHTML = data.forecast.forecastday[0].hour[20].temp_c + "\&#176;" + "C"

   /*Tomorrow's weather images*/

    let d1h0img = document.getElementsByClassName("mini-weather-icon")[6];
    let d1h4img = document.getElementsByClassName("mini-weather-icon")[7];
    let d1h8img = document.getElementsByClassName("mini-weather-icon")[8];
    let d1h12img = document.getElementsByClassName("mini-weather-icon")[9];
    let d1h16img = document.getElementsByClassName("mini-weather-icon")[10];
    let d1h20img = document.getElementsByClassName("mini-weather-icon")[11];

    d1h0img = changeHImage(sunrise, sunset, 0, d1h0img, 1);
    d1h4img = changeHImage(sunrise, sunset, 4, d1h4img, 1);
    d1h8img = changeHImage(sunrise, sunset, 8, d1h8img, 1);
    d1h12img = changeHImage(sunrise, sunset, 12, d1h12img, 1);
    d1h16img = changeHImage(sunrise, sunset, 16, d1h16img, 1);
    d1h20img = changeHImage(sunrise, sunset, 20, d1h20img, 1);

    /*Tomorrow's temperature*/

    let d1h0temp = document.getElementsByClassName("temp-by-hour")[6]
    let d1h4temp = document.getElementsByClassName("temp-by-hour")[7]
    let d1h8temp = document.getElementsByClassName("temp-by-hour")[8]
    let d1h12temp = document.getElementsByClassName("temp-by-hour")[9]
    let d1h16temp = document.getElementsByClassName("temp-by-hour")[10]
    let d1h20temp = document.getElementsByClassName("temp-by-hour")[11]

    d1h0temp.innerHTML = data.forecast.forecastday[1].hour[0].temp_c + "\&#176;" + "C"
    d1h4temp.innerHTML = data.forecast.forecastday[1].hour[4].temp_c + "\&#176;" + "C"
    d1h8temp.innerHTML = data.forecast.forecastday[1].hour[8].temp_c + "\&#176;" + "C"
    d1h12temp.innerHTML = data.forecast.forecastday[1].hour[12].temp_c + "\&#176;" + "C"
    d1h16temp.innerHTML = data.forecast.forecastday[1].hour[16].temp_c + "\&#176;" + "C"
    d1h20temp.innerHTML = data.forecast.forecastday[1].hour[20].temp_c + "\&#176;" + "C"

    /*Two days later weather images*/

    let d2h0img = document.getElementsByClassName("mini-weather-icon")[12];
    let d2h4img = document.getElementsByClassName("mini-weather-icon")[13];
    let d2h8img = document.getElementsByClassName("mini-weather-icon")[14];
    let d2h12img = document.getElementsByClassName("mini-weather-icon")[15];
    let d2h16img = document.getElementsByClassName("mini-weather-icon")[16];
    let d2h20img = document.getElementsByClassName("mini-weather-icon")[17];

    d2h0img = changeHImage(sunrise, sunset, 0, d2h0img, 2);
    d2h4img = changeHImage(sunrise, sunset, 4, d2h4img, 2);
    d2h8img = changeHImage(sunrise, sunset, 8, d2h8img, 2);
    d2h12img = changeHImage(sunrise, sunset, 12, d2h12img, 2);
    d2h16img = changeHImage(sunrise, sunset, 16, d2h16img, 2);
    d2h20img = changeHImage(sunrise, sunset, 20, d2h20img, 2);

    /*Two days later temperature*/

    let d2h0temp = document.getElementsByClassName("temp-by-hour")[12]
    let d2h4temp = document.getElementsByClassName("temp-by-hour")[13]
    let d2h8temp = document.getElementsByClassName("temp-by-hour")[14]
    let d2h12temp = document.getElementsByClassName("temp-by-hour")[15]
    let d2h16temp = document.getElementsByClassName("temp-by-hour")[16]
    let d2h20temp = document.getElementsByClassName("temp-by-hour")[17]

    d2h0temp.innerHTML = data.forecast.forecastday[2].hour[0].temp_c + "\&#176;" + "C"
    d2h4temp.innerHTML = data.forecast.forecastday[2].hour[4].temp_c + "\&#176;" + "C"
    d2h8temp.innerHTML = data.forecast.forecastday[2].hour[8].temp_c + "\&#176;" + "C"
    d2h12temp.innerHTML = data.forecast.forecastday[2].hour[12].temp_c + "\&#176;" + "C"
    d2h16temp.innerHTML = data.forecast.forecastday[2].hour[16].temp_c + "\&#176;" + "C"
    d2h20temp.innerHTML = data.forecast.forecastday[2].hour[20].temp_c + "\&#176;" + "C"
    

    function changeHImage(sunrise, sunset, time, imageContainer, day){
        if(Number(time + "00") > Number(sunrise) && Number(time + "00") < Number(sunset)){
            switch(data.forecast.forecastday[day].hour[time].condition.code){
            case 1000:
            imageContainer.src = iconsTabDay[0]
            break
            case 1003: case 1006: case 1009:
            imageContainer.src = iconsTabDay[1]
            break
            case 1006: case 1009:
            imageContainer.src = iconsTabDay[2]
            break
            case 1030: case 1135: case 1147:
            imageContainer.src = iconsTabDay[3]
            break
            case 1063: case 1069: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1198: case 1204: case 1240: case 1249:
            imageContainer.src = iconsTabDay[4]
            break
            case 1066: case 1210: case 1213: case 1255: case 1261:
            imageContainer.src = iconsTabDay[5]
            break
            case 1087:
            imageContainer.src = iconsTabDay[6]
            break
            case 1114: case 1117: case 1216: case 1219: case 1252: case 1258:   //snowy
            imageContainer.src = iconsTabDay[7]
            break
            case 1186: case 1189: case 1207:
            imageContainer.src = iconsTabDay[8]
            break
            case 1192: case 1195: case 1201: case 1243: case 1246:
            imageContainer.src = iconsTabDay[9]
            break
            case 1222: case 1225: 
            imageContainer.src = iconsTabDay[10]
            break
            case 1273:
            imageContainer.src = iconsTabDay[11]
            break
            case 1276:
            imageContainer.src = iconsTabDay[12]
            break
            case 1237: case 1264:
            imageContainer.src = iconsTabDay[13]
            break
            case 1279: case 1282:
            imageContainer.src = iconsTabDay[14]
            break
            }
   
        } else {    // night
            switch(data.forecast.forecastday[day].hour[time].condition.code){
                case 1000:
                imageContainer.src = iconsTabNight[0]
                break
                case 1003: case 1006: case 1009:   
                imageContainer.src = iconsTabNight[1]
                break
                case 1030: case 1135: case 1147:    
                imageContainer.src = iconsTabNight[2]
                break
                case 1063: case 1069: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1198: case 1204: case 1240: case 1249:
                imageContainer.src = iconsTabNight[3]
                break
                case 1066: case 1210: case 1213: case 1255: case 1261:
                imageContainer.src = iconsTabNight[4]
                break
                case 1087: case 1273:
                imageContainer.src = iconsTabNight[5]
                break
                case 1114: case 1117: case 1216: case 1219: case 1252: case 1258:  
                imageContainer.src = iconsTabNight[6]
                break
                case 1186: case 1189: case 1207:   
                imageContainer.src = iconsTabNight[7]
                break
                case 1192: case 1195: case 1201: case 1243: case 1246: 
                imageContainer.src = iconsTabNight[8]
                break
                case 1222: case 1225:   
                imageContainer.src = iconsTabNight[9]
                break
                case 1276: 
                imageContainer.src = iconsTabNight[10]
                break
                case 1237: case 1264:  
                imageContainer.src = iconsTabNight[11]
                break
                case 1279: case 1282:  
                imageContainer.src = iconsTabNight[12]
                break
            }
        }
    }



    switch(data.current.wind_dir){
        case "S": 
        windDir.src = "icons/arrow.png"
        break;
        case "SSW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(22.5deg)"
        break;
        case "SW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(45deg)"
        break;
        case "WSW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(67.5deg)"
        break;
        case "W": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(90deg)"
        break;
        case "WNW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(112.5deg)"
        break;
        case "NW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(135deg)"
        break;
        case "NNW": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(157.5deg)"
        break;
        case "N": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(180deg)"
        break;
        case "NNE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(192.5deg)"
        break;
        case "NE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(215deg)"
        break;
        case "ENE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(237.5deg)"
        break;
        case "E": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(270deg)"
        break;
        case "ESE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(292.5deg)"
        break;
        case "SE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(315deg)"
        break;
        case "ESE": 
        windDir.src = "icons/arrow.png"
        windDir.style.transform = "rotate(337.5deg)"
        break;
    }

    function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = String(h) + String(m)

   


    

    if(time > sunrise && time < sunset){
        switch(data.current.condition.code){
        case 1000:
        image.src = iconsTabDay[0]
        break
        case 1003:
        image.src = iconsTabDay[1]
        break
        case 1006: case 1009:
        image.src = iconsTabDay[2]
        break
        case 1030: case 1135: case 1147:
        image.src = iconsTabDay[3]
        break
        case 1063: case 1069: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1198: case 1204: case 1240: case 1249:
        image.src = iconsTabDay[4]
        break
        case 1066: case 1210: case 1213: case 1255: case 1261:
        image.src = iconsTabDay[5]
        break
        case 1087:
        image.src = iconsTabDay[6]
        break
        case 1114: case 1117: case 1216: case 1219: case 1252: case 1258:   //snowy
        image.src = iconsTabDay[7]
        break
        case 1186: case 1189: case 1207:
        image.src = iconsTabDay[8]
        break
        case 1192: case 1195: case 1201: case 1243: case 1246:
        image.src = iconsTabDay[9]
        break
        case 1222: case 1225: 
        image.src = iconsTabDay[10]
        break
        case 1273:
        image.src = iconsTabDay[11]
        break
        case 1276:
        image.src = iconsTabDay[12]
        break
        case 1237: case 1264:
        image.src = iconsTabDay[13]
        break
        case 1279: case 1282:
        image.src = iconsTabDay[14]
        break
        }
   
    } else {    // night
        switch(data.current.condition.code){
            case 1000:
            image.src = iconsTabNight[0]
            break
            case 1003:
            image.src = iconsTabNight[1]
            break
            case 1006: case 1009:   
            image.src = iconsTabNight[2]
            break
            case 1030: case 1135: case 1147:    
            image.src = iconsTabNight[3]
            break
            case 1063: case 1069: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1198: case 1204: case 1240: case 1249:
            image.src = iconsTabNight[4]
            break
            case 1066: case 1210: case 1213: case 1255: case 1261:
            image.src = iconsTabNight[5]
            break
            case 1087: case 1273:
            image.src = iconsTabNight[6]
            break
            case 1114: case 1117: case 1216: case 1219: case 1252: case 1258:  
            image.src = iconsTabNight[7]
            break
            case 1186: case 1189: case 1207:   
            image.src = iconsTabNight[8]
            break
            case 1192: case 1195: case 1201: case 1243: case 1246: 
            image.src = iconsTabNight[9]
            break
            case 1222: case 1225:   
            image.src = iconsTabNight[10]
            break
            case 1276: 
            image.src = iconsTabNight[11]
            break
            case 1237: case 1264:  
            image.src = iconsTabNight[12]
            break
            case 1279: case 1282:  
            image.src = iconsTabNight[13]
            break
        }
    }
   
}



// Below we have listener which is looking for click on the loupe button.
// Once loupe button is clicked, function below is taking the value from input field and is looking for the city in weather api
document.getElementById("sub").addEventListener("click", function(){
    let cityName = document.getElementById("input-city").value
    fetch("http://api.weatherapi.com/v1/forecast.json?key=12fd2642f2914b8db7285719233101&q="+cityName+"&days=3&aqi=no&alerts=no").then(response => response.json()).then(processData)
})

document.getElementById("input-city").addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        let cityName = document.getElementById("input-city").value
        fetch("http://api.weatherapi.com/v1/forecast.json?key=12fd2642f2914b8db7285719233101&q="+cityName+"&days=3&aqi=no&alerts=no").then(response => response.json()).then(processData)
    }
    
})

