let stateInUS = 'IL'
const xmlhttp=new XMLHttpRequest()
const us_api_url='https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=47a9b3b8d749453c980cb48d8513f660'
var dateOfUS
var deathsOfUS
var vaccinesAdministeredOfUS
var newCasesOfUS
var dateOfCounty
var deathsOfCounty
var vaccinesAdministeredOfCounty
var newCasesOfCounty
var dateOfState
var deathsOfState
var vaccinesAdministeredOfState
var newCasesOfState
xmlhttp.open("get",us_api_url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var data = JSON.parse(this.responseText);
        newCasesOfUS=data.actualsTimeseries.map(function (elem){
            return elem.newCases;
        })
        vaccinesAdministeredOfUS=data.actualsTimeseries.map(function (elem){
            return elem.vaccinesAdministered;
        })
        deathsOfUS=data.actualsTimeseries.map(function (elem){
            return elem.deaths;
        })
        dateOfUS=data.actualsTimeseries.map(function (elem){
            return elem.date;
        })
        console.log(newCasesOfUS)
        console.log(vaccinesAdministeredOfUS)
        console.log(deathsOfUS)
        console.log(dateOfUS)
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dateOfUS,
                datasets: [{
                    label: 'New Cases',
                    data: newCasesOfUS,
                    backgroundColor: 'transparent',
                    borderColor:'red',
                    borderWidth: 4
                }]
            }
        });
        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const myChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels:dateOfUS,
                datasets: [{
                    label: 'Deaths',
                    data: newCasesOfUS,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            }
        });
        const ctx2 = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: dateOfUS,
                datasets: [{
                    label: 'vaccines Administered',
                    data: vaccinesAdministeredOfUS,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

const xmlhttp2=new XMLHttpRequest()
const county_api_url='https://api.covidactnow.org/v2/county/' + stateInUS + '.timeseries.json?apiKey=47a9b3b8d749453c980cb48d8513f660'
let county = "Cook County"
xmlhttp2.open("get",county_api_url,true);
xmlhttp2.send();
xmlhttp2.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200) {
        var data = JSON.parse(this.responseText);

        for (let key in data) {
            if (data[key].county === county) {
                newCasesOfCounty = data[key].actualsTimeseries.map(function (elem) {
                    return elem.newCases;
                })
                vaccinesAdministeredOfCounty = data[key].actualsTimeseries.map(function (elem) {
                    return elem.vaccinesAdministered;
                })
                deathsOfCounty = data[key].actualsTimeseries.map(function (elem) {
                    return elem.deaths;
                })
                dateOfCounty = data[key].actualsTimeseries.map(function (elem) {
                    return elem.date;
                })
                console.log(newCasesOfCounty)
                console.log(vaccinesAdministeredOfCounty)
                console.log(deathsOfCounty)
                console.log(dateOfCounty)
                const ctx6 = document.getElementById('myChart6').getContext('2d');
                const myChart6 = new Chart(ctx6, {
                    type: 'bar',
                    data: {
                        labels: dateOfCounty,
                        datasets: [{
                            label: '# of New Cases',
                            data: newCasesOfCounty,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            borderWidth: 4
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                const ctx7 = document.getElementById('myChart7').getContext('2d');
                const myChart7 = new Chart(ctx7, {
                    type: 'bar',
                    data: {
                        labels: dateOfCounty,
                        datasets: [{
                            label: '# of Deaths',
                            data: deathsOfCounty,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            borderWidth: 4
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                const ctx8 = document.getElementById('myChart8').getContext('2d');
                const myChart8 = new Chart(ctx8, {
                    type: 'bar',
                    data: {
                        labels: dateOfCounty,
                        datasets: [{
                            label: '# of Vaccines Administered',
                            data: vaccinesAdministeredOfCounty,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            borderWidth: 4
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }
    }
}
const xmlhttp1=new XMLHttpRequest()
const state_api_url='https://api.covidactnow.org/v2/state/' + stateInUS + '.timeseries.json?apiKey=47a9b3b8d749453c980cb48d8513f660'

xmlhttp1.open("get",state_api_url,true);
xmlhttp1.send();
xmlhttp1.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        var data = JSON.parse(this.responseText);
        newCasesOfState=data.actualsTimeseries.map(function (elem){
            return elem.newCases;
        })
        vaccinesAdministeredOfState=data.actualsTimeseries.map(function (elem){
            return elem.vaccinesAdministered;
        })
        deathsOfState=data.actualsTimeseries.map(function (elem){
            return elem.deaths;
        })
        dateOfState=data.actualsTimeseries.map(function (elem){
            return elem.date;
        })
        console.log(newCasesOfState)
        console.log(vaccinesAdministeredOfState)
        console.log(deathsOfState)
        console.log(dateOfState)
        const ctx3 = document.getElementById('myChart3').getContext('2d');
        const myChart3 = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: dateOfState,
                datasets: [{
                    label: '# of New Cases in '+stateInUS,
                    data: newCasesOfState,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const ctx4 = document.getElementById('myChart4').getContext('2d');
        const myChart4 = new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: dateOfState,
                datasets: [{
                    label: '# of Deaths in '+ stateInUS,
                    data: deathsOfState,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const ctx5 = document.getElementById('myChart5').getContext('2d');
        const myChart5 = new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: dateOfState,
                datasets: [{
                    label: '# of Vaccines Administered in '+ stateInUS,
                    data:vaccinesAdministeredOfState ,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}





