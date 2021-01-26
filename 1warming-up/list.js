$(document).ready(function(){
    var title = document.getElementById('title');
    var addBtn = document.getElementById('add_Btn');
    var list = document.getElementById('list');
    var remove_Btn = document.getElementById('remove_Btn');
    
    // 목록 클릭 시
    list.addEventListener('click', (e)=>{
        if(e.target.nodeName == "LI"){ // node의 이름이 li이면
            title.innerHTML = e.target.innerText;   // target 값을 가져와서 title 값 변경
    
            for(var i=0; i<e.target.parentNode.children.length; i++){
                e.target.parentNode.children[i].removeAttribute('class');
            }
            e.target.setAttribute('class', 'active');
        }
    });
    
    // 목록 추가 버튼 클릭 시 목록 추가
    addBtn.addEventListener('click', ()=>{
        var listName = prompt('');
        list.innerHTML += '<li>'+ listName +'</li>';
    });
    
    // 목록 삭제 버튼 클릭 시 목록 삭제
    remove_Btn.addEventListener('click', ()=>{
        if($('li').hasClass('active'))
            $('.active').remove();
    })
})
