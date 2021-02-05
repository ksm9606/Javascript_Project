$('#txt').attr('placeholder', '글상자 영역의 색상값으로 지정합니다.');

// 글자색 변경 시 글상자의 글자색에 적용
$('#textcolor').change(function(){
    var color = $(this).val();
    $('#txt').css('color', color);
});

// 배경색 변경 시 글상자의 배경색에 적용
$('#bgcolor').change(function(){
    var color = $(this).val();
    $('#txt').css('backgroundColor', color);
});

// 글자색과 배경을 로컬 스토리지에 저장
$('#set_color').click(function(){
    var textcolor = $('#textcolor').val();
    var bgcolor = $('#bgcolor').val();

    /* localStorage.setItem('textcolor', textcolor);
        localStorage.setItem('bgcolor', bgcolor); */
    
    // 객체(JSON)로 저장하고 불러오기
    var obj = {
        textcolor : textcolor,
        bgcolor : bgcolor
    }

    localStorage.setItem('color', JSON.stringify(obj));
})

// 저장한 환경 설정을 읽어 옴
$('#get_color').click(function(){
    /* var textcolor = localStorage.getItem('textcolor');
        var bgcolor = localStorage.getItem('bgcolor'); */

    /* $('#txt').css({'color' : textcolor, 'backgroundColor' : bgcolor}); */

    
    // JSON형식으로 읽어 오기
    var color = JSON.parse(localStorage.getItem('color'));
    $('#txt').css({'color' : color.textcolor, 'backgroundColor' : color.bgcolor});
});