const buttons = document.querySelectorAll('.btn');
const displayContent = document.getElementById('display-content');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        switch (value) {
            case 'C':
                currentInput = '';
                break;
            case '←':
                currentInput = currentInput.slice(0, -1);
                break;
            case '=':
                try {
                    let result = eval(currentInput);
                    if (!Number.isInteger(result)) {
                        result = parseFloat(result.toFixed(4));
                    }
                    currentInput = result.toString();
                } catch {
                    currentInput = 'Error';
                }
                break;
            default:
                if (currentInput === 'Error') currentInput = '';
                currentInput += value;
        }
        displayContent.innerText = currentInput || '0';
    });
});
