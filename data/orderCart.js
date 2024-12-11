import { cart } from "./cart.js";

export let orderCart =JSON.parse(localStorage.getItem('orderCart'));
if(!orderCart){
    orderCart=[]
}

export function addToOrderCart(date,grandTotal){
    const id = idGenerator();
    
    orderCart.unshift({
        orderID:id,
        totalPrice:grandTotal,
        orderDate:date,
        orderProducts:[],
    })
    cart.forEach((cartItem) => {
        let target = orderCart.find(obj => obj.orderID === id)
        target.orderProducts.push(cartItem);
    })
    saveToStorage();
    localStorage.removeItem('cart');
}

function saveToStorage(){
    localStorage.setItem('orderCart',JSON.stringify(orderCart));
}

function idGenerator(){
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = '';
    for (let i = 1; i < 28; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }
    return randomId;
}