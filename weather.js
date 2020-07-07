
	var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b98283b2e00f192262e1cd37cf03738e";
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
			var data = {
				"0": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590175_0_ORGINL_20200706154225771.jpg",
				"1": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/29/GM0020062992982_0_ORGINL_20200702123705930.jpg",
				"2": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/24/GM0020062488170_0_ORGINL_20200630095647208.jpg",
				"3": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590179_0_ORGINL_20200630112029281.jpg",
				"4": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/24/GM0020062488169_0_ORGINL_20200630095643596.jpg",
				"5": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590178_0_ORGINL_20200630112026643.jpg",
				"6": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590176_0_ORGINL_20200630112043776.jpg",
				"7": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590177_0_ORGINL_20200630112046760.jpg",
				"8": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590172_0_ORGINL_20200630112018885.jpg",
				"9": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590173_0_ORGINL_20200630112023005.jpg",
				"10": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/25/GM0020062590181_0_ORGINL_20200629173859455.jpg",
				"11": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/24/GM0020062488168_0_ORGINL_20200629143157553.jpg",
				"12": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/24/GM0020062488167_0_ORGINL_20200629143154000.jpg",
				"13": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/19/GM0020061985384_0_ORGINL_20200629120439866.jpg",
				"14": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/19/GM0020061985383_0_ORGINL_20200629120436739.jpg",
				"15": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/19/GM0020061985380_0_ORGINL_20200629120426724.jpg",
				"16": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/19/GM0020061985382_0_ORGINL_20200629120431835.jpg",
				"17": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/19/GM0020061985381_0_ORGINL_20200629120429199.jpg",
				"18": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/29/GM0020062992989_0_ORGINL_20200706173225161.jpg",
				"19": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/26/GM0020062691604_0_ORGINL_20200706155547839.jpg",
				"20": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/09/GM0020040920179_0_ORGINL_20200506162416821.jpg",
				"21": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109918_0_ORGINL_20200409181005299.jpg",
				"22": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109917_0_ORGINL_20200409174911141.jpg",
				"23": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109927_0_ORGINL_20200507173850569.jpg",
				"24": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147301_0_ORGINL_20200518165648394.jpg",
				"25": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008185_0_ORGINL_20200416154939869.jpg",
				"26": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942126_0_ORGINL_20200528151132113.jpg",
				"27": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109919_0_ORGINL_20200409181015753.jpg",
				"28": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008186_0_ORGINL_20200416154235423.jpg",
				"29": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739784_0_ORGINL_20200507172016172.jpg",
				"30": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278329_0_ORGINL_20200305173914197.jpg",
				"31": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942127_0_ORGINL_20200528151241799.jpg",
				"32": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942091_0_ORGINL_20200521161208671.jpg",
				"33": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278330_0_ORGINL_20200305174532008.jpg",
				"34": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/16/GM0020041628772_0_ORGINL_20200518165244203.jpg",
				"35": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109928_0_ORGINL_20200507173754535.jpg",
				"36": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942130_0_ORGINL_20200518165547442.jpg",
				"37": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/17/GM0020041730733_0_ORGINL_20200423180845960.jpg",
				"38": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/09/GM0020040920180_0_ORGINL_20200506171402590.jpg",
				"39": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147297_0_ORGINL_20200521164021394.jpg",
				"40": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/18/GM0020031898211_0_ORGINL_20200506171412396.jpg",
				"41": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147302_0_ORGINL_20200519170541739.jpg",
				"42": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/24/GM0020032403350_0_ORGINL_20200402173135603.jpg",
				"43": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942128_0_ORGINL_20200528151252142.jpg",
				"44": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147298_0_ORGINL_20200521160902130.jpg",
				"45": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109916_0_ORGINL_20200416193548756.jpg",
				"46": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/02/26/GM0020022674554_0_ORGINL_20200320181916740.jpg",
				"47": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739753_0_ORGINL_20200518161101683.jpg",
				"48": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109920_0_ORGINL_20200409174844861.jpg",
				"49": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147303_0_ORGINL_20200518131045552.jpg",
				"50": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942123_0_ORGINL_20200514162316161.jpg",
				"51": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942087_0_ORGINL_20200518131726023.jpg",
				"52": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739783_0_ORGINL_20200507171903593.jpg",
				"53": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739785_0_ORGINL_20200507171915472.jpg",
				"54": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109915_0_ORGINL_20200416161435616.jpg",
				"55": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/18/GM0020051855061_0_ORGINL_20200521160112536.jpg",
				"56": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/31/GM0020033108920_0_ORGINL_20200506171539740.jpg",
				"57": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739744_0_ORGINL_20200507150359282.jpg",
				"58": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/28/GM0020042840189_0_ORGINL_20200518115957874.jpg",
				"59": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739782_0_ORGINL_20200507171825622.jpg"
			};
			console.log(data[0]);
			var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
			$("#weather-img").attr("src", imgURL);
			var temp = Math.round(resp.main.temp- 273.15);
			$("#temperature").html(temp);
			var img = load_img(temp);
			var c = 0;
			while (data[c])
					c++;
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
					if (i < c - 1)
					i += 1;
					$("#clothes-img").attr("src", data[i]);
				});
			}
	})

	
	function load_img(temp){
		if (temp >= 27)
			var img = ["./imgs/27_1.jpeg", "./imgs/27_2.jpeg"];
		else if (temp >= 23)
			var img = ["./imgs/23_26_1.png", "./imgs/23_26_2.jpeg"];
		else if (temp >= 20)
			var img = ["./imgs/20_22_1.jpeg", "./imgs/20_22_2.jpeg"];
		else if (temp >= 17)
			var img = ["./imgs/17_19_1.jpeg", "./imgs/17_19_2.jpeg"];
		else if (temp >= 12)
			var img = ["./imgs/12_16_1.jpeg", "./imgs/12_16_2.jpeg"];
		else if (temp >= 10)
			var img = ["./imgs/10_11_1.jpeg", "./imgs/10_11_2.jpeg"];
		else
			var img = ["./imgs/6_9coat1.jpeg", "./imgs/6_9coat2.jpeg"];
		return (img);
	}
	function load_img_2(temp){
		var img;
		if (temp >= 27)
			img = "27_1.jpeg";
		else if (temp >= 23)
			img = "23_26_2.png";
		else if (temp >= 20)
			img = "20_22_2.jpeg";
		else if (temp >= 17)
			img = "17_19_2.jpeg";
		else if (temp >= 12)
			img = "12_16_2.jpeg";
		else if (temp >= 10)
			img = "10_11_2.png";
		else
			img = "6_9coat2.jpeg";
		return (img);
	}

	function left_click() {
		alert("왼쪽을 누르셨습니다.");
	}

	function right_click() {
		alert("오른쪽을 누르셨습니다.");
	}