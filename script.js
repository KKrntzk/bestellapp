//#region Functions

//function to render in each dish info

function renderEachElement() {
  let pizzaTargetRef = document.getElementById("pizzaVariationTarget");
  let pastaTargetRef = document.getElementById("pastaVariationTarget");
  let desertTargetRef = document.getElementById("desertVariationTarget");
  for (let index = 0; index < options.length; index++) {
    pizzaTargetRef.innerHTML += renderEachPizza(index);
    pastaTargetRef.innerHTML += renderEachPasta(index);
    desertTargetRef.innerHTML += renderEachDesert(index);
  }
}

//#region pizza functions

function renderEachPizza(index) {
  const pizzaVariationTargetRef = document.getElementById(
    "pizzaVariationTarget"
  );
  pizzaVariationTargetRef.innerHTML = "";
  for (
    let pizzaIndex = 0;
    pizzaIndex < options[index].pizza.length;
    pizzaIndex++
  ) {
    const elementPizzaName = options[index].pizza[pizzaIndex].name;
    const elementPizzaPrice = options[index].pizza[pizzaIndex].price;
    const elementPizzaDescription =
      options[index].pizza[pizzaIndex].description;
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
                <p id="variationName(${pizzaIndex})">${elementPizzaName}</p>
                <p id="variationDescription(${pizzaIndex})">${elementPizzaDescription}</p>
                <p id="variationPrice(${pizzaIndex})">${elementPizzaPrice}</p>
              </section>
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
}

//#endregion

//#region pasta functions
function renderEachPasta(index) {
  const pastaVariationTargetRef = document.getElementById(
    "pastaVariationTarget"
  );
  pastaVariationTargetRef.innerHTML = "";
  for (
    let pastaIndex = 0;
    pastaIndex < options[index].pasta.length;
    pastaIndex++
  ) {
    const elementPastaName = options[index].pasta[pastaIndex].name;
    const elementPastaPrice = options[index].pasta[pastaIndex].price;
    const elementPastaDescription =
      options[index].pasta[pastaIndex].description;
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
                <p id="variationName(${pastaIndex})">${elementPastaName}</p>
                <p id="variationDescription(${pastaIndex})">${elementPastaDescription}</p>
                <p id="variationPrice(${pastaIndex})">${elementPastaPrice}</p>
              </section>
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
}

//#endregion

//#region desert functions
function renderEachDesert(index) {
  const desertVariationTargetRef = document.getElementById(
    "desertVariationTarget"
  );
  desertVariationTargetRef.innerHTML = "";
  for (
    let desertIndex = 0;
    desertIndex < options[index].desert.length;
    desertIndex++
  ) {
    const elementDesertName = options[index].desert[desertIndex].name;
    const elementDesertPrice = options[index].desert[desertIndex].price;
    const elementDesertDescription =
      options[index].desert[desertIndex].description;
    desertVariationTargetRef.innerHTML += renderSingleDesert(
      desertIndex,
      elementDesertName,
      elementDesertPrice,
      elementDesertDescription
    );
  }
}

function renderSinglePasta(
  desertIndex,
  elementDesertName,
  elementDesertPrice,
  elementDesertDescription
) {
  return `  <section class="variation">
              <section class="variation-specs">
                <p id="variationName(${desertIndex})">${elementDesertName}</p>
                <p id="variationDescription(${desertIndex})">${elementDesertDescription}</p>
                <p id="variationPrice(${desertIndex})">${elementDesertPrice}</p>
              </section>
                <button id="addBtn" class="add-btn">+</button>
            </section>`;
}

//#endregion
//#endregion
