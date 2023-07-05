

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

getLocation()


function showPosition(position) {
     
  var lattitude=position.coords.latitude
  var longitude=position.coords.longitude
    
    console.log(position)
    fetch(`http://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${lattitude},${longitude}`)
    .then(data=>data.json())
    .then(weather=>locationWeather(weather))
}

function locationWeather(weather){
   var pic=weather.current.condition.icon
   var htmlPic=`<img style="width: 50px; height: 50px;" src="${pic}" alt="">`
   locationPic.innerHTML=htmlPic
  
   var temp=weather.current.temp_c
   var htmlTemp=`<h5 class="mt-2">${temp}°C</h5>`
   locationTemp.innerHTML=htmlTemp

   var locStatus=weather.current.condition.text
   var htmlStatus=`<h5 class="mt-2">${locStatus}</h5>`
   locationStatus.innerHTML=htmlStatus

  if(weather.current.condition.text=='Mist'){
    mainPortion.style.backgroundImage="url('https://quincemedia.com/wp-content/uploads/2018/07/mist-trees-mountain-winter.gif')";
   }else if(weather.current.condition.text=='Partly cloudy'){
    mainPortion.style.backgroundImage="url('https://i.pinimg.com/originals/d7/e7/81/d7e781b32269a8a82b500c1a9dc97733.gif')";


   }else if(weather.current.condition.text=='Moderate rain' ||weather.current.condition.text=='Heavy rain' ||  weather.current.condition.text=='Moderate rain at times' 
   ||locStatus=='Patchy rain possible' ||locStatus=='Moderate or heavy rain shower'){
    mainPortion.style.backgroundImage="url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')";


   }else if(weather.current.condition.text=='Light rain shower'||
   locStatus=='Light rain'){
    mainPortion.style.backgroundImage="url('https://usagif.com/wp-content/uploads/rainy-21.gif')";

    } else if(weather.current.condition.text=='Sunny'){
        mainPortion.style.backgroundImage="url('https://i.gifer.com/mzL.gif')";

    }else if(locStatus=='Clear'){
      mainPortion.style.backgroundImage="url('https://i.pinimg.com/originals/f6/32/b0/f632b07f8ab9b2a0ccf77998c766064b.gif')"

    }else if(locStatus=='Patchy light rain with thunder'){
      mainPortion.style.backgroundImage="url('https://giffiles.alphacoders.com/105/105296.gif')"

    }else if(weather.current.condition.text=='Cloudy'||weather.current.condition.text=='Overcast' ){
      mainPortion.style.backgroundImage="url('https://i.makeagif.com/media/12-15-2017/DKtsfr.gif')"

    }else if(weather.current.condition.text=='Fog'){
      mainPortion.style.backgroundImage="url('https://thumbs.gfycat.com/DeliciousUnfortunateCockroach-size_restricted.gif')"
    }else{
      mainPortion.style.backgroundImage="url('https://media.tenor.com/T8V7Eo58TQQAAAAd/sunset-sky.gif')"
    }
 
}

function searchCity(){
  var cityName=citySearch.value
     
     fetch(`http://api.weatherapi.com/v1/current.json?key=dc457e9dadd24a4aa8c115625232806&q=${cityName}`)
.then(data=>data.json())
.then(weather=>searchWeather(weather))
}

function searchWeather(weather){
  var cityStatus1=weather.current.condition.text
  var htmlStatus=`<h5 class='mt-2'>${cityStatus1}</h5>`
  cityStatus.innerHTML=htmlStatus
console.log(weather)
    var cityPicWeather=weather.current.condition.icon
     var htmlPicCity= `<img class="mt-3" src="${cityPicWeather}" alt=""></img>`
     cityPic.innerHTML=htmlPicCity

    var placeNme=weather.location.name 
    var htmlPlace=`<h1 class='mt-2'>${placeNme}</h1>`
    cityName.innerHTML=htmlPlace

    var Temperature=weather.current.temp_c
    var Humidity=weather.current.humidity
    var pressure=weather.current.pressure_mb
    
    var htmlLeft=`<i class="fa-solid fa-temperature-three-quarters mt-4"></i><span>Temperatue</span> <br>
        <h4>${Temperature}°C</h4>
        <i class="fa-solid fa-droplet mt-4"></i><span>Humidity</span> <br>
       <h4>${Humidity}</h4>
       <i class="fa-solid fa-temperature-quarter mt-4"></i><span>Pressure</span> <br>
       <h4 class="mb-3">${pressure}mb</h4>`
     weatherLeft.innerHTML=htmlLeft

     var wind=weather.current.wind_kph
     var cloud=weather.current.cloud
     var percep=weather.current.precip_mm

   var htmlRight=`<i class="fa-solid fa-wind mt-4"></i> <span>Wind Speed</span> <br>
   <h4>${wind}kph</h4>
   <i class="fa-solid fa-cloud mt-4"></i><span>Cloud</span> <br>
   <h4>${cloud}%</h4>
   <i class="fa-solid fa-snowflake mt-4"></i><span>Precipitation</span>
   <h4 class="mb-3">${percep}mm</h4>`

   weatherRight.innerHTML=htmlRight
   
    
  if(weather.current.condition.text=='Mist'){
      mainPortion.style.backgroundImage="url('https://quincemedia.com/wp-content/uploads/2018/07/mist-trees-mountain-winter.gif')";
     }else if(weather.current.condition.text=='Partly cloudy'){
      mainPortion.style.backgroundImage="url('https://i.pinimg.com/originals/d7/e7/81/d7e781b32269a8a82b500c1a9dc97733.gif')";


     }else if(weather.current.condition.text=='Moderate rain' ||weather.current.condition.text=='Heavy rain' ||  weather.current.condition.text=='Moderate rain at times' 
     ||cityStatus1=='Patchy rain possible' ||cityStatus1=='Moderate or heavy rain shower'){
      mainPortion.style.backgroundImage="url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')";


     }else if(weather.current.condition.text=='Light rain shower'||
     weather.current.condition.text=='Light rain'){
      mainPortion.style.backgroundImage="url('https://usagif.com/wp-content/uploads/rainy-21.gif')";

      } else if(weather.current.condition.text=='Sunny'){
          mainPortion.style.backgroundImage="url('https://i.gifer.com/mzL.gif')";

      }else if(cityStatus1=='Clear'){
        mainPortion.style.backgroundImage="url('https://i.pinimg.com/originals/f6/32/b0/f632b07f8ab9b2a0ccf77998c766064b.gif')"

      }else if(cityStatus1=='Patchy light rain with thunder'){
        mainPortion.style.backgroundImage="url('https://giffiles.alphacoders.com/105/105296.gif')"

      }else if(weather.current.condition.text=='Cloudy'||weather.current.condition.text=='Overcast' ){
        mainPortion.style.backgroundImage="url('https://i.makeagif.com/media/12-15-2017/DKtsfr.gif')"

      }else if(weather.current.condition.text=='Fog'){
        mainPortion.style.backgroundImage="url('https://thumbs.gfycat.com/DeliciousUnfortunateCockroach-size_restricted.gif')"
      }else{
        mainPortion.style.backgroundImage="url('https://media.tenor.com/T8V7Eo58TQQAAAAd/sunset-sky.gif')"
      }
    }
 

