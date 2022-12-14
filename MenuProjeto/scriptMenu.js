// Variaveis
let Nome01 = document.querySelector(".nome")
let Senha01 = document.getElementById("senha")


// Eventos

/*document.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        if (Nome01.value === 'Nilton' && Senha01.value === '123') {
            window.location.href = "../Quiz/index.html"
        } else if (Nome01.value === '' || Senha01.value === '' || Senha01.value != '123') {
            alert("Opa, preencha os dados corretamente")
        }
    }

}, false);*/



// Funções
function validar() {

    let Nome01 = document.querySelector(".nome")
    let Senha01 = document.getElementById("senha")

    let result = dados.find((i) => (i.nome == Nome01.value && i.senha == Senha01.value));
    console.log(result)
    if (result) {
        window.location.href = "../Quiz/index.html"
    } else {
        alert("Dados incorretos")
    }
}


// Arrays 
let dados = [

    { nome: "Cledson", senha: "dados" },
    { nome: "Dannyel", senha: "dados1" },
    { nome: "Lucas", senha: "dados2" }

]

























