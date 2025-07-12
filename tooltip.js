// tooltip.js

// Referências para o botão de ajuda e o tooltip
const apiKeyHelpButton = document.getElementById("apiKeyHelpButton");
const apiKeyTooltip = document.getElementById("apiKeyTooltip");
const tooltipContentDiv = apiKeyTooltip.querySelector(".tooltip-content");
const closeButtonTooltip = document.createElement("span"); // Criamos um botão de fechar para o tooltip
closeButtonTooltip.classList.add("close-button-tooltip");
closeButtonTooltip.innerHTML = "&times;";

// O conteúdo explicativo para o tooltip, AGORA COM CLASSES CSS
const apiKeyHelpContent = `
    <h3 class="tooltip-title">Como Conseguir Sua Chave API do Gemini</h3>
    <p class="tooltip-paragraph">Para usar este assistente de games, você precisará de uma <strong class="tooltip-strong">chave API (API Key)</strong> do Google Gemini. O processo é simples e rápido:</p>
    <ol class="tooltip-list">
        <li class="tooltip-list-item">
            <strong class="tooltip-strong">Acesse o Google AI Studio:</strong><br>
            Vá para o site oficial do Google AI Studio: <a href="https://aistudio.google.com/" target="_blank" class="tooltip-link">https://aistudio.google.com/</a>
        </li>
        <li class="tooltip-list-item">
            <strong class="tooltip-strong">Faça Login:</strong><br>
            Use sua conta Google (Gmail) para fazer login.
        </li>
        <li class="tooltip-list-item">
            <strong class="tooltip-strong">Crie uma Nova Chave API:</strong><br>
            No painel, procure por <strong class="tooltip-strong">"Get API key"</strong> ou <strong class="tooltip-strong">"Obter chave de API"</strong> (geralmente no menu lateral). Clique em <strong class="tooltip-strong">"Create API key in new project"</strong>.
        </li>
        <li class="tooltip-list-item">
            <strong class="tooltip-strong">Copie e Cole a Chave:</strong><br>
            Sua chave API será exibida. <strong class="tooltip-strong">Copie-a completamente</strong> e cole no campo "Sua Gemini API Key" aqui.
        </li>
    </ol>
    <p class="tooltip-paragraph tooltip-important">
        <strong class="tooltip-strong">Importante:</strong> Mantenha sua chave API em segredo! Ela é pessoal e dá acesso aos recursos do Gemini. O uso pode ter limites gratuitos.
    </p>
`;

// Função para mostrar o tooltip
const showTooltip = () => {
  tooltipContentDiv.innerHTML = apiKeyHelpContent;
  tooltipContentDiv.prepend(closeButtonTooltip); // Adiciona o botão de fechar no topo
  apiKeyTooltip.classList.remove("hidden");
};

// Função para esconder o tooltip
const hideTooltip = () => {
  apiKeyTooltip.classList.add("hidden");
  tooltipContentDiv.innerHTML = ""; // Limpa o conteúdo ao fechar
};

// Adiciona event listeners
if (apiKeyHelpButton && apiKeyTooltip) {
  // Verifica se os elementos existem antes de adicionar listeners
  apiKeyHelpButton.addEventListener("click", showTooltip);
  closeButtonTooltip.addEventListener("click", hideTooltip);
  apiKeyTooltip.addEventListener("click", (event) => {
    if (event.target === apiKeyTooltip) {
      hideTooltip();
    }
  });
}
