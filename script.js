$(document).ready(function(){
    $('button').click(function(){
    var cityname = $('input').val();
    cityname = escape(cityname); // adds %20 char instead of spaces
        var key = "&APPID=77054bc15c2367d8711dd80d2364997e"; 
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial" + key;
        
        $.get(url, function(res){
            var name = "<h1>" + res.name + "</h1>";
            var t = '\&#176';
            var temp = "<h2>Temperature: " + res.main.temp + t + "F</h2>";
            
            $('.container').html(name + temp);
        })
    })
})