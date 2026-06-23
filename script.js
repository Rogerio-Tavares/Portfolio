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

// Verfica a validação do e-mail.
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