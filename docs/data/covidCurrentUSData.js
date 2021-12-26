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
        "testPositivityRatio" : 0.091, 
        "testPositivityRatioDetails" : {
            "source" : "other"
        }, 
        "caseDensity" : 56.7, 
        "contactTracerCapacityRatio" : 0.07, 
        "infectionRate" : 1.15, 
        "infectionRateCI90" : 0.1, 
        "icuCapacityRatio" : 0.76, 
        "vaccinationsInitiatedRatio" : 0.729, 
        "vaccinationsCompletedRatio" : 0.618
    }, 
    "riskLevels" : {
        "overall" : 3, 
        "testPositivityRatio" : 1, 
        "caseDensity" : 3, 
        "contactTracerCapacityRatio" : 2, 
        "infectionRate" : 2, 
        "icuCapacityRatio" : 1
    }, 
    "cdcTransmissionLevel" : 3, 
    "actuals" : {
        "cases" : 52054982, 
        "deaths" : 814891, 
        "positiveTests" : 51683671, 
        "negativeTests" : 621588880, 
        "contactTracers" : 66210, 
        "hospitalBeds" : {
            "capacity" : 745924, 
            "currentUsageTotal" : 552088, 
            "currentUsageCovid" : 70844
        }, 
        "icuBeds" : {
            "capacity" : 80024, 
            "currentUsageTotal" : 61137, 
            "currentUsageCovid" : 15935
        }, 
        "newCases" : 58348, 
        "newDeaths" : 99, 
        "vaccinesDistributed" : 611897975, 
        "vaccinationsInitiated" : 241520561, 
        "vaccinationsCompleted" : 204740321, 
        "vaccinesAdministered" : 500222330, 
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
    "lastUpdatedDate" : "2021-12-26", 
    "url" : null
}