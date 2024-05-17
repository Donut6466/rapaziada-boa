let mybutton = document.getElementById("btop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btop.style.display = "block";
    } else {
      btop.style.display = "none";
    }
}
  
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function fazerLogin() {
//     let emailInserido = document.getElementById('email').value;
//     let senhaInserida = document.getElementById('password').value;
  
//     const credenciais = {
//       email: emailInserido,
//       password: senhaInserida
//     };
  
//     fetch('https://reqres.in/api/login', {
//       method: 'POST',
//       body: JSON.stringify(credenciais),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }).then((response) => response.json())
//     .then((json) => {
//       let boasVindas = document.getElementById('boas-vindas');
  
//       if(json.token) {
//         boasVindas.innerText = 'Bem-vindo ' + emailInserido;
//         boasVindas.style = "background-color: green; color: white";
//       } else {
//         boasVindas.innerText = 'Email ou senha incorreto';
//         boasVindas.style = "background-color: red; color: white";
//       }
//     }); 

// } 
   
//    function registrar() {
//     let emailInserido = document.getElementById('email').value;
//     let senhaInserida = document.getElementById('password').value;
  
//     const credenciaisTwo = {
//       email: emailInserido,
//       password: senhaInserida
//     };
  
//     fetch('https://reqres.in/api/register', {
//       method: 'POST',
//       body: JSON.stringify(credenciaisTwo),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }).then((response) => response.json())
//     .then((json) => {
//       let boasVindas = document.getElementById('registrar');
  
//       if(json.token) {
//         boasVindas.innerText = 'Você foi registrado!!' + emailInserido;
//         boasVindas.style = "background-color: green; color: white";
//       } else {
//         boasVindas.innerText = 'Email ou senha incorreto';
//         boasVindas.style = "background-color: red; color: white";
//       }
//     });
// } 

function pegarClientes(){
    let tituloCliente1 = $('#tituloclient1')
    let tituloCliente2 = $('#tituloclient2')
    let tituloCliente3 = $('#tituloclient3')
}

function pegarServicos(){

}

function pegarDepoimento(){

}

function pegarEquipe(){

}