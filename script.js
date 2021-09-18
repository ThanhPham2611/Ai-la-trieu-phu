const questions = [
    {
        question: 'Ai là người giàu nhất trên thế giới hiện nay',
        answer: [
            'Bill Gate',
            'Jack Ma',
            'Phạm Nhật Vượng',
            'Bla Bla'
        ],
        correct : 2
    },
    {
        question: 'Ai là người đang sở hữu nhiều quả bóng vàng nhiều nhất hiện nay',
        answer: [
            'Lionel Messi',
            'Neymar JR',
            'Cristiano Ronaldo',
            'Nguyễn Quang Hải'
        ],
        correct : 3
    },
];

class altp {
    constructor() {
        this.ui = new ui();
        this.ui.showScreen('welcomeScreen');
        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.mainSound = new sound('main theme.mp3');
        this.waitAnswer = new sound('final answer.mp3');
        this.letPlay = new sound('lets play.mp3');
        this.bg = new sound('200032000.mp3');
        this.true = new sound('correct answer.mp3');
        this.wrong = new sound('wrong answer.mp3');
        
        this.ui.onStartBtnClick( () =>{
            this.start();
        });
    }

    start(){
        this.ui.showScreen('questionScreen');
        this.ui.resetAnswerStyle();
        this.letPlay.start( () => {
            this.bg.start();
        });
        this.ui.showQuestion(questions[this.currentQuestion]);
        this.ui.onClickAnswer( (answer) => {
            this.currentAnswer = answer;
            this.ui.setSelectedAnswer(answer);
            this.letPlay.stop();
            this.bg.stop();
            this.checkAnswer();
        });
    }

    checkAnswer(){
        if(this.currentAnswer == questions[this.currentQuestion].correct){
            this.true.start( ()=> {
                this.currentQuestion++;
                this.start();
            })
        }
        else{
            this.ui.showResult(questions[this.currentQuestion].correct);
            this.waitAnswer.stop();
            this.wrong.start();
            this.reset();
        }
    }

    reset() {
        this.currentQuestion = 0;
        this.showScreen('welcomeScreen');
        this.ui.resetAnswerStyle();
        this.letPlay.start( () => {
            this.waitAnswer.start();
        })

        
    }
}

var game = new altp();