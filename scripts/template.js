//#region pizza
function renderSinglePizza(
  pizzaIndex,
  elementPizzaName,
  elementPizzaPrice,
  elementPizzaDescription
) {
  return `  <section class="variation">
              <section class="variation-specs">
                <p id="variationName(${pizzaIndex})"><strong>${elementPizzaName}</strong></p>
                <p id="variationDescription(${pizzaIndex})">${elementPizzaDescription}</p>
                <p id="variationPrice(${pizzaIndex})">${elementPizzaPrice}</p><br>
              </section>
                <button onclick="pushPizzaIntoBasket(${pizzaIndex})" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderPizzaOptionTarget(pizzaIndex) {
  return ` <section id="singleBasketOptions(${pizzaIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${pizzaIndex})" class="single-option-header"></header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${pizzaIndex})"></section>
               <section id="singlePizzaAmountTarget(${pizzaIndex})">  x</section>
               <section id="singleOptionAddBtnTarget(${pizzaIndex})"></section>
               <section id="singlePizzaPriceTarget(${pizzaIndex})"></section>
               <section id="singleOptionDeleteBtnTarget(${pizzaIndex})"></section>`;
}

function renderSinglePizzaNameIntoBasket(pizzaIndex) {
  return `<p id="singleBasketOptionAmount(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].name}</p>`;
}

function renderSinglePizzaSubtractBtn(pizzaIndex) {
  return `<button id="subtractBtn(${pizzaIndex})" class="calc-btns">-</button>`;
}

function renderSinglePizzaAmount(pizzaIndex) {
  return `<p id="singleBasketOptionAmount(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].amount}</p>`;
}

function renderSinglePizzaAddBtn(pizzaIndex) {
  return `<button id="addBtn(${pizzaIndex})" class="calc-btns">+</button>`;
}

function renderSinglePizzaPrice(pizzaIndex) {
  return `<p id="singleBasketOptionPrice(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].price}</p>`;
}

function renderSinglePizzaDeleteBtn(pizzaIndex) {
  return `<button id="deleteBtn(${pizzaIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button>`;
}
//#endregion

//#region pasta
function renderSinglePasta(
  pastaIndex,
  elementPastaName,
  elementPastaPrice,
  elementPastaDescription
) {
  return `  <section class="variation">
              <section class="variation-specs">
                <p id="variationName(${pastaIndex})"><strong>${elementPastaName}</strong></p>
                <p id="variationDescription(${pastaIndex})">${elementPastaDescription}</p>
                <p id="variationPrice(${pastaIndex})">${elementPastaPrice}</p><br>
              </section>
                <button onclick="pushPastaIntoBasket(${pastaIndex})" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderPastaOptionTarget(pastaIndex) {
  return `   <section id="singleBasketOptions(${pastaIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${pastaIndex})" class="single-option-header"></header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${pastaIndex})"></section>
               <section id="singlePastaAmountTarget(${pastaIndex})"> x</section>
               <section id="singleOptionAddBtnTarget(${pastaIndex})"></section>
               <section id="singlePastaPriceTarget(${pastaIndex})"></section>
               <section id="singleOptionDeleteBtnTarget(${pastaIndex})"></section>
             </section>`;
}

function renderSinglePastaNameIntoBasket(pastaIndex) {
  return `<p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[pastaIndex].name}</p>`;
}

function renderSinglePastaSubtractBtn(pastaIndex) {
  return `<button id="subtractBtn(${pastaIndex})" class="calc-btns">-</button>`;
}

function renderSinglePastaAmount(pastaIndex) {
  return `<p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[pastaIndex].amount}</p>`;
}

function renderSinglePastaAddBtn(pastaIndex) {
  return `<button id="addBtn(${pastaIndex})" class="calc-btns">+</button>`;
}

function renderSinglePastaPrice(pastaIndex) {
  return `<p id="singleBasketOptionPrice(${pastaIndex})" class="single-option-text">${basket[pastaIndex].price}</p>`;
}

function renderSinglePastaDeleteBtn(pastaIndex) {
  return `<button id="deleteBtn(${pastaIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button>`;
}

//#endregion

//#region desert
function renderSingleDesert(
  desertIndex,
  elementDesertName,
  elementDesertPrice,
  elementDesertDescription
) {
  return `  <section class="variation">
              <section class="variation-specs">
                <p id="variationName(${desertIndex})"><strong>${elementDesertName}</strong></p>
                <p id="variationDescription(${desertIndex})">${elementDesertDescription}</p>
                <p id="variationPrice(${desertIndex})">${elementDesertPrice}</p><br>
              </section>
                <button onclick="pushDesertIntoBasket(${desertIndex})" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderDesertOptionTarget(desertIndex) {
  return ` <section id="singleBasketOptions(${desertIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${desertIndex})" class="single-option-header"></header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${desertIndex})"></section>
               <section id="singleDesertAmountTarget(${desertIndex})">  x</section>
               <section id="singleOptionAddBtnTarget(${desertIndex})"></section>
               <section id="singleDesertPriceTarget(${desertIndex})"></section>
               <section id="singleOptionDeleteBtnTarget(${desertIndex})"></section>`;
}

function renderSingleDesertNameIntoBasket(desertIndex) {
  return `<p id="singleBasketOptionAmount(${desertIndex})" class="single-option-text">${basket[desertIndex].name}</p>`;
}

function renderSingleDesertSubtractBtn(desertIndex) {
  return `<button id="subtractBtn(${desertIndex})" class="calc-btns">-</button>`;
}

function renderSingleDesertAmount(desertIndex) {
  return `<p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[desertIndex].amount}</p>`;
}

function renderSingleDesertAddBtn(desertIndex) {
  return `<button id="addBtn(${desertIndex})" class="calc-btns">+</button>`;
}

function renderSingleDesertPrice(desertIndex) {
  return `<p id="singleBasketOptionPrice(${desertIndex})" class="single-option-text">${basket[desertIndex].price}</p>`;
}

function renderSingleDesertDeleteBtn(desertIndex) {
  return `<button id="deleteBtn(${desertIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button>`;
}
//#endregion
