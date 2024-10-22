// Função para validar e-mail usando regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Função para mostrar mensagens e ícones
function displayMessage(message, isValid) {
    const errorMessage = document.getElementById('error-message');
    const emailInput = document.getElementById('email');
    const icon = document.getElementById('icon');
    
    errorMessage.textContent = message;
    
    if (isValid) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        icon.textContent = '✔️'; // Ícone de sucesso
        icon.classList.add('valid');
        icon.classList.remove('invalid');
    } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        icon.textContent = '❌'; // Ícone de erro
        icon.classList.add('invalid');
        icon.classList.remove('valid');
    }
}

// Função que lida com o evento de envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();  // Evita o envio do formulário antes da validação
    
    const emailInput = document.getElementById('email').value;
    const isValid = isValidEmail(emailInput);
    
    if (isValid) {
        displayMessage("E-mail válido! 🎉", true);
    } else {
        displayMessage("E-mail inválido. Exemplo: exemplo@dominio.com", false);
    }
}

// Adiciona um ouvinte de evento ao formulário
document.getElementById('emailForm').addEventListener('submit', handleFormSubmit);
