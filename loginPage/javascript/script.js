let dados = [

    { nome: "teste", senha: "teste" },
    { nome: "Dannyel", senha: "dados1" },
    { nome: "Lucas", senha: "dados2" }

]

var login = document.getElementById("login");
var senha = document.getElementById("senha")


function validar() {

    let login = document.getElementById('login')
    let senha = document.getElementById('senha')
    console.log(Nome01)

    let result = dados.find((i) => (i.nome == login.value && i.senha == senha.value));
    console.log(result)
    if (result) {
        window.location.href = '../pageMain/pageMain.html';
    } else {
        alert("Dados incorretos")
    }
}

