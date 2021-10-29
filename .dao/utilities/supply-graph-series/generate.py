import json
import math

### the 2 axes for the bsq supply graph, with pre-dao data hardcoded

timePeriods = ["Oct '17", "Nov '17", "Dec '17", "Jan '18", "Feb '18", "Mar '18", "Apr '18", "May '18", "Jun '18", "Jul '18", "Aug '18", "Sep '18", "Oct '18", "Nov '18", "Dec '18", "Jan '19", "Feb '19", "Mar '19"]

bsqSupply = [2548500, 2620250, 2671850, 2722950, 2769150, 2806330, 2830832, 2868164, 2889799, 2934231, 2971823, 3018665, 3052400, 3272927, 3344765, 3406635, 3520705, 3657480]

overviewFilePath = 'data/cycle-overview-data.json'

### get cycle data from overview file

with open( overviewFilePath, 'r' ) as overview:
    overviewData = overview.read()

overViewDataObj = json.loads(overviewData)

## time periods

i = 0
for cycle in overViewDataObj:
    i = i + 1
    timePeriods.append( "Cycle " + str(i) )

## bsq supply

i = 0
for cycle in overViewDataObj:
    i = i + 1
    bsqSupply.append( math.floor( bsqSupply[-1] + overViewDataObj[str(i)]['issuance'] - overViewDataObj[str(i)]['burn'] ) )

## create javascript variables for highcharts.js

with open( 'data/highcharts-vars.txt', 'w' ) as f:
    f.write( 'var timeframeSeries = ' )
    json.dump( timePeriods, f )
    f.write( ';\n' )
    f.write( 'var supplySeries = ' )
    json.dump( bsqSupply, f )
    f.write( ';\n' )
