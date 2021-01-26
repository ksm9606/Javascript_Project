// new Date(2021, 1, 11);  2월 11일
function calendar(new_year, new_month){
    // Date 객체생성
    var d = new Date(new_year, new_month-1, 1);
    // 월별 일수 구하기
    var d_length = 32 - new Date(new_year, new_month-1, 32).getDate();
    var year = d.getFullYear(); // 년
    var month = d.getMonth(); // 월
    var date = d.getDate(); // 날짜
    var day = d.getDay(); // 요일
    
    // caption 날짜 표시 객체
    var caption_year = document.querySelector('.year');
    var caption_month = document.querySelector('.month');
    
    // caption 날짜 표시
    caption_year.innerHTML = year;
    caption_month.innerHTML = month+1;
    
    var start_day = document.querySelectorAll('tr td');
    
    // 테이블 초기화
    for(var i=0; i<start_day.length; i++){
        start_day[i].innerHTML = '&nbsp;'
    }
    
    // 한달 치 날짜를 테이블 시작 요일부터 순서대로 표시
    for(var i=day; i<day+d_length; i++){
        start_day[i].innerHTML = date;
        date++;
    }    
    

    // 오늘 날짜 표시
    var today = new Date();
    if(today.getFullYear() === year && today.getMonth() === month){
        for (var date of document.querySelectorAll('tr>td')) {
            if (+date.innerText === today.getDate()) {  // 해당 태그가 가지고 있는 날짜는 문자열이기 때문에 + 단항 연산자를 통해 숫자로 변경
              date.classList.add('today');
              break;
            }
        }
    }
}

(function(){
    var prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        year = new Date().getFullYear(),
        month = new Date().getMonth() + 1;
    
    // 현재 시점 기준 calendar함수 호출
    calendar(year, month);

    // 이전 달 버튼 이벤트 핸들러
    prev.onclick = function(){
        calendar(year, --month);
        console.log(month);

        // tr>td 태그 내에 클래스 삭제
        for (var date of document.querySelectorAll('tr>td')) {
            date.classList.remove('today');
        }
        // 현재 날짜 표시 위해 캘린더 새로 불러오기
        calendar(year, month);
    };

    // 다음 달 버튼 이벤트 핸들러
    next.onclick = function(){
        calendar(year, ++month);
        console.log(month);

        // tr>td 태그 내에 클래스 삭제
        for (var date of document.querySelectorAll('tr>td')) {
            date.classList.remove('today');
        }

        // 현재 날짜 표시 위해 캘린더 새로 불러오기
        calendar(year, month);
    };		

})();