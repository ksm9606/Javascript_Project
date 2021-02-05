$(function(){
    // 메모장
	var sticky_html = 
    '<div class="sticky">' +
        '<nav class="top_nav">' +
            '<a href="#" class="add"><i class="fa fa-plus"></i></a>' +
            '<a href="#" class="save"><i class="far fa-save"></i></a>' +
            '<div class="right">' +
                '<a href="#" class="get"><i class="fa fa-list"></i></a>' +
                '<a href="#" class="del"><i class="fa fa-times"></i></a>' +
            '</div>' +
        '</nav>' +
        '<textarea name="txt" class="txt"></textarea>' +
        '<nav class="side_nav"><ol></ol></nav>' +
    '</div>';

    $('#stickyWrap').append(sticky_html);

    var Sticky = {
        add : function(){
            // 창 크기를 구함
            var win_width = $('#stickyWrap').width() - 250,
                win_height = $('#stickyWrap').height() - 300,
                x = Math.random() * win_width,		// 랜덤으로 좌표를 지정
                y = Math.random() * win_height; 
            
            $('#stickyWrap').append(sticky_html);	// 메모장 추가
            var $new_sticky = $('.sticky').last();	// 새로 생성된 메모장 객체
    
            $new_sticky.css({
                left: parseInt(x) + 'px',
                top: y
            });	
            // $('.sticky').css('zIndex', '0');	// 메모장 레이어 초기화
            // $new_sticky.css('zIndex', '99');	// 새 메모장을 상위 레이어로 	
        },

        save : function(current_memo){
            var txt = current_memo.val();
            if(txt == ''){
                alert('내용을 입력해주세요');
            }else{
                var key = prompt('저장할 이름을 쓰세요');
                localStorage.setItem(key, txt);
            }
        },

        get : function(current_memo){
            var key;
            var l = localStorage.length;
            var del_icon = '<i class="fa fa-trash"></i>';
            current_memo.find('ol').empty();
            current_memo.toggleClass('active');

            for(var i=0; i<l; i++){
                key = localStorage.key(i);
                current_memo.find('ol').append('<li>'+ key + del_icon +'</li>');
            }

            current_memo.find('li').click(function(){
                var getData = $(this).text();
                var txt = localStorage.getItem(getData);
                current_memo.toggleClass('active');
                current_memo.prev('.txt').val(txt);
            });

            current_memo.find('li > i').click(function(){
                var delData = $(this).parent().text();
                var ok = confirm('삭제할까요?');
                if(ok){
                    localStorage.removeItem(delData);
                }

            })
        }
    };

    // 메모 생성
    $('#stickyWrap').on('click', '.add', function(){
        Sticky.add();
    });

    // 메모 저장
    $('#stickyWrap').on('click', '.save', function(){
        var current_memo = $(this).parent().siblings('.txt');
        Sticky.save(current_memo);
    })

    // 리스트 열기
    $('#stickyWrap').on('click', '.get', function(){
        var current_memo = $(this).parents('.top_nav').siblings('.side_nav');
        Sticky.get(current_memo);
    })

    // 메모 닫기
    $('#stickyWrap').on('click', '.del', function(){
        $(this).parents('.sticky').remove();
    })
});



