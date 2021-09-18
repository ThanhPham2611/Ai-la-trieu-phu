class ui {
    constructor() {

    }

    showScreen(screenName){
        let screens = document.querySelectorAll('#wrapper > div');
        screens.forEach( (screen) =>{
            screen.style.display = 'none';
        });
        console.log(screens);

        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    onStartBtnClick(callback) {
        let startBTN = document.getElementById('startBTN');
        startBTN.addEventListener('click',callback);
    }

    showQuestion(question) {
        document.getElementById('question').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer[0];
        document.getElementById('answer_2').innerHTML = question.answer[1];
        document.getElementById('answer_3').innerHTML = question.answer[2];
        document.getElementById('answer_4').innerHTML = question.answer[3];
        
    }

    onClickAnswer(callback) {
        document.getElementById('answer_1').addEventListener('click', () => callback(0) );
        document.getElementById('answer_2').addEventListener('click', () => callback(1) );
        document.getElementById('answer_3').addEventListener('click', () => callback(2) );
        document.getElementById('answer_4').addEventListener('click', () => callback(3) );
    }

    setSelectedAnswer(answer){
        let answerIndex = answer + 1;
        let answerDiv = document.getElementById('answer_' + answerIndex);

        answerDiv.style.backgroundColor = 'blue';
        answerDiv.style.color = 'white';
    }

    resetAnswerStyle() {
        for(let i=1;i<=4;i++){
            document.getElementById('answer_' + i).style.backgroundColor = '#040404';
            document.getElementById('answer_' + i).style.color = 'white';
        }
    }

    showResult(currentAnswer , correctAnswer) {
        let currenAnswerIndex = currentAnswer + 1;
        let correctAnswerDiv = correctAnswer + 1;
        document.getElementById('answer_' + currenAnswerIndex).style.backgroundColor = 'red';
        document.getElementById('answer_' + currenAnswerIndex).style.color = 'white';

        document.getElementById('answer_' + currenAnswerIndex).style.backgroundColor = 'green';
        document.getElementById('answer_' + currenAnswerIndex).style.color = 'white';

    }
}