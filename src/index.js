const refs = {
  boxFigure: document.querySelector('.box-figure'),
  show: document.querySelector('.show'),
  equal: document.querySelector('.equal'),
  dell: document.querySelector(".dell"),
  btn: document.querySelectorAll(".btn"),
};



refs.boxFigure.addEventListener('click', watchBtn);

class CalculatorApp {
  constructor() {

    this.figures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    this.operators = ['-', '+', 'x', '÷', '=', '√'];

    this.otheOperators = ["%"]

    this.firstFigures = [];
    this.secondFigures = [];
    this.operator = '';
    this.otheOperator = "";
    this.value = []
  }

  doCount() {
    if (
        calculatorApp.firstFigures.length === 0 ||
        // calculatorApp.secondFigures.length === 0 ||
      calculatorApp.operator === ""
    ) {
        console.log("return")
            return;
    } else if (calculatorApp.operator === '+' && calculatorApp.otheOperator === "") {

 calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, Number(calculatorApp.firstFigures.join("")) + Number(calculatorApp.secondFigures.join("")));
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === '-' && calculatorApp.otheOperator === ""){

        calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, Number(calculatorApp.firstFigures.join("")) - Number(calculatorApp.secondFigures.join("")))
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === 'x' && calculatorApp.otheOperator === ""){

        calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, Number(calculatorApp.firstFigures.join("")) * Number(calculatorApp.secondFigures.join("")))
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === '√' && calculatorApp.otheOperator === ""){

        calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, Math. sqrt(Number(calculatorApp.firstFigures.join(""))))
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === '÷' && calculatorApp.otheOperator === ""){
        calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, Number(calculatorApp.firstFigures.join("")) / Number(calculatorApp.secondFigures.join("")))
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }







    else if (calculatorApp.operator === '+' && calculatorApp.otheOperator === "%") {
 calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, (Number(calculatorApp.firstFigures.join("")) + Number(calculatorApp.firstFigures.join("")) / 100 *  Number(calculatorApp.secondFigures.join(""))));
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === '-' && calculatorApp.otheOperator === "%"){
        calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, (Number(calculatorApp.firstFigures.join("")) - Number(calculatorApp.firstFigures.join("")) / 100 *  Number(calculatorApp.secondFigures.join(""))))
        calculatorApp.appText()
        calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === 'x' && calculatorApp.otheOperator === "%"){
        refs.show.textContent = "рахуй щось адекватне    !"
        // calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, (Number(calculatorApp.firstFigures.join("")) * Number(calculatorApp.firstFigures.join("")) / 100 *  Number(calculatorApp.secondFigures.join(""))))
        // calculatorApp.appText()
        // calculatorApp.cleanSecondFigure()
    }else if(calculatorApp.operator === '÷' && calculatorApp.otheOperator === "%"){
        refs.show.textContent = "рахуй щось адекватне    !"
        // calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, (Number(calculatorApp.firstFigures.join("")) / Number(calculatorApp.firstFigures.join("")) / 100 *  Number(calculatorApp.secondFigures.join(""))))
        // calculatorApp.appText()
        // calculatorApp.cleanSecondFigure()
    }



  }

  allClear() {
    this.firstFigures = [];
    this.secondFigures = [];
    this.operator = '';
    refs.show.textContent = '';
    this.sum = "";
    this.value = []
  }

  cleanSecondFigure(){
    this.secondFigures = [];
  }

  appText() {
if(String(calculatorApp.firstFigures) === "NaN"){
    refs.show.textContent = "Введи щось нормальне !!!"
    return
}
    refs.show.textContent = calculatorApp.firstFigures;
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
const calculatorApp = new CalculatorApp();

refs.equal.addEventListener('click', calculatorApp.doCount);
refs.dell.addEventListener("click", offOnCalculate)

function watchBtn(evt) {
  const fig = evt.target.dataset.figure;
  if (fig === undefined || fig === '=') {
    return;
  } else if (
    calculatorApp.figures.includes(fig) &&
    calculatorApp.operator === ''
  ) {
    calculatorApp.firstFigures.push(fig);
    calculatorApp.addText(fig)
    return
  } else if (
    calculatorApp.figures.includes(fig)
  ) {
    calculatorApp.secondFigures.push(fig);
    calculatorApp.addText(fig)
    return
  } else if (calculatorApp.operators.includes(fig)) {
    calculatorApp.operator = fig;
    calculatorApp.addText(fig)

  }else if(calculatorApp.otheOperators.includes(fig)){
calculatorApp.otheOperator = fig;
calculatorApp.addText(fig)
  } else if (fig === 'ac') {
    calculatorApp.allClear();
  }
}

function offOnCalculate(){
refs.btn.forEach(bt => {
if(bt.disabled){
    bt.disabled = false
    return
}
bt.disabled = true
    calculatorApp.allClear()
})}
