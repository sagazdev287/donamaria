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
        segunda: { abertura: 10, fechamento: 22 },
        terca: { abertura: 10, fechamento: 22 },
        quarta: { abertura: 10, fechamento: 22 },
        quinta: { abertura: 10, fechamento: 22 },
        sexta: { abertura: 10, fechamento: 22 },
        sabado: { abertura: 11, fechamento: 23 },
        domingo: { abertura: null, fechamento: null } // Fechado no domingo
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
