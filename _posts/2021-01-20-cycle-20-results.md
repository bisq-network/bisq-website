---
layout: post
title: "Bisq DAO Cycle 20: Results"
author: m52go
excerpt: "Cycle 20 of the Bisq DAO ended at block 665,346 on 09 January 2021. Results for this cycle were invalidated because of network irregularities. <br><br>"
lang: en
---

Results of Cycle 20 of the Bisq DAO were invalidated because voting nodes could not establish the required 80% supermajority consensus on the prevailing data view, ostensibly because of Tor issues that surfaced in the last few blocks of the cycle.

### Summary

* Cycle took place between blocks 660,667 and 665,346
  * Calendar dates: 09 December 2020 - 09 January 2021
* 22 proposals
  * 3 reimbursement requests
  * 2 parameter change requests ([trading fees](https://bisq.wiki/Update_BSQ_trading_fees){:target="_blank"})
  * 17 compensation requests

All proposals failed to be approved or rejected. No BSQ was issued.

Stakeholders will make new proposals in Cycle 21 for both Cycle 20 and Cycle 21. The BSQ rate will be 0.75, which is halfway between the rates originally approved for Cycle 20 and Cycle 21 ([see discussion](https://github.com/bisq-network/compensation/issues/755#issuecomment-760297872)).

### Details

In the vote reveal phase (which lasts 450 blocks), each Bisq node publishes a Bitcoin transaction that includes a hash of an ordered list of all voting data objects it received during the blind vote phase. This is done to establish a prevailing view of voting data—since the network is eventually consistent, each node cannot be trusted to have the exact same set of data, so each node must compare the set of data it received with the set of data every other node received.

Voting weight is the metric used to resolve differences. Recall that each ballot submitted during the blind voting phase has a BSQ stake attached to it—this same voting stake is used to weight voting data views in the vote reveal phase. Nodes with a collective minimum of 80% of the cycle's voting stake must agree on 1 data view, otherwise, the whole voting cycle is invalidated.

[Tor network issues](https://lists.torproject.org/pipermail/network-health/2021-January/000659.html) caused instability on the Bisq network for several days starting toward the end of Cycle 20's vote reveal phase.

As a result, one or more large stakeholders seemed to miss some ballots, which caused the prevailing data view consensus to dip below 80%:

```
hashWithStakeList=[HashWithStake{
     hash=24d274370fc662dbcaeadef4276999783009119f,
     stake=54892002
}, HashWithStake{
     hash=291b83c2cdac9a29dd708c99c1e4f54f5cf0559d,
     stake=20000000
}, HashWithStake{
     hash=a5614e1e8af6b14e3d6a4e094410639e145b2ecd,
     stake=600000
}, HashWithStake{
     hash=3d61bf845e5834e7d191c6cf219e0905c54e8df8,
     stake=20000
}]
```

Observe the four `HashWithStake` items above. The first is the majority data view with a ~72% stake. The next three are minority stake views that are probably missing ballots. If data had propagated correctly to that second node (or group of nodes), the 80% threshold would have been cleared. But it didn't, so the cycle was invalidated.

It is important to note that [this outcome is by design and intentional](https://docs.bisq.network/dao-user-reference.html#determining-consensus). In addition to being a measure to handle network instability, the 80% threshold is meant to serve as a safegaurd against attackers—someone would need more than 80% of the stake in a cycle to unilaterally influence it.
