var url = 'https://api.openweathermap.org/data/2.5/weather?q=changwon&appid=ac47ea5692c1498d6815daf668a7ed8c';

$.getJSON(url, function(data){

    // 날씨 데이터 객체
    var sys = data.sys; 			// 국가명, 일출/일몰			
    var city = data.name; 			// 도시명
    var weather = data.weather; 	// 날씨 객체
    var main = data.main;  			// 온도 기압 관련 객체

    var wmain = weather[0].main; 	// 구름 상태(Cloudiness)
    var w_id = weather[0].id; 		// 날씨상태 id 코드
    var icon = weather[0].icon;		// 날씨 아이콘 정보
    var country = sys.country;  	// 국가명
    var temp = main.temp; 			// 현재 온도
    var temp_min = main.temp_min 	// 최저 온도
    var temp_max = main.temp_max 	// 최고 온도

    // 지역 명
    $('.w_id').append(city + '<br>');

    // 날씨 아이콘
    var icon_url = 'https://openweathermap.org/img/w/' + icon;
    $('.icon').append("<img src='" + icon_url + ".png'>" + '<br>');

    // 현재온도
    $('.temp').append('현재 온도 : ' + parseInt(temp-273.15) + '&deg;');

    $('.temp_max').append('최고 온도 : ' + parseInt(temp_max-273.15) + '&deg;' + '<br>');
    $('.temp_min').append('최저 온도 : ' + parseInt(temp_min-273.15) +'&deg;');
});

function reload(){
    window.location.reload();
}

setInterval(() => {
    reload();
}, 15000);