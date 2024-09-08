function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na página.
    // Itera sobre os dados e cria elementos HTML para cada item.
  
    // Seleciona a seção onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Digite algo para buscar.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    console.log(campoPesquisa)
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    // Essa string será preenchida com os elementos HTML gerados no loop.
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada elemento do array de dados
    // Para cada elemento (dado), cria um novo elemento HTML e o adiciona à string 'resultados'.
    for (let dado of dados) {
      nome = dado.nome.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada item, incluindo imagem, título, descrição e link
      resultados += `
        <div class='item-resultado'>
          <img class="foto" src=${dado.foto}>
          <h2>
            <a href="#" target="_blank" rel="noopener noreferrer">${dado.nome}</a>
          </h2>
          <p class='descricao-meta'>
            ${dado.descricao}
          </p>
          <a class="saiba-mais" href=${dado.link} target='_blank' >Saiba Mais</a>
        </div>
      `;
        }
  
    }
    
    if (!resultados){
      resultados = "<p>Nenhum resultado encontrado.</p>"

    }
  
    // Atribui o HTML gerado para o conteúdo da seção
    // Substitui todo o conteúdo da seção pelo HTML gerado.
    section.innerHTML = resultados;
  }

function personagens(){
  const section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  for (let dado of dados) {
    tipo = dado.tipo.toLowerCase();
      if(tipo == "personagem"){
        console.log("funcionou")
    // Constrói o HTML para cada item, incluindo imagem, título, descrição e link
    resultados += `
      <div class='item-resultado'>
        <img class="foto" src=${dado.foto}>
        <h2>
          <a href="#" target="_blank" rel="noopener noreferrer">${dado.nome}</a>
        </h2>
        <p class='descricao-meta'>
          ${dado.descricao}
        </p>
        <a class="saiba-mais" href=${dado.link} target='_blank' >Saiba Mais</a>
      </div>
    `;
      }
      else{
        console.log("não");
        return
      }
      section.innerHTML = resultados;

  }

}
function itens(){
  const section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  for (let dado of dados) {
    tipo = dado.tipo.toLowerCase();
      if(tipo == "item"){
        console.log("funcionou")
    // Constrói o HTML para cada item, incluindo imagem, título, descrição e link
    resultados += `
      <div class='item-resultado'>
        <img class="foto" src=${dado.foto}>
        <h2>
          <a href="#" target="_blank" rel="noopener noreferrer">${dado.nome}</a>
        </h2>
        <p class='descricao-meta'>
          ${dado.descricao}
        </p>
        <a class="saiba-mais" href=${dado.link} target='_blank' >Saiba Mais</a>
      </div>
    `;
      }
      else{
        console.log("não");
        
      }
      section.innerHTML = resultados;

  }

}

function planetas(){
  const section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  for (let dado of dados) {
    tipo = dado.tipo.toLowerCase();
      if(tipo == "planeta"){
        console.log("funcionou")
    // Constrói o HTML para cada item, incluindo imagem, título, descrição e link
    resultados += `
      <div class='item-resultado'>
        <img class="foto" src=${dado.foto}>
        <h2>
          <a href="#" target="_blank" rel="noopener noreferrer">${dado.nome}</a>
        </h2>
        <p class='descricao-meta'>
          ${dado.descricao}
        </p>
        <a class="saiba-mais" href=${dado.link} target='_blank' >Saiba Mais</a>
      </div>
    `;
      }
      else{
        console.log("não");
        
      }
      section.innerHTML = resultados;

  }

}