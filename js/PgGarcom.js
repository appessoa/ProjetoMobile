// codigo mesa.js

document.addEventListener("DOMContentLoaded", function () {
    // Função para gerar o código do pedido
    function gerarCodigoPedido() {
      // Obtém o número da mesa digitado pelo usuário
      var numeroMesa = document.getElementById('numeroMesa').value;
  
      // Gera um código de pedido combinando 'M' (para mesa), o número da mesa e a numeração da data e horário
      var dataHora = new Date();
      var ano = dataHora.getFullYear();
      var mes = ('0' + (dataHora.getMonth() + 1)).slice(-2);
      var dia = ('0' + dataHora.getDate()).slice(-2);
      var horas = ('0' + dataHora.getHours()).slice(-2);
      var minutos = ('0' + dataHora.getMinutes()).slice(-2);
  
      var numeracaoDataHora = ano + mes + dia + '.' + horas + minutos;
  
      var codigoPedido = 'M' + numeroMesa + '_' + numeracaoDataHora;
  
      // Atualiza o campo de código do pedido
      document.getElementById('codigoPedido').value = codigoPedido;
    }
  
    // Adiciona o evento de input ao campo de número da mesa para chamar a função quando o número da mesa é alterado
    document.getElementById('numeroMesa').addEventListener('input', gerarCodigoPedido);
  });
  


// button.js

document.addEventListener("DOMContentLoaded", function () {
    // Adicione o evento de clique ao botão para chamar a função enviarPedido()
    var botaoEnviar = document.getElementById('botaoEnviar');
    botaoEnviar.addEventListener('click', enviarPedido);
  });
  
  // Função para enviar o pedido
  function enviarPedido() {
    // Aqui você pode acessar o ID do botão usando this.id
    var buttonId = this.id;
  
    // Adicione a lógica para enviar o pedido aqui
  
    // Exibe um popup informando que o pedido foi enviado
    alert("Pedido enviado!");
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
  