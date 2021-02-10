var $inp = $('form[name=cal]');
var $input = $inp.find('input');
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn');
var $result = $inp.find('input[name=result]');

// 입력
function cal(value){
    if($result.val() == 0){
        $result.val('');
    }
        var result = $result.val() + value;
        $result.val(result);
}

$input.on('click', function(){
    $value = $(this).val();

    if($value != '=' && $value != 'clear'){
        cal($value);
    }
})

// 초기화
function cls(){
    $result.val(0);
}

$cls_btn.click(function(){
    cls();
})

// 계산
function result(){
    var $total = eval($result.val());
    console.log($total);
    $result.val($total);
}

$result_btn.click(function(){
    try {
        result();
    } catch (error) {
        $result.val('입력오류');
    }
})
