const input = document.querySelector('input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (input.value.length <= input.getAttribute('data-length')) {
        input.classList.value = '';
        input.classList.add("valid");
    } else {
        input.classList.value = '';
        input.classList.add("invalid");
    }
}