var OWAPIKey = "7220c2c3e9afe740a66b14ec0c07c74d";

// Get data for the specific city

$("searchBtn").on("click", getWeather())

function getWeather() {

    const cityName = $("#cityName").val()

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + OWAPIKey;

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {


        $("#cityNameDate").empty();
        $("#temperature").empty();
        $("#humidity").empty();
        $("#windSpeed").empty();
        $("#uvIndex").empty();
        $("#forecast").empty();

    
        saveHistory(cityName)


        let today = new Date().toLocaleDateString()
        $('#cityNameDate').append(`${cityName.charAt(0).toUpperCase() + cityName.slice(1)} (${today})`)       

        longitude = response.coord.lon;
        latitude = response.coord.lat;        

        getUV()

        getForecast()


        let temperaturediv = $('#temperature')
        temperaturediv.append(`<b>Temperature: </b>${Math.round(parseInt(response.main.temp) - 273.15)} °C`)

        let humiditydiv = $('#humidity')
        humiditydiv.append(`<b>Humidity: </b>${response.main.humidity}%`)

        let windSpeeddiv = $('#windSpeed')
        windSpeeddiv.append(`<b>Wind Speed: </b>${response.wind.speed} meters/sec`)
    });
};


/*$(clearHistoryBtn).on("click",()=>clearH()


function clearH() {
    localStorage.clear();
    $('#searchH').empty();
}*/