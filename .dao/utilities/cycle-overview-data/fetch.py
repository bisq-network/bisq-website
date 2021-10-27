import sys
import os
import json
import copy
import datetime
import time
import math

cycleOverviewData = {}

timeNow = math.floor( time.time() )

daoCycleBurnDataFilePath = 'data/dao-burn-cycle.json'

settingsFilePath = 'settings.json'
pathError = 'Error finding DAO voting results file...did you put the right path in ' + settingsFilePath + '? You must specify the full path.'

### get settings

try:
    with open( settingsFilePath, 'r' ) as settingsFile:
        settings = settingsFile.read()
except:
    print( pathError )
    sys.exit()

settingsObj = json.loads(settings)
daoResultsPath = settingsObj['daoVoteResultsFile']

### get dao burn data

try:
    with open( daoCycleBurnDataFilePath, 'r' ) as daoBurnFile:
        daoBurnData = daoBurnFile.read()
except:
    print( 'Error reading file with DAO burn data.')
    sys.exit()

daoBurnDataObj = json.loads(daoBurnData)
    
### put all data together

with open( daoResultsPath, 'r' ) as daoResults:

        daoResultsDict = json.loads( daoResults.read() )
        
        # assume cycle that started more than 40 days ago has completed
        for cycle in daoResultsDict:
            if( ( timeNow - ( cycle['startTime'] / 1000 ) > 3456000 ) ):
                cycleOverviewData[ str(cycle['cycleIndex']) ] = {}
                cycleOverviewData[ str(cycle['cycleIndex']) ]['startTime'] = math.floor( cycle['startTime'] / 1000 )
                cycleOverviewData[ str(cycle['cycleIndex']) ]['issuance'] = float( cycle['issuance'].split(" ")[0] )
                cycleOverviewData[ str(cycle['cycleIndex']) ]['burn'] = daoBurnDataObj[ str(cycle['cycleIndex']) ]['TOTAL']['feeSum']
                cycleOverviewData[ str(cycle['cycleIndex']) ]['numberProposals'] = cycle['numberOfProposals']


with open( 'data/cycle-overview-data.json', 'w' ) as f:
    f.write( json.dumps( cycleOverviewData, indent=4 ) )
