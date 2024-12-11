import { trackData } from "../data/trackCart.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


trackData.forEach(element => {
  document.querySelector('.delivery-date').innerHTML=`Arriving on ${element.trackDate}`;
  document.querySelector('.delivery-id').innerHTML=`Order id: ${element.trackOrderId}`;
  document.querySelector('.product-info').innerHTML=`${element.trackName}`;
  document.querySelector('.quantity').innerHTML=`Quantity: ${element.trackQuantity}`;
  document.querySelector('.product-image').src=`${element.trackImage}`; 
})

const trackDate = trackData[0].trackDate;
const orderedDate = Number(trackDate.slice(-2));
const deliveryDate = trackData[0].deliveryOption;
const today = dayjs();
const dateString = today.format('D');

let difference;
if(orderedDate-dateString <= 0){
  difference = -1;
}else{
  if(deliveryDate === '1'){
    const delivery = orderedDate + 7;
    difference = delivery - orderedDate;
  }else if(deliveryDate === '2'){
    const delivery = orderedDate + 3;
    difference = delivery - orderedDate;
  }else if(deliveryDate === '3'){
    const delivery = orderedDate + 1;
    difference = delivery - orderedDate;
  }
}


if(difference <= 0){
  document.querySelector('.progress-bar').style.width="100%";
}else if(difference===1){
  document.querySelector('.progress-bar').style.width="90%";
}else if(difference===2){
  document.querySelector('.progress-bar').style.width="80%";
}else if(difference===3){
  document.querySelector('.progress-bar').style.width="60%";
}else if(difference===4){
  document.querySelector('.progress-bar').style.width="40%";
}else if(difference===5){
  document.querySelector('.progress-bar').style.width="30%";
}else if(difference===6){
  document.querySelector('.progress-bar').style.width="20%";
}else if(difference===7){
  document.querySelector('.progress-bar').style.width="5%";
}

const progressiveBar = document.querySelector('.progress-bar').style.width;
const width = Number(progressiveBar.replace("%",""));
if(width < 40){
  document.querySelector('.preparing-label').classList.add('current-status');
}else if(width >= 40 && width <= 90){
  document.querySelector('.shipped-label').classList.add('current-status');
}else if(width > 90){
  document.querySelector('.delivered-label').classList.add('current-status');
}

