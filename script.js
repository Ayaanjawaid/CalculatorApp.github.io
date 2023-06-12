let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'x^2') {
            const value = eval(string);
            const squaredValue = Math.pow(value, 2);
            string = squaredValue.toString();
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'x^3') {
            const value = eval(string);
            const cubedValue = Math.pow(value, 3);
            string = cubedValue.toString();
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});