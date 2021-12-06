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
        "testPositivityRatio" : 0.077, 
        "testPositivityRatioDetails" : {
            "source" : "other"
        }, 
        "caseDensity" : 36.6, 
        "contactTracerCapacityRatio" : 0.11, 
        "infectionRate" : 1.06, 
        "infectionRateCI90" : 0.1, 
        "icuCapacityRatio" : 0.78, 
        "vaccinationsInitiatedRatio" : 0.711, 
        "vaccinationsCompletedRatio" : 0.6
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
        "cases" : 49044822, 
        "deaths" : 786964, 
        "positiveTests" : 49875057, 
        "negativeTests" : 612310452, 
        "contactTracers" : 66210, 
        "hospitalBeds" : {
            "capacity" : 750059, 
            "currentUsageTotal" : 582491, 
            "currentUsageCovid" : 58203
        }, 
        "icuBeds" : {
            "capacity" : 80010, 
            "currentUsageTotal" : 62230, 
            "currentUsageCovid" : 13395
        }, 
        "newCases" : 34572, 
        "newDeaths" : 161, 
        "vaccinesDistributed" : 580417105, 
        "vaccinationsInitiated" : 235698738, 
        "vaccinationsCompleted" : 198962520, 
        "vaccinesAdministered" : 470297846, 
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
    "lastUpdatedDate" : "2021-12-06", 
    "url" : null
}