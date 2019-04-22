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

    //volume chart
    var volumeChart = Highcharts.chart( 'volume-container', {
          chart: {
              type: 'line',
              spacing: [25,0,20,30]
          },
          title: {
              text: 'OVERALL VOLUME',
              align: 'left',
              x: 0,
              y: 15
          },
          subtitle: {
              text: 'As of March 2019',
              align: 'left'
          },
          xAxis: {
              categories: ["Apr '16","May '16","Jun '16","Jul '16","Aug '16","Sep '16","Oct '16","Nov '16","Dec '16","Jan '17","Feb '17","Mar '17","Apr '17","May '17","Jun '17","Jul '17","Aug '17","Sep '17","Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19"],
              labels: {
                  step: 3,
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
          yAxis: [{ //--- Primary yAxis
              title: {
                  text: 'USD',
                  align: 'high',
                  rotation: 0,
                  y: -35,
                  x: -35,
                  style: {
                      color: "#25b135",
                      fontWeight: '700'
                  }
              },
              gridLineColor: 'transparent',
              labels: {
                  style: {
                      color: "#25b135",
                      fontWeight: '700'
                  }
              },
              opposite: true
          }, { //--- Secondary yAxis
              title: {
                  text: 'BTC',
                  align: 'high',
                  rotation: 0,
                  y: -35,
                  x: -35,
                  style: {
                      color: "#F2A900",
                      fontWeight: '700'
                  }
              },
              opposite: true,
              gridLineColor: 'transparent',
              labels: {
                  style: {
                      color: "#F2A900",
                      fontWeight: '700'
                  }
              }
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
              name: 'USD',
              color: '#25b135',
              tooltip: {
                  pointFormat: '{point.y:,.0f} USD<br>'
              },
              data: [13792.27157,39004.41862,34747.10333,33664.25475,149112.1901,72826.8349,80373.7636,133111.5085,147766.9444,223908.8823,142296.5827,196890.8353,238489.7743,410331.0229,716650.0242,209568.3684,536809.9232,440571.7911,393269.1143,520430.1413,3041714.944,1245149.433,634527.5756,713308.1799,545125.1617,586420.8052,675849.95,498015.4563,2427576.136,2111553.753,7095065.072,6615781.172,5858861.337,3421269.52,2402016.115]

          },{
              yAxis: 1,
              name: 'BTC',
              color: '#F2A900',
              tooltip: {
                  pointFormat: '{point.y:,.2f} BTC<br>'
              },
              data: [30.4614,85.1692,55.6743,50.6044,256.7352,121.5743,128.2444,184.0622,182.4798,243.2483,134.3275,172.3857,193.37,221.4358,270.4825,83.472,135.1765,106.9736,74.9017,67.2054,181.0099,93.5597,70.1503,78.5016,68.451,68.6165,99.8987,69.0223,357.2422,324.9354,1106.7487,1356.0337,1602.5863,933.8959,654.9728]
          }],
          legend: {
              enabled: false
          }
      });



      //bsq supply chart
      var bsqChart = Highcharts.chart( 'bsq-container', {
        chart: {
            type: 'line',
            spacing: [25,20,20,30]
        },
        title: {
            text: 'BSQ SUPPLY',
            align: 'left',
            x: 0,
            y: 15
        },
        subtitle: {
            text: 'As of March 2019',
            align: 'left'
        },
        xAxis: {
            categories: ["Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19"],
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
            color: '#000',
            tooltip: {
                pointFormat: '{point.y:,.0f} BSQ<br>'
            },
            data: [2548500,2620250,2671850,2722950,2769150,2806330,2830832,2868164,2889799,2934231,2971823,3018665,3052400,3272927,3344765,3406635,3520705]
        }],
        legend: {
            enabled: false
        }
    });

});
