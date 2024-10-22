// Função para validar e-mail usando regex
function isValidEmail(email) {
    // Regex que verifica se o e-mail possui a estrutura correta
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // Retorna true se válido, false se inválido
}

// Função para exibir mensagens e ícones de feedback
function displayMessage(message, isValid) {
    const errorMessage = document.getElementById('error-message'); // Mensagem de erro/sucesso
    const emailInput = document.getElementById('email'); // Campo de entrada de e-mail
    const icon = document.getElementById('icon'); // Ícone dinâmico

    errorMessage.innerHTML = message; // Atualiza a mensagem exibida

    // Atualiza o estilo do campo e do ícone com base na validade do e-mail
    if (isValid) {
        emailInput.classList.add('valid');    // Estilo de sucesso
        emailInput.classList.remove('invalid'); 
        icon.textContent = '✔️';              // Ícone de sucesso
        icon.classList.add('valid');
        icon.classList.remove('invalid');

        errorMessage.style.color = 'green'; // Cor verde para mensagem válida

    } else {
        emailInput.classList.add('invalid');  // Estilo de erro
        emailInput.classList.remove('valid');
        icon.textContent = '❌';                // Ícone de erro
        icon.classList.add('invalid');
        icon.classList.remove('valid');

        errorMessage.style.color = 'red'; // Cor vermelha para mensagem inválida
    }
}

// Função que lida com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const emailInput = document.getElementById('email').value; // Obtém o valor do e-mail
    const isValid = isValidEmail(emailInput); // Valida o e-mail

    // Exibe a mensagem correspondente com base na validade
    if (isValid) {
        displayMessage("E-mail válido! 🎉", true);
    } else {
        displayMessage("E-mail inválido.<br>Exemplo: exemplo@dominio.com", false);
    }
}

// Adiciona um ouvinte de evento ao formulário para chamar a função de validação no envio
document.getElementById('emailForm').addEventListener('submit', handleFormSubmit);
