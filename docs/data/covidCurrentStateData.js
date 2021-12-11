let currentAllStatesData = [
    {
        "fips" : "02", 
        "country" : "US", 
        "state" : "AK", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ak", 
        "long" : null, 
        "population" : 731545, 
        "metrics" : {
            "testPositivityRatio" : 0.039, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 28.0, 
            "contactTracerCapacityRatio" : 0.23, 
            "infectionRate" : 0.89, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.639, 
            "vaccinationsCompletedRatio" : 0.553
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 152422, 
            "deaths" : 862, 
            "positiveTests" : 153804, 
            "negativeTests" : 2876146, 
            "contactTracers" : 235, 
            "hospitalBeds" : {
                "capacity" : 1618, 
                "currentUsageTotal" : 1216, 
                "currentUsageCovid" : 85
            }, 
            "icuBeds" : {
                "capacity" : 128, 
                "currentUsageTotal" : 105, 
                "currentUsageCovid" : 17
            }, 
            "newCases" : 443, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1307165, 
            "vaccinationsInitiated" : 467390, 
            "vaccinationsCompleted" : 404816, 
            "vaccinesAdministered" : 988502, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-09-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 44.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/alaska-ak"
    }, 
    {
        "fips" : "01", 
        "country" : "US", 
        "state" : "AL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-al", 
        "long" : null, 
        "population" : 4903185, 
        "metrics" : {
            "testPositivityRatio" : 0.051, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 10.4, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.91, 
            "vaccinationsInitiatedRatio" : 0.574, 
            "vaccinationsCompletedRatio" : 0.468
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 848672, 
            "deaths" : 16243, 
            "positiveTests" : 800366, 
            "negativeTests" : 5539023, 
            "contactTracers" : 404, 
            "hospitalBeds" : {
                "capacity" : 15283, 
                "currentUsageTotal" : 12048, 
                "currentUsageCovid" : 452
            }, 
            "icuBeds" : {
                "capacity" : 1555, 
                "currentUsageTotal" : 1412, 
                "currentUsageCovid" : 105
            }, 
            "newCases" : 592, 
            "newDeaths" : 40, 
            "vaccinesDistributed" : 7950160, 
            "vaccinationsInitiated" : 2815260, 
            "vaccinationsCompleted" : 2293071, 
            "vaccinesAdministered" : 5404729, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-25", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 144.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/alabama-al"
    }, 
    {
        "fips" : "05", 
        "country" : "US", 
        "state" : "AR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ar", 
        "long" : null, 
        "population" : 3017804, 
        "metrics" : {
            "testPositivityRatio" : 0.075, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.1, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.614, 
            "vaccinationsCompletedRatio" : 0.501
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 537461, 
            "deaths" : 8831, 
            "positiveTests" : 330711, 
            "negativeTests" : 3587736, 
            "contactTracers" : 790, 
            "hospitalBeds" : {
                "capacity" : 9328, 
                "currentUsageTotal" : 6992, 
                "currentUsageCovid" : 547
            }, 
            "icuBeds" : {
                "capacity" : 920, 
                "currentUsageTotal" : 790, 
                "currentUsageCovid" : 183
            }, 
            "newCases" : 1093, 
            "newDeaths" : 21, 
            "vaccinesDistributed" : 4915190, 
            "vaccinationsInitiated" : 1851780, 
            "vaccinationsCompleted" : 1511115, 
            "vaccinesAdministered" : 3633569, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-05-21", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 455.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/arkansas-ar"
    }, 
    {
        "fips" : "04", 
        "country" : "US", 
        "state" : "AZ", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-az", 
        "long" : null, 
        "population" : 7278717, 
        "metrics" : {
            "testPositivityRatio" : 0.139, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.0, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.03, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.655, 
            "vaccinationsCompletedRatio" : 0.557
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1307843, 
            "deaths" : 22947, 
            "positiveTests" : 1319512, 
            "negativeTests" : 10528597, 
            "contactTracers" : 396, 
            "hospitalBeds" : {
                "capacity" : 17110, 
                "currentUsageTotal" : 13726, 
                "currentUsageCovid" : 2869
            }, 
            "icuBeds" : {
                "capacity" : 2188, 
                "currentUsageTotal" : 1636, 
                "currentUsageCovid" : 651
            }, 
            "newCases" : 3924, 
            "newDeaths" : 93, 
            "vaccinesDistributed" : 12120920, 
            "vaccinationsInitiated" : 4766037, 
            "vaccinationsCompleted" : 4051274, 
            "vaccinesAdministered" : 9951733, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/arizona-az"
    }, 
    {
        "fips" : "06", 
        "country" : "US", 
        "state" : "CA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ca", 
        "long" : null, 
        "population" : 39512223, 
        "metrics" : {
            "testPositivityRatio" : 0.024, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.3, 
            "contactTracerCapacityRatio" : 0.31, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.803, 
            "vaccinationsCompletedRatio" : 0.645
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 5155484, 
            "deaths" : 75445, 
            "positiveTests" : 5147446, 
            "negativeTests" : 93399785, 
            "contactTracers" : 10600, 
            "hospitalBeds" : {
                "capacity" : 64665, 
                "currentUsageTotal" : 51962, 
                "currentUsageCovid" : 3677
            }, 
            "icuBeds" : {
                "capacity" : 7050, 
                "currentUsageTotal" : 5581, 
                "currentUsageCovid" : 848
            }, 
            "newCases" : 6580, 
            "newDeaths" : 71, 
            "vaccinesDistributed" : 72676305, 
            "vaccinationsInitiated" : 31730029, 
            "vaccinationsCompleted" : 25484575, 
            "vaccinesAdministered" : 61965503, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-09", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 60.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/california-ca"
    }, 
    {
        "fips" : "08", 
        "country" : "US", 
        "state" : "CO", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-co", 
        "long" : null, 
        "population" : 5758736, 
        "metrics" : {
            "testPositivityRatio" : 0.08, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 39.0, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 0.98, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.727, 
            "vaccinationsCompletedRatio" : 0.646
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 859186, 
            "deaths" : 9813, 
            "positiveTests" : 863668, 
            "negativeTests" : 11270574, 
            "contactTracers" : 1300, 
            "hospitalBeds" : {
                "capacity" : 11938, 
                "currentUsageTotal" : 8959, 
                "currentUsageCovid" : 1450
            }, 
            "icuBeds" : {
                "capacity" : 1311, 
                "currentUsageTotal" : 1067, 
                "currentUsageCovid" : 487
            }, 
            "newCases" : 2302, 
            "newDeaths" : 69, 
            "vaccinesDistributed" : 10472845, 
            "vaccinationsInitiated" : 4184882, 
            "vaccinationsCompleted" : 3722145, 
            "vaccinesAdministered" : 8975756, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 115.0
                    }, 
                    {
                        "date" : "2020-10-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 37.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/colorado-co"
    }, 
    {
        "fips" : "09", 
        "country" : "US", 
        "state" : "CT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ct", 
        "long" : null, 
        "population" : 3565287, 
        "metrics" : {
            "testPositivityRatio" : 0.073, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 56.7, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 1.35, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.63, 
            "vaccinationsInitiatedRatio" : 0.857, 
            "vaccinationsCompletedRatio" : 0.732
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 438599, 
            "deaths" : 8972, 
            "positiveTests" : 563731, 
            "negativeTests" : 11517914, 
            "contactTracers" : 860, 
            "hospitalBeds" : {
                "capacity" : 8164, 
                "currentUsageTotal" : 6816, 
                "currentUsageCovid" : 651
            }, 
            "icuBeds" : {
                "capacity" : 1025, 
                "currentUsageTotal" : 647, 
                "currentUsageCovid" : 150
            }, 
            "newCases" : 3280, 
            "newDeaths" : 26, 
            "vaccinesDistributed" : 7068025, 
            "vaccinationsInitiated" : 3053860, 
            "vaccinationsCompleted" : 2611504, 
            "vaccinesAdministered" : 6233719, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-10-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 555.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
                    }, 
                    {
                        "date" : "2020-04-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 197.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/connecticut-ct"
    }, 
    {
        "fips" : "11", 
        "country" : "US", 
        "state" : "DC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-dc", 
        "long" : null, 
        "population" : 705749, 
        "metrics" : {
            "testPositivityRatio" : 0.02, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.7, 
            "contactTracerCapacityRatio" : 0.29, 
            "infectionRate" : 1.28, 
            "infectionRateCI90" : 0.14, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.841, 
            "vaccinationsCompletedRatio" : 0.659
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 68702, 
            "deaths" : 1199, 
            "positiveTests" : 98707, 
            "negativeTests" : 3338904, 
            "contactTracers" : 268, 
            "hospitalBeds" : {
                "capacity" : 3478, 
                "currentUsageTotal" : 2806, 
                "currentUsageCovid" : 128
            }, 
            "icuBeds" : {
                "capacity" : 339, 
                "currentUsageTotal" : 274, 
                "currentUsageCovid" : 18
            }, 
            "newCases" : 242, 
            "newDeaths" : 2, 
            "vaccinesDistributed" : 1511435, 
            "vaccinationsInitiated" : 593248, 
            "vaccinationsCompleted" : 464787, 
            "vaccinesAdministered" : 1204865, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 14540, 
                    "16-17" : 6366, 
                    "16-19" : 5823, 
                    "18-24" : 39164, 
                    "20-44" : 136938, 
                    "25-29" : 40100, 
                    "25-34" : 85163, 
                    "25-39" : 137873, 
                    "30-39" : 80586, 
                    "35-44" : 68919, 
                    "40-49" : 60410, 
                    "45-54" : 49431, 
                    "46-64" : 77288, 
                    "5-11" : 7436, 
                    "50-64" : 80868, 
                    "55-64" : 50162, 
                    "65-74" : 45325, 
                    "65_plus" : 63475, 
                    "75+" : 28939, 
                    "75-84" : 20420, 
                    "85_plus" : 7407
                }, 
                "race" : {
                    "ai_an" : 1031, 
                    "asian" : 11922, 
                    "asian_or_pacific_islander" : 21751, 
                    "black" : 153783, 
                    "other" : 70627, 
                    "unknown" : 33283, 
                    "white" : 170459
                }, 
                "ethnicity" : {
                    "hispanic" : 50246, 
                    "non-hispanic" : 323805, 
                    "unknown" : 81841
                }, 
                "sex" : {
                    "female" : 229667, 
                    "male" : 190201, 
                    "unknown" : 986
                }
            }
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 32.0
                    }, 
                    {
                        "date" : "2020-11-11", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 206.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/district_of_columbia-dc"
    }, 
    {
        "fips" : "10", 
        "country" : "US", 
        "state" : "DE", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-de", 
        "long" : null, 
        "population" : 973764, 
        "metrics" : {
            "testPositivityRatio" : 0.096, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 62.4, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.746, 
            "vaccinationsCompletedRatio" : 0.627
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 159399, 
            "deaths" : 2211, 
            "positiveTests" : 178004, 
            "negativeTests" : 2760137, 
            "contactTracers" : 211, 
            "hospitalBeds" : {
                "capacity" : 3369, 
                "currentUsageTotal" : 2630, 
                "currentUsageCovid" : 341
            }, 
            "icuBeds" : {
                "capacity" : 195, 
                "currentUsageTotal" : 170, 
                "currentUsageCovid" : 33
            }, 
            "newCases" : 799, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 1913175, 
            "vaccinationsInitiated" : 726066, 
            "vaccinationsCompleted" : 610222, 
            "vaccinesAdministered" : 1502848, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/delaware-de"
    }, 
    {
        "fips" : "12", 
        "country" : "US", 
        "state" : "FL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-fl", 
        "long" : null, 
        "population" : 21477737, 
        "metrics" : {
            "testPositivityRatio" : 0.029, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 8.6, 
            "contactTracerCapacityRatio" : 0.28, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.728, 
            "vaccinationsCompletedRatio" : 0.623
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 3706754, 
            "deaths" : 62026, 
            "positiveTests" : 4382814, 
            "negativeTests" : 39937584, 
            "contactTracers" : 2600, 
            "hospitalBeds" : {
                "capacity" : 58978, 
                "currentUsageTotal" : 47426, 
                "currentUsageCovid" : 1374
            }, 
            "icuBeds" : {
                "capacity" : 6391, 
                "currentUsageTotal" : 5052, 
                "currentUsageCovid" : 257
            }, 
            "newCases" : 2420, 
            "newDeaths" : 19, 
            "vaccinesDistributed" : 39592205, 
            "vaccinationsInitiated" : 15640854, 
            "vaccinationsCompleted" : 13372404, 
            "vaccinesAdministered" : 32047070, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-14" : 91571, 
                    "15-24" : 774834, 
                    "25-34" : 983521, 
                    "35-44" : 1214674, 
                    "45-54" : 1498733, 
                    "55-64" : 1989585, 
                    "65-74" : 2183477, 
                    "75-84" : 1236286, 
                    "85_plus" : 424618
                }, 
                "race" : {
                    "ai_an" : 41462, 
                    "black" : 753863, 
                    "other" : 1191827, 
                    "unknown" : 1583589, 
                    "white" : 6826558
                }, 
                "ethnicity" : {
                    "hispanic" : 1894250, 
                    "non-hispanic" : 5104146, 
                    "unknown" : 3398903
                }, 
                "sex" : {
                    "female" : 5643059, 
                    "male" : 4731062, 
                    "unknown" : 23178
                }
            }
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/florida-fl"
    }, 
    {
        "fips" : "13", 
        "country" : "US", 
        "state" : "GA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ga", 
        "long" : null, 
        "population" : 10617423, 
        "metrics" : {
            "testPositivityRatio" : 0.041, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 13.7, 
            "contactTracerCapacityRatio" : 0.22, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.599, 
            "vaccinationsCompletedRatio" : 0.499
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 1644864, 
            "deaths" : 29700, 
            "positiveTests" : 1265476, 
            "negativeTests" : 11310886, 
            "contactTracers" : 1570, 
            "hospitalBeds" : {
                "capacity" : 22701, 
                "currentUsageTotal" : 19219, 
                "currentUsageCovid" : 1363
            }, 
            "icuBeds" : {
                "capacity" : 2504, 
                "currentUsageTotal" : 2106, 
                "currentUsageCovid" : 252
            }, 
            "newCases" : 1989, 
            "newDeaths" : 25, 
            "vaccinesDistributed" : 17805395, 
            "vaccinationsInitiated" : 6354746, 
            "vaccinationsCompleted" : 5293008, 
            "vaccinesAdministered" : 12642820, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-10-26", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 3931.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/georgia-ga"
    }, 
    {
        "fips" : "15", 
        "country" : "US", 
        "state" : "HI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-hi", 
        "long" : null, 
        "population" : 1415872, 
        "metrics" : {
            "testPositivityRatio" : 0.016, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 7.5, 
            "contactTracerCapacityRatio" : 0.56, 
            "infectionRate" : 0.99, 
            "infectionRateCI90" : 0.16, 
            "icuCapacityRatio" : 0.64, 
            "vaccinationsInitiatedRatio" : 0.833, 
            "vaccinationsCompletedRatio" : 0.621
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 85833, 
            "deaths" : 1042, 
            "positiveTests" : 93351, 
            "negativeTests" : 2591395, 
            "contactTracers" : 300, 
            "hospitalBeds" : {
                "capacity" : 2569, 
                "currentUsageTotal" : 1946, 
                "currentUsageCovid" : 53
            }, 
            "icuBeds" : {
                "capacity" : 207, 
                "currentUsageTotal" : 133, 
                "currentUsageCovid" : 7
            }, 
            "newCases" : 157, 
            "newDeaths" : 5, 
            "vaccinesDistributed" : 2874210, 
            "vaccinationsInitiated" : 1179071, 
            "vaccinationsCompleted" : 879811, 
            "vaccinesAdministered" : 2133659, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/hawaii-hi"
    }, 
    {
        "fips" : "19", 
        "country" : "US", 
        "state" : "IA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ia", 
        "long" : null, 
        "population" : 3155070, 
        "metrics" : {
            "testPositivityRatio" : 0.152, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 71.3, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.635, 
            "vaccinationsCompletedRatio" : 0.578
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 545804, 
            "deaths" : 7550, 
            "positiveTests" : 527330, 
            "negativeTests" : 4331496, 
            "contactTracers" : 403, 
            "hospitalBeds" : {
                "capacity" : 7569, 
                "currentUsageTotal" : 5705, 
                "currentUsageCovid" : 825
            }, 
            "icuBeds" : {
                "capacity" : 611, 
                "currentUsageTotal" : 532, 
                "currentUsageCovid" : 181
            }, 
            "newCases" : 3371, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5476525, 
            "vaccinationsInitiated" : 2003472, 
            "vaccinationsCompleted" : 1823388, 
            "vaccinesAdministered" : 4374734, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-04-03", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 68.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/iowa-ia"
    }, 
    {
        "fips" : "16", 
        "country" : "US", 
        "state" : "ID", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-id", 
        "long" : null, 
        "population" : 1787065, 
        "metrics" : {
            "testPositivityRatio" : 0.098, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 23.9, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 311202, 
            "deaths" : 4015, 
            "positiveTests" : 402819, 
            "negativeTests" : 2161655, 
            "contactTracers" : 250, 
            "hospitalBeds" : {
                "capacity" : 3260, 
                "currentUsageTotal" : 2538, 
                "currentUsageCovid" : 317
            }, 
            "icuBeds" : {
                "capacity" : 289, 
                "currentUsageTotal" : 244, 
                "currentUsageCovid" : 85
            }, 
            "newCases" : 24, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 31.0
                    }
                ]
            }, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/idaho-id"
    }, 
    {
        "fips" : "17", 
        "country" : "US", 
        "state" : "IL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-il", 
        "long" : null, 
        "population" : 12671821, 
        "metrics" : {
            "testPositivityRatio" : 0.057, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 56.0, 
            "contactTracerCapacityRatio" : 0.11, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.703, 
            "vaccinationsCompletedRatio" : 0.628
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1890044, 
            "deaths" : 29842, 
            "positiveTests" : 1795618, 
            "negativeTests" : 30759884, 
            "contactTracers" : 3800, 
            "hospitalBeds" : {
                "capacity" : 30521, 
                "currentUsageTotal" : 23430, 
                "currentUsageCovid" : 3190
            }, 
            "icuBeds" : {
                "capacity" : 3255, 
                "currentUsageTotal" : 2386, 
                "currentUsageCovid" : 654
            }, 
            "newCases" : 7403, 
            "newDeaths" : 49, 
            "vaccinesDistributed" : 22312815, 
            "vaccinationsInitiated" : 8911811, 
            "vaccinationsCompleted" : 7963768, 
            "vaccinesAdministered" : 18612706, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 5538.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-12-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 56.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/illinois-il"
    }, 
    {
        "fips" : "18", 
        "country" : "US", 
        "state" : "IN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-in", 
        "long" : null, 
        "population" : 6732219, 
        "metrics" : {
            "testPositivityRatio" : 0.172, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 69.1, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.566, 
            "vaccinationsCompletedRatio" : 0.512
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1154156, 
            "deaths" : 18014, 
            "positiveTests" : 1190131, 
            "negativeTests" : 10444461, 
            "contactTracers" : 1600, 
            "hospitalBeds" : {
                "capacity" : 18912, 
                "currentUsageTotal" : 13516, 
                "currentUsageCovid" : 2791
            }, 
            "icuBeds" : {
                "capacity" : 2274, 
                "currentUsageTotal" : 1818, 
                "currentUsageCovid" : 667
            }, 
            "newCases" : 5277, 
            "newDeaths" : 60, 
            "vaccinesDistributed" : 10508990, 
            "vaccinationsInitiated" : 3810899, 
            "vaccinationsCompleted" : 3448521, 
            "vaccinesAdministered" : 8070693, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/indiana-in"
    }, 
    {
        "fips" : "20", 
        "country" : "US", 
        "state" : "KS", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ks", 
        "long" : null, 
        "population" : 2913314, 
        "metrics" : {
            "testPositivityRatio" : 0.142, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 56.9, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.674, 
            "vaccinationsCompletedRatio" : 0.556
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 486980, 
            "deaths" : 6858, 
            "positiveTests" : 429947, 
            "negativeTests" : 3974399, 
            "contactTracers" : 359, 
            "hospitalBeds" : {
                "capacity" : 8478, 
                "currentUsageTotal" : 5547, 
                "currentUsageCovid" : 713
            }, 
            "icuBeds" : {
                "capacity" : 819, 
                "currentUsageTotal" : 677, 
                "currentUsageCovid" : 196
            }, 
            "newCases" : 3742, 
            "newDeaths" : 59, 
            "vaccinesDistributed" : 4907805, 
            "vaccinationsInitiated" : 1962720, 
            "vaccinationsCompleted" : 1621007, 
            "vaccinesAdministered" : 3834019, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-07-23", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 39.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/kansas-ks"
    }, 
    {
        "fips" : "21", 
        "country" : "US", 
        "state" : "KY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ky", 
        "long" : null, 
        "population" : 4467673, 
        "metrics" : {
            "testPositivityRatio" : 0.105, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 51.1, 
            "contactTracerCapacityRatio" : 0.11, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.93, 
            "vaccinationsInitiatedRatio" : 0.612, 
            "vaccinationsCompletedRatio" : 0.531
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 814987, 
            "deaths" : 11606, 
            "positiveTests" : 780025, 
            "negativeTests" : 6345991, 
            "contactTracers" : 1240, 
            "hospitalBeds" : {
                "capacity" : 11966, 
                "currentUsageTotal" : 9625, 
                "currentUsageCovid" : 1259
            }, 
            "icuBeds" : {
                "capacity" : 1454, 
                "currentUsageTotal" : 1356, 
                "currentUsageCovid" : 309
            }, 
            "newCases" : 2701, 
            "newDeaths" : 66, 
            "vaccinesDistributed" : 7267025, 
            "vaccinationsInitiated" : 2734340, 
            "vaccinationsCompleted" : 2374243, 
            "vaccinesAdministered" : 5616776, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-05-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 77.0
                    }, 
                    {
                        "date" : "2021-08-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 40.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/kentucky-ky"
    }, 
    {
        "fips" : "22", 
        "country" : "US", 
        "state" : "LA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-la", 
        "long" : null, 
        "population" : 4648794, 
        "metrics" : {
            "testPositivityRatio" : 0.023, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.7, 
            "contactTracerCapacityRatio" : 0.36, 
            "infectionRate" : 1.12, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.563, 
            "vaccinationsCompletedRatio" : 0.494
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 775935, 
            "deaths" : 14877, 
            "positiveTests" : 711280, 
            "negativeTests" : 8238276, 
            "contactTracers" : 800, 
            "hospitalBeds" : {
                "capacity" : 12884, 
                "currentUsageTotal" : 9568, 
                "currentUsageCovid" : 218
            }, 
            "icuBeds" : {
                "capacity" : 1493, 
                "currentUsageTotal" : 1135, 
                "currentUsageCovid" : 60
            }, 
            "newCases" : 567, 
            "newDeaths" : 10, 
            "vaccinesDistributed" : 6795900, 
            "vaccinationsInitiated" : 2617314, 
            "vaccinationsCompleted" : 2297117, 
            "vaccinesAdministered" : 5378540, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1288.0
                    }, 
                    {
                        "date" : "2020-10-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 2156.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/louisiana-la"
    }, 
    {
        "fips" : "25", 
        "country" : "US", 
        "state" : "MA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ma", 
        "long" : null, 
        "population" : 6892503, 
        "metrics" : {
            "testPositivityRatio" : 0.05, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 69.9, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.24, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.875, 
            "vaccinationsCompletedRatio" : 0.728
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 969589, 
            "deaths" : 19634, 
            "positiveTests" : 1033750, 
            "negativeTests" : 32422786, 
            "contactTracers" : 2350, 
            "hospitalBeds" : {
                "capacity" : 18237, 
                "currentUsageTotal" : 15954, 
                "currentUsageCovid" : 1074
            }, 
            "icuBeds" : {
                "capacity" : 1306, 
                "currentUsageTotal" : 1116, 
                "currentUsageCovid" : 264
            }, 
            "newCases" : 5666, 
            "newDeaths" : 28, 
            "vaccinesDistributed" : 13827070, 
            "vaccinationsInitiated" : 6032480, 
            "vaccinationsCompleted" : 5015153, 
            "vaccinesAdministered" : 12119240, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-10", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 51.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/massachusetts-ma"
    }, 
    {
        "fips" : "24", 
        "country" : "US", 
        "state" : "MD", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-md", 
        "long" : null, 
        "population" : 6045680, 
        "metrics" : {
            "testPositivityRatio" : 0.063, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 22.2, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.782, 
            "vaccinationsCompletedRatio" : 0.69
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 592912, 
            "deaths" : 11255, 
            "positiveTests" : 1234432, 
            "negativeTests" : 14885001, 
            "contactTracers" : 1400, 
            "hospitalBeds" : {
                "capacity" : 11007, 
                "currentUsageTotal" : 9444, 
                "currentUsageCovid" : 1256
            }, 
            "icuBeds" : {
                "capacity" : 1306, 
                "currentUsageTotal" : 975, 
                "currentUsageCovid" : 218
            }, 
            "newCases" : 1866, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 12606150, 
            "vaccinationsInitiated" : 4727597, 
            "vaccinationsCompleted" : 4170156, 
            "vaccinesAdministered" : 9840086, 
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
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 592912.0
                    }
                ]
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-08", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1158.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 592912.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 592912.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 592912.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/maryland-md"
    }, 
    {
        "fips" : "23", 
        "country" : "US", 
        "state" : "ME", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-me", 
        "long" : null, 
        "population" : 1344212, 
        "metrics" : {
            "testPositivityRatio" : 0.104, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 71.6, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.24, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.834, 
            "vaccinationsCompletedRatio" : 0.739
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 128982, 
            "deaths" : 1365, 
            "positiveTests" : 114724, 
            "negativeTests" : 3055000, 
            "contactTracers" : 86, 
            "hospitalBeds" : {
                "capacity" : 3310, 
                "currentUsageTotal" : 2430, 
                "currentUsageCovid" : 395
            }, 
            "icuBeds" : {
                "capacity" : 353, 
                "currentUsageTotal" : 281, 
                "currentUsageCovid" : 131
            }, 
            "newCases" : 2149, 
            "newDeaths" : 8, 
            "vaccinesDistributed" : 2764140, 
            "vaccinationsInitiated" : 1120929, 
            "vaccinationsCompleted" : 993478, 
            "vaccinesAdministered" : 2338481, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-01-08", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 41.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/maine-me"
    }, 
    {
        "fips" : "26", 
        "country" : "US", 
        "state" : "MI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mi", 
        "long" : null, 
        "population" : 9986857, 
        "metrics" : {
            "testPositivityRatio" : 0.177, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 71.8, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.62, 
            "vaccinationsCompletedRatio" : 0.555
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1564627, 
            "deaths" : 26880, 
            "positiveTests" : 1662594, 
            "negativeTests" : 18048336, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 22986, 
                "currentUsageTotal" : 19737, 
                "currentUsageCovid" : 4747
            }, 
            "icuBeds" : {
                "capacity" : 2632, 
                "currentUsageTotal" : 2293, 
                "currentUsageCovid" : 979
            }, 
            "newCases" : 13775, 
            "newDeaths" : 266, 
            "vaccinesDistributed" : 17236870, 
            "vaccinationsInitiated" : 6196738, 
            "vaccinationsCompleted" : 5544303, 
            "vaccinesAdministered" : 13205897, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-19", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 254.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-09", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 75.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/michigan-mi"
    }, 
    {
        "fips" : "27", 
        "country" : "US", 
        "state" : "MN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mn", 
        "long" : null, 
        "population" : 5639632, 
        "metrics" : {
            "testPositivityRatio" : 0.127, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 75.6, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.7, 
            "vaccinationsCompletedRatio" : 0.639
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 956903, 
            "deaths" : 9996, 
            "positiveTests" : 1356335, 
            "negativeTests" : 16752636, 
            "contactTracers" : 1028, 
            "hospitalBeds" : {
                "capacity" : 13032, 
                "currentUsageTotal" : 8527, 
                "currentUsageCovid" : 1780
            }, 
            "icuBeds" : {
                "capacity" : 973, 
                "currentUsageTotal" : 833, 
                "currentUsageCovid" : 348
            }, 
            "newCases" : 4547, 
            "newDeaths" : 58, 
            "vaccinesDistributed" : 10382450, 
            "vaccinationsInitiated" : 3948582, 
            "vaccinationsCompleted" : 3604271, 
            "vaccinesAdministered" : 8635526, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/minnesota-mn"
    }, 
    {
        "fips" : "29", 
        "country" : "US", 
        "state" : "MO", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mo", 
        "long" : null, 
        "population" : 6137428, 
        "metrics" : {
            "testPositivityRatio" : 0.118, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 51.7, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.22, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.609, 
            "vaccinationsCompletedRatio" : 0.519
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 952196, 
            "deaths" : 15708, 
            "positiveTests" : 992642, 
            "negativeTests" : 8401570, 
            "contactTracers" : 94, 
            "hospitalBeds" : {
                "capacity" : 17268, 
                "currentUsageTotal" : 14666, 
                "currentUsageCovid" : 1866
            }, 
            "icuBeds" : {
                "capacity" : 1816, 
                "currentUsageTotal" : 1588, 
                "currentUsageCovid" : 421
            }, 
            "newCases" : 3568, 
            "newDeaths" : 20, 
            "vaccinesDistributed" : 9510875, 
            "vaccinationsInitiated" : 3735892, 
            "vaccinationsCompleted" : 3187645, 
            "vaccinesAdministered" : 7714289, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 38.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-04-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 67.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/missouri-mo"
    }, 
    {
        "fips" : "69", 
        "country" : "US", 
        "state" : "MP", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mp", 
        "long" : null, 
        "population" : 53605, 
        "metrics" : {
            "testPositivityRatio" : 0.701, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 109.3, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.33, 
            "infectionRateCI90" : 0.18, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.777, 
            "vaccinationsCompletedRatio" : 0.702
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1514, 
            "deaths" : 5, 
            "positiveTests" : 1161, 
            "negativeTests" : 57943, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : null, 
                "currentUsageTotal" : null, 
                "currentUsageCovid" : null
            }, 
            "icuBeds" : {
                "capacity" : null, 
                "currentUsageTotal" : null, 
                "currentUsageCovid" : null
            }, 
            "newCases" : 0, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 108120, 
            "vaccinationsInitiated" : 41626, 
            "vaccinationsCompleted" : 37617, 
            "vaccinesAdministered" : 87349, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : null, 
            "icuBeds" : null, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-11-16", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 52.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/northern_mariana_islands-mp"
    }, 
    {
        "fips" : "28", 
        "country" : "US", 
        "state" : "MS", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ms", 
        "long" : null, 
        "population" : 2976149, 
        "metrics" : {
            "testPositivityRatio" : 0.079, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.3, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.547, 
            "vaccinationsCompletedRatio" : 0.475
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 519115, 
            "deaths" : 10326, 
            "positiveTests" : 247251, 
            "negativeTests" : 1808761, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 8391, 
                "currentUsageTotal" : 5555, 
                "currentUsageCovid" : 261
            }, 
            "icuBeds" : {
                "capacity" : 722, 
                "currentUsageTotal" : 596, 
                "currentUsageCovid" : 70
            }, 
            "newCases" : 445, 
            "newDeaths" : 9, 
            "vaccinesDistributed" : 4534625, 
            "vaccinationsInitiated" : 1627053, 
            "vaccinationsCompleted" : 1414758, 
            "vaccinesAdministered" : 3295726, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/mississippi-ms"
    }, 
    {
        "fips" : "30", 
        "country" : "US", 
        "state" : "MT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mt", 
        "long" : null, 
        "population" : 1068778, 
        "metrics" : {
            "testPositivityRatio" : 0.075, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.8, 
            "contactTracerCapacityRatio" : 0.19, 
            "infectionRate" : 0.87, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.608, 
            "vaccinationsCompletedRatio" : 0.528
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 193930, 
            "deaths" : 2822, 
            "positiveTests" : 207704, 
            "negativeTests" : 1519234, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 3031, 
                "currentUsageTotal" : 2179, 
                "currentUsageCovid" : 178
            }, 
            "icuBeds" : {
                "capacity" : 225, 
                "currentUsageTotal" : 155, 
                "currentUsageCovid" : 58
            }, 
            "newCases" : 175, 
            "newDeaths" : 33, 
            "vaccinesDistributed" : 1690105, 
            "vaccinationsInitiated" : 649694, 
            "vaccinationsCompleted" : 564344, 
            "vaccinesAdministered" : 1372734, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-01-23", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/montana-mt"
    }, 
    {
        "fips" : "37", 
        "country" : "US", 
        "state" : "NC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nc", 
        "long" : null, 
        "population" : 10488084, 
        "metrics" : {
            "testPositivityRatio" : 0.077, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 29.7, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.724, 
            "vaccinationsCompletedRatio" : 0.553
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1562073, 
            "deaths" : 18986, 
            "positiveTests" : 1530511, 
            "negativeTests" : 16211314, 
            "contactTracers" : 1215, 
            "hospitalBeds" : {
                "capacity" : 23501, 
                "currentUsageTotal" : 19072, 
                "currentUsageCovid" : 1498
            }, 
            "icuBeds" : {
                "capacity" : 2254, 
                "currentUsageTotal" : 1895, 
                "currentUsageCovid" : 371
            }, 
            "newCases" : 3656, 
            "newDeaths" : 21, 
            "vaccinesDistributed" : 18123090, 
            "vaccinationsInitiated" : 7592363, 
            "vaccinationsCompleted" : 5801466, 
            "vaccinesAdministered" : 14071146, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-18", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 57.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/north_carolina-nc"
    }, 
    {
        "fips" : "38", 
        "country" : "US", 
        "state" : "ND", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nd", 
        "long" : null, 
        "population" : 762062, 
        "metrics" : {
            "testPositivityRatio" : 0.101, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.1, 
            "contactTracerCapacityRatio" : 0.28, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.59, 
            "vaccinationsCompletedRatio" : 0.496
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 166641, 
            "deaths" : 1985, 
            "positiveTests" : 132297, 
            "negativeTests" : 1897500, 
            "contactTracers" : 500, 
            "hospitalBeds" : {
                "capacity" : 2284, 
                "currentUsageTotal" : 1925, 
                "currentUsageCovid" : 259
            }, 
            "icuBeds" : {
                "capacity" : 203, 
                "currentUsageTotal" : 146, 
                "currentUsageCovid" : 56
            }, 
            "newCases" : 369, 
            "newDeaths" : 2, 
            "vaccinesDistributed" : 1177600, 
            "vaccinationsInitiated" : 449680, 
            "vaccinationsCompleted" : 378332, 
            "vaccinesAdministered" : 930642, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/north_dakota-nd"
    }, 
    {
        "fips" : "31", 
        "country" : "US", 
        "state" : "NE", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ne", 
        "long" : null, 
        "population" : 1934408, 
        "metrics" : {
            "testPositivityRatio" : 0.161, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 51.8, 
            "contactTracerCapacityRatio" : 0.2, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.651, 
            "vaccinationsCompletedRatio" : 0.586
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 320943, 
            "deaths" : 2863, 
            "positiveTests" : 309846, 
            "negativeTests" : 2172846, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 4309, 
                "currentUsageTotal" : 3539, 
                "currentUsageCovid" : 644
            }, 
            "icuBeds" : {
                "capacity" : 485, 
                "currentUsageTotal" : 428, 
                "currentUsageCovid" : 161
            }, 
            "newCases" : 1096, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 3275840, 
            "vaccinationsInitiated" : 1258410, 
            "vaccinationsCompleted" : 1133063, 
            "vaccinesAdministered" : 2710157, 
            "vaccinesAdministeredDemographics" : {
                "age" : {
                    "0-19" : 525411, 
                    "20-34" : 391263, 
                    "35-44" : 232659, 
                    "45-54" : 229048, 
                    "55-64" : 240299, 
                    "65-74" : 159053, 
                    "75-84" : 85697, 
                    "85_plus" : 41330, 
                    "unknown" : 17
                }, 
                "race" : {
                    "ai_an" : 17282, 
                    "asian" : 44105, 
                    "black" : 90860, 
                    "multiple" : 84658, 
                    "other" : 82484, 
                    "pacific_islander" : 1392, 
                    "unknown" : 0, 
                    "white" : 1666463
                }, 
                "ethnicity" : {
                    "hispanic" : 203281, 
                    "non-hispanic" : 1701479, 
                    "unknown" : 0
                }, 
                "sex" : {
                    "female" : 954850, 
                    "male" : 949910, 
                    "other" : 33, 
                    "unknown" : 0
                }
            }, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "0-19" : 48138, 
                    "20-34" : 162303, 
                    "35-44" : 127130, 
                    "45-54" : 123207, 
                    "55-64" : 157441, 
                    "65-74" : 145330, 
                    "75-84" : 73835, 
                    "85_plus" : 34315, 
                    "unknown" : 15
                }, 
                "race" : {
                    "ai_an" : 4251, 
                    "asian" : 26113, 
                    "black" : 29602, 
                    "other" : 46834, 
                    "pacific_islander" : 1118, 
                    "unknown" : 38051, 
                    "white" : 725745
                }, 
                "ethnicity" : {
                    "hispanic" : 69042, 
                    "non-hispanic" : 742488, 
                    "unknown" : 60184
                }, 
                "sex" : {
                    "female" : 474797, 
                    "male" : 386947, 
                    "other" : 17, 
                    "unknown" : 9970
                }
            }
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/nebraska-ne"
    }, 
    {
        "fips" : "33", 
        "country" : "US", 
        "state" : "NH", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nh", 
        "long" : null, 
        "population" : 1359711, 
        "metrics" : {
            "testPositivityRatio" : 0.113, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 93.3, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 174456, 
            "deaths" : 1781, 
            "positiveTests" : 143312, 
            "negativeTests" : 2880335, 
            "contactTracers" : 140, 
            "hospitalBeds" : {
                "capacity" : 3003, 
                "currentUsageTotal" : 2494, 
                "currentUsageCovid" : 469
            }, 
            "icuBeds" : {
                "capacity" : 228, 
                "currentUsageTotal" : 201, 
                "currentUsageCovid" : 101
            }, 
            "newCases" : 1367, 
            "newDeaths" : 8, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/new_hampshire-nh"
    }, 
    {
        "fips" : "34", 
        "country" : "US", 
        "state" : "NJ", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nj", 
        "long" : null, 
        "population" : 8882190, 
        "metrics" : {
            "testPositivityRatio" : 0.078, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 48.6, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 1.25, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.49, 
            "vaccinationsInitiatedRatio" : 0.808, 
            "vaccinationsCompletedRatio" : 0.69
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1295005, 
            "deaths" : 28543, 
            "positiveTests" : 1284008, 
            "negativeTests" : 19144405, 
            "contactTracers" : 3000, 
            "hospitalBeds" : {
                "capacity" : 24134, 
                "currentUsageTotal" : 17694, 
                "currentUsageCovid" : 1594
            }, 
            "icuBeds" : {
                "capacity" : 2932, 
                "currentUsageTotal" : 1437, 
                "currentUsageCovid" : 250
            }, 
            "newCases" : 5463, 
            "newDeaths" : 17, 
            "vaccinesDistributed" : 17571615, 
            "vaccinationsInitiated" : 7178380, 
            "vaccinationsCompleted" : 6129427, 
            "vaccinesAdministered" : 14059063, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/new_jersey-nj"
    }, 
    {
        "fips" : "35", 
        "country" : "US", 
        "state" : "NM", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nm", 
        "long" : null, 
        "population" : 2096829, 
        "metrics" : {
            "testPositivityRatio" : 0.141, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 69.5, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.9, 
            "vaccinationsInitiatedRatio" : 0.782, 
            "vaccinationsCompletedRatio" : 0.647
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 328332, 
            "deaths" : 5461, 
            "positiveTests" : 561335, 
            "negativeTests" : 3848797, 
            "contactTracers" : 375, 
            "hospitalBeds" : {
                "capacity" : 4355, 
                "currentUsageTotal" : 3454, 
                "currentUsageCovid" : 782
            }, 
            "icuBeds" : {
                "capacity" : 483, 
                "currentUsageTotal" : 435, 
                "currentUsageCovid" : 216
            }, 
            "newCases" : 1619, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3735365, 
            "vaccinationsInitiated" : 1640335, 
            "vaccinationsCompleted" : 1356853, 
            "vaccinesAdministered" : 3253041, 
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
                "anomalies" : [
                    {
                        "date" : "2021-12-09", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328332.0
                    }
                ]
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-09", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328332.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-09", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328332.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-09", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328332.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/new_mexico-nm"
    }, 
    {
        "fips" : "32", 
        "country" : "US", 
        "state" : "NV", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nv", 
        "long" : null, 
        "population" : 3080156, 
        "metrics" : {
            "testPositivityRatio" : 0.089, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 22.9, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.675, 
            "vaccinationsCompletedRatio" : 0.553
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 478082, 
            "deaths" : 8189, 
            "positiveTests" : 603629, 
            "negativeTests" : 4193873, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 8346, 
                "currentUsageTotal" : 6746, 
                "currentUsageCovid" : 712
            }, 
            "icuBeds" : {
                "capacity" : 809, 
                "currentUsageTotal" : 674, 
                "currentUsageCovid" : 152
            }, 
            "newCases" : 675, 
            "newDeaths" : 36, 
            "vaccinesDistributed" : 4882790, 
            "vaccinationsInitiated" : 2079676, 
            "vaccinationsCompleted" : 1703212, 
            "vaccinesAdministered" : 4092982, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/nevada-nv"
    }, 
    {
        "fips" : "36", 
        "country" : "US", 
        "state" : "NY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ny", 
        "long" : null, 
        "population" : 19453561, 
        "metrics" : {
            "testPositivityRatio" : 0.055, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 49.8, 
            "contactTracerCapacityRatio" : 0.2, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.806, 
            "vaccinationsCompletedRatio" : 0.701
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2828288, 
            "deaths" : 57572, 
            "positiveTests" : 3070616, 
            "negativeTests" : 64003529, 
            "contactTracers" : 9620, 
            "hospitalBeds" : {
                "capacity" : 48773, 
                "currentUsageTotal" : 40715, 
                "currentUsageCovid" : 4415
            }, 
            "icuBeds" : {
                "capacity" : 4905, 
                "currentUsageTotal" : 3656, 
                "currentUsageCovid" : 686
            }, 
            "newCases" : 11314, 
            "newDeaths" : 65, 
            "vaccinesDistributed" : 37093165, 
            "vaccinationsInitiated" : 15687458, 
            "vaccinationsCompleted" : 13646639, 
            "vaccinesAdministered" : 31994463, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-03-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 20184.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/new_york-ny"
    }, 
    {
        "fips" : "39", 
        "country" : "US", 
        "state" : "OH", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-oh", 
        "long" : null, 
        "population" : 11689100, 
        "metrics" : {
            "testPositivityRatio" : 0.14, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 61.7, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.12, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.593, 
            "vaccinationsCompletedRatio" : 0.541
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1768367, 
            "deaths" : 27371, 
            "positiveTests" : 1493795, 
            "negativeTests" : 16487374, 
            "contactTracers" : 1659, 
            "hospitalBeds" : {
                "capacity" : 31061, 
                "currentUsageTotal" : 25242, 
                "currentUsageCovid" : 4724
            }, 
            "icuBeds" : {
                "capacity" : 3951, 
                "currentUsageTotal" : 3247, 
                "currentUsageCovid" : 1129
            }, 
            "newCases" : 7359, 
            "newDeaths" : 360, 
            "vaccinesDistributed" : 18914725, 
            "vaccinationsInitiated" : 6930017, 
            "vaccinationsCompleted" : 6322437, 
            "vaccinesAdministered" : 15003924, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 138.0
                    }, 
                    {
                        "date" : "2020-10-21", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 66.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/ohio-oh"
    }, 
    {
        "fips" : "40", 
        "country" : "US", 
        "state" : "OK", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ok", 
        "long" : null, 
        "population" : 3956971, 
        "metrics" : {
            "testPositivityRatio" : 0.111, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 39.4, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 1.28, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.641, 
            "vaccinationsCompletedRatio" : 0.524
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 681346, 
            "deaths" : 11384, 
            "positiveTests" : 633415, 
            "negativeTests" : 2653969, 
            "contactTracers" : 700, 
            "hospitalBeds" : {
                "capacity" : 9494, 
                "currentUsageTotal" : 7236, 
                "currentUsageCovid" : 738
            }, 
            "icuBeds" : {
                "capacity" : 880, 
                "currentUsageTotal" : 764, 
                "currentUsageCovid" : 212
            }, 
            "newCases" : 3003, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6138900, 
            "vaccinationsInitiated" : 2535822, 
            "vaccinationsCompleted" : 2072304, 
            "vaccinesAdministered" : 5051749, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-11-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 4507.0
                    }, 
                    {
                        "date" : "2021-04-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1764.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 54.0
                    }, 
                    {
                        "date" : "2021-09-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 231.0
                    }, 
                    {
                        "date" : "2021-10-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1131.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/oklahoma-ok"
    }, 
    {
        "fips" : "41", 
        "country" : "US", 
        "state" : "OR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-or", 
        "long" : null, 
        "population" : 4217737, 
        "metrics" : {
            "testPositivityRatio" : 0.048, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.0, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.725, 
            "vaccinationsCompletedRatio" : 0.651
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 400188, 
            "deaths" : 5381, 
            "positiveTests" : 351866, 
            "negativeTests" : 5465010, 
            "contactTracers" : 656, 
            "hospitalBeds" : {
                "capacity" : 7097, 
                "currentUsageTotal" : 5751, 
                "currentUsageCovid" : 498
            }, 
            "icuBeds" : {
                "capacity" : 788, 
                "currentUsageTotal" : 615, 
                "currentUsageCovid" : 100
            }, 
            "newCases" : 827, 
            "newDeaths" : 25, 
            "vaccinesDistributed" : 8227105, 
            "vaccinationsInitiated" : 3055828, 
            "vaccinationsCompleted" : 2747338, 
            "vaccinesAdministered" : 6447396, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-02-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/oregon-or"
    }, 
    {
        "fips" : "42", 
        "country" : "US", 
        "state" : "PA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-pa", 
        "long" : null, 
        "population" : 12801989, 
        "metrics" : {
            "testPositivityRatio" : 0.145, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 60.8, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.835, 
            "vaccinationsCompletedRatio" : 0.598
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1818299, 
            "deaths" : 34415, 
            "positiveTests" : 1765882, 
            "negativeTests" : 19433541, 
            "contactTracers" : 1508, 
            "hospitalBeds" : {
                "capacity" : 30699, 
                "currentUsageTotal" : 26576, 
                "currentUsageCovid" : 4962
            }, 
            "icuBeds" : {
                "capacity" : 3763, 
                "currentUsageTotal" : 3141, 
                "currentUsageCovid" : 967
            }, 
            "newCases" : 11628, 
            "newDeaths" : 144, 
            "vaccinesDistributed" : 24546915, 
            "vaccinationsInitiated" : 10690677, 
            "vaccinationsCompleted" : 7660210, 
            "vaccinesAdministered" : 19044466, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "10-14" : 232814, 
                    "100-104" : 4096, 
                    "105_plus" : 437, 
                    "15-19" : 367727, 
                    "20-24" : 390924, 
                    "25-29" : 385128, 
                    "30-34" : 433253, 
                    "35-39" : 453095, 
                    "40-44" : 450905, 
                    "45-49" : 441178, 
                    "5-9" : 116328, 
                    "50-54" : 523440, 
                    "55-59" : 589055, 
                    "60-64" : 656281, 
                    "65-69" : 631803, 
                    "70-74" : 529134, 
                    "75-79" : 368999, 
                    "80-84" : 249697, 
                    "85-89" : 159775, 
                    "90-94" : 88621, 
                    "95-99" : 27920
                }, 
                "race" : {
                    "ai_an" : 8251, 
                    "asian" : 128582, 
                    "black" : 350204, 
                    "multiple_other" : 952749, 
                    "pacific_islander" : 15383, 
                    "unknown" : 563794, 
                    "white" : 5081875
                }, 
                "ethnicity" : {
                    "hispanic" : 370887, 
                    "non-hispanic" : 5251046, 
                    "unknown" : 1478905
                }, 
                "sex" : {
                    "female" : 3768435, 
                    "male" : 3234793, 
                    "unknown" : 97610
                }
            }
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1577.0
                    }, 
                    {
                        "date" : "2021-11-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 21226.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/pennsylvania-pa"
    }, 
    {
        "fips" : "72", 
        "country" : "US", 
        "state" : "PR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-pr", 
        "long" : null, 
        "population" : 3193694, 
        "metrics" : {
            "testPositivityRatio" : 0.023, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 3.9, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.16, 
            "icuCapacityRatio" : 0.65, 
            "vaccinationsInitiatedRatio" : 0.863, 
            "vaccinationsCompletedRatio" : 0.751
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 1, 
        "actuals" : {
            "cases" : 222999, 
            "deaths" : 3274, 
            "positiveTests" : 121978, 
            "negativeTests" : 1761665, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : 9297, 
                "currentUsageTotal" : 5795, 
                "currentUsageCovid" : 48
            }, 
            "icuBeds" : {
                "capacity" : 684, 
                "currentUsageTotal" : 447, 
                "currentUsageCovid" : 4
            }, 
            "newCases" : 158, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6192840, 
            "vaccinationsInitiated" : 2757284, 
            "vaccinationsCompleted" : 2399286, 
            "vaccinesAdministered" : 5588579, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 485.0
                    }, 
                    {
                        "date" : "2020-07-06", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 669.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/puerto_rico-pr"
    }, 
    {
        "fips" : "44", 
        "country" : "US", 
        "state" : "RI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ri", 
        "long" : null, 
        "population" : 1059361, 
        "metrics" : {
            "testPositivityRatio" : 0.058, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 86.5, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.27, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.91, 
            "vaccinationsInitiatedRatio" : 0.853, 
            "vaccinationsCompletedRatio" : 0.745
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 201275, 
            "deaths" : 2957, 
            "positiveTests" : 240340, 
            "negativeTests" : 5313606, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2403, 
                "currentUsageTotal" : 2135, 
                "currentUsageCovid" : 218
            }, 
            "icuBeds" : {
                "capacity" : 141, 
                "currentUsageTotal" : 129, 
                "currentUsageCovid" : 37
            }, 
            "newCases" : 1078, 
            "newDeaths" : 6, 
            "vaccinesDistributed" : 2114535, 
            "vaccinationsInitiated" : 903316, 
            "vaccinationsCompleted" : 789244, 
            "vaccinesAdministered" : 1822088, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1183.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/rhode_island-ri"
    }, 
    {
        "fips" : "45", 
        "country" : "US", 
        "state" : "SC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-sc", 
        "long" : null, 
        "population" : 5148714, 
        "metrics" : {
            "testPositivityRatio" : 0.051, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.4, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.613, 
            "vaccinationsCompletedRatio" : 0.522
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 929077, 
            "deaths" : 14375, 
            "positiveTests" : 963568, 
            "negativeTests" : 9039403, 
            "contactTracers" : 775, 
            "hospitalBeds" : {
                "capacity" : 11692, 
                "currentUsageTotal" : 9453, 
                "currentUsageCovid" : 496
            }, 
            "icuBeds" : {
                "capacity" : 1316, 
                "currentUsageTotal" : 1031, 
                "currentUsageCovid" : 125
            }, 
            "newCases" : 1428, 
            "newDeaths" : 28, 
            "vaccinesDistributed" : 8579455, 
            "vaccinationsInitiated" : 3155489, 
            "vaccinationsCompleted" : 2686283, 
            "vaccinesAdministered" : 6407914, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 40.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/south_carolina-sc"
    }, 
    {
        "fips" : "46", 
        "country" : "US", 
        "state" : "SD", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-sd", 
        "long" : null, 
        "population" : 884659, 
        "metrics" : {
            "testPositivityRatio" : 0.153, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 48.1, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.65, 
            "vaccinationsInitiatedRatio" : 0.687, 
            "vaccinationsCompletedRatio" : 0.558
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 171248, 
            "deaths" : 2398, 
            "positiveTests" : 115542, 
            "negativeTests" : 797013, 
            "contactTracers" : 350, 
            "hospitalBeds" : {
                "capacity" : 2772, 
                "currentUsageTotal" : 1872, 
                "currentUsageCovid" : 261
            }, 
            "icuBeds" : {
                "capacity" : 252, 
                "currentUsageTotal" : 164, 
                "currentUsageCovid" : 83
            }, 
            "newCases" : 448, 
            "newDeaths" : 6, 
            "vaccinesDistributed" : 1545755, 
            "vaccinationsInitiated" : 607566, 
            "vaccinationsCompleted" : 493221, 
            "vaccinesAdministered" : 1199666, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/south_dakota-sd"
    }, 
    {
        "fips" : "47", 
        "country" : "US", 
        "state" : "TN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-tn", 
        "long" : null, 
        "population" : 6829174, 
        "metrics" : {
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 26.7, 
            "contactTracerCapacityRatio" : 0.13, 
            "infectionRate" : 1.19, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.576, 
            "vaccinationsCompletedRatio" : 0.502
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1306191, 
            "deaths" : 17574, 
            "positiveTests" : 1095472, 
            "negativeTests" : 8256596, 
            "contactTracers" : 1226, 
            "hospitalBeds" : {
                "capacity" : 20167, 
                "currentUsageTotal" : 14936, 
                "currentUsageCovid" : 1125
            }, 
            "icuBeds" : {
                "capacity" : 2416, 
                "currentUsageTotal" : 1719, 
                "currentUsageCovid" : 277
            }, 
            "newCases" : 4518, 
            "newDeaths" : 55, 
            "vaccinesDistributed" : 10549440, 
            "vaccinationsInitiated" : 3933775, 
            "vaccinationsCompleted" : 3431274, 
            "vaccinesAdministered" : 8459129, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1095472.0
                    }
                ]
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8256597.0
                    }
                ]
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-05-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1275.0
                    }, 
                    {
                        "date" : "2020-05-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 156.0
                    }, 
                    {
                        "date" : "2020-06-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1256.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-17", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 173.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1095472.0
                    }, 
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8256597.0
                    }
                ]
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/tennessee-tn"
    }, 
    {
        "fips" : "48", 
        "country" : "US", 
        "state" : "TX", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-tx", 
        "long" : null, 
        "population" : 28995881, 
        "metrics" : {
            "testPositivityRatio" : 0.058, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 18.4, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 1.22, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.651, 
            "vaccinationsCompletedRatio" : 0.557
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 4338475, 
            "deaths" : 74870, 
            "positiveTests" : 4579575, 
            "negativeTests" : 34909950, 
            "contactTracers" : 3722, 
            "hospitalBeds" : {
                "capacity" : 67086, 
                "currentUsageTotal" : 52613, 
                "currentUsageCovid" : 3594
            }, 
            "icuBeds" : {
                "capacity" : 6887, 
                "currentUsageTotal" : 6022, 
                "currentUsageCovid" : 932
            }, 
            "newCases" : 17611, 
            "newDeaths" : 103, 
            "vaccinesDistributed" : 50441215, 
            "vaccinationsInitiated" : 18879009, 
            "vaccinationsCompleted" : 16154076, 
            "vaccinesAdministered" : 38543981, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-18", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 60.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/texas-tx"
    }, 
    {
        "fips" : "49", 
        "country" : "US", 
        "state" : "UT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ut", 
        "long" : null, 
        "population" : 3205958, 
        "metrics" : {
            "testPositivityRatio" : 0.102, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 38.9, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.656, 
            "vaccinationsCompletedRatio" : 0.567
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 610818, 
            "deaths" : 3640, 
            "positiveTests" : 680769, 
            "negativeTests" : 5187893, 
            "contactTracers" : 1200, 
            "hospitalBeds" : {
                "capacity" : 5571, 
                "currentUsageTotal" : 3378, 
                "currentUsageCovid" : 538
            }, 
            "icuBeds" : {
                "capacity" : 616, 
                "currentUsageTotal" : 421, 
                "currentUsageCovid" : 188
            }, 
            "newCases" : 1332, 
            "newDeaths" : 8, 
            "vaccinesDistributed" : 5201030, 
            "vaccinationsInitiated" : 2103796, 
            "vaccinationsCompleted" : 1819161, 
            "vaccinesAdministered" : 4242898, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/utah-ut"
    }, 
    {
        "fips" : "51", 
        "country" : "US", 
        "state" : "VA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-va", 
        "long" : null, 
        "population" : 8535519, 
        "metrics" : {
            "testPositivityRatio" : 0.087, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 29.2, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.769, 
            "vaccinationsCompletedRatio" : 0.664
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 994069, 
            "deaths" : 14895, 
            "positiveTests" : 1245148, 
            "negativeTests" : 10468180, 
            "contactTracers" : 1547, 
            "hospitalBeds" : {
                "capacity" : 17080, 
                "currentUsageTotal" : 13318, 
                "currentUsageCovid" : 1235
            }, 
            "icuBeds" : {
                "capacity" : 1767, 
                "currentUsageTotal" : 1303, 
                "currentUsageCovid" : 233
            }, 
            "newCases" : 2848, 
            "newDeaths" : 27, 
            "vaccinesDistributed" : 16123465, 
            "vaccinationsInitiated" : 6560563, 
            "vaccinationsCompleted" : 5669829, 
            "vaccinesAdministered" : 13607096, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/virginia-va"
    }, 
    {
        "fips" : "50", 
        "country" : "US", 
        "state" : "VT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-vt", 
        "long" : null, 
        "population" : 623989, 
        "metrics" : {
            "testPositivityRatio" : 0.044, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 78.5, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.869, 
            "vaccinationsCompletedRatio" : 0.747
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 55057, 
            "deaths" : 429, 
            "positiveTests" : 72666, 
            "negativeTests" : 2728201, 
            "contactTracers" : 53, 
            "hospitalBeds" : {
                "capacity" : 1237, 
                "currentUsageTotal" : 946, 
                "currentUsageCovid" : 87
            }, 
            "icuBeds" : {
                "capacity" : 98, 
                "currentUsageTotal" : 83, 
                "currentUsageCovid" : 24
            }, 
            "newCases" : 736, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 1355910, 
            "vaccinationsInitiated" : 542018, 
            "vaccinationsCompleted" : 466078, 
            "vaccinesAdministered" : 1171111, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/vermont-vt"
    }, 
    {
        "fips" : "53", 
        "country" : "US", 
        "state" : "WA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wa", 
        "long" : null, 
        "population" : 7614893, 
        "metrics" : {
            "testPositivityRatio" : 0.078, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.8, 
            "contactTracerCapacityRatio" : 0.31, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.739, 
            "vaccinationsCompletedRatio" : 0.664
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 793102, 
            "deaths" : 9602, 
            "positiveTests" : 618306, 
            "negativeTests" : 9132903, 
            "contactTracers" : 2122, 
            "hospitalBeds" : {
                "capacity" : 12388, 
                "currentUsageTotal" : 10406, 
                "currentUsageCovid" : 915
            }, 
            "icuBeds" : {
                "capacity" : 1227, 
                "currentUsageTotal" : 956, 
                "currentUsageCovid" : 187
            }, 
            "newCases" : 1270, 
            "newDeaths" : 18, 
            "vaccinesDistributed" : 14583505, 
            "vaccinationsInitiated" : 5631009, 
            "vaccinationsCompleted" : 5058695, 
            "vaccinesAdministered" : 11844959, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-05", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 618306.0
                    }
                ]
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9132906.0
                    }
                ]
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-03", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 4989.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 133.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-04", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9132906.0
                    }, 
                    {
                        "date" : "2021-12-05", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 618306.0
                    }
                ]
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/washington-wa"
    }, 
    {
        "fips" : "55", 
        "country" : "US", 
        "state" : "WI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wi", 
        "long" : null, 
        "population" : 5822434, 
        "metrics" : {
            "testPositivityRatio" : 0.133, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 65.0, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.668, 
            "vaccinationsCompletedRatio" : 0.606
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1023595, 
            "deaths" : 10386, 
            "positiveTests" : 1058476, 
            "negativeTests" : 12185835, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 12976, 
                "currentUsageTotal" : 9989, 
                "currentUsageCovid" : 1805
            }, 
            "icuBeds" : {
                "capacity" : 1577, 
                "currentUsageTotal" : 1158, 
                "currentUsageCovid" : 472
            }, 
            "newCases" : 6667, 
            "newDeaths" : 56, 
            "vaccinesDistributed" : 9629605, 
            "vaccinationsInitiated" : 3888085, 
            "vaccinationsCompleted" : 3530596, 
            "vaccinesAdministered" : 8572893, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 149672, 
                    "16-17" : 80309, 
                    "18-24" : 301750, 
                    "25-34" : 445356, 
                    "35-44" : 477987, 
                    "45-54" : 483212, 
                    "55-64" : 624420, 
                    "65_plus" : 891860
                }, 
                "race" : {
                    "asian" : 110910, 
                    "black" : 162076, 
                    "native_american" : 33979, 
                    "other" : 258274, 
                    "unknown" : 142808, 
                    "white" : 2746726
                }, 
                "ethnicity" : {
                    "hispanic" : 208470, 
                    "non-hispanic" : 3107818, 
                    "unknown" : 93312
                }, 
                "sex" : {
                    "female" : 1826168, 
                    "male" : 1611918, 
                    "unknown" : 16687
                }
            }
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-05-27", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 49.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/wisconsin-wi"
    }, 
    {
        "fips" : "54", 
        "country" : "US", 
        "state" : "WV", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wv", 
        "long" : null, 
        "population" : 1792147, 
        "metrics" : {
            "testPositivityRatio" : 0.122, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.9, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.539, 
            "vaccinationsCompletedRatio" : 0.415
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 305418, 
            "deaths" : 5085, 
            "positiveTests" : 336005, 
            "negativeTests" : 3758588, 
            "contactTracers" : 248, 
            "hospitalBeds" : {
                "capacity" : 5886, 
                "currentUsageTotal" : 4966, 
                "currentUsageCovid" : 623
            }, 
            "icuBeds" : {
                "capacity" : 622, 
                "currentUsageTotal" : 519, 
                "currentUsageCovid" : 191
            }, 
            "newCases" : 1063, 
            "newDeaths" : 30, 
            "vaccinesDistributed" : 3394645, 
            "vaccinationsInitiated" : 966553, 
            "vaccinationsCompleted" : 744614, 
            "vaccinesAdministered" : 1691322, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/west_virginia-wv"
    }, 
    {
        "fips" : "56", 
        "country" : "US", 
        "state" : "WY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wy", 
        "long" : null, 
        "population" : 578759, 
        "metrics" : {
            "testPositivityRatio" : 0.063, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.9, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.12, 
            "icuCapacityRatio" : 0.54, 
            "vaccinationsInitiatedRatio" : 0.546, 
            "vaccinationsCompletedRatio" : 0.464
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 112862, 
            "deaths" : 1472, 
            "positiveTests" : 86765, 
            "negativeTests" : 1089460, 
            "contactTracers" : 50, 
            "hospitalBeds" : {
                "capacity" : 1737, 
                "currentUsageTotal" : 926, 
                "currentUsageCovid" : 142
            }, 
            "icuBeds" : {
                "capacity" : 138, 
                "currentUsageTotal" : 74, 
                "currentUsageCovid" : 27
            }, 
            "newCases" : 131, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 837205, 
            "vaccinationsInitiated" : 316040, 
            "vaccinationsCompleted" : 268529, 
            "vaccinesAdministered" : 654822, 
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
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-16", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 128.0
                    }, 
                    {
                        "date" : "2020-11-06", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 996.0
                    }
                ]
            }, 
            "newDeaths" : null, 
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
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
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
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-11", 
        "url" : "https://covidactnow.org/us/wyoming-wy"
    }
]