import {cart, addToCart} from '../data/cart.js'
import {products} from '../data/products.js'

export function renderHomeContainer(category){
let productsHtml = '';
if(category=="All"){
products.forEach((product) =>{
      productsHtml +=`
       <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>
  
            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>
  
            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
              <div class="product-rating-count bs-success">
                  ${product.rating.count}
              </div>
            </div>
  
            <div class="product-price">
              &#8377;${product.priceCents }
            </div>
  
            <div class="product-quantity-container">
              <select class="js-select-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
  
            <div class="product-spacer">${product.extraInfoHtml()}</div>
  
            <div class="added-to-cart js-added-to-cart-${product.id}">
              <img src="images/icons/checkmark.png">
              Added
            </div>
  
            <div class="buttons">
            <button type="button" class="add-to-cart-button  js-add-to-cart" data-product-id="${product.id}"
                          data-product-name="${product.name}">
              Add to Cart
            </button>
            <a href="buying.html" data-product-id="${product.id}" data-product-name="${product.name}" class="buy-anchor"><button type="button" class="buy-now-btn">Buy Now</button></a>
          </div>
          </div>`;
})
document.querySelector(".products-grid").innerHTML=productsHtml;
}else if(category=="Clothing"){
  products.forEach((product) =>{
    if(product.productType==="clothing"){
    productsHtml +=`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count bs-success">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.priceCents }
          </div>

          <div class="product-quantity-container">
            <select class="js-select-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer">${product.extraInfoHtml()}</div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button type="button" class="add-to-cart-button  js-add-to-cart" data-product-id="${product.id}"
          data-product-name="${product.name}">
            Add to Cart
          </button>
            <a href="buying.html" data-product-id="${product.id}" data-product-name="${product.name}" class="buy-anchor"><button type="button" class="buy-now-btn">Buy Now</button></a>
        </div>`;
    }
  })
  document.querySelector(".products-grid").innerHTML=productsHtml;
}else if(category=="Footwear"){
  products.forEach((product) =>{
    if(product.productType==="footwear"){
    productsHtml +=`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count bs-success">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.priceCents }
          </div>

          <div class="product-quantity-container">
            <select class="js-select-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer">${product.extraInfoHtml()}</div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <div class="buttons">
            <button type="button" class="add-to-cart-button  js-add-to-cart" data-product-id="${product.id}"
                          data-product-name="${product.name}">
              Add to Cart
            </button>
            <a href="buying.html" data-product-id="${product.id}" data-product-name="${product.name}" class="buy-anchor"><button type="button" class="buy-now-btn">Buy Now</button></a>
          </div>
        </div>`;
    }
  })
  document.querySelector(".products-grid").innerHTML=productsHtml;
}else if(category=="Appliance"){
  products.forEach((product) =>{
    if(product.productType==="appliance"){
    productsHtml +=`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count bs-success">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.priceCents }
          </div>

          <div class="product-quantity-container">
            <select class="js-select-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer">${product.extraInfoHtml()}</div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <div class="buttons">
            <button type="button" class="add-to-cart-button  js-add-to-cart" data-product-id="${product.id}"
                          data-product-name="${product.name}">
              Add to Cart
            </button>
            <a href="buying.html" data-product-id="${product.id}" data-product-name="${product.name}" class="buy-anchor"><button type="button" class="buy-now-btn">Buy Now</button></a>
          </div>
        </div>`;
    }
  })
  document.querySelector(".products-grid").innerHTML=productsHtml;
}else{
  if(category!=''){
    const pattern = new RegExp(category,'ig');
    products.forEach((product) => {
      const keywords = product.keywords;
      if(pattern.test(keywords)){
        productsHtml+=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count bs-success">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.priceCents }
          </div>

          <div class="product-quantity-container">
            <select class="js-select-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer">${product.extraInfoHtml()}</div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <div class="buttons">
            <button type="button" class="add-to-cart-button  js-add-to-cart" data-product-id="${product.id}"
                          data-product-name="${product.name}">
              Add to Cart
            </button>
            <a href="buying.html" data-product-id="${product.id}" data-product-name="${product.name}" class="buy-anchor"><button type="button" class="buy-now-btn">Buy Now</button></a>
          </div>
        </div>`
      }
    })
    document.querySelector('.products-grid').innerHTML=productsHtml;
  }
}

function updateQuantity(){
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity+=cartItem.quantity;
  })
  document.querySelector(".js-cart-quantity").innerHTML=totalQuantity;
}
updateQuantity();

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click",() => {
    const productId = button.dataset.productId;
    const productName = button.dataset.productName;
    let selectQty = document.querySelector(`.js-select-${productId}`);
    addToCart(productId,productName,selectQty.value,'cart');
    updateQuantity();

    const added = document.querySelector(`.js-added-to-cart-${productId}`);
    added.style.opacity=1;
    setTimeout(()=>{
      added.style.opacity=0;
    },2000)
})
})
  document.querySelectorAll(".buy-anchor").forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const productName = button.dataset.productName;
      let selectQty = document.querySelector(`.js-select-${productId}`);
      addToCart(productId,productName,selectQty.value,'buy');
    })
  })
}
renderHomeContainer("All");

document.querySelectorAll(".category-li").forEach(li => {
  li.addEventListener('click' , () => {
    renderHomeContainer(li.innerHTML);
  })
})

const searchBar = document.querySelector(".js-search-bar");
const searchBtn = document.querySelector(".js-search-button");
searchBtn.addEventListener('click',() => {
  renderHomeContainer(searchBar.value);
})

document.querySelector(".menu-img").addEventListener('click',() => {
  document.querySelector('.sidebar').classList.toggle('sidebar-on');
  document.querySelector('.container').classList.toggle('container-off');
})

const input = document.querySelector('.search-input');
input.addEventListener('keydown',(event) => {
  if(event.key === "Enter"){
    renderHomeContainer(input.value)
    input.value='';
  }
})
