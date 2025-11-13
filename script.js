//#region variables
let basketOptions = [];
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
function addItemToBasket() {
  const addingItemTargetRef = document.getElementById("basketOptionsTarget");
  for (let pizzaIndex = 0; pizzaIndex < options[0].pizza.length; pizzaIndex++) {
    const pizzaBasketName = document.getElementById(
      `singleBasketOptionName(${pizzaIndex})`
    );
    const pizzaBasketPrice = document.getElementById(
      `singleBasketOptionPrice(${pizzaIndex})`
    );
    addingItemTargetRef.innerHTML = renderSingleOptionIntoBasket(
      pizzaIndex,
      pizzaBasketName,
      pizzaBasketPrice
    );
  }
}

function renderSingleOptionIntoBasket() {
  return `<section id="singleBasketOptions(${pizzaIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${pizzaIndex})" class="single-option-header">${pizzaBasketName}</header>
             <section class="subsection-single-basket-option">
               <button id="subtractBtn(${pizzaIndex})" class="calc-btns">-</button>
               <p id="singleBasketOptionAmount(${pizzaIndex})" class="single-option-text">nmb x</p>
               <button id="addBtn(${pizzaIndex})" class="calc-btns">+</button>
               <p id="singleBasketOptionPrice(${pizzaIndex})" class="single-option-text">${pizzaBasketPrice} €</p>
               <button id="deleteBtn(${pizzaIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button>
             </section>
          </section>`;
}

//#endregion
//#region basket functions
//function render single basket options into basket from array?

//#endregion

//#endregion
