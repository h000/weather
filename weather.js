
	var apiURI = {
		"0" : "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b98283b2e00f192262e1cd37cf03738e",
		"1" : "https://api.openweathermap.org/data/2.5/weather?q=Michigan,US&appid=b98283b2e00f192262e1cd37cf03738e",
		"2" : "https://api.openweathermap.org/data/2.5/weather?q=Boston,US&appid=b98283b2e00f192262e1cd37cf03738e",
		"3" : "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b98283b2e00f192262e1cd37cf03738e"
	}
	api(apiURI[0]);
	var left_city = document.querySelector("#left_c");
	var right_city = document.querySelector("#right_c");
	var j = 0;
	left_city.addEventListener("click", function(){
		console.log(j)
		if (j > 0)
			j -= 1;
		api(apiURI[j]);
	});
	right_city.addEventListener("click", function(){
		console.log(j)
		if (j < 3)
			j += 1;
		api(apiURI[j]);
	});
	function api(apiURI){
	$.ajax({
		url: apiURI,
		dataType: "json",
		type: "GET",
		async: "false",
		success: function(resp) {
			console.log(resp);
			console.log("현재온도 : "+ (resp.main.temp- 273.15) );
			console.log("현재습도 : "+ resp.main.humidity);
			console.log("날씨 : "+ resp.weather[0].main );
			console.log("상세날씨설명 : "+ resp.weather[0].description );
			console.log("날씨 이미지 : "+ resp.weather[0].icon );
			console.log("바람   : "+ resp.wind.speed );
			console.log("나라   : "+ resp.sys.country );
			console.log("도시이름  : "+ resp.name );
			console.log("구름  : "+ (resp.clouds.all) +"%" );
			var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
			$("#weather-img").attr("src", imgURL);
			var temp = Math.round(resp.main.temp- 273.15);
			$("#temperature").html(temp+ "°c");
			$("#city").html(resp.name);
			//이미지 개수 15개
			data = img(temp);
			var i = 0;
			$("#clothes-img").attr("src", data[i]);
			var left = document.querySelector("#left");
			var right = document.querySelector("#right");
			left.addEventListener("click", function(){
				if (i > 0)
					i -= 1;
				$("#clothes-img").attr("src", data[i]);
			});
			right.addEventListener("click", function(){
				if (i < 14)
				i += 1;
				$("#clothes-img").attr("src", data[i]);
			});
		}
	})
}
	function img(temp) {
		if (temp >= 23)
			return (summer);
		else if (temp >= 17)
			return (spring);
		else if (temp >= 10)
			return (fall);
		else
			return (winter);
	}
