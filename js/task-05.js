const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);



function onInputChange(event) {
    if (refs.nameLabel.textContent = event.currentTarget.value) {
        return refs.nameLabel.textContent
    } else {
       return refs.nameLabel.textContent = 'незнакомец';
    };
};