var apiKey = "11c2ecc6f7da4895be5f0e57b4d438a9";
var queryBase = "http://api.openweathermap.org/data/2.5/";
var city="";

function fiveDayForecast(city) {
  days = 5;
  var queryURL =
    queryBase + "forecast/daily?q=" + city + "&cnt=" + days + "&appid=" + apiKey;
    console.log('queryURL', queryURL)
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
$('#search').click(function(){
city = $('#searchInput').val()
fiveDayForecast(city)
setCity(city)
})

function setCity(city){
    $("#cityList").prepend("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">" + city + "<span class=\"city\"></span></a></li>");
}