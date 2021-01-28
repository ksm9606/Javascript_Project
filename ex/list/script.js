// 목록 클릭 시 제목 변경
var title = document.querySelector('.title');
var list = document.querySelector('.list');

list.addEventListener('click', function(event){
    if(event.target.nodeName == "LI"){
        title.innerHTML = event.target.innerText;
        
        for(var i=0; i<event.target.parentNode.children.length; i++){
            event.target.parentNode.children[i].removeAttribute('class');
        }
        event.target.setAttribute('class', 'active');
    }
})

// 목록 추가
var addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', function(){
    var add = prompt('');
    list.innerHTML += '<li>'+ add +'</li>';
})

// 목록 삭제
var removeBtn = document.querySelector('.removeBtn');

removeBtn.addEventListener('click', function(){
    if($('li').hasClass('active'))
            $('.active').remove();
    title.innerHTML = '목록';
})