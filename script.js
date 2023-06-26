const data = JSON.parse(dataProducts);

const product = document.querySelector('.product');

data.forEach(element => {
    const productItem = document.createElement('div');
    productItem.classList.add("product_rectangle");
    product.appendChild(productItem);

    productInsert = document.createElement('div');
    productInsert.classList.add("product_insert");
    productItem.appendChild(productInsert);

    const productPicture = document.createElement('img');
    const imgClass = element.picture_class;
    imgClass.forEach(element => {
        productPicture.classList.add(`${element}`);
    });
    productPicture.src = element.picture;
    productInsert.appendChild(productPicture);

    const productBrand = document.createElement('h3');
    productBrand.classList.add("product_head");
    productBrand.textContent = element.brand;
    productItem.appendChild(productBrand);

    const productDescription = document.createElement('p');
    productDescription.classList.add("product_text");
    productDescription.textContent = element.description;
    productItem.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add("product_price");
    productPrice.textContent = element.price;
    const productPriceCurrency = document.createElement('p');
    productPriceCurrency.classList.add("product_price");
    productPriceCurrency.textContent = element.currency;
    productPrice.innerHTML = productPriceCurrency.innerHTML + productPrice.innerHTML;
    productItem.appendChild(productPrice);
});






