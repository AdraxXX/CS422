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
            "testPositivityRatio" : 0.091, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.3, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.65, 
            "vaccinationsCompletedRatio" : 0.563
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
            "cases" : 156130, 
            "deaths" : 954, 
            "positiveTests" : 154657, 
            "negativeTests" : 2894038, 
            "contactTracers" : 235, 
            "hospitalBeds" : {
                "capacity" : 1588, 
                "currentUsageTotal" : 1164, 
                "currentUsageCovid" : 54
            }, 
            "icuBeds" : {
                "capacity" : 133, 
                "currentUsageTotal" : 108, 
                "currentUsageCovid" : 11
            }, 
            "newCases" : 985, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1320615, 
            "vaccinationsInitiated" : 475688, 
            "vaccinationsCompleted" : 412110, 
            "vaccinesAdministered" : 1024695, 
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 156130.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 156130.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 156130.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 156130.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.284, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 118.3, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.67, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.585, 
            "vaccinationsCompletedRatio" : 0.476
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 906976, 
            "deaths" : 16455, 
            "positiveTests" : 832114, 
            "negativeTests" : 5731056, 
            "contactTracers" : 404, 
            "hospitalBeds" : {
                "capacity" : 14566, 
                "currentUsageTotal" : 10115, 
                "currentUsageCovid" : 1088
            }, 
            "icuBeds" : {
                "capacity" : 1482, 
                "currentUsageTotal" : 1202, 
                "currentUsageCovid" : 190
            }, 
            "newCases" : 12927, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8051430, 
            "vaccinationsInitiated" : 2868764, 
            "vaccinationsCompleted" : 2335344, 
            "vaccinesAdministered" : 5624234, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.212, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 106.1, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.49, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.627, 
            "vaccinationsCompletedRatio" : 0.512
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 572822, 
            "deaths" : 9196, 
            "positiveTests" : 349289, 
            "negativeTests" : 3713440, 
            "contactTracers" : 790, 
            "hospitalBeds" : {
                "capacity" : 7958, 
                "currentUsageTotal" : 5141, 
                "currentUsageCovid" : 575
            }, 
            "icuBeds" : {
                "capacity" : 711, 
                "currentUsageTotal" : 521, 
                "currentUsageCovid" : 160
            }, 
            "newCases" : 2181, 
            "newDeaths" : 16, 
            "vaccinesDistributed" : 4990280, 
            "vaccinationsInitiated" : 1892791, 
            "vaccinationsCompleted" : 1545513, 
            "vaccinesAdministered" : 3800076, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.2, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 69.4, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.673, 
            "vaccinationsCompletedRatio" : 0.57
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
            "cases" : 1389068, 
            "deaths" : 24355, 
            "positiveTests" : 1401398, 
            "negativeTests" : 11017574, 
            "contactTracers" : 396, 
            "hospitalBeds" : {
                "capacity" : 16488, 
                "currentUsageTotal" : 13142, 
                "currentUsageCovid" : 2408
            }, 
            "icuBeds" : {
                "capacity" : 1860, 
                "currentUsageTotal" : 1448, 
                "currentUsageCovid" : 511
            }, 
            "newCases" : 701, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 12612060, 
            "vaccinationsInitiated" : 4898570, 
            "vaccinationsCompleted" : 4149298, 
            "vaccinesAdministered" : 10491351, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.119, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 89.6, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.47, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.827, 
            "vaccinationsCompletedRatio" : 0.661
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 5560323, 
            "deaths" : 76712, 
            "positiveTests" : 5471112, 
            "negativeTests" : 99572018, 
            "contactTracers" : 10600, 
            "hospitalBeds" : {
                "capacity" : 63368, 
                "currentUsageTotal" : 48575, 
                "currentUsageCovid" : 6670
            }, 
            "icuBeds" : {
                "capacity" : 7044, 
                "currentUsageTotal" : 5414, 
                "currentUsageCovid" : 1202
            }, 
            "newCases" : 44710, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 76264765, 
            "vaccinationsInitiated" : 32668832, 
            "vaccinationsCompleted" : 26105670, 
            "vaccinesAdministered" : 65589033, 
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 5471112.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 99572019.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 5471112.0
                    }, 
                    {
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 99572019.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.208, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 109.9, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.34, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.746, 
            "vaccinationsCompletedRatio" : 0.662
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 936422, 
            "deaths" : 10485, 
            "positiveTests" : 954703, 
            "negativeTests" : 11904064, 
            "contactTracers" : 1300, 
            "hospitalBeds" : {
                "capacity" : 11677, 
                "currentUsageTotal" : 8097, 
                "currentUsageCovid" : 1184
            }, 
            "icuBeds" : {
                "capacity" : 1165, 
                "currentUsageTotal" : 953, 
                "currentUsageCovid" : 354
            }, 
            "newCases" : 3165, 
            "newDeaths" : 5, 
            "vaccinesDistributed" : 10855185, 
            "vaccinationsInitiated" : 4293859, 
            "vaccinationsCompleted" : 3813580, 
            "vaccinesAdministered" : 9517277, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.163, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 142.8, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.33, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.886, 
            "vaccinationsCompletedRatio" : 0.746
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 509364, 
            "deaths" : 9160, 
            "positiveTests" : 633594, 
            "negativeTests" : 12068208, 
            "contactTracers" : 860, 
            "hospitalBeds" : {
                "capacity" : 7832, 
                "currentUsageTotal" : 6324, 
                "currentUsageCovid" : 1323
            }, 
            "icuBeds" : {
                "capacity" : 877, 
                "currentUsageTotal" : 688, 
                "currentUsageCovid" : 225
            }, 
            "newCases" : 7704, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7423855, 
            "vaccinationsInitiated" : 3159344, 
            "vaccinationsCompleted" : 2659830, 
            "vaccinesAdministered" : 6638228, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 509364.0
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
                    }, 
                    {
                        "date" : "2021-12-21", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 34.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 509364.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 509364.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 509364.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.259, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 298.0, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.62, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.885, 
            "vaccinationsCompletedRatio" : 0.676
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 94286, 
            "deaths" : 1211, 
            "positiveTests" : 145110, 
            "negativeTests" : 3625418, 
            "contactTracers" : 268, 
            "hospitalBeds" : {
                "capacity" : 3396, 
                "currentUsageTotal" : 2347, 
                "currentUsageCovid" : 669
            }, 
            "icuBeds" : {
                "capacity" : 319, 
                "currentUsageTotal" : 260, 
                "currentUsageCovid" : 66
            }, 
            "newCases" : 2241, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1601505, 
            "vaccinationsInitiated" : 624472, 
            "vaccinationsCompleted" : 476822, 
            "vaccinesAdministered" : 1286502, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 14868, 
                    "16-17" : 6622, 
                    "16-19" : 5823, 
                    "18-24" : 41409, 
                    "20-44" : 136938, 
                    "25-29" : 40100, 
                    "25-34" : 85163, 
                    "25-39" : 144800, 
                    "30-39" : 80586, 
                    "35-44" : 68919, 
                    "40-49" : 62387, 
                    "45-54" : 49431, 
                    "46-64" : 77288, 
                    "5-11" : 10030, 
                    "50-64" : 82877, 
                    "55-64" : 50162, 
                    "65-74" : 45799, 
                    "65_plus" : 63475, 
                    "75+" : 29179, 
                    "75-84" : 20420, 
                    "85_plus" : 7407
                }, 
                "race" : {
                    "ai_an" : 1031, 
                    "asian" : 11922, 
                    "asian_or_pacific_islander" : 23456, 
                    "black" : 159665, 
                    "other" : 70627, 
                    "unknown" : 33283, 
                    "white" : 181746
                }, 
                "ethnicity" : {
                    "hispanic" : 53353, 
                    "non-hispanic" : 341420, 
                    "unknown" : 81841
                }, 
                "sex" : {
                    "female" : 238714, 
                    "male" : 198281, 
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
                "anomalies" : [
                    {
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 94286.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 94286.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 94286.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 94286.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.213, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 207.9, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.4, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.767, 
            "vaccinationsCompletedRatio" : 0.642
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 186996, 
            "deaths" : 2286, 
            "positiveTests" : 201699, 
            "negativeTests" : 2919383, 
            "contactTracers" : 211, 
            "hospitalBeds" : {
                "capacity" : 3367, 
                "currentUsageTotal" : 2572, 
                "currentUsageCovid" : 498
            }, 
            "icuBeds" : {
                "capacity" : 198, 
                "currentUsageTotal" : 167, 
                "currentUsageCovid" : 54
            }, 
            "newCases" : 3116, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1975605, 
            "vaccinationsInitiated" : 746478, 
            "vaccinationsCompleted" : 624808, 
            "vaccinesAdministered" : 1582493, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.304, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 201.0, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.75, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.745, 
            "vaccinationsCompletedRatio" : 0.634
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 4162522, 
            "deaths" : 62504, 
            "positiveTests" : 4788448, 
            "negativeTests" : 41991319, 
            "contactTracers" : 2600, 
            "hospitalBeds" : {
                "capacity" : 57395, 
                "currentUsageTotal" : 43019, 
                "currentUsageCovid" : 5367
            }, 
            "icuBeds" : {
                "capacity" : 6314, 
                "currentUsageTotal" : 4667, 
                "currentUsageCovid" : 567
            }, 
            "newCases" : 76392, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 40667685, 
            "vaccinationsInitiated" : 16001140, 
            "vaccinationsCompleted" : 13607439, 
            "vaccinesAdministered" : 33644593, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4162522.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4162522.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4162522.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4162522.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.38, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 135.1, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.67, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.613, 
            "vaccinationsCompletedRatio" : 0.511
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1798497, 
            "deaths" : 30283, 
            "positiveTests" : 1413813, 
            "negativeTests" : 12005986, 
            "contactTracers" : 1570, 
            "hospitalBeds" : {
                "capacity" : 22633, 
                "currentUsageTotal" : 18579, 
                "currentUsageCovid" : 3754
            }, 
            "icuBeds" : {
                "capacity" : 2515, 
                "currentUsageTotal" : 2041, 
                "currentUsageCovid" : 536
            }, 
            "newCases" : 22136, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 18331285, 
            "vaccinationsInitiated" : 6505193, 
            "vaccinationsCompleted" : 5423280, 
            "vaccinesAdministered" : 13331712, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1798497.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1798497.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1798497.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1798497.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.169, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 163.5, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.54, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.61, 
            "vaccinationsInitiatedRatio" : 0.882, 
            "vaccinationsCompletedRatio" : 0.636
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 115400, 
            "deaths" : 1091, 
            "positiveTests" : 106488, 
            "negativeTests" : 2696425, 
            "contactTracers" : 300, 
            "hospitalBeds" : {
                "capacity" : 2453, 
                "currentUsageTotal" : 1765, 
                "currentUsageCovid" : 178
            }, 
            "icuBeds" : {
                "capacity" : 204, 
                "currentUsageTotal" : 125, 
                "currentUsageCovid" : 29
            }, 
            "newCases" : 3117, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2976200, 
            "vaccinationsInitiated" : 1249140, 
            "vaccinationsCompleted" : 900918, 
            "vaccinesAdministered" : 2244695, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.184, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 52.3, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.649, 
            "vaccinationsCompletedRatio" : 0.59
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
            "cases" : 575501, 
            "deaths" : 7858, 
            "positiveTests" : 565482, 
            "negativeTests" : 4549714, 
            "contactTracers" : 403, 
            "hospitalBeds" : {
                "capacity" : 7458, 
                "currentUsageTotal" : 5027, 
                "currentUsageCovid" : 798
            }, 
            "icuBeds" : {
                "capacity" : 592, 
                "currentUsageTotal" : 474, 
                "currentUsageCovid" : 156
            }, 
            "newCases" : 5031, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5659165, 
            "vaccinationsInitiated" : 2047676, 
            "vaccinationsCompleted" : 1860149, 
            "vaccinesAdministered" : 4624085, 
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 575501.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 575501.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 575501.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 575501.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.178, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 29.2, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.17, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
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
            "cases" : 319442, 
            "deaths" : 4163, 
            "positiveTests" : 415607, 
            "negativeTests" : 2258624, 
            "contactTracers" : 250, 
            "hospitalBeds" : {
                "capacity" : 3339, 
                "currentUsageTotal" : 2366, 
                "currentUsageCovid" : 253
            }, 
            "icuBeds" : {
                "capacity" : 277, 
                "currentUsageTotal" : 218, 
                "currentUsageCovid" : 77
            }, 
            "newCases" : 922, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 319442.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 319442.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 319442.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 319442.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.179, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 144.6, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.32, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.72, 
            "vaccinationsCompletedRatio" : 0.64
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2154058, 
            "deaths" : 31017, 
            "positiveTests" : 2087943, 
            "negativeTests" : 33162821, 
            "contactTracers" : 3800, 
            "hospitalBeds" : {
                "capacity" : 30550, 
                "currentUsageTotal" : 21831, 
                "currentUsageCovid" : 5963
            }, 
            "icuBeds" : {
                "capacity" : 3210, 
                "currentUsageTotal" : 2374, 
                "currentUsageCovid" : 1018
            }, 
            "newCases" : 30136, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 23263615, 
            "vaccinationsInitiated" : 9118884, 
            "vaccinationsCompleted" : 8114639, 
            "vaccinesAdministered" : 19742882, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 2154058.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 2154058.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 2154058.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 2154058.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.233, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 97.5, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.89, 
            "vaccinationsInitiatedRatio" : 0.579, 
            "vaccinationsCompletedRatio" : 0.52
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1250169, 
            "deaths" : 19037, 
            "positiveTests" : 1289411, 
            "negativeTests" : 10881636, 
            "contactTracers" : 1600, 
            "hospitalBeds" : {
                "capacity" : 16248, 
                "currentUsageTotal" : 12773, 
                "currentUsageCovid" : 3038
            }, 
            "icuBeds" : {
                "capacity" : 2058, 
                "currentUsageTotal" : 1830, 
                "currentUsageCovid" : 721
            }, 
            "newCases" : 11937, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 11052760, 
            "vaccinationsInitiated" : 3897972, 
            "vaccinationsCompleted" : 3500787, 
            "vaccinesAdministered" : 8511980, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1250169.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1289412.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 10881636.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 10881636.0
                    }, 
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1289412.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1250169.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1250169.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1250169.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.207, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 68.7, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.693, 
            "vaccinationsCompletedRatio" : 0.57
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 520500, 
            "deaths" : 7030, 
            "positiveTests" : 465789, 
            "negativeTests" : 4163655, 
            "contactTracers" : 359, 
            "hospitalBeds" : {
                "capacity" : 8271, 
                "currentUsageTotal" : 5213, 
                "currentUsageCovid" : 921
            }, 
            "icuBeds" : {
                "capacity" : 834, 
                "currentUsageTotal" : 675, 
                "currentUsageCovid" : 215
            }, 
            "newCases" : 173, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5177825, 
            "vaccinationsInitiated" : 2018861, 
            "vaccinationsCompleted" : 1661170, 
            "vaccinesAdministered" : 4073766, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520500.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520500.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520500.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 520500.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.199, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 80.5, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.625, 
            "vaccinationsCompletedRatio" : 0.542
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
            "cases" : 866394, 
            "deaths" : 12149, 
            "positiveTests" : 832173, 
            "negativeTests" : 6680559, 
            "contactTracers" : 1240, 
            "hospitalBeds" : {
                "capacity" : 11786, 
                "currentUsageTotal" : 9124, 
                "currentUsageCovid" : 1624
            }, 
            "icuBeds" : {
                "capacity" : 1481, 
                "currentUsageTotal" : 1294, 
                "currentUsageCovid" : 323
            }, 
            "newCases" : 853, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7451775, 
            "vaccinationsInitiated" : 2790371, 
            "vaccinationsCompleted" : 2422138, 
            "vaccinesAdministered" : 5888090, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.279, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 117.8, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.78, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.574, 
            "vaccinationsCompletedRatio" : 0.503
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 828695, 
            "deaths" : 14986, 
            "positiveTests" : 747669, 
            "negativeTests" : 8481828, 
            "contactTracers" : 800, 
            "hospitalBeds" : {
                "capacity" : 12522, 
                "currentUsageTotal" : 8661, 
                "currentUsageCovid" : 907
            }, 
            "icuBeds" : {
                "capacity" : 1462, 
                "currentUsageTotal" : 1105, 
                "currentUsageCovid" : 164
            }, 
            "newCases" : 12467, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6868120, 
            "vaccinationsInitiated" : 2668008, 
            "vaccinationsCompleted" : 2336561, 
            "vaccinesAdministered" : 5633478, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 828695.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 828695.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 828695.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 828695.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.171, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 176.4, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.34, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.906, 
            "vaccinationsCompletedRatio" : 0.746
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1140614, 
            "deaths" : 20273, 
            "positiveTests" : 1198651, 
            "negativeTests" : 34233519, 
            "contactTracers" : 2350, 
            "hospitalBeds" : {
                "capacity" : 17688, 
                "currentUsageTotal" : 14688, 
                "currentUsageCovid" : 1879
            }, 
            "icuBeds" : {
                "capacity" : 1272, 
                "currentUsageTotal" : 1052, 
                "currentUsageCovid" : 382
            }, 
            "newCases" : 22703, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 14670970, 
            "vaccinationsInitiated" : 6247750, 
            "vaccinationsCompleted" : 5140101, 
            "vaccinesAdministered" : 12981917, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1140614.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1140614.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1140614.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1140614.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.244, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 174.4, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : null, 
            "infectionRateCI90" : null, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.804, 
            "vaccinationsCompletedRatio" : 0.704
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 4, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 737437, 
            "deaths" : 11870, 
            "positiveTests" : 1380153, 
            "negativeTests" : 15831013, 
            "contactTracers" : 1400, 
            "hospitalBeds" : {
                "capacity" : 11395, 
                "currentUsageTotal" : 9509, 
                "currentUsageCovid" : 2664
            }, 
            "icuBeds" : {
                "capacity" : 1300, 
                "currentUsageTotal" : 947, 
                "currentUsageCovid" : 392
            }, 
            "newCases" : 36648, 
            "newDeaths" : 112, 
            "vaccinesDistributed" : 13282570, 
            "vaccinationsInitiated" : 4863660, 
            "vaccinationsCompleted" : 4256109, 
            "vaccinesAdministered" : 10434341, 
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 15831163.0
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
                        "date" : "2020-04-08", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1158.0
                    }, 
                    {
                        "date" : "2021-12-22", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 4072.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-12-30", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 55.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 15831163.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.159, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 52.7, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.859, 
            "vaccinationsCompletedRatio" : 0.758
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
            "cases" : 146736, 
            "deaths" : 1531, 
            "positiveTests" : 137255, 
            "negativeTests" : 3208135, 
            "contactTracers" : 86, 
            "hospitalBeds" : {
                "capacity" : 3325, 
                "currentUsageTotal" : 2357, 
                "currentUsageCovid" : 343
            }, 
            "icuBeds" : {
                "capacity" : 365, 
                "currentUsageTotal" : 265, 
                "currentUsageCovid" : 112
            }, 
            "newCases" : 1107, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2908420, 
            "vaccinationsInitiated" : 1154119, 
            "vaccinationsCompleted" : 1019209, 
            "vaccinesAdministered" : 2508118, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 146736.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 146736.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 146736.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 146736.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.266, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 91.5, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.635, 
            "vaccinationsCompletedRatio" : 0.568
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1706355, 
            "deaths" : 28984, 
            "positiveTests" : 1863786, 
            "negativeTests" : 18887843, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 22429, 
                "currentUsageTotal" : 17741, 
                "currentUsageCovid" : 4162
            }, 
            "icuBeds" : {
                "capacity" : 2534, 
                "currentUsageTotal" : 2084, 
                "currentUsageCovid" : 816
            }, 
            "newCases" : 29042, 
            "newDeaths" : 375, 
            "vaccinesDistributed" : 18022240, 
            "vaccinationsInitiated" : 6337587, 
            "vaccinationsCompleted" : 5673450, 
            "vaccinesAdministered" : 13979476, 
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1706355.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 28984.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1706355.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1706355.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1706355.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.14, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 65.8, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.714, 
            "vaccinationsCompletedRatio" : 0.654
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
            "cases" : 1022352, 
            "deaths" : 10656, 
            "positiveTests" : 1459503, 
            "negativeTests" : 17619383, 
            "contactTracers" : 1028, 
            "hospitalBeds" : {
                "capacity" : 9713, 
                "currentUsageTotal" : 8157, 
                "currentUsageCovid" : 1430
            }, 
            "icuBeds" : {
                "capacity" : 929, 
                "currentUsageTotal" : 752, 
                "currentUsageCovid" : 287
            }, 
            "newCases" : 6783, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10836840, 
            "vaccinationsInitiated" : 4028046, 
            "vaccinationsCompleted" : 3689641, 
            "vaccinesAdministered" : 9135876, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1022352.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1022352.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1022352.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1022352.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.213, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 83.1, 
            "contactTracerCapacityRatio" : 0.0, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.623, 
            "vaccinationsCompletedRatio" : 0.53
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1029341, 
            "deaths" : 16233, 
            "positiveTests" : 1079859, 
            "negativeTests" : 8896912, 
            "contactTracers" : 94, 
            "hospitalBeds" : {
                "capacity" : 16704, 
                "currentUsageTotal" : 13561, 
                "currentUsageCovid" : 2652
            }, 
            "icuBeds" : {
                "capacity" : 1811, 
                "currentUsageTotal" : 1563, 
                "currentUsageCovid" : 594
            }, 
            "newCases" : 5921, 
            "newDeaths" : 6, 
            "vaccinesDistributed" : 9901115, 
            "vaccinationsInitiated" : 3826276, 
            "vaccinationsCompleted" : 3254448, 
            "vaccinesAdministered" : 8088236, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "caseDensity" : 149.2, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 0.88, 
            "infectionRateCI90" : 0.19, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.809, 
            "vaccinationsCompletedRatio" : 0.744
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 4, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 3297, 
            "deaths" : 17, 
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
            "newCases" : 10, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 113330, 
            "vaccinationsInitiated" : 43358, 
            "vaccinationsCompleted" : 39878, 
            "vaccinesAdministered" : 95793, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.359, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 87.5, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.63, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.553, 
            "vaccinationsCompletedRatio" : 0.481
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 543737, 
            "deaths" : 10450, 
            "positiveTests" : 274312, 
            "negativeTests" : 1899393, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 8663, 
                "currentUsageTotal" : 5265, 
                "currentUsageCovid" : 691
            }, 
            "icuBeds" : {
                "capacity" : 780, 
                "currentUsageTotal" : 631, 
                "currentUsageCovid" : 129
            }, 
            "newCases" : 4885, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4582245, 
            "vaccinationsInitiated" : 1645580, 
            "vaccinationsCompleted" : 1430507, 
            "vaccinesAdministered" : 3388047, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 543737.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 543737.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 543737.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 543737.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.113, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.4, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.11, 
            "icuCapacityRatio" : 0.68, 
            "vaccinationsInitiatedRatio" : 0.621, 
            "vaccinationsCompletedRatio" : 0.54
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
            "cases" : 197784, 
            "deaths" : 2907, 
            "positiveTests" : 211199, 
            "negativeTests" : 1563278, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2987, 
                "currentUsageTotal" : 2014, 
                "currentUsageCovid" : 141
            }, 
            "icuBeds" : {
                "capacity" : 222, 
                "currentUsageTotal" : 152, 
                "currentUsageCovid" : 42
            }, 
            "newCases" : 490, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1727355, 
            "vaccinationsInitiated" : 663198, 
            "vaccinationsCompleted" : 577327, 
            "vaccinesAdministered" : 1444058, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 197784.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 211199.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1563282.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1563282.0
                    }, 
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 211199.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 197784.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 197784.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 197784.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.21, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 105.9, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.48, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.764, 
            "vaccinationsCompletedRatio" : 0.567
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1680960, 
            "deaths" : 19436, 
            "positiveTests" : 1663817, 
            "negativeTests" : 17090878, 
            "contactTracers" : 1215, 
            "hospitalBeds" : {
                "capacity" : 4153, 
                "currentUsageTotal" : 3038, 
                "currentUsageCovid" : 249
            }, 
            "icuBeds" : {
                "capacity" : 275, 
                "currentUsageTotal" : 201, 
                "currentUsageCovid" : 75
            }, 
            "newCases" : 18652, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 18832380, 
            "vaccinationsInitiated" : 8008038, 
            "vaccinationsCompleted" : 5951239, 
            "vaccinesAdministered" : 14910025, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1680960.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1680960.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1680960.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1680960.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.113, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 62.1, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.12, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.622, 
            "vaccinationsCompletedRatio" : 0.526
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 174787, 
            "deaths" : 2057, 
            "positiveTests" : 136932, 
            "negativeTests" : 1950176, 
            "contactTracers" : 500, 
            "hospitalBeds" : {
                "capacity" : 2214, 
                "currentUsageTotal" : 1719, 
                "currentUsageCovid" : 205
            }, 
            "icuBeds" : {
                "capacity" : 201, 
                "currentUsageTotal" : 154, 
                "currentUsageCovid" : 55
            }, 
            "newCases" : 116, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1191500, 
            "vaccinationsInitiated" : 474165, 
            "vaccinationsCompleted" : 400490, 
            "vaccinesAdministered" : 1013290, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.247, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.0, 
            "contactTracerCapacityRatio" : 0.2, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.664, 
            "vaccinationsCompletedRatio" : 0.599
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 338257, 
            "deaths" : 2917, 
            "positiveTests" : 316816, 
            "negativeTests" : 2204039, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 4506, 
                "currentUsageTotal" : 3357, 
                "currentUsageCovid" : 534
            }, 
            "icuBeds" : {
                "capacity" : 480, 
                "currentUsageTotal" : 407, 
                "currentUsageCovid" : 144
            }, 
            "newCases" : 1831, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3415890, 
            "vaccinationsInitiated" : 1284092, 
            "vaccinationsCompleted" : 1157774, 
            "vaccinesAdministered" : 2856869, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 338257.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 338257.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 338257.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 338257.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.175, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 91.2, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 198667, 
            "deaths" : 1961, 
            "positiveTests" : 169045, 
            "negativeTests" : 3071835, 
            "contactTracers" : 140, 
            "hospitalBeds" : {
                "capacity" : 2888, 
                "currentUsageTotal" : 2284, 
                "currentUsageCovid" : 374
            }, 
            "icuBeds" : {
                "capacity" : 234, 
                "currentUsageTotal" : 199, 
                "currentUsageCovid" : 86
            }, 
            "newCases" : 2011, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 198667.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 198667.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 198667.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 198667.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.314, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 288.2, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.46, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.46, 
            "vaccinationsInitiatedRatio" : 0.837, 
            "vaccinationsCompletedRatio" : 0.705
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1623096, 
            "deaths" : 29056, 
            "positiveTests" : 1505135, 
            "negativeTests" : 20203068, 
            "contactTracers" : 3000, 
            "hospitalBeds" : {
                "capacity" : 24344, 
                "currentUsageTotal" : 16161, 
                "currentUsageCovid" : 4504
            }, 
            "icuBeds" : {
                "capacity" : 3010, 
                "currentUsageTotal" : 1378, 
                "currentUsageCovid" : 541
            }, 
            "newCases" : 26452, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 18678755, 
            "vaccinationsInitiated" : 7434230, 
            "vaccinationsCompleted" : 6261268, 
            "vaccinesAdministered" : 14946060, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.168, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 50.4, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.9, 
            "vaccinationsInitiatedRatio" : 0.807, 
            "vaccinationsCompletedRatio" : 0.662
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
            "cases" : 350043, 
            "deaths" : 5857, 
            "positiveTests" : 616613, 
            "negativeTests" : 4025586, 
            "contactTracers" : 375, 
            "hospitalBeds" : {
                "capacity" : 4295, 
                "currentUsageTotal" : 3090, 
                "currentUsageCovid" : 558
            }, 
            "icuBeds" : {
                "capacity" : 438, 
                "currentUsageTotal" : 396, 
                "currentUsageCovid" : 173
            }, 
            "newCases" : 2212, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3789625, 
            "vaccinationsInitiated" : 1692585, 
            "vaccinationsCompleted" : 1389097, 
            "vaccinesAdministered" : 3441533, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 350043.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 350043.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 350043.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 350043.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.288, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 55.2, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.34, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.695, 
            "vaccinationsCompletedRatio" : 0.564
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 501181, 
            "deaths" : 8420, 
            "positiveTests" : 642024, 
            "negativeTests" : 4377044, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 8310, 
                "currentUsageTotal" : 6584, 
                "currentUsageCovid" : 887
            }, 
            "icuBeds" : {
                "capacity" : 806, 
                "currentUsageTotal" : 680, 
                "currentUsageCovid" : 168
            }, 
            "newCases" : 3217, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5100650, 
            "vaccinationsInitiated" : 2140842, 
            "vaccinationsCompleted" : 1738587, 
            "vaccinesAdministered" : 4314411, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 501181.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 501181.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 501181.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 501181.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.232, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 318.1, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.45, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.84, 
            "vaccinationsCompletedRatio" : 0.718
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 3617573, 
            "deaths" : 59152, 
            "positiveTests" : 3718878, 
            "negativeTests" : 67997086, 
            "contactTracers" : 9620, 
            "hospitalBeds" : {
                "capacity" : 42718, 
                "currentUsageTotal" : 31702, 
                "currentUsageCovid" : 7751
            }, 
            "icuBeds" : {
                "capacity" : 4184, 
                "currentUsageTotal" : 2959, 
                "currentUsageCovid" : 964
            }, 
            "newCases" : 62526, 
            "newDeaths" : 80, 
            "vaccinesDistributed" : 39052505, 
            "vaccinationsInitiated" : 16343955, 
            "vaccinationsCompleted" : 13961789, 
            "vaccinesAdministered" : 34256514, 
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3718927.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 67997397.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3718927.0
                    }, 
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 67997397.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.247, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 148.9, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.604, 
            "vaccinationsCompletedRatio" : 0.552
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2053721, 
            "deaths" : 29447, 
            "positiveTests" : 1696846, 
            "negativeTests" : 17228948, 
            "contactTracers" : 1659, 
            "hospitalBeds" : {
                "capacity" : 30116, 
                "currentUsageTotal" : 23864, 
                "currentUsageCovid" : 6103
            }, 
            "icuBeds" : {
                "capacity" : 3843, 
                "currentUsageTotal" : 3195, 
                "currentUsageCovid" : 1250
            }, 
            "newCases" : 37626, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 19819985, 
            "vaccinationsInitiated" : 7065757, 
            "vaccinationsCompleted" : 6457896, 
            "vaccinesAdministered" : 15926401, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.223, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.2, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.28, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.66, 
            "vaccinationsCompletedRatio" : 0.535
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 708938, 
            "deaths" : 11552, 
            "positiveTests" : 656042, 
            "negativeTests" : 2782852, 
            "contactTracers" : 700, 
            "hospitalBeds" : {
                "capacity" : 9295, 
                "currentUsageTotal" : 6657, 
                "currentUsageCovid" : 1012
            }, 
            "icuBeds" : {
                "capacity" : 873, 
                "currentUsageTotal" : 755, 
                "currentUsageCovid" : 255
            }, 
            "newCases" : 3974, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6255300, 
            "vaccinationsInitiated" : 2612220, 
            "vaccinationsCompleted" : 2116382, 
            "vaccinesAdministered" : 5308000, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 708938.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 708938.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 708938.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 708938.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.116, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.2, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 1.29, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.74, 
            "vaccinationsCompletedRatio" : 0.665
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
            "cases" : 421263, 
            "deaths" : 5655, 
            "positiveTests" : 371358, 
            "negativeTests" : 5757241, 
            "contactTracers" : 656, 
            "hospitalBeds" : {
                "capacity" : 6888, 
                "currentUsageTotal" : 5341, 
                "currentUsageCovid" : 525
            }, 
            "icuBeds" : {
                "capacity" : 740, 
                "currentUsageTotal" : 527, 
                "currentUsageCovid" : 105
            }, 
            "newCases" : 2930, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8510705, 
            "vaccinationsInitiated" : 3121766, 
            "vaccinationsCompleted" : 2802741, 
            "vaccinesAdministered" : 6831952, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 421263.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 421263.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 421263.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 421263.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.25, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 137.0, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.27, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.782, 
            "vaccinationsCompletedRatio" : 0.639
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2077224, 
            "deaths" : 36715, 
            "positiveTests" : 1980063, 
            "negativeTests" : 20476199, 
            "contactTracers" : 1508, 
            "hospitalBeds" : {
                "capacity" : 30131, 
                "currentUsageTotal" : 24509, 
                "currentUsageCovid" : 5856
            }, 
            "icuBeds" : {
                "capacity" : 3646, 
                "currentUsageTotal" : 2908, 
                "currentUsageCovid" : 993
            }, 
            "newCases" : 17611, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 25672555, 
            "vaccinationsInitiated" : 10015911, 
            "vaccinationsCompleted" : 8174643, 
            "vaccinesAdministered" : 20120946, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "10-14" : 245946, 
                    "100-104" : 4183, 
                    "105_plus" : 459, 
                    "15-19" : 377269, 
                    "20-24" : 407317, 
                    "25-29" : 400762, 
                    "30-34" : 449187, 
                    "35-39" : 467848, 
                    "40-44" : 464512, 
                    "45-49" : 453092, 
                    "5-9" : 137284, 
                    "50-54" : 536435, 
                    "55-59" : 602409, 
                    "60-64" : 669412, 
                    "65-69" : 640689, 
                    "70-74" : 534979, 
                    "75-79" : 374966, 
                    "80-84" : 253203, 
                    "85-89" : 162091, 
                    "90-94" : 90039, 
                    "95-99" : 28511
                }, 
                "race" : {
                    "ai_an" : 8799, 
                    "asian" : 143471, 
                    "black" : 362536, 
                    "multiple_other" : 997311, 
                    "pacific_islander" : 15665, 
                    "unknown" : 562547, 
                    "white" : 5210510
                }, 
                "ethnicity" : {
                    "hispanic" : 384989, 
                    "non-hispanic" : 5411804, 
                    "unknown" : 1504046
                }, 
                "sex" : {
                    "female" : 3867722, 
                    "male" : 3333729, 
                    "unknown" : 99388
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.287, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 297.4, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.77, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.63, 
            "vaccinationsInitiatedRatio" : 0.889, 
            "vaccinationsCompletedRatio" : 0.77
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 332003, 
            "deaths" : 3310, 
            "positiveTests" : 172060, 
            "negativeTests" : 2037776, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : 9293, 
                "currentUsageTotal" : 4893, 
                "currentUsageCovid" : 480
            }, 
            "icuBeds" : {
                "capacity" : 676, 
                "currentUsageTotal" : 428, 
                "currentUsageCovid" : 30
            }, 
            "newCases" : 26098, 
            "newDeaths" : 2, 
            "vaccinesDistributed" : 6436400, 
            "vaccinationsInitiated" : 2840638, 
            "vaccinationsCompleted" : 2459031, 
            "vaccinesAdministered" : 5916216, 
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.101, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 187.0, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.28, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.92, 
            "vaccinationsInitiatedRatio" : 0.89, 
            "vaccinationsCompletedRatio" : 0.765
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
            "cases" : 231096, 
            "deaths" : 3066, 
            "positiveTests" : 263553, 
            "negativeTests" : 5640722, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2259, 
                "currentUsageTotal" : 1919, 
                "currentUsageCovid" : 333
            }, 
            "icuBeds" : {
                "capacity" : 133, 
                "currentUsageTotal" : 122, 
                "currentUsageCovid" : 50
            }, 
            "newCases" : 3918, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2281705, 
            "vaccinationsInitiated" : 942667, 
            "vaccinationsCompleted" : 809908, 
            "vaccinesAdministered" : 1948994, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 231096.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 231096.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 231096.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 231096.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.147, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 85.3, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.55, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.628, 
            "vaccinationsCompletedRatio" : 0.531
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 975320, 
            "deaths" : 14636, 
            "positiveTests" : 1013454, 
            "negativeTests" : 9472506, 
            "contactTracers" : 775, 
            "hospitalBeds" : {
                "capacity" : 11402, 
                "currentUsageTotal" : 8687, 
                "currentUsageCovid" : 1090
            }, 
            "icuBeds" : {
                "capacity" : 1284, 
                "currentUsageTotal" : 989, 
                "currentUsageCovid" : 206
            }, 
            "newCases" : 9061, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8820565, 
            "vaccinationsInitiated" : 3231719, 
            "vaccinationsCompleted" : 2735224, 
            "vaccinesAdministered" : 6713342, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 975320.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 975320.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 975320.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 975320.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.138, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 57.0, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 1.15, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.67, 
            "vaccinationsInitiatedRatio" : 0.709, 
            "vaccinationsCompletedRatio" : 0.571
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
            "cases" : 179204, 
            "deaths" : 2486, 
            "positiveTests" : 120126, 
            "negativeTests" : 827745, 
            "contactTracers" : 350, 
            "hospitalBeds" : {
                "capacity" : 2715, 
                "currentUsageTotal" : 1631, 
                "currentUsageCovid" : 225
            }, 
            "icuBeds" : {
                "capacity" : 250, 
                "currentUsageTotal" : 168, 
                "currentUsageCovid" : 68
            }, 
            "newCases" : 809, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1581285, 
            "vaccinationsInitiated" : 627309, 
            "vaccinationsCompleted" : 505031, 
            "vaccinesAdministered" : 1261116, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 179204.0
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
                        "date" : "2021-12-27", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 120126.0
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
                        "date" : "2021-12-27", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 827745.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-27", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 120126.0
                    }, 
                    {
                        "date" : "2021-12-27", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 827745.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 179204.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 179204.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 179204.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.276, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 91.7, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.47, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.587, 
            "vaccinationsCompletedRatio" : 0.514
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1379917, 
            "deaths" : 20640, 
            "positiveTests" : 1114832, 
            "negativeTests" : 8366384, 
            "contactTracers" : 1226, 
            "hospitalBeds" : {
                "capacity" : 19804, 
                "currentUsageTotal" : 13462, 
                "currentUsageCovid" : 1838
            }, 
            "icuBeds" : {
                "capacity" : 2238, 
                "currentUsageTotal" : 1624, 
                "currentUsageCovid" : 434
            }, 
            "newCases" : 13537, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10882740, 
            "vaccinationsInitiated" : 4010333, 
            "vaccinationsCompleted" : 3507440, 
            "vaccinesAdministered" : 8922799, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1379917.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1379917.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1379917.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1379917.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.243, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 55.1, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.668, 
            "vaccinationsCompletedRatio" : 0.57
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 4542324, 
            "deaths" : 76062, 
            "positiveTests" : 4801441, 
            "negativeTests" : 36220280, 
            "contactTracers" : 3722, 
            "hospitalBeds" : {
                "capacity" : 66918, 
                "currentUsageTotal" : 49518, 
                "currentUsageCovid" : 6767
            }, 
            "icuBeds" : {
                "capacity" : 6498, 
                "currentUsageTotal" : 5666, 
                "currentUsageCovid" : 1326
            }, 
            "newCases" : 2843, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 51893335, 
            "vaccinationsInitiated" : 19372135, 
            "vaccinationsCompleted" : 16517363, 
            "vaccinesAdministered" : 40612073, 
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4801441.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 36220415.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 36220415.0
                    }, 
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4801441.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.194, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 59.2, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.674, 
            "vaccinationsCompletedRatio" : 0.588
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 637144, 
            "deaths" : 3787, 
            "positiveTests" : 713997, 
            "negativeTests" : 5420913, 
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
            "newCases" : 3563, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5402000, 
            "vaccinationsInitiated" : 2160299, 
            "vaccinationsCompleted" : 1885083, 
            "vaccinesAdministered" : 4522177, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 637144.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 637144.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 637144.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 637144.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.271, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 115.8, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.45, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.79, 
            "vaccinationsCompletedRatio" : 0.68
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1118518, 
            "deaths" : 15587, 
            "positiveTests" : 1346791, 
            "negativeTests" : 10968769, 
            "contactTracers" : 1547, 
            "hospitalBeds" : {
                "capacity" : 17860, 
                "currentUsageTotal" : 12964, 
                "currentUsageCovid" : 2493
            }, 
            "icuBeds" : {
                "capacity" : 1919, 
                "currentUsageTotal" : 1415, 
                "currentUsageCovid" : 449
            }, 
            "newCases" : 17618, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 16881235, 
            "vaccinationsInitiated" : 6740349, 
            "vaccinationsCompleted" : 5800214, 
            "vaccinesAdministered" : 14449479, 
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1118518.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 10968769.0
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
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-12-28", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 185.0
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
                        "date" : "2021-12-29", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 10968769.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1118518.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1118518.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1118518.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.103, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 95.7, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.71, 
            "vaccinationsInitiatedRatio" : 0.893, 
            "vaccinationsCompletedRatio" : 0.774
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 64447, 
            "deaths" : 471, 
            "positiveTests" : 87477, 
            "negativeTests" : 2954784, 
            "contactTracers" : 53, 
            "hospitalBeds" : {
                "capacity" : 1227, 
                "currentUsageTotal" : 795, 
                "currentUsageCovid" : 68
            }, 
            "icuBeds" : {
                "capacity" : 96, 
                "currentUsageTotal" : 68, 
                "currentUsageCovid" : 17
            }, 
            "newCases" : 1371, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1427030, 
            "vaccinationsInitiated" : 557157, 
            "vaccinationsCompleted" : 482925, 
            "vaccinesAdministered" : 1249496, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 64447.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 64447.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 64447.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 64447.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.222, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 66.2, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.46, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.757, 
            "vaccinationsCompletedRatio" : 0.679
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 852824, 
            "deaths" : 9904, 
            "positiveTests" : 672472, 
            "negativeTests" : 9573275, 
            "contactTracers" : 2122, 
            "hospitalBeds" : {
                "capacity" : 10188, 
                "currentUsageTotal" : 8429, 
                "currentUsageCovid" : 1018
            }, 
            "icuBeds" : {
                "capacity" : 1045, 
                "currentUsageTotal" : 790, 
                "currentUsageCovid" : 175
            }, 
            "newCases" : 6857, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 15170785, 
            "vaccinationsInitiated" : 5760712, 
            "vaccinationsCompleted" : 5171727, 
            "vaccinesAdministered" : 12580215, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 852824.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 672472.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9573304.0
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
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 672472.0
                    }, 
                    {
                        "date" : "2021-12-28", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9573304.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 852824.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 852824.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 852824.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.231, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 91.0, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.682, 
            "vaccinationsCompletedRatio" : 0.62
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 3, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1120069, 
            "deaths" : 11173, 
            "positiveTests" : 1168348, 
            "negativeTests" : 12744560, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 12533, 
                "currentUsageTotal" : 8899, 
                "currentUsageCovid" : 1887
            }, 
            "icuBeds" : {
                "capacity" : 1354, 
                "currentUsageTotal" : 1087, 
                "currentUsageCovid" : 459
            }, 
            "newCases" : 8010, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10100595, 
            "vaccinationsInitiated" : 3972346, 
            "vaccinationsCompleted" : 3607515, 
            "vaccinesAdministered" : 9114543, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 149672, 
                    "12-17" : 254210, 
                    "16-17" : 80309, 
                    "18-24" : 309079, 
                    "25-34" : 453886, 
                    "35-44" : 484477, 
                    "45-54" : 488888, 
                    "5-11" : 102892, 
                    "55-64" : 630426, 
                    "65_plus" : 895486
                }, 
                "race" : {
                    "asian" : 121351, 
                    "black" : 171895, 
                    "native_american" : 36128, 
                    "other" : 251037, 
                    "unknown" : 140757, 
                    "white" : 2898191
                }, 
                "ethnicity" : {
                    "hispanic" : 224537, 
                    "non-hispanic" : 3256498, 
                    "unknown" : 93312
                }, 
                "sex" : {
                    "female" : 1906074, 
                    "male" : 1697103, 
                    "unknown" : 16182
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1120069.0
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
                "anomalies" : [
                    {
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1120069.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1120069.0
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
                        "date" : "2021-12-31", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1120069.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.169, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 72.8, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
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
            "cases" : 328162, 
            "deaths" : 5336, 
            "positiveTests" : 362530, 
            "negativeTests" : 3935133, 
            "contactTracers" : 248, 
            "hospitalBeds" : {
                "capacity" : 5429, 
                "currentUsageTotal" : 4481, 
                "currentUsageCovid" : 701
            }, 
            "icuBeds" : {
                "capacity" : 630, 
                "currentUsageTotal" : 508, 
                "currentUsageCovid" : 191
            }, 
            "newCases" : 2648, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328162.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328162.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328162.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 328162.0
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
        "lastUpdatedDate" : "2022-01-03", 
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
            "testPositivityRatio" : 0.113, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 34.5, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.13, 
            "icuCapacityRatio" : 0.49, 
            "vaccinationsInitiatedRatio" : 0.559, 
            "vaccinationsCompletedRatio" : 0.475
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 115638, 
            "deaths" : 1526, 
            "positiveTests" : 89461, 
            "negativeTests" : 1127292, 
            "contactTracers" : 50, 
            "hospitalBeds" : {
                "capacity" : 1743, 
                "currentUsageTotal" : 843, 
                "currentUsageCovid" : 62
            }, 
            "icuBeds" : {
                "capacity" : 137, 
                "currentUsageTotal" : 67, 
                "currentUsageCovid" : 22
            }, 
            "newCases" : 396, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 845705, 
            "vaccinationsInitiated" : 323245, 
            "vaccinationsCompleted" : 275046, 
            "vaccinesAdministered" : 684672, 
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 115638.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 115638.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 115638.0
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
                        "date" : "2021-12-30", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 115638.0
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
        "lastUpdatedDate" : "2022-01-03", 
        "url" : "https://covidactnow.org/us/wyoming-wy"
    }
]