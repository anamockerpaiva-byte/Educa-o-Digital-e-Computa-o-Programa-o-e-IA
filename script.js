/**
 * Projeto: Cidadania Digital e Inteligência Artificial
 * Componente: Educação Digital e IA
 * Função: Validação interativa do formulário de Quiz (Manipulação do DOM)
 */

// Garante que o script só corre depois de todo o HTML estar carregado no navegador
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleção dos elementos do HTML através dos seus IDs
    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("quiz-result");

    // Verifica se os elementos existem na página para evitar erros de execução
    if (quizForm && resultDiv) {
        
        // Escuta o evento de "submit" (envio) do formulário
        quizForm.addEventListener("submit", function (event) {
            
            // Impede o comportamento padrão do formulário (recarregar a página)
            event.preventDefault();

            // Procura o input do tipo radio que foi selecionado pelo utilizador
            const selectedOption = quizForm.querySelector('input[name="quiz-answer"]:checked');

            // Limpa as classes de estilização anteriores do elemento de resultado
            resultDiv.className = "";

            // 1. Validação de Segurança: Caso o utilizador tente submeter sem escolher nada
            if (!selectedOption) {
                resultDiv.textContent = "⚠️ Por favor, escolhe uma das opções antes de validar!";
                resultDiv.classList.add("error"); // Aplica estilo de erro/alerta
                return; // Para a execução da função aqui
            }

            // 2. Verificação da Resposta
            if (selectedOption.value === "correta") {
                // Mensagem caso o utilizador acerte
                resultDiv.innerHTML = "<strong>🎉 Parabéns, resposta correta!</strong> Investigar o tema em motores de busca confiáveis e agências de checagem de factos é a melhor postura de cidadania digital para combater o impacto das Deepfakes.";
                resultDiv.classList.add("success"); // Aplica classe CSS de sucesso (verde)
            } else {
                // Mensagem caso o utilizador erre
                resultDiv.innerHTML = "<strong>❌ Resposta incorreta.</strong> Partilhar links sem checar ou acreditar cegamente em vídeos polémicos ajuda a espalhar a desinformação automatizada. Lembra-te: na dúvida, nunca partilhes!";
                resultDiv.classList.add("error"); // Aplica classe CSS de erro (vermelho)
            }

        });
    }
});
