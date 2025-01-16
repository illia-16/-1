const translations = {
    uk: {
        catalog: {
            title: "Каталог товарів",
            product1: { name: "Процесор Ryzen 5600X", price: "Ціна: 7,500 грн", btn: "Додати у кошик" },
            product2: { name: "Відеокарта RTX 4060ti", price: "Ціна: 18,000 грн", btn: "Додати у кошик" },
            product3: { name: "SSD Kingston 1TB", price: "Ціна: 4,189 грн", btn: "Додати у кошик" },
            product4: { name: "ОЗП Kingston Fury DDR4 32ГБ", price: "Ціна: 3,200 грн", btn: "Додати у кошик" }
        }
    },
    en: {
        catalog: {
            title: "Product Catalog",
            product1: { name: "Processor Ryzen 5600X", price: "Price: 7,500 UAH", btn: "Add to cart" },
            product2: { name: "GPU RTX 4060ti", price: "Price: 18,000 UAH", btn: "Add to cart" },
            product3: { name: "SSD Kingston 1TB", price: "Price: 4,189 UAH", btn: "Add to cart" },
            product4: { name: "RAM Kingston Fury DDR4 32GB", price: "Price: 3,200 UAH", btn: "Add to cart" }
        }
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("catalog-title").textContent = t.catalog.title;
   
}