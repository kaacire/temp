const produtos = [
  {
    id: 1,
    nome: "Fakhar Lattafa Eau",
    preco: 249.99,
    imagem: "assets/Fakhar-Lattafa-Eau-De-Parfum-Masculino-100ml.webp",
    imagem2: "assets/CAIXA-Fakhar-Lattafa-Eau.webp",
    descricao: "Uma composição contemporânea que equilibra o frescor aromático e a densidade amadeirada. A abertura é esculpida com notas nítidas de maçã verde, gengibre picante e bergamota. No coração, fundem-se nuances limpas de lavanda, sálvia e gerânio. A fragrância gradualmente assenta em uma base rica, combinando a doçura da fava tonka com a rigidez do cedro e o calor do ambroxan."
  },

  {
    id: 2,
    nome: "Fakhar Lattafa Eau - Gold",
    preco: 329.99,
    imagem: "assets/Lattafa-Fakhar-Gold-Extrait-Eau-de-Parfum-masculino_.webp",
    imagem2: "assets/CAIXA-Fakhar-Gold-Lattafa-Eau.webp",
    descricao: "Uma extração concentrada que celebra a opulência das resinas e especiarias orientais. A fragrância abre com o frescor picante do gengibre combinado com grapefruit. No centro do desenvolvimento olfativo, revelam-se madeiras nobres de cedro e a textura aveludada do cashmeran, finalizando com uma base densa ancorada no âmbar, vetiver e fava tonka."
  },

  {
    id: 3,
    nome: "Club de Nuit",
    preco: 389.99,
    imagem: "assets/Club-de-Nuit-Intense-Man-Armaf-Perfume-Masculino.webp",
    imagem2: "assets/CAIXA-Club-de-Nuit.webp",
    descricao: "Construído sobre o contraste entre o frescor cítrico e a profundidade esfumaçada. A fragrância se inicia com uma seleção vibrante de limão siciliano, groselha preta, maçã e um toque de abacaxi. No coração, a arquitetura ganha corpo com o acorde rústico da madeira de bétula e a delicadeza do jasmim. A base sólida e de longa duração é estruturada com patchouli, almíscar e o calor mineral do âmbar-cinzento."
  },

  {
    id: 4,
    nome: "Lattafa Nebras",
    preco: 379.99,
    imagem: "assets/Perfume-árabe-feminino-Nebras-EDP-Lattafa_1.webp",
    imagem2: "assets/CAIXA-Lattafa-Nebras.webp",
    descricao: "Um perfume focado no aconchego e na sedução das notas gustativas. A abertura introduz frutas vermelhas suculentas e tangerina. A evolução central destaca o protagonismo do cacau puro e da baunilha cremosa entrelaçados com pétalas de rosa, finalizando com o calor duradouro da fava tonka, âmbar e almíscar."
  },

  {
    id: 5,
    nome: "Marj Ahmed Al Maghribi",
    preco: 559.99,
    imagem: "assets/Marj-Ahmed-Al-Maghribi-feminino_.webp",
    imagem2: "assets/CAIXA-Marj-Ahmed-Al-Maghribi.webp",
    descricao: "Um arranjo complexo que une a tradição da perfumaria árabe a toques florais ocidentais. Abre com uma rica mistura frutada de ameixa e laranja equilibrada por nuances de nozes. O coração pulsa com um buquê clássico de rosa, jasmim e lírio-do-vale, enquanto a base imponente é cimentada com a profundidade do Oud, patchouli, âmbar e sândalo."
  },

  {
    id: 6,
    nome: "Lattafa Yara Eau",
    preco: 239.99,
    imagem: "assets/Lattafa-Yara-Eau-de-Parfum-100Ml-feminino_.webp",
    imagem2: "assets/CAIXA-Lattafa-Yara-Eau-de-Parfum.webp",
    descricao: "Uma criação gourmand delicada, desenhada em torno de acordes cremosos e florais. A saída traz a leveza da orquídea e do heliotrópio combinados com um toque de tangerina. O núcleo se desenvolve em um acorde suave de frutas tropicais e notas doces, sustentado por uma base reconfortante de baunilha pura, sândalo e almíscar branco."
  },

  {
    id: 7,
    nome: "Lattafa Asad Edp",
    preco: 269.99,
    imagem: "assets/Lattafa-Asad-Edp-100ml-Perfume-masculino_.webp",
    imagem2: "assets/Lattafa-Asad-Edp-100ml-Perfume-masculino_.webp",
    descricao: "Formulado como um oriental especiado de alta intensidade. A pirâmide olfativa abre com a energia cortante da pimenta preta combinada com o calor seco do tabaco. O coração introduz uma assinatura exótica de café torrado e patchouli, enquanto a base é solidificada com a cremosidade da baunilha, âmbar e o magnetismo resinoso do benjoim.",
  },
  // =========================
  // BODDY SPLAHS
  // =========================

  {
      id: 8,
      nome: "Soul Ambar",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-ambar.webp",
      imagem2: "assets/body-splash-árabe-soul-ambar.webp",
      descricao: "Elaborado para trazer o aconchego oriental em uma roupagem leve. A fórmula une uma saída sutilmente fresca com um coração denso e resinoso de âmbar-cinzento e notas balsâmicas quentes, assentando sobre uma base de almíscar e madeiras claras que prolonga a sensação de pele confortavelmente perfumada."
  },

  {
      id: 9,
      nome: "Soul Arabian",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-arabian.webp",
      imagem2: "assets/body-splash-árabe-soul-arabian.webp",
      descricao: "Desenvolvido como um tributo à perfumaria clássica asiática. A estrutura equilibra notas de topo levemente picantes, como cardamomo e nuances de pimenta, que evoluem para um coração de especiarias frias e ervas aromáticas. O fundo é esculpido com extratos de madeiras nobres e cedro, mantendo o frescor vibrante na pele."
  },

  {
      id: 10,
      nome: "Soul Dubai",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-dubai.webp",
      imagem2: "assets/body-splash-árabe-soul-dubai.webp",
      descricao: "Projetado a partir de uma arquitetura oriental moderna e urbana. A fragrância se abre com toques cítricos e nuances frutadas suculentas, mergulhando logo em seguida em um coração encorpado de resinas adocicadas e patchouli. A base é sustentada por notas ambaradas profundas que deixam um rastro sofisticado e marcante."
  },

  {
      id: 11,
      nome: "Soul Sheik",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-sheik.webp",
      imagem2: "assets/body-splash-árabe-soul-sheik.webp",
      descricao: "Formulado para evocar a imponência associada à realeza árabe. Sua composição abre com o frescor limpo de notas herbais e sálvia, abrindo espaço para um desenvolvimento central de especiarias finas e um leve toque de couro macio. O fechamento olfativo apoia-se em uma base sólida de sândalo e musgo."
  },

  {
      id: 12,
      nome: "Soul Tariq Royale",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-tariq-royale.webp",
      imagem2: "assets/body-splash-árabe-soul-tariq-royale.webp",
      descricao: "Criado sob a inspiração dos elixires reais do Oriente Médio. A pirâmide olfativa inicia-se com um sopro refrescante de notas aromáticas, evoluindo para um coração intensamente especiado. Os ingredientes de base contam com o calor do tabaco suave, uma pitada de baunilha e o toque lenhoso de madeiras escuras, garantindo uma excelente durabilidade pós-banho."
  },

  {
      id: 13,
      nome: "Soul Zafran",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-zafran.webp",
      imagem2: "assets/body-splash-árabe-soul-zafran.webp",
      descricao: "Desenhado tendo como protagonista o ouro vermelho da perfumaria. A fragrância destaca o calor picante e levemente acourado do açafrão logo na saída. No coração, fundem-se acordes de especiarias escuras e pimenta preta, enquanto a base é firmada com a rigidez do vetiver e notas intensas de madeiras defumadas."
  },
//BODY FEMININO
  {
      id: 14,
      nome: "Soul Carro Novo",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-carro-novo.webp",
      imagem2: "assets/body-splash-árabe-soul-carro-novo.webp",
      descricao: "Desenvolvido para capturar uma atmosfera de exclusividade e modernidade urbana. A composição abre com notas ozônicas puras e um toque cítrico sutil. O coração revela acordes aveludados de camurça e couro macio, finalizando com uma base de madeiras brancas e almíscar que garante um aspecto polido, limpo e de excelente fixação."
  },

  {
      id: 15,
      nome: "Soul soconout",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-soconout.webp",
      imagem2: "assets/body-splash-árabe-soul-soconout.webp",
      descricao: "Criado para exaltar a riqueza da fava de baunilha e das texturas tropicais. A saída apresenta o frescor sutil da água de coco e nuances de leite de coco. No coração, destacam-se notas florais brancas discretas e a polpa do coco maduro, assentando sobre uma base confortável e adocicada de almíscar e sândalo."
  },

  {
      id: 16,
      nome: "Soul Melancia",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-Melancia.webp",
      imagem2: "assets/body-splash-árabe-soul-Melancia.webp",
      descricao: "Formulado para entregar o ápice do frescor frutado e aquático. A pirâmide olfativa se abre com a doçura natural da melancia fresca e um leve toque de melão. O coração traz nuances de frutas vermelhas silvestres e casca de limão, enquanto a base é suavizada por um almíscar limpo que mantém a leveza da fragrância na pele por mais tempo."
  },

  {
      id: 17,
      nome: "Soul Arabe",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-arabe.webp",
      imagem2: "assets/body-splash-árabe-soul-arabe.webp",
      descricao: "Inspirado nos tradicionais elixires do Oriente Médio, combinando calor e profundidade. A fragrância inicia com uma saída picante de especiarias doces, como a canela e uma pitada de cardamomo. O centro se desenvolve com o toque resinoso de incensos suaves e nuances florais escuras, fechando com uma base rica de patchouli, âmbar e madeiras nobres."
  },

  {
      id: 18,
      nome: "Soul Luxo",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-luxo.webp",
      imagem2: "assets/body-splash-árabe-soul-luxo.webp",
      descricao: "Projetado a partir de um clássico buquê floral-frutado de alto padrão. A abertura conta com a vivacidade da bergamota italiana e da pera suculenta. O coração pulsa com flores nobres como a rosa damascena e o jasmim, evoluindo gradualmente para um fundo aveludado e quente de baunilha e notas amadeiradas suaves."
  },

  {
      id: 19,
      nome: "Pure Gold",
      preco: 44.99,
      imagem: "assets/body-splash-árabe-soul-pureGold.webp",
      imagem2: "assets/body-splash-árabe-soul-pureGold.webp",
      descricao: "Estruturado para refletir a riqueza e o calor do metal precioso através das notas olfativas. A composição abre com a energia do mandarim e um toque de néctar de pêssego. O coração é enriquecido por acordes de mel silvestre e flores douradas, finalizando com uma base marcante de fava tonka, âmbar-cinzento e patchouli."
  },


];

// =========================
// FUNÇÕES
// =========================

function formatarDinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function pegarCarrinho() {
  return JSON.parse(
    localStorage.getItem("carrinho")
  ) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );
}

function calcularFrete(regiao) {
  return 29.99;
}

// =========================
// PÁGINA PRODUTO
// =========================

const titulo =
  document.getElementById("titulo");

if (titulo) {

  const parametros =
    new URLSearchParams(window.location.search);

  const id =
    Number(parametros.get("id"));

  const produto =
    produtos.find(item => item.id === id);

  // render produto
  document.getElementById("descricao").innerText =
    produto.descricao;

  document.getElementById("titulo").innerText =
    produto.nome;

  document.getElementById("preco").innerText =
    formatarDinheiro(produto.preco);

  document.getElementById("imagemProduto").src =
    produto.imagem;

  // botão comprar

  const botaoComprar =
    document.getElementById("comprar");

  if (botaoComprar) {

    botaoComprar.addEventListener("click", () => {

      const quantidade =
        Number(
          document.getElementById("quantidade").value
        );

      const carrinho =
        pegarCarrinho();

      const itemExistente =
        carrinho.find(item => item.id === produto.id);

      if (itemExistente) {

        itemExistente.quantidade += quantidade;

      } else {

        carrinho.push({

          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          imagem: produto.imagem,
          quantidade: quantidade

        });

      }

      salvarCarrinho(carrinho);

      window.location.href =
        "carrinho.html";

    });

  }

  // botão adicionar carrinho header

  const botaoCarrinho =
    document.getElementById("adicionarCarrinho");

  if (botaoCarrinho) {

    botaoCarrinho.addEventListener("click", () => {

      const carrinho =
        pegarCarrinho();

      const itemExistente =
        carrinho.find(item => item.id === produto.id);

      if (itemExistente) {
        itemExistente.quantidade += 1;
      } else {

        carrinho.push({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          imagem: produto.imagem,
          quantidade: 1
        });
      }

      salvarCarrinho(carrinho);

      window.location.href =
        "carrinho.html";

    });

  }

// =========================


const relacionadosArea =
  document.getElementById("relacionados");

if (relacionadosArea) {

  const relacionados =
    produtos.filter(item => item.id !== produto.id);

  relacionados
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .forEach(item => {

      relacionadosArea.innerHTML += `

        <div class="produto">
          <img src="${item.imagem}">
          <h3>${item.nome}</h3>

          <p>
            ${formatarDinheiro(item.preco)}
          </p>
          <button onclick="window.location.href='produto.html?id=${item.id}'" class='VP-button'>
            Ver Produto
          </button>
        </div>
      `;

    });

}

}

// =========================

const areaCarrinho = document.getElementById("produtosCarrinho");

if (areaCarrinho) {

  function renderizarCarrinho() {

    const carrinho = pegarCarrinho();
    areaCarrinho.innerHTML = "";
    let subtotal = 0;

    if (carrinho.length <= 0) {

      areaCarrinho.innerHTML = `
        <div class="carrinho-vazio">
          <p>Seu carrinho está vazio.</p>
          <a class="btn-escuro" href="catalogo.html">Ver catálogo</a>
        </div>`;

    } else {

      carrinho.forEach(item => {

        const subtotalItem = item.preco * item.quantidade;
        subtotal += subtotalItem;

        areaCarrinho.innerHTML += `
          <article class="item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="item-info">
              <h3>${item.nome}</h3>
              <p class="item-preco">${formatarDinheiro(item.preco)} cada</p>
            </div>
            <div class="controle-quantidade">
              <button aria-label="Diminuir quantidade" onclick="diminuirQuantidade(${item.id})">−</button>
              <span>${item.quantidade}</span>
              <button aria-label="Aumentar quantidade" onclick="aumentarQuantidade(${item.id})">+</button>
            </div>
            <p class="item-subtotal">${formatarDinheiro(subtotalItem)}</p>
            <button class="remover-item" aria-label="Remover ${item.nome}" onclick="removerItem(${item.id})">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6"/></svg>
            </button>
          </article>
        `;

      });

    }

    // contagem de itens e botão de envio
    const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
    const contagem = document.getElementById("contagemItens");
    if (contagem) {
      contagem.innerText = totalItens > 0
        ? `(${totalItens} ${totalItens === 1 ? "item" : "itens"})`
        : "";
    }
    const botaoEnviar = document.getElementById("enviarPedido");
    if (botaoEnviar) botaoEnviar.disabled = carrinho.length === 0;

    // atualiza resumo
    const selectRegiao = document.getElementById("regiao");
    const selectParcelas = document.getElementById("parcelas");

    if (selectRegiao && selectParcelas) {
      atualizarResumo(subtotal, selectRegiao, selectParcelas);
    }

    return subtotal;

  }

  // expõe funções ao escopo global para os onclick inline

  window.removerItem = function(id) {

    let carrinho = pegarCarrinho();
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho(carrinho);
    renderizarCarrinho();

  };

  window.diminuirQuantidade = function(id) {

    let carrinho = pegarCarrinho();
    const item = carrinho.find(i => i.id === id);

    if (!item) return;

    if (item.quantidade > 1) {
      item.quantidade -= 1;
    } else {
      carrinho = carrinho.filter(i => i.id !== id); // remove se chegar a 0
    }

    salvarCarrinho(carrinho);
    renderizarCarrinho();

  };

  window.aumentarQuantidade = function(id) {

    let carrinho = pegarCarrinho();
    const item = carrinho.find(i => i.id === id);

    if (!item) return;

    item.quantidade += 1;
    salvarCarrinho(carrinho);
    renderizarCarrinho();

  };

  function atualizarResumo(subtotal, selectRegiao, selectParcelas) {

    const regiao = selectRegiao.value;
    const frete = calcularFrete(regiao);
    const total = subtotal + frete;
    const parcelas = Number(selectParcelas.value);
    const valorParcela = total / parcelas;

    document.getElementById("subtotal").innerText =
      formatarDinheiro(subtotal);

    document.getElementById("frete").innerText =
      formatarDinheiro(frete);

    document.getElementById("totalFinal").innerText =
      formatarDinheiro(total);

    document.getElementById("parcela").innerText =
      parcelas === 1
        ? "À vista"
        : `${parcelas}x de ${formatarDinheiro(valorParcela)}`;

  }

  let subtotalAtual = renderizarCarrinho();

  const selectRegiao = document.getElementById("regiao");
  const selectParcelas = document.getElementById("parcelas");

  if (selectRegiao) {
    selectRegiao.addEventListener("change", () => {
      subtotalAtual = renderizarCarrinho();
    });
  }

  if (selectParcelas) {
    selectParcelas.addEventListener("change", () => {
      subtotalAtual = renderizarCarrinho();
    });
  }

  // formulário — limpa carrinho após envio

  const formulario = document.getElementById("formulario");

  if (formulario) {

    formulario.addEventListener("submit", e => {

      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const whatsapp = document.getElementById("whatsapp").value;
      const endereco = document.getElementById("endereco").value;
      const regiao = selectRegiao.value;
      const parcelas = Number(selectParcelas.value);
      const frete = calcularFrete(regiao);
      const carrinho = pegarCarrinho();
      const total = subtotalAtual + frete;
      const valorParcela = total / parcelas;

      const listaProdutos = carrinho.map(item => `
- ${item.nome}
  Quantidade: ${item.quantidade}
  Preço: ${formatarDinheiro(item.preco)}
`).join("\n");

      const mensagem = `
NOVO PEDIDO

Nome: ${nome}
WhatsApp: ${whatsapp}
Endereço: ${endereco}
Região: ${regiao}
-------------------
PRODUTOS
${listaProdutos}
-------------------

Subtotal: ${formatarDinheiro(subtotalAtual)}
Frete: ${formatarDinheiro(frete)}
Total: ${formatarDinheiro(total)}
Pagamento: ${parcelas}x de ${formatarDinheiro(valorParcela)}
      `;

      const numeroLoja = "5574981488990";
      const link = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;

      window.open(link, "_blank");
      salvarCarrinho([]);
      renderizarCarrinho();
      formulario.reset();

    });

  }

}