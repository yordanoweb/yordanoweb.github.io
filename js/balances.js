function BalancesForm(props) {
  const defaultAssets = ['BNB', 'Asset1', 'Asset2', 'Asset3'];
  const defaultUsdtPrices = ['0', '0', '0', '0'];
  const defaultInitial = ['0', '0', '0', '0'];
  const defaultFinal = ['0', '0', '0', '0'];

  const storedAssets = localStorage.getItem('assets');
  const storedUsdtPrices = localStorage.getItem('usdtPrices');
  const storedInitial = localStorage.getItem('initialBalances');
  const storedFinal = localStorage.getItem('finalBalances');

  const [assets, setAssets] = storedAssets ? _useState(JSON.parse(storedAssets)) : _useState(defaultAssets);
  const [usdtPrices, setUsdtPrices] = storedUsdtPrices ? _useState(JSON.parse(storedUsdtPrices)) : _useState(defaultUsdtPrices);
  const [initialBalances, setInitialBalances] = storedInitial ? _useState(JSON.parse(storedInitial)) : _useState(defaultInitial);
  const [finalBalances, setFinalBalances] = storedFinal ? _useState(JSON.parse(storedFinal)) : _useState(defaultFinal);

  // Optionally validate the parsed assets
  if (!Array.isArray(assets)) {
    console.error("Parsed assets should be an array");
    setAssets(defaultAssets);
  }

  // Optionally validate the parsed USDT prices 
  if (!Array.isArray(usdtPrices)) {
    console.error("Parsed USDT prices should be an array");
    setUsdtPrices(defaultUsdtPrices);
  }

  // Optionally validate the parsed initial balances
  if (!Array.isArray(initialBalances)) {
    console.error("Parsed initial balances should be an array");
    setInitialBalances(defaultInitial);
  }

  // Optionally validate the parsed final balances
  if (!Array.isArray(finalBalances)) {
    console.error("Parsed final balances should be an array");
    setFinalBalances(defaultFinal);
  }

  const updateAssets = (index, ev) => {
    const newAssets = [...assets]; // Create a copy of the current values
    newAssets[index] = ev.target.value; // Update the specific index with the new value
    setAssets(newAssets);
    localStorage.setItem('assets', JSON.stringify(newAssets)); // Set the new state
  }

  const updateUsdtPrices = (index, ev) => {
    const newPrices = [...usdtPrices]; // Create a copy of the current values
    newPrices[index] = ev.target.value; // Update the specific index with the new value
    setUsdtPrices(newPrices);
    localStorage.setItem('usdtPrices', JSON.stringify(newPrices)); // Set the new state
  }

  const updateInitialBalances = (index, ev) => {
    const newBalances = [...initialBalances]; // Create a copy of the current values
    newBalances[index] = ev.target.value; // Update the specific index with the new value
    setInitialBalances(newBalances);
    localStorage.setItem('initialBalances', JSON.stringify(newBalances)); // Set the new state
  }

  const updateFinalBalances = (index, ev) => {
    const newBalances = [...finalBalances]; // Create a copy of the current values
    newBalances[index] = ev.target.value; // Update the specific index with the new value
    setFinalBalances(newBalances);
    localStorage.setItem('finalBalances', JSON.stringify(newBalances)); // Set the new state
  }

  return html`<div class="container">
    <h1 class="text-center mt-5 mb-5">Balance Calculator</h1>
    <div class="row mb-3 text-secondary">
      <div class="col">Asset</div>
      <div class="col">USDT Price</div>
      <div class="col">Initial</div>
      <div class="col">Final</div>
      <div class="col">Diff</div>
      <div class="col">Profit/Loss</div>
    </div>
    <form id="balance-form">
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(0, ev)} value=${assets[0]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt form-control" onInput=${(ev) => updateUsdtPrices(0, ev)} value=${usdtPrices[0]} />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(0, ev)} value=${initialBalances[0]} />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(0, ev)} value=${finalBalances[0]} />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(1, ev)} value=${assets[1]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(1, ev)} value=${usdtPrices[1]} />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(1, ev)} value=${initialBalances[1]} />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(1, ev)} value=${finalBalances[1]} />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(2, ev)} value=${assets[2]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(2, ev)} value=${usdtPrices[2]} />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(2, ev)} value=${initialBalances[2]} />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(2, ev)} value=${finalBalances[2]} />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(3, ev)} value=${assets[3]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(3, ev)} value=${usdtPrices[3]} />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(3, ev)} value=${initialBalances[3]} />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(3, ev)} value=${finalBalances[3]} />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </form>
    <div class="row">
      <div class="col-10">
        <h3>TOTAL</h3>
      </div>
      <div class="col-1">
        <h3 class="text-secondary"></h3>
      </div>
    </div>
  </div>`;
}

