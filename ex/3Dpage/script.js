var wrapper = document.querySelector('.wrapper');
var page = document.querySelectorAll('.page');
var indicator = document.getElementById('indicator');
var indicator_li = indicator.querySelectorAll('li');

var yDeg = 0;
var w = page[0].offsetWidth;
var page_angle = 0;

var indicator_num = 1;
var indicator_length = page.length;



function init_page(){
    w = page[0].offsetWidth;

    for(var i=0; i<page.length; i++){
        page[i].style.transform = 'rotateY('+ page_angle + 'deg) translateZ('+ (w/2) + 'px)';
        page_angle += 90;
    }

    // page 정면 초기화
    wrapper.style.transform = 'rotateY('+ yDeg + 'deg) translateZ('+ (-w/2) + 'px)';
}

function indicator_init(){
    for(var i=0; i<indicator_length; i++){
        indicator.innerHTML += '<li>' + (i+1) + '</li>'
    }
    indicator_li = indicator.querySelectorAll('li'); 
    change_page(indicator_num)
}

function change_page(indicator_num){
    yDeg = -90 * (indicator_num-1);
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY('+ yDeg + 'deg) ';
    
    for(var i=0; i<indicator_li.length; i++){
        indicator_li[i].removeAttribute('class');
    }
    indicator_li[indicator_num-1].setAttribute('class', 'active');
}


init_page();
indicator_init();

for(var i=0; i<indicator_li.length; i++){
    indicator_li[i].addEventListener('click', function(){
        indicator_num = parseInt(this.innerText);
        
        change_page(indicator_num);
    });
}





