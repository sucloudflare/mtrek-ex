

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('userToken');

    if (token) {
        chrome.runtime.sendMessage({ action: "getUserData", token: token }, (response) => {
            if (response && response.success) {
                const data = response.data;
                document.getElementById('user-name').textContent = `Bem-vindo, ${data.name}!`;
                document.getElementById('user-avatar').src = data.avatar;
                document.getElementById('cashback-balance').textContent = `Saldo de Cashback: R$${data.cashback_balance.toFixed(2)}`;

                const couponList = document.getElementById('coupon-list');
                couponList.innerHTML = '';
                data.coupons.forEach(coupon => {
                    const listItem = document.createElement('li');
                    listItem.className = 'coupon-item';
                    listItem.innerHTML = `
                        <img src="${coupon.img}" alt="Marca Parceira">
                        <div><span class="coupon-code">${coupon.code}</span> - ${coupon.description}</div>
                    `;
                    couponList.appendChild(listItem);
                });
            } else {
                console.error('Erro ao carregar dados:', response?.error || 'Resposta inválida');
                document.getElementById('user-name').textContent = 'Erro ao carregar dados do usuário.';
                localStorage.removeItem('userToken');
            }
        });
    } else {
        document.getElementById('user-name').textContent = 'Por favor, faça login para continuar.';
    }

    document.getElementById('activate-cashback').addEventListener('click', () => {
        alert("Cashback ativado!");
        chrome.runtime.sendMessage({ action: "activateCashback", token: token }, (response) => {
            if (response && response.success) {
                alert("Cashback ativado com sucesso!");
            } else {
                alert("Falha ao ativar cashback.");
            }
        });
    });
});
