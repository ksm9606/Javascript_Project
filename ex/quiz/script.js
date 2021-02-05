var question = document.getElementById('question');
var btn = document.querySelectorAll('.btn');
var progress = document.getElementById('progress');

function Question(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

var quesions = [
    new Question('1111111', ['1ffdfd', '2f1fdsfasd1', '3fasdfsdsfa', '4fsdafsdfasd'], '1ffdfd'),
    new Question('2222222', ['1ffdfd', '2f1fdsfasd1', '3fasdfsdsfa', '4fsdafsdfasd'], '2f1fdsfasd1'),
    new Question('3333333', ['1ffdfd', '2f1fdsfasd1', '3fasdfsdsfa', '4fsdafsdfasd'], '3fasdfsdsfa'),
    new Question('4444444', ['1ffdfd', '2f1fdsfasd1', '3fasdfsdsfa', '4fsdafsdfasd'], '4fsdafsdfasd')
]

function Quiz(quesions){
    this.score = 0;
    this.quesions = quesions;
    this.quesionIndex = 0;
}

// 퀴즈 객체 생성
var quiz = new Quiz(quesions);

// 퀴즈 생성
function init_quiz(){
    question.innerHTML = '문제 '+ (quiz.quesionIndex+1) +')  ' +quiz.quesions[quiz.quesionIndex].text;
    
    for(var i=0; i<btn.length; i++){
        btn[i].innerHTML = quiz.quesions[quiz.quesionIndex].choice[i];
    }
}

// 정답 체크
function check(answer){
    var answer = quiz.quesions[quiz.quesionIndex].answer;;
    return answer;
}

// 성공 실패 여부
function correct(){
    
}

// 버튼 이벤트 리스너
for(var i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(evnet){
        var select = evnet.target.innerText;
        if(select == check(select)){
            alert('성공');
            quiz.score += 1;
        }else{
            alert('실패');
        }

        // 다음문제
        if(quiz.quesionIndex < quiz.quesions.length-1){
            quiz.quesionIndex++;
            init_quiz();
        }else{
            alert('결과는 : ' + quiz.score );
        }
    })
}

init_quiz();