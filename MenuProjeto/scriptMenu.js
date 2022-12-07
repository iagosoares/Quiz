// Variaveis
let Nome01 = document.querySelector(".nome")
let Senha01 = document.getElementById("senha")


// Eventos

document.addEventListener('keypress', function (e) {
    if(e.which === 13){
        if (Nome01.value === 'Nilton' && Senha01.value === '123') {
            window.location.href = "../Quiz/index.html"
        } else if(Nome01.value === '' || Senha01.value === '' || Senha01.value != '123'){
          alert("Opa, preencha os dados corretamente")
        }
    }

}, false);



// Funções
function validar() {

    if (Nome01.value === 'Nilton' && Senha01.value === '123') {
        window.location.href = "../Quiz/index.html"
    } else if (Nome01.value === '' || Senha01.value === '') {
        alert("Opa, preencha todo os campos")
    } else if (Nome01.value != 'Nilton' || Senha01.value != '123') {
        alert("Opa, os dados estão incorretos !")
    }
}



// for

let dados = [
    {
        usuario: 'Cledson',
        senha: 'dados'
    },

    {
        usuario: 'Dannyel',
        senha: 'dados1'
    },

    {
        usuario: 'Lucas',
        senha: 'dados2'
    }
]

let users = []
let password = []




dados.forEach(element => {

    console.log(element.usuario )
});

