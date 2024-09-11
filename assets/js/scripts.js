// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const comprarBtns = document.querySelectorAll('.comprar-btn');
    
    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho!');
            // Aqui você pode implementar integração com API de pagamentos ou carrinho de compras
        });
    });
});
