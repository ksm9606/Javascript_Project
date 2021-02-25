var url = 'https://api.openweathermap.org/data/2.5/weather?q=changwon&appid=ac47ea5692c1498d6815daf668a7ed8c';
var url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=changwon&appid=455b7befa286c338bffca45f874f3c0d&cnt=5';


// 현재 날씨 정보
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

// 3시간 뒤 날씨 정보
$.getJSON(url2, function(data2){
    // 날씨 데이터 객체
    var city = data2.name; 			// 도시명
    var list = data2.list;
    var weather = data2.list[0].weather; 	// 날씨 객체
    var main = list;  			    // 온도 기압 관련 객체

    var wmain = list.main; 	        // 구름 상태(Cloudiness)
    var w_id = list[0].weather.id	// 날씨상태 id 코드
    var icon = list[0].weather[0].icon;		// 날씨 아이콘 정보
    var percentage = list[0].pop;
    // var country = city.country;  	// 국가명
    var temp = list[0].main.temp; 			// 현재 온도
    var temp_min = list[0].main.temp_min 	// 최저 온도
    var temp_max = list[0].main.temp_max 	// 최고 온도

    // 지역 명
    $('.w_id2').append('3시간 뒤 예보' + '<br>');

    // 날씨 아이콘
    var icon_url = 'https://openweathermap.org/img/w/' + icon;
    $('.icon2').append("<img src='" + icon_url + ".png'>" + '<br>');

    // 현재온도
    $('.temp_max2').append('최고 온도 : ' + parseInt(temp_max-273.15) + '&deg;' + '<br>');
    $('.temp_min2').append('최저 온도 : ' + parseInt(temp_min-273.15) +'&deg;');

    $('.percentage').append('강수 확률 : ' + parseFloat(percentage*100) + '%' + '<br>');
    
    

})

// 날씨 새로고침
function reload(){
    // 특정 div 새로고침
    // $('#wrap1').load(window.location.href+ '#wrap1');    
    location.reload();
}

// 현재 시각 설정
function timeSet(){
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    
    $('.current_time').text(month+ '월 ' +  day + '일 ' + hours + ':' + minutes + ':' + seconds + '');
}

// 1초마다 시간 업데이트
setInterval(() => {
    timeSet();
}, 1000);

// 15초 마다 갱신
setInterval(() => {
    reload();
}, 15000);

