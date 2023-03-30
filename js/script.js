let selectedDishBuy = false;
let selectedDrinkBuy = false;
let selectedDessertBuy = false;


function replaceButton(){
    const button = document.querySelector('.button');
    button.classList.remove('disable');
    button.classList.add('active');
    button.innerHTML = 'Fechar pedido';

}

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
    const markedPlate = document.querySelector('.dessert .select');

    if(markedPlate !== null){
        markedPlate.classList.remove('select')
    }

    selectedDessert.classList.add('select')

    titleDessert = selectedDessert.querySelector('.title-order').innerHTML;
    priceDessert = selectedDessert.querySelector('.price-order').innerHTML;

    checkSelectedItems();
}

function checkSelectedItems(){
    if(selectedDishBuy && selectedDrinkBuy && selectedDessertBuy){
        replaceButton();
    }
}