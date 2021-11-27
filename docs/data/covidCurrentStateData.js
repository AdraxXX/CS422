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
            "testPositivityRatio" : 0.052, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 39.0, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 0.87, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.623, 
            "vaccinationsCompletedRatio" : 0.54
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
            "cases" : 149116, 
            "deaths" : 853, 
            "positiveTests" : 153098, 
            "negativeTests" : 2861023, 
            "contactTracers" : 235, 
            "hospitalBeds" : {
                "capacity" : 1542, 
                "currentUsageTotal" : 1119, 
                "currentUsageCovid" : 92
            }, 
            "icuBeds" : {
                "capacity" : 130, 
                "currentUsageTotal" : 109, 
                "currentUsageCovid" : 16
            }, 
            "newCases" : 625, 
            "newDeaths" : 7, 
            "vaccinesDistributed" : 1269725, 
            "vaccinationsInitiated" : 455580, 
            "vaccinationsCompleted" : 395164, 
            "vaccinesAdministered" : 946031, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.047, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.1, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 0.93, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.562, 
            "vaccinationsCompletedRatio" : 0.46
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 842029, 
            "deaths" : 16115, 
            "positiveTests" : 795232, 
            "negativeTests" : 5461176, 
            "contactTracers" : 404, 
            "hospitalBeds" : {
                "capacity" : 15038, 
                "currentUsageTotal" : 11008, 
                "currentUsageCovid" : 410
            }, 
            "icuBeds" : {
                "capacity" : 1597, 
                "currentUsageTotal" : 1361, 
                "currentUsageCovid" : 110
            }, 
            "newCases" : 398, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7847520, 
            "vaccinationsInitiated" : 2755913, 
            "vaccinationsCompleted" : 2254666, 
            "vaccinesAdministered" : 5191035, 
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 842029.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 842029.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 842029.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 842029.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.064, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 16.6, 
            "contactTracerCapacityRatio" : 0.31, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.6, 
            "vaccinationsCompletedRatio" : 0.491
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
            "cases" : 526706, 
            "deaths" : 8652, 
            "positiveTests" : 325401, 
            "negativeTests" : 3521773, 
            "contactTracers" : 790, 
            "hospitalBeds" : {
                "capacity" : 7757, 
                "currentUsageTotal" : 5255, 
                "currentUsageCovid" : 357
            }, 
            "icuBeds" : {
                "capacity" : 682, 
                "currentUsageTotal" : 510, 
                "currentUsageCovid" : 114
            }, 
            "newCases" : 303, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4877430, 
            "vaccinationsInitiated" : 1809847, 
            "vaccinationsCompleted" : 1480277, 
            "vaccinesAdministered" : 3474961, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.144, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 50.6, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.03, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.7, 
            "vaccinationsInitiatedRatio" : 0.638, 
            "vaccinationsCompletedRatio" : 0.544
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1257578, 
            "deaths" : 22177, 
            "positiveTests" : 1270410, 
            "negativeTests" : 10237865, 
            "contactTracers" : 396, 
            "hospitalBeds" : {
                "capacity" : 17195, 
                "currentUsageTotal" : 13345, 
                "currentUsageCovid" : 2611
            }, 
            "icuBeds" : {
                "capacity" : 2226, 
                "currentUsageTotal" : 1560, 
                "currentUsageCovid" : 593
            }, 
            "newCases" : 3322, 
            "newDeaths" : 4, 
            "vaccinesDistributed" : 11718130, 
            "vaccinationsInitiated" : 4641772, 
            "vaccinationsCompleted" : 3961885, 
            "vaccinesAdministered" : 9458251, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.021, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.6, 
            "contactTracerCapacityRatio" : 0.56, 
            "infectionRate" : 0.89, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.782, 
            "vaccinationsCompletedRatio" : 0.628
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 5060365, 
            "deaths" : 74327, 
            "positiveTests" : 5059031, 
            "negativeTests" : 90175744, 
            "contactTracers" : 10600, 
            "hospitalBeds" : {
                "capacity" : 64130, 
                "currentUsageTotal" : 50288, 
                "currentUsageCovid" : 3451
            }, 
            "icuBeds" : {
                "capacity" : 7041, 
                "currentUsageTotal" : 5348, 
                "currentUsageCovid" : 863
            }, 
            "newCases" : 236, 
            "newDeaths" : 13, 
            "vaccinesDistributed" : 70403965, 
            "vaccinationsInitiated" : 30886780, 
            "vaccinationsCompleted" : 24827738, 
            "vaccinesAdministered" : 58715000, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.092, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 43.0, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 0.94, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.709, 
            "vaccinationsCompletedRatio" : 0.629
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 825658, 
            "deaths" : 9270, 
            "positiveTests" : 827301, 
            "negativeTests" : 10914619, 
            "contactTracers" : 1300, 
            "hospitalBeds" : {
                "capacity" : 11740, 
                "currentUsageTotal" : 8697, 
                "currentUsageCovid" : 1558
            }, 
            "icuBeds" : {
                "capacity" : 1319, 
                "currentUsageTotal" : 1060, 
                "currentUsageCovid" : 519
            }, 
            "newCases" : 1309, 
            "newDeaths" : 7, 
            "vaccinesDistributed" : 10105605, 
            "vaccinationsInitiated" : 4085143, 
            "vaccinationsCompleted" : 3623786, 
            "vaccinesAdministered" : 8488178, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.043, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 22.3, 
            "contactTracerCapacityRatio" : 0.22, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.57, 
            "vaccinationsInitiatedRatio" : 0.833, 
            "vaccinationsCompletedRatio" : 0.717
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 417649, 
            "deaths" : 8865, 
            "positiveTests" : 545345, 
            "negativeTests" : 11252770, 
            "contactTracers" : 860, 
            "hospitalBeds" : {
                "capacity" : 8190, 
                "currentUsageTotal" : 6504, 
                "currentUsageCovid" : 348
            }, 
            "icuBeds" : {
                "capacity" : 1025, 
                "currentUsageTotal" : 580, 
                "currentUsageCovid" : 66
            }, 
            "newCases" : 1900, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6806625, 
            "vaccinationsInitiated" : 2970430, 
            "vaccinationsCompleted" : 2558052, 
            "vaccinesAdministered" : 5898047, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.013, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.8, 
            "contactTracerCapacityRatio" : 0.78, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.17, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.806, 
            "vaccinationsCompletedRatio" : 0.641
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 66510, 
            "deaths" : 1196, 
            "positiveTests" : 96005, 
            "negativeTests" : 3202791, 
            "contactTracers" : 268, 
            "hospitalBeds" : {
                "capacity" : 3450, 
                "currentUsageTotal" : 2601, 
                "currentUsageCovid" : 82
            }, 
            "icuBeds" : {
                "capacity" : 338, 
                "currentUsageTotal" : 260, 
                "currentUsageCovid" : 13
            }, 
            "newCases" : 0, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1450815, 
            "vaccinationsInitiated" : 568837, 
            "vaccinationsCompleted" : 452301, 
            "vaccinesAdministered" : 1154472, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 14422, 
                    "16-17" : 6320, 
                    "16-19" : 5823, 
                    "18-24" : 38020, 
                    "20-44" : 136938, 
                    "25-29" : 40100, 
                    "25-34" : 85163, 
                    "25-39" : 135340, 
                    "30-39" : 80586, 
                    "35-44" : 68919, 
                    "40-49" : 59581, 
                    "45-54" : 49431, 
                    "46-64" : 77288, 
                    "5-11" : 5379, 
                    "50-64" : 80088, 
                    "55-64" : 50162, 
                    "65-74" : 45254, 
                    "65_plus" : 63475, 
                    "75+" : 28826, 
                    "75-84" : 20420, 
                    "85_plus" : 7407
                }, 
                "race" : {
                    "ai_an" : 1031, 
                    "asian" : 11922, 
                    "asian_or_pacific_islander" : 21104, 
                    "black" : 151729, 
                    "other" : 70627, 
                    "unknown" : 33283, 
                    "white" : 165224
                }, 
                "ethnicity" : {
                    "hispanic" : 48971, 
                    "non-hispanic" : 316383, 
                    "unknown" : 81841
                }, 
                "sex" : {
                    "female" : 225520, 
                    "male" : 186633, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.075, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.6, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.714, 
            "vaccinationsCompletedRatio" : 0.609
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 152165, 
            "deaths" : 2173, 
            "positiveTests" : 170975, 
            "negativeTests" : 2687767, 
            "contactTracers" : 211, 
            "hospitalBeds" : {
                "capacity" : 3503, 
                "currentUsageTotal" : 2593, 
                "currentUsageCovid" : 188
            }, 
            "icuBeds" : {
                "capacity" : 192, 
                "currentUsageTotal" : 162, 
                "currentUsageCovid" : 22
            }, 
            "newCases" : 510, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1856355, 
            "vaccinationsInitiated" : 694961, 
            "vaccinationsCompleted" : 593295, 
            "vaccinesAdministered" : 1387212, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.026, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 6.5, 
            "contactTracerCapacityRatio" : 0.37, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.713, 
            "vaccinationsCompletedRatio" : 0.61
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 1, 
        "actuals" : {
            "cases" : 3680462, 
            "deaths" : 61147, 
            "positiveTests" : 4356700, 
            "negativeTests" : 39092900, 
            "contactTracers" : 2600, 
            "hospitalBeds" : {
                "capacity" : 58277, 
                "currentUsageTotal" : 44540, 
                "currentUsageCovid" : 1375
            }, 
            "icuBeds" : {
                "capacity" : 6370, 
                "currentUsageTotal" : 4742, 
                "currentUsageCovid" : 256
            }, 
            "newCases" : 1523, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 38538075, 
            "vaccinationsInitiated" : 15318838, 
            "vaccinationsCompleted" : 13100793, 
            "vaccinesAdministered" : 30501707, 
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3680462.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3680462.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3680462.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3680462.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.036, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 10.2, 
            "contactTracerCapacityRatio" : 0.29, 
            "infectionRate" : 1.02, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.586, 
            "vaccinationsCompletedRatio" : 0.494
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 1623871, 
            "deaths" : 29238, 
            "positiveTests" : 1257711, 
            "negativeTests" : 11147055, 
            "contactTracers" : 1570, 
            "hospitalBeds" : {
                "capacity" : 22355, 
                "currentUsageTotal" : 17704, 
                "currentUsageCovid" : 1140
            }, 
            "icuBeds" : {
                "capacity" : 2566, 
                "currentUsageTotal" : 2000, 
                "currentUsageCovid" : 224
            }, 
            "newCases" : 1345, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 17343825, 
            "vaccinationsInitiated" : 6223181, 
            "vaccinationsCompleted" : 5241785, 
            "vaccinesAdministered" : 12185763, 
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                "anomalies" : [
                    {
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.013, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 6.6, 
            "contactTracerCapacityRatio" : 0.65, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.15, 
            "icuCapacityRatio" : 0.62, 
            "vaccinationsInitiatedRatio" : 0.817, 
            "vaccinationsCompletedRatio" : 0.607
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 1, 
        "actuals" : {
            "cases" : 84334, 
            "deaths" : 1012, 
            "positiveTests" : 92514, 
            "negativeTests" : 2540291, 
            "contactTracers" : 300, 
            "hospitalBeds" : {
                "capacity" : 2600, 
                "currentUsageTotal" : 2429, 
                "currentUsageCovid" : 53
            }, 
            "icuBeds" : {
                "capacity" : 201, 
                "currentUsageTotal" : 125, 
                "currentUsageCovid" : 9
            }, 
            "newCases" : 19, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 2809500, 
            "vaccinationsInitiated" : 1156297, 
            "vaccinationsCompleted" : 859993, 
            "vaccinesAdministered" : 2070008, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.143, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.8, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.622, 
            "vaccinationsCompletedRatio" : 0.565
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
            "cases" : 520318, 
            "deaths" : 7354, 
            "positiveTests" : 508244, 
            "negativeTests" : 4226205, 
            "contactTracers" : 403, 
            "hospitalBeds" : {
                "capacity" : 7524, 
                "currentUsageTotal" : 5498, 
                "currentUsageCovid" : 636
            }, 
            "icuBeds" : {
                "capacity" : 611, 
                "currentUsageTotal" : 501, 
                "currentUsageCovid" : 142
            }, 
            "newCases" : 3411, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5286315, 
            "vaccinationsInitiated" : 1962641, 
            "vaccinationsCompleted" : 1782766, 
            "vaccinesAdministered" : 4130627, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520318.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520318.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520318.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520318.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.095, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.0, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 0.83, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 305552, 
            "deaths" : 3892, 
            "positiveTests" : 395823, 
            "negativeTests" : 2102951, 
            "contactTracers" : 250, 
            "hospitalBeds" : {
                "capacity" : 3349, 
                "currentUsageTotal" : 2472, 
                "currentUsageCovid" : 319
            }, 
            "icuBeds" : {
                "capacity" : 303, 
                "currentUsageTotal" : 247, 
                "currentUsageCovid" : 96
            }, 
            "newCases" : 392, 
            "newDeaths" : 0, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.042, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.3, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.687, 
            "vaccinationsCompletedRatio" : 0.614
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
            "cases" : 1785089, 
            "deaths" : 29258, 
            "positiveTests" : 1718180, 
            "negativeTests" : 29491954, 
            "contactTracers" : 3800, 
            "hospitalBeds" : {
                "capacity" : 30999, 
                "currentUsageTotal" : 22682, 
                "currentUsageCovid" : 2013
            }, 
            "icuBeds" : {
                "capacity" : 3254, 
                "currentUsageTotal" : 2256, 
                "currentUsageCovid" : 383
            }, 
            "newCases" : 4629, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 21492595, 
            "vaccinationsInitiated" : 8703666, 
            "vaccinationsCompleted" : 7776092, 
            "vaccinesAdministered" : 17604565, 
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2020-09-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 5538.0
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.14, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 48.2, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.555, 
            "vaccinationsCompletedRatio" : 0.505
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
            "cases" : 1087699, 
            "deaths" : 17386, 
            "positiveTests" : 1145663, 
            "negativeTests" : 10227374, 
            "contactTracers" : 1600, 
            "hospitalBeds" : {
                "capacity" : 18948, 
                "currentUsageTotal" : 12875, 
                "currentUsageCovid" : 1881
            }, 
            "icuBeds" : {
                "capacity" : 2326, 
                "currentUsageTotal" : 1764, 
                "currentUsageCovid" : 461
            }, 
            "newCases" : 3984, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10101390, 
            "vaccinationsInitiated" : 3737561, 
            "vaccinationsCompleted" : 3401497, 
            "vaccinesAdministered" : 7716326, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1087699.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1087699.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1087699.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1087699.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.109, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.9, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.657, 
            "vaccinationsCompletedRatio" : 0.544
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
            "cases" : 459181, 
            "deaths" : 6707, 
            "positiveTests" : 416945, 
            "negativeTests" : 3892029, 
            "contactTracers" : 359, 
            "hospitalBeds" : {
                "capacity" : 8214, 
                "currentUsageTotal" : 5018, 
                "currentUsageCovid" : 534
            }, 
            "icuBeds" : {
                "capacity" : 809, 
                "currentUsageTotal" : 606, 
                "currentUsageCovid" : 132
            }, 
            "newCases" : 42, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4782995, 
            "vaccinationsInitiated" : 1912921, 
            "vaccinationsCompleted" : 1584917, 
            "vaccinesAdministered" : 3644839, 
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                "anomalies" : [
                    {
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 6704.0
                    }
                ]
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
                "anomalies" : [
                    {
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 28.6, 
            "contactTracerCapacityRatio" : 0.19, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.599, 
            "vaccinationsCompletedRatio" : 0.519
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 782245, 
            "deaths" : 10894, 
            "positiveTests" : 757666, 
            "negativeTests" : 6157533, 
            "contactTracers" : 1240, 
            "hospitalBeds" : {
                "capacity" : 11877, 
                "currentUsageTotal" : 9028, 
                "currentUsageCovid" : 885
            }, 
            "icuBeds" : {
                "capacity" : 1437, 
                "currentUsageTotal" : 1232, 
                "currentUsageCovid" : 194
            }, 
            "newCases" : 107, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7046495, 
            "vaccinationsInitiated" : 2674722, 
            "vaccinationsCompleted" : 2318846, 
            "vaccinesAdministered" : 5346850, 
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 782245.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 782245.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 782245.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 782245.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.021, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 8.2, 
            "contactTracerCapacityRatio" : 0.42, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.553, 
            "vaccinationsCompletedRatio" : 0.487
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 769051, 
            "deaths" : 14777, 
            "positiveTests" : 708039, 
            "negativeTests" : 8124467, 
            "contactTracers" : 800, 
            "hospitalBeds" : {
                "capacity" : 12714, 
                "currentUsageTotal" : 8882, 
                "currentUsageCovid" : 197
            }, 
            "icuBeds" : {
                "capacity" : 1491, 
                "currentUsageTotal" : 1095, 
                "currentUsageCovid" : 77
            }, 
            "newCases" : 337, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6711910, 
            "vaccinationsInitiated" : 2568779, 
            "vaccinationsCompleted" : 2262153, 
            "vaccinesAdministered" : 5162105, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 769051.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 769051.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 769051.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 769051.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.032, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 39.3, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.19, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.85, 
            "vaccinationsCompletedRatio" : 0.708
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 909705, 
            "deaths" : 19351, 
            "positiveTests" : 984799, 
            "negativeTests" : 31373060, 
            "contactTracers" : 2350, 
            "hospitalBeds" : {
                "capacity" : 17662, 
                "currentUsageTotal" : 15321, 
                "currentUsageCovid" : 669
            }, 
            "icuBeds" : {
                "capacity" : 1287, 
                "currentUsageTotal" : 1064, 
                "currentUsageCovid" : 158
            }, 
            "newCases" : 5298, 
            "newDeaths" : 22, 
            "vaccinesDistributed" : 13342090, 
            "vaccinationsInitiated" : 5856929, 
            "vaccinationsCompleted" : 4883284, 
            "vaccinesAdministered" : 11415048, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.042, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 15.5, 
            "contactTracerCapacityRatio" : 0.3, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.7, 
            "vaccinationsInitiatedRatio" : 0.764, 
            "vaccinationsCompletedRatio" : 0.672
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 579824, 
            "deaths" : 11148, 
            "positiveTests" : 1205861, 
            "negativeTests" : 14575383, 
            "contactTracers" : 1400, 
            "hospitalBeds" : {
                "capacity" : 11342, 
                "currentUsageTotal" : 9154, 
                "currentUsageCovid" : 800
            }, 
            "icuBeds" : {
                "capacity" : 1318, 
                "currentUsageTotal" : 924, 
                "currentUsageCovid" : 155
            }, 
            "newCases" : 740, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 12124970, 
            "vaccinationsInitiated" : 4619856, 
            "vaccinationsCompleted" : 4061450, 
            "vaccinesAdministered" : 9329572, 
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.094, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.0, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.814, 
            "vaccinationsCompletedRatio" : 0.721
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 118489, 
            "deaths" : 1303, 
            "positiveTests" : 101661, 
            "negativeTests" : 2953695, 
            "contactTracers" : 86, 
            "hospitalBeds" : {
                "capacity" : 3300, 
                "currentUsageTotal" : 2374, 
                "currentUsageCovid" : 334
            }, 
            "icuBeds" : {
                "capacity" : 350, 
                "currentUsageTotal" : 273, 
                "currentUsageCovid" : 111
            }, 
            "newCases" : 548, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2644450, 
            "vaccinationsInitiated" : 1093735, 
            "vaccinationsCompleted" : 968553, 
            "vaccinesAdministered" : 2198768, 
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 118489.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 118489.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 118489.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 118489.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.178, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 84.7, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.608, 
            "vaccinationsCompletedRatio" : 0.544
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
            "cases" : 1444554, 
            "deaths" : 25213, 
            "positiveTests" : 1543913, 
            "negativeTests" : 17521048, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 22715, 
                "currentUsageTotal" : 19192, 
                "currentUsageCovid" : 4121
            }, 
            "icuBeds" : {
                "capacity" : 2592, 
                "currentUsageTotal" : 2243, 
                "currentUsageCovid" : 834
            }, 
            "newCases" : 20017, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 16400130, 
            "vaccinationsInitiated" : 6069178, 
            "vaccinationsCompleted" : 5433838, 
            "vaccinesAdministered" : 12554249, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1444554.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1444554.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1444554.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1444554.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.116, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 72.0, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.685, 
            "vaccinationsCompletedRatio" : 0.622
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 895353, 
            "deaths" : 9462, 
            "positiveTests" : 1286325, 
            "negativeTests" : 16271249, 
            "contactTracers" : 1028, 
            "hospitalBeds" : {
                "capacity" : 10309, 
                "currentUsageTotal" : 8444, 
                "currentUsageCovid" : 1591
            }, 
            "icuBeds" : {
                "capacity" : 982, 
                "currentUsageTotal" : 830, 
                "currentUsageCovid" : 334
            }, 
            "newCases" : 4130, 
            "newDeaths" : 56, 
            "vaccinesDistributed" : 9797640, 
            "vaccinationsInitiated" : 3864994, 
            "vaccinationsCompleted" : 3508269, 
            "vaccinesAdministered" : 8109317, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.091, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 22.5, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.05, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.594, 
            "vaccinationsCompletedRatio" : 0.508
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 913351, 
            "deaths" : 15446, 
            "positiveTests" : 955677, 
            "negativeTests" : 8117499, 
            "contactTracers" : 94, 
            "hospitalBeds" : {
                "capacity" : 16963, 
                "currentUsageTotal" : 13790, 
                "currentUsageCovid" : 1268
            }, 
            "icuBeds" : {
                "capacity" : 1789, 
                "currentUsageTotal" : 1457, 
                "currentUsageCovid" : 311
            }, 
            "newCases" : 273, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 9295655, 
            "vaccinationsInitiated" : 3642900, 
            "vaccinationsCompleted" : 3117242, 
            "vaccinesAdministered" : 7329322, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : null, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 61.6, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.75, 
            "infectionRateCI90" : 0.47, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.718, 
            "vaccinationsCompletedRatio" : 0.657
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 4, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 669, 
            "deaths" : 3, 
            "positiveTests" : 564, 
            "negativeTests" : 54971, 
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
            "newCases" : 20, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 99180, 
            "vaccinationsInitiated" : 38485, 
            "vaccinationsCompleted" : 35240, 
            "vaccinesAdministered" : 78375, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.061, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 12.9, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.537, 
            "vaccinationsCompletedRatio" : 0.469
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 512632, 
            "deaths" : 10262, 
            "positiveTests" : 243909, 
            "negativeTests" : 1771244, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 8613, 
                "currentUsageTotal" : 5858, 
                "currentUsageCovid" : 221
            }, 
            "icuBeds" : {
                "capacity" : 769, 
                "currentUsageTotal" : 612, 
                "currentUsageCovid" : 62
            }, 
            "newCases" : 432, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4470015, 
            "vaccinationsInitiated" : 1597621, 
            "vaccinationsCompleted" : 1395494, 
            "vaccinesAdministered" : 3179082, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 512632.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 512632.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 512632.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 512632.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.095, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 26.6, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 0.82, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.594, 
            "vaccinationsCompletedRatio" : 0.517
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 190210, 
            "deaths" : 2632, 
            "positiveTests" : 205001, 
            "negativeTests" : 1489069, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2963, 
                "currentUsageTotal" : 2131, 
                "currentUsageCovid" : 240
            }, 
            "icuBeds" : {
                "capacity" : 226, 
                "currentUsageTotal" : 157, 
                "currentUsageCovid" : 59
            }, 
            "newCases" : 328, 
            "newDeaths" : 18, 
            "vaccinesDistributed" : 1633535, 
            "vaccinationsInitiated" : 635021, 
            "vaccinationsCompleted" : 552782, 
            "vaccinesAdministered" : 1309960, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.057, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 15.6, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.694, 
            "vaccinationsCompletedRatio" : 0.54
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
            "cases" : 1521653, 
            "deaths" : 18699, 
            "positiveTests" : 1498582, 
            "negativeTests" : 15830576, 
            "contactTracers" : 1215, 
            "hospitalBeds" : {
                "capacity" : 23317, 
                "currentUsageTotal" : 18076, 
                "currentUsageCovid" : 1207
            }, 
            "icuBeds" : {
                "capacity" : 2281, 
                "currentUsageTotal" : 1803, 
                "currentUsageCovid" : 270
            }, 
            "newCases" : 422, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 17691300, 
            "vaccinationsInitiated" : 7282242, 
            "vaccinationsCompleted" : 5660326, 
            "vaccinesAdministered" : 13378128, 
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1521653.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1521653.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1521653.0
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
                        "date" : "2021-11-25", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1521653.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.098, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.9, 
            "contactTracerCapacityRatio" : 0.24, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.576, 
            "vaccinationsCompletedRatio" : 0.486
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
            "cases" : 160762, 
            "deaths" : 1912, 
            "positiveTests" : 128829, 
            "negativeTests" : 1865957, 
            "contactTracers" : 500, 
            "hospitalBeds" : {
                "capacity" : 2301, 
                "currentUsageTotal" : 1834, 
                "currentUsageCovid" : 285
            }, 
            "icuBeds" : {
                "capacity" : 209, 
                "currentUsageTotal" : 163, 
                "currentUsageCovid" : 79
            }, 
            "newCases" : 174, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1141360, 
            "vaccinationsInitiated" : 438649, 
            "vaccinationsCompleted" : 370361, 
            "vaccinesAdministered" : 886167, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.159, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 45.9, 
            "contactTracerCapacityRatio" : 0.23, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.637, 
            "vaccinationsCompletedRatio" : 0.572
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 305358, 
            "deaths" : 2813, 
            "positiveTests" : 304718, 
            "negativeTests" : 2148251, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 4258, 
                "currentUsageTotal" : 3304, 
                "currentUsageCovid" : 537
            }, 
            "icuBeds" : {
                "capacity" : 491, 
                "currentUsageTotal" : 417, 
                "currentUsageCovid" : 158
            }, 
            "newCases" : 926, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3136560, 
            "vaccinationsInitiated" : 1232270, 
            "vaccinationsCompleted" : 1106433, 
            "vaccinesAdministered" : 2557474, 
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 305358.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 305358.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 305358.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 305358.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.089, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 73.5, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
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
            "cases" : 155711, 
            "deaths" : 1683, 
            "positiveTests" : 130542, 
            "negativeTests" : 2787992, 
            "contactTracers" : 140, 
            "hospitalBeds" : {
                "capacity" : 3002, 
                "currentUsageTotal" : 2447, 
                "currentUsageCovid" : 361
            }, 
            "icuBeds" : {
                "capacity" : 223, 
                "currentUsageTotal" : 188, 
                "currentUsageCovid" : 66
            }, 
            "newCases" : 1132, 
            "newDeaths" : 0, 
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 155711.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 155711.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 155711.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 155711.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.051, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 24.4, 
            "contactTracerCapacityRatio" : 0.28, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.44, 
            "vaccinationsInitiatedRatio" : 0.784, 
            "vaccinationsCompletedRatio" : 0.675
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1243354, 
            "deaths" : 28326, 
            "positiveTests" : 1240605, 
            "negativeTests" : 18563888, 
            "contactTracers" : 3000, 
            "hospitalBeds" : {
                "capacity" : 24349, 
                "currentUsageTotal" : 16950, 
                "currentUsageCovid" : 918
            }, 
            "icuBeds" : {
                "capacity" : 2926, 
                "currentUsageTotal" : 1290, 
                "currentUsageCovid" : 139
            }, 
            "newCases" : 2144, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 16956675, 
            "vaccinationsInitiated" : 6966872, 
            "vaccinationsCompleted" : 5997187, 
            "vaccinesAdministered" : 13301118, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.134, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 67.0, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.91, 
            "vaccinationsInitiatedRatio" : 0.76, 
            "vaccinationsCompletedRatio" : 0.633
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
            "cases" : 308152, 
            "deaths" : 5312, 
            "positiveTests" : 398085, 
            "negativeTests" : 3732063, 
            "contactTracers" : 375, 
            "hospitalBeds" : {
                "capacity" : 4286, 
                "currentUsageTotal" : 3358, 
                "currentUsageCovid" : 660
            }, 
            "icuBeds" : {
                "capacity" : 455, 
                "currentUsageTotal" : 415, 
                "currentUsageCovid" : 195
            }, 
            "newCases" : 1409, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3607085, 
            "vaccinationsInitiated" : 1594411, 
            "vaccinationsCompleted" : 1328003, 
            "vaccinesAdministered" : 3091322, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 308152.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 308152.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 308152.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 308152.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.097, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.9, 
            "contactTracerCapacityRatio" : 0.19, 
            "infectionRate" : 0.99, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.659, 
            "vaccinationsCompletedRatio" : 0.542
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
            "cases" : 467774, 
            "deaths" : 7972, 
            "positiveTests" : 590667, 
            "negativeTests" : 4081958, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 8330, 
                "currentUsageTotal" : 6509, 
                "currentUsageCovid" : 690
            }, 
            "icuBeds" : {
                "capacity" : 810, 
                "currentUsageTotal" : 662, 
                "currentUsageCovid" : 158
            }, 
            "newCases" : 713, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4770660, 
            "vaccinationsInitiated" : 2030864, 
            "vaccinationsCompleted" : 1670646, 
            "vaccinesAdministered" : 3908996, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 467774.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 467774.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 467774.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 467774.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.043, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 34.7, 
            "contactTracerCapacityRatio" : 0.28, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.775, 
            "vaccinationsCompletedRatio" : 0.682
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
            "cases" : 2706059, 
            "deaths" : 56861, 
            "positiveTests" : 2959785, 
            "negativeTests" : 62039567, 
            "contactTracers" : 9620, 
            "hospitalBeds" : {
                "capacity" : 48591, 
                "currentUsageTotal" : 39288, 
                "currentUsageCovid" : 2902
            }, 
            "icuBeds" : {
                "capacity" : 4942, 
                "currentUsageTotal" : 3525, 
                "currentUsageCovid" : 491
            }, 
            "newCases" : 8200, 
            "newDeaths" : 21, 
            "vaccinesDistributed" : 35551375, 
            "vaccinationsInitiated" : 15075041, 
            "vaccinationsCompleted" : 13268116, 
            "vaccinesAdministered" : 29477691, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.118, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 49.7, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.12, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.58, 
            "vaccinationsCompletedRatio" : 0.528
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
            "cases" : 1669274, 
            "deaths" : 26483, 
            "positiveTests" : 1422107, 
            "negativeTests" : 16098789, 
            "contactTracers" : 1659, 
            "hospitalBeds" : {
                "capacity" : 31226, 
                "currentUsageTotal" : 24296, 
                "currentUsageCovid" : 3679
            }, 
            "icuBeds" : {
                "capacity" : 3952, 
                "currentUsageTotal" : 3208, 
                "currentUsageCovid" : 943
            }, 
            "newCases" : 9143, 
            "newDeaths" : 293, 
            "vaccinesDistributed" : 18198005, 
            "vaccinationsInitiated" : 6779515, 
            "vaccinationsCompleted" : 6175735, 
            "vaccinesAdministered" : 14192281, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.085, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.4, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.623, 
            "vaccinationsCompletedRatio" : 0.513
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
            "cases" : 662220, 
            "deaths" : 10879, 
            "positiveTests" : 625265, 
            "negativeTests" : 2588169, 
            "contactTracers" : 700, 
            "hospitalBeds" : {
                "capacity" : 10088, 
                "currentUsageTotal" : 7283, 
                "currentUsageCovid" : 552
            }, 
            "icuBeds" : {
                "capacity" : 991, 
                "currentUsageTotal" : 816, 
                "currentUsageCovid" : 153
            }, 
            "newCases" : 545, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6008460, 
            "vaccinationsInitiated" : 2466343, 
            "vaccinationsCompleted" : 2030324, 
            "vaccinesAdministered" : 4822388, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 662220.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 662220.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 662220.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 662220.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.045, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.1, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.71, 
            "vaccinationsCompletedRatio" : 0.638
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
            "cases" : 387485, 
            "deaths" : 5116, 
            "positiveTests" : 343314, 
            "negativeTests" : 5304821, 
            "contactTracers" : 656, 
            "hospitalBeds" : {
                "capacity" : 7012, 
                "currentUsageTotal" : 5507, 
                "currentUsageCovid" : 503
            }, 
            "icuBeds" : {
                "capacity" : 793, 
                "currentUsageTotal" : 581, 
                "currentUsageCovid" : 93
            }, 
            "newCases" : 851, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7955455, 
            "vaccinationsInitiated" : 2996512, 
            "vaccinationsCompleted" : 2692675, 
            "vaccinesAdministered" : 6122487, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 387485.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 387485.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 387485.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 387485.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.119, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.2, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.808, 
            "vaccinationsCompletedRatio" : 0.58
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1716600, 
            "deaths" : 33247, 
            "positiveTests" : 1680699, 
            "negativeTests" : 18915028, 
            "contactTracers" : 1508, 
            "hospitalBeds" : {
                "capacity" : 30681, 
                "currentUsageTotal" : 26004, 
                "currentUsageCovid" : 3986
            }, 
            "icuBeds" : {
                "capacity" : 3769, 
                "currentUsageTotal" : 3081, 
                "currentUsageCovid" : 780
            }, 
            "newCases" : 6122, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 23661345, 
            "vaccinationsInitiated" : 10349983, 
            "vaccinationsCompleted" : 7430988, 
            "vaccinesAdministered" : 18031448, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "10-14" : 204556, 
                    "100-104" : 3903, 
                    "105_plus" : 415, 
                    "15-19" : 360116, 
                    "20-24" : 374567, 
                    "25-29" : 366214, 
                    "30-34" : 412151, 
                    "35-39" : 432790, 
                    "40-44" : 431727, 
                    "45-49" : 424506, 
                    "5-9" : 64391, 
                    "50-54" : 504996, 
                    "55-59" : 569532, 
                    "60-64" : 635285, 
                    "65-69" : 616829, 
                    "70-74" : 518564, 
                    "75-79" : 358221, 
                    "80-84" : 243413, 
                    "85-89" : 155480, 
                    "90-94" : 85904, 
                    "95-99" : 26928
                }, 
                "race" : {
                    "ai_an" : 7439, 
                    "asian" : 109515, 
                    "black" : 333301, 
                    "multiple_other" : 882584, 
                    "pacific_islander" : 15129, 
                    "unknown" : 561082, 
                    "white" : 4881616
                }, 
                "ethnicity" : {
                    "hispanic" : 352292, 
                    "non-hispanic" : 5001080, 
                    "unknown" : 1437294
                }, 
                "sex" : {
                    "female" : 3608332, 
                    "male" : 3087592, 
                    "unknown" : 94742
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.03, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 3.2, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 0.94, 
            "infectionRateCI90" : 0.13, 
            "icuCapacityRatio" : 0.66, 
            "vaccinationsInitiatedRatio" : 0.842, 
            "vaccinationsCompletedRatio" : 0.739
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
            "cases" : 221437, 
            "deaths" : 3266, 
            "positiveTests" : 120523, 
            "negativeTests" : 1704681, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : 9257, 
                "currentUsageTotal" : 5596, 
                "currentUsageCovid" : 59
            }, 
            "icuBeds" : {
                "capacity" : 670, 
                "currentUsageTotal" : 444, 
                "currentUsageCovid" : 3
            }, 
            "newCases" : 104, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6008940, 
            "vaccinationsInitiated" : 2690338, 
            "vaccinationsCompleted" : 2361160, 
            "vaccinesAdministered" : 5335589, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.042, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 44.6, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.824, 
            "vaccinationsCompletedRatio" : 0.722
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
            "cases" : 188561, 
            "deaths" : 2915, 
            "positiveTests" : 225827, 
            "negativeTests" : 5041584, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2409, 
                "currentUsageTotal" : 2137, 
                "currentUsageCovid" : 123
            }, 
            "icuBeds" : {
                "capacity" : 139, 
                "currentUsageTotal" : 123, 
                "currentUsageCovid" : 21
            }, 
            "newCases" : 426, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2024085, 
            "vaccinationsInitiated" : 873059, 
            "vaccinationsCompleted" : 765072, 
            "vaccinesAdministered" : 1714653, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 188561.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 188561.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 188561.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 188561.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.038, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 11.2, 
            "contactTracerCapacityRatio" : 0.27, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.598, 
            "vaccinationsCompletedRatio" : 0.512
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 915671, 
            "deaths" : 14186, 
            "positiveTests" : 955097, 
            "negativeTests" : 8869327, 
            "contactTracers" : 775, 
            "hospitalBeds" : {
                "capacity" : 11706, 
                "currentUsageTotal" : 8873, 
                "currentUsageCovid" : 387
            }, 
            "icuBeds" : {
                "capacity" : 1318, 
                "currentUsageTotal" : 966, 
                "currentUsageCovid" : 112
            }, 
            "newCases" : 725, 
            "newDeaths" : 33, 
            "vaccinesDistributed" : 8329255, 
            "vaccinationsInitiated" : 3080965, 
            "vaccinationsCompleted" : 2634512, 
            "vaccinesAdministered" : 6118807, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.15, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 45.5, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.67, 
            "vaccinationsInitiatedRatio" : 0.663, 
            "vaccinationsCompletedRatio" : 0.543
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 164292, 
            "deaths" : 2320, 
            "positiveTests" : 111627, 
            "negativeTests" : 775528, 
            "contactTracers" : 350, 
            "hospitalBeds" : {
                "capacity" : 2788, 
                "currentUsageTotal" : 1801, 
                "currentUsageCovid" : 234
            }, 
            "icuBeds" : {
                "capacity" : 248, 
                "currentUsageTotal" : 165, 
                "currentUsageCovid" : 66
            }, 
            "newCases" : 571, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1483165, 
            "vaccinationsInitiated" : 586804, 
            "vaccinationsCompleted" : 480731, 
            "vaccinesAdministered" : 1135140, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 164292.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 164292.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 164292.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 164292.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.06, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.5, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.565, 
            "vaccinationsCompletedRatio" : 0.494
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1280475, 
            "deaths" : 16826, 
            "positiveTests" : 1081784, 
            "negativeTests" : 8126968, 
            "contactTracers" : 1226, 
            "hospitalBeds" : {
                "capacity" : 19836, 
                "currentUsageTotal" : 13693, 
                "currentUsageCovid" : 861
            }, 
            "icuBeds" : {
                "capacity" : 2434, 
                "currentUsageTotal" : 1687, 
                "currentUsageCovid" : 231
            }, 
            "newCases" : 1634, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10256940, 
            "vaccinationsInitiated" : 3858576, 
            "vaccinationsCompleted" : 3372783, 
            "vaccinesAdministered" : 8081410, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1280475.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1280475.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1280475.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1280475.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.049, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 7.1, 
            "contactTracerCapacityRatio" : 0.36, 
            "infectionRate" : 0.91, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.637, 
            "vaccinationsCompletedRatio" : 0.545
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 1, 
        "actuals" : {
            "cases" : 4273751, 
            "deaths" : 73923, 
            "positiveTests" : 4519351, 
            "negativeTests" : 34100909, 
            "contactTracers" : 3722, 
            "hospitalBeds" : {
                "capacity" : 64407, 
                "currentUsageTotal" : 48008, 
                "currentUsageCovid" : 3335
            }, 
            "icuBeds" : {
                "capacity" : 6844, 
                "currentUsageTotal" : 5719, 
                "currentUsageCovid" : 883
            }, 
            "newCases" : 40, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 49043325, 
            "vaccinationsInitiated" : 18474428, 
            "vaccinationsCompleted" : 15793073, 
            "vaccinesAdministered" : 36862434, 
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
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4519351.0
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
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 34100910.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 34100910.0
                    }, 
                    {
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4519351.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.11, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.2, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.02, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.637, 
            "vaccinationsCompletedRatio" : 0.552
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
            "cases" : 592258, 
            "deaths" : 3487, 
            "positiveTests" : 663937, 
            "negativeTests" : 5044653, 
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
            "newCases" : 2416, 
            "newDeaths" : 17, 
            "vaccinesDistributed" : 4974700, 
            "vaccinationsInitiated" : 2041421, 
            "vaccinationsCompleted" : 1770907, 
            "vaccinesAdministered" : 4001214, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.062, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.2, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.749, 
            "vaccinationsCompletedRatio" : 0.646
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
            "cases" : 963739, 
            "deaths" : 14635, 
            "positiveTests" : 1221741, 
            "negativeTests" : 10213741, 
            "contactTracers" : 1547, 
            "hospitalBeds" : {
                "capacity" : 17748, 
                "currentUsageTotal" : 13039, 
                "currentUsageCovid" : 946
            }, 
            "icuBeds" : {
                "capacity" : 1902, 
                "currentUsageTotal" : 1371, 
                "currentUsageCovid" : 219
            }, 
            "newCases" : 1267, 
            "newDeaths" : 19, 
            "vaccinesDistributed" : 15593805, 
            "vaccinationsInitiated" : 6393468, 
            "vaccinationsCompleted" : 5516063, 
            "vaccinesAdministered" : 12883121, 
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.039, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 61.0, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.846, 
            "vaccinationsCompletedRatio" : 0.727
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 48120, 
            "deaths" : 406, 
            "positiveTests" : 65777, 
            "negativeTests" : 2588777, 
            "contactTracers" : 53, 
            "hospitalBeds" : {
                "capacity" : 1238, 
                "currentUsageTotal" : 897, 
                "currentUsageCovid" : 67
            }, 
            "icuBeds" : {
                "capacity" : 89, 
                "currentUsageTotal" : 78, 
                "currentUsageCovid" : 20
            }, 
            "newCases" : 315, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1298770, 
            "vaccinationsInitiated" : 527825, 
            "vaccinationsCompleted" : 453418, 
            "vaccinesAdministered" : 1101607, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 48120.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 48120.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 48120.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 48120.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.086, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 18.0, 
            "contactTracerCapacityRatio" : 0.31, 
            "infectionRate" : 0.94, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.723, 
            "vaccinationsCompletedRatio" : 0.648
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
            "cases" : 770886, 
            "deaths" : 9256, 
            "positiveTests" : 599800, 
            "negativeTests" : 8841717, 
            "contactTracers" : 2122, 
            "hospitalBeds" : {
                "capacity" : 12444, 
                "currentUsageTotal" : 10274, 
                "currentUsageCovid" : 960
            }, 
            "icuBeds" : {
                "capacity" : 1204, 
                "currentUsageTotal" : 949, 
                "currentUsageCovid" : 211
            }, 
            "newCases" : 1095, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 13937215, 
            "vaccinationsInitiated" : 5508609, 
            "vaccinationsCompleted" : 4935124, 
            "vaccinesAdministered" : 11228003, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 770886.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 599800.0
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
                        "date" : "2021-11-20", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8841739.0
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
                        "date" : "2021-11-20", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8841739.0
                    }, 
                    {
                        "date" : "2021-11-21", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 599800.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 770886.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 770886.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 770886.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.119, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 55.4, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.654, 
            "vaccinationsCompletedRatio" : 0.593
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
            "cases" : 967815, 
            "deaths" : 9944, 
            "positiveTests" : 1010764, 
            "negativeTests" : 11872171, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 13005, 
                "currentUsageTotal" : 9599, 
                "currentUsageCovid" : 1472
            }, 
            "icuBeds" : {
                "capacity" : 1553, 
                "currentUsageTotal" : 1109, 
                "currentUsageCovid" : 369
            }, 
            "newCases" : 753, 
            "newDeaths" : 4, 
            "vaccinesDistributed" : 9243335, 
            "vaccinationsInitiated" : 3807811, 
            "vaccinationsCompleted" : 3452828, 
            "vaccinesAdministered" : 8080069, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 147601, 
                    "16-17" : 79566, 
                    "18-24" : 297443, 
                    "25-34" : 439260, 
                    "35-44" : 473108, 
                    "45-54" : 479236, 
                    "55-64" : 620286, 
                    "65_plus" : 889252
                }, 
                "race" : {
                    "asian" : 109264, 
                    "black" : 158711, 
                    "native_american" : 33536, 
                    "other" : 273085, 
                    "unknown" : 148152, 
                    "white" : 2703232
                }, 
                "ethnicity" : {
                    "hispanic" : 205251, 
                    "non-hispanic" : 3077130, 
                    "unknown" : 93312
                }, 
                "sex" : {
                    "female" : 1811762, 
                    "male" : 1597504, 
                    "unknown" : 16714
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.103, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.0, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.538, 
            "vaccinationsCompletedRatio" : 0.415
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
            "cases" : 290909, 
            "deaths" : 4817, 
            "positiveTests" : 323985, 
            "negativeTests" : 3671470, 
            "contactTracers" : 248, 
            "hospitalBeds" : {
                "capacity" : 5869, 
                "currentUsageTotal" : 4550, 
                "currentUsageCovid" : 542
            }, 
            "icuBeds" : {
                "capacity" : 626, 
                "currentUsageTotal" : 472, 
                "currentUsageCovid" : 163
            }, 
            "newCases" : 883, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3381025, 
            "vaccinationsInitiated" : 964820, 
            "vaccinationsCompleted" : 744003, 
            "vaccinesAdministered" : 1689798, 
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 290909.0
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
                "anomalies" : [
                    {
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 290909.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 290909.0
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
                        "date" : "2021-11-24", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 290909.0
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
        "lastUpdatedDate" : "2021-11-27", 
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
            "testPositivityRatio" : 0.066, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.4, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 0.89, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.55, 
            "vaccinationsInitiatedRatio" : 0.532, 
            "vaccinationsCompletedRatio" : 0.453
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 110051, 
            "deaths" : 1347, 
            "positiveTests" : 85092, 
            "negativeTests" : 1064881, 
            "contactTracers" : 50, 
            "hospitalBeds" : {
                "capacity" : 1748, 
                "currentUsageTotal" : 903, 
                "currentUsageCovid" : 125
            }, 
            "icuBeds" : {
                "capacity" : 137, 
                "currentUsageTotal" : 76, 
                "currentUsageCovid" : 26
            }, 
            "newCases" : 249, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 814305, 
            "vaccinationsInitiated" : 307923, 
            "vaccinationsCompleted" : 262417, 
            "vaccinesAdministered" : 623826, 
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                "anomalies" : [
                    {
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
                        "date" : "2021-11-23", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : null
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
        "lastUpdatedDate" : "2021-11-27", 
        "url" : "https://covidactnow.org/us/wyoming-wy"
    }
]