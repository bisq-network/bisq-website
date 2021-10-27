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
    
with open( '../_includes/dao_dashboard_tiles.html', 'w' ) as f:
    f.write( '' )

overviewObj = json.loads(overview)

for cycle in range( len( overviewObj ), 0, -1 ):
    tile = '<div class="cycle-tile" onclick="location.href=\'cycle-' + str(cycle) + '\';">'
    tile = tile + '<h4>Cycle ' + str(cycle) + '</h4>'
    tile = tile + '<p class="start-date"><i class="fa fa-clock-o" aria-hidden="true"></i>Started on ' + str( datetime.datetime.fromtimestamp( overviewObj[str(cycle)]['startTime'] ).day ) + ' ' + calendar.month_abbr[ datetime.datetime.fromtimestamp( overviewObj[str(cycle)]['startTime'] ).month ] + ' ' + str( datetime.datetime.fromtimestamp( overviewObj[str(cycle)]['startTime'] ).year ) + '</p>'
    tile = tile + '<p class="number-proposals"><i class="fa fa-lightbulb-o" aria-hidden="true"></i>' + str( overviewObj[str(cycle)]['numberProposals'] ) + ' proposals</p>'
    tile = tile + '<p class="issuance-burn"><i class="fa fa-area-chart" aria-hidden="true"></i>' + str( '{:,.0f}'.format( overviewObj[str(cycle)]['burn'] ) ) + ' burned' + ' / ' + str( '{:,.0f}'.format( overviewObj[str(cycle)]['issuance'] ) ) + ' issued</p>'
    tile = tile + '</div>\n\n'
    with open( '../_includes/dao_dashboard_tiles.html', 'a' ) as f:
        f.write( tile )
