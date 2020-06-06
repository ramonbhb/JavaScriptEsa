let noticias = [
    {
        id: 1,
        foto: 'https://avaliacaopresidente.jpg',
        subtitulo: "Pesquisa de opinião",
        titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
        descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
        tema: "Politica",
        data_hora: "2020-05-28 18:00"
    },
    {
        id: 2,
        foto: 'https://avaliacaopresidente.jpg',
        subtitulo: "Pesquisa de opinião",
        titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
        descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
        tema: "Politica",
        data_hora: "2020-05-28 18:00"
    }
];

let noticia = {
    id: 1,
    foto: 'https://avaliacaopresidente.jpg',
    subtitulo: "Pesquisa de opinião",
    titulo: "Bolsonaro é reprovado por 43% e aprovado por 33%, diz Datafolha",
    descricao: "22% dos entrevistados consideram o governo regular. Em abril, reprovação era de 38%.",
    tema: "Politica",
    data_hora: "2020-05-28 18:00"
}
// 1)
let receita = {
    titulo: "Bolo de banana",
    porcoes: "2",
    ingredientes: ['canela','açucar','farinha','banana']
}

console.log(receita.titulo);
console.log(receita.porcoes);
console.log(receita.ingredientes);

receita.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
})

//2)

let livros = [
    {
        titulo: "Senhor dos anéis",
        autor: "Stephen King",
        livroLido: false
    },    
    {   
        titulo: "O senhor da guerra",
        autor: "Não sei",
        livroLido: false,
    },
    {
        titulo: "Páginas heróicas imortais",
        autor: "Itair Machado",
        livroLido: false,
    },
    {
        titulo: "Quarto Livro",
        autor: "Não lembro",
        livroLido: true,
    }
];

livros.forEach( livro => {
    if ( livro.livroLido ) 
        console.log("Você já leu este livro");     
    else 
        console.log("Você não leu este livro");
    console.log(livro.titulo);
    console.log(livro.autor);
})