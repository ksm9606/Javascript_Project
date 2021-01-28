var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.querySelector('.cls_btn');
var result_btn = document.querySelector('.result_btn');


// 계산기 입력
for(var i=0; i<input.length; i++){
    if(input[i].value != 'clear' && input[i].value != '='){
        input[i].addEventListener('click', function(){
            calc(this.value);
        })
    }
}

// 입력 처리
function calc(value){
    if(inp['result'].value == 0){
        inp['result'].value = '';
    }
    inp['result'].value += value;
}

// 초기화 함수
function cls(){
    inp['result'].value = 0;
}

// 초기화
cls_btn.addEventListener('click', function(){
    cls();
})

// 계산 결과 함수
function result(){
    var result = eval(inp['result'].value);

    inp['result'].value = result;
}

// 결과
result_btn.addEventListener('click', function(){
    result();
})
