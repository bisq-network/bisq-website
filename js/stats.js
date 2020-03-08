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

    var fiatVolumeChart = Highcharts.chart( 'fiat-volume-container', {
        chart: {
            type: 'line',
            spacing: [25,0,20,30]
        },
        title: {
            text: 'FIAT VOLUME',
            align: 'left',
            x: 0,
            y: 15
        },
        subtitle: {
            text: 'Fiat trading activity on the network',
            align: 'left'
        },
        xAxis: {
            categories: ["Apr '16","May '16","Jun '16","Jul '16","Aug '16","Sep '16","Oct '16","Nov '16","Dec '16","Jan '17","Feb '17","Mar '17","Apr '17","May '17","Jun '17","Jul '17","Aug '17","Sep '17","Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19","Mar '19","Apr '19","May '19","Jun '19","Jul '19","Aug '19","Sep '19","Oct '19","Nov '19","Dec '19","Jan '20","Feb '20"],
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
        yAxis: [{
            title: {
                text: 'BTC',
                align: 'high',
                rotation: 0,
                y: -35,
                x: -35,
                style: {
                    color: "#25b135",
                    fontWeight: '700'
                }
            },
            opposite: true,
            gridLineColor: 'transparent',
            labels: {
                style: {
                    color: "#25b135",
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
            name: 'BTC',
            color: '#25b135',
            tooltip: {
                pointFormat: '{point.y:,.2f} BTC<br>'
            },
            data: [11.8995,41.3696,32.0541,40.8324,116.6891,73.2759,81.5417,115.763,168.2711,179.9098,114.6693,140.0966,142.6057,178.7778,116.686,58.4357,79.3912,61.1235,56.7454,54.829,64.6699,54.245,48.825,43.7748,41.1994,49.3965,66.1055,41.8279,40.148,40.8045,50.4425,59.1317,70.7977,77.302,84.2301,89.5436,86.4997,53.4374,44.2075,41.7215,50.2143,45.8008,54.1624,47.6012,55.6751,65.8068,77.1661]
        }],
        legend: {
            enabled: false
        }
    });

    //altcoin volume chart
    var altcoinVolumeChart = Highcharts.chart( 'altcoin-volume-container', {
          chart: {
              type: 'line',
              spacing: [25,0,20,30]
          },
          title: {
              text: 'ALTCOIN VOLUME',
              align: 'left',
              x: 0,
              y: 15
          },
          subtitle: {
              text: 'Altcoin trading activity on the network',
              align: 'left'
          },
          xAxis: {
              categories: ["Apr '16","May '16","Jun '16","Jul '16","Aug '16","Sep '16","Oct '16","Nov '16","Dec '16","Jan '17","Feb '17","Mar '17","Apr '17","May '17","Jun '17","Jul '17","Aug '17","Sep '17","Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19","Mar '19","Apr '19","May '19","Jun '19","Jul '19","Aug '19","Sep '19","Oct '19","Nov '19","Dec '19","Jan '20","Feb '20"],
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
          yAxis: [{
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
              name: 'BTC',
              color: '#F2A900',
              tooltip: {
                  pointFormat: '{point.y:,.2f} BTC<br>'
              },
              data: [18.562,43.8,23.62,9.772,140.046,48.298,46.778,68.409,14.239,63.339,19.658,32.289,50.764,42.658,153.797,25.036,55.785,45.85,18.156,12.376,116.34,39.315,21.325,34.727,27.252,19.22,33.793,27.194,317.094,284.131,1056.306,1296.902,1531.789,856.594,570.743,371.216,1263.668,967.156,2820.483,1609.363,2404.239,1091.328,449.350,417.844,347.873,247.628,486.598]
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
            text: 'Total BSQ issued net of BSQ burned for fees',
            align: 'left'
        },
        xAxis: {
            categories: ["Oct '17","Nov '17","Dec '17","Jan '18","Feb '18","Mar '18","Apr '18","May '18","Jun '18","Jul '18","Aug '18","Sep '18","Oct '18","Nov '18","Dec '18","Jan '19","Feb '19","Mar '19","Apr '19","May '19","Jun '19","Jul '19","Aug '19","Sep '19","Oct '19","Nov '19","Dec '19","Jan '20","Feb '20"],
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
            data: [2548500,2620250,2671850,2722950,2769150,2806330,2830832,2868164,2889799,2934231,2971823,3018665,3052400,3272927,3344765,3406635,3520705,3657480,3726799,3726799,3735459,3727371,3704333,3774343,3848333.41,3907367.21,3945679.29,3930737.33,3969291.4]
        }],
        legend: {
            enabled: false
        }
    });

});
