---
layout: post
title: "Bisq DAO Cycle 21: Results"
author: m52go
excerpt: "Cycle 21 of the Bisq DAO ended at block 670,026 on 10 February 2021. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 21 of the Bisq DAO.

### Summary

* Cycle took place between blocks 665,347 and 670,026
  * Calendar dates: 09 January 2020 - 10 February 2020
* 32 proposals
  * 6 reimbursement requests
  * 3 parameter change requests (2 for the routine [trading fee update](https://bisq.wiki/Update_BSQ_trading_fees){:target="_blank"}; other one is explained below)
  * 23 compensation requests
* 281 votes cast
* 81,096.64 BSQ issued for compensation (282,197.20 BSQ was issued in total, of which 81,609.04 was for reimbursing [arbitrators](https://bisq.wiki/Arbitrator) and 119,491.52 was for user-initiated reimbursements)
* 9,381.22 BSQ was burned through fees (9,473.22 BSQ was burned in total; there were no proof-of-burn transactions in this period)

**Issuance was unusually high in this cycle because there was 0 issuance in the last cycle.** Results of the last cycle [were invalidated]({% post_url 2021-01-20-cycle-20-results %}) because of an issue with ballot propogation.

Compensation by function:

**Dev**|**Growth**|**Ops**|**Support**|**Admin**|**Total BSQ**
-----|-----|-----|-----|-----|-----
46,106.67|10,491.55|6,466.67|16,990.67|566.33|80,622.67

See more details by browsing the [compensation requests on GitHub](https://github.com/bisq-network/compensation/milestone/12?closed=1).

### Proposal Details

**Increase maximum BSQ issuance**

Parameter change proposal ([link](https://bisq.network/dao-proposals/302){:target="_blank"})

_Accepted_

The maximum BSQ issuance parameter is meant to be a safety measure. It was set to 300,000 and the approval of this proposal increased it to 400,000.

Reasoning: the invalidation of Cycle 20 results led to a need for more issuance in Cycle 21. A handful of contributors also avoided making compensation requests to avoid hitting the issuance limit again. While another invalidated cycle isn't expected, it would be good to have the capability to handle extra issuance capacity if/when needed. Needing to accommodate more reimbursement requests than usual is another potential use case for the increased issuance limit.

Aside from these use cases, the Bisq DAO has proven itself to be robust enough over the past 20 cycles (almost 2 years) to justify increasing the limit.
