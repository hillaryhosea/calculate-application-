class Calculator {
    constructor( previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // Call the clear function to start with a clear display
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';

    }

    delete(){
        this.currentOperand = this.currentOperand.slice(0, -1)
        
        }

    appendNumber(number) {
        // If there is a '.' in the number and the currentOperand already contains a '.', end the function by returning. I.E do not append a '.'
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Coverting the numbers to a string as JS will try to add the numbers together instead of appending ie putting onto the end
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        // This will compute the equation berofe appling another operation such as +, etc
        if (this.currentOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''

    }

    compute() {
        let computation;
        // parseFloat() converts the string into a number, until it reaches a value that is not a number
        const prev = parseFloat(this.previousOperand);   
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        // Switch statement for the calculation programming
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
                case '-':
                    computation = prev - current;
                    break;
                    case 'x':
                computation = prev * current;
                break;
                case '÷':
                computation = prev / current;
                break;
                default:
                    return;
                
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        // Displays text in the previous-operand div that is equal to currentOperand 
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null){
        // Displays a concatenation of previous operand and the operation symbol
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
    }
}


// Data attribute needs to be inside []
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
 
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Defining a new Calculator class. Function declaration?
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

// class Calculator {
//     constructor(currentOperandTextElement, previousOperandTextElement){
//         this.currentOperandTextElement = currentOperandTextElement
//         this.previousOperandTextElement = previousOperandTextElement
//         this.clear()
//     }

//     clear (){
//         this.currentOperandTextElement = ''
//         this.previousOperandTextElement = ''
//         this.operation = undefined
//     }

//     delete (){

//     }

//     compute (){

//     }

//     appendNumber (number){
//         this.currentOperand = number

//     }

//     updateDisplay(){
//         this.currentOperandTextElement.innerText = this.currentOperand

//     }

//     chooseOperation(){

//     }
// }

// const operationButtons = document.querySelectorAll('[data-operation]')
// const numberButtons = document.querySelectorAll('[data-number]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')

// const calculator = new Calculator (currentOperandTextElement, previousOperandTextElement)

// numberButtons.forEach (button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         this.updateDisplay()
//     })
// })
