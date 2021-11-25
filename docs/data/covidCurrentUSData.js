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
        "testPositivityRatio" : 0.062, 
        "testPositivityRatioDetails" : {
            "source" : "other"
        }, 
        "caseDensity" : 29.0, 
        "contactTracerCapacityRatio" : 0.14, 
        "infectionRate" : 1.07, 
        "infectionRateCI90" : 0.1, 
        "icuCapacityRatio" : 0.76, 
        "vaccinationsInitiatedRatio" : 0.698, 
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
        "cases" : 48064155, 
        "deaths" : 776197, 
        "positiveTests" : 49005724, 
        "negativeTests" : 601082588, 
        "contactTracers" : 66210, 
        "hospitalBeds" : {
            "capacity" : 718608, 
            "currentUsageTotal" : 550811, 
            "currentUsageCovid" : 52585
        }, 
        "icuBeds" : {
            "capacity" : 82050, 
            "currentUsageTotal" : 62442, 
            "currentUsageCovid" : 12095
        }, 
        "newCases" : 119889, 
        "newDeaths" : 1617, 
        "vaccinesDistributed" : 572190175, 
        "vaccinationsInitiated" : 231367686, 
        "vaccinationsCompleted" : 196168756, 
        "vaccinesAdministered" : 454447737, 
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
    "lastUpdatedDate" : "2021-11-25", 
    "url" : null
}