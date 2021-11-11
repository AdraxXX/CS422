let apiKey = 'fd83b18692ed463d8214d3da82c14837';

getCurrentCountyData = (queryState) => {
	countyCurrentData = currentAllCountiesData.filter(State => State.state === queryState);
	state.changeState('searchScreen');
}

getOldCountyData = (queryState) => {
	currentCountyOptions = [];
	state.changeState('loadingScreen');
	fetch('https://api.covidactnow.org/v2/county/' + queryState + '.timeseries.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		countyOldData = data;
		var arrayLength = data.length;
		for (var i = 0; i < arrayLength; i++) {
			currentCountyOptions.push(data[i].county.toLowerCase());
		}
		setTimeout(()=>{
			getCurrentCountyData(queryState);
		}, 500);
	});
}

getCurrentDataState = (queryState) => {
	stateCurrentData = currentAllStatesData.filter(State => State.state === queryState);
	state.changeState('searchScreen');
}

getOldDataState = (queryState) => {
	console.log(queryState)
	state.changeState('loadingScreen');
	stateOldData = historicalAllStatesData.filter(State => State.state === queryState);
	getCurrentDataState(queryState);
}
