
function ChartJsDoughnutOneFromDataTableDisplay(PatternChart, labels, backgroundColor, data) {

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: type,
        //showInLegend: true,
        //legend: {
        //    verticalAlign: "bottom",
        //    horizontalAlign: "center"
        //},
        data: {
            labels: labels,
            //showInLegend: true,
            datasets: [
                {
                    backgroundColor: backgroundColor,
                    data: data
                }
            ]
        },
        options: {
            //responsive: true,
            title: {
                display: false,
                text: ''
            }

        }
    });
    ShowReport(Pattern + 'ChartReportId');
}

function ChartJsDoughnutOneDisplay(Title, PatternChart, data) {

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'doughnut',
        //showInLegend: false,
        //legend: {
        //    verticalAlign: "bottom",
        //    horizontalAlign: "center"
        //},
        data: data,
        options: {
            //responsive: true,
            //title: {
            //    display: false,
            //    text: ''
            //},
            plugins: {
                datalabels: {
                    formatter: (value) => {
                        return value + ' %';
                    },
                    display: true,
                    align: 'bottom',
                    color: '#000000',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 3,
                    font: {
                        size: 14,
                    }
                },
                //outlabels: {
                //    text: '%l %p',
                //    color: 'black',
                //    stretch: 20,
                //    font: {
                //        resizable: true,
                //        minSize: 12,
                //        maxSize: 18
                //    }
                //}
            },
            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: 14,
                //position: 'bottom'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 14,
                    usePointStyle: true,
                    padding: 20
                }
            }            
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}


function ChartJsPieDisplay(Title, PatternChart, data) {

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'pie',
        //showInLegend: true,
        //legend: {
        //    verticalAlign: "bottom",
        //    horizontalAlign: "center"
        //},
        data: data,
        options: {
            //responsive: true,
            //title: {
            //    display: false,
            //    text: ''
            //},
            plugins: {
                datalabels: {
                    formatter: (value) => {
                        return value + ' %';
                    },
                    display: true,
                    align: 'bottom',
                    color: 'rgb(74, 127, 176)',
                    //backgroundColor: '#ccc',
                    //borderRadius: 3,
                    font: {
                        size: 20,
                    }
                }
            },
            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 14,
                    usePointStyle: true,
                    padding: 20
                }
            },
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}


function ChartJsPieLabelsOnChartDisplay(Title, PatternChart, data) {

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'pie',
        //showInLegend: true,
        //legend: {
        //    verticalAlign: "bottom",
        //    horizontalAlign: "center"
        //},
        data: data,
        options: {
            //responsive: true,
            //title: {
            //    display: false,
            //    text: ''
            //},



            plugins: {
                datalabels: {
                    formatter: (value) => {
                        return value + ' %';
                    },
                    display: true,
                    align: 'bottom',
                    color: 'rgb(0, 0, 0)',
                    //backgroundColor: '#ccc',
                    //borderRadius: 3,
                    font: {
                        size: 14,
                    }
                }
            },
            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 14,
                    usePointStyle: true,
                    padding: 20
                }
            }
            //pieceLabel: {
            //    render: function (d) { return d.label + " (" + d.percentage + "%)" },
            //    fontColor: '#000',
            //    position: 'outside',
            //    segment: true
            //}
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineTwoDisplayOld(labels, data1, data2) {
    HideReport('BarChartReportId');
    new Chart(document.getElementById("BarCanevasId"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Télépéage",
                    backgroundColor: "#ffa200",
                    data: data1,
                    lineTension: 0,
                    fill: false,
                    //borderColor: 'red'
                },
                {
                    label: "Cartes",
                    backgroundColor: "#0762fa",
                    data: data2,
                    lineTension: 0,
                    fill: false,
                    //borderColor: 'blue'
                }
            ]
        },
        options: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            }
        }
    });
    ShowReport('BarChartReportId');
}

function ChartJsLineOneDisplay(Title, Pattern, labels, label1, data1, IsFill) {
    HideReport(Pattern + 'ChartReportId');
    new Chart(document.getElementById(Pattern + 'CanevasId'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    //lineTension: 0,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,98,250,0.2)',
                    borderColor: 'rgba(7,98,250,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            legend: {
                display: true,
                text: Title,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            }
        }
    });
    ShowReport(Pattern + 'ChartReportId');
}


function ChartJsLineFourDisplay(Title, PatternChart, labels, data1, data2, data3, data4, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Télépéage',
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                },
                {
                    label: 'Cartes',
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(215,24,208,0.6)',
                    borderColor: 'rgba(215,24,208,1)',
                    borderWidth: 1
                },
                {
                    label: 'CB',
                    data: data3,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,219,250,0.4)',
                    borderColor: 'rgba(7,219,250,1)',
                    borderWidth: 1
                },
                {
                    label: 'Autres',
                    data: data4,
                    fill: IsFill,
                    backgroundColor: 'rgba(203,203,203,0.6)',
                    borderColor: 'rgba(203,203,203,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineTwoDisplay(Title, PatternChart, labels, data1, label1, data2, label2, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }

    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(215,24,208,0.6)',
                    borderColor: 'rgba(215,24,208,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            }
        },
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineThreeDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(215,4,27,0.6)',
                    borderColor: 'rgba(215,4,27,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(55,186,137,0.2)',
                    borderColor: 'rgba(55,186,137,1)',
                    borderWidth: 1
                },
                {
                    label: label3,
                    data: data3,
                    fill: IsFill,
                    backgroundColor: 'rgba(186,189,52,0.4)',
                    borderColor: 'rgba(186,189,52,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },



            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineThreeTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,98,250,0.2)',
                    borderColor: 'rgba(7,98,250,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                },
                {
                    label: label3,
                    data: data3,
                    fill: IsFill,
                    backgroundColor: 'rgba(232,17,35,0.6)',
                    borderColor: 'rgba(232,17,35,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },



            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineFourTraficHourDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, IsFill) {
    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,98,250,0.2)',
                    borderColor: 'rgba(7,98,250,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                },
                {
                    label: label3,
                    data: data3,
                    fill: IsFill,
                    backgroundColor: 'rgba(232,17,35,0.6)',
                    borderColor: 'rgba(232,17,35,1)',
                    borderWidth: 1
                },
                {
                    label: label4,
                    data: data4,
                    fill: IsFill,
                    backgroundColor: 'rgba(215,95,5,0.6)',
                    borderColor: 'rgba(232,17,35,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {

            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },



            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(0, 0, 0, 0.0)',
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineTwoOldDisplay(Title, PatternChart, labels, label1, data1, label2, data2, IsFill) {

    var fontSize = 14;
    var padding = 20;
    if (screen.width < 400) {
        fontSize = 10;
        padding = 17;
    }
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,98,250,0.2)',
                    borderColor: 'rgba(7,98,250,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: Title,
                fontWeight: 400,
                fontSize: fontSize
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: fontSize,
                    usePointStyle: true,
                    padding: padding
                }
            },



            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }






        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function ChartJsLineFiveDisplay(Title, PatternChart, labels, label1, data1, label2, data2, label3, data3, label4, data4, label5, data5, IsFill) {
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId').getContext("2d"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    data: data1,
                    fill: IsFill,
                    backgroundColor: 'rgba(255,162,0,0.6)',
                    borderColor: 'rgba(255,162,0,1)',
                    borderWidth: 1
                },
                {
                    label: label2,
                    data: data2,
                    fill: IsFill,
                    backgroundColor: 'rgba(215,24,208,0.6)',
                    borderColor: 'rgba(215,24,208,1)',
                    borderWidth: 1
                },
                {
                    label: label3,
                    data: data3,
                    fill: IsFill,
                    backgroundColor: 'rgba(7,219,250,0.4)',
                    borderColor: 'rgba(7,219,250,1)',
                    borderWidth: 1
                },
                {
                    label: label4,
                    data: data4,
                    fill: IsFill,
                    backgroundColor: 'rgba(203,203,203,0.6)',
                    borderColor: 'rgba(203,203,203,1)',
                    borderWidth: 1
                },
                {
                    label: label5,
                    data: data5,
                    fill: IsFill,
                    backgroundColor: 'rgba(203,203,203,0.6)',
                    borderColor: 'rgba(203,203,203,1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: Title,
                fontWeight: "bold"
            }
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}


function ChartJsBarOneDisplay(Pattern, labels, data1, label1) {
    HideReport(Pattern + 'ChartReportId');
    new Chart(document.getElementById(Pattern + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    backgroundColor: "#0573fc",
                    data: data1
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: ''
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    ShowReport(Pattern + 'ChartReportId');
}


function DisplayChartBarOne(Pattern, labels, data1, backgroundColor) {
    HideReport(Pattern + 'ChartReportId');
    new Chart(document.getElementById(Pattern + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "",
                    backgroundColor: backgroundColor,
                    data: data1
                }
                //{
                //    label: label2,
                //    backgroundColor: "#189b59",
                //    data: data2
                //}
            ]
        },
        options: {
            title: {
                display: false,
                text: ''
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    ShowReport(Pattern + 'ChartReportId');
}

function DisplayChartBarTwo(Pattern, labels, Title, label1, data1, backgroundColor1, label2, data2, backgroundColor2) {
    HideReport(Pattern + 'ChartReportId');
    new Chart(document.getElementById(Pattern + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    backgroundColor: backgroundColor1,
                    data: data1
                },
                {
                    label: label2,
                    backgroundColor: backgroundColor2,
                    data: data2
                }
            ]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    //formatter: (value, ctx) => {
                    //    let sum = 0;
                    //    let dataArr = ctx.chart.data.datasets[0].data;
                    //    dataArr.map(data => {
                    //        sum += data;
                    //    });
                    //    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    //    return percentage;
                    //},
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            }
        }
    });
    ShowReport(Pattern + 'ChartReportId');
}

function DisplayChartBarFour(
    Title, Pattern, labels,
    label0, label1, label2, label3,
    data0, data1, data2, data3,
    backgroundColor0, backgroundColor1, backgroundColor2, backgroundColor3) {
    HideReport(Pattern + 'ChartReportId');
    new Chart(document.getElementById(Pattern + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label0,
                    backgroundColor: backgroundColor0,
                    data: data0
                },
                {
                    label: label1,
                    backgroundColor: backgroundColor1,
                    data: data1
                },
                {
                    label: label2,
                    backgroundColor: backgroundColor2,
                    data: data2
                },
                {
                    label: label3,
                    backgroundColor: backgroundColor3,
                    data: data3
                }
            ]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            }


        }
    });
    ShowReport(Pattern + 'ChartReportId');
}

function ChartBarOneDisplay(PatternChart, labels, Title, label1, data1, backgroundColor1) {
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label1,
                    backgroundColor: backgroundColor1,
                    data: data1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    color: 'rgb(255, 255, 255, 0.0)',
                }
            }
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}


//var barOptions_Notstacked = {
//    title: {
//        display: true,
//        text: '',
//        fontColor: 'rgb(84, 84, 84)',
//        fontSize: 14
//    },
//};


function ChartBarHorizontalFiveDisplay(Title, labels, PatternChart,
    label0, label1, label2, label3, label4, label5,
    color0, color1, color2, color3, color4, color5,
    data0, data1, data2, data3, data4, data5) {
    document.getElementById(PatternChart + 'CanevasId').style.height = '600px';
    HideReport(PatternChart + 'ChartReportId');

    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label0,
                    backgroundColor: color0,
                    data: data0,

                },
                {
                    label: label1,
                    backgroundColor: color1,
                    data: data1
                },
                {
                    label: label2,
                    backgroundColor: color2,
                    data: data2
                },
                {
                    label: label3,
                    backgroundColor: color3,
                    data: data3
                },
                {
                    label: label4,
                    backgroundColor: color4,
                    data: data4
                },
                {
                    label: label5,
                    backgroundColor: color5,
                    data: data5
                },
            ]
        },
        options: {

            tooltips: {
                enabled: false
            },
            hover: {
                animationDuration: 0
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11
                    },
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                    },
                    stacked: true
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        color: "#fff",
                        zeroLineColor: "#fff",
                        zeroLineWidth: 0
                    },
                    ticks: {
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11
                    },
                    stacked: true
                }]
            },

            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },

            animation: {
                onComplete: function () {
                    var chartInstance = this.chart;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = "left";
                    ctx.font = "9px Open Sans";
                    ctx.fillStyle = "rgba(74,130,55,0.01)";

                    Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        Chart.helpers.each(meta.data.forEach(function (bar, index) {
                            data = dataset.data[index];
                            if (i == 0) {
                                ctx.fillText(data, 50, bar._model.y + 4);
                            } else {
                                ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                            }
                        }), this)
                    }), this);
                }
            },
            pointLabelFontFamily: "Quadon Extra Bold",
            scaleFontFamily: "Quadon Extra Bold",
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        //let sum = 0;
                        //let dataArr = ctx.chart.data.datasets[0].data;
                        //dataArr.map(data => {
                        //    sum += data;
                        //});
                        //let percentage = (value * 100 / sum).toFixed(2) + "%";
                        //return percentage;

                        let percentage = (value * 100).toFixed(2) + "%";
                        return percentage;
                    },
                    color: 'rgb(84, 84, 84)',
                }
            }
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function DisplayChartBarHorizontal(labels, data1, title) {

    HideReport('BarHorizontalChartReportId');
    new Chart(document.getElementById("BarHorizontalCanevasId"), {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: title,
                    backgroundColor: "#0573fc",
                    data: data1
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: ''
            }
        }
    });
    ShowReport('BarHorizontalChartReportId');
}

function DisplayChartBarHorizontalStacked(labels, data1, data2) {
    HideReport('BarHorizontalChartReportId');
    var barOptions_stacked = {
        tooltips: {
            enabled: false
        },
        hover: {
            animationDuration: 0
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 15
                },
                scaleLabel: {
                    display: false
                },
                gridLines: {
                },
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 15
                },
                stacked: true
            }]
        },
        legend: {
            display: false
        },

        animation: {
            onComplete: function () {
                var chartInstance = this.chart;
                var ctx = chartInstance.ctx;
                ctx.textAlign = "center";
                ctx.font = "15px Open Sans";
                ctx.fillStyle = "#fff";

                Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    Chart.helpers.each(meta.data.forEach(function (bar, index) {
                        data = dataset.data[index];
                        if (i == 0) {
                            ctx.fillText(data, 50, bar._model.y + 4);
                        } else {
                            ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                        }
                    }), this)
                }), this);
            }
        },
        pointLabelFontFamily: "Quadon Extra Bold",
        scaleFontFamily: "Quadon Extra Bold",
    };

    new Chart(document.getElementById("BarHorizontalCanevasId"), {

        type: 'horizontalBar',
        data: {
            labels: labels,

            datasets: [{
                data: data1,
                backgroundColor: "#ffa200",
                hoverBackgroundColor: "#ef9a06"
            }, {
                data: data2,
                backgroundColor: "#010101",
                hoverBackgroundColor: "#010101"
            }]
        },

        options: barOptions_stacked,

    });
    ShowReport('BarHorizontalChartReportId');
}


function ChartBarHorizontalThreeDisplay(Title, labels, PatternChart,
    label0, label1, label2,
    color0, color1, color2,
    data0, data1, data2) {
    document.getElementById(PatternChart + 'CanevasId').style.height = '600px';
    HideReport(PatternChart + 'ChartReportId');

    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: label0,
                    backgroundColor: color0,
                    data: data0,

                },
                {
                    label: label1,
                    backgroundColor: color1,
                    data: data1
                },
                {
                    label: label2,
                    backgroundColor: color2,
                    data: data2
                }
            ]
        },
        options: {

            tooltips: {
                enabled: false
            },
            hover: {
                animationDuration: 0
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11
                    },
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                    },
                    stacked: true
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        color: "#fff",
                        zeroLineColor: "#fff",
                        zeroLineWidth: 0
                    },
                    ticks: {
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11
                    },
                    stacked: true
                }]
            },

            title: {
                display: true,
                text: Title,
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },

            animation: {
                onComplete: function () {
                    var chartInstance = this.chart;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = "left";
                    ctx.font = "9px Open Sans";
                    ctx.fillStyle = "rgba(74,130,55,0.01)";

                    Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        Chart.helpers.each(meta.data.forEach(function (bar, index) {
                            data = dataset.data[index];
                            if (i == 0) {
                                ctx.fillText(data, 50, bar._model.y + 4);
                            } else {
                                ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                            }
                        }), this)
                    }), this);
                }
            },
            pointLabelFontFamily: "Quadon Extra Bold",
            scaleFontFamily: "Quadon Extra Bold",
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        //let sum = 0;
                        //let dataArr = ctx.chart.data.datasets[0].data;
                        //dataArr.map(data => {
                        //    sum += data;
                        //});
                        //let percentage = (value * 100 / sum).toFixed(2) + "%";
                        //return percentage;

                        let percentage = (value * 100).toFixed(2) + "%";
                        return percentage;
                    },
                    color: 'rgb(84, 84, 84)',
                }
            }
        }
    });
    ShowReport(PatternChart + 'ChartReportId');
}

function DisplayChartLine(labels, data1) {
    HideReport('LineChartReportId');
    new Chart(document.getElementById("LineCanevasId"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: "#04e404",
                    data: data1,
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: ''
            }
        }
    });
    ShowReport('LineChartReportId');
}

function ChartPieDisplay(Title, labels, PatternChart, backgroundColor, data1) {

    document.getElementById(PatternChart + 'CanevasId').style.height = '600px';
    HideReport(PatternChart + 'ChartReportId');
    new Chart(document.getElementById(PatternChart + 'CanevasId'), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: backgroundColor,
                    data: data1
                }
            ]
        },
        options: {
            //responsive: true,
            //maintainAspectRatio: false,
            legend: {
                position: 'right',
                labels: {
                    fontColor: 'rgb(84, 84, 84)',
                    fontSize: 12,
                    usePointStyle: true,
                    padding: 16
                }
            },
            //pieceLabel: {
            //    render: 'percentage',
            //    fontColor: 'white',
            //    fontSize: 14,
            //},
            //tooltips: false,
            //layout: {
            //    padding: {
            //        left: 20,
            //        right: 20,
            //        top: 20,
            //        bottom: 20
            //    }
            //},
            title: {
                display: true,
                text: Title,
                fontColor: 'rgb(84, 84, 84)',
                fontSize: 14
            },







            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: 'rgb(84, 84, 84)',
                }
            }







        }

    });
    ShowReport(PatternChart + 'ChartReportId');
}

//google.charts.load('current', { 'packages': ['sankey'] });
//google.charts.setOnLoadCallback(drawChart);

function ChartGoSankeyDisplay() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
        ['A', 'X', 5],
        ['A', 'Y', 7],
        ['A', 'Z', 6],
        ['B', 'X', 2],
        ['B', 'Y', 9],
        ['B', 'Z', 4]
    ]);

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
}




















//var ctx = document.getElementById("Chart1");
//var myChart = new Chart(ctx, {
//    type: 'horizontalBar',
//    data: {
//        labels: ["2014", "2013", "2012", "2011"],

//        datasets: [{
//            data: [727, 589, 537, 543, 574],
//            backgroundColor: "rgba(63,103,126,1)",
//            hoverBackgroundColor: "rgba(50,90,100,1)"
//        }, {
//            data: [238, 553, 746, 884, 903],
//            backgroundColor: "rgba(163,103,126,1)",
//            hoverBackgroundColor: "rgba(140,85,100,1)"
//        }, {
//            data: [1238, 553, 746, 884, 903],
//            backgroundColor: "rgba(63,203,226,1)",
//            hoverBackgroundColor: "rgba(46,185,235,1)"
//        }]
//    },

//    options: barOptions_stacked,
//});

