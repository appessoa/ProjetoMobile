// Função para adicionar promoção
function adicionarPromocao() {
    // Obter valores dos campos
    var nomePromocao = document.getElementById('nomePromocao').value;
    var dataInicial = document.getElementById('dataInicial').value;
    var dataFinal = document.getElementById('dataFinal').value;
    var porcentagemDesconto = document.getElementById('porcentagemDesconto').value;
    var descricaoPromocao = document.getElementById('descricaoPromocao').value;
  
    // Verificar se todos os campos estão preenchidos
    if (nomePromocao && dataInicial && dataFinal && porcentagemDesconto && descricaoPromocao) {
      // Criar elemento para exibir promoção
      var novaPromocao = document.createElement('div');
      novaPromocao.innerHTML = '<strong>Nome:</strong> ' + nomePromocao + '<br>' +
                               '<strong>Data Inicial:</strong> ' + dataInicial + '<br>' +
                               '<strong>Data Final:</strong> ' + dataFinal + '<br>' +
                               '<strong>Desconto:</strong> ' + porcentagemDesconto + '%<br>' +
                               '<strong>Descrição:</strong> ' + descricaoPromocao + '<br>' +
                               '<button class="button is-danger" onclick="excluirPromocao(this)">Excluir</button>';
  
      // Adicionar à lista de promoções existentes
      document.getElementById('listaPromocoes').appendChild(novaPromocao);
  
      // Limpar campos do formulário
      document.getElementById('nomePromocao').value = '';
      document.getElementById('dataInicial').value = '';
      document.getElementById('dataFinal').value = '';
      document.getElementById('porcentagemDesconto').value = '';
      document.getElementById('descricaoPromocao').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  // Função para excluir promoção
  function excluirPromocao(elemento) {
    // Remover o elemento pai (div da promoção)
    elemento.parentNode.remove();
  }
  



// Lista de todas as mesas com garçom
var mesas = [
    { numero: 1, status: 'Pedido Pronto', garcom: 'Alice Lira' },
    { numero: 2, status: '> 30 min sem pedir', garcom: 'Alice Lira' },
    { numero: 3, status: 'Pedido atrasado', garcom: 'Alice Lira' },
    { numero: 4, status: 'No aguardo da conta', garcom: 'Alice Lira' },
    { numero: 5, status: 'Mesa livre', garcom: 'Alice Lira' },
    { numero: 6, status: 'No aguardo da conta', garcom: 'Carlos Augusto' },
    { numero: 7, status: 'No aguardo da conta', garcom: 'Carlos Augusto' },
    { numero: 8, status: '> 30 min sem pedir', garcom: 'Carlos Augusto' },
    { numero: 9, status: 'Mesa livre', garcom: 'Carlos Augusto' },
    { numero: 10, status: 'Pedido Pronto', garcom: 'Carlos Augusto' },
    { numero: 11, status: 'Pedido Pronto', garcom: 'Ighor Gomes' },
    { numero: 12, status: 'Pedido Pronto', garcom: 'Ighor Gomes' },
    { numero: 13, status: 'Mesa livre', garcom: 'Ighor Gomes' },
    { numero: 14, status: 'Mesa livre', garcom: 'Ighor Gomes' },
    { numero: 15, status: 'Mesa livre', garcom: 'Ighor Gomes' },
    { numero: 16, status: 'Pedido atrasado', garcom: 'Pedro Quintas' },
    { numero: 17, status: '> 30 min sem pedir', garcom: 'Pedro Quintas' },
    { numero: 18, status: 'Pedido atrasado', garcom: 'Pedro Quintas' },
    { numero: 19, status: 'Mesa Livre', garcom: 'Pedro Quintas' },
    { numero: 20, status: 'Pedido Pronto', garcom: 'Pedro Quintas' },
    { numero: 21, status: 'Pedido Pronto', garcom: 'Maximino Coelho' },
    { numero: 22, status: 'Mesa livre', garcom: 'Maximino Coelho' },
    { numero: 23, status: 'Pedido atrasado', garcom: 'Maximino Coelho' },
    { numero: 24, status: '> 30 min sem pedir', garcom: 'Maximino Coelho' },
    { numero: 25, status: 'No aguardo da conta', garcom: 'Maximino Coelho' },
  ];
  
  // Função para renderizar a lista de mesas
  function renderizarMesas(listaMesas) {
    var container = document.querySelector('.columns.is-multiline');
    container.innerHTML = ''; // Limpa o conteúdo atual
  
    listaMesas.forEach(function (mesa) {
      var divMesa = document.createElement('div');
      divMesa.className = 'column is-half-tablet is-one-quarter-desktop';
      divMesa.innerHTML = `
        <div class="box mesa" id="mesa${mesa.numero}">
          <h3 class="subtitle">Mesa ${mesa.numero}</h3>
          <p>Status: ${mesa.status}</p>
          <p>Garçom: ${mesa.garcom}</p>
        </div>
      `;
      container.appendChild(divMesa);
    });
  }
  
  // Função para filtrar por garçom
  function filtrarPorGarcom() {
    var filtro = document.getElementById('filtroGarcom').value;
  
    // Aplicar a lógica de filtragem
    var mesasFiltradas = mesas;
    if (filtro !== '') {
      mesasFiltradas = mesas.filter(function (mesa) {
        return mesa.garcom === filtro;
      });
    }
  
    // Renderizar as mesas na posição superior
    renderizarMesas(mesasFiltradas);
  
    // Ajustar a posição da div container
    var container = document.getElementById('relacaoMesasContainer');
    container.scrollTop = 0; // Volta ao topo

    mudarCoresPorStatus();
  }
  
  // Inicializar a lista de mesas
  renderizarMesas(mesas);
  

  

// Função para filtrar por status
function filtrarPorStatus() {
    var filtroStatus = document.getElementById('filtroStatus').value.toLowerCase();

    // Aplicar a lógica de filtragem
    var mesasFiltradas = mesas;

    if (filtroStatus !== '') {
        mesasFiltradas = mesasFiltradas.filter(function (mesa) {
            // Convertendo ambas as strings para minúsculas para garantir comparação sem distinção entre maiúsculas e minúsculas
            return mesa.status.toLowerCase().includes(filtroStatus);
        });
    }

    // Renderizar as mesas na posição superior
    renderizarMesas(mesasFiltradas);

    // Chamar a função para mudar as cores por status após filtrar
    mudarCoresPorStatus();
}


// Função para limpar todos os filtros
function limparFiltros() {
    // Limpar o filtro por garçom
    document.getElementById('filtroGarcom').value = '';
  
    // Limpar o filtro por status
    document.getElementById('filtroStatus').value = '';
  
    // Renderizar todas as mesas
    renderizarMesas(mesas);
  
    // Mudar as cores por status
    mudarCoresPorStatus();
  }
  


// Cores.js
// Função para mudar as cores por status
function mudarCoresPorStatus() {
    // Obtem todas as caixas de mesa
    var mesas = document.querySelectorAll('.mesa');
  
    // Itera sobre cada mesa e atribui classes com base no status
    mesas.forEach(function (mesa) {
      var status = mesa.querySelector('p').textContent;
      var mesaId = mesa.id;
  
      mesa.classList.remove('pedido-pronto', 'pedido-atrasado', 'sem-pedir', 'aguardando-conta', 'mesa-livre');
  
      if (status.includes('Pedido Pronto')) {
        mesa.classList.add('pedido-pronto');
      } else if (status.includes('Pedido atrasado')) {
        mesa.classList.add('pedido-atrasado');
      } else if (status.includes('> 30 min sem pedir')) {
        mesa.classList.add('sem-pedir');
      } else if (status.includes('No aguardo da conta')) {
        mesa.classList.add('aguardando-conta');
      } else if (status.includes('Mesa livre')) {
        mesa.classList.add('mesa-livre');
      }
    });
  }
  
  // Chama a função ao carregar a página
  document.addEventListener('DOMContentLoaded', mudarCoresPorStatus);
  