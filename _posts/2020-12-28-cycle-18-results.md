---
layout: post
title: "Bisq DAO Cycle 18: Results"
author: m52go
excerpt: "Cycle 18 of the Bisq DAO ended at block 655,986 on 08 November 2020. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 18 of the Bisq DAO.

### Summary

* Cycle took place between blocks 651,307 and 655,986
  * Calendar dates: 04 October 2020 - 08 November 2020
* 32 proposals
  * 5 reimbursement requests
  * 2 parameter change requests ([trading fee update](https://bisq.wiki/Update_BSQ_trading_fees){:target="_blank"})
  * 2 generic proposals
  * 23 compensation requests
* 243 votes cast
* 56,159.73 BSQ issued for compensation (105,725.58 BSQ was issued in total, of which 27,934.70 was for reimbursing [an arbitrator](https://bisq.wiki/Arbitrator) and 21,631.15 was for user-initiated reimbursements)
* 8,040.37 BSQ was burned through fees (120,040.37 BSQ was burned in total, of which 112,000 was from proof-of-burn transactions that consisted of BTC trading fees and deposits from arbitrated trades)

Please note that proof-of-burn transactions and arbitrator reimbursements do not map neatly to DAO cycles, meaning that some of the funds involved with these issuances (and burns) are from previous cycles.

Compensation by function:

**Dev**|**Growth**|**Ops**|**Support**|**Admin**|**Total BSQ**
-----|-----|-----|-----|-----|-----
39,822|4,262|5,409|9,900|367|60,864

See more details by browsing the [compensation requests on GitHub](https://github.com/bisq-network/compensation/milestone/9?closed=1).

### Proposal Details

**Determining fair BSQ rates for issuance**

Generic proposal ([link](https://bisq.network/dao-proposals/270){:target="_blank"})

_Accepted_

Since the BSQ issuance rate was unpegged from the US dollar [back in Cycle 6](https://github.com/bisq-network/proposals/issues/114){:target="blank"}, the simple volume-weighted 90-day average BSQ-USD rate has been used to determine the rate for DAO issuance requests (compensation and reimbursements).

Lately there have been a number of outlier BSQ trades that made the simple average impractical to use and generally vulnerable to manipulation.

This proposal establishes a new method for determining the BSQ-USD rate. Instead of using a simple average, the compensation maintainer makes a proposal with a rate he thinks is better by removing outliers. If the rate is generally accepted by stakeholders, it takes effect for all requests in the next cycle. If not, multiple rate proposals can be submitted for DAO voting, and the rate that garners the most voting weight wins and takes effect in the next cycle.

**BSQ-USD rate for Cycle 19**

Generic proposal ([link](https://bisq.network/dao-proposals/271){:target="_blank"})

_Accepted_

This proposal is the first implementation of the BSQ rate proposal above. It was accepted, setting the BSQ-USD rate for Cycle 19 to $0.67.

As outlined above, BSQ rate proposals won't generally be put up for voting in the DAO unless the proposal made by the compensation maintainer is contentious, but since this was the first such proposal for this new process, it was considered prudent to put it to vote in the DAO for additional awareness and legitimacy.
