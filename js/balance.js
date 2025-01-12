;(function balanceMainFunction() {

  // Parent form element
  const formEl = document.getElementById("balance-form");

  function getAssetInputs() {
    const inputs = [];

    // Get all div elements with class 'row' within the parent form
    const inputElements = formEl.querySelectorAll('input.asset-input');

    // Loop through each row
    inputElements.forEach(input => {
      inputs.push(input);
    });

    return inputs;
  }

  function updateAssets() {
    const inputs = getAssetInputs();
    const values = [];
    inputs.forEach(input => {
      values.push(input.value);
    });
    localStorage.setItem("assets", JSON.stringify(values));
  }

  ///////////////////////////////////////////////////
  // THE ACTION MOVIE STARTS HERE...
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // Get assets from local storage
  ///////////////////////////////////////////////////
  const storedAssets = JSON.parse(localStorage.getItem("assets"));

  if (storedAssets) {
    // Loop through each input and set retrieved asset from storage
    getAssetInputs(formEl).forEach((input, i) => {
      input.value = storedAssets[i];
      input.addEventListener('input', updateAssets);
    });
  }

})()
