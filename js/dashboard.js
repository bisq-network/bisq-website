/*****************************************
DO NOT change anything in this section unless you know what you are doing. The DAO dashboard generation script in .dao/ relies on the variables in this section being on specific lines. Moving anything in this section may break the script.
*****************************************/

var timeframeSeries = ["Oct '17", "Nov '17", "Dec '17", "Jan '18", "Feb '18", "Mar '18", "Apr '18", "May '18", "Jun '18", "Jul '18", "Aug '18", "Sep '18", "Oct '18", "Nov '18", "Dec '18", "Jan '19", "Feb '19", "Mar '19", "Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4", "Cycle 5", "Cycle 6", "Cycle 7", "Cycle 8", "Cycle 9", "Cycle 10", "Cycle 11", "Cycle 12", "Cycle 13", "Cycle 14", "Cycle 15", "Cycle 16", "Cycle 17", "Cycle 18", "Cycle 19", "Cycle 20", "Cycle 21", "Cycle 22", "Cycle 23", "Cycle 24", "Cycle 25", "Cycle 26", "Cycle 27", "Cycle 28"];
var supplySeries = [2548500, 2620250, 2671850, 2722950, 2769150, 2806330, 2830832, 2868164, 2889799, 2934231, 2971823, 3018665, 3052400, 3272927, 3344765, 3406635, 3520705, 3657480, 3725401, 3745416, 3754644, 3741533, 3787332, 3853479, 3911674, 3983249, 3947199, 3976439, 4011891, 4031419, 3999914, 4111364, 4209085, 4212558, 4307371, 4293056, 4314461, 4226632, 4499355, 4465470, 4411268, 4426299, 4349993, 4372374, 4318977, 4332826];

/****************************************/

$( document ).ready( function() {

    //bsq supply chart
    var bsqChart = Highcharts.chart( "bsq-container", {
        lang: {
            thousandsSep: ",",
            decimalPoint: "."
        },
        chart: {
            type: "line",
            spacing: [25,20,20,30],
            style: {
                fontFamily: "'IBM Plex Sans', sans-serif"
            }
        },
        title: {
            text: "",
            align: "left",
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
            lineColor: "transparent"
        },
        yAxis: [{
            title: {
                text: "",

            },
            labels: {
                formatter: function () {
                    return this.value / 1000000 + "M";
                }
            },
            gridLineColor: "transparent",
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
            name: "BSQ",
            color: "#25B135",
            tooltip: {
                pointFormat: "{point.y:,.0f} BSQ<br>"
            },
            data: supplySeries
        }],
        legend: {
            enabled: false
        }
    });

});
