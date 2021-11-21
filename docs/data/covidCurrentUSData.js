let currentUSData = {
    "fips" : "0", 
    "country" : "US", 
    "state" : null, 
    "county" : null, 
    "level" : "country", 
    "lat" : null, 
    "locationId" : "iso1:us", 
    "long" : null, 
    "population" : 331486822, 
    "metrics" : {
        "testPositivityRatio" : 0.057, 
        "testPositivityRatioDetails" : {
            "source" : "other"
        }, 
        "caseDensity" : 27.9, 
        "contactTracerCapacityRatio" : 0.14, 
        "infectionRate" : 1.08, 
        "infectionRateCI90" : 0.1, 
        "icuCapacityRatio" : 0.77, 
        "vaccinationsInitiatedRatio" : 0.693, 
        "vaccinationsCompletedRatio" : 0.592
    }, 
    "riskLevels" : {
        "overall" : 3, 
        "testPositivityRatio" : 1, 
        "caseDensity" : 3, 
        "contactTracerCapacityRatio" : 1, 
        "infectionRate" : 1, 
        "icuCapacityRatio" : 1
    }, 
    "cdcTransmissionLevel" : 3, 
    "actuals" : {
        "cases" : 47661242, 
        "deaths" : 769643, 
        "positiveTests" : 48237882, 
        "negativeTests" : 586589259, 
        "contactTracers" : 66210, 
        "hospitalBeds" : {
            "capacity" : 775333, 
            "currentUsageTotal" : 605372, 
            "currentUsageCovid" : 50072
        }, 
        "icuBeds" : {
            "capacity" : 82344, 
            "currentUsageTotal" : 63464, 
            "currentUsageCovid" : 11618
        }, 
        "newCases" : 41669, 
        "newDeaths" : 333, 
        "vaccinesDistributed" : 567081775, 
        "vaccinationsInitiated" : 229837421, 
        "vaccinationsCompleted" : 196128496, 
        "vaccinesAdministered" : 449955588, 
        "vaccinesAdministeredDemographics" : null, 
        "vaccinationsInitiatedDemographics" : null
    }, 
    "annotations" : {
        "cases" : {
            "sources" : [
                {
                    "type" : "NYTimes", 
                    "url" : "https://github.com/nytimes/covid-19-data", 
                    "name" : "The New York Times"
                }
            ], 
            "anomalies" : []
        }, 
        "deaths" : {
            "sources" : [
                {
                    "type" : "NYTimes", 
                    "url" : "https://github.com/nytimes/covid-19-data", 
                    "name" : "The New York Times"
                }
            ], 
            "anomalies" : []
        }, 
        "positiveTests" : null, 
        "negativeTests" : null, 
        "contactTracers" : null, 
        "hospitalBeds" : null, 
        "icuBeds" : null, 
        "newCases" : null, 
        "newDeaths" : {
            "sources" : [], 
            "anomalies" : [
                {
                    "date" : "2020-06-25", 
                    "type" : "zscore_outlier", 
                    "original_observation" : 2466.0
                }
            ]
        }, 
        "vaccinesDistributed" : {
            "sources" : [
                {
                    "type" : "other", 
                    "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                    "name" : "Centers for Disease Control and Prevention"
                }
            ], 
            "anomalies" : []
        }, 
        "vaccinationsInitiated" : {
            "sources" : [
                {
                    "type" : "other", 
                    "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                    "name" : "Centers for Disease Control and Prevention"
                }
            ], 
            "anomalies" : []
        }, 
        "vaccinationsCompleted" : {
            "sources" : [
                {
                    "type" : "other", 
                    "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                    "name" : "Centers for Disease Control and Prevention"
                }
            ], 
            "anomalies" : []
        }, 
        "vaccinesAdministered" : {
            "sources" : [
                {
                    "type" : "other", 
                    "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                    "name" : "Centers for Disease Control and Prevention"
                }
            ], 
            "anomalies" : []
        }, 
        "testPositivityRatio" : null, 
        "caseDensity" : {
            "sources" : [
                {
                    "type" : "NYTimes", 
                    "url" : "https://github.com/nytimes/covid-19-data", 
                    "name" : "The New York Times"
                }
            ], 
            "anomalies" : []
        }, 
        "contactTracerCapacityRatio" : null, 
        "infectionRate" : {
            "sources" : [
                {
                    "type" : "NYTimes", 
                    "url" : "https://github.com/nytimes/covid-19-data", 
                    "name" : "The New York Times"
                }
            ], 
            "anomalies" : []
        }, 
        "infectionRateCI90" : {
            "sources" : [
                {
                    "type" : "NYTimes", 
                    "url" : "https://github.com/nytimes/covid-19-data", 
                    "name" : "The New York Times"
                }
            ], 
            "anomalies" : []
        }, 
        "icuCapacityRatio" : null, 
        "vaccinationsInitiatedRatio" : null, 
        "vaccinationsCompletedRatio" : null
    }, 
    "lastUpdatedDate" : "2021-11-21", 
    "url" : null
}