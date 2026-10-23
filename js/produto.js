
const listaProdutos = document.getElementById("listaProdutos");

if (listaProdutos) {

  if (produtos.length <= 0) {

    listaProdutos.innerHTML = "<p>Nenhum produto encontrado.</p>";

  } else {

    produtos.forEach(item => {

      listaProdutos.innerHTML += `
        <div class="produto">
          <img src="${item.imagem2}" alt="${item.nome}">
          <h3>${item.nome}</h3>
          <p>${formatarDinheiro(item.preco)}</p>
          <button onclick="window.location.href='produto.html?id=${item.id}'" class='VP-button'>
            Ver Produto</button>
        </div>
      `;
    });
  }
}