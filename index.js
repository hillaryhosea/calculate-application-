class calculator {
    constructor (previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement 
      this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete () {

    }
    appendNumber(number) {  
        if ( number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString ()
    }
    chooseOperation (operation) {
        if ( this.currentOperand === '') return
        if ( this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.previousOperand
        this.currentOperand = ''
    }
    compute (){

    }
    updateDisplay (){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearAllButton = document.querySelector('[data-clear-all]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new calculator ( previousOperandTextElement, currentOperandTextElement) 

numberButtons.forEach ( button => {
    button.addEventListener ('click', () => {
        calculator.appendNumber (button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach ( button => {
    button.addEventListener ('click', () => {
        calculator.chooseNumber (button.innerText)
        calculator.updateDisplay()
    })
})