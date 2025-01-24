function BalancesForm(props) {
  const defaultCoins = ['binancecoin', 'bitcoin', 'ethereum'];
  const defaultAssets = ['BNB', 'Asset1', 'Asset2', 'Asset3'];
  const defaultUsdtPrices = ['0', '0', '0', '0'];
  const defaultInitial = ['0', '0', '0', '0'];
  const defaultFinal = ['0', '0', '0', '0'];

  const storedCoins = localStorage.getItem('coins') ? localStorage.getItem('coins') : defaultCoins;
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
  };

  const updateUsdtPrices = (index, ev) => {
    const newPrices = [...usdtPrices]; // Create a copy of the current values
    newPrices[index] = ev.target.value; // Update the specific index with the new value
    setUsdtPrices(newPrices);
    localStorage.setItem('usdtPrices', JSON.stringify(newPrices)); // Set the new state
  };

  const updateInitialBalances = (index, ev) => {
    const newBalances = [...initialBalances]; // Create a copy of the current values
    newBalances[index] = ev.target.value; // Update the specific index with the new value
    setInitialBalances(newBalances);
    localStorage.setItem('initialBalances', JSON.stringify(newBalances)); // Set the new state
  };

  const updateFinalBalances = (index, ev) => {
    const newBalances = [...finalBalances]; // Create a copy of the current values
    newBalances[index] = ev.target.value; // Update the specific index with the new value
    setFinalBalances(newBalances);
    localStorage.setItem('finalBalances', JSON.stringify(newBalances)); // Set the new state
  };

  const round = (places) => (n) => {
    return n.toFixed(places);
  };

  const total = () => {
		return finalBalances.reduce((res, finalBal, i) => {
			res = res + ((finalBal - initialBalances[i])*usdtPrices[i]);
			return res
		}, 0);
	};

  const initialInUSDT = () => {
		return initialBalances.reduce((res, initialBal, i) => {
			res = res + (initialBal*usdtPrices[i]);
			return res
		}, 0).toFixed(5);
  };

  const finalInUSDT = () => {
		return finalBalances.reduce((res, finalBal, i) => {
			res = res + (finalBal*usdtPrices[i]);
			return res
		}, 0).toFixed(5);
  };

  const round5 = round(5);
  const round8 = round(8);

  const exampleData = {
    "coins": ["binancecoin", "bitcoin", "ethereum"],
    "assets": ["BNB","BTC","ETH","USDT"],
    "usdtPrices": [0,0,0,0],
    "initialBalances": [0,0,0,0],
    "finalBalances": [0,0,0,0]
  };

  const pasteSavedData = (ev) => {
    const expectedProperties = ['coins', 'assets', 'usdtPrices', 'initialBalances', 'finalBalances'];
    const rawJSON = ev.clipboardData.getData("text");
    let parsedJSON;

    try {
      parsedJSON = JSON.parse(rawJSON);
    } catch (jsonParseEx) {
      alert("Pasted data does not have the right format");
      return;
    }

    const objectCorrectlyFormatted = expectedProperties.reduce((acc, prop) => {
      const propertyExists = prop in parsedJSON;
      const isArray = Array.isArray(parsedJSON[prop]);
      const hasLengthFour = isArray && parsedJSON[prop].length >= 3;
      return acc && propertyExists && isArray && hasLengthFour;
    }, true);

    if (!objectCorrectlyFormatted) {
      alert("There are missing properties at pasted data");
      return;
    }

    // Save the new state
    localStorage.setItem('coins', JSON.stringify(parsedJSON.coins));
    localStorage.setItem('assets', JSON.stringify(parsedJSON.assets));
    localStorage.setItem('usdtPrices', JSON.stringify(parsedJSON.usdtPrices));
    localStorage.setItem('initialBalances', JSON.stringify(parsedJSON.initialBalances));
    localStorage.setItem('finalBalances', JSON.stringify(parsedJSON.finalBalances));

  };

  const copyDataToClipboard = () => {
    const _storedCoins = JSON.parse(localStorage.getItem('coins'));
    const _storedAssets = JSON.parse(localStorage.getItem('assets'));
    const _storedUsdtPrices = JSON.parse(localStorage.getItem('usdtPrices'));
    const _storedInitial = JSON.parse(localStorage.getItem('initialBalances'));
    const _storedFinal = JSON.parse(localStorage.getItem('finalBalances'));

    const dataToCopy = { ...exampleData };
    dataToCopy.assets = _storedAssets;
    dataToCopy.usdtPrices = _storedUsdtPrices;
    dataToCopy.initialBalances = _storedInitial;
    dataToCopy.finalBalances = _storedFinal;

    window.navigator.clipboard.writeText(JSON.stringify(dataToCopy))
        .then(() => {
            alert('Copied to clipboard!'); // Notify user
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Copy failed!'); // Notify user of failure
        });
  };

  // Fetch current live prices for more accurate calcs
  _useEffect(() => {

    const symbolsToFind = assets.map((c) => c.toLowerCase()).filter((c) => c !== 'usdt');

    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then(response => response.json())
      .then(allCoins => {
        return allCoins.filter((c) => storedCoins.includes(c.id));
      })
      .then(filteredCoins => {
        const coinIds = filteredCoins.map(coin => coin.id);
        return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd`);
      })
      .then(response => response.json())
      .then(prices => {
        console.log(prices);
      })
      .catch(error => console.error('Error:', error));

    // Optional: Any cleanup code
    return () => {};

  }, []);

  return html`
  <div class="container">
    <h1 class="text-center mt-5 mb-5">Balance Compare</h1>
    <table class="table table-borderless">
      <thead>
        <tr class="text-secondary">
          <th>Asset</th>
          <th>USDT Price</th>
          <th>Initial</th>
          <th>Final</th>
          <th>Diff</th>
          <th>Profit/Loss</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(0, ev)} value=${assets[0]} />
          </td>
          <td>
            <input type="text" class="asset-usdt form-control" onInput=${(ev) => updateUsdtPrices(0, ev)} value=${usdtPrices[0]} />
          </td>
          <td>
            <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(0, ev)} value=${initialBalances[0]} />
          </td>
          <td>
            <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(0, ev)} value=${finalBalances[0]} />
          </td>
          <td class="diff align-middle">${round8(finalBalances[0] - initialBalances[0])}</td>
          <td class="profit align-middle">${round5((finalBalances[0] - initialBalances[0]) * usdtPrices[0])}</td>
        </tr>
        <tr>
          <td>
            <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(1, ev)} value=${assets[1]} />
          </td>
          <td>
            <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(1, ev)} value=${usdtPrices[1]} />
          </td>
          <td>
            <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(1, ev)} value=${initialBalances[1]} />
          </td>
          <td>
            <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(1, ev)} value=${finalBalances[1]} />
          </td>
          <td class="diff align-middle">${round8(finalBalances[1] - initialBalances[1])}</td>
          <td class="profit align-middle">${round5((finalBalances[1] - initialBalances[1]) * usdtPrices[1])}</td>
        </tr>
        <tr>
          <td>
            <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(2, ev)} value=${assets[2]} />
          </td>
          <td>
            <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(2, ev)} value=${usdtPrices[2]} />
          </td>
          <td>
            <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(2, ev)} value=${initialBalances[2]} />
          </td>
          <td>
            <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(2, ev)} value=${finalBalances[2]} />
          </td>
          <td class="diff align-middle">${round8(finalBalances[2] - initialBalances[2])}</td>
          <td class="profit align-middle">${round5((finalBalances[2] - initialBalances[2]) * usdtPrices[2])}</td>
        </tr>
        <tr>
          <td>
            <input type="text" class="asset-input form-control" onInput=${(ev) => updateAssets(3, ev)} value=${assets[3]} />
          </td>
          <td>
            <input type="text" class="asset-usdt-input form-control" onInput=${(ev) => updateUsdtPrices(3, ev)} value=${usdtPrices[3]} />
          </td>
          <td>
            <input type="text" class="asset-initial form-control" onInput=${(ev) => updateInitialBalances(3, ev)} value=${initialBalances[3]} />
          </td>
          <td>
            <input type="text" class="asset-final form-control" onInput=${(ev) => updateFinalBalances(3, ev)} value=${finalBalances[3]} />
          </td>
          <td class="diff align-middle">${round8(finalBalances[3] - initialBalances[3])}</td>
          <td class="profit align-middle">${round5((finalBalances[3] - initialBalances[3]) * usdtPrices[3])}</td>
        </tr>
        <tr>
          <td class="h3 p-2">TOTAL</td>
          <td class=""></td>
          <td class="h5 text-secondary"><div class="ps-2">${initialInUSDT()}</div></td>
          <td class="h5 text-secondary"><div class="ps-2">${finalInUSDT()}</div></td>
          <td class=""></td>
          <td class="h4">${round5(total())}</td>
        </tr>
      </tbody>
    </table>
    <div class="row p-3">
      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Save/Restore balances data
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="row">
                <textarea class="form-control" id="initial-data" rows="3" placeholder="Paste saved data here with this format:\n\n${JSON.stringify(exampleData)}"
                  onPaste=${(ev) => pasteSavedData(ev)}></textarea>
              </div>
              <div class="mt-3 col text-center align-self-center">
                <button class="btn btn-primary" onClick=${copyDataToClipboard}>Copy current data to clipboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

