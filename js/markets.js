


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


function buildTitle(valueFinal, pair){
  var prefix = '';
  var suffix = '';
  if (pair == 'BTC'){
    suffix = ' <span class="currencyPair">Volume</span>';
  }else{
    //prefix = '$';
    suffix = pair.replace("btc", '');
    suffix = ' <span class="currencyPair">'+suffix.replace("_", '')+'</span>';
  }

  valueFinal = Math.round(valueFinal * 100) / 100;
  return prefix+valueFinal+suffix;

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



       $('.chosen-select').change(function(){

          var url = window.location.href.split('?')[0] + '?';


          if($("#currency").val()!='Select')
            url+='currency='+encodeURIComponent($("#currency").val())+'&';

          url = url.replace(/\&$/,'');
          //alert(url);
          window.location.href=url;

          window.history.pushState("object or string", "Title", url);

          //buildData($("#currency").val());

        });





});



//chart.series[0].setData([129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4] );

var pair = getUrlParameter('currency');
buildData(pair);

function buildData(jsonUrl){


if(pair === undefined || pair === 'all'){
  //api/volumes?basecurrency=BTC&milliseconds=true&timestamp=no&format=jscallback&fillgaps=
  var jsonUrl = 'https://markets.bisq.network/api/volumes?basecurrency=BTC'+'&timestamp=no'+'&interval=minute'+'&timestamp_from='+'&timestamp_to='+'&format=jscallback';
  pair = 'BTC';
}else{
  var jsonUrl = 'https://markets.bisq.network/api/hloc'+'?market='+pair+'&timestamp=no'+'&interval=minute'+'&timestamp_from='+'&timestamp_to='+'&format=jscallback';
}

console.log(pair);

getTrades(pair);





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
                		y: -40
                },
                buttonTheme: { // styles for the buttons
                    width: 40,
                    height: 23,
                    fill: 'none',
                    stroke: 'none',
                    'stroke-width': 0,
                    r: 2,
                    style: {
                        color: '#25B135',
                        fontWeight: '300',
                        fontFamily: 'IBM Plex Sans',
                        fontSize:'20px',
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

                /*{
                    type: 'hour',
                    count: 1,
                    text: '1H'
                },
                */
                {
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
                    text: '1Y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },


            chart: {
                margin: [0,0,50,0],
                //backgroundColor: '#bbb',
            },

            plotOptions: {
                series: {
                    animation: false
                }
            },

            title: {
                text: buildTitle(data[dataLength-1][7], pair),
                align: 'left',
                x:20,
                y:60,
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
                          y: -10,
                          style: {
                              color: '#92d799'
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
                      //resize: { enabled: true }
                    },


                    {
                        labels: {
                            align: 'left',
                            x: -140,
                            opposite:false,
                            enabled: false,
                            style: {
                                color: '#CCC'
                            }
                        },
                        visible: false,
                        title: {
                            text: 'Volume'
                        },
                        //top: '65%',
                        //height: '35%',
                        offset: 0,
                        lineWidth: 0,
                        height: '100%'
                    }

              ],


              xAxis: [
                      {
                        labels: {
                            style: {
                                color: '#CCC'
                            }
                        },
                        style: {
                            color: '#FF00FF',
                            fontWeight: 'bold'
                        },
                        gridLineColor: 'transparent',
                        lineWidth: 0,
                        //resize: { enabled: true }
                      },




                ],





            series: [

            {
                type: 'column',
                name: 'Volume',
                data: volume,
                color: '#cfcfcf',
                yAxis: 1,

            },

            {
                type: 'area',
                name: 'USD',
                data: avg,
                //yAxis: 1,
                color: '#25B135',
                yAxis: 0,

            },


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
              style: {
                  color: '#444',
                  fontWeight: '300',
                  fontFamily: 'IBM Plex Sans'
              }
          },

        });
    });
}
