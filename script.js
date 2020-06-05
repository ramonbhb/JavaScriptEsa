function pegarDados() {
    let iduser = document.getElementById("iduser");
    let login = document.getElementById("login");
    let qtseguidores = document.getElementById("qtseguidores");
    let tabela = document.getElementById("tabelapessoas");

    //let user = prompt("Qual usuário você deseja pesquisar?");    
    //fetch('https://api.github.com/users/'+user)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        data => {
            //         let arrayOrdenado = data.sort({name});
           data.forEach( pessoa => {
               console.log(pessoa);
               let linha = tabela.insertRow(-1);
               let nome = linha.insertCell(0);
               let email = linha.insertCell(1);
               let telefone = linha.insertCell(2);
               let empresa = linha.insertCell(3);               
               nome.innerHTML = pessoa.name;
               email.innerHTML = pessoa.email;
               telefone.innerHTML = pessoa.phone;
               empresa.innerHTML = pessoa.company.name;     
           })
        }
    )
}