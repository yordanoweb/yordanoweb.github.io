function BalancesForm(props) {
  const defaultAssets = ['BNB', 'Asset1', 'Asset2', 'Asset3'];
  const storedAssets = localStorage.getItem('assets');

  const assets = storedAssets ? JSON.parse(storedAssets) : defaultAssets;

  const updateAssets = (index, ev) => {
    const newAssets = [...assets]; // Create a copy of the current values
    newAssets[index] = ev.target.value; // Update the specific index with the new value
    localStorage.setItem('assets', newValues); // Set the new state
  }

  // Optionally validate the parsed result
  if (!Array.isArray(assets)) {
      throw new Error("Parsed assets should be an array");
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
          <input type="text" class="asset-usdt form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(1, ev)} value=${assets[1]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(2, ev)} value=${assets[2]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" />
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(3, ev)} value=${assets[3]} />
        </div>
        <div class="col">
          <input type="text" class="asset-usdt-input form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-initial form-control" />
        </div>
        <div class="col">
          <input type="text" class="asset-final form-control" />
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
