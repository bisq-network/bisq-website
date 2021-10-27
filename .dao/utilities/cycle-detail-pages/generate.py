import sys
import os
import json
import datetime
import calendar
import math

overviewFilePath = 'data/cycle-overview-data.json'
pathError = 'Error finding cycle overview file.'

### get overview data

try:
    with open( overviewFilePath, 'r' ) as overviewFile:
        overview = overviewFile.read()
except:
    print( pathError )
    sys.exit()

overviewObj = json.loads(overview)

i = 0
for c in overviewObj:
    i = i + 1
    
    # stylize the bsq supply change
    bsqSupplyChange = overviewObj[str(i)]['burn'] - overviewObj[str(i)]['issuance']
    if( bsqSupplyChange <= 0 ):
        bsqSupplyChange = '— ' + str( '{:,.0f}'.format( bsqSupplyChange ) )[1:]
    else:
        bsqSupplyChange = '+ ' + str( '{:,.0f}'.format( bsqSupplyChange ) )
        
    with open( '../_dashboard/cycle-' + str(i) + '.md', 'w' ) as f:
        f.write( '---\n' )
        f.write( 'layout: dashboard\n' )
        f.write( 'title: Bisq DAO Cycle ' + str(i) + '\n' )
        f.write( 'lang: en\n' )
        f.write( 'calendarStartDate: ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).day ) + ' ' + calendar.month_abbr[ datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).month ] + ' ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).year ) + '\n' )
        f.write( 'calendarEndDate: ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).day ) + ' ' + calendar.month_abbr[ datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).month ] + ' ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).year ) + '\n' )
        f.write( 'blockStartDate: ' + str( overviewObj[str(i)]['startBlock'] ) + '\n' )
        f.write( 'blockEndDate: ' + str( overviewObj[str(i)]['endBlock'] ) + '\n' )
        f.write( 'supplyChange: "' + bsqSupplyChange + '"\n' )
        f.write( 'numberAcceptedProposals: ' + str( overviewObj[str(i)]['numberProposalsAccepted'] ) + '\n' )
        f.write( 'numberRejectedProposals: ' + str( overviewObj[str(i)]['numberProposals'] ) + '\n' )
        f.write( '---\n' )
