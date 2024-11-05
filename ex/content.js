// content.js

// Função para criar um modal
function createModal() {
    // Cria a estrutura do modal
    const modal = document.createElement('div');
    modal.id = 'cashback-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Ative seu Cashback!</h2>
            <p>Você está no site parceiro. Não se esqueça de ativar seu cashback!</p>
            <button id="activate-cashback">Ativar Cashback</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Adiciona estilo ao modal
    const style = document.createElement('style');
    style.textContent = `
        #cashback-modal {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
        }
        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            width: 300px;
        }
        .close-button {
            cursor: pointer;
            float: right;
            font-size: 20px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);

    // Adiciona evento de fechamento
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Adiciona evento ao botão de ativação
    modal.querySelector('#activate-cashback').addEventListener('click', () => {
        alert("Cashback ativado!"); // Aqui você pode adicionar a lógica real para ativar o cashback
        modal.style.display = 'none';
    });

    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Verifica se o usuário está na página de cashback e exibe o modal
if (window.location.hostname.includes("mercadolivre.com.br")) {
    createModal();
}
