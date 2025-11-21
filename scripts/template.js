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
                <button onclick="pushPizzaIntoBasket(${pizzaIndex}); calcTotalAmount();" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderPizzaOptionTarget(pizzaIndex) {
  return ` <section id="singleBasketOptions(${pizzaIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${pizzaIndex})" class="single-option-header"><p id="singleBasketOptionAmount(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].name}</p></header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${pizzaIndex})"><button onclick="substractItemFromBasket(${pizzaIndex}); calcTotalAmount();" id="subtractBtn(${pizzaIndex})" class="calc-btns">-</button></section>
               <section id="singlePizzaAmountTarget(${pizzaIndex})"><p id="singleBasketOptionAmount(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].amount}</p></section>
               <section id="singleOptionAddBtnTarget(${pizzaIndex})"><button onclick="addItemToBasket(${pizzaIndex}); calcTotalAmount();" id="addBtn(${pizzaIndex})" class="calc-btns">+</button></section>
               <section id="singlePizzaPriceTarget(${pizzaIndex})"><p id="singleBasketOptionPrice(${pizzaIndex})" class="single-option-text">${basket[pizzaIndex].price}</p></section>
               <section id="singleOptionDeleteBtnTarget(${pizzaIndex})"><button onclick="deleteFromBasket(${pizzaIndex})" id="deleteBtn(${pizzaIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button></section>`;
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
                <button onclick="pushPastaIntoBasket(${pastaIndex}); calcTotalAmount();" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderPastaOptionTarget(pastaIndex) {
  return `   <section id="singleBasketOptions(${pastaIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${pastaIndex})" class="single-option-header"><p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[pastaIndex].name}</p></header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${pastaIndex})"><button onclick="substractItemFromBasket(${pastaIndex}); calcTotalAmount();" id="subtractBtn(${pastaIndex})" class="calc-btns">-</button></section>
               <section id="singlePastaAmountTarget(${pastaIndex})"><p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[pastaIndex].amount}</p></section>
               <section id="singleOptionAddBtnTarget(${pastaIndex})"><button onclick="addItemToBasket(${pastaIndex}); calcTotalAmount();" id="addBtn(${pastaIndex})" class="calc-btns">+</button></section>
               <section id="singlePastaPriceTarget(${pastaIndex})"><p id="singleBasketOptionPrice(${pastaIndex})" class="single-option-text">${basket[pastaIndex].price}</p></section>
               <section id="singleOptionDeleteBtnTarget(${pastaIndex})"><button onclick="deleteFromBasket(${pastaIndex})" id="deleteBtn(${pastaIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button></section>
             </section>`;
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
                <button onclick="pushDesertIntoBasket(${desertIndex}); calcTotalAmount();" id="addBtn" class="add-btn">+</button>
            </section>`;
}

function renderDesertOptionTarget(desertIndex) {
  return ` <section id="singleBasketOptions(${desertIndex})" class="single-basket-option-container">
           <header id="singleBasketOptionName(${desertIndex})" class="single-option-header"><p id="singleBasketOptionAmount(${desertIndex})" class="single-option-text">${basket[desertIndex].name}</p> </header>
             <section class="subsection-single-basket-option">
              <section id="singleOptionSubtractBtnTarget(${desertIndex})"><button onclick="substractItemFromBasket(${desertIndex}); calcTotalAmount();" id="subtractBtn(${desertIndex})" class="calc-btns">-</button></section>
               <section id="singleDesertAmountTarget(${desertIndex})"><p id="singleBasketOptionAmount(${pastaIndex})" class="single-option-text">${basket[desertIndex].amount}</p></section>
               <section id="singleOptionAddBtnTarget(${desertIndex})"><button onclick="addItemToBasket(${desertIndex}); calcTotalAmount();" id="addBtn(${desertIndex})" class="calc-btns">+</button></section>
               <section id="singleDesertPriceTarget(${desertIndex})"><p id="singleBasketOptionPrice(${desertIndex})" class="single-option-text">${basket[desertIndex].price}</p></section>
               <section id="singleOptionDeleteBtnTarget(${desertIndex})"><button onclick="deleteFromBasket(${desertIndex})" id="deleteBtn(${desertIndex})" class="trash-btn"><img class="trash-icon" src="./assets/img/icons/recycle-bin.png" alt=""></button></section>`;
}

//#endregion
