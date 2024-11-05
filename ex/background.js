chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensão MTrek Cashback instalada.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getUserData") {
        // Solicita dados do usuário à API
        fetch('https://seu-dominio.com/api/user-data', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${request.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({ success: true, data: data });
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
            sendResponse({ success: false, error: error.message });
        });
        return true; // Necessário para indicar que a resposta é assíncrona
    }

    if (request.action === "activateCashback") {
        // Envia a requisição para ativar o cashback
        fetch('https://seu-dominio.com/api/activate-cashback', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${request.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cashback: true })
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({ success: data.success });
        })
        .catch(error => {
            console.error('Erro ao ativar cashback:', error);
            sendResponse({ success: false, error: error.message });
        });
        return true;
    }
});
