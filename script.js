//#region Functions
function renderEachElement() {
  renderEachPizza();
  renderEachPasta();
  renderEachDesert();
}

//#region pizza functions
function renderEachPizza() {
  const pizzaVariationTargetRef = document.getElementById("pizzaVariationTarget");
  pizzaVariationTargetRef.innerHTML = "";
  for (let pizzaIndex = 0; pizzaIndex < options[0].pizza.length; pizzaIndex++) {
    const elementPizzaName = options[0].pizza[pizzaIndex].name;
    const elementPizzaPrice = options[0].pizza[pizzaIndex].price;
    const elementPizzaDescription = options[0].pizza[pizzaIndex].description;
    pizzaVariationTargetRef.innerHTML += renderSinglePizza(pizzaIndex,elementPizzaName,elementPizzaPrice,elementPizzaDescription);
  }
}

//#endregion
//#region pasta functions
function renderEachPasta() {
  const pastaVariationTargetRef = document.getElementById("pastaVariationTarget");
  pastaVariationTargetRef.innerHTML = "";
  for (let pastaIndex = 0; pastaIndex < options[0].pasta.length; pastaIndex++) {
    const elementPastaName = options[0].pasta[pastaIndex].name;
    const elementPastaPrice = options[0].pasta[pastaIndex].price;
    const elementPastaDescription = options[0].pasta[pastaIndex].description;
    pastaVariationTargetRef.innerHTML += renderSinglePasta(pastaIndex,elementPastaName,elementPastaPrice,elementPastaDescription);
  }
}

//#endregion
//#region desert functions
function renderEachDesert() {
  const desertVariationTargetRef = document.getElementById("desertVariationTarget");
  desertVariationTargetRef.innerHTML = "";
  for (let desertIndex = 0;desertIndex < options[0].desert.length;desertIndex++) {
    const elementDesertName = options[0].desert[desertIndex].name;
    const elementDesertPrice = options[0].desert[desertIndex].price;
    const elementDesertDescription = options[0].desert[desertIndex].description;
    desertVariationTargetRef.innerHTML += renderSingleDesert(desertIndex,elementDesertName,elementDesertPrice,elementDesertDescription);
  }
}

//#endregion
//#region adding to basket
function renderBasket() {
  const optionTargetRef = document.getElementById("basketOptionsTarget");
  optionTargetRef.innerHTML = "";
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    if (basket[basketIndex].name.includes("Pizza")) {
      optionTargetRef.innerHTML += renderPizzaOptionTarget(basketIndex);
    }
    if (basket[basketIndex].name.includes("Pasta")) {
      optionTargetRef.innerHTML += renderPastaOptionTarget(basketIndex);
    }
    if (basket[basketIndex].name.includes("Desert")) {
      optionTargetRef.innerHTML += renderDesertOptionTarget(basketIndex);
    }
  }
}

function pushPizzaIntoBasket(pizzaIndex) {
  let foundElement = false;
  let pizzaBasketVar = JSON.parse(JSON.stringify(options[0].pizza[pizzaIndex]));
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].pizza[pizzaIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {    
    basket.push(pizzaBasketVar);
  }
  renderBasket();
}

function pushPastaIntoBasket(pastaIndex) {
  let foundElement = false;
  let pastaBasketVar = JSON.parse(JSON.stringify(options[0].pasta[pastaIndex]));
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].pasta[pastaIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {
    basket.push(pastaBasketVar);
  }
  renderBasket();
}

function pushDesertIntoBasket(desertIndex) {
  let foundElement = false;
  let desertBasketVar = JSON.parse(JSON.stringify(options[0].desert[desertIndex]));
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].desert[desertIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {
    basket.push(desertBasketVar);
  }
  renderBasket();
}

//#endregion
//#region calc Amount of Basket
function deleteFromBasket(basketIndex) {
  basket[basketIndex].amount = 1;
  basket.splice(basketIndex, 1);
  const singleBasketOptionTargetRef = document.getElementById(`singleBasketOptions(${basketIndex})`);
  singleBasketOptionTargetRef.innerHTML = "";
  const totalAmountRef = document.getElementById("totalAmount");
  totalAmountRef.innerHTML = "";
  calcTotalAmount();
  renderBasket();
}

function substractItemFromBasket(basketIndex) {
  if (basket[basketIndex].amount >= 1) {
    basket[basketIndex].amount = basket[basketIndex].amount - 1;
    renderBasket();
  }
  if (basket[basketIndex].amount == 0) {
    deleteFromBasket(basketIndex);
  }
}

function addItemToBasket(basketIndex) {
  basket[basketIndex].amount = basket[basketIndex].amount + 1;
  renderBasket();
}

//#endregion
//#region calc total amount
function calcTotalAmount() {
  const totalAmountRef = document.getElementById("totalAmount");
  const totalCalcAmount = basket.reduce((sum, item) => {return sum + item.price * item.amount + 5;}, 0).toFixed(2);
  totalAmountRef.innerHTML = totalCalcAmount + "€";
}

//#endregion
//#region open dialog on order
function openDialog() {
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    const element = basket[basketIndex];
    element.amount = 1;
  }
  const totalAmountRef = document.getElementById("totalAmount");  
  if (totalAmountRef.innerHTML.includes(".")) {
    const optionTargetRef = document.getElementById("basketOptionsTarget");
    optionTargetRef.innerHTML = "";
    totalAmountRef.innerHTML = "";
    basket.splice(0, basket.length);
    const dialogRef = document.getElementById("dialogPopup");
    dialogRef.showModal();
  } 
}

function closeDialog() {
  const dialogRef = document.getElementById("dialogPopup");
  dialogRef.close();
}

//#endregion
//#region overlay
function showOverlay() {
  const overlayRef = document.getElementById("overlay-basket-resp");
  overlayRef.classList.remove("overlay-display-none");
  overlayRef.classList.add("overlay-display-block");
  const basketOverlayRef = document.getElementById("shoppingcart-resp");
  basketOverlayRef.classList.add("basket-resp-overlay");
}

function hideOverlay() {
  const overlayRef = document.getElementById("overlay-basket-resp");
  overlayRef.classList.remove("overlay-display-block");
  overlayRef.classList.add("overlay-display-none");
  const basketOverlayRef = document.getElementById("shoppingcart-resp");
  basketOverlayRef.classList.remove("basket-resp-overlay");
}

// #endregion
// #endregion
