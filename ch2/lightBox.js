var indicator = document.querySelectorAll('.indicator button')
var lightbox = document.querySelector("#lightbox");
var block = document.querySelector('#block');

// 라이트 박스 보기
function lightboxOpen(num){
    lightbox.setAttribute('class', 'active');
    block.setAttribute('class', 'active'); 

    changeImg(num);
    indicator[num-1].focus();
}

// 라이트 박스 닫기
function lightboxClose(){
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

// 이미지 전환 표시
function changeImg(num){
    var imgs = document.querySelectorAll('figure > img');

    for(var i=0; i<imgs.length; i++){
        imgs[i].removeAttribute('class');
    }
    imgs[num-1].setAttribute('class', 'active');
}