//#region Functions

//function to render in each dish info

function renderEachElement() {
  let pizzaTargetRef = document.getElementById("pizzaVariationTarget");
  for (let index = 0; index < options.length; index++) {
    pizzaTargetRef.innerHTML += renderEachPizza(index);
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
//#endregion
