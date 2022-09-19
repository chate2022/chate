const form = document.getElementById('form');
var email = document.getElementById('email')
var password = document.getElementById('password')
const btnLogin = document.getElementById("login");
const btnRegister = document.getElementById("register");
const sendMessage = document.getElementById('sendMessage')
const cText = document.getElementById('cText')
const chat = document.getElementById('chat')
const fileImg = document.getElementById("file");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");


function registerAction() {
  btnLogin.innerHTML = "Cadastrar Conta";
  hide(btnRegister);
  showInLine(access);
  hide(passwordReset);
}
function LoginAction() {
  btnLogin.innerHTML = "Acessar";
  showInLine(btnRegister);
  hide(access);
  show(passwordReset);
}

function show(element) {
  element.style.display = "block";
}
function showInLine(element) {
  element.style.display = "inline-block";
}
function hide(element) {
  element.style.display = "none";
}
// função para trocar a foto do usuário
