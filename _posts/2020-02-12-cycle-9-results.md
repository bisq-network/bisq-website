---
layout: post
title: "Bisq DAO Cycle 9: Results"
author: Steve Jain
excerpt: "Cycle 9 of the Bisq DAO ended at block 613,866 on January 21 2020. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 9 of the Bisq DAO.

As mentioned in [the Cycle 8's results post]({% post_url 2020-01-16-cycle-8-results %}), it was becaming increasingly clear that Bisq would need to change the way it runs itself in order to scale. These changes have been put in place over the past several weeks in the form of a reorganization with teams, goals, and budgets.

Please see [this post]({% post_url 2020-02-10-q1-2020-update %}) for details.

### Summary

* Cycle took place between blocks 609,187 and 613,866
  * Calendar dates: 12/21/2019 - 01/21/2020
* 43 proposals
  * 4 generic proposals
  * 1 parameter change
  * 15 proposals to delist an asset
  * 23 compensation requests
* 560 votes cast
* 57,845 BSQ issued for compensation (106,536 BSQ was issued in total, of which 48,691 was for reimbursing the refund agent)
* 86,519 BSQ burned from trading fees (142,585 BSQ was burned in total, of which 48,691 was disputed BTC funds)

In a nice reversal from recent cycles, the Bisq DAO was deflationary in Cycle 9: more BSQ was burned than issued. While this was certainly a nice result, some of this deflation occurred from less compensation issuance (relatively less work delivered than in previous cycles) as well as a relatively large proportion of trading fees being paid in BTC. BTC fees are not preferable as they require a single person to collect them and inject them into the BSQ economy, so perhaps the project should think of ways to encourage traders to use BSQ instead of BTC.

Regardless of how trading fees were paid, it was good to see the project have a strong financial result in Cycle 9. We hope the new organizational changes being made in Cycle 10 will lead to continued success in upcoming cycles.

### Proposal Details

**List Liquid BTC**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/169){:target="_blank"})_

_Accepted_

Liquid is a federated sidechain pegged to the Bitcoin blockchain, and Liquid BTC (L-BTC) is one of the assets issued on Liquid. Being able to trade BTC for L-BTC on Bisq enables any Bisq user to essentially mix their coins with those held by Liquid federation members—quickly, privately, and without price risk.

A common tactic to lose the lineage of one's bitcoin is to buy and sell BTC for XMR, but this involves significant price risk, since prices of both coins can change quickly.

**Require DAO vote and application fee to add new assets**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/159){:target="_blank"})_

_Rejected_

This proposal was made as part of the discussions at the time to determine firmer asset listing guidelines. The idea was to require a non-refundable fee and DAO vote in order to list new assets on Bisq, thereby reducing the endless flow of new asset listing requests that almost never return any value to the network.

Uncertainty over the effectiveness of DAO voting as a decision-making tool for listing new assets, as well as concerns over the efficacy of a listing fee (would requiring a higher fee result in even scammier projects with bigger financial backing?) led to this proposal's rejection.

_In addition to this generic proposal were 15 other proposals to delist 15 assets. All were rejected. When a proposal to delist an asset is accepted by the DAO, it can never be listed on Bisq again._

**Use bonded reputation as measure of trust for offers**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/138){:target="_blank"})_

_Rejected_

Trust for fiat trades on Bisq is strong but not bullet-proof. Account signing helps mitigate potential issues, and dispute resolution measures help once issues have already taken place, but more can be done.

Locking a BSQ bond as a measure of trust for a trader's offers sounds excellent, particularly given that the means to do this are largely already implemented in the software, but the idea is flawed since a rogue trader could easily lock up a bond of x BSQ and then make offers worth 10x BSQ, rendering the bond misleading.

**Increase BSQ maximum issuance parameter**

_Proposal to change a parameter ([link](https://github.com/bisq-network/proposals/issues/160){:target="_blank"})_

_Accepted_

A couple cycles of a lower BSQ price with relatively higher amounts of delivered work led to issuances that were approaching the 200,000 BSQ limit. This proposal changed the maximum BSQ issuance to 300,000 BSQ. It was critical that this parameter was changed, because in the event the limit was hit, all compensation requests would be denied.

It is important to note that this parameter was not originally put in place to curb inflation—rather, it was meant as a security measure to limit damage in case of an extreme scenario.

**Put asset listing on hold until further notice**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/166){:target="_blank"})_

_Accepted_

Policy for listing new assets is a recurring issue that remains unsolved. To prevent further controversy until better policy is determined, all asset listings have been put on hold, except for those that have overwhelming community support and developer backing.
