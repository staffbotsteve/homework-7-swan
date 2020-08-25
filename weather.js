var apiKey = "11c2ecc6f7da4895be5f0e57b4d438a9";
var queryBase = "https://api.openweathermap.org/data/2.5/";
var city = "";
var lat = "";
var lon = "";

function fiveDayForecast(city) {
  days = 6;
  var queryURL =
    queryBase +
    "forecast/daily?q=" +
    city +
    "&cnt=" +
    days +
    "&appid=" +
    apiKey;
  console.log("queryURL", queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("weather", response);
    timeCur = response.list[0].dt;
    dateCur = moment.unix(timeCur).format("MM/DD/YYYY");
    dayCur = moment(dateCur).format("dddd");
    weatherCur = response.list[0].weather[0].main;
    descriptionCur = response.list[0].weather[0].description;
    humidityCur = response.list[0].humidity;
    dayTempCur = Math.round((((response.list[0].temp.day)-273.15)*1.8)+32)
    nightTempCur = Math.round((((response.list[0].temp.night)-273.15)*1.8)+32)
    iconCur = response.list[0].weather[0].icon
    windCur = response.list[0].speed

    timeCur1 = response.list[1].dt;
    dateCur1 = moment.unix(timeCur1).format("MM/DD/YYYY");
    dayCur1 = moment(dateCur).format("dddd");
    weatherCur1 = response.list[1].weather[0].main;
    descriptionCur1 = response.list[1].weather[0].description;
    humidityCur1 = response.list[1].humidity;
    dayTempCur1 = Math.round((((response.list[1].temp.day)-273.15)*1.8)+32)
    nightTempCur1 = Math.round((((response.list[1].temp.night)-273.15)*1.8)+32)
    iconCur1 = response.list[1].weather[0].icon
    windCur1 = response.list[1].speed

    timeCur2 = response.list[2].dt;
    dateCur2 = moment.unix(timeCur2).format("MM/DD/YYYY");
    dayCur2 = moment(dateCur).format("dddd");
    weatherCur2 = response.list[2].weather[0].main;
    descriptionCur2 = response.list[2].weather[0].description;
    humidityCur2 = response.list[2].humidity;
    dayTempCur2 = Math.round((((response.list[2].temp.day)-273.15)*1.8)+32)
    nightTempCur2 = Math.round((((response.list[2].temp.night)-273.15)*1.8)+32)
    iconCur2 = response.list[2].weather[0].icon
    windCur2 = response.list[2].speed

    timeCur3 = response.list[3].dt;
    dateCur3 = moment.unix(timeCur3).format("MM/DD/YYYY");
    dayCur3 = moment(dateCur).format("dddd");
    weatherCur3 = response.list[3].weather[0].main;
    descriptionCur3 = response.list[3].weather[0].description;
    humidityCur3 = response.list[3].humidity;
    dayTempCur3 = Math.round((((response.list[3].temp.day)-273.15)*1.8)+32)
    nightTempCur3 = Math.round((((response.list[3].temp.night)-273.15)*1.8)+32)
    iconCur3 = response.list[3].weather[0].icon
    windCur3 = response.list[3].speed

    timeCur4 = response.list[4].dt;
    dateCur4 = moment.unix(timeCur4).format("MM/DD/YYYY");
    dayCur4 = moment(dateCur).format("dddd");
    weatherCur4 = response.list[4].weather[0].main;
    descriptionCur4 = response.list[4].weather[0].description;
    humidityCur4 = response.list[4].humidity;
    dayTempCur4 = Math.round((((response.list[4].temp.day)-273.15)*1.8)+32)
    nightTempCur4 = Math.round((((response.list[4].temp.night)-273.15)*1.8)+32)
    iconCur4 = response.list[4].weather[0].icon
    windCur4 = response.list[4].speed

    timeCur5 = response.list[5].dt;
    dateCur5 = moment.unix(timeCur5).format("MM/DD/YYYY");
    dayCur5 = moment(dateCur).format("dddd");
    weatherCur5 = response.list[5].weather[0].main;
    descriptionCur5 = response.list[5].weather[0].description;
    humidityCur5 = response.list[5].humidity;
    dayTempCur5 = Math.round((((response.list[5].temp.day)-273.15)*1.8)+32)
    nightTempCur5 = Math.round((((response.list[5].temp.night)-273.15)*1.8)+32)
    iconCur5 = response.list[5].weather[0].icon
    windCur5 = response.list[5].speed

    console.log('ALL VALS', timeCur + " + " + dateCur + " + " + dayCur + " + " +weatherCur + " + " +descriptionCur + " + " +humidityCur + " + " +dayTempCur+ " + " + nightTempCur + " + " +iconCur + " + " +windCur)

    // set current in card are on main page
    $("#weatherToday").empty();
    $("#weatherToday").append("<h1><b>" + dateCur + "</b></h1>");
    $("#weatherToday").append("<li><b>" + city + "</b></li>");
    $("#weatherToday").append("<li><b>" + weatherCur + "</b></li>");
    $("#weatherToday").append("<li><b>" + descriptionCur + "</b></li>");
    $("#weatherToday").append("<li><b>Day -  " + dayTempCur + "</b></li>");
    $("#weatherToday").append("<li><b>Night -  " + nightTempCur + "</b></li>");
    $("#weatherToday").append("<li><b>Humidity " + humidityCur + "</b></li>");
    $("#weatherToday").append("<li><b>Wind Speed " + windCur + "</b></li>");
    $("#weatherToday").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur + ".png\"></b>");
    
    $("#weather1").empty();
    $("#weather1").append("<h5 style=\"color:white; text-align: center\"><b>" + dateCur1 + "</b></h4>");
    $("#weather1").append("<h7 style=\"color:white; text-align: center\"><b>  " + city + "</b></h7><br>");
    $("#weather1").append("<li style=\"color:white\"><b>" + weatherCur1 + "</b></li>");
    $("#weather1").append("<li style=\"color:white\"><b>" + descriptionCur1 + "</b></li>");
    $("#weather1").append("<li style=\"color:white\"><b>Day -  " + dayTempCur1 + "</b></li>");
    $("#weather1").append("<li style=\"color:white\"><b>Night -  " + nightTempCur1 + "</b></li>");
    $("#weather1").append("<li style=\"color:white\"><b>Humidity " + humidityCur1 + "</b></li>");
    $("#weather1").append("<li style=\"color:white\"><b>Wind Speed " + windCur1 + "</b></li>");
    $("#weather1").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur1 + ".png\"></b>");

    $("#weather2").empty();
    $("#weather2").append("<h5 style=\"color:white; text-align: center\"><b>" + dateCur2 + "</b></h4>");
    $("#weather2").append("<h7 style=\"color:white; text-align: center\"><b>  " + city + "</b></h7><br>");
    $("#weather2").append("<li style=\"color:white\"><b>" + weatherCur2 + "</b></li>");
    $("#weather2").append("<li style=\"color:white\"><b>" + descriptionCur2 + "</b></li>");
    $("#weather2").append("<li style=\"color:white\"><b>Day -  " + dayTempCur2 + "</b></li>");
    $("#weather2").append("<li style=\"color:white\"><b>Night -  " + nightTempCur2 + "</b></li>");
    $("#weather2").append("<li style=\"color:white\"><b>Humidity " + humidityCur2 + "</b></li>");
    $("#weather2").append("<li style=\"color:white\"><b>Wind Speed " + windCur2 + "</b></li>");
    $("#weather2").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur2 + ".png\"></b>");

    $("#weather3").empty();
    $("#weather3").append("<h5 style=\"color:white; text-align: center\"><b>" + dateCur3 + "</b></h4>");
    $("#weather3").append("<h7 style=\"color:white; text-align: center\"><b>  " + city + "</b></h7><br>");
    $("#weather3").append("<li style=\"color:white\"><b>" + weatherCur3 + "</b></li>");
    $("#weather3").append("<li style=\"color:white\"><b>" + descriptionCur3 + "</b></li>");
    $("#weather3").append("<li style=\"color:white\"><b>Day -  " + dayTempCur3 + "</b></li>");
    $("#weather3").append("<li style=\"color:white\"><b>Night -  " + nightTempCur3 + "</b></li>");
    $("#weather3").append("<li style=\"color:white\"><b>Humidity " + humidityCur3 + "</b></li>");
    $("#weather3").append("<li style=\"color:white\"><b>Wind Speed " + windCur3 + "</b></li>");
    $("#weather3").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur3 + ".png\"></b>");

    $("#weather4").empty();
    $("#weather4").append("<h5 style=\"color:white; text-align: center\"><b>" + dateCur4 + "</b></h4>");
    $("#weather4").append("<h7 style=\"color:white; text-align: center\"><b>  " + city + "</b></h7><br>");
    $("#weather4").append("<li style=\"color:white\"><b>" + weatherCur4 + "</b></li>");
    $("#weather4").append("<li style=\"color:white\"><b>" + descriptionCur4 + "</b></li>");
    $("#weather4").append("<li style=\"color:white\"><b>Day -  " + dayTempCur4 + "</b></li>");
    $("#weather4").append("<li style=\"color:white\"><b>Night -  " + nightTempCur4 + "</b></li>");
    $("#weather4").append("<li style=\"color:white\"><b>Humidity " + humidityCur4 + "</b></li>");
    $("#weather4").append("<li style=\"color:white\"><b>Wind Speed " + windCur4 + "</b></li>");
    $("#weather4").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur4 + ".png\"></b>");

    $("#weather5").empty();
    $("#weather5").append("<h5 style=\"color:white; text-align: center\"><b>" + dateCur5 + "</b></h4>");
    $("#weather5").append("<h7 style=\"color:white; text-align: center\"><b>  " + city + "</b></h7><br>");
    $("#weather5").append("<li style=\"color:white\"><b>" + weatherCur5 + "</b></li>");
    $("#weather5").append("<li style=\"color:white\"><b>" + descriptionCur5 + "</b></li>");
    $("#weather5").append("<li style=\"color:white\"><b>Day -  " + dayTempCur5 + "</b></li>");
    $("#weather5").append("<li style=\"color:white\"><b>Night -  " + nightTempCur5 + "</b></li>");
    $("#weather5").append("<li style=\"color:white\"><b>Humidity " + humidityCur5 + "</b></li>");
    $("#weather5").append("<li style=\"color:white\"><b>Wind Speed " + windCur5 + "</b></li>");
    $("#weather5").append("<b><img src=\"http://openweathermap.org/img/w/" + iconCur5 + ".png\"></b>");


    // THEN I am presented with the an icon representation of weather conditions, the - , the humidity, the wind speed, and the UV index

    lat = response.city.coord.lat;
    lon = response.city.coord.lon;
    uvIndex(lat, lon);
  });
}

function uvIndex(lat, lon) {
  days = 6;
  var queryURL =
    queryBase + "uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  console.log("queryURL", queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    uviCur = response[0].value
    uvi1 = response[1].value
    uvi2 = response[2].value
    uvi3 = response[3].value
    uvi4 = response[4].value
    uvi5 = response[5].value

    $("#weatherToday").append("<p style=\"color:black\"><b>UVI " + uviCur + "</p>");
    $("#weather1").append("<p style=\"color:white\"><b>UVI " + uvi1 + "</p>");
    $("#weather2").append("<p style=\"color:white\"><b>UVI " + uvi2 + "</p>");
    $("#weather3").append("<p style=\"color:white\"><b>UVI " + uvi3 + "</p>");
    $("#weather4").append("<p style=\"color:white\"><b>UVI " + uvi4 + "</p>");
    $("#weather5").append("<p style=\"color:white\"><b>UVI " + uvi5 + "</p>");

  });
}

$("#search").click(function () {
  city = $("#searchInput").val();
  fiveDayForecast(city);
  setCity(city);
});

function setCity(city) {
  // console.log('setCity is called')
  $("#parentCityList").prepend(
    '<li class="nav-item cityList" data-city="'+city+'">' +
      city +
      '</li>'
  );
}

//ASK ABOUT THIS ONE... HOW TO PASS THE CITY NAME WHEN CLICKING THE LIST ITEM
// var cityListItems = document.querySelectorAll(".cityList")
// for (cityListItem of cityListItems) {
//   cityListItem.addEventListener('click', fiveDayForecast(cityListItem.textContent)) 
// }
$('#parentCityList').on('click', '.cityList', function(){
  var city = $(this).data('city')
  fiveDayForecast(city)
})