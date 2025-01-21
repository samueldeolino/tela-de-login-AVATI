const inputs = document.querySelectorAll('input');
const inputMessage = document.querySelectorAll('input[required]');
const LoginConfirmed = document.querySelector('button');
const loginForm = document.querySelector('.section-form');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
    if (!input.checkValidity()) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
    });

    input.addEventListener('input', () => {
    input.classList.remove('invalid');
    });
});

inputMessage.forEach(input => {
    input.addEventListener('invalid', () =>{
        input.setCustomValidity('Preencha esse campo!')
    });

    input.addEventListener('input', () => {
        input.setCustomValidity('');
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (loginForm.checkValidity()) {
        alert('Login realizado com sucesso!');
        loginForm.reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});