const answerContainer = document.querySelector('.answer')
const buttons = document.querySelectorAll('.calc-btn')
let expression = ''
answerContainer.textContent = '0'
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const choice = button.dataset.choice

        switch (choice) {
            case 'AC':
                expression = ''
                answerContainer.textContent = '0'
                break
            case 'CLEAR':
                if(answerContainer.textContent === 'NaN' || answerContainer.textContent == 'Error'){
                    expression = ''
                }else{
                    expression = expression.slice(0, -1)
                }
                if(expression == ''){
                    answerContainer.textContent = '0'
                }else{
                    answerContainer.textContent = expression
                }
                break
            case '=':
                try{
                    var result = eval(expression)
                    if(typeof result === 'number' && !Number.isInteger(result)){
                        result = result.toFixed(5)
                    }
                    expression = String(result)
                    answerContainer.textContent = expression
                }catch(e) {
                    answerContainer.textContent = 'Error'
                    expression = ''
                }
                break
            default:
                answerContainer.textContent = ''
                const lastChar = expression.slice(-1)
                const operators = ['+', '-', '*', '/']
                if(operators.includes(choice) && operators.includes(lastChar) && choice != lastChar){
                    expression = expression.slice(0, -1) + choice
                }else{
                    expression += choice
                }
                answerContainer.textContent = expression
        }
    })
})