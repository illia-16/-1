const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderCart() {
  cartItemsContainer.innerHTML = ""; 
  let total = 0;

  cart.forEach((item, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Ціна: ${item.price} грн</p>
      <p>Кількість: 1</p>
      <button class="btn remove-item" data-index="${index}">Видалити</button>
    `;
    cartItemsContainer.appendChild(productCard);


    total += parseInt(item.price, 10);
  });

  totalPriceElement.textContent = total.toLocaleString();
}


cartItemsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-item")) {
    const index = event.target.dataset.index; 
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    renderCart(); 
  }
});


renderCart();
