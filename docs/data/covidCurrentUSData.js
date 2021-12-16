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
        "testPositivityRatio" : 0.076, 
        "testPositivityRatioDetails" : {
            "source" : "other"
        }, 
        "caseDensity" : 36.2, 
        "contactTracerCapacityRatio" : 0.11, 
        "infectionRate" : 1.07, 
        "infectionRateCI90" : 0.1, 
        "icuCapacityRatio" : 0.79, 
        "vaccinationsInitiatedRatio" : 0.724, 
        "vaccinationsCompletedRatio" : 0.612
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
        "cases" : 50345670, 
        "deaths" : 801003, 
        "positiveTests" : 50022162, 
        "negativeTests" : 613566297, 
        "contactTracers" : 66210, 
        "hospitalBeds" : {
            "capacity" : 719892, 
            "currentUsageTotal" : 565140, 
            "currentUsageCovid" : 68716
        }, 
        "icuBeds" : {
            "capacity" : 81653, 
            "currentUsageTotal" : 64636, 
            "currentUsageCovid" : 15778
        }, 
        "newCases" : 144372, 
        "newDeaths" : 2058, 
        "vaccinesDistributed" : 599876215, 
        "vaccinationsInitiated" : 239975167, 
        "vaccinationsCompleted" : 202845886, 
        "vaccinesAdministered" : 488296089, 
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
    "lastUpdatedDate" : "2021-12-16", 
    "url" : null
}