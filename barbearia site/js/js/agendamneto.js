 document.getElementById("form-agendamento").addEventListener("submit", function(e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;

      if (!nome || !data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const mensagem = `Olá! Gostaria de agendar um horário na barbearia:%0A%0A🧔 Nome: ${nome}%0A🗓þ Data: ${data}%0A⏰ Hora: ${hora}`;
      const numeroBarbearia = "5581987589963"; // Substitua pelo WhatsApp da barbearia

      const url = `https://wa.me/${numeroBarbearia}?text=${mensagem}`;
      window.open(url, "_blank");
    });