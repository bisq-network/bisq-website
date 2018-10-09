$(document).ready(function() {

 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!"});

});



var jsonUrl = 'https://markets.bisq.network/api/hloc'+'?market=btc_usd'+'&timestamp=no'+'&interval=minute'+'&timestamp_from='+'&timestamp_to='+'&format=jscallback';

console.log(jsonUrl);
$.getJSON(jsonUrl+'&callback=?', function (data) {

    // split the data set into ohlc and volume
    var
        //ohlc = [],
        avg = [],
        volume = [],
        dataLength = data.length,
        // set the allowed units for data grouping
        groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]],

        i = 0;


    for (i; i < dataLength; i += 1) {
        /*
        ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
        ]);
        */
        avg.push([
            data[i][0]*1000, // the date
            data[i][7]  // the average
        ]);

        volume.push([
            data[i][0]*1000, // the date
            data[i][6]  // the volume_right
        ]);
    }



    Highcharts.setOptions({
      lang: {
              rangeSelectorZoom: ''
          }
    });
    // create the chart
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 5,
            inputEnabled: false,
            buttonPosition: {
            		align: 'right',
            		x: 0,
            		y: 0
            },
            buttons: [{
                type: 'hour',
                count: 1,
                text: '1H'
            }, {
                type: 'day',
                count: 1,
                text: '24H'
            }, {
                type: 'week',
                count: 1,
                text: '1W'
            }, {
                type: 'month',
                count: 1,
                text: '1M'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }]
        },


        chart: {
            margin: [0,0,50,0],
        },

        plotOptions: {
            series: {
                animation: false
            }
        },

        title: {
            text: data[dataLength-1][7],
            align: 'left',
        },





        navigator: {
            enabled: false
        },
        exporting: {
          enabled: false
        },
        credits: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },

        yAxis: [{
              labels: {
                  align: 'right',
                  x: -3,
                  enabled: false
              },
              visible: false,
              title: {
                  text: 'Price'
              },
              height: '60%',
              lineWidth: 2,
              resize: {
                  enabled: true
              }
            }, {
            labels: {
                align: 'right',
                x: -3,
                enabled: false
            },
            visible: false,
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],


        series: [
        {
            type: 'area',
            name: 'USD',
            data: avg,
            yAxis: 1,
            color: '#25B135',

        },
        {
            type: 'column',
            name: 'Volume',
            data: volume,
            color: '#25B135',
            yAxis: 1,

        }
      ],

      tooltip: {
          split: false,
          crosshairs: false,
          tooltip: {
              shared: true,
              useHTML: true,
              headerFormat: '<small>'+ Highcharts.dateFormat( '%B %e, %Y - %l:%M %p', this.x) +'</small><br>',
              pointFormat: '1 BTC = {point.y} {series.name}</b><br><br/>',
              footerFormat: '',
              valueDecimals: 2,
              borderRadius: 0,
              borderWidth: 0,
              animation: false
          },
      },

    });
});
