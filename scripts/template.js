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
                <button onclick="addItemToBasket()" id="addBtn" class="add-btn">+</button>
            </section>`;
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
