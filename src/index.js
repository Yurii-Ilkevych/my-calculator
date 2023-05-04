import CalculatorApp from "./calculatorApp"
import memoryDo from "./counters";
export {calculatorApp} ;

const calculatorApp = new CalculatorApp();

const refs = {
  boxFigure: document.querySelector('.box-figure'),
  show: document.querySelector('.show'),
  showTwo: document.querySelector(".show-two"),
  equal: document.querySelector('.equal'),
  dell: document.querySelector(".dell"),
  btn: document.querySelectorAll(".btn"),
  memoryInput: document.querySelector(".input-memory"),
};

refs.boxFigure.addEventListener('click', watchBtn);
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
return
  }else if (calculatorApp.memoryOperators.includes(fig)) {
    memoryDo(fig)
    
return
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







