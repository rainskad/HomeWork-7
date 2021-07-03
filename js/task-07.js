const input = document.querySelector('input');
const text = document.querySelector('#text');

input.addEventListener('input', changeSize);

function changeSize(event) {
    text.setAttribute("style",`font-size:${input.value}px;`);
}