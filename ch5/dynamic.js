var banner = document.getElementById('banner');
var img = document.querySelectorAll('img');
var toggle = document.getElementById('toggle');
var sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
var cast = [];       

// 풍선 객체 생성 함수
function set_balloon(num){
    // 풍선의 속성 값을 랜덤으로 생성
    var x = Math.floor(Math.random() * (500-10)+10);
    var y = Math.floor(Math.random() * (400-220)+220);
    var size = Math.floor(Math.random() * (200-100)+100);
    var angle = Math.floor(Math.random() * (360-0)+0);
    var speed = Math.random() * (3-0)+0;

    cast[num] = {
        x: x,
        y: y,
        size: size,
        angle: angle,
        speed: speed
    };
}

function init_balloon(){
    for(var i=0; i<img.length; i++){
        set_balloon(i);
        img[i].style.left = '-9999px'
        img[i].style.top = '-9999px'
    }
}


// 풍선 애니메이션 함수
function animate_balloon(){
    for(var i=0; i<img.length; i++){
        // 풍선 속성 변경
        img[i].style.left = cast[i].x + 'px';
        img[i].style.top = cast[i].y + 'px';
        img[i].style.transform = `rotate(${cast[i].angle}deg)`;

        // 풍선이 화면 안에 있으면
        if(cast[i].y > -parseInt(banner_height)){
            cast[i].y -= 1 +cast[i].speed;
            cast[i].angle -= cast[i].speed;
        }else{
            set_balloon(i);
        }
    }
}


init_balloon();
setInterval(function(){
    animate_balloon();
}, 1000/30);


toggle.onclick = function(){
    var attr = banner.getAttribute('class');

    if(attr == 'active'){
        banner.removeAttribute('class');
        toggle.innerHTML = '배너열기';
        return false;
    }else{
        banner.setAttribute('class', 'active');
        toggle.innerHTML = '배너닫기';
        return false;
    }
}