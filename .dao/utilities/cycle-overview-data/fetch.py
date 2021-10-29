import json
import time
import math

cycleOverviewData = {}

timeNow = math.floor( time.time() )

daoCycleBurnDataFilePath = 'data/dao-burn-cycle.json'
settingsFilePath = 'settings.json'

### return cycle start and end blocks from cycle number

def getCycleBlocks( cycle ):

    cycleStart = 571747 - 1 # first block was 571747, but first cycle was 1 block off
    cycleLength = 4680

    i = 1
    while( i < cycle ):
        i += 1
        cycleStart = cycleStart + cycleLength

    cycleEnd = cycleStart + cycleLength

    return { 'start': cycleStart+1, 'end': cycleEnd }

### get settings

with open( settingsFilePath, 'r' ) as settingsFile:
    settings = settingsFile.read()

settingsObj = json.loads(settings)
daoResultsPath = settingsObj['daoVoteResultsFile']

### get dao burn data

with open( daoCycleBurnDataFilePath, 'r' ) as daoBurnFile:
    daoBurnData = daoBurnFile.read()

daoBurnDataObj = json.loads(daoBurnData)

### put all data together

with open( daoResultsPath, 'r' ) as daoResults:

    daoResultsDict = json.loads( daoResults.read() )

    # assume cycle that started more than 40 days ago has completed
    i = 0
    for cycle in daoResultsDict:
        i = i + 1
        acceptedProposals = 0
        rejectedProposals = 0
        for p in cycle['proposals']:
            if( p['isAccepted'] == "Accepted" ):
                acceptedProposals = acceptedProposals + 1
            else:
                rejectedProposals = rejectedProposals + 1
        if( ( timeNow - ( cycle['startTime'] / 1000 ) > 3456000 ) ):
            cycleOverviewData[ str(cycle['cycleIndex']) ] = {}
            cycleOverviewData[ str(cycle['cycleIndex']) ]['startTime'] = math.floor( cycle['startTime'] / 1000 )
            cycleOverviewData[ str(cycle['cycleIndex']) ]['endTime'] = math.floor( ( ( daoResultsDict[ i ]['startTime'] ) / 1000 ) ) - 1
            cycleOverviewData[ str(cycle['cycleIndex']) ]['startBlock'] = getCycleBlocks(i)['start']
            cycleOverviewData[ str(cycle['cycleIndex']) ]['endBlock'] = getCycleBlocks(i)['end']
            cycleOverviewData[ str(cycle['cycleIndex']) ]['issuance'] = float( cycle['issuance'].split(" ")[0] )
            cycleOverviewData[ str(cycle['cycleIndex']) ]['burn'] = daoBurnDataObj[ str(cycle['cycleIndex']) ]['TOTAL']['feeSum']
            cycleOverviewData[ str(cycle['cycleIndex']) ]['numberProposals'] = cycle['numberOfProposals']
            cycleOverviewData[ str(cycle['cycleIndex']) ]['numberProposalsAccepted'] = acceptedProposals
            cycleOverviewData[ str(cycle['cycleIndex']) ]['numberProposalsRejected'] = rejectedProposals

with open( 'data/cycle-overview-data.json', 'w' ) as f:
    f.write( json.dumps( cycleOverviewData, indent=4 ) )
