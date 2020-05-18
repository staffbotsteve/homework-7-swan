var apiKey = "11c2ecc6f7da4895be5f0e57b4d438a9";
var queryBase = "http://api.openweathermap.org/data/2.5/";
var city = "";
var lat = "";
var lon = "";

function fiveDayForecast(city) {
  days = 5;
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


    console.log('ALL VALS', timeCur + " + " + dateCur + " + " + dayCur + " + " +weatherCur + " + " +descriptionCur + " + " +humidityCur + " + " +dayTempCur+ " + " + nightTempCur + " + " +iconCur + " + " +windCur)

    $("#weatherToday").empty();
    // set current in card are on main page
    $("#weatherToday").append("<li><b>" + city + "</b></li>");
    $("#weatherToday").append("<li><b>" + dateCur + "</b></li>");
    $("#weatherToday").append("<li><b>" + weatherCur + "</b></li>");
    $("#weatherToday").append("<li><b>" + descriptionCur + "</b></li>");
    $("#weatherToday").append("<li><b>Day Temperature " + dayTempCur + "</b></li>");
    $("#weatherToday").append("<li><b>Night Temperature " + nightTempCur + "</b></li>");

    $("#weatherToday").append("<li><b>" + iconCur + "</b></li>");
    $("#weatherToday").append("<li><b>Wind Speed " + windCur + "</b></li>");



    // THEN I am presented with the an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

    lat = response.city.coord.lat;
    lon = response.city.coord.lon;
    uvIndex(lat, lon);
  });
}

function uvIndex(lat, lon) {
  days = 5;
  var queryURL =
    queryBase + "uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  console.log("queryURL", queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("uvi", response);
  });
}

$("#search").click(function () {
  city = $("#searchInput").val();
  fiveDayForecast(city);
  setCity(city);
});

function setCity(city) {
  $("#cityList").prepend(
    '<li class="nav-item"><a class="nav-link" href="#">' +
      city +
      '<span class="city"></span></a></li>'
  );
}
