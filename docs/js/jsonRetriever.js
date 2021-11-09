let apiKey = 'fd83b18692ed463d8214d3da82c14837';

fetch('https://github.com/AdraxXX/CS422/tree/main/docs/data/usDaily.json')
.then(response => {
	if (!response.ok) {
		throw new Error("HTTP error " + response.status);
	}
	return response.json();
})
.then(json => {
	this.users = json;
})
.catch(function () {
	this.dataError = true;
})

getStateData = (state) => {
	fetch('https://api.covidactnow.org/v2/state/' + state + '.json?apiKey=' + apiKey)
  	.then(response => response.json())
  	.then(data => console.log(data));
}

getOldStateData = (state) => {
	fetch('https://api.covidactnow.org/v2/state/' + state + '.timeseries.json?apiKey=' + apiKey)
  	.then(response => response.json())
  	.then(data => console.log(data));
}

getCurrentCountyData = (queryState) => {
	fetch('https://api.covidactnow.org/v2/county/' + queryState + '.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		countyCurrentData = data;
		state.changeState('searchScreen');
	});
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
	fetch('https://api.covidactnow.org/v2/state/' + queryState + '.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		stateCurrentData = data;
		state.changeState('searchScreen');
	});
}

getOldDataState = (queryState) => {
	state.changeState('loadingScreen');
	fetch('https://api.covidactnow.org/v2/state/' + queryState + '.timeseries.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		stateOldData = data;
		setTimeout(()=>{
			getCurrentDataState(queryState);
		}, 500); 
	});
}

getCurrentUSData = () => {
	fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		countryCurrentData = data;
		state.changeState('searchScreen');
	});
}

getAllOldUSData = () => {
	state.changeState('loadingScreen');
	fetch('https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=' + apiKey)
	.then(response => response.json())
  	.then(data => {
		countryOldData = data;
		setTimeout(()=>{
			getCurrentUSData();
		}, 500); 
	});
}