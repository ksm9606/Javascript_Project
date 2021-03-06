var banner = document.getElementById('banner');
var banner_height = banner.offsetHeight;
var toggle = document.getElementById('toggle');
var img = document.querySelectorAll('img');
var result = document.querySelector('.result');
var level = document.querySelector('.level');
var score = 0;
var levelUp = 1;

var cast = [];

// 풍선 객체 생성
function set_balloon(num){
    var x = Math.floor(Math.random() * (500-20)+ 10);
    var y = Math.floor(Math.random() * (400 - 120) + 120);
    var size = Math.floor(Math.random() * (200 - 100) + 100);
    var angle = Math.floor(Math.random() * (360 - 0) + 0);
    var speed = Math.random() * (2 - 2) + 0;

    cast[num] = {
        x : x,
        y : -y,
        sizd : size,
        speed : speed,
        angle : angle
    };
}

function init_balloon(){
    for(var i=0; i<img.length; i++){
        set_balloon(i);
        img[i].style.left = '-9999px';
        img[i].style.top = '-9999px';

        img[i].setAttribute('class', 'active');
    }
}

function animation_balloon(){
    for(var i=0; i<img.length; i++){
        img[i].style.left = cast[i].x + 'px';
        img[i].style.top = cast[i].y + 'px';
        // img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)'; 

        if(cast[i].y < banner_height){
            cast[i].y += 1+cast[i].speed;
            cast[i].angle += 1 - cast[i].speed;
        }else{
            set_balloon(i);
        }        
    }
}

init_balloon();
setInterval(function(){
    animation_balloon();
}, 10);


toggle.addEventListener('click', function(){
    banner.classList.toggle('active');
})


for(var i=0; i<img.length; i++){
    img[i].addEventListener('click', function(event){
        click = event.target;
        click.setAttribute('class', 'disable');
        score += 1;
        result.innerHTML = '점수 : '+ score;
        if(score == 3){
            alert('LEVEl UP!! \nSPEED UP!!');
            score = 0;
            level.innerHTML = 'LEVEL : '+ ++levelUp;
            result.innerHTML = '점수 : '+ score;
            init_balloon();
            setInterval(function(){
                animation_balloon();
            }, 10);
        }
    })
}

