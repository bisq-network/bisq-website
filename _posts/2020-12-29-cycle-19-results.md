---
layout: post
title: "Bisq DAO Cycle 19: Results"
author: m52go
excerpt: "Cycle 19 of the Bisq DAO ended at block 660,666 on 09 December 2020. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 19 of the Bisq DAO.

### Summary

* Cycle took place between blocks 655,987 and 660,666
  * Calendar dates: 08 November 2020 - 09 December 2020
* 28 proposals
  * 2 reimbursement requests
  * 3 parameter change requests (2 for the routine [trading fee update](https://bisq.wiki/Update_BSQ_trading_fees){:target="_blank"}; other one is explained below)
  * 23 compensation requests
* 195 votes cast
* 77,826.87 BSQ issued for compensation (99,043.51 BSQ was issued in total, of which 19,629.90 was for reimbursing [an arbitrator](https://bisq.wiki/Arbitrator) and 1,586.74 was for user-initiated reimbursements)
* 11,637.83 BSQ was burned through fees (77,637.83 BSQ was burned in total, of which 66,000 was from proof-of-burn transactions that consisted of BTC trading fees and deposits from arbitrated trades)

Please note that proof-of-burn transactions and arbitrator reimbursements do not map neatly to DAO cycles, meaning that some of the funds involved with these issuances (and burns) are from previous cycles.

Compensation by function:

**Dev**|**Growth**|**Ops**|**Support**|**Admin**|**Total BSQ**
-----|-----|-----|-----|-----|-----
54,835|4,633|8,439|10,223|335|78,468

See more details by browsing the [compensation requests on GitHub](https://github.com/bisq-network/compensation/milestone/10?closed=1).

### Proposal Details

**Change BTC donation address**

Parameter change proposal ([link](https://bisq.network/dao-proposals/285){:target="_blank"})

_Accepted_

With the approval of this proposal and [the release of 1.5.0](https://github.com/bisq-network/bisq/commit/34e79de7b370e1df8f83f9d54405f0787c3fd068), payouts from [delayed payout transactions](https://bisq.wiki/Arbitration#Time-Locked_Payout_Transaction) and BTC trade fees are now sent to different addresses. This improves accounting by making it much easier to distinguish between BTC fees and funds from disputed trades.

As of this writing, delayed payouts go to `34VLFgtFKAtwTdZ5rengTT2g2zC99sWQLC` and BTC fees go to `38bZBj5peYS3Husdz7AH3gEUiUbYRD951t`.
