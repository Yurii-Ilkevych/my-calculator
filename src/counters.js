import { calculatorApp } from "./index";

const refs = {
    showTwo: document.querySelector(".show-two"),
    equal: document.querySelector('.equal'),
    memoryInput: document.querySelector(".input-memory"),
  };

refs.equal.addEventListener('click', doCount);
//+++++++++++ do counter +++++++++++++++++++++++++

function doCount() {
    if (
        calculatorApp.firstFigures.length === 0 ||
      calculatorApp.operator === ""
    ) {
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
    }else if(calculatorApp.operator === '÷' && calculatorApp.otheOperator === "%"){
        refs.show.textContent = "рахуй щось адекватне    !"
    } }

//+++++++++++++++++ memory counter ++++++++++++++++++

export default function memoryDo(fig){
if(fig === "m+" && calculatorApp.firstFigures.length !== 0){
    memoryPlus(fig)
}else if(fig === "m-" && calculatorApp.memory.length !== 0 && calculatorApp.firstFigures.length !== 0 && calculatorApp.secondFigures.length === 0){
    memoryPlus(fig)
}else if(fig === "mrc" && calculatorApp.memory.length !== 0 && calculatorApp.firstFigures.length !== 0 && calculatorApp.secondFigures.length === 0){
    calculatorApp.firstFigures.splice(0, calculatorApp.firstFigures.length, calculatorApp.memory)
    calculatorApp.appText()
}
}

function memoryPlus(fig){
if(calculatorApp.memory.length === 0 && calculatorApp.secondFigures.length === 0){
    calculatorApp.memory.push(calculatorApp.firstFigures)
    refs.showTwo.textContent = calculatorApp.value.join("");
    refs.memoryInput.classList.remove("is-hidden")
    return
}else if (calculatorApp.memory.length !== 0){
    memoryCount(fig)
    
}
}

function memoryCount(fig){
    if(fig === "m+"){
        calculatorApp.memory.splice(0, calculatorApp.memory.length, Number(refs.showTwo.textContent) + Number(calculatorApp.firstFigures))
        refs.showTwo.textContent = calculatorApp.memory;
    }else if (fig === "m-"){
        calculatorApp.memory.splice(0, calculatorApp.memory.length, Number(refs.showTwo.textContent) - Number(calculatorApp.firstFigures))
        refs.showTwo.textContent = calculatorApp.memory;
    }

}


