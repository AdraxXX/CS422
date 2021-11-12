class Graphs{ 

    constructor(){
        this.dateOfUS = null;
        this.deathsOfUS = null;
        this.vaccinesAdministeredOfUS = null;
        this.newCasesOfUS = null;
        this.dateOfCounty = null;
        this.deathsOfCounty = null;
        this.vaccinesAdministeredOfCounty = null;
        this.newCasesOfCounty = null;
        this.dateOfState = null;
        this.deathsOfState = null;
        this.vaccinesAdministeredOfState = null;
        this.newCasesOfState = null;
    }

    countryOverTimeData = () =>{
        let data = historicalUSData;
        
        this.newCasesOfUS = data.actualsTimeseries.map( (elem) => {
            return elem.newCases;
        })
        
        this.vaccinesAdministeredOfUS = data.actualsTimeseries.map( (elem) => {
            return elem.vaccinesAdministered;
        })
        
        this.deathsOfUS = data.actualsTimeseries.map( (elem) => {
            return elem.deaths;
        })

        this.dateOfUS = data.actualsTimeseries.map( (elem) => {
            return elem.date;
        })

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.dateOfUS,
                datasets: [{
                    label: 'New Cases',
                    data: this.newCasesOfUS,
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
                labels: this.dateOfUS,
                datasets: [{
                    label: 'Deaths',
                    data: this.newCasesOfUS,
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
                labels: this.dateOfUS,
                datasets: [{
                    label: 'vaccines Administered',
                    data: this.vaccinesAdministeredOfUS,
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
    };

    countyTimeOverTimeData = (currentSelectedCounty) => {
        let data = countyOldData;

        for (let key in data) {
            if (data[key].county.toLowerCase() === currentSelectedCounty) {

                this.newCasesOfCounty = data[key].actualsTimeseries.map( (elem) => {
                    return elem.newCases;
                })

                this.vaccinesAdministeredOfCounty = data[key].actualsTimeseries.map( (elem) => {
                    return elem.vaccinesAdministered;
                })

                this.deathsOfCounty = data[key].actualsTimeseries.map( (elem) => {
                    return elem.deaths;
                })

                this.dateOfCounty = data[key].actualsTimeseries.map( (elem) => {
                    return elem.date;
                })

                const ctx6 = document.getElementById('myChart6').getContext('2d');
                const myChart6 = new Chart(ctx6, {
                    type: 'bar',
                    data: {
                        labels: this.dateOfCounty,
                        datasets: [{
                            label: '# of New Cases in ' + currentSelectedCounty,
                            data: this.newCasesOfCounty,
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
                        labels: this.dateOfCounty,
                        datasets: [{
                            label: '# of Deaths in ' + currentSelectedCounty,
                            data: this.deathsOfCounty,
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
                        labels: this.dateOfCounty,
                        datasets: [{
                            label: '# of Vaccines Administered in ' + currentSelectedCounty,
                            data: this.vaccinesAdministeredOfCounty,
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
    };

    stateOverTimeData = (currentSelectedState) => {
        let data = stateOldData[0];
        
        this.newCasesOfState = data.actualsTimeseries.map( (elem) => {
            return elem.newCases;
        })

        this.vaccinesAdministeredOfState = data.actualsTimeseries.map( (elem) => {
            return elem.vaccinesAdministered;
        })

        this.deathsOfState = data.actualsTimeseries.map( (elem) => {
            return elem.deaths;
        })

        this.dateOfState = data.actualsTimeseries.map( (elem) => {
            return elem.date;
        })

        const ctx3 = document.getElementById('myChart3').getContext('2d');
        const myChart3 = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: this.dateOfState,
                datasets: [{
                    label: '# of New Cases in ' + currentSelectedState,
                    data: this.newCasesOfState,
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
                labels: this.dateOfState,
                datasets: [{
                    label: '# of Deaths in '+ currentSelectedState,
                    data: this.deathsOfState,
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
                labels: this.dateOfState,
                datasets: [{
                    label: '# of Vaccines Administered in ' + currentSelectedState,
                    data: this.vaccinesAdministeredOfState ,
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
    };
};