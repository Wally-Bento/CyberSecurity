function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Resultado não encontrado.</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";

   // para cada dados dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target ="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link}
                    target="_blank">Mais informações</a>
            </div>`;6
        }
    
        
    
    }
    if (!resultados) {
        resultados = "<p>Resultado não encontrado.</P>"
    }

section.innerHTML = resultados


}
// console.log(dados);



