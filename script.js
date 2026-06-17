// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidade: Modo Escuro (Alternância de Classes)
    const btnModo = document.getElementById('btn-modo');
    
    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 2. Funcionalidade: Lógica do Quiz
    const formQuiz = document.getElementById('form-quiz');
    const divResultado = document.getElementById('resultado');

    formQuiz.addEventListener('submit', (event) => {
        // Previne que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Captura o valor selecionado
        const resposta = document.querySelector('input[name="resposta"]:checked');

        if (!resposta) {
            divResultado.textContent = "Por favor, selecione uma opção antes de enviar.";
            divResultado.style.color = "red";
        } else {
            // Lógica de processamento (Nível 4 requer uso de variáveis)
            const feedback = resposta.value === "sim" 
                ? "Correto! Analisar iluminação e bordas é fundamental para detectar IAs." 
                : "Incorreto. Muitas deepfakes falham em detalhes de iluminação e texturas.";
            
            divResultado.textContent = feedback;
            divResultado.style.color = "green";
        }
    });
});
