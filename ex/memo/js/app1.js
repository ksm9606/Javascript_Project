$(document).ready(function(){
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
            var x = Math.random() * ($('#stickyWrap').width() - 250);
            var y = Math.random() * ($('#stickyWrap').height() - 300);

            $('#stickyWrap').append(sticky_html);
            var new_sticky = $('.sticky').last();

            $(new_sticky).css({
                left : x,
                top : y
            });
            new_sticky;
        },

        save : function(text){
            var current_text = text.val();
            if(current_text == ''){
                alert('내용을 입력하세요.');
            }else{
                var key = prompt('제목을 입력하세요');
                localStorage.setItem(key, current_text);
                if(null){
                    return;
                }
            }
        },

        get : function(list){
            var key;
            list.toggleClass('active');
            list.find('ol').empty();
            var del_icon = '<i class="fa fa-trash"></i>';

            for(var i=0; i<localStorage.length; i++){
                key = localStorage.key(i);
                list.find('ol').append('<li>'+ key + del_icon +'</li>');
            }

            list.find('li').click(function(){
                var gettext = $(this).text();
                var text = localStorage.getItem(gettext);
                list.prev('.txt').val(text);
                list.toggleClass('active');
            })

            list.find('li > i').click(function(){
                var delData = $(this).parent().text();

                var ok = confirm('삭제하시겠습니까?');
                if(ok){
                    localStorage.removeItem(delData);
                }
                
            })
        }
    };



    // 메모장 추가
    $('#stickyWrap').on('click', '.add', function(){
        Sticky.add();
    });

    // 메모 저장
    $('#stickyWrap').on('click', '.save', function(){
        var text = $(this).parent().siblings('.txt');
        Sticky.save(text);
        
    });

    // 메모 불러오기
    $('#stickyWrap').on('click', '.get', function(){
        var list = $(this).parents('.top_nav').siblings('.side_nav');
        Sticky.get(list);
    });

    // 메모장 닫기
    $('#stickyWrap').on('click', '.del', function(){
        $(this).parents('.sticky').remove();
    });
});


