class sound {
    constructor(fileName){
        this.fileName = fileName;
        this.audio = new Audio('sound/' + this.fileName);
        this.audio.addEventListener('canplay',() =>{
            this.load = true;
        });
    }

    start(onEndCallBack) {
        if(this.load){
            this.audio.play();
            if(typeof onEndCallBack == 'function'){
                this.audio.onend = onEndCallBack;
            }
        }
    }

    stop(){
        this.audio.pause();
    }
}