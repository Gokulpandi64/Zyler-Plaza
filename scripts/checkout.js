import {cart, removeFromCart,updateDeliveryOption,updateDeliveryDate} from '../data/cart.js'
import {products,getProduct} from '../data/products.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {deliveryOptions} from '../data/deliveryoptions.js'

function renderOrderSummary(){
  var checkoutHtml = '';
  cart.forEach((cartItem) => {
      const productId = cartItem.productId;
      const matchingItem = getProduct(productId);

      const deliveryOptionId = cartItem.deliveryOptionId;
      let deliveryOption;
      deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId)
          deliveryOption = option;
      }) 
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDate,'days');
      const dateString = deliveryDate.format('dddd, MMMM D');
      
      checkoutHtml += `
            <div class="cart-item-container js-cart-item-${matchingItem.id} 
                data-delivery-id="${matchingItem.id}" data-delivery-date="${dateString}">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>
              <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingItem.image}">
                <div class="cart-item-details">
                  <div class="product-name">${matchingItem.name}</div>
                  <div class="product-price">&#8377;${matchingItem.priceCents }</div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>

                    <span class="delete-quantity-link delete-btn js-delete-quantity" data-product-id="${matchingItem.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">Choose a delivery option:</div>
                  ${deliveryOptionsHTML(matchingItem,cartItem)}
                </div>
              </div>
            </div>`
  });
 
  function deliveryOptionsHTML(matchingItem,cartItem){
    let HTML='';
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDate,'days');
      const dateString = deliveryDate.format('dddd, MMMM D');
      const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `&#8377;${deliveryOption.priceCents}`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId ;

      HTML +=`<div class="delivery-option js-delivery-option"
                data-product-id="${matchingItem.id}" data-delivery-option-id="${deliveryOption.id}"
                data-product-Delivery="${dateString}">
          <input type="radio" ${isChecked?'checked':''} class="delivery-option-input" name="${matchingItem.id}">
          <div>
            <div class="delivery-option-date">${dateString}</div>
            <div class="delivery-option-price">${priceString} Shipping</div>
          </div>
        </div>`

    });
    return HTML;
  }

  document.querySelector(".js-order-summary").innerHTML=checkoutHtml;

  document.querySelectorAll(".js-delete-quantity").forEach((link) => {
      link.addEventListener("click", () => {
          let productId = link.dataset.productId;
          removeFromCart(productId);

          const conatiner = document.querySelector(`.js-cart-item-${productId}`);
          conatiner.remove();
          renderPaymentSummary();
      })
  })

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener('click', () => {
      const {productId,deliveryOptionId,productDelivery} = element.dataset;
      updateDeliveryOption(productId,deliveryOptionId);
      updateDeliveryDate(productId,productDelivery);
      renderOrderSummary();
      renderPaymentSummary();
    })
  })
}
renderOrderSummary();

function renderPaymentSummary(){
  let productPriceCents = 0;
  let shippingPrice = 0;
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if(option.id === cartItem.deliveryOptionId)
        deliveryOption = option;
    }) 
    shippingPrice += deliveryOption.priceCents;
    totalQuantity += cartItem.quantity;
  })

  const totalPriceBeforeTax = productPriceCents + shippingPrice;
  const taxPrice = totalPriceBeforeTax * 0.05;
  const totalPriceAfterTax = taxPrice + totalPriceBeforeTax;

  const paymentHtml= `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalQuantity}):</div>
            <div class="payment-summary-money">&#8377;${productPriceCents}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">&#8377;${shippingPrice}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">&#8377;${totalPriceBeforeTax}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">&#8377;${taxPrice.toFixed(1)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">&#8377;${Math.round(totalPriceAfterTax)}</div>
          </div>

          <a href="orders.html"><button class="place-order-button btn btn-success" onclick="callOrder()">
            Place your order
          </button></a>`
  document.querySelector(".js-payment-summary").innerHTML=paymentHtml;
  document.querySelector('.js-checkout-header').innerHTML=`${totalQuantity}`;
}
renderPaymentSummary();

