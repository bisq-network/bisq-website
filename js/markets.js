var pair = getUrlParameter( "currency" );

$( document ).ready( function() {
    $( ".chosen-select" ).chosen( { width: "100%" } );

    $( ".chosen-select" ).change(function(){
        var url = window.location.href.split( '?' )[0];

        if( $( "#currency" ).val() !== 'Select' ) {
            url += "?currency=" + encodeURIComponent( $( "#currency" ).val() );
        }

        window.location.href = url;
    });

    if( pair ) {
        $( ".chosen-select" ).val( pair ).trigger( "chosen:updated" );
    } else {
        $( ".chosen-select" ).val( "all" ).trigger( "chosen:updated" );
    }

    buildData( pair );
});


function getUrlParameter( requestedParam ) {
    var queryString = decodeURIComponent( window.location.search.substring(1) );
    var queryVars = queryString.split('&');
    var queryParam = "";

    for( var i = 0; i < queryVars.length; i++ ) {
        queryParam = queryVars[i].split( '=' );

        if ( queryParam[0] === requestedParam ) {
            return queryParam[1];
        }
    }
};


function buildTicker( pair ) {
    var ticker = '';
    if( !pair || pair === 'all' || pair === 'btc' ) {
        return "BTC";
    } else {
        ticker = pair.replace( "btc", '' ).replace( "_", '' );
        return ticker.toUpperCase();
    }
}


function buildChartTitle( valueFinal, pair ) {

    var chartTitle = '';

    if( pair !== 'btc' ) {

        if( pair.startsWith( "btc" ) ) {
            suffix = '<span class="currency-pair"> ' + buildTicker( pair ) + '</span>';
            chartTitle = '<span class="btc-note">1 BTC</span>' + '<span class="price">' + valueFinal.toFixed(2) + '</span><span class="currency-pair"> ' + buildTicker( pair ) + '</span>';
        } else {
            chartTitle = '<span class="btc-note">1 ' + buildTicker( pair ) + '</span>' + '<span class="price">' + valueFinal.toFixed(8) + ' BTC</span>';
        }

    } else {
        chartTitle = '<span class="btc-note">Volume and</span>' + '<span class="price">Trades</span>';
    }

    return chartTitle;
}


//keep all numbers to constant significant figures
function roundToSigFigs( num ) {

    var precision = 0;
    num = parseFloat( num );

    if( num < parseFloat( .1 ) ) {
        precision = Math.floor( Math.log10( num ) ) + 1;
        return Number( num.toPrecision( ( 5 + precision ) < 1 ? 1 : ( 5 + precision ) ) ).toFixed( Math.abs(precision) + 1 );
    } else {
        precision = Math.floor( Math.log10( num/.0001 ) ) - 1;
        return num.toPrecision( precision );
    }
}

//get btc price
function getAssetBTCPrice( price, ticker ) {

    var assetBTCPrice = parseFloat( price );
    if( ticker.startsWith( 'btc' ) ) {
        return assetBTCPrice.toFixed(2);
    } else {
        if( assetBTCPrice < 1 ) {
            return assetBTCPrice.toFixed(8);
        } else {
            return assetBTCPrice.toFixed(2);
        }
    }

}


//fill past trades table
function getTrades( pair ) {

    var actionTicker = buildTicker( pair );
    var jsonUrl = '';
    var tradeDate = '';
    var dateFormat = "mmm d, yyyy - HH:MM:ss";

    if( !pair ) {

        pair = 'all';
        jsonUrl = 'https://markets.bisq.network/api/trades?market=all&format=jsonpretty';

        $.get( jsonUrl, function( data ) {

            $( '<tr>' ).append(
                $( '<th>' ).text( 'Date' ),
                $( '<th>' ).text( 'Action' ),
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Amount in BTC' ),
                $( '<th>' ).text( 'Trade Amount')
            ).appendTo( '#trade-history-header' );

            data = JSON.parse(data);
            $.each( data, function( key, val ) {

                tradeDate = new Date( val.trade_date );

                $( '<tr>' ).append(
                    $( '<td>' ).html( tradeDate.format( dateFormat ) ),
                    $( '<td>' ).text( val.direction + ' ' + buildTicker( val.market ) ),
                    $( '<td>' ).text( getAssetBTCPrice( val.price, val.market ) + ( val.payment_method.startsWith('BLOCK_CHAINS') ? ' BTC' : ' ' + buildTicker( val.market ) ) ),
                    $( '<td>' ).text( ( val.payment_method.startsWith('BLOCK_CHAINS') ? roundToSigFigs( val.volume ) : roundToSigFigs( val.amount ) ) ),
                    $( '<td>' ).text( ( val.payment_method.startsWith('BLOCK_CHAINS') ? roundToSigFigs( val.amount ) : roundToSigFigs( val.volume ) ) + ' ' + buildTicker( val.market ) )
                ).appendTo( '#trade-history-body' );

            });

        });

    } else {

        jsonUrl = 'https://markets.bisq.network/api/trades?market=' + pair;

        $.get( jsonUrl, function( data ) {

            $( '#offers').show();

            if( pair.startsWith( "btc" ) ){
                $( '<tr>' ).append(
                    $( '<th>' ).text( 'Date' ),
                    $( '<th>' ).text( 'Action' ),
                    $( '<th>' ).text( 'Price (' + buildTicker( pair ) + ')' ),
                    $( '<th>' ).text( 'Trade Size (BTC)' ),
                    $( '<th>' ).text( 'Trade Size (' + buildTicker( pair ) + ')' )
                ).appendTo( '#trade-history-header' );

            } else {
                $( '<tr>' ).append(
                    $( '<th>' ).text( 'Date' ),
                    $( '<th>' ).text( 'Action' ),
                    $( '<th>' ).text( 'Price (BTC)' ),
                    $( '<th>' ).text( 'Trade Size (BTC)' ),
                    $( '<th>' ).text( 'Trade Size (' + buildTicker( pair ) + ')' )
                ).appendTo( '#trade-history-header' );
            }

            data = JSON.parse( data );
            $.each( data , function( key, val ) {

                tradeDate = new Date(val.trade_date);
                $( '<tr>' ).append(
                    $( '<td>' ).text( tradeDate.format( dateFormat ) ),
                    $( '<td>' ).text( val.direction + ' ' + actionTicker ),
                    $( '<td>' ).text( ( val.payment_method.startsWith('BLOCK_CHAINS') ?  parseFloat( val.price ).toFixed(8) : roundToSigFigs( parseFloat( val.price ) ) ) ),
                    $( '<td>' ).text( ( val.payment_method.startsWith('BLOCK_CHAINS') ? roundToSigFigs( val.volume ) : roundToSigFigs( val.amount ) ) ),
                    $( '<td>' ).text( ( val.payment_method.startsWith('BLOCK_CHAINS') ? roundToSigFigs( val.amount ) : roundToSigFigs( val.volume ) ) )
                ).appendTo('#trade-history-body' );

            });

        });

    }

}


//fill current offers table
function getOffers( pair ){

    if( !pair || pair === 'all' ){
        return;
    }

    var jsonUrl = 'https://markets.bisq.network/api/offers?market=' + pair + '&format=jsonpretty';

    $.getJSON( jsonUrl, function( data ) {

        if( pair.startsWith( "btc" ) ) {
            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Amount (BTC)' ),
                $( '<th>' ).text( 'Amount (' + ( buildTicker( pair ) + ')' ) ),
            ).appendTo('#buy-offers-header');

            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Amount (BTC)' ),
                $( '<th>' ).text( 'Amount (' + ( buildTicker( pair ) + ')' ) ),
            ).appendTo( '#sell-offers-header' );
        } else {
            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Amount (' + buildTicker( pair ) + ')' ),
                $( '<th>' ).text( 'Amount (BTC)' ),
            ).appendTo('#buy-offers-header');

            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Amount (' + buildTicker( pair ) + ')' ),
                $( '<th>' ).text( 'Amount (BTC)' ),
            ).appendTo( '#sell-offers-header' );
        }

        $.each( data[pair].buys, function( key, val ) {
            $( '<tr>' ).append(
                $( '<td>' ).text( pair.startsWith( "btc" ) ? parseFloat( val.price ).toFixed(2) : parseFloat( val.price ).toFixed(8) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.amount ) ) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.volume ) ) ),
            ).appendTo('#buy-offers-body');
        });

        $.each( data[pair].sells, function( key, val ) {
            $( '<tr>' ).append(
                $( '<td>' ).text( pair.startsWith( "btc" ) ? parseFloat( val.price ).toFixed(2) : parseFloat( val.price ).toFixed(8) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.amount ) ) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.volume ) ) ),
            ).appendTo( '#sell-offers-body' );
        });

        $( '#offers').show();

    });

}


//call table functions and build the chart
function buildData( jsonUrl ){

    var jsonUrl = "";
    var seriesTitle1 = 'Price';
    var avg = [];
    var volume = [];
    var volumeFiat = [];

    if( !pair || pair === 'all' ) {

        pair = 'btc';
        jsonUrl = "https://markets.bisq.network/api/volumes?basecurrency=btc&milliseconds=true&timestamp=no&format=jscallback&fillgaps=&callback=?&interval=day";
        getTrades();

    } else {

        jsonUrl = 'https://markets.bisq.network/api/hloc' + '?market=' + pair + '&timestamp=no' + '&interval=minute' + '&timestamp_from=' + '&timestamp_to=' + '&format=jscallback'+'&callback=?';
        getTrades( pair );
        getOffers( pair );

    }

    $.getJSON( jsonUrl, function( data ) {

        //split the data set into hloc and volume

        for( var i = 0; i < data.length; i += 1 ) {

            if( pair === 'btc' ) {

                avg.push([
                    data[i][0], // the date
                    data[i][2]  // the num of trades
                ]);

                volume.push([
                    data[i][0], // the date
                    data[i][1]  // the volume_right
                ]);

                seriesTitle1 = '# of trades';

            } else {

                if( pair.startsWith( "btc" ) ) {
                  avg.push([
                      data[i][0] * 1000, // the date
                      data[i][7]  // the average
                  ]);

                  volumeFiat.push([
                      data[i][0] * 1000, // the date
                      data[i][6]  // the volume_left
                  ]);

                } else {

                  avg.push([
                      data[i][0] * 1000, // the date
                      ( data[i][7] )  // the average
                    ]);
                  }

                  volume.push([
                      data[i][0] * 1000, // the date
                      data[i][6]  // the volume_right
                  ]);
              }
        }

        Highcharts.setOptions({
            lang: {
                rangeSelectorZoom: ''
            }
        });

        // create the chart
        Highcharts.stockChart( 'container', {

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
                text: buildChartTitle(data[data.length-1][7], pair),
                align: 'left',
                x:20,
                y:30,
                useHTML: true,
                style: { zIndex: 0, },
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
                            x: -58,
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
                  type: 'line',
                  name: seriesTitle1,
                  tooltip: {
                      pointFormat: '<tr style="color: {series.color}" ><td>{series.name}: </td>' + '<td style="text-align: right"> <b>' + ( pair === 'btc' ? '{point.y:.0f}' : ( pair.startsWith('btc') ? '{point.y:.2f}' : '{point.y:.8f}' ) ) + '</b></td></tr>',
                  },
                  data: avg,
                  yAxis: 1,
                  color: '#25B135',
                  getExtremesFromAll:false,
                  fillOpacity: 0.6,
                  yAxis: 0,
                  zIndex: 1,
                  lineWidth: 1,
                  dataGrouping: {
                      approximation: ( pair === 'btc' ) ? 'sum' : 'average',
                      enabled: true,
                      forced: true
                  },

              },



              {
                  type: 'column',
                  name: 'Volume',
                  tooltip: {
                      pointFormatter: function() {
                          return '<tr style="color: ' + this.series.color + '" ><td>' + this.series.name + ': </td><td style="text-align: right"> <b>' + Highcharts.numberFormat(this.y, 2, '.', ',') + ( pair.startsWith('btc') ? ' ' + buildTicker(pair) : ' BTC' ) + '</b></td></tr>';
                      }
                  },
                  data: ( pair === 'btc' ? volume : ( pair.startsWith('btc') ? volumeFiat : volume ) ),
                  color: '#bbb',
                  states: { hover: { color: '#aaa', duration: 0 } },
                  yAxis: 1,
                  zIndex: -10,
                  maxPointWidth: 200,
                  pointPadding: 0,
                  groupPadding: 0,
                  borderWidth: 0,
                  shadow: false,
                  borderColor: '#c5c5c5',
                  dataGrouping: {
                      enabled: true,
                      forced: true,
                      groupAll: true
                  }

              },





          ],

          tooltip: {
              followPointer: false,
              split: false,
              crosshairs: true,
              shared: true,
              useHTML: true,
              headerFormat: '<small>{point.key}</small><table>',
              footerFormat: '</table>',
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
                  width: 400,
                  zIndex: 19999,
              },

          },

        });
    });

}
