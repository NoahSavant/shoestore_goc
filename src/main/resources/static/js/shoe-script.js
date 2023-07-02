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

        total();
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
  var parentElement = document.getElementById('c'+id);
  if (parentElement) {
    var numberElement = parentElement.querySelector('.App_cartItemCountNumber_1Evq9');
    var number = Number(numberElement.textContent) + 1;
    numberElement.textContent = number.toString();
    total();
  }
}

function decrease(id) {
  var parentElement = document.getElementById('p'+id);
  if (parentElement) {
    var parentElement = document.getElementById('c'+id);
    if (parentElement) {
      var numberElement = parentElement.querySelector('.App_cartItemCountNumber_1Evq9');
      var number = Number(numberElement.textContent) - 1;
      if(number == 0) {
        numberElement.textContent = '1';
        changeToActive(id);
      }else {
        numberElement.textContent = number.toString();
      }
      total();
    }
  }
}

function remove(id) {
  var Element = document.getElementById('c'+id);
  var numberElement = Element.querySelector('.App_cartItemCountNumber_1Evq9');
  numberElement.textContent = '1';
  changeToActive(id);
  total();
}

function total() {
  var parentElement = document.getElementById('cart');
  var childElements = parentElement.children;
  var total = 0;
  for (var i = 0; i < childElements.length; i++) {
      if(childElements[i].style.display == 'block'){
        var number = childElements[i].querySelector('.App_cartItemCountNumber_1Evq9');
        var value = childElements[i].querySelector('.cartItemPrice');
        total = total + Number(number.textContent)*Number(value.textContent.replace('$', ''));
      }
  }
  var totalElement = document.getElementById('total');
  total = total.toFixed(2);
  totalElement.textContent = '$' + total.toString();
}