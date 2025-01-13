function BalancesForm(props) {
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
          <input type="text" class="asset-input form-control" />
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
          <input type="text" class="asset-input form-control" />
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
          <input type="text" class="asset-input form-control" />
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
          <input type="text" class="asset-input form-control" />
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

