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
function renderBasket() {
  const optionTargetRef = document.getElementById("basketOptionsTarget");
  optionTargetRef.innerHTML = "";
  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    optionTargetRef.innerHTML += renderOptionTarget(basketIndex);
    getPizzaBasketTemplates(basketIndex);
  }
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

//#endregion

//#endregion
