---
layout: post
title: "Bisq DAO Cycle 11: Results"
author: Steve Jain
excerpt: "Cycle 11 of the Bisq DAO ended at block 623,226 on March 27 2020. This post covers its results. <br><br>"
lang: en
en-only: true
---

This post summarizes the results of Cycle 11 of the Bisq DAO.

Cycle 11 was the first full DAO cycle under the [reorganization]({% post_url 2020-02-10-q1-2020-update %}) detailed earlier in his year.

Notably, this cycle set a new all-time record for trade fee payments using BSQ—not a bad outcome for the last DAO cycle before the DAO's 1-year anniversary. There were 3,372 BSQ fee payments in this cycle, compared to 2,804 in Cycle 10, and 2,805 in Cycle 3 (which was the last high).

### Summary

* Cycle took place between blocks 618,547 and 623,226
  * Calendar dates: 02/22/2020 - 03/27/2020
* 35 proposals
  * 10 bonded role proposals
  * 4 proposals to change parameters (trading fees)
  * 2 generic proposals
  * 19 compensation requests
* 242 votes cast
* 44,349 BSQ issued for compensation (127,049 BSQ was issued in total, of which 91,866 was for reimbursing [an arbitrator](https://bisq.wiki/Arbitrator))

Please note that the arbitrator's reimbursement was not only for Cycle 11. The last reimbursement request from the arbitrator was in Cycle 9 for 48,691 BSQ. Thus far, these have been the only 2 reimbursements issued to the arbitrator since the role was established with the v1.2 launch at the end of October 2019. This means in the ~5 months the arbitrator has been active, they have requested 140,557 BSQ.

Lowering this number is a top priority: in particular, squashing [critical bugs](https://github.com/orgs/bisq-network/projects/7) and determining other ways to reduce dispute cases altogether (e.g., determining why some traders become unresponsive).

### Proposal Details

**Reduce BTC and BSQ maker fees**

Parameter change proposals ([link](https://bisq.network/dao-proposals/181){:target="_blank"})

_Accepted_

BSQ and BTC fees were rebalanced in favor of makers, such that trading fees per 1 BTC are now 0.001/0.007 maker/taker for BTC and 5.75/40.25 maker/taker for BSQ.

The proposal also reduced the BSQ fee discount to 50% from 60%, and [another proposal](https://github.com/bisq-network/proposals/issues/202) is in progress to make maintaining this fee dynamic more systematic.

**Proposals for bonded roles**

_All were accepted_

* 3 Bitcoin node operators: [robkaandorp](https://github.com/bisq-network/proposals/issues/189){:target="_blank"}, [Emzy](https://github.com/bisq-network/proposals/issues/190){:target="_blank"}, [m52go](https://github.com/bisq-network/proposals/issues/197){:target="_blank"}

* 1 seednode operator: [devinbileck](https://github.com/bisq-network/proposals/issues/186){:target="_blank"}

* 3 pricenode operators: [mrosseel](https://github.com/bisq-network/proposals/issues/191){:target="_blank"}, [wiz](https://github.com/bisq-network/proposals/issues/195){:target="_blank"}, [devinbileck](https://github.com/bisq-network/proposals/issues/194){:target="_blank"}

* 2 mediators: [wiz](https://github.com/bisq-network/proposals/issues/184){:target="_blank"}, [Bisq-knight](https://github.com/bisq-network/proposals/issues/185){:target="_blank"}

* 1 Bisq maintainer: [sqrrm](https://github.com/bisq-network/proposals/issues/187){:target="_blank"}

Bonding is a [key element of DAO governance](https://docs.bisq.network/user-dao-intro.html#ensure-honesty-in-high-trust-roles). This role added over 100,000 BSQ in bond commitments, taking the total amount of bonded BSQ to a little over 400,000 BSQ.

**Promotion of 2 support interns to L1 support agents**

Generic proposals ([link](https://github.com/bisq-network/proposals/issues/183){:target="_blank"}) and ([link](https://github.com/bisq-network/proposals/issues/196){:target="_blank"})

_Both were accepted_

_huey735_ and _bayernatoor_ were both promoted to L1 support agents following successful [internships in Cycle 11](https://bisq.wiki/Support_Agent#Internship).
