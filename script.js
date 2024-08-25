document.addEventListener('DOMContentLoaded', () => {
    const showMenuButton = document.getElementById('showMenu');
    const menuSection = document.getElementById('menu');

    showMenuButton.addEventListener('click', () => {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');

    // Horários de funcionamento
    const horarios = {
        segunda: { abertura: 18, fechamento: 23 },
        terca: { abertura: 18, fechamento: 23 },
        quarta: { abertura: 18, fechamento: 23 },
        quinta: { abertura: 18, fechamento: 23 },
        sexta: { abertura: 18, fechamento: 23 },
        sabado: { abertura: 18, fechamento: 23 },
        domingo: { abertura: 18, fechamento: 23} // Fechado no domingo
    };

    function verificarStatus() {
        const agora = new Date();
        const diaSemana = agora.getDay();
        const horaAtual = agora.getHours();

        // Mapeia dias da semana
        const dias = ['domingo', 'quarta', 'quinta', 'sexta', 'sabado'];
        const dia = dias[diaSemana];

        if (horarios[dia].abertura === null) {
            statusElement.textContent = 'Estamos fechados hoje.';
            statusElement.classList.remove('online');
            statusElement.classList.add('offline');
            return;
        }

        if (horaAtual >= horarios[dia].abertura && horaAtual < horarios[dia].fechamento) {
            statusElement.textContent = 'Estamos online!';
            statusElement.classList.remove('offline');
            statusElement.classList.add('online');
        } else {
            statusElement.textContent = 'Estamos offline no momento.';
            statusElement.classList.remove('online');
            statusElement.classList.add('offline');
        }
    }

    // Verifica o status ao carregar a página
    verificarStatus();

    // Atualiza o status a cada 10 minutos (600000 ms)
    setInterval(verificarStatus, 600000);
});
