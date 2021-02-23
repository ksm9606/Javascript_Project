function Question(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

// 1번 문제
var question1 = [
    new Question('중심 도시의 주변에서 주거지 역할을 하는 도시를 무엇이라 하는가?', ['베드타운', '신도시', '위성도시', '우보도시'], '베드타운'),
    new Question('다음 중 공익 사업장이 아닌것은?', ['공공 보건 시설', '은행 및 조폐공사', '정부 출연 및 투자 기관', '방송 통신 업체'], '정부 출연 및 투자 기관'),
    new Question('세계 최초로 안락사를 합법화한 나라는?', ['미국', '영국', '네덜란드', '스위스'], '네덜란드'),
    new Question('처음에는 점원이나 비서직에 종사하는 여성들을 뜻했으나, 가정의 생계를 위해 사회로 진출하는 주부 전체를 의미하는 용어는?', ['블루칼라', '핑크칼라', '화이트칼라', '그레이칼라'], '핑크칼라')
]
function Quiz1(question1){
    this.score = 0;
    this.question1 = question1;
    this.questionIndex = 0;
}

// 2번 문제
var question2 = [
    new Question('다음 중 사용자 인터페이스를 설계할 때 사용하는 도구로 옳지 않은 것은?', ['와이어프레임', '이클립스', '유스케이스', '스토리보드'], '이클립스'),
    new Question('다음 중 프로세스에 대한 설명으로 가장 옳지 않은 것은?', ['프로세서가 할당되는 실체로서, 디스패치가 가능한 단위이다.', '한 프로그램에 속한 작은 프로그램으로, 부프로그램이라고도 한다.', '프로세스에 대한 중요한 정보를 저장해 놓은 곳을 PCB라고 한다.', '프로세스 내의 작업 단위를 스레드라고 한다.'], '한 프로그램에 속한 작은 프로그램으로, 부프로그램이라고도 한다.'),
    new Question('다음 중 플랫폼 성능특성 분석 기법과 산출물이 올바르지 않은 것은? ', ['단위 테스트 - 단위 테스트 결과서', '사용자 인터뷰 - 인터뷰 결과서', '성능 테스트 - 성능 테스트 결과서', '산출물 점검 - 벤치마킹 테스트 결과서'], '단위 테스트 - 단위 테스트 결과서'),
    new Question('다음 중 코드의 종류에 대한 설명으로 올바르지 않은 것은?', ['순차코드: 자료의 발생순서，크기순서 등 일정 기준에 따라서 최초의 자료부터 차례로 일련번호를 부여하는 방법으로 순서 코드 또는 일련번호 코드라고 한다.', '블록코드: 코드화 대상 항목을 일정 기준에 따라 대분류. 중분류，소분류 등으로 구분하고 각 그룹 안에서 일련번호를 부여하는 방법이다.', '10진 코드: 코드화 대상 항목을 0~9까지 10진 분할하고, 다시 그 각각에 대하여 10진 분할하는 방법을 필요한 만큼 반복하는 방법으로 도서 분류식 코드라고도 한다.', '연상 코드: 코드화 대상 항목의 명칭이나 약호와 관계있는 숫자나 문자 기호를 이용하여 코드를 부여하는 방법이다.'], '블록코드: 코드화 대상 항목을 일정 기준에 따라 대분류. 중분류，소분류 등으로 구분하고 각 그룹 안에서 일련번호를 부여하는 방법이다.')
]
function Quiz2(question2){
    this.score = 0;
    this.question2 = question2;
    this.questionIndex = 0;
};

// 3번 문제
var question3 = [
    new Question('우리나라 최초의 배달 음식은?', ['설렁탕', '짜장면', '냉면', '해장국'], '해장국'),
    new Question('스승의 날은 어떤 인물의 "생일"에서 유래된 날이다. 그는 누구일꺄?', ['김구', '세종대왕', '신사임당', '이이'], '세종대왕'),
    new Question('해산물을 세는 단위와 그 수가 잘못 연결 된 것은?', ['김 한 톳 - 100장', '고등어 한 손 - 10마리', '북어 한 쾌 - 20마리', '오징어 한 해 - 10마리'], '고등어 한 손 - 10마리'),
    new Question('10원 짜리 동전 앞 면에 새겨진 탑의 이름은?', ['석가탑', '다보탑', '길성탑', '마이산탑'], '다보탑')
]
function Quiz3(question3){
    this.score = 0;
    this.question3 = question3;
    this.questionIndex = 0;
};

var quiz1 = new Quiz1(question1);
var quiz2 = new Quiz2(question2);
var quiz3 = new Quiz3(question3);


// 퀴즈 생성
function init_quiz(){
    $('.question1').html('문제 '+  (quiz1.questionIndex+1)  + ') ' + '<br>'+ quiz1.question1[quiz1.questionIndex].text);
    $('.question2').html('문제 '+  (quiz2.questionIndex+1)  + ') ' + '<br>'+ quiz2.question2[quiz2.questionIndex].text);
    $('.question3').html('문제 '+  (quiz3.questionIndex+1)  + ') ' + '<br>'+ quiz3.question3[quiz3.questionIndex].text);

    for(var i=0; i<4; i++){
        var choice1 = $('.btn1').eq(i);
        var choice2 = $('.btn2').eq(i);
        var choice3 = $('.btn3').eq(i);

        choice1.html(quiz1.question1[quiz1.questionIndex].choice[i]);
        choice2.html(quiz2.question2[quiz2.questionIndex].choice[i]);
        choice3.html(quiz3.question3[quiz3.questionIndex].choice[i]);
    }
};


// 진행 상황
function progress(){
    $('.progress1').html(quiz1.questionIndex+1 + ' / ' + quiz1.question1.length);
    $('.progress2').html(quiz2.questionIndex+1 + ' / ' + quiz2.question2.length);
    $('.progress3').html(quiz3.questionIndex+1 + ' / ' + quiz3.question3.length);
}


// 정답 체크
function checkAnswer1(answer1){
    var answer1 = quiz1.question1[quiz1.questionIndex].answer;
    return answer1;
}

function checkAnswer2(answer2){
    var answer2 = quiz2.question2[quiz2.questionIndex].answer;
    return answer2;
}

function checkAnswer3(answer3){
    var answer3 = quiz3.question3[quiz3.questionIndex].answer;
    return answer3;
}

// 결과
function result1(){
    var result1 = quiz1.score
    var total1 = quiz1.question1.length; 
    $('.con1').html('<h1>'+ '결과' + '</h1>' + '<h2>' + '점수는 : ' + result1 + ' / ' + (total1) +'</h2>' + '<div style="text-align: center;">' +'<button class="regame">' +'다시 풀기'+ '</button>' + '</div>');
}

function result2(){
    var result2 = quiz2.score
    var total2 = quiz2.question2.length;
    $('.con2').html('<h1>'+ '결과' + '</h1>' + '<h2>' + '점수는 : ' + result2 + ' / ' + (total2) +'</h2>' + '<div style="text-align: center;">' +'<button class="regame">' +'다시 풀기'+ '</button>' + '</div>');
}

function result3(){
    var result3 = quiz3.score
    var total3 = quiz3.question3.length;
    $('.con3').html('<h1>'+ '결과' + '</h1>' + '<h2>' + '점수는 : ' + result3 + ' / ' + (total3) +'</h2>' + '<div style="text-align: center;">' +'<button class="regame">' +'다시 풀기'+ '</button>' + '</div>');
}

// 이벤트 리스너
$('.btn1').click(function(event){
    var select = event.target.innerText;
    if(select == checkAnswer1(select)){
        alert('정답!');
        quiz1.score++;
    }
    else{
        alert('오답ㅠㅠ');
    }

    if(quiz1.questionIndex < quiz1.question1.length-1){
        quiz1.questionIndex++;
        init_quiz();
        $(this).css('backgroundColor', 'rgb(239, 239, 239)');
        progress()+1;
    }else{
        result1();
    }
})

$('.btn2').click(function(event){
    var select = event.target.innerText;
    if(select == checkAnswer2(select)){
        alert('정답!');
        quiz2.score++;
    } 
    else{
        alert('오답ㅠㅠ');
    }

    if(quiz2.questionIndex < quiz2.question2.length-1){
        quiz2.questionIndex++;
        init_quiz();
        $(this).css('backgroundColor', 'rgb(239, 239, 239)');
        progress()+1;
    }else{
        result2();
    }
    
})

$('.btn3').click(function(event){
    var select = event.target.innerText;
    if(select == checkAnswer3(select)){
        alert('정답!');
        quiz3.score++;
    } 
    else{
        alert('오답ㅠㅠ');
    }

    if(quiz3.questionIndex < quiz3.question3.length-1){
        quiz3.questionIndex++;
        init_quiz();
        $(this).css('backgroundColor', 'rgb(239, 239, 239)');
        progress()+1;
    }else{
        result3();
    }

})

// 동적 추가 된 버튼에 바인딩하여 새로고침
$(document).on('click', '.regame', function(){
    location.reload();
    console.log(this);
});


init_quiz();
progress();