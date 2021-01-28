var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.querySelector('.cls_btn');
var result_btn = document.querySelector('.result_btn');


// 입력
function calc(value){
    if(inp['result'].value == 0){
        inp['result'].value = ''
    }
    inp['result'].value += value;
}

// 초기화
function cls(){
    inp['result'].value = 0;
}

//계산
function result(){
    var total = eval(inp['result'].value);
    inp['result'].value = total;
}


///////////////////////////////////////////////////////////

for(var i=0; i<input.length; i++){
    if(input[i].value !='clear' && input[i].value !='='){
        input[i].addEventListener('click', function(){
            calc(this.value);
        })
        
    }
}

result_btn.addEventListener('click', function(){
    result();
})

cls_btn.addEventListener('click', function(){
    cls();
})