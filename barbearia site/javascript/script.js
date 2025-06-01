document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-agendamento");
  const confirmacao = document.getElementById("confirmacao");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!nome || !servico || !data || !hora) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Exibe mensagem de confirmação
    confirmacao.style.display = "block";

    const mensagem = `Olá! Gostaria de agendar um horário na barbearia:%0A%0A🧔 Nome: ${nome}%0A💈 Serviço: ${servico}%0A🗓️ Data: ${data}%0A⏰ Hora: ${hora}`;
    const numeroBarbearia = "5581987589963"; // Substitua pelo número real

    const url = `https://wa.me/${numeroBarbearia}?text=${mensagem}`;
    setTimeout(() => {
      window.open(url, "_blank");
      confirmacao.style.display = "none";
      form.reset(); // limpa o formulário
    }, 1000); // Pequeno atraso para mostrar a mensagem
  });
});
