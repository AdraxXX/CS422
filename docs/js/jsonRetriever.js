
// Retrieving Covid19 data from www.covidactnow.org -- updated daily
// For data definitions, refer to: https://apidocs.covidactnow.org/data-definitions/
// This function downloads retrieved json files to local drive
function downloadObjectAsJson(exportObj, exportName){
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href",     dataStr);
	downloadAnchorNode.setAttribute("download", exportName + ".json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}
// variable "state" gets the value of the state on which the user selects
// e.g. if the users selects Illinois:
let selectedState
let stateInUS = 'IL'
$.getJSON('https://api.covidactnow.org/v2/state/' + stateInUS + '.json?apiKey=fd83b18692ed463d8214d3da82c14837', function(data_state) {
	console.log(state + " stats:")
	selectedState=data_state
	// These are the tags that I found useful -- involves some stats that we did not consider
	console.log("Total population:", data_state.population)
	console.log("Total number of cases:", data_state.actuals.cases)
	console.log("Number of new cases:", data_state.actuals.newCases)
	console.log("Total number of deaths:", data_state.actuals.deaths)
	console.log("Number of new deaths:", data_state.actuals.newDeaths)
	console.log("Total number of contact tracers:", data_state.actuals.contactTracers)
	console.log("Total number of negative tests:", data_state.actuals.negativeTests)
	console.log("Total number of positive tests:", data_state.actuals.positiveTests)
	console.log("Total number of vaccinations completed:", data_state.actuals.vaccinationsCompleted)
	console.log("Total number of vaccinations initiated:", data_state.actuals.vaccinationsInitiated)
	console.log("Total number of vaccines administered:", data_state.actuals.vaccinesAdministered)
	console.log("Total number of vaccines distributed:", data_state.actuals.vaccinesDistributed)
	console.log("Total number of Hospital Beds:", data_state.actuals.hospitalBeds.capacity)
	console.log("Number of beds assigned to Covid patients:", data_state.actuals.hospitalBeds.currentUsageCovid)
	console.log("Total number of beds used:", data_state.actuals.hospitalBeds.currentUsageTotal)
	console.log("Total number of ICU beds:", data_state.actuals.icuBeds.capacity)
	console.log("Number of ICU beds assigned to Covid patients:", data_state.actuals.icuBeds.currentUsageTotal)
	console.log("Total number of ICU beds used:", data_state.actuals.icuBeds.currentUsageCovid)
	console.log("Overall risk level:", data_state.riskLevels.overall)

	// in case downloading the state's json file is needed:
	// downloadObjectAsJson(data_state, 'state_data')
																																}
	);
function returnState(){
	return data_state;
}

// variable "county" gets the value of the county that the user selects within a state
// e.g. if the users selects Cook County in Illinois:
let county = "Cook County"
let county_data
$.getJSON('https://api.covidactnow.org/v2/county/' + stateInUS + '.json?apiKey=fd83b18692ed463d8214d3da82c14837', function(data_county) {
	for(let key in data_county) {
		if (data_county[key].county === county) {
			console.log(county + " stats:")
			county_data=data_county[key]
		    console.log("Total population:", data_county[key].population)
		    console.log("Total number of cases:", data_county[key].actuals.cases)
		    console.log("Number of new cases:", data_county[key].actuals.newCases)
		    console.log("Total number of deaths:", data_county[key].actuals.deaths)
		    console.log("Number of new deaths:", data_county[key].actuals.newDeaths)
		    // console.log("Total number of contact tracers:", data[key].actuals.contactTracers) //returns null
		    // console.log("Total number of negative tests:", data[key].actuals.negativeTests) //returns null
		    // console.log("Total number of positive tests:", data[key].actuals.positiveTests) //returns null
		    console.log("Total number of vaccinations completed:", data_county[key].actuals.vaccinationsCompleted)
		    console.log("Total number of vaccinations initiated:", data_county[key].actuals.vaccinationsInitiated)
		    console.log("Total number of vaccines administered:", data_county[key].actuals.vaccinesAdministered)
		    // console.log("Total number of vaccines distributed:", data[key].actuals.vaccinesDistributed) //returns null
		    console.log("Total number of Hospital Beds:", data_county[key].actuals.hospitalBeds.capacity)
		    console.log("Number of beds assigned to Covid patients:", data_county[key].actuals.hospitalBeds.currentUsageCovid)
		    console.log("Total number of beds used:", data_county[key].actuals.hospitalBeds.currentUsageTotal)
		    console.log("Total number of ICU beds:", data_county[key].actuals.icuBeds.capacity)
		    console.log("Number of ICU beds assigned to Covid patients:", data_county[key].actuals.icuBeds.currentUsageTotal)
		    console.log("Total number of ICU beds used:", data_county[key].actuals.icuBeds.currentUsageCovid)
		    console.log("Overall risk level:", data_county[key].riskLevels.overall)

	// in case downloading the county's json file is needed:
    // downloadObjectAsJson(data_county[key], 'county_data')

			}
		}
																																	}
	);
	function dataCounty(key){
		return county_data
	}
	let usData;
// this part retrieves aggregate covid stats for the whole United States
$.getJSON('https://api.covidactnow.org/v2/country/US.json?apiKey=fd83b18692ed463d8214d3da82c14837', function(data_us) {
	console.log("US aggregated stats:")
	usData=data_us;
	console.log("Total population:", data_us.population)
	console.log("Total number of cases:", data_us.actuals.cases)
	console.log("Number of new cases:", data_us.actuals.newCases)
	console.log("Total number of deaths:", data_us.actuals.deaths)
	console.log("Number of new deaths:", data_us.actuals.newDeaths)
	console.log("Total number of contact tracers:", data_us.actuals.contactTracers)
	console.log("Total number of negative tests:", data_us.actuals.negativeTests)
	console.log("Total number of positive tests:", data_us.actuals.positiveTests)
	console.log("Total number of vaccinations completed:", data_us.actuals.vaccinationsCompleted)
	console.log("Total number of vaccinations initiated:", data_us.actuals.vaccinationsInitiated)
	console.log("Total number of vaccines administered:", data_us.actuals.vaccinesAdministered)
	console.log("Total number of vaccines distributed:", data_us.actuals.vaccinesDistributed)
	console.log("Total number of Hospital Beds:", data_us.actuals.hospitalBeds.capacity)
	console.log("Number of beds assigned to Covid patients:", data_us.actuals.hospitalBeds.currentUsageCovid)
	console.log("Total number of beds used:", data_us.actuals.hospitalBeds.currentUsageTotal)
	console.log("Total number of ICU beds:", data_us.actuals.icuBeds.capacity)
	console.log("Number of ICU beds assigned to Covid patients:", data_us.actuals.icuBeds.currentUsageTotal)
	console.log("Total number of ICU beds used:", data_us.actuals.icuBeds.currentUsageCovid)
	console.log("Overall risk level:", data_us.riskLevels.overall)

	// in case downloading the US json file is needed:
	// downloadObjectAsJson(data_us, 'us_data')
																																});
	function returnUSData(){
		return usData
	}