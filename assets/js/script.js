let selectedDishBuy = false;
let selectedDrinkBuy = false;
let selectedDessertBuy = false;

let titleDish;
let titleDrink;
let titleDessert;

let priceDish;
let priceDrink;
let priceDessert;

let total= 0;


function selectDish(event){
    const selectedDish = event.currentTarget;
    selectedDishBuy = true;
    // selecao de prato
    const markedPlate = document.querySelector('.dishes .select');

    if(markedPlate !== null){
        markedPlate.classList.remove('select')
    }

    selectedDish.classList.add('select')

    titleDish = selectedDish.querySelector('.title-order').innerHTML;
    priceDish = selectedDish.querySelector('.price-order').innerHTML;

    checkSelectedItems();
}

function selectDrink(event){
    const selectedDrink = event.currentTarget;

    selectedDrinkBuy = true;
    // selecao de prato
    const markedPlate = document.querySelector('.drinks .select');

    if(markedPlate !== null){
        markedPlate.classList.remove('select')
    }

    selectedDrink.classList.add('select')

    titleDrink = selectedDrink.querySelector('.title-order').innerHTML;
    priceDrink = selectedDrink.querySelector('.price-order').innerHTML;

    checkSelectedItems();
}

function selectDessert(event){
    const selectedDessert = event.currentTarget;
    
    selectedDessertBuy = true;
    // selecao de prato
    const markedPlate = document.querySelector('.desserts .select');

    if(markedPlate !== null){
        markedPlate.classList.remove('select')
    }

    selectedDessert.classList.add('select')

    titleDessert = selectedDessert.querySelector('.title-order').innerHTML;
    priceDessert = selectedDessert.querySelector('.price-order').innerHTML;

    checkSelectedItems();
}

function replaceButton(){
    if ( titleDish !== undefined){
        if(titleDrink !== undefined){
            if(titleDessert !== undefined){
                const button = document.querySelector('.button-place-order');
                button.classList.remove('disabled');
                button.classList.add('active');
                button.innerHTML = 'Fechar pedido';
            }
        }
    }
}


function checkSelectedItems(){
    if(selectedDishBuy && selectedDrinkBuy && selectedDessertBuy){
        replaceButton();
    }
}

function placeOrder(){

    if(titleDish === undefined || titleDrink === undefined || titleDessert === undefined ){
        document.querySelector('.modal').classList.add('hidden');
    }
    
    const confirmOrder = document.querySelector('.modal')
    confirmOrder.classList.remove('hidden')


    let list_items = ['.item-dish', '.item-drink', '.item-dessert']
    let type_item = ['Dish', 'Drink', 'Dessert']

    let items = {
        Dish: {
            title: titleDish,
            price: priceDish
        },
        Drink: {
            title: titleDrink,
            price: priceDrink
        },
        Dessert: {
            title: titleDessert,
            price: priceDessert
        }
    }

    for (let i = 0; i < list_items.length; i++) {
        let itemType = type_item[i];
        let item = items[itemType];
        document.querySelector(`${list_items[i]} .name`).innerHTML = item.title;
        document.querySelector(`${list_items[i]} .price`).innerHTML = item.price;
        
        item.price = Number(item.price.replace('R$','').replace(',','.'));
        
        total += item.price;
    }

    document.querySelector('.total-order .total-num').innerHTML =`R$ ${total.toFixed(2)}`;
}

function cancelOrder() {
    document.querySelector('.modal').classList.add('hidden');

    if(selectedDishBuy && selectedDrinkBuy && selectedDessertBuy){
        const button = document.querySelector('.button-place-order');
        button.classList.add('disabled');
        button.classList.remove('active');
        button.innerHTML = 'Selecione os 3 itens <br /> para fechar o pedido';
    }
    
    selectedDishBuy = false;
    selectedDrinkBuy = false;
    selectedDessertBuy = false;
    titleDish = undefined;
    titleDrink = undefined;
    titleDessert = undefined;
    priceDish = undefined;
    priceDrink = undefined;
    priceDessert = undefined;
    total = 0;

    const markedPlatesDessert = document.querySelectorAll('.desserts .select');
    const markedPlatesDishes = document.querySelectorAll('.dishes .select');
    const markedPlatesDrinks = document.querySelectorAll('.drinks .select');
  
    markedPlatesDessert.forEach(function(plate) {
      plate.classList.remove('select');
    });
  
    markedPlatesDishes.forEach(function(plate) {
      plate.classList.remove('select');
    });
  
    markedPlatesDrinks.forEach(function(plate) {
      plate.classList.remove('select');
    });
  }

function sendMessage(){
    const name = prompt('Qual o seu nome?')
    const address = prompt('Qual o seu endereço?')

    const messageWtt = encodeURIComponent(`
    Olá, gostaria de fazer o pedido:\n
    - Prato: ${titleDish},
    - Bebida: ${titleDrink},
    - Sobremesa: ${titleDessert},
    Total: ${total.toFixed(2)}
    \n
    Nome: ${name}
    Endereço: ${address}
    `)

    console.log(messageWtt);
    const linkWtt = `https://wa.me/5561991581058?text=${messageWtt}`
    
    window.location = linkWtt;
}