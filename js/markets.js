


function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};



function buildTKR(pair){
  var ticker = '';
  if (pair == 'BTC'){
    suffix = ' <span class="currencyPair">Volume</span>';
  }else{
    ticker = pair.replace("btc", '');
    ticker = ticker.replace("_", '').toUpperCase();
  }

  return ticker;

}


function buildTitle(valueFinal, pair){
  var suffix = '';
  suffix = ' <span class="currency-pair">'+buildTKR(pair)+'</span>';


  if(pair.startsWith("btc")){
    valueFinal = valueFinal;
  }else{
    valueFinal = 1 / valueFinal;
  }

  valueFinal = Math.round(valueFinal * 100) / 100;
  return '<span class="btc-note">1 BTC</span>'+'<span class="price">'+valueFinal+'</span>'+suffix;

}




function getTrades(pair){
  console.log(pair);
  var jsonUrl = 'https://markets.bisq.network/api/trades?market='+pair+'&format=jscallback'+'&callback=?';
  console.log(jsonUrl);
  $.get( jsonUrl, function( data ) {
    console.log(data);

    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {  "class": "my-new-list",  html: items.join( "" ) }).appendTo( "body" );
  });


}


$(document).ready(function() {

       $(".chosen-select").chosen({
         no_results_text: "Oops, nothing found!",
         width: "100%"
       });

       var currency = getUrlParameter('currency');

       if(currency !== undefined){
         $('.chosen-select').val(currency).trigger("chosen:updated");
       }

       $('.chosen-select').change(function(){

          var url = window.location.href.split('?')[0] + '?';


          if($("#currency").val()!='Select')
            url+='currency='+encodeURIComponent($("#currency").val())+'&';

          url = url.replace(/\&$/,'');
          console.log(url);
          window.location.href=url;

          //window.history.pushState("object or string", "Title", url);
          //buildData($("#currency").val());

        });





});



//chart.series[0].setData([129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4] );

var pair = getUrlParameter('currency');
buildData(pair);








function buildData(jsonUrl){


    if(pair === undefined || pair === 'all'){
      //api/volumes?basecurrency=BTC&milliseconds=true&timestamp=no&format=jscallback&fillgaps=
      var jsonUrl = 'https://markets.bisq.network/api/volumes?basecurrency=BTC&milliseconds=true&timestamp=no'+'&interval=minute'+'&timestamp_from='+'&timestamp_to='+'&format=jscallback&fillgaps=&callback=?';
      //pair = 'BTC';
    }else{
      var jsonUrl = 'https://markets.bisq.network/api/hloc'+'?market='+pair+'&timestamp=no'+'&interval=minute'+'&timestamp_from='+'&timestamp_to='+'&format=jscallback';
    }

    console.log(jsonUrl);

    getTrades(pair);




    //return 'api/hloc?market=btc_usd&milliseconds=true&timestamp=no&format=jscallback&fillgaps=&callback=?';
    //return 'api/volumes?basecurrency=BTC&milliseconds=true&timestamp=no&format=jscallback&fillgaps=&callback=?';

    $.getJSON(jsonUrl+'&callback=?', function (data) {
      console.log('data');
      console.log(data);
    });

    $.getJSON(jsonUrl+'&callback=?', function (data) {

        console.log('data');
        console.log(data);

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
            if(pair.startsWith("btc")){
              avg.push([
                  data[i][0]*1000, // the date
                  data[i][7]  // the average
              ]);
            }else if (pair == 'allowed'){
              avg.push([
                  data[i][0]*1000, // the date
                  (1 / data[i][0])  // the average
              ]);
            }else{
              avg.push([
                  data[i][0]*1000, // the date
                  (1 / data[i][7])  // the average
              ]);
            }


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
                		y: -60
                },
                buttonTheme: { // styles for the buttons
                    width: 22,
                    height: 17,
                    fill: 'none',
                    stroke: 'none',
                    'stroke-width': 0,
                    r: 2,
                    style: {
                        color: '#25B135',
                        fontWeight: '300',
                        fontFamily: 'IBM Plex Sans',
                        fontSize:'14px',
                    },
                    states: {
                        hover: {
                        },
                        select: {
                            fill: '#25B135',
                            style: {
                                fontWeight: '300',
                                color: 'white'
                            }
                        }
                        // disabled: { ... }
                    }
                },
                buttons: [

                {
                    type: 'hour',
                    count: 1,
                    text: '1H'
                },

                {
                    type: 'day',
                    count: 1,
                    text: '1D'
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
                    text: '1Y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },


            chart: {
                margin: [0,0,45,0],
                //backgroundColor: '#bbb',
                backgroundColor:'rgba(255, 255, 255, 0.0)'
            },

            plotOptions: {
                series: {
                    //animation: false
                    //stickyTracking: true,
                },
                series: {
                    //pointWidth: 15
                }
            },

            title: {
                text: buildTitle(data[dataLength-1][7], pair),
                align: 'left',
                x:20,
                y:30,
                useHTML: true
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

            yAxis: [
                    {
                      labels: {
                          align: 'right',
                          x: -18,
                          y: -5,
                          style: {
                              color: '#25B135',
                              fontWeight: '300',
                              fontFamily: 'IBM Plex Sans',
                              fontSize: '10',
                          }
                          //enabled: false
                      },
                      style: {
                          color: '#FF00FF',
                          fontWeight: 'bold'
                      },
                      gridLineColor: 'transparent',
                      //visible: false,
                      title: {
                          text: 'Price'
                      },
                      height: '100%',
                      lineWidth: 0,
                      top: '0%',
                      //resize: { enabled: true }
                    },


                    {
                        labels: {
                            y: -5,
                            x: -48,
                            //align: 'left',
                            //x: -140,
                            //enabled: false,
                            style: {
                                color: '#9c9c9c',
                                fontWeight: '300',
                                fontFamily: 'IBM Plex Sans',
                                fontSize: '10',
                            },
                        },
                        opposite: true,
                        //visible: false,

                        title: {
                            text: 'Volume'
                        },
                        top: '0%',
                        //height: '35%',
                        gridLineColor: 'transparent',
                        offset: 0,
                        lineWidth: 0,
                        height: '100%'
                    }

              ],


              xAxis: [
                      {
                        labels: {
                            style: {
                              color: '#92d799',
                              fontWeight: '300',
                              fontFamily: 'IBM Plex Sans',
                              fontSize: '14',
                            },
                        },
                        gridLineColor: 'transparent',
                        lineWidth: 0,
                        //resize: { enabled: true }
                        offset: 8,
                        tickLength: 0,
                        tickWidth: 0,
                        zIndex: -5,
                        backgroundColor: '#bbb',
                      },



                ],





            series: [

              {
                  type: 'area',
                  name: 'Price',
                  tooltip: {
                      valueSuffix: ' '+buildTKR(pair)
                  },
                  data: avg,
                  yAxis: 1,
                  color: '#25B135',
                  fillOpacity: 0.6,
                  yAxis: 0,
                  zIndex: 1,

              },



              {
                  type: 'column',
                  name: 'Volume',
                  tooltip: {
                      valueSuffix: ' '+buildTKR(pair)
                  },
                  data: volume,
                  color: '#cfcfcf',
                  yAxis: 1,
                  zIndex: -10,
                  maxPointWidth: 200,
                  pointPadding: 0,
                  groupPadding: 0,
                  borderWidth: 0,
                  shadow: false,
                  borderColor: '#c5c5c5'

              },





          ],

          tooltip: {
              split: false,
              crosshairs: true,
              shared: true,
              useHTML: true,
              headerFormat: '<small>{point.key}</small><table>',
              pointFormat: '<tr style="color: {series.color}" ><td>{series.name}: </td>' + '<td style="text-align: right"> <b>{point.y} {this.series.tooltipOptions.valueSuffix}</b></td></tr>',
              footerFormat: '</table><div class="tooltip"></div>',
              valueDecimals: 2,
              borderRadius: 0,
              borderWidth: 0,
              //animation: false,
              borderRadius: 2,
              shadow: false,
              backgroundColor: "rgba(246,246,246,1)",
              style: {
                  color: '#444',
                  fontWeight: '300',
                  fontFamily: 'IBM Plex Sans',
                  width: 400
              },

          },

        });
    });


    $('#container').append( "<p>Test</p>" );

}
