
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
				"0": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/27/GM0019122721878_0_ORGINL_20200113174300010.jpg",
				"1": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278329_0_ORGINL_20200305173914197.jpg",
				"2": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/02/07/GM0020020758758_0_ORGINL_20200221182033884.jpg",
				"3": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008185_0_ORGINL_20200416154939869.jpg",
				"4": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739784_0_ORGINL_20200507172016172.jpg",
				"5": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/27/GM0019122721880_0_ORGINL_20200113182516863.jpg",
				"6": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109917_0_ORGINL_20200409174911141.jpg",
				"7": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/27/GM0019122721876_0_ORGINL_20200123145418456.jpg",
				"8": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008186_0_ORGINL_20200416154235423.jpg",
				"9": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278330_0_ORGINL_20200305174532008.jpg",
				"10": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739785_0_ORGINL_20200507171915472.jpg",
				"11": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/13/GM0020011333408_0_ORGINL_20200117101935335.jpg",
				"12": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/24/GM0020032403350_0_ORGINL_20200402173135603.jpg",
				"13": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/17/GM0020041730733_0_ORGINL_20200423180845960.jpg",
				"14": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/27/GM0019122721879_0_ORGINL_20200113180036780.jpg",
				"15": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/18/GM0020031898211_0_ORGINL_20200506171412396.jpg",
				"16": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109919_0_ORGINL_20200409181015753.jpg",
				"17": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/13/GM0020011333407_0_ORGINL_20200116170115022.jpg",
				"18": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/06/GM0020040615535_0_ORGINL_20200409180029343.jpg",
				"19": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/20/GM0020012038665_0_ORGINL_20200214135753788.jpg",
				"20": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109918_0_ORGINL_20200409181005299.jpg",
				"21": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/16/GM0020041628769_0_ORGINL_20200507173741395.jpg",
				"22": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147303_0_ORGINL_20200518131045552.jpg",
				"23": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/06/GM0020030682562_0_ORGINL_20200319154841771.jpg",
				"24": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/09/GM0020040920179_0_ORGINL_20200506162416821.jpg",
				"25": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942126_0_ORGINL_20200528151132113.jpg",
				"26": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008188_0_ORGINL_20200406180233703.jpg",
				"27": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109927_0_ORGINL_20200507173850569.jpg",
				"28": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/06/GM0020040615534_0_ORGINL_20200409180007835.jpg",
				"29": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/02/14/GM0020021464994_0_ORGINL_20200221181243866.jpg",
				"30": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942128_0_ORGINL_20200528151252142.jpg",
				"31": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942127_0_ORGINL_20200528151241799.jpg",
				"32": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/02/14/GM0020021465014_0_ORGINL_20200302113701098.jpg",
				"33": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/03/GM0020010324112_0_ORGINL_20200110171219196.jpg",
				"34": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/02/07/GM0020020758748_0_ORGINL_20200214140006349.jpg",
				"35": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/01/GM0020040109920_0_ORGINL_20200409174844861.jpg",
				"36": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/30/GM0020033008182_0_ORGINL_20200406174751922.jpg",
				"37": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/31/GM0020013151246_0_ORGINL_20200210184405785.jpg",
				"38": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278326_2_ORGINL_20200317120953467.jpg",
				"39": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/06/GM0020010624661_0_ORGINL_20200320181907503.jpg",
				"40": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/17/GM0020031797558_0_ORGINL_20200323175305517.jpg",
				"41": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/02/GM0020030278322_0_ORGINL_20200320181808718.jpg",
				"42": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/20/GM0020012038620_0_ORGINL_20200214144210041.jpg",
				"43": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739783_0_ORGINL_20200507171903593.jpg",
				"44": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/23/GM0019122318937_0_ORGINL_20200103165207896.jpg",
				"45": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/31/GM0020013151249_0_ORGINL_20200210184428891.jpg",
				"46": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/26/GM0019122620910_0_ORGINL_20200103175111810.jpg",
				"47": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739744_0_ORGINL_20200507150359282.jpg",
				"48": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/13/GM0020011333370_0_ORGINL_20200210170018762.jpg",
				"49": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/20/GM0020012038664_0_ORGINL_20200214135917038.jpg",
				"50": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/13/GM0019121312640_0_ORGINL_20200110163408804.jpg",
				"51": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/31/GM0020013151251_0_ORGINL_20200224165244406.jpg",
				"52": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/16/GM0020041628772_0_ORGINL_20200518165244203.jpg",
				"53": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/09/GM0020040920180_0_ORGINL_20200506171402590.jpg",
				"54": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/03/24/GM0020032403351_0_ORGINL_20200402173143961.jpg",
				"55": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/19/12/27/GM0019122721877_0_ORGINL_20200123152320778.jpg",
				"56": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/27/GM0020042739717_0_ORGINL_20200508142618822.jpg",
				"57": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/05/11/GM0020051147301_0_ORGINL_20200518165648394.jpg",
				"58": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/04/29/GM0020042942091_0_ORGINL_20200521161208671.jpg",
				"59": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/01/20/GM0020012038666_0_ORGINL_20200214135831639.jpg"
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