function Question(title, contents){
    this.title = title;
    this.contents = contents;
}

var questions = [
    new Question('박물관에서 사라진 아빠를 찾아서', '아빠와 함께 떠난 아이는...'), 
    new Question('2222', '222222222222222222'),
    new Question('3333', '33333333333333333333333')
]

function Text(questions){
    this.questions = questions;
    this.questionsIndex = 0;
}

var text = new Text(questions);


// var title_img = document.querySelectorAll('.title_img');
var light_box = document.querySelector('#light_box');
var block = document.getElementById('block');
var close_btn = document.querySelector('.close_btn');
var indicator = document.querySelectorAll('.indicator button');
var num=0;

// 이미지 클릭 시 팝업 창 오픈 
function lightbox_open(num){
    light_box.setAttribute('class', 'active');
    block.setAttribute('class', 'active');

    var title = document.querySelector('.title');
    title.innerHTML = text.questions[num-1].title;

    var tt = document.querySelector('.text');
    tt.innerHTML = text.questions[num-1].contents;

    changeImg(num);
}


// 팝업창 종료
function lightbox_close(){
    light_box.removeAttribute('class');
    block.removeAttribute('class');
}

close_btn.addEventListener('click',function(){
    lightbox_close()
})


// 이미지 변경

function changeImg(num){
    var imgs = document.querySelectorAll('figure > img');
    for(var i=0; i<imgs.length; i++){
        imgs[i].removeAttribute('class');
    }
    imgs[num-1].setAttribute('class', 'active');

    var title = document.querySelector('.title');
    title.innerHTML = text.questions[num-1].title;

    var tt = document.querySelector('.text');
    tt.innerHTML = text.questions[num-1].contents;
}


