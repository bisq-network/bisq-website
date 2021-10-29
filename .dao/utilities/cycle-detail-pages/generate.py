import sys
import os
import json
import datetime
import calendar
import math

overviewFilePath = 'data/cycle-overview-data.json'
overviewPathError = 'Error finding cycle overview file.'

burnFilePath = 'data/dao-burn-cycle.json'
burnPathError = 'Error finding cycle burn file.'

settingsFilePath = 'settings.json'
pathError = 'Error finding DAO tx files...did you put the right path in ' + settingsFilePath + '? You must specify the full path.'

### get overview data

try:
    with open( overviewFilePath, 'r' ) as overviewFile:
        overview = overviewFile.read()
except:
    print( overviewPathError )
    sys.exit()

overviewObj = json.loads(overview)

### make dao burn terms easier to understand

def getFriendlyTxType( txType ):

    if( txType == 'PROOF_OF_BURN' ):
        return "Proof-of-burn¹"
    elif( txType == 'PAY_TRADE_FEE' ):
        return "Trading fees²"
    elif( txType == 'ASSET_LISTING_FEE' ):
        return "Asset listing fees"
    elif( txType == 'COMPENSATION_REQUEST' ):
        return "Compensation request fees"
    elif( txType == 'BLIND_VOTE' ):
        return "Blind vote fees"
    elif( txType == 'PROPOSAL' ):
        return "Proposal fees"
    elif( txType == 'UNLOCK' ):
        return "Bond unlock fees"
    elif( txType == 'LOCKUP' ):
        return "Bond lock-up fees"
    elif( txType == 'VOTE_REVEAL' ):
        return "Vote reveal fees"
    elif( txType == 'REIMBURSEMENT_REQUEST' ):
        return "Reimbursement request fees"
    elif( txType == 'TRANSFER_BSQ' ):
        return "BSQ transfer fees"
    elif( txType == 'GENESIS' ):
        return "Genesis"
    elif( txType == 'INVALID' ):
        return "Invalid"
    elif( txType == 'UNVERIFIED' ):
        return "Unverified"
    else:
        return "Irregular"
    
### get burn data and order it by total fees earned

try:
    with open( burnFilePath, 'r' ) as burnFile:
        burnData = burnFile.read()
except:
    print( burnPathError )
    sys.exit()

burnDataObj = json.loads(burnData)

cleanedOrderedDaoBurns = {}
orderedLocation = 0;
roundedBurn = 0
for cycle in burnDataObj:
    cleanedOrderedDaoBurns[cycle] = { 'txTypes': [], 'txCounts': [], 'txFees': [] }
    for txType in burnDataObj[cycle]:
        roundedBurn = math.floor( burnDataObj[cycle][txType]['feeSum'] )
        cleanedOrderedDaoBurns[cycle]['txFees'].append( roundedBurn )
        cleanedOrderedDaoBurns[cycle]['txFees'].sort(reverse=True)
        orderedLocation = cleanedOrderedDaoBurns[cycle]['txFees'].index( roundedBurn )
        cleanedOrderedDaoBurns[cycle]['txTypes'].insert( orderedLocation, txType )
        cleanedOrderedDaoBurns[cycle]['txCounts'].insert( orderedLocation, burnDataObj[cycle][txType]['count'] )   
        
### get issuance details from dao results file

try:
    with open( settingsFilePath, 'r' ) as settingsFile:
        settings = settingsFile.read()
except:
    print( pathError )
    sys.exit()

settingsObj = json.loads(settings)
voteResultsPath = settingsObj['daoVoteResultsFile']
        
### loop through cycles and write front matter   

i = 0
for c in overviewObj:
    i = i + 1
    
    # stylize the bsq supply change
    
    bsqSupplyChange = overviewObj[str(i)]['issuance'] - overviewObj[str(i)]['burn']
    if( bsqSupplyChange <= 0 ):
        bsqSupplyChange = '— ' + str( '{:,.0f}'.format( bsqSupplyChange ) )[1:]
    else:
        bsqSupplyChange = '+ ' + str( '{:,.0f}'.format( bsqSupplyChange ) )
        
    # write cycle page front matter        

    with open( '../_dashboard/cycle-' + str(i) + '.md', 'w' ) as f:
        f.write( '---\n' )
        f.write( 'layout: dashboard\n' )
        f.write( 'cycleNumber: ' + str(i) + '\n' )
        f.write( 'title: Bisq DAO Cycle ' + str(i) + '\n' )
        f.write( 'lang: en\n' )
        f.write( 'calendarStartDate: ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).day ) + ' ' + calendar.month_abbr[ datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).month ] + ' ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['startTime'] ).year ) + '\n' )
        f.write( 'calendarEndDate: ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).day ) + ' ' + calendar.month_abbr[ datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).month ] + ' ' + str( datetime.datetime.fromtimestamp( overviewObj[str(i)]['endTime'] ).year ) + '\n' )
        f.write( 'blockStartDate: ' + str( overviewObj[str(i)]['startBlock'] ) + '\n' )
        f.write( 'blockEndDate: ' + str( overviewObj[str(i)]['endBlock'] ) + '\n' )
        f.write( 'supplyChange: "' + bsqSupplyChange + '"\n' )
        f.write( 'numberAcceptedProposals: ' + str( overviewObj[str(i)]['numberProposalsAccepted'] ) + '\n' )
        f.write( 'numberRejectedProposals: ' + str( overviewObj[str(i)]['numberProposals'] ) + '\n' )
        f.write( 'bsqBurnedDetail:\n' )
        j = 0
        for txType in cleanedOrderedDaoBurns[str(i)]['txTypes']:
            if( txType == 'TOTAL' ):
                j = j + 1
                continue
            else:
                if( cleanedOrderedDaoBurns[str(i)]['txFees'][j] > 0 ):
                    f.write( ' - txType: ' + txType + '\n' )
                    f.write( '   txTypeFriendly: ' + str( getFriendlyTxType( txType ) ) + '\n' )
                    f.write( '   txSum: "' + str( '{:,.0f}'.format( cleanedOrderedDaoBurns[str(i)]['txFees'][j] ) ) + '"\n' )
                    f.write( '   txNumber: "' + str( '{:,.0f}'.format( cleanedOrderedDaoBurns[str(i)]['txCounts'][j] ) ) + '"\n' )
                j = j + 1
        f.write( 'totalBurnAmount: "' + str( '{:,.0f}'.format( cleanedOrderedDaoBurns[str(i)]['txFees'][0] ) + '"\n' ) )
        f.write( 'totalBurnTx: "' + str( '{:,.0f}'.format( cleanedOrderedDaoBurns[str(i)]['txCounts'][0] ) + '"\n' ) )
        
        # collect proposal details

        compensationTotal = 0
        reimbursementTotal = 0
        governanceTotal = 0
        with open( voteResultsPath, 'r' ) as results:
        
            resultsDict = json.loads( results.read() )
            
            f.write( 'compensationDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( ( p['proposal.proposalType'] == 'COMPENSATION_REQUEST' ) and ( p['isAccepted'] == 'Accepted' ) ):
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   requestedBSQ: "' + str( '{:,.0f}'.format( p['proposal.requestedBsq'] / 100 ) ) + '"\n' )
                    compensationTotal = compensationTotal + p['proposal.requestedBsq'] / 100

            f.write( 'reimbursementDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( ( p['proposal.proposalType'] == 'REIMBURSEMENT_REQUEST' ) and ( p['isAccepted'] == 'Accepted' ) ):
                    f.write( ' - proposalType: ' + p['proposal.proposalType'].strip() + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'] + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   requestedBSQ: "' + str( '{:,.0f}'.format( p['proposal.requestedBsq'] / 100 ) ) + '"\n' )
                    reimbursementTotal = reimbursementTotal + p['proposal.requestedBsq'] / 100

            f.write( 'paramChangeDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( p['proposal.proposalType'] == 'CHANGE_PARAM' ):
                    governanceTotal = governanceTotal + 1
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   proposalParam: ' + p['proposal.param'] + '\n' )
                    f.write( '   isAccepted: ' + ( str(1) if ( p['isAccepted'] == 'Accepted' ) else str(0) ) + '\n' )
             
            f.write( 'genericProposalDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( p['proposal.proposalType'] == 'GENERIC' ):
                    governanceTotal = governanceTotal + 1
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   isAccepted: ' + ( str(1) if ( p['isAccepted'] == 'Accepted' ) else str(0) ) + '\n' )
                    
            f.write( 'bondedRoleDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( p['proposal.proposalType'] == 'BONDED_ROLE' ):
                    governanceTotal = governanceTotal + 1
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   proposedRole: ' + p['proposal.bondedRoleType'] + '\n' )
                    f.write( '   isAccepted: ' + ( str(1) if ( p['isAccepted'] == 'Accepted' ) else str(0) ) + '\n' )

            f.write( 'removeAssetDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( p['proposal.proposalType'] == 'REMOVE_ASSET' ):
                    governanceTotal = governanceTotal + 1
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   asset: ' + p['proposal.tickerSymbol'] + '\n' )
                    f.write( '   isAccepted: ' + ( str(1) if ( p['isAccepted'] == 'Accepted' ) else str(0) ) + '\n' )
                    
            # CONFISCATE_BOND proposal type should be revisited if/when it actually happens
            f.write( 'confiscateBondDetails: \n' )
            for p in resultsDict[i-1]['proposals']:
                if( p['proposal.proposalType'] == 'CONFISCATE_BOND' ):
                    governanceTotal = governanceTotal + 1
                    f.write( ' - proposalType: ' + p['proposal.proposalType'] + '\n' )
                    f.write( '   proposalTxid: ' + p['proposal.txId'] + '\n' )
                    f.write( '   nameOnProposal: "' + p['proposal.name'].strip() + '"\n' )
                    f.write( '   proposalLink: "' + p['proposal.link'] + '"\n' )
                    f.write( '   isAccepted: ' + ( str(1) if ( p['isAccepted'] == 'Accepted' ) else str(0) ) + '\n' )

            # disregarding 'UNDEFINED' proposal type
                
        f.write( 'compensationTotal: "' + str( '{:,.0f}'.format( compensationTotal ) ) + '"\n' )
        f.write( 'reimbursementTotal: "' + str( '{:,.0f}'.format( reimbursementTotal ) ) + '"\n' )
        f.write( 'numberGovernanceProposals: ' + str( governanceTotal ) + '\n' )
        f.write( 'totalIssuance: "' + str( '{:,.0f}'.format( compensationTotal + reimbursementTotal ) ) + '"\n' )
        
        f.write( '---\n' )
