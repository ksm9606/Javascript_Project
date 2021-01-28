function calendar(year, month){
    var d = new Date(year, month-1, 1);
    var d_length = 32 - new Date(year, month-1, 32).getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    
    
    // 캡션 년 월
    var caption_year = document.querySelector('.year');
    var caption_month = document.querySelector('.month');
    caption_year.innerHTML = year;
    caption_month.innerHTML = month+1;


    var start_day = document.querySelectorAll('tr td');
    // 초기화
    for(var i=0; i<start_day.length; i++){
        start_day[i].innerHTML = '&nbsp;';
    }
    
    // 달 별 일수 채우기
    for(i=day; i<day+d_length; i++){
        start_day[i].innerHTML = date;
        date++;
    }
}

var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
calendar(year, month);

// prev next
var prev = document.getElementById('prev');
var next = document.getElementById('next');
prev.addEventListener('click', function(){
    calendar(year, --month);
    console.log()
})
next.addEventListener('click', function(){
    calendar(year, ++month);
})