import sys
import os
import json
import copy
import datetime

cycleResults = {}
monthlyResults = {}
dailyResults = {}

settingsFilePath = 'settings.json'
pathError = 'Error finding DAO tx files...did you put the right path in ' + settingsFilePath + '? You must specify the full path.'

resultTemplate = {
    'IRREGULAR': {
        'count': 0,
        'feeSum': 0
    },
    'UNVERIFIED': {
        'count': 0,
        'feeSum': 0
    },
    'INVALID': {
        'count': 0,
        'feeSum': 0
    },
    'GENESIS': {
        'count': 0,
        'feeSum': 0
    },
    'TRANSFER_BSQ': {
        'count': 0,
        'feeSum': 0
    },
    'PAY_TRADE_FEE': {
        'count': 0,
        'feeSum': 0
    },
    'PROPOSAL': {
        'count': 0,
        'feeSum': 0
    },
    'COMPENSATION_REQUEST': {
        'count': 0,
        'feeSum': 0
    },
    'REIMBURSEMENT_REQUEST': {
        'count': 0,
        'feeSum': 0
    },
    'BLIND_VOTE': {
        'count': 0,
        'feeSum': 0
    },
    'VOTE_REVEAL': {
        'count': 0,
        'feeSum': 0
    },
    'LOCKUP': {
        'count': 0,
        'feeSum': 0
    },
    'UNLOCK': {
        'count': 0,
        'feeSum': 0
    },
    'ASSET_LISTING_FEE': {
        'count': 0,
        'feeSum': 0
    },
    'PROOF_OF_BURN': {
        'count': 0,
        'feeSum': 0
    },
    'TOTAL': {
        'count': 0,
        'feeSum': 0
    }
}

### helper functions

def findCycle( height ):

    daoGenesisBlock = 571747 - 1 # first block was 571747, but first cycle was 1 block shorter
    cycleLength = 4680

    cycleEnd = daoGenesisBlock + cycleLength
    cycle = 1

    while( cycleEnd < height ):
        cycle += 1
        cycleEnd = daoGenesisBlock + ( cycleLength * cycle )

    return cycle

def getCalendarLabel( timestamp, needDay ):

    calendarLabel = ''

    month = datetime.datetime.fromtimestamp( timestamp ).month
    year = datetime.datetime.fromtimestamp( timestamp ).year
    day = datetime.datetime.fromtimestamp( timestamp ).day

    calendarLabel = str(year)
    calendarLabel += str(month) if month > 9 else '0' + str(month)

    if( needDay == True ):
        calendarLabel += str(day) if day > 9 else '0' + str(day)

    return calendarLabel

def writeJsonToCsv( timeType, destinationFile, dict ):

    timeKeys = list( dict.keys() )
    timeKeys.sort( reverse=True )

    with open( destinationFile, 'w' ) as f:

        txLabels = ''
        txKeys = list( dict[ timeKeys[0] ] )
        for txKey in txKeys:
            txLabels += ( txKey.lower() + '-count,' ) + ( txKey.lower() + '-fees,' )

        if timeType == 'alltime':
            pass
        elif timeType == 'cycle':
            f.write( 'cycle,' + txLabels[:-1] + '\n' )
        elif timeType == 'monthly':
            f.write( 'yearmonth,' + txLabels[:-1] + '\n' )
        elif timeType == 'daily':
            f.write( 'yearmonthday,' + txLabels[:-1] + '\n' )

        for date in timeKeys:
            csvData = ''
            for txType in txKeys:
                csvData += str( dict[ date ][ txType ][ 'count' ] ) + ',' + \
                str( dict[ date ][ txType ][ 'feeSum' ] ) + ','
            f.write( str(date) + ',' + csvData[:-1] + '\n' )

### get settings

try:
    with open( settingsFilePath, 'r' ) as settingsFile:
        settings = settingsFile.read()
except:
    print( pathError )
    sys.exit()

settingsObj = json.loads(settings)
daoTxPath = settingsObj['daoTxDirectory']

### iterate through dao transactions directory

allTimeResults = copy.deepcopy( resultTemplate )

for filename in os.listdir( daoTxPath ):

    with open( daoTxPath + filename, 'r' ) as daoTx:
        daoTxDict = json.loads( daoTx.read() )

    burntFee = daoTxDict[ 'burntFee' ] / 100

    # cycle results

    txCycle = findCycle( daoTxDict[ 'blockHeight' ] )

    if( txCycle not in cycleResults ):
        cycleResults[ txCycle ] = copy.deepcopy( resultTemplate )

    cycleResults[ txCycle ][ daoTxDict[ 'txType' ] ][ 'count' ] += 1
    cycleResults[ txCycle ][ daoTxDict[ 'txType' ] ][ 'feeSum' ] += burntFee

    cycleResults[ txCycle ][ 'TOTAL' ][ 'count' ] += 1
    cycleResults[ txCycle ][ 'TOTAL' ][ 'feeSum' ] += burntFee

    # monthly results

    calendarLabel = getCalendarLabel( daoTxDict[ 'time' ] / 1000, False )

    if( calendarLabel not in monthlyResults ):
        monthlyResults[ calendarLabel ] = copy.deepcopy( resultTemplate )

    monthlyResults[ calendarLabel ][ daoTxDict[ 'txType' ] ][ 'count' ] += 1
    monthlyResults[ calendarLabel ][ daoTxDict[ 'txType' ] ][ 'feeSum' ] += burntFee

    monthlyResults[ calendarLabel ][ 'TOTAL' ][ 'count' ] += 1
    monthlyResults[ calendarLabel ][ 'TOTAL' ][ 'feeSum' ] += burntFee

    # daily results

    calendarLabel = getCalendarLabel( daoTxDict[ 'time' ] / 1000, True )

    if( calendarLabel not in dailyResults ):
        dailyResults[ calendarLabel ] = copy.deepcopy( resultTemplate )

    dailyResults[ calendarLabel ][ daoTxDict[ 'txType' ] ][ 'count' ] += 1
    dailyResults[ calendarLabel ][ daoTxDict[ 'txType' ] ][ 'feeSum' ] += burntFee

    dailyResults[ calendarLabel ][ 'TOTAL' ][ 'count' ] += 1
    dailyResults[ calendarLabel ][ 'TOTAL' ][ 'feeSum' ] += burntFee

    # all-time results

    allTimeResults[ daoTxDict[ 'txType' ] ][ 'count' ] += 1
    allTimeResults[ daoTxDict[ 'txType' ] ][ 'feeSum' ] += burntFee

    allTimeResults[ 'TOTAL' ][ 'count' ] += 1
    allTimeResults[ 'TOTAL' ][ 'feeSum' ] += burntFee

### write results to files

with open( 'data/dao-burn-alltime.json', 'w' ) as f:
    f.write( json.dumps( allTimeResults, indent=4 ) )

with open( 'data/dao-burn-cycle.json', 'w' ) as f:
    f.write( json.dumps( cycleResults, indent=4 ) )

with open( 'data/dao-burn-monthly.json', 'w' ) as f:
    f.write( json.dumps( monthlyResults, indent=4 ) )

with open( 'data/dao-burn-daily.json', 'w' ) as f:
    f.write( json.dumps( dailyResults, indent=4 ) )
