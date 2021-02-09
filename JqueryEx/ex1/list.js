$(document).ready(function(){
    var list_html = function(){
        if($('.list li') != ''){
            var title = '<h1>' + '목록을 입력해주세요.' +'</h1>'
            $('.title').append(title);
        }
        
        // 로컬에 저장된 값 전부 출력
        for(var i=0; i<localStorage.length; i++){
            var data = localStorage.key(i);
            var addData = '<li>' + data + '</li>';
            $('.list_ul').append(addData);
        }
    }
    
    $('.list').append(list_html);

    var List = {
        add : function(current_list){
            var current_list = prompt('내용을 입력하세요.');
            if(current_list == null){
                return;
            }else{
                // 입력한 값을 로컬에 저장
                localStorage.setItem(current_list, JSON.stringify(current_list));
                // 값 불러오기
                var data = JSON.parse(localStorage.getItem(current_list));

                // 리스트 추가
                var addData = '<li>' + data + '</li>';
            }

            // 타이틀 변경
            if(!$('.list') == ''){
                $('.title').html(data);
                $('.title').css('font-size' ,'26px');
            }

            $('.list_ul').append(addData);
        },

        remove : function(){
            // active의 text를 가져온다
            var getData =  $('.active').text();
            // li에 active class가 있으면
            if($('li').hasClass('active')){
                $('.active').remove();
                $('.title').html('삭제 완료');
                // local 값 삭제
                localStorage.removeItem(getData);
            }
        },

        select : function(e){
            if(e.target.nodeName == "LI"){ // node의 이름이 li이면
                for(var i=0; i<e.target.parentNode.children.length; i++){
                    e.target.parentNode.children[i].removeAttribute('class');
                }
                e.target.setAttribute('class', 'active');

                // title 변경
                var title = $('.active').text();
                $('.title').css('font-size' ,'26px');
                $('.title').text(title);
                
            }
        }
    }

    // 리스트 추가
    $('.addBtn').on('click', function(){
        var current_list = $(this).parents('.list > ul > li');
        List.add(current_list);
    })

    // 리스트 삭제
    $('.removeBtn').on('click', function(){
        List.remove();
    })

    // 리스트 클릭 시 색상 변경
    $('.list_ul').on('click', function(e){
        List.select(e);
    })
})