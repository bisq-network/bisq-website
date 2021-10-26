/*****************************************
DO NOT change anything in this section unless you know what you are doing. The DAO dashboard generation script in .dao/ looks for specific variables in specific lines, and moving anything in this section could break it.
*****************************************/

var timeframeSeries = [];
var supplySeries = [];

/****************************************/

$( document ).ready( function() {

    //bsq supply chart
    var bsqChart = Highcharts.chart( 'bsq-container', {
        lang: {
            thousandsSep: ",",
            decimalPoint: '.'
        },
        chart: {
            type: 'line',
            spacing: [25,20,20,30],
            style: {
                fontFamily: "'IBM Plex Sans', sans-serif"
            }
        },
        title: {
            text: '',
            align: 'left',
            x: 0,
            y: 15
        },
        xAxis: {
            categories: timeframeSeries,
            labels: {
                step: 2,
                style: {
                    color: "#bababa"
                }
            },
            tickLength: 0,
            minorTickLength: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent'
        },
        yAxis: [{
            title: {
                text: '',

            },
            labels: {
                formatter: function () {
                    return this.value / 1000000 + 'M';
                }
            },
            gridLineColor: 'transparent',
            opposite: true
        }],
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            yAxis: 0,
            name: 'BSQ',
            color: '#25B135',
            tooltip: {
                pointFormat: '{point.y:,.0f} BSQ<br>'
            },
            data: supplySeries
        }],
        legend: {
            enabled: false
        }
    });

});
