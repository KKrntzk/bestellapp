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
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
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
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
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
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
}

//#endregion
//#endregion
