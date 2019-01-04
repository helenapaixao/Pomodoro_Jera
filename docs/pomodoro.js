
var pomodoro = {

    comecar: false,
    minutos: 0,
    segundos: 0,
    animaAltura: 0,
    animaIncremento: 0,
    intervalo: null,
    minutosDom: null,
    segundosDom: null,
    animaDom: null,

    iniciar() {
        var self = this;
        this.minutosDom = document.getElementById("minutos");
        this.segundosDom =document.getElementById("segundos");
        this.animaDom = document.getElementById("card");

        this.intervalo = setInterval(function () {
            self.intervalCallback.apply(self);
        }, 1000);
        document.querySelector('#comecar').onclick = function () {
            self.comecarPomodoro.apply(self);
        };
        document.querySelector('#intervalo').onclick = function () {
            self.comecarIntervalo.apply(self);
        };

        document.querySelector('#parar').onclick = function () {
            self.pararPomodoro.apply(self);
        };
    },
    limparVariaveis(mins, segs, comecar) {
        this.minutos = mins;
        this.segundos = segs;
        this.comecar = comecar;
        this.animaIncremento = 200 / (this.minutos * 60);
        this.animaAltura = 0;
    },
    comecarPomodoro() {
        this.limparVariaveis(25, 0, true);
    },
    comecarIntervalo() {
        this.limparVariaveis(5, 0, true);
    },

    pararPomodoro() {
        this.limparVariaveis(25, 0, false);
        this.atualizar();
    },

    verificarNumero(numero) {
        if (numero < 10) {
            return "0" + parseInt(numero, 10);
        }
        return numero;
    },

    atualizar() {

        this.minutosDom.innerHTML = this.verificarNumero(this.minutos);
        this.segundosDom.innerHTML = this.verificarNumero(this.segundos);
        this.animaAltura = this.animaAltura + this.animaIncremento;
        this.animaDom.style.height = this.animaAltura + 'px';
    },

    intervalCallback() {
        
        if (!this.comecar) return false;
        if (this.segundos == 0) {
            if (this.minutos == 0) {
                this.tempoCompleto();
                return;
            }
            this.segundos = 59;
            this.minutos--;
        } else {
            this.segundos--;
        }
        this.atualizar();
    },
    tempoCompleto() {
        this.comecar = false;
        this.animaAltura = 0;
        //acrescentar som 
        this.audio();
    },

    audio(){
           const audio = document.querySelector('audio');
           audio.currentTime=10.0;
           audio.play();
          
  
      }
};

window.onload = function () {
    pomodoro.iniciar();
};
