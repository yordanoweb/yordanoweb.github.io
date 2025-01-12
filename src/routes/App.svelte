<script>
	let assets = $state(["BNB", "Asset 1", "Asset 2", "Asset 3"]);
	let usdtPrices = $state(["0", "0", "0", "0"]);
	let initialBalance = $state(["0", "0", "0", "0"]);
	let finalBalance = $state(["0", "0", "0", "0"]);
	
	const storedAssets = JSON.parse(localStorage.getItem("assets"));
	const storedUsdtPrices = JSON.parse(localStorage.getItem("usdtPrices"));
	const storedInitialBalance = JSON.parse(localStorage.getItem("initialBalance"));
	const storedFinalBalance = JSON.parse(localStorage.getItem("finalBalance"));
	
	if(storedAssets) {
		assets.length = 0;
		storedAssets.forEach(a => {
			assets.push(a);
		});
	}

	if(storedUsdtPrices) {
		usdtPrices.length = 0;
		storedUsdtPrices.forEach(p => {
			usdtPrices.push(p);
		});
	}

	if(storedInitialBalance) {
		initialBalance.length = 0;
		storedInitialBalance.forEach(p => {
			initialBalance.push(p);
		});
	}

	if(storedFinalBalance) {
		finalBalance.length = 0;
		storedFinalBalance.forEach(p => {
			finalBalance.push(p);
		});
	}

	function updateAssetsStorage() {
		localStorage.setItem("assets", JSON.stringify(assets));
	}

	function updateUsdtPricesStorage() {
		localStorage.setItem("usdtPrices", JSON.stringify(usdtPrices));
	}

	function updateInitialBalanceStorage() {
		localStorage.setItem("initialBalance", JSON.stringify(initialBalance));
	}

	function updateFinalBalanceStorage() {
		localStorage.setItem("finalBalance", JSON.stringify(finalBalance));
	}

	function round8(n) {
		return Math.round(n * 10000000) / 10000000;
	}

	function total() {
		return finalBalance.reduce((res, finalBal, i) => {
			res = res + ((finalBal - initialBalance[i])*usdtPrices[i]);
			return res
		}, 0);
	}
</script>

<div class="container">
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
				<input type="text" class="asset-input form-control" bind:value={assets[0]} oninput={updateAssetsStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-usdt form-control" bind:value={usdtPrices[0]} oninput={updateUsdtPricesStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-initial form-control" bind:value={initialBalance[0]} oninput={updateInitialBalanceStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-final form-control" bind:value={finalBalance[0]} oninput={updateFinalBalanceStorage}>
			</div>
			<div class="col">{round8(finalBalance[0]-initialBalance[0])}</div>
			<div class="col">{round8((finalBalance[0]-initialBalance[0])*usdtPrices[0])}</div>
		</div>
		<div class="row mb-3">
			<div class="col">
				<input type="text" class="asset-input form-control" bind:value={assets[1]} oninput={updateAssetsStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-usdt-input form-control" bind:value={usdtPrices[1]} oninput={updateUsdtPricesStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-initial form-control" bind:value={initialBalance[1]} oninput={updateInitialBalanceStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-final form-control" bind:value={finalBalance[1]} oninput={updateFinalBalanceStorage}>
			</div>
			<div class="col">{round8(finalBalance[1]-initialBalance[1])}</div>
			<div class="col">{round8((finalBalance[1]-initialBalance[1])*usdtPrices[1])}</div>
		</div>
		<div class="row mb-3">
			<div class="col">
				<input type="text" class="asset-input form-control" bind:value={assets[2]} oninput={updateAssetsStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-usdt-input form-control" bind:value={usdtPrices[2]} oninput={updateUsdtPricesStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-initial form-control" bind:value={initialBalance[2]} oninput={updateInitialBalanceStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-final form-control" bind:value={finalBalance[2]} oninput={updateFinalBalanceStorage}>
			</div>
			<div class="col">{round8(finalBalance[2]-initialBalance[2])}</div>
			<div class="col">{round8((finalBalance[2]-initialBalance[2])*usdtPrices[2])}</div>
		</div>
		<div class="row mb-3">
			<div class="col">
				<input type="text" class="asset-input form-control" bind:value={assets[3]} oninput={updateAssetsStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-usdt-input form-control" bind:value={usdtPrices[3]} oninput={updateUsdtPricesStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-initial form-control" bind:value={initialBalance[3]} oninput={updateInitialBalanceStorage}>
			</div>
			<div class="col">
				<input type="text" class="asset-final form-control" bind:value={finalBalance[3]} oninput={updateFinalBalanceStorage}>
			</div>
			<div class="col">{round8(finalBalance[3]-initialBalance[3])}</div>
			<div class="col">{round8((finalBalance[3]-initialBalance[3])*usdtPrices[3])}</div>
		</div>
	</form>
	<div class="row">
		<div class="col-10">
			<h3>TOTAL</h3>
		</div>
		<div class="col-1">
			<h3 class="text-secondary">{round8(total())}</h3>
		</div>
	</div>
</div>

<style>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
</style>