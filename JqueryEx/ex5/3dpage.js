var $page = $('.page'),
    wrapper = document.querySelector('.wrapper'),
    indicator_li = document.querySelectorAll('li');

var yDeg = 0,
    indicator_num = 1,
    indicator_length = $page.length,
    w = $page[0].offsetWidth,
    page_angle = 0;
    page_vector = 0;


var hammer = new Hammer(wrapper);    

// 페이지 초기화
function init_page(){
    w = $page[0].offsetWidth;

    // 3D page 4면체 위치 정의
    for(var i=0; i<$page.length; i++){
        $page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' + (w/2) + 'px)' ;
        page_angle += 90;
    }

    // page wrapper 정면으로 초기화
    $('.wrapper').css('transform', 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)');
}


// 인디케이터 초기화
function init_indicator(){
    for(var i=0; i<indicator_length; i++){
        $('#indicator').append('<li>' + (i+1) + '</li>');
    }
    indicator_li = indicator.querySelectorAll('li');
    change_page(indicator_num); 
}

function change_page(indicator_num){
    indicator_li = indicator.querySelectorAll('li');
    // 현재 인디케이터 하이라이트 표시
    indicator_li[indicator_num - 1].setAttribute('class', 'active');
    
    yDeg = -90 * (indicator_num-1)
    $('.wrapper').css('transform', 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)');

    // 인디케이터 표시
    for(var i=0; i<indicator_li.length; i++){
        indicator_li[i].removeAttribute('class');
    }
    indicator_li[indicator_num - 1].setAttribute('class', 'active');
}

init_page();
init_indicator();


// 이벤트 리스너
for(var i=0; i<indicator_li.length; i++){
    indicator_li[i].addEventListener('click', function(){
        indicator_num = parseInt(this.innerText);
        change_page(indicator_num);
    })
}

// 터치 이벤트
// 터치 방향 좌측 벡터
hammer.on('swipeleft', function(ev){
    if(indicator_num < indicator_length){
        page_vector = 1;
    } else page_vector = 0;
});

// 터치 방향 우측 벡터
hammer.on('swiperight', function(ev){
    if(indicator_num > 1){
        page_vector = -1;
    } else page_vector = 0;
});

// 터치를 떼는 순간
hammer.on('panend', function(ev){
    indicator_num += page_vector;				
    change_page(indicator_num);
    console.log(ev.type +" gesture detected.");	
    console.log('next= '+ indicator_num);
});

// 문서 크기가 변경되면 초기화
window.onresize = function(){
    init_page();	
}


// 홈 버튼 클릭 시 홈으로 이동
$('.icons li > a[href="#"]').click(function(){
    change_page(1);
})