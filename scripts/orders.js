import {cart} from '../data/cart.js'
import {orderCart,addToOrderCart} from '../data/orderCart.js'
import {getProduct} from '../data/products.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {deliveryOptions} from '../data/deliveryoptions.js'
import { trackPackages } from '../data/trackCart.js'

const today = dayjs();
const dateString = today.format('MMMM D');
let totalPrice = 0;
let totalQuantity = 0;
let matchingItem;
let grandTotal =0;
let taxPrice =0;
let shippingPrice = 0;
cart.forEach((cartItem) => {
  totalQuantity+=cartItem.quantity;
  const productId = cartItem.productId;
  matchingItem = getProduct(productId);

  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if(option.id === cartItem.deliveryOptionId){
      deliveryOption = option;}
  }) 
  shippingPrice += deliveryOption.priceCents;

  const price = Math.floor(matchingItem.priceCents);
  totalPrice += (price*cartItem.quantity);
})
totalPrice += shippingPrice;
taxPrice = totalPrice * 0.05;
grandTotal = totalPrice + Math.round(taxPrice);

// document.querySelector(".js-cart-quantity").innerHTML=totalQuantity;

if(cart.length !=0){
  addToOrderCart(dateString,grandTotal);
}

let orderHeaderHtml = '';
let orderHtml = '';
orderCart.forEach((orderCartItem) => {
  orderHeaderHtml += `
    <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
              <div class="order-date">
                  <div class="order-header-label">Order Placed:</div>
                  <div>${orderCartItem.orderDate}</div>
              </div>
              <div class="order-total">
                  <div class="order-header-label">Total:</div>
                  <div>&#8377;${orderCartItem.totalPrice}</div>
              </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${orderCartItem.orderID}</div>
          </div>
        </div>
      <div class="order-details-grid js-order-details-${orderCartItem.orderID}">
      </div>
    </div>  `
})
document.querySelector('.js-order-grid').innerHTML=orderHeaderHtml;

orderCart.forEach((orderCartItem) => {
  const orderProduct = orderCartItem.orderProducts;
  orderProduct.forEach((item) => {
    const productId = item.productId;
    const matchingItem = getProduct(productId);

    orderHtml += `
          <div class="product-image-container">
            <img src="${matchingItem.image}">
          </div>

          <div class="product-details">
            <div class="product-name">${matchingItem.name}</div>
            <div class="product-delivery-date">Arriving on: ${item.deliveryDate}</div>
            <div class="product-quantity">Quantity: ${item.quantity}</div>
          </div>

          <div class="product-actions">
            <a href="tracking.html">
              <button class="track-package-button button-secondary" 
              data-product-name="${matchingItem.name}" data-product-image="${matchingItem.image}"
              data-product-date="${item.deliveryDate}" data-product-qty="${item.quantity}"
              data-product-order="${orderCartItem.orderID}" data-delivery-option="${item.deliveryOptionId}">
                Track package
              </button>
            </a>
          </div>`;
  })
  document.querySelector(`.js-order-details-${orderCartItem.orderID}`).innerHTML=orderHtml;
  orderHtml=''
})

document.querySelectorAll('.track-package-button').forEach(button => {
  const {productDate} = button.dataset;
  const today = dayjs();
  const a = today.format('D')
  const b = Number(a.slice(-2));
  const c = Number(productDate.slice(-2));
  if(c<b){
    button.innerHTML="Delivered";
    button.style.color="white"
    button.style.backgroundColor="green"
    button.style.border="none"
  }
  button.addEventListener('click', () => {
    const {productName,productImage,productDate,productQty,productOrder,deliveryOption} = button.dataset;
    trackPackages(productName,productImage,productOrder,productQty,productDate,deliveryOption);
  })
})
