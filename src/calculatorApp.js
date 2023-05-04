
const refs = {
    show: document.querySelector('.show'),
    memoryInput: document.querySelector(".input-memory"),
  };

export default class CalculatorApp {
    constructor() {
      this.memory = []
      this.figures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
      this.operators = ['-', '+', 'x', '÷', '=', '√'];
  
      this.otheOperators = ["%"]
      this.memoryOperators = ["m+", "m-", "mrc"]
  
      this.firstFigures = [];
      this.secondFigures = [];
      this.operator = '';
      this.otheOperator = "";
      this.value = []
     
    }
  
    allClear() {
      this.firstFigures = [];
      this.secondFigures = [];
      this.operator = '';
      this.otheOperator = "";
      refs.show.textContent = '';
      this.sum = "";
      this.value = []
      this.memory = []
      refs.memoryInput.classList.add("is-hidden")
    }
  
    cleanSecondFigure(){
      this.secondFigures = [];
    }
  
    appText() {
  if(String(this.firstFigures) === "NaN"){
      refs.show.textContent = "Введи щось нормальне !!!"
      return
  }
      refs.show.textContent = this.firstFigures;
      this.value.splice(0, this.value.length, this.firstFigures )
    }
  
    addText(value) {
      if(refs.show.textContent === "рахуй щось адекватне    !"){
          refs.show.textContent = "ти шо ідіот             !"
          return
      }
      else if(refs.show.textContent === "ти шо ідіот             !"){
          refs.show.textContent = "ти ідіот                  ?!"
          return
      }
      else if(refs.show.textContent.length >= 23){
          refs.show.textContent = "рахуй щось попроще    !"
          return
      }
      this.value.push(value) 
      this.upText()
    }
  
    upText(){
      refs.show.textContent = this.value.join("");
    }
  }