function Question(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

var questions = [
    new Question('우리가 사귄 날은 ?', ['5월 12일', '5월 14일', '5월 18일', '5월 22일'], '5월 18일'),
    new Question('우리가 여름에 놀러 갔던 곳은?', ['전주', '대전', '서울', '부산'], '부산'),
    new Question('상민이의 생일은?', ['6월 13일', '6월 15일', '6월 17일', '6월 19일'], '6월 15일'),
    new Question('가장 최근에 같이 먹은 음식은?', ['햄버거', '치킨', '닭볶음탕', '샐러드'], '닭볶음탕')
]

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
}

Quiz.prototype.correctAnswer = function(answer){
    return answer == this.questions[this.questionsIndex].answer;
}


var quiz = new Quiz(questions);

function update_quiz(){
    var question = document.getElementById('question');
    var btn = document.querySelectorAll('.btn');
    var index = quiz.questionsIndex + 1;

    question.innerHTML = '문제 '+ index + ') ' +quiz.questions[quiz.questionsIndex].text;

    for(var i=0; i<quiz.questions.length; i++){
        btn[i].innerHTML = quiz.questions[quiz.questionsIndex].choice[i];
    }

    progress();
}

var button = document.querySelectorAll('.btn');
function checkAnswer(i){
    button[i].addEventListener('click', function(){
        var answer = button[i].innerText
        if(quiz.correctAnswer(answer)){
            alert('정답!');
            quiz.score++;
        }else{
            alert('오답 ㅠㅠ');
        }

        if(quiz.questionsIndex < quiz.questions.length-1){
            quiz.questionsIndex++;
            update_quiz();
        }else{
            result();
        }
    })
}
for(var i=0; i<button.length; i++){
    checkAnswer(i);
}


function progress(){
    var progress = document.getElementById('progress');
    progress.innerHTML = (quiz.questionsIndex + 1) + ' / ' + quiz.questions.length;
}


function result(){
    var grid = document.querySelector('.grid');
    var result = quiz.score;
    var total = quiz.questions.length;
    grid.innerHTML = '<h1>'+ '결과' + '</h1>' +
                        '<h2>' + '점수는 : ' +  (result * 25)+ ' / ' + (total*25) + ' ❤' +'</h2>' +
                        '<div style="text-align: center;">' + '<img src="11.jpg" style="max-width: 80%;">' +'</div>'
}


update_quiz();