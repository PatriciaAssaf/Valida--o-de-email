# Validação de E-mail - Trabalho Prático de Desenvolvimento em JavaScript

Este repositório contém o código-fonte do trabalho prático desenvolvido para a disciplina de **Desenvolvimento em JavaScript**. O objetivo deste projeto é criar um formulário simples para validação de e-mail, utilizando HTML, CSS e JavaScript, com ênfase em boas práticas de validação e feedback visual para o usuário.

## Descrição

O projeto consiste em um formulário de e-mail onde, ao submeter o campo, uma verificação é feita para garantir que o e-mail informado está no formato correto. O código utiliza expressões regulares (regex) para validar o e-mail e exibe mensagens de erro ou sucesso conforme o resultado da validação. Além disso, ícones dinâmicos são usados para fornecer feedback visual imediato ao usuário.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do formulário e layout básico da página.
- **CSS3**: Estilização do formulário, incluindo feedback visual e responsividade.
- **JavaScript**: Validação do campo de e-mail e manipulação do DOM para exibição de mensagens dinâmicas.

## Estrutura do Projeto

- `index.html`: Contém o formulário e a estrutura básica da página.
- `styles.css`: Arquivo de estilos que define a aparência do formulário e dos elementos dinâmicos.
- `script.js`: Arquivo JavaScript que contém a lógica de valida

## Funcionalidades

- **Validação de E-mail**: Verifica se o e-mail está no formato correto utilizando uma regex.
- **Feedback Visual**: Ícones (✔️/❌) e mensagens informam se o e-mail é válido ou não.
- **Responsividade**: O layout é ajustado para diferentes tamanhos de tela.

## Exemplo de Uso

1. O usuário insere um e-mail no campo do formulário.
2. Ao submeter, o JavaScript verifica se o e-mail está no formato correto.
3. Se o e-mail for válido, o campo é destacado em verde e o ícone de sucesso (✔️) é exibido.
4. Se o e-mail for inválido, o campo é destacado em vermelho, o ícone de erro (❌) é mostrado e uma mensagem de instrução aparece abaixo do campo.

