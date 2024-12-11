export let trackData = JSON.parse(localStorage.getItem('trackData'));

if(!trackData)
  trackData=[{  
    trackImage:"images/products/men-navigator-sunglasses-brown.jpg",
    trackOrderId:"mvxf0n3t8uxql4gj7mau1dbc4be4k",
    trackQuantity:"1",
    trackDate:"Sunday, November 10",
    trackName:"Men-navigator-sunglasses-brown",
    deliveryOption:"2"
}]

export function trackPackages(name,image,orderid,qty,deliveryDate,deliveryOption){
  trackData=[];
  trackData.push({
    trackImage:image,
    trackOrderId:orderid,
    trackQuantity:qty,
    trackDate:deliveryDate,
    trackName:name,
    deliveryOption:deliveryOption
  })
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('trackData',JSON.stringify(trackData));
}


