function calendar(new_year, new_month){
    var d = new Date(new_year, new_month-1, 1);
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var day_length = 32 - new Date(year, month-1, 32).getDate();

    
    // 캡션 년 월 출력
    $('.year').html(year);
    $('.month').html(month+1);

    // 테이블 초기화
    var $start_day = $('tr td');

    $start_day.each(function(){
        $(this).html('&nbsp;');
    });

    // 월 시작 날부터 순서대로 표시
    for(var i=day; i<day_length+day; i++){
        $start_day.eq(i).html(date);
        date++;
    }

    // 오늘 날짜 표시
    var date = new Date();
    if(date.getMonth() === month){
        for(var today of $('tr td')){
            if(+today.innerText === date.getDate()){
                $(today).attr('class', 'today');
                break;
            }
        }
    }
}


var year = new Date().getFullYear();
var month = new Date().getMonth()+1;

calendar(year, month);



$('#prev').click(function(){
    calendar(year, --month);

    // 오늘 날짜 표시 지우기
    for(var today of $('tr td')){
        $(today).removeAttr('class');
    }

    calendar(year, month);
})



$('#next').click(function(){
    calendar(year, ++month);

    // 오늘 날짜 표시 지우기
    for(var today of $('tr td')){
        $(today).removeAttr('class');
    }

    calendar(year, month);
})

