function Object(title, contens){
    this.title = title;
    this.contents = contens;
}

var objects = [
    new Object('박물관에서 사라진 아빠를 찾아서', '아빠와 함께 떠난 아이는...'), 
    new Object('2222', '222222222222222222'),
    new Object('3333', '33333333333333333333333')
]

function Text(objects){
    this.valueIndex = 0;
    this.objects = objects;
}

var text = new Text(objects);

var title_img = document.querySelectorAll('.title_img');
var light_box = document.getElementById('light_box');
var block = document.getElementById('block');
var close_btn = document.querySelector('.close_btn');
var indicator = document.querySelectorAll('.indicator');
var value = 0;

// 라이트박스 open
function lightbox_open(value){
    light_box.setAttribute('class', 'active');
    block.setAttribute('class', 'active');
    changeImg(value);

}

// 라이트박스 close
function lightbox_close(){
    light_box.removeAttribute('class');
    block.removeAttribute('class');
}
close_btn.addEventListener('click', function(){
    lightbox_close();
})

// 이미지 변경
function changeImg(value){
    var imgs = document.querySelectorAll('figure > img');
    

    for(var i=0; i<imgs.length; i++){
        imgs[i].removeAttribute('class');
    }
    imgs[value-1].setAttribute('class', 'active');

    var title = document.querySelector('.title');
    title.innerHTML = text.objects[value-1].title;

    var contents = document.querySelector('.text');
    contents.innerHTML = text.objects[value-1].contents;
}
