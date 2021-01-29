var wrapper = document.querySelector('.wrapper');
var page = document.querySelectorAll('.page');
var indicator = document.getElementById('indicator');
var indicator_length = page.length;

var w = page[0].offsetWidth;
var yDeg = 0;
var indicator_num = 1;
var page_angle = 0;


// 페이지 초기화
function init_page(){
    w = page[0].offsetWidth;
    for(var i=0; i<page.length; i++){
        page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' + (w/2) + 'px)' ;
        page_angle += 90;
    }
    wrapper.style.transform = 'rotateY(' + yDeg + 'deg)  translateZ(' + (-w/2) + 'px) ' ;
}

// 인디케이터 초기화
function init_indicator(){
    for(var i=0; i<indicator_length; i++){
        indicator.innerHTML += '<li>'+ (i+1) + '</li>';
    }
    indicator_li = indicator.querySelectorAll('li');
    change_page(indicator_num);
}


// 페이지 전환
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


// 이벤트 리스너
for(var i=0; i<indicator_li.length; i++){
    indicator_li[i].addEventListener('click', function(){
        indicator_num = parseInt(this.innerText);
        change_page(indicator_num);
    })
}
