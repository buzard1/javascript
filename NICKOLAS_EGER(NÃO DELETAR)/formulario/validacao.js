document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formFuncionario");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nome = form["nome_funcionario"].value.trim();
      const email = form["quantidade"].value.trim();
      const cpf = form["valor"].value.trim();
      const telefone = form["fornecedor"].value.trim();
      const cargo = form["cargo"].value.trim();
  
      if (!nome || !email || !cpf || !telefone || !cargo) {
        alert("Todos os campos devem ser preenchidos.");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email inválido.");
        return;
      }
  
      const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
      if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Use o formato 000.000.000-00 ou apenas os números.");
        return;
      }
  
      const telefoneRegex = /^\d{10,11}$/;
      if (!telefoneRegex.test(telefone)) {
        alert("Telefone inválido. Deve conter 10 ou 11 dígitos.");
        return;
      }
  
      alert("Formulário enviado com sucesso!");
      form.submit();
    });
  });
  