// Botão para alternar tema dark/light.
const botaoTema =
document.getElementById("tema");

botaoTema.addEventListener(
"click",
() => {

document.body.classList.toggle("light");

});

// Referencia o formulário e a div de resposta.
const form =
document.getElementById("formContato");

const resposta =
document.getElementById("resposta");

// Adiciona um evento de envio e impede o reload da página.
form.addEventListener(
"submit",
function(event){

event.preventDefault();

// Lê os valores dos campos do formulário.
const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const mensagem =
document.getElementById("mensagem").value;

// Verifica se há campos vazios.
if(
nome === "" ||
email === "" ||
mensagem === ""
){

resposta.textContent =
"Preencha todos os campos.";

return;

}

// Acusa invalidade do e-mail.
const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email)){

resposta.textContent =
"E-mail inválido.";

return;

}

// Sucesso no envio dos dados.
resposta.textContent =
"Mensagem enviada com sucesso!";

form.reset();

});

// Faz a página recarregar ao clicar no título do header.
document.addEventListener('DOMContentLoaded', function() {
    const nome = document.getElementById('nome');
    nome.addEventListener('click', function() {
        // Move o scroll para o topo imediatamente após recarregar.
        window.scrollTo(0, 0);
        // Redireciona para a própria URL, o que força um estado limpo no histórico.
        window.location.href = window.location.pathname;
    })})