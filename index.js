let output = document.getElementById('root');

const allclear = () => {
    output.value = '';
}

const display = (n) => {
    output.value += n;
}

const calculate = () => {
    output.value = eval(output.value);
}

const del = () => {
    output.value = output.value.slice(0, -1);
}