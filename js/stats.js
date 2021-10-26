$( document ).ready( function() {

    //overall volume
    Highcharts.setOptions({
        lang: {
            thousandsSep: ",",
            decimalPoint: '.'
        },
        chart: {
            style: {
                fontFamily: "'IBM Plex Sans', sans-serif"
            }
        }
    });

    //bsq supply chart
    var bsqChart = Highcharts.chart( 'bsq-container', {
        chart: {
            type: 'line',
            spacing: [25,20,20,30]
        },
        title: {
            text: '',
            align: 'left',
            x: 0,
            y: 15
        },
        xAxis: {
            categories: ["Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19","Mar '19","Cycle 1","Cycle 2","Cycle 3","Cycle 4","Cycle 5","Cycle 6","Cycle 7","Cycle 8","Cycle 9","Cycle 10","Cycle 11","Cycle 12","Cycle 13","Cycle 14","Cycle 15","Cycle 16","Cycle 17","Cycle 18","Cycle 19","Cycle 20","Cycle 21","Cycle 22","Cycle 23","Cycle 24","Cycle 25"],
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
            data: [2548500,2620250,2671850,2722950,2769150,2806330,2830832,2868164,2889799,2934231,2971823,3018665,3052400,3272927,3344765,3406635,3520705,3657480,3726799,3726799,3735459,3727371,3704333,3774343,3848333.41,3907367.21,3945679.29,3930737.33,3969291.4,4011895.99,4006296.58,3989210.06,4111362.16,4209227.38,4212558.32,4306602.72,4292867.04,4292867.04,4499366.1,4465481.17,4391961.00,4369511.61,4349992.24]
        }],
        legend: {
            enabled: false
        }
    });

});
