import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

export let cart =JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=[]
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,productName,selectQty,what){
  if(what==='cart'){
    let matchingItem ;

    const today = dayjs();
    const ExpectedDate = today.add(7,'days');
    const dateString = ExpectedDate.format('dddd, MMMM D');

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
        matchingItem = cartItem;
    })
    if(matchingItem){
      matchingItem.quantity+=Number(selectQty);
    }else{
      cart.push({
        productId:productId,
        productName:productName,
        quantity:Number(selectQty),
        deliveryOptionId:'1',
        deliveryDate:dateString
      })
    }
  }
  else if(what==='buy'){
    cart=[]
    let matchingItem ;

    const today = dayjs();
    const ExpectedDate = today.add(7,'days');
    const dateString = ExpectedDate.format('dddd, MMMM D');

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId)
        matchingItem = cartItem;
    })
    if(matchingItem){
      matchingItem.quantity+=Number(selectQty);
    }else{
      cart.push({
        productId:productId,
        productName:productName,
        quantity:Number(selectQty),
        deliveryOptionId:'1',
        deliveryDate:dateString
      })
    }
  }
    saveToStorage();
  }

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((item) => {
        if(item.productId !== productId)
            newCart.push(item)
    })

    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  cart.forEach((item) => {
    if(item.productId===productId)
        item.deliveryOptionId=deliveryOptionId;
  })
  saveToStorage();
}

export function updateDeliveryDate(productId,deliveryDate){
  cart.forEach(item => {
    if(item.productId===productId)
      item.deliveryDate=deliveryDate;
  })
  saveToStorage();
}