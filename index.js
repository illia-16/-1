const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let lst = [1, 2, 3, 4]

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    const img = e.target.dataset.img;
    const product = { id, name, price, img };

    const isInCart = cart.some((item) => item.id === id);
    if (!isInCart) {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар додано до кошика!");
  });
});
