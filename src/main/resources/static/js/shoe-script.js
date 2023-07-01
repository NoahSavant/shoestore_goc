function changeToInactive(id) {
    var parentElement = document.getElementById('p'+id);
    if (parentElement) {
      var buttonElement = parentElement.querySelector('.App_shopItemButton_23FO1');
      if (buttonElement) {
        buttonElement.outerHTML = `
          <div class="App_inactive_19f0W App_shopItemButton_23FO1">
            <div class="App_shopItemButtonCover_1bH2R">
              <div class="App_shopItemButtonCoverCheckIcon_18IzJ"></div>
            </div>
          </div>
        `;
        var Element = document.getElementById('c'+id);
        Element.style.display = "block";

        var priceElement = parentElement.querySelector('.App_shopItemPrice_2SLiG');
        var totalElement = document.getElementById('total');
        var value = Number(priceElement.textContent.replace('$', ''));
        var total = Number(totalElement.textContent.replace('$', ''));
        total = total + value;
        total = total.toFixed(2);
        totalElement.textContent = '$' + total.toString();
      }
    }
}

function changeToActive(id) {
  var parentElement = document.getElementById('p'+id);
  if (parentElement) {
    var buttonElement = parentElement.querySelector('.App_shopItemButton_23FO1');
    if (buttonElement) {
      buttonElement.outerHTML = `
      <div class="App_shopItemButton_23FO1" th:onclick="|changeToInactive(`+ id + `)|">
      <p>ADD TO CART</p>
  </div>
      `;
      var Element = document.getElementById('c'+id);
      Element.style.display = 'none';
    }
  }
}

function increase(id) {
  var parentElement = document.getElementById('p'+id);
  if (parentElement) {
    var priceElement = parentElement.querySelector('.App_shopItemPrice_2SLiG');
    if (priceElement) {
      var totalElement = document.getElementById('total');
      var value = Number(priceElement.textContent.replace('$', ''));
      var total = Number(totalElement.textContent.replace('$', ''));
      total = total + value;
      total = total.toFixed(2);
      totalElement.textContent = '$' + total.toString();
    }
    var Element = document.getElementById('c'+id);
    var numberElement = Element.querySelector('.App_cartItemCountNumber_1Evq9');
    var number = Number(numberElement.textContent) + 1;
    numberElement.textContent = number.toString();
  }
}

function decrease(id) {
  var parentElement = document.getElementById('p'+id);
  if (parentElement) {
    var priceElement = parentElement.querySelector('.App_shopItemPrice_2SLiG');
    if (priceElement) {
      var totalElement = document.getElementById('total');
      var value = Number(priceElement.textContent.replace('$', ''));
      var total = Number(totalElement.textContent.replace('$', ''));
      total = Math.min(total - value);
      total = total.toFixed(2);
      totalElement.textContent = '$' + total.toString();
    }
  }
  var Element = document.getElementById('c'+id);
  var numberElement = Element.querySelector('.App_cartItemCountNumber_1Evq9');
  var number = Number(numberElement.textContent) - 1;
  if(number == 0) {
    numberElement.textContent = '1';
    changeToActive(id);
  }else {
    numberElement.textContent = number.toString();
  }
}

function remove(id) {
  var parentElement = document.getElementById('p'+id);
  var priceElement = parentElement.querySelector('.App_shopItemPrice_2SLiG');
  var Element = document.getElementById('c'+id);
  var totalElement = document.getElementById('total');
  var value = Number(priceElement.textContent.replace('$', ''));
  var total = Number(totalElement.textContent.replace('$', ''));
  var numberElement = Element.querySelector('.App_cartItemCountNumber_1Evq9');
  var total = Math.min(total - value*Number(numberElement.textContent), 0);
  console.log(total);
  total = total.toFixed(2);
  totalElement.textContent = '$' + total.toString();
  numberElement.textContent = 1;
  changeToActive(id);
}