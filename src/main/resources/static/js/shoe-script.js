function changeToInactive(id) {
    var parentElement = document.getElementById(id);
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
      }
    }
  }