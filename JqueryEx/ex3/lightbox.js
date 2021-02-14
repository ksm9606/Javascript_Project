// 객체 생성
function Object(title){
    this.title = title;
}

var objects = [
    new Object('1번'),
    new Object('2번'),
    new Object('3번'),
    new Object('4번')
]

function Text(objects){
    this.objects = objects;
}

var text = new Text(objects);

// 팝업 창 띄우기
function popUP(val) {
    $('#lightBox').css('display', 'block');
    $('#block').attr('class', 'active');

    changeImg(val);
}


// 팝업 창 닫기
function closepopUp() {
    $('#lightBox').css('display', 'none');
    $('#block').removeAttr('class');
}

// 이미지 변경
function changeImg(val) {
    var img = $('.lightbox_img > img');
    for (var i = 0; i < img.length; i++) {
        img.eq(i).removeAttr('class');
    }
    img.eq(val).attr('class', 'active');

    // title 변경
    var context = text.objects[val].title
    $('.title').html(context);
    
}

///////////////// 이벤트 리스너 //////////////////////////
$('.img').click(function() {
    var target = $(this).index();
    popUP(target);
})


$('.close_btn').click(function () {
    closepopUp();
});


$('.indicator > button').click(function(){
    var target = $(this).index();
    changeImg(target);
})