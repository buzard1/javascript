// Seleciona o primeiro formulário da página
var formEl = document.getElementsByTagName('form')[0];

// Captura o evento de submit do formulário
formEl.addEventListener('submit', function(evento) {
    let nome = formEl.elements["nome_completo"].value.trim();
    let telefone = formEl.elements["telefone"].value.trim();
    let email = formEl.elements["email"].value.trim();
    let cpf = formEl.elements["cpf_cnpj"].value.trim();
    let endereco = formEl.elements["endereco"].value.trim();

    // Verifica se algum campo está vazio
    if (nome === "" || telefone === "" || email === "" || cpf === "" || endereco === "") {
        alert("Todos os campos devem ser preenchidos.");
        evento.preventDefault(); // impede o envio
        return;
    }

    // Validação simples de email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        evento.preventDefault();
        return;
    }

    // Validação simples de telefone (mínimo 8 dígitos)
    if (telefone.length < 8) {
        alert("Digite um telefone válido com no mínimo 8 dígitos.");
        evento.preventDefault();
        return;
    }

    // Validação de CPF ou CNPJ (11 ou 14 dígitos)
    if (cpf.length !== 11 && cpf.length !== 14) {
        alert("Digite um CPF (11 dígitos) ou CNPJ (14 dígitos) válido.");
        evento.preventDefault();
        return;
    }

    // Tudo validado
    alert("Formulário validado com sucesso!");
});
