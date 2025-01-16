document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const item = e.target.closest('.product-card');
        item.remove();
        updateCartTotal();
    });
});

function updateCartTotal() {
    const items = document.querySelectorAll('.product-card');
    let total = 0;
    items.forEach(item => {
        const price = parseInt(item.querySelector('p:nth-of-type(1)').textContent.replace(/\D/g, ''));
        total += price;
    });
    document.querySelector('.cart-summary h3').textContent = `Загальна сума: ${total} грн`;
}