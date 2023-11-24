function fazerLogin() {
    var userType = document.querySelector('input[name="userType"]:checked').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var erroLogin = document.getElementById('erroLogin');

    // Limpa mensagem de erro
    erroLogin.textContent = '';

    if (userType === 'garcom' && usuario === 'alira' && senha === 'alira') {
        // Redireciona para a página do garçom
        window.location.href = "file:///C:/Users/ppess/OneDrive/%C3%81rea%20de%20Trabalho/ProjetoMobile/html/tela_Gar%C3%A7om.html";
    } else if (userType === 'maitre' && usuario === 'apessoa' && senha === 'apessoa') {
        // Redireciona para a página do Maitre
        window.location.href = "file:///C:/Users/ppess/OneDrive/%C3%81rea%20de%20Trabalho/ProjetoMobile/html/tela_Ma%C3%AEtre.html";
    } else {
        // Exibe mensagem de erro
        erroLogin.textContent = 'Usuário ou senha incorretos.';
    }
}
