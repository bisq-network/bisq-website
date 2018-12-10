var pair = getUrlParameter( "currency" );
buildData( pair );


$( document ).ready( function() {
    $(".chosen-select").chosen( { width: "100%" } );

    $( '.chosen-select').change(function(){
        var url = window.location.href.split( '?' )[0];

        if( $( "#currency" ).val() !== 'Select' ) {
            url += "?currency=" + encodeURIComponent( $( "#currency" ).val() );
        }

        window.location.href = url;
    });
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
    if( pair !== 'btc' ) {
        var suffix = '';
        suffix = ' <span class="currency-pair">' + buildTicker( pair ) + '</span>';
        if( !pair.startsWith( "btc" ) ) {
            valueFinal = Math.round( ( 1 / valueFinal ) * 100 ) / 100;
        }
        return '<span class="btc-note">1 BTC</span>' + '<span class="price">' + roundToSigFigs( valueFinal ) + '</span>' + suffix;
    } else {
        return '<span class="btc-note">Volume and</span>' + '<span class="price">Trades</span>';
    }
}


//keep all numbers to constant significant figures
function roundToSigFigs( num ) {

    var precision = 0;
    num = parseFloat( num );

    if( num < parseFloat( .1 ) ) {
        precision = Math.floor( Math.log10( num ) ) + 1;
        return num.toPrecision( ( 5 + precision ) < 1 ? 1 : ( 5 + precision ) );
    } else {
        precision = Math.floor( Math.log10( num/.0001 ) ) - 1;
        return num.toPrecision( precision );
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
                    $( '<td>' ).text( roundToSigFigs( val.price ) + ( val.payment_method === 'BLOCK_CHAINS' ? ' BTC' : ' ' + buildTicker( val.market ) ) ),
                    $( '<td>' ).text( ( val.payment_method === 'BLOCK_CHAINS' ? roundToSigFigs( val.volume ) : roundToSigFigs( val.amount ) ) ),
                    $( '<td>' ).text( ( val.payment_method === 'BLOCK_CHAINS' ? roundToSigFigs( val.amount ) : roundToSigFigs( val.volume ) ) + ' ' + buildTicker( val.market ) )

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
                    $( '<td>' ).text( roundToSigFigs( parseFloat( val.price ) ) ),
                    $( '<td>' ).text( ( val.payment_method === 'BLOCK_CHAINS' ? roundToSigFigs( val.volume ) : roundToSigFigs( val.amount ) ) ),
                    $( '<td>' ).text( ( val.payment_method === 'BLOCK_CHAINS' ? roundToSigFigs( val.amount ) : roundToSigFigs( val.volume ) ) )
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
                $( '<th>' ).text( 'Offer Amount (BTC)' ),
                $( '<th>' ).text( 'Offer Price (' + ( buildTicker( pair ) + ')' ) ),
            ).appendTo('#buy-offers-header');

            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Offer Amount (BTC)' ),
                $( '<th>' ).text( 'Offer Price (' + ( buildTicker( pair ) + ')' ) ),
            ).appendTo( '#sell-offers-header' );
        } else {
            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Offer Amount (' + buildTicker( pair ) + ')' ),
                $( '<th>' ).text( 'Offer Price (BTC)' ),
            ).appendTo('#buy-offers-header');

            $( '<tr>' ).append(
                $( '<th>' ).text( 'Price' ),
                $( '<th>' ).text( 'Offer Amount (' + buildTicker( pair ) + ')' ),
                $( '<th>' ).text( 'Offer Price (BTC)' ),
            ).appendTo( '#sell-offers-header' );
        }

        $.each( data[pair].buys, function( key, val ) {
            $( '<tr>' ).append(
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.price ) ) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.amount ) ) ),
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.volume ) ) ),
            ).appendTo('#buy-offers-body');
        });

        $.each( data[pair].sells, function( key, val ) {
            $( '<tr>' ).append(
                $( '<td>' ).text( roundToSigFigs( parseFloat( val.price ) ) ),
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
        var seriesTitle1 = 'Price';
        var dataLength = data.length;
        var avg = []; var volume = [];

        for( var i = 0; i < dataLength; i += 1 ) {

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
                } else {
                  avg.push([
                      data[i][0] * 1000, // the date
                      ( 1 / data[i][7] )  // the average
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
                text: buildChartTitle(data[dataLength-1][7], pair),
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
                  type: 'line',
                  name: seriesTitle1,
                  tooltip: {
                      pointFormat: '<tr style="color: {series.color}" ><td>{series.name}: </td>' + '<td style="text-align: right"> <b>' + ( pair === 'btc' ? '{point.y:.0f}' : '{point.y:.2f}' ) + '</b></td></tr>',
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
                          return '<tr style="color: ' + this.series.color + '" ><td>' + this.series.name + ': </td><td style="text-align: right"> <b>' + Highcharts.numberFormat(this.y, 2, '.', ',') + ' ' + buildTicker( pair ) + '</b></td></tr>';
                      }
                  },
                  data: volume,
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
