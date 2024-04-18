document.addEventListener("click", (e) => {
    const listaDeClasse = Array.prototype.slice.call(e.target.classList)
    console.table(listaDeClasse)
    if (listaDeClasse.includes('acessarFilme')) {
        const url = e.target.dataset.url
        window.open(url,"_blank")
    }

    if(listaDeClasse.includes('excluirFilme')){
        const response = confirm("Deseja realmente excluir esse filme?")

        if(response){
            const id = e.target.dataset.id
            document.getElementById(id).remove();

        }
        
    }
})

let dados = {
    titulo: "",
    ano: 0,
    categoria: "",
    link: ""
}

function atualizarDados() {
   dados.titulo = document.getElementById('titulo').value
   dados.ano = document.getElementById('ano').value
   dados.categoria = document.getElementById('categoria').value
   dados.link = document.getElementById('url').value

   document.getElementById("debug").innerText = JSON.stringify(dados);
   console.log(dados)
}

const montaItem = () => {
    const id = new Date().getTime();
    const item = document.createElement("tr");
    item.id = id;
    item.innerHTML = `
      <td>${dados.titulo}</td>
      <td>${dados.categoria}</td>
      <td>${dados.ano}</td>
      <td class="text-right">
          <button class="btn btn-info acessarFilme" data-url="${dados.link}">Acessar</button>
          <button class="btn btn-danger excluirFilme" data-id="${id}">Excluir</button>
      </td>
    `;
    return item;
}

const cadastrar = () => {
    if(dados.titulo==""||
    dados.ano==0||
    dados.categoria==""||
    dados.link== ""){
        alert("preencha todos os campos")
    }else{
        const novoItem = montaItem();
    document.getElementById("lista-filmes").appendChild(novoItem);
    dados = {
        titulo: "",
        ano: 0,
        categoria: "",
        link: ""
    }
    document.getElementById('titulo').value = "";
    document.getElementById('ano').value = "";
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('url').value = "";
    }
    
}