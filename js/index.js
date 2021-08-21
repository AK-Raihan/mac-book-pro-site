// memory btn id
const memory8GB= document.getElementById('memory-8gb-btn');
const memory16GB= document.getElementById('memory-16gb-btn');

// storage btn id
const stroage256GB = document.getElementById('storage256')
const stroage512GB = document.getElementById('storage512')
const stroage1TB = document.getElementById('storage1TB')

// delivery btn id
const freeDelivery = document.getElementById('free');
const expressDelivery = document.getElementById('express')

// memory and straoge and delivery field
const extraMemoryField = document.getElementById('extra-memory-cost');
const storageField = document.getElementById('storage-cost');
const deliveryField = document.getElementById('delivery-charge');

// delivery addeven
freeDelivery.addEventListener('click', function(){
    deliveryField.innerText = 0;
    totalUpdate()
})
expressDelivery.addEventListener('click', function(){
    deliveryField.innerText = 20;
    totalUpdate()
})

// straoge addeven
stroage256GB.addEventListener('click', function(){
    storageField.innerText = 0;
    totalUpdate()
})
stroage512GB.addEventListener('click', function(){
    storageField.innerText = 100;
    totalUpdate()
})
stroage1TB.addEventListener('click', function(){
    storageField.innerText = 180;
    totalUpdate()
})

// memory add even
memory8GB.addEventListener('click',function(){
    extraMemoryField.innerText= 0;
    totalUpdate()

})
memory16GB.addEventListener('click',function(){
    extraMemoryField.innerText= 180;
    totalUpdate()

})
// best price
const bestPrice =document.getElementById('best-price');

// total 
const totalPrice =document.getElementById('total-price');

// final total
const finalTotal = document.getElementById('final-total');


// total update
function totalUpdate(){
    const bestFixedPrice = Number(bestPrice.innerText);
    const extraMemoryCost = Number(extraMemoryField.innerText);
    const extraStorageCost = Number(storageField.innerText);
    const extraDeliveryCost = Number(deliveryField.innerText);
    const grandTotal = bestFixedPrice+ extraMemoryCost+ extraStorageCost+extraDeliveryCost;
    totalPrice.innerText = grandTotal;
    finalTotal.innerText = grandTotal;
    return grandTotal;

}

// pomo code section 

const applyButton = document.getElementById('apply-btn');

applyButton.addEventListener('click',function(){
    const PomoInput = document.getElementById('pomo-input');
    const pomoField = PomoInput.value;
    const discountPrice =(totalUpdate()* 20)/100;
    if(pomoField=='stevekaku'){

        finalTotal.innerText = totalUpdate() - discountPrice;
    }
    PomoInput.value = '';
})