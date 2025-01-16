 // Завантаження товарів з Local Storage
 const cartItemsContainer = document.getElementById('cart-items');
 const totalPriceElement = document.getElementById('total-price');

 let cart = JSON.parse(localStorage.getItem('cart')) || [];

 // Функція для відображення товарів у кошику
 function renderCart() {
     cartItemsContainer.innerHTML = ''; // Очищуємо вміст
     let total = 0;

     cart.forEach((item, index) => {
         // Розрахунок загальної суми
         total += parseInt(item.price);

         // Додавання картки товару
         const productCard = document.createElement('div');
         productCard.classList.add('product-card');
         productCard.innerHTML = `
             <img src="${item.image}" alt="${item.name}">
             <h3>${item.name}</h3>
             <p>Ціна: ${item.price} грн</p>
             <p>Кількість: 1</p>
             <a href="#" class="btn remove-item" data-index="${index}">Видалити</a>
         `;
         cartItemsContainer.appendChild(productCard);
     });

     totalPriceElement.textContent = total.toLocaleString();
 }

 // Функція для видалення товару
 cartItemsContainer.addEventListener('click', (event) => {
     if (event.target.classList.contains('remove-item')) {
         const index = event.target.dataset.index;
         cart.splice(index, 1); // Видаляємо товар із кошика
         localStorage.setItem('cart', JSON.stringify(cart)); // Оновлюємо Local Storage
         renderCart(); // Перемальовуємо кошик
     }
 });

 // Завантаження кошика при відкритті сторінки
 renderCart();