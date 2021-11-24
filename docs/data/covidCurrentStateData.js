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
            "testPositivityRatio" : 0.051, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.1, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 0.85, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.622, 
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
            "cases" : 148004, 
            "deaths" : 840, 
            "positiveTests" : 152949, 
            "negativeTests" : 2858541, 
            "contactTracers" : 235, 
            "hospitalBeds" : {
                "capacity" : 1392, 
                "currentUsageTotal" : 963, 
                "currentUsageCovid" : 108
            }, 
            "icuBeds" : {
                "capacity" : 133, 
                "currentUsageTotal" : 110, 
                "currentUsageCovid" : 26
            }, 
            "newCases" : 144, 
            "newDeaths" : 2, 
            "vaccinesDistributed" : 1265915, 
            "vaccinationsInitiated" : 454857, 
            "vaccinationsCompleted" : 394909, 
            "vaccinesAdministered" : 943975, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.046, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.6, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 0.93, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.561, 
            "vaccinationsCompletedRatio" : 0.458
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
            "cases" : 841215, 
            "deaths" : 16086, 
            "positiveTests" : 794258, 
            "negativeTests" : 5444733, 
            "contactTracers" : 404, 
            "hospitalBeds" : {
                "capacity" : 14874, 
                "currentUsageTotal" : 10839, 
                "currentUsageCovid" : 453
            }, 
            "icuBeds" : {
                "capacity" : 1588, 
                "currentUsageTotal" : 1307, 
                "currentUsageCovid" : 110
            }, 
            "newCases" : 619, 
            "newDeaths" : 13, 
            "vaccinesDistributed" : 7827970, 
            "vaccinationsInitiated" : 2749881, 
            "vaccinationsCompleted" : 2247882, 
            "vaccinesAdministered" : 5170333, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.057, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.9, 
            "contactTracerCapacityRatio" : 0.25, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.6, 
            "vaccinationsCompletedRatio" : 0.49
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
            "cases" : 525130, 
            "deaths" : 8627, 
            "positiveTests" : 324581, 
            "negativeTests" : 3511331, 
            "contactTracers" : 790, 
            "hospitalBeds" : {
                "capacity" : 7985, 
                "currentUsageTotal" : 5447, 
                "currentUsageCovid" : 416
            }, 
            "icuBeds" : {
                "capacity" : 923, 
                "currentUsageTotal" : 715, 
                "currentUsageCovid" : 136
            }, 
            "newCases" : 690, 
            "newDeaths" : 7, 
            "vaccinesDistributed" : 4850310, 
            "vaccinationsInitiated" : 1809546, 
            "vaccinationsCompleted" : 1480182, 
            "vaccinesAdministered" : 3474676, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 54.5, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.66, 
            "vaccinationsInitiatedRatio" : 0.637, 
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
            "cases" : 1246843, 
            "deaths" : 22062, 
            "positiveTests" : 1261446, 
            "negativeTests" : 10186669, 
            "contactTracers" : 396, 
            "hospitalBeds" : {
                "capacity" : 15619, 
                "currentUsageTotal" : 10949, 
                "currentUsageCovid" : 2533
            }, 
            "icuBeds" : {
                "capacity" : 2194, 
                "currentUsageTotal" : 1456, 
                "currentUsageCovid" : 573
            }, 
            "newCases" : 3057, 
            "newDeaths" : 120, 
            "vaccinesDistributed" : 11682210, 
            "vaccinationsInitiated" : 4633914, 
            "vaccinationsCompleted" : 3958592, 
            "vaccinesAdministered" : 9431124, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.025, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 13.2, 
            "contactTracerCapacityRatio" : 0.41, 
            "infectionRate" : 0.93, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.78, 
            "vaccinationsCompletedRatio" : 0.628
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 5055959, 
            "deaths" : 74157, 
            "positiveTests" : 5038828, 
            "negativeTests" : 89084852, 
            "contactTracers" : 10600, 
            "hospitalBeds" : {
                "capacity" : 60686, 
                "currentUsageTotal" : 46340, 
                "currentUsageCovid" : 3496
            }, 
            "icuBeds" : {
                "capacity" : 6931, 
                "currentUsageTotal" : 5191, 
                "currentUsageCovid" : 870
            }, 
            "newCases" : 4572, 
            "newDeaths" : 115, 
            "vaccinesDistributed" : 70017905, 
            "vaccinationsInitiated" : 30828408, 
            "vaccinationsCompleted" : 24807432, 
            "vaccinesAdministered" : 58544383, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.095, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 53.5, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.707, 
            "vaccinationsCompletedRatio" : 0.628
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
            "cases" : 818476, 
            "deaths" : 9201, 
            "positiveTests" : 817491, 
            "negativeTests" : 10835875, 
            "contactTracers" : 1300, 
            "hospitalBeds" : {
                "capacity" : 11080, 
                "currentUsageTotal" : 7983, 
                "currentUsageCovid" : 1574
            }, 
            "icuBeds" : {
                "capacity" : 1302, 
                "currentUsageTotal" : 1040, 
                "currentUsageCovid" : 516
            }, 
            "newCases" : 1968, 
            "newDeaths" : 54, 
            "vaccinesDistributed" : 9989675, 
            "vaccinationsInitiated" : 4069136, 
            "vaccinationsCompleted" : 3618599, 
            "vaccinesAdministered" : 8434920, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.036, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 21.1, 
            "contactTracerCapacityRatio" : 0.23, 
            "infectionRate" : 1.25, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.57, 
            "vaccinationsInitiatedRatio" : 0.832, 
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
            "cases" : 414908, 
            "deaths" : 8853, 
            "positiveTests" : 538316, 
            "negativeTests" : 11106492, 
            "contactTracers" : 860, 
            "hospitalBeds" : {
                "capacity" : 7898, 
                "currentUsageTotal" : 6042, 
                "currentUsageCovid" : 327
            }, 
            "icuBeds" : {
                "capacity" : 1025, 
                "currentUsageTotal" : 588, 
                "currentUsageCovid" : 64
            }, 
            "newCases" : 754, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6781355, 
            "vaccinationsInitiated" : 2964596, 
            "vaccinationsCompleted" : 2556762, 
            "vaccinesAdministered" : 5880095, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.014, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 14.7, 
            "contactTracerCapacityRatio" : 0.52, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.16, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.803, 
            "vaccinationsCompletedRatio" : 0.64
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 66433, 
            "deaths" : 1196, 
            "positiveTests" : 95608, 
            "negativeTests" : 3178143, 
            "contactTracers" : 268, 
            "hospitalBeds" : {
                "capacity" : 3449, 
                "currentUsageTotal" : 2588, 
                "currentUsageCovid" : 88
            }, 
            "icuBeds" : {
                "capacity" : 323, 
                "currentUsageTotal" : 248, 
                "currentUsageCovid" : 14
            }, 
            "newCases" : 86, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1438385, 
            "vaccinationsInitiated" : 566806, 
            "vaccinationsCompleted" : 451906, 
            "vaccinesAdministered" : 1151269, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 14346, 
                    "16-17" : 6285, 
                    "16-19" : 5823, 
                    "18-24" : 37769, 
                    "20-44" : 136938, 
                    "25-29" : 40100, 
                    "25-34" : 85163, 
                    "25-39" : 134142, 
                    "30-39" : 80586, 
                    "35-44" : 68919, 
                    "40-49" : 59131, 
                    "45-54" : 49431, 
                    "46-64" : 77288, 
                    "5-11" : 4149, 
                    "50-64" : 79499, 
                    "55-64" : 50162, 
                    "65-74" : 45087, 
                    "65_plus" : 63475, 
                    "75+" : 28713, 
                    "75-84" : 20420, 
                    "85_plus" : 7407
                }, 
                "race" : {
                    "ai_an" : 1031, 
                    "asian" : 11922, 
                    "asian_or_pacific_islander" : 21088, 
                    "black" : 153025, 
                    "other" : 70627, 
                    "unknown" : 33283, 
                    "white" : 166393
                }, 
                "ethnicity" : {
                    "hispanic" : 48342, 
                    "non-hispanic" : 312686, 
                    "unknown" : 81841
                }, 
                "sex" : {
                    "female" : 223372, 
                    "male" : 184869, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.071, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.2, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.713, 
            "vaccinationsCompletedRatio" : 0.609
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
            "cases" : 150876, 
            "deaths" : 2162, 
            "positiveTests" : 170090, 
            "negativeTests" : 2678078, 
            "contactTracers" : 211, 
            "hospitalBeds" : {
                "capacity" : 2893, 
                "currentUsageTotal" : 2107, 
                "currentUsageCovid" : 189
            }, 
            "icuBeds" : {
                "capacity" : 195, 
                "currentUsageTotal" : 161, 
                "currentUsageCovid" : 25
            }, 
            "newCases" : 251, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 1849875, 
            "vaccinationsInitiated" : 694689, 
            "vaccinationsCompleted" : 593225, 
            "vaccinesAdministered" : 1387043, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.025, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 6.5, 
            "contactTracerCapacityRatio" : 0.37, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.712, 
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
            "cases" : 3678939, 
            "deaths" : 61147, 
            "positiveTests" : 4352290, 
            "negativeTests" : 38936418, 
            "contactTracers" : 2600, 
            "hospitalBeds" : {
                "capacity" : 54667, 
                "currentUsageTotal" : 41675, 
                "currentUsageCovid" : 1372
            }, 
            "icuBeds" : {
                "capacity" : 6319, 
                "currentUsageTotal" : 4548, 
                "currentUsageCovid" : 258
            }, 
            "newCases" : 1605, 
            "newDeaths" : 66, 
            "vaccinesDistributed" : 38332495, 
            "vaccinationsInitiated" : 15298425, 
            "vaccinationsCompleted" : 13091601, 
            "vaccinesAdministered" : 30420343, 
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
                "anomalies" : [
                    {
                        "date" : "2021-11-22", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 61147.0
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.586, 
            "vaccinationsCompletedRatio" : 0.493
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
            "deaths" : 29181, 
            "positiveTests" : 1255589, 
            "negativeTests" : 11097101, 
            "contactTracers" : 1570, 
            "hospitalBeds" : {
                "capacity" : 20472, 
                "currentUsageTotal" : 16018, 
                "currentUsageCovid" : 1087
            }, 
            "icuBeds" : {
                "capacity" : 2561, 
                "currentUsageTotal" : 1965, 
                "currentUsageCovid" : 205
            }, 
            "newCases" : 1345, 
            "newDeaths" : 58, 
            "vaccinesDistributed" : 17238705, 
            "vaccinationsInitiated" : 6217581, 
            "vaccinationsCompleted" : 5238889, 
            "vaccinesAdministered" : 12168457, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.015, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 10.1, 
            "contactTracerCapacityRatio" : 0.42, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.14, 
            "icuCapacityRatio" : 0.66, 
            "vaccinationsInitiatedRatio" : 0.815, 
            "vaccinationsCompletedRatio" : 0.607
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 84135, 
            "deaths" : 999, 
            "positiveTests" : 92324, 
            "negativeTests" : 2522591, 
            "contactTracers" : 300, 
            "hospitalBeds" : {
                "capacity" : 2486, 
                "currentUsageTotal" : 1831, 
                "currentUsageCovid" : 57
            }, 
            "icuBeds" : {
                "capacity" : 204, 
                "currentUsageTotal" : 135, 
                "currentUsageCovid" : 9
            }, 
            "newCases" : 51, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2789610, 
            "vaccinationsInitiated" : 1154297, 
            "vaccinationsCompleted" : 859284, 
            "vaccinesAdministered" : 2065518, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.142, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.9, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.621, 
            "vaccinationsCompletedRatio" : 0.565
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
            "cases" : 516907, 
            "deaths" : 7268, 
            "positiveTests" : 504821, 
            "negativeTests" : 4204896, 
            "contactTracers" : 403, 
            "hospitalBeds" : {
                "capacity" : 7361, 
                "currentUsageTotal" : 5066, 
                "currentUsageCovid" : 612
            }, 
            "icuBeds" : {
                "capacity" : 604, 
                "currentUsageTotal" : 497, 
                "currentUsageCovid" : 138
            }, 
            "newCases" : 3270, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5202495, 
            "vaccinationsInitiated" : 1959634, 
            "vaccinationsCompleted" : 1781756, 
            "vaccinesAdministered" : 4118565, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.091, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 27.0, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 0.87, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 304589, 
            "deaths" : 3884, 
            "positiveTests" : 394200, 
            "negativeTests" : 2091305, 
            "contactTracers" : 250, 
            "hospitalBeds" : {
                "capacity" : 2921, 
                "currentUsageTotal" : 2098, 
                "currentUsageCovid" : 315
            }, 
            "icuBeds" : {
                "capacity" : 289, 
                "currentUsageTotal" : 233, 
                "currentUsageCovid" : 100
            }, 
            "newCases" : 635, 
            "newDeaths" : 21, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.036, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 36.3, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.68, 
            "vaccinationsInitiatedRatio" : 0.671, 
            "vaccinationsCompletedRatio" : 0.612
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
            "deaths" : 29234, 
            "positiveTests" : 1705790, 
            "negativeTests" : 29289076, 
            "contactTracers" : 3800, 
            "hospitalBeds" : {
                "capacity" : 27807, 
                "currentUsageTotal" : 19596, 
                "currentUsageCovid" : 1872
            }, 
            "icuBeds" : {
                "capacity" : 3213, 
                "currentUsageTotal" : 2178, 
                "currentUsageCovid" : 342
            }, 
            "newCases" : 4629, 
            "newDeaths" : 19, 
            "vaccinesDistributed" : 21325865, 
            "vaccinationsInitiated" : 8505503, 
            "vaccinationsCompleted" : 7756194, 
            "vaccinesAdministered" : 17342768, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.131, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.0, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.554, 
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
            "cases" : 1083715, 
            "deaths" : 17369, 
            "positiveTests" : 1136222, 
            "negativeTests" : 10173874, 
            "contactTracers" : 1600, 
            "hospitalBeds" : {
                "capacity" : 17483, 
                "currentUsageTotal" : 11337, 
                "currentUsageCovid" : 1724
            }, 
            "icuBeds" : {
                "capacity" : 2312, 
                "currentUsageTotal" : 1680, 
                "currentUsageCovid" : 439
            }, 
            "newCases" : 3139, 
            "newDeaths" : 53, 
            "vaccinesDistributed" : 10055970, 
            "vaccinationsInitiated" : 3731063, 
            "vaccinationsCompleted" : 3399473, 
            "vaccinesAdministered" : 7693970, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.655, 
            "vaccinationsCompletedRatio" : 0.543
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
            "deaths" : 6670, 
            "positiveTests" : 415507, 
            "negativeTests" : 3881179, 
            "contactTracers" : 359, 
            "hospitalBeds" : {
                "capacity" : 7991, 
                "currentUsageTotal" : 4648, 
                "currentUsageCovid" : 509
            }, 
            "icuBeds" : {
                "capacity" : 822, 
                "currentUsageTotal" : 594, 
                "currentUsageCovid" : 137
            }, 
            "newCases" : 42, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 4739995, 
            "vaccinationsInitiated" : 1908178, 
            "vaccinationsCompleted" : 1583062, 
            "vaccinesAdministered" : 3629584, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.074, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 34.2, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.598, 
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
            "cases" : 779977, 
            "deaths" : 10837, 
            "positiveTests" : 753932, 
            "negativeTests" : 6125288, 
            "contactTracers" : 1240, 
            "hospitalBeds" : {
                "capacity" : 10418, 
                "currentUsageTotal" : 7928, 
                "currentUsageCovid" : 894
            }, 
            "icuBeds" : {
                "capacity" : 1368, 
                "currentUsageTotal" : 1203, 
                "currentUsageCovid" : 212
            }, 
            "newCases" : 1939, 
            "newDeaths" : 68, 
            "vaccinesDistributed" : 7019905, 
            "vaccinationsInitiated" : 2670412, 
            "vaccinationsCompleted" : 2317051, 
            "vaccinesAdministered" : 5329381, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.018, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 9.1, 
            "contactTracerCapacityRatio" : 0.38, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.552, 
            "vaccinationsCompletedRatio" : 0.486
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
            "cases" : 768714, 
            "deaths" : 14768, 
            "positiveTests" : 707461, 
            "negativeTests" : 8105551, 
            "contactTracers" : 800, 
            "hospitalBeds" : {
                "capacity" : 12569, 
                "currentUsageTotal" : 8843, 
                "currentUsageCovid" : 202
            }, 
            "icuBeds" : {
                "capacity" : 1499, 
                "currentUsageTotal" : 1100, 
                "currentUsageCovid" : 79
            }, 
            "newCases" : 673, 
            "newDeaths" : 14, 
            "vaccinesDistributed" : 6707230, 
            "vaccinationsInitiated" : 2564517, 
            "vaccinationsCompleted" : 2260073, 
            "vaccinesAdministered" : 5146002, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.03, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.8, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.22, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.848, 
            "vaccinationsCompletedRatio" : 0.708
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 900985, 
            "deaths" : 19309, 
            "positiveTests" : 977253, 
            "negativeTests" : 31180473, 
            "contactTracers" : 2350, 
            "hospitalBeds" : {
                "capacity" : 16362, 
                "currentUsageTotal" : 13678, 
                "currentUsageCovid" : 643
            }, 
            "icuBeds" : {
                "capacity" : 1272, 
                "currentUsageTotal" : 1005, 
                "currentUsageCovid" : 155
            }, 
            "newCases" : 3111, 
            "newDeaths" : 25, 
            "vaccinesDistributed" : 13281130, 
            "vaccinationsInitiated" : 5843748, 
            "vaccinationsCompleted" : 4880326, 
            "vaccinesAdministered" : 11377388, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.041, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 15.5, 
            "contactTracerCapacityRatio" : 0.3, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.762, 
            "vaccinationsCompletedRatio" : 0.671
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
            "deaths" : 11145, 
            "positiveTests" : 1199058, 
            "negativeTests" : 14497162, 
            "contactTracers" : 1400, 
            "hospitalBeds" : {
                "capacity" : 10456, 
                "currentUsageTotal" : 8292, 
                "currentUsageCovid" : 767
            }, 
            "icuBeds" : {
                "capacity" : 1298, 
                "currentUsageTotal" : 892, 
                "currentUsageCovid" : 142
            }, 
            "newCases" : 740, 
            "newDeaths" : 16, 
            "vaccinesDistributed" : 12045920, 
            "vaccinationsInitiated" : 4609100, 
            "vaccinationsCompleted" : 4057859, 
            "vaccinesAdministered" : 9287288, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.088, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 51.6, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.811, 
            "vaccinationsCompletedRatio" : 0.72
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
            "cases" : 116948, 
            "deaths" : 1300, 
            "positiveTests" : 99231, 
            "negativeTests" : 2937185, 
            "contactTracers" : 86, 
            "hospitalBeds" : {
                "capacity" : 2992, 
                "currentUsageTotal" : 2191, 
                "currentUsageCovid" : 316
            }, 
            "icuBeds" : {
                "capacity" : 336, 
                "currentUsageTotal" : 252, 
                "currentUsageCovid" : 98
            }, 
            "newCases" : 1089, 
            "newDeaths" : 28, 
            "vaccinesDistributed" : 2626450, 
            "vaccinationsInitiated" : 1090104, 
            "vaccinationsCompleted" : 967742, 
            "vaccinesAdministered" : 2189283, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.169, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 81.6, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.606, 
            "vaccinationsCompletedRatio" : 0.544
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
            "cases" : 1424537, 
            "deaths" : 24900, 
            "positiveTests" : 1517918, 
            "negativeTests" : 17408758, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 21835, 
                "currentUsageTotal" : 18238, 
                "currentUsageCovid" : 3939
            }, 
            "icuBeds" : {
                "capacity" : 2571, 
                "currentUsageTotal" : 2142, 
                "currentUsageCovid" : 843
            }, 
            "newCases" : 18727, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 16343680, 
            "vaccinationsInitiated" : 6056767, 
            "vaccinationsCompleted" : 5430099, 
            "vaccinesAdministered" : 12502388, 
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
                        "date" : "2021-11-22", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1424537.0
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
                        "date" : "2021-11-22", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1424537.0
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
                        "date" : "2021-11-22", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1424537.0
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
                        "date" : "2021-11-22", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1424537.0
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.121, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 74.9, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.684, 
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
            "cases" : 887492, 
            "deaths" : 9353, 
            "positiveTests" : 1267103, 
            "negativeTests" : 16127888, 
            "contactTracers" : 1028, 
            "hospitalBeds" : {
                "capacity" : 9879, 
                "currentUsageTotal" : 7918, 
                "currentUsageCovid" : 1569
            }, 
            "icuBeds" : {
                "capacity" : 943, 
                "currentUsageTotal" : 779, 
                "currentUsageCovid" : 325
            }, 
            "newCases" : 11451, 
            "newDeaths" : 37, 
            "vaccinesDistributed" : 9704890, 
            "vaccinationsInitiated" : 3854905, 
            "vaccinationsCompleted" : 3505802, 
            "vaccinesAdministered" : 8070028, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.087, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.4, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.592, 
            "vaccinationsCompletedRatio" : 0.507
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
            "cases" : 910885, 
            "deaths" : 15430, 
            "positiveTests" : 948998, 
            "negativeTests" : 8055087, 
            "contactTracers" : 94, 
            "hospitalBeds" : {
                "capacity" : 15273, 
                "currentUsageTotal" : 11864, 
                "currentUsageCovid" : 1184
            }, 
            "icuBeds" : {
                "capacity" : 1787, 
                "currentUsageTotal" : 1387, 
                "currentUsageCovid" : 293
            }, 
            "newCases" : 2095, 
            "newDeaths" : 86, 
            "vaccinesDistributed" : 9270945, 
            "vaccinationsInitiated" : 3635070, 
            "vaccinationsCompleted" : 3113940, 
            "vaccinesAdministered" : 7303339, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 21.1, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.25, 
            "infectionRateCI90" : 0.73, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.718, 
            "vaccinationsCompletedRatio" : 0.657
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 4, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 474, 
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
            "newCases" : 0, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 98980, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.058, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 11.9, 
            "contactTracerCapacityRatio" : 0.11, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.536, 
            "vaccinationsCompletedRatio" : 0.468
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
            "cases" : 512200, 
            "deaths" : 10253, 
            "positiveTests" : 243426, 
            "negativeTests" : 1765137, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 7998, 
                "currentUsageTotal" : 4993, 
                "currentUsageCovid" : 204
            }, 
            "icuBeds" : {
                "capacity" : 779, 
                "currentUsageTotal" : 610, 
                "currentUsageCovid" : 65
            }, 
            "newCases" : 265, 
            "newDeaths" : 13, 
            "vaccinesDistributed" : 4455535, 
            "vaccinationsInitiated" : 1595007, 
            "vaccinationsCompleted" : 1394157, 
            "vaccinesAdministered" : 3169431, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.112, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 39.8, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 0.88, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.593, 
            "vaccinationsCompletedRatio" : 0.517
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 189390, 
            "deaths" : 2606, 
            "positiveTests" : 204431, 
            "negativeTests" : 1483002, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2681, 
                "currentUsageTotal" : 1795, 
                "currentUsageCovid" : 272
            }, 
            "icuBeds" : {
                "capacity" : 208, 
                "currentUsageTotal" : 151, 
                "currentUsageCovid" : 76
            }, 
            "newCases" : 682, 
            "newDeaths" : 38, 
            "vaccinesDistributed" : 1625575, 
            "vaccinationsInitiated" : 633615, 
            "vaccinationsCompleted" : 552265, 
            "vaccinesAdministered" : 1304983, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 18.9, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.688, 
            "vaccinationsCompletedRatio" : 0.538
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
            "cases" : 1519350, 
            "deaths" : 18662, 
            "positiveTests" : 1493327, 
            "negativeTests" : 15749824, 
            "contactTracers" : 1215, 
            "hospitalBeds" : {
                "capacity" : 21819, 
                "currentUsageTotal" : 16932, 
                "currentUsageCovid" : 1208
            }, 
            "icuBeds" : {
                "capacity" : 2262, 
                "currentUsageTotal" : 1815, 
                "currentUsageCovid" : 281
            }, 
            "newCases" : 1368, 
            "newDeaths" : 12, 
            "vaccinesDistributed" : 17618970, 
            "vaccinationsInitiated" : 7219186, 
            "vaccinationsCompleted" : 5645069, 
            "vaccinesAdministered" : 13280565, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 61.1, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.574, 
            "vaccinationsCompletedRatio" : 0.486
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
            "cases" : 159411, 
            "deaths" : 1899, 
            "positiveTests" : 128200, 
            "negativeTests" : 1860234, 
            "contactTracers" : 500, 
            "hospitalBeds" : {
                "capacity" : 1988, 
                "currentUsageTotal" : 1520, 
                "currentUsageCovid" : 281
            }, 
            "icuBeds" : {
                "capacity" : 207, 
                "currentUsageTotal" : 167, 
                "currentUsageCovid" : 71
            }, 
            "newCases" : 667, 
            "newDeaths" : 10, 
            "vaccinesDistributed" : 1122690, 
            "vaccinationsInitiated" : 437759, 
            "vaccinationsCompleted" : 370014, 
            "vaccinesAdministered" : 883030, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.157, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.9, 
            "contactTracerCapacityRatio" : 0.22, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.636, 
            "vaccinationsCompletedRatio" : 0.572
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
            "cases" : 304432, 
            "deaths" : 2812, 
            "positiveTests" : 303997, 
            "negativeTests" : 2144713, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 4123, 
                "currentUsageTotal" : 3104, 
                "currentUsageCovid" : 522
            }, 
            "icuBeds" : {
                "capacity" : 489, 
                "currentUsageTotal" : 388, 
                "currentUsageCovid" : 157
            }, 
            "newCases" : 1211, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3115630, 
            "vaccinationsInitiated" : 1230399, 
            "vaccinationsCompleted" : 1105783, 
            "vaccinesAdministered" : 2549572, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 65.7, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
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
            "cases" : 148718, 
            "deaths" : 1678, 
            "positiveTests" : 128383, 
            "negativeTests" : 2771582, 
            "contactTracers" : 140, 
            "hospitalBeds" : {
                "capacity" : 2802, 
                "currentUsageTotal" : 2150, 
                "currentUsageCovid" : 348
            }, 
            "icuBeds" : {
                "capacity" : 226, 
                "currentUsageTotal" : 183, 
                "currentUsageCovid" : 60
            }, 
            "newCases" : 1066, 
            "newDeaths" : 6, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.046, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 23.6, 
            "contactTracerCapacityRatio" : 0.29, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.45, 
            "vaccinationsInitiatedRatio" : 0.783, 
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
            "cases" : 1236151, 
            "deaths" : 28295, 
            "positiveTests" : 1234514, 
            "negativeTests" : 18464655, 
            "contactTracers" : 3000, 
            "hospitalBeds" : {
                "capacity" : 21691, 
                "currentUsageTotal" : 14567, 
                "currentUsageCovid" : 881
            }, 
            "icuBeds" : {
                "capacity" : 2938, 
                "currentUsageTotal" : 1318, 
                "currentUsageCovid" : 157
            }, 
            "newCases" : 2640, 
            "newDeaths" : 30, 
            "vaccinesDistributed" : 16854585, 
            "vaccinationsInitiated" : 6950766, 
            "vaccinationsCompleted" : 5992387, 
            "vaccinesAdministered" : 13250496, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.138, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 67.8, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.91, 
            "vaccinationsInitiatedRatio" : 0.758, 
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
            "cases" : 306743, 
            "deaths" : 5291, 
            "positiveTests" : 390804, 
            "negativeTests" : 3712549, 
            "contactTracers" : 375, 
            "hospitalBeds" : {
                "capacity" : 4207, 
                "currentUsageTotal" : 3277, 
                "currentUsageCovid" : 691
            }, 
            "icuBeds" : {
                "capacity" : 479, 
                "currentUsageTotal" : 434, 
                "currentUsageCovid" : 196
            }, 
            "newCases" : 1164, 
            "newDeaths" : 12, 
            "vaccinesDistributed" : 3590125, 
            "vaccinationsInitiated" : 1590305, 
            "vaccinationsCompleted" : 1326770, 
            "vaccinesAdministered" : 3079915, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.099, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 21.0, 
            "contactTracerCapacityRatio" : 0.19, 
            "infectionRate" : 0.99, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.658, 
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
            "cases" : 467061, 
            "deaths" : 7953, 
            "positiveTests" : 587911, 
            "negativeTests" : 4062822, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 8691, 
                "currentUsageTotal" : 6495, 
                "currentUsageCovid" : 702
            }, 
            "icuBeds" : {
                "capacity" : 821, 
                "currentUsageTotal" : 677, 
                "currentUsageCovid" : 171
            }, 
            "newCases" : 661, 
            "newDeaths" : 23, 
            "vaccinesDistributed" : 4744700, 
            "vaccinationsInitiated" : 2028092, 
            "vaccinationsCompleted" : 1669459, 
            "vaccinesAdministered" : 3899124, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.042, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 34.5, 
            "contactTracerCapacityRatio" : 0.29, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.773, 
            "vaccinationsCompletedRatio" : 0.681
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
            "cases" : 2684084, 
            "deaths" : 56775, 
            "positiveTests" : 2941971, 
            "negativeTests" : 61693602, 
            "contactTracers" : 9620, 
            "hospitalBeds" : {
                "capacity" : 44787, 
                "currentUsageTotal" : 35741, 
                "currentUsageCovid" : 2894
            }, 
            "icuBeds" : {
                "capacity" : 4971, 
                "currentUsageTotal" : 3451, 
                "currentUsageCovid" : 472
            }, 
            "newCases" : 5619, 
            "newDeaths" : 34, 
            "vaccinesDistributed" : 35392575, 
            "vaccinationsInitiated" : 15046660, 
            "vaccinationsCompleted" : 13257320, 
            "vaccinesAdministered" : 29389939, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.119, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 48.1, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.579, 
            "vaccinationsCompletedRatio" : 0.528
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
            "cases" : 1653380, 
            "deaths" : 26190, 
            "positiveTests" : 1410223, 
            "negativeTests" : 16019989, 
            "contactTracers" : 1659, 
            "hospitalBeds" : {
                "capacity" : 28128, 
                "currentUsageTotal" : 21352, 
                "currentUsageCovid" : 3611
            }, 
            "icuBeds" : {
                "capacity" : 3905, 
                "currentUsageTotal" : 3049, 
                "currentUsageCovid" : 889
            }, 
            "newCases" : 6143, 
            "newDeaths" : 127, 
            "vaccinesDistributed" : 18129145, 
            "vaccinationsInitiated" : 6767599, 
            "vaccinationsCompleted" : 6171795, 
            "vaccinesAdministered" : 14143548, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 21.0, 
            "contactTracerCapacityRatio" : 0.17, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.621, 
            "vaccinationsCompletedRatio" : 0.513
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
            "cases" : 661675, 
            "deaths" : 10879, 
            "positiveTests" : 624381, 
            "negativeTests" : 2578966, 
            "contactTracers" : 700, 
            "hospitalBeds" : {
                "capacity" : 8392, 
                "currentUsageTotal" : 5720, 
                "currentUsageCovid" : 511
            }, 
            "icuBeds" : {
                "capacity" : 893, 
                "currentUsageTotal" : 746, 
                "currentUsageCovid" : 147
            }, 
            "newCases" : 386, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5994670, 
            "vaccinationsInitiated" : 2458645, 
            "vaccinationsCompleted" : 2028140, 
            "vaccinesAdministered" : 4803350, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.049, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.5, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 0.95, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.709, 
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
            "cases" : 386634, 
            "deaths" : 5066, 
            "positiveTests" : 341919, 
            "negativeTests" : 5275842, 
            "contactTracers" : 656, 
            "hospitalBeds" : {
                "capacity" : 6821, 
                "currentUsageTotal" : 5301, 
                "currentUsageCovid" : 496
            }, 
            "icuBeds" : {
                "capacity" : 767, 
                "currentUsageTotal" : 557, 
                "currentUsageCovid" : 82
            }, 
            "newCases" : 844, 
            "newDeaths" : 49, 
            "vaccinesDistributed" : 7921355, 
            "vaccinationsInitiated" : 2988772, 
            "vaccinationsCompleted" : 2689092, 
            "vaccinesAdministered" : 6083982, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.116, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.9, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
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
            "cases" : 1696959, 
            "deaths" : 33003, 
            "positiveTests" : 1664390, 
            "negativeTests" : 18796249, 
            "contactTracers" : 1508, 
            "hospitalBeds" : {
                "capacity" : 28530, 
                "currentUsageTotal" : 23919, 
                "currentUsageCovid" : 3775
            }, 
            "icuBeds" : {
                "capacity" : 3467, 
                "currentUsageTotal" : 2944, 
                "currentUsageCovid" : 760
            }, 
            "newCases" : 5186, 
            "newDeaths" : 72, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.032, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 3.9, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.13, 
            "icuCapacityRatio" : 0.67, 
            "vaccinationsInitiatedRatio" : 0.842, 
            "vaccinationsCompletedRatio" : 0.739
        }, 
        "riskLevels" : {
            "overall" : 1, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 1, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 1, 
        "actuals" : {
            "cases" : 221100, 
            "deaths" : 3264, 
            "positiveTests" : 120278, 
            "negativeTests" : 1683369, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : 9037, 
                "currentUsageTotal" : 5435, 
                "currentUsageCovid" : 52
            }, 
            "icuBeds" : {
                "capacity" : 661, 
                "currentUsageTotal" : 440, 
                "currentUsageCovid" : 3
            }, 
            "newCases" : 7, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 5939820, 
            "vaccinationsInitiated" : 2687557, 
            "vaccinationsCompleted" : 2360430, 
            "vaccinesAdministered" : 5325966, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.039, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 45.3, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.9, 
            "vaccinationsInitiatedRatio" : 0.823, 
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
            "cases" : 188135, 
            "deaths" : 2913, 
            "positiveTests" : 222282, 
            "negativeTests" : 4965726, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2338, 
                "currentUsageTotal" : 2050, 
                "currentUsageCovid" : 117
            }, 
            "icuBeds" : {
                "capacity" : 143, 
                "currentUsageTotal" : 129, 
                "currentUsageCovid" : 21
            }, 
            "newCases" : 604, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2015155, 
            "vaccinationsInitiated" : 871428, 
            "vaccinationsCompleted" : 764559, 
            "vaccinesAdministered" : 1709250, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.035, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 14.2, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.02, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.597, 
            "vaccinationsCompletedRatio" : 0.511
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
            "cases" : 914384, 
            "deaths" : 14135, 
            "positiveTests" : 953311, 
            "negativeTests" : 8834707, 
            "contactTracers" : 775, 
            "hospitalBeds" : {
                "capacity" : 10613, 
                "currentUsageTotal" : 8021, 
                "currentUsageCovid" : 437
            }, 
            "icuBeds" : {
                "capacity" : 1317, 
                "currentUsageTotal" : 946, 
                "currentUsageCovid" : 113
            }, 
            "newCases" : 434, 
            "newDeaths" : 7, 
            "vaccinesDistributed" : 8316315, 
            "vaccinationsInitiated" : 3076303, 
            "vaccinationsCompleted" : 2632698, 
            "vaccinesAdministered" : 6104745, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.168, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 44.1, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.63, 
            "vaccinationsInitiatedRatio" : 0.658, 
            "vaccinationsCompletedRatio" : 0.541
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
            "cases" : 163721, 
            "deaths" : 2318, 
            "positiveTests" : 110846, 
            "negativeTests" : 771701, 
            "contactTracers" : 350, 
            "hospitalBeds" : {
                "capacity" : 2539, 
                "currentUsageTotal" : 1538, 
                "currentUsageCovid" : 235
            }, 
            "icuBeds" : {
                "capacity" : 251, 
                "currentUsageTotal" : 158, 
                "currentUsageCovid" : 69
            }, 
            "newCases" : 931, 
            "newDeaths" : 9, 
            "vaccinesDistributed" : 1481855, 
            "vaccinationsInitiated" : 581704, 
            "vaccinationsCompleted" : 478376, 
            "vaccinesAdministered" : 1120690, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.064, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.5, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.67, 
            "vaccinationsInitiatedRatio" : 0.564, 
            "vaccinationsCompletedRatio" : 0.493
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
            "cases" : 1278841, 
            "deaths" : 16775, 
            "positiveTests" : 1077648, 
            "negativeTests" : 8075567, 
            "contactTracers" : 1226, 
            "hospitalBeds" : {
                "capacity" : 18524, 
                "currentUsageTotal" : 12926, 
                "currentUsageCovid" : 855
            }, 
            "icuBeds" : {
                "capacity" : 2427, 
                "currentUsageTotal" : 1628, 
                "currentUsageCovid" : 214
            }, 
            "newCases" : 1486, 
            "newDeaths" : 55, 
            "vaccinesDistributed" : 10225030, 
            "vaccinationsInitiated" : 3852798, 
            "vaccinationsCompleted" : 3369932, 
            "vaccinesAdministered" : 8054642, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.056, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 11.2, 
            "contactTracerCapacityRatio" : 0.23, 
            "infectionRate" : 0.98, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.636, 
            "vaccinationsCompletedRatio" : 0.544
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 4267680, 
            "deaths" : 73832, 
            "positiveTests" : 4512983, 
            "negativeTests" : 33968004, 
            "contactTracers" : 3722, 
            "hospitalBeds" : {
                "capacity" : 60584, 
                "currentUsageTotal" : 44826, 
                "currentUsageCovid" : 3163
            }, 
            "icuBeds" : {
                "capacity" : 7075, 
                "currentUsageTotal" : 5796, 
                "currentUsageCovid" : 885
            }, 
            "newCases" : 3958, 
            "newDeaths" : 96, 
            "vaccinesDistributed" : 48702115, 
            "vaccinationsInitiated" : 18433956, 
            "vaccinationsCompleted" : 15779930, 
            "vaccinesAdministered" : 36745512, 
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
                        "date" : "2021-11-19", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4512984.0
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
                        "date" : "2021-11-19", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 33968004.0
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
                        "date" : "2021-11-19", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 33968004.0
                    }, 
                    {
                        "date" : "2021-11-19", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 4512984.0
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.119, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.5, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.636, 
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
            "cases" : 588036, 
            "deaths" : 3457, 
            "positiveTests" : 660295, 
            "negativeTests" : 5013111, 
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
            "newCases" : 1153, 
            "newDeaths" : 15, 
            "vaccinesDistributed" : 4934870, 
            "vaccinationsInitiated" : 2039010, 
            "vaccinationsCompleted" : 1769932, 
            "vaccinesAdministered" : 3995279, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.063, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.9, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.748, 
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
            "cases" : 959156, 
            "deaths" : 14573, 
            "positiveTests" : 1217984, 
            "negativeTests" : 10167405, 
            "contactTracers" : 1547, 
            "hospitalBeds" : {
                "capacity" : 17120, 
                "currentUsageTotal" : 12462, 
                "currentUsageCovid" : 923
            }, 
            "icuBeds" : {
                "capacity" : 1900, 
                "currentUsageTotal" : 1361, 
                "currentUsageCovid" : 221
            }, 
            "newCases" : 1586, 
            "newDeaths" : 25, 
            "vaccinesDistributed" : 15504115, 
            "vaccinationsInitiated" : 6382876, 
            "vaccinationsCompleted" : 5512994, 
            "vaccinesAdministered" : 12852395, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.04, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 59.3, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.843, 
            "vaccinationsCompletedRatio" : 0.726
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
            "cases" : 47805, 
            "deaths" : 406, 
            "positiveTests" : 64960, 
            "negativeTests" : 2572360, 
            "contactTracers" : 53, 
            "hospitalBeds" : {
                "capacity" : 1238, 
                "currentUsageTotal" : 888, 
                "currentUsageCovid" : 57
            }, 
            "icuBeds" : {
                "capacity" : 95, 
                "currentUsageTotal" : 70, 
                "currentUsageCovid" : 18
            }, 
            "newCases" : 196, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 1291090, 
            "vaccinationsInitiated" : 526056, 
            "vaccinationsCompleted" : 453088, 
            "vaccinesAdministered" : 1097722, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "caseDensity" : 20.1, 
            "contactTracerCapacityRatio" : 0.28, 
            "infectionRate" : 0.95, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.722, 
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
            "cases" : 769791, 
            "deaths" : 9225, 
            "positiveTests" : 595771, 
            "negativeTests" : 8796617, 
            "contactTracers" : 2122, 
            "hospitalBeds" : {
                "capacity" : 11141, 
                "currentUsageTotal" : 9218, 
                "currentUsageCovid" : 971
            }, 
            "icuBeds" : {
                "capacity" : 1209, 
                "currentUsageTotal" : 942, 
                "currentUsageCovid" : 202
            }, 
            "newCases" : 1161, 
            "newDeaths" : 43, 
            "vaccinesDistributed" : 13841085, 
            "vaccinationsInitiated" : 5498769, 
            "vaccinationsCompleted" : 4931514, 
            "vaccinesAdministered" : 11192709, 
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
                        "date" : "2021-11-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 595772.0
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
                        "date" : "2021-11-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8796618.0
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
                        "date" : "2021-11-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 595772.0
                    }, 
                    {
                        "date" : "2021-11-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 8796618.0
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.12, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 62.2, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.67, 
            "vaccinationsInitiatedRatio" : 0.653, 
            "vaccinationsCompletedRatio" : 0.593
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
            "cases" : 957896, 
            "deaths" : 9873, 
            "positiveTests" : 1002746, 
            "negativeTests" : 11811479, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 12473, 
                "currentUsageTotal" : 8842, 
                "currentUsageCovid" : 1379
            }, 
            "icuBeds" : {
                "capacity" : 1558, 
                "currentUsageTotal" : 1042, 
                "currentUsageCovid" : 358
            }, 
            "newCases" : 5020, 
            "newDeaths" : 42, 
            "vaccinesDistributed" : 9213885, 
            "vaccinationsInitiated" : 3800653, 
            "vaccinationsCompleted" : 3450734, 
            "vaccinesAdministered" : 8050645, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 147101, 
                    "16-17" : 79421, 
                    "18-24" : 296565, 
                    "25-34" : 438082, 
                    "35-44" : 472223, 
                    "45-54" : 478461, 
                    "55-64" : 619471, 
                    "65_plus" : 888434
                }, 
                "race" : {
                    "asian" : 109000, 
                    "black" : 158203, 
                    "native_american" : 33480, 
                    "other" : 275640, 
                    "unknown" : 148808, 
                    "white" : 2694857
                }, 
                "ethnicity" : {
                    "hispanic" : 204733, 
                    "non-hispanic" : 3070969, 
                    "unknown" : 93312
                }, 
                "sex" : {
                    "female" : 1808638, 
                    "male" : 1594635, 
                    "unknown" : 16715
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.1, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 46.7, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.538, 
            "vaccinationsCompletedRatio" : 0.415
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
            "cases" : 290026, 
            "deaths" : 4770, 
            "positiveTests" : 322177, 
            "negativeTests" : 3657209, 
            "contactTracers" : 248, 
            "hospitalBeds" : {
                "capacity" : 6049, 
                "currentUsageTotal" : 4578, 
                "currentUsageCovid" : 562
            }, 
            "icuBeds" : {
                "capacity" : 629, 
                "currentUsageTotal" : 486, 
                "currentUsageCovid" : 156
            }, 
            "newCases" : 502, 
            "newDeaths" : 13, 
            "vaccinesDistributed" : 3374515, 
            "vaccinationsInitiated" : 964450, 
            "vaccinationsCompleted" : 743883, 
            "vaccinesAdministered" : 1689355, 
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
        "lastUpdatedDate" : "2021-11-24", 
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
            "testPositivityRatio" : 0.069, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.4, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 0.89, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.48, 
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
            "positiveTests" : 84797, 
            "negativeTests" : 1061754, 
            "contactTracers" : 50, 
            "hospitalBeds" : {
                "capacity" : 1602, 
                "currentUsageTotal" : 742, 
                "currentUsageCovid" : 142
            }, 
            "icuBeds" : {
                "capacity" : 135, 
                "currentUsageTotal" : 65, 
                "currentUsageCovid" : 34
            }, 
            "newCases" : 249, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 809935, 
            "vaccinationsInitiated" : 307735, 
            "vaccinationsCompleted" : 262354, 
            "vaccinesAdministered" : 623676, 
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
        "lastUpdatedDate" : "2021-11-24", 
        "url" : "https://covidactnow.org/us/wyoming-wy"
    }
]