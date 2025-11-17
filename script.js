//#region variables

//#endregion

//#region Functions

//function to render in each dish info

function renderEachElement() {
  renderEachPizza();
  renderEachPasta();
  renderEachDesert();
}

//#region pizza functions

function renderEachPizza() {
  const pizzaVariationTargetRef = document.getElementById(
    "pizzaVariationTarget"
  );
  pizzaVariationTargetRef.innerHTML = "";
  for (let pizzaIndex = 0; pizzaIndex < options[0].pizza.length; pizzaIndex++) {
    const elementPizzaName = options[0].pizza[pizzaIndex].name;
    const elementPizzaPrice = options[0].pizza[pizzaIndex].price;
    const elementPizzaDescription = options[0].pizza[pizzaIndex].description;
    pizzaVariationTargetRef.innerHTML += renderSinglePizza(
      pizzaIndex,
      elementPizzaName,
      elementPizzaPrice,
      elementPizzaDescription
    );
  }
}
//#endregion

//#region pasta functions
function renderEachPasta() {
  const pastaVariationTargetRef = document.getElementById(
    "pastaVariationTarget"
  );
  pastaVariationTargetRef.innerHTML = "";
  for (let pastaIndex = 0; pastaIndex < options[0].pasta.length; pastaIndex++) {
    const elementPastaName = options[0].pasta[pastaIndex].name;
    const elementPastaPrice = options[0].pasta[pastaIndex].price;
    const elementPastaDescription = options[0].pasta[pastaIndex].description;
    pastaVariationTargetRef.innerHTML += renderSinglePasta(
      pastaIndex,
      elementPastaName,
      elementPastaPrice,
      elementPastaDescription
    );
  }
}
//#endregion

//#region desert functions
function renderEachDesert() {
  const desertVariationTargetRef = document.getElementById(
    "desertVariationTarget"
  );
  desertVariationTargetRef.innerHTML = "";
  for (
    let desertIndex = 0;
    desertIndex < options[0].desert.length;
    desertIndex++
  ) {
    const elementDesertName = options[0].desert[desertIndex].name;
    const elementDesertPrice = options[0].desert[desertIndex].price;
    const elementDesertDescription = options[0].desert[desertIndex].description;
    desertVariationTargetRef.innerHTML += renderSingleDesert(
      desertIndex,
      elementDesertName,
      elementDesertPrice,
      elementDesertDescription
    );
  }
}
//#endregion
//#region adding to basket

function renderBasket() {
  const optionTargetRef = document.getElementById("basketOptionsTarget");
  optionTargetRef.innerHTML = "";
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    if (basket[0].name.includes("Pizza")) {
      optionTargetRef.innerHTML += renderPizzaOptionTarget(basketIndex);
      getPizzaBasketTemplates(basketIndex);
    }
    if (basket[0].name.includes("Pasta")) {
      optionTargetRef.innerHTML += renderPastaOptionTarget(basketIndex);
      getPastaBasketTemplates(basketIndex);
    }
    if (basket[0].name.includes(!"Pizza" && !"Pasta")) {
      optionTargetRef.innerHTML += renderDesertOptionTarget(basketIndex);
      getDesertBasketTemplates(basketIndex);
    }
  }
}

function pushPizzaIntoBasket(pizzaIndex) {
  let foundElement = false;
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].pizza[pizzaIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {
    basket.push(options[0].pizza[pizzaIndex]);
  }
  renderBasket();
}

function getPizzaBasketTemplates(basketIndex) {
  const pizzaBasketNameTarget = document.getElementById(
    `singleBasketOptionName(${basketIndex})`
  );
  const pizzaBasketName = basket[basketIndex].name;
  pizzaBasketNameTarget.innerHTML = pizzaBasketName;
  const pizzaBasketPriceTarget = document.getElementById(
    `singlePizzaPriceTarget(${basketIndex})`
  );
  const pizzaBasketPrice = basket[basketIndex].price;
  pizzaBasketPriceTarget.innerHTML = pizzaBasketPrice;
  const pizzaBasketSubtractBtnTarget = document.getElementById(
    `singleOptionSubtractBtnTarget(${basketIndex})`
  );
  const pizzaBasketAmountTarget = document.getElementById(
    `singlePizzaAmountTarget(${basketIndex})`
  );
  const pizzaBasketAmount = basket[basketIndex].amount;
  pizzaBasketAmountTarget.innerHTML = pizzaBasketAmount;

  pizzaBasketSubtractBtnTarget.innerHTML =
    renderSinglePizzaSubtractBtn(basketIndex);
  const pizzaBasketAddBtnTarget = document.getElementById(
    `singleOptionAddBtnTarget(${basketIndex})`
  );
  pizzaBasketAddBtnTarget.innerHTML = renderSinglePizzaAddBtn(basketIndex);
  const pizzaBasketDeleteBtnTarget = document.getElementById(
    `singleOptionDeleteBtnTarget(${basketIndex})`
  );
  pizzaBasketDeleteBtnTarget.innerHTML =
    renderSinglePizzaDeleteBtn(basketIndex);
}

function pushPastaIntoBasket(pastaIndex) {
  let foundElement = false;
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].pasta[pastaIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {
    basket.push(options[0].pasta[pastaIndex]);
  }
  renderBasket();
}

function getPastaBasketTemplates(basketIndex) {
  const pastaBasketNameTarget = document.getElementById(
    `singleBasketOptionName(${basketIndex})`
  );
  const pastaBasketName = basket[basketIndex].name;
  pastaBasketNameTarget.innerHTML = pastaBasketName;
  const pastaBasketPriceTarget = document.getElementById(
    `singlePastaPriceTarget(${basketIndex})`
  );
  const pastaBasketPrice = basket[basketIndex].price;
  pastaBasketPriceTarget.innerHTML = pastaBasketPrice;
  const pastaBasketSubtractBtnTarget = document.getElementById(
    `singleOptionSubtractBtnTarget(${basketIndex})`
  );
  const pastaBasketAmountTarget = document.getElementById(
    `singlePastaAmountTarget(${basketIndex})`
  );
  const pastaBasketAmount = basket[basketIndex].amount;
  pastaBasketAmountTarget.innerHTML = pastaBasketAmount;
  pastaBasketSubtractBtnTarget.innerHTML =
    renderSinglePastaSubtractBtn(basketIndex);
  const pastaBasketAddBtnTarget = document.getElementById(
    `singleOptionAddBtnTarget(${basketIndex})`
  );
  pastaBasketAddBtnTarget.innerHTML = renderSinglePastaAddBtn(basketIndex);
  const pastaBasketDeleteBtnTarget = document.getElementById(
    `singleOptionDeleteBtnTarget(${basketIndex})`
  );
  pastaBasketDeleteBtnTarget.innerHTML =
    renderSinglePastaDeleteBtn(basketIndex);
}

function pushDesertIntoBasket(desertIndex) {
  let foundElement = false;
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (element.name == options[0].desert[desertIndex].name) {
      element.amount++;
      foundElement = true;
    }
  }
  if (!foundElement) {
    basket.push(options[0].desert[desertIndex]);
  }
  renderBasket();
}

function getDesertBasketTemplates(basketIndex) {
  const desertBasketNameTarget = document.getElementById(
    `singleBasketOptionName(${basketIndex})`
  );
  const desertBasketName = basket[basketIndex].name;
  desertBasketNameTarget.innerHTML = desertBasketName;
  const desertBasketPriceTarget = document.getElementById(
    `singleDesertPriceTarget(${basketIndex})`
  );
  const desertBasketPrice = basket[basketIndex].price;
  desertBasketPriceTarget.innerHTML = desertBasketPrice;
  const desertBasketSubtractBtnTarget = document.getElementById(
    `singleOptionSubtractBtnTarget(${basketIndex})`
  );
  const desertBasketAmountTarget = document.getElementById(
    `singleDesertAmountTarget(${basketIndex})`
  );
  const desertBasketAmount = basket[basketIndex].amount;
  desertBasketAmountTarget.innerHTML = desertBasketAmount;
  desertBasketSubtractBtnTarget.innerHTML =
    renderSingleDesertSubtractBtn(basketIndex);
  const desertBasketAddBtnTarget = document.getElementById(
    `singleOptionAddBtnTarget(${basketIndex})`
  );
  desertBasketAddBtnTarget.innerHTML = renderSingleDesertAddBtn(basketIndex);
  const desertBasketDeleteBtnTarget = document.getElementById(
    `singleOptionDeleteBtnTarget(${basketIndex})`
  );
  desertBasketDeleteBtnTarget.innerHTML =
    renderSingleDesertDeleteBtn(basketIndex);
}
//#endregion

//#region substract from Basket
function deleteFromBasket(basketIndex) {
  const singleBasketOptionTargetRef = document.getElementById(
    `singleBasketOptionAmount(${basketIndex})`
  );
  singleBasketOptionTargetRef.innerHTML = "";
}

function substractItemFromBasket(basketIndex) {
  if (basket[basketIndex].amount > 1) {
    basket[basketIndex].amount = basket[basketIndex].amount - 1;
    renderBasket();
  }
  if ((basket[basketIndex].amount = 1)) {
    deleteFromBasket(basketIndex);
  }
}

// const singleBasketOptionAmountTargetRef = document.getElementById(
//   `singleBasketOptionAmount(${basketIndex})`
// ).value;
// singleBasketOptionAmountTargetRef.value = value - 1;

//#endregion
//#endregion
