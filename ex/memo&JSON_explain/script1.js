$('#txt').attr('placeholder', '텍스트를 입력해주세요.');
// 글자 색 변경
$('#textcolor').change(function(){ 
    var color = $(this).val();
    $('#txt').css('color', color);
});

// 배경 색 변경
$('#bgcolor').change(function(){
    var bgcolor = $(this).val();
    $('#txt').css('backgroundColor', bgcolor);
});

// local에 글자 색, 배경 색 저장
$('#set_color').click(function(){
    var textColor = $('#textcolor').val();
    var bgColor = $('#bgcolor').val();

    var obj = {
        textcolor : textColor,
        bgcolor : bgColor
    }

    localStorage.setItem('setColor', JSON.stringify(obj));
});

// local에 저장된 색 불러오기
$('#get_color').click(function(){
    var color = JSON.parse(localStorage.getItem('setColor'));

    $('#txt').css('color', color.textColor);
    $('#txt').css('backgroundColor', color.bgcolor);

})