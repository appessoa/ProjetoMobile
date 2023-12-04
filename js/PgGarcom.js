document.addEventListener("DOMContentLoaded", function () {
  // Função para validar o número da mesa
  function validarNumeroMesa(numeroMesa) {
    // Verifica se o número da mesa é válido (1, 2, 3, 4, 5 ou 01, 02, 03, 04, 05)
    var numerosValidos = ["0", "1", "2", "3", "4", "5", "01", "02", "03", "04", "05"];
    return numerosValidos.includes(numeroMesa);
  }

  // Função para gerar o código do pedido
  function gerarCodigoPedido() {
    // Obtém o número da mesa digitado pelo usuário
    var numeroMesa = document.getElementById('numeroMesa').value;

    // Valida se o número da mesa está vazio
    if (numeroMesa === '') {
      // Se estiver vazio, limpa o campo de código do pedido e sai da função
      document.getElementById('codigoPedido').value = '';
      return;
    }

    // Valida o número da mesa
    if (!validarNumeroMesa(numeroMesa)) {
      alert("Ops... Parece que essa não é uma mesa sua. Favor digitar número referente a uma das suas mesas!");
      // Limpa o campo de número da mesa
      document.getElementById('numeroMesa').value = '';
      // Limpa o campo de código do pedido
      document.getElementById('codigoPedido').value = '';
      return;
    }

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

document.title = "Gastronimia Galo Dourado";

// script.js

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

  // Limpa as seleções dos checkboxes
  limparSelecoes();
}

// Função para limpar as seleções dos checkboxes
function limparSelecoes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
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
  
// Popup detalhes do pedido

function mostrarPopup(idMesa) {
  var mensagem = "";

  switch (idMesa) {
    case 'mesa1':
      mensagem = "Detalhes da Mesa 1:\nStatus: Pedido Pronto\nCódigo do Pedido: M1_20231203.2018\nGarçom: Alice Lira\n\nEntradas:\nR$25,00 Ceviche de Peixe\nR$12,00 Bruschetta\nPrato Principal:\nR$40,00 Moqueca de Peixe\nR$45,00 Salmão Grelhado\n\nSobremesas:\nR$10,00 Cheesecake\nR$15,00 Mousse de Chocolate\n\nBebidas:\nR$30,00 Vinho\nR$30,00 Vinho\n\nVALOR DA CONTA: R$207,00\nVALOR DESCONTO: R$ 20,70\nTOTAL DA CONTA: R$186,30";
      break;
    case 'mesa2':
      mensagem = "Detalhes da Mesa 2:\nStatus: > 30 min sem pedir\nCódigo do Pedido: M2_20231203.2050\nGarçom: Alice Lira\n\nEntradas:\nR$50,00 Tábua de queijos e torradas\n\nPrato Principal:\nR$60,00 Carne de Sol com mandioca\n\nSobremesas:\nR$12,00 Abacaxi Grelhado com Sorvete\n\nBebidas:\nR$20,00 Soda Italiana\nVALOR DA CONTA: R$142,00\nVALOR DESCONTO: R$ 14,20\nTOTAL DA CONTA: R$127,80";
      break;
    case 'mesa3':
      mensagem = "Detalhes da Mesa 3:\nStatus: Pedido Atrasado\nCódigo do Pedido: M03_20231203.2057\nGarçom: Alice Lira\n\nPrato Principal:\nR$35,00 Peixe Grelhado com Batatas e Legumes\n\nSobremesas:\nR$08,00 Pão de Mel\n\nBebidas:\nR$20,00 Soda Italiana\n\nVALOR DA CONTA: R$63,00\nVALOR DESCONTO: R$ 6,30\nTOTAL DA CONTA: R$56,70";
      break;
    case 'mesa4':
      mensagem = "Detalhes da Mesa 3:\nStatus: No aguardo da conta\nCódigo do Pedido: M04_20231203.2103\nGarçom: Alice Lira\n\nEntradas:\nR$18,00 Bolinho de Bacalhau \nR$20,00 Pastel de Camarão\n\nPrato Principal:\nR$35,00 Peixe Grelhado com Batatas e Legumes\nR$68,00 Nhoque de Banana da Terra com Carne Seca\n\nSobremesas:\nR$08,00 Pão de Mel\nR$10,00 Cheesecake\n\nBebidas:\nR$20,00 Soda Italiana\nR$18,00 Suco de Laranja \n\nVALOR DA CONTA: R$197,00 \nVALOR DESCONTO: R$ 19,70\nTOTAL DA CONTA: R$177,30";
      break;
    case 'mesa5':
      mensagem = "Detalhes da Mesa 5:\nStatus: Mesa Livre\nCódigo do Pedido: \nGarçom: Alice Lira";
      break;
    default:
      mensagem = "Mesa não encontrada.";
  }

  alert(mensagem);
}
