const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'https://via.placeholder.com/200x150' },
    { id: 2, title: 'Mouse', price: 20, img: 'https://via.placeholder.com/200x150' },
    { id: 3, title: 'Keyboard', price: 200, img: 'https://via.placeholder.com/200x150' },
    { id: 4, title: 'Gamepad', price: 50, img: 'https://via.placeholder.com/200x150' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const img = document.createElement('img');
img.src = 'images/hvZpaUdW98M.jpg'
const renderProduct = (product, img) => {
    return `<div class="product-item">
                <img src='${product.img}'>
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = (list.map(product => renderProduct(product))).join('');

};

renderPage(products);