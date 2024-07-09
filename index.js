function calculate(number1, number2, operation)  {

    let result;

    if (isNaN(number1) || isNaN(number2)) {
        alert('Veuillez entrer des nombres valides');
        return null;
    }

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                console.log('Division par zéro non permise');
                return null;
            }
            result = Math.round(number1 / number2);
            break;
        default:
            console.log('Opération inconnue');
            return null;
    }

    return result
}


module.exports = calculate;