var wrapper = document.querySelector('.wrapper');
var page = document.querySelectorAll('.page');
var indicator = document.getElementById('indicator');
var indicator_li = indicator.querySelectorAll('li');


// Y축으로 회전시키는 rotateY()함수 적용 .page에 회전을 주는 것이 아니라 .wrapper페이지 전체를 회전
var yDeg=0; 
// 현재 표시 되는 페이지 번호    
var indicator_num = 1; 
var indicator_length = page.length;
// 현재 페이지의 폭
var w = page[0].offsetWidth;
// 각도정의
var page_angle=0; 




function init_page(){
    w = page[0].offsetWidth;

    // 3D page 4면체 위치 정의
    for(var i=0; i<page.length; i++){
        page[i].style.transform = 'rotateY(' +page_angle + 'deg) translateZ(' + (w/2) + 'px)';
        page_angle += 90;
    }

    // page.wrapper 정면으로 초기화
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
}


function init_indicator(){
    // 인디케이터 표시
    for(var i=0; i<indicator_length; i++){
        indicator.innerHTML += '<li>' + (i+1) +'</li>'
    }

    indicator_li = indicator.querySelectorAll('li'); 
    change_page(indicator_num);
}


function change_page(indicator_num){
    indicator_li = indicator.querySelectorAll('li');
    // 현재 인디케이터 하이라이트 표시
    indicator_li[indicator_num - 1].setAttribute('class', 'active');	
    yDeg = -90 * (indicator_num - 1);
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';

    // 인디케이터 표시
    for(var i = 0; i < indicator_li.length; i++){
        indicator_li[i].removeAttribute('class');
    }
    indicator_li[indicator_num - 1].setAttribute('class', 'active');			
}

init_page();
init_indicator();

for(var i=0; i<indicator_li.length; i++){
    indicator_li[i].addEventListener('click', function(){
        indicator_num = parseInt(this.innerText);
        change_page(indicator_num);
    });
}

// 창 크기 변경 시 페이지 초기화
window.onresize = function(){
    init_page();
}