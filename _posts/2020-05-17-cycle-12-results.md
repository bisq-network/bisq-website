---
layout: post
title: "Bisq DAO Cycle 12: Results"
author: m52go
excerpt: "Cycle 12 of the Bisq DAO ended at block 627,906 on April 27 2020. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 12 of the Bisq DAO.

### Summary

* Cycle took place between blocks 623,227 and 627,906
  * Calendar dates: 03/27/2020 - 04/27/2020
* 35 proposals
  * 3 bonded role proposals
  * 1 proposal to change a parameter
  * 1 generic proposal
  * 2 reimbursement proposals
  * 28 compensation requests
* 345 votes cast
* 62,317 BSQ issued for compensation (183,211 BSQ was issued in total, of which 120,418 was for reimbursing [an arbitrator](https://bisq.wiki/Arbitrator) and 476 was for a reimbursement)
* 10,135 BSQ was burned for trading fees (163,682 BSQ was burned in total, of which 153,400 was from proof-of-burn transactions that consisted of BTC trading fees and arbitrator reimbursements)

Please note that the proof-of-burn transactions and arbitrator reimbursements do not map neatly to DAO cycles, meaning that some of the funds involved with these issuances (and burns) are from previous cycles.

### Proposal Details

**Increase maximum reimbursement request amount**

Parameter change proposal ([link](https://bisq.network/dao-proposals/203){:target="_blank"})

_Accepted_

Before Cycle 12, the upper limit for a compensation request was 100,000 BSQ while the upper limit for a reimbursement request was only 10,000 BSQ. As a result, because the arbitrator's reimbursement requests would often be rather large, they had to make compensation requests instead of reimbursement requests.

The parameter change in this cycle increased the maximum reimbursement amount from 10,000 to 20,000. The goal is to increase this parameter to 100,000 over the next 2 cycles (it cannot be increased to 100,000 at once because the maximum single change allowed for this parameters is 200%).

**Proposals for bonded roles**

GitHub admin ([link](https://github.com/bisq-network/proposals/issues/210){:target="_blank"}); Domain name owner ([link](https://github.com/bisq-network/proposals/issues/212){:target="_blank"}); DNS admin ([link](https://github.com/bisq-network/proposals/issues/213){:target="_blank"})

_Accepted_

These proposals were for _cbeams_ to post bonds for the roles listed above.

**Repay victims of the April 2020 security incident using BTC trading fees**

Generic proposal ([link](https://github.com/bisq-network/proposals/issues/209){:target="_blank"})

_Accepted_

This proposal specified a framework for paying back the 6 victims from [the April security incident](https://bisq.network/statement-security-vulnerability-april-2020). Funds will be paid back as quickly as possible from BTC trading fees. A [filter-based mechanism to distribute repayments](https://github.com/bisq-network/bisq/pull/4150) is currently under review, and a basic [reporting mechanism](https://github.com/bisq-network/support/blob/master/track-repayments.html) to track payments has also been devised.

Notably, this proposal _did not_ specify whether the total repayment would be the USD value of the funds at the time they were lost, or if the total would be the BTC total of the funds lost. This point remains to be addressed in a separate proposal to be submitted for consideration in a subsequent cycle.
