---
layout: post
title: "Bisq DAO Cycle 7: Results"
author: m52go
excerpt: "Cycle 7 of the Bisq DAO ended at block 604 506 on November 19 2019. This post covers its results. <br><br>"
lang: en
---

This post summarizes the results of Cycle 7 of the Bisq DAO.

### Summary

* Cycle took place between blocks 599 827 and 604 506
  * Calendar dates: 10/17/2019 - 11/19/2019
* 30 proposals
  * 2 generic proposals
  * 3 reimbursement requests
  * 25 compensation requests (3 duplicate)
* 274 votes cast
* 73 766 BSQ issued
* 15 037 BSQ burned

In this cycle, work continued on final development, testing, and other preparations for the launch of v1.2. Another weak period of trading volume resulted in another inflationary cycle.

### Proposal Details

**Create a native Bisq app for Android**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/139){:target="_blank"})_

_Accepted_

A mobile experience for Bisq has long been desired but has been considered infeasible given resource requirements, power consumption, and other factors.

Recently wiz and bodymindarts made a proof-of-concept that combined an [alternative headless implementation called Risq](https://github.com/bodymindarts/risq){:target="_blank"} of Bisq with Tor with a native Android interface. After some discussion, it was decided the [upcoming gRPC API](https://github.com/bisq-network/proposals/issues/136){:target="_blank"} would be used instead of Risq.

In the end, an initial release of this app with minimal trade functionality and dispute resolution is projected to be built over the next 6 months. Bisq DAO functionality will not be included in this initial release but will be added later.

[Check the proposal](https://github.com/bisq-network/proposals/issues/139){:target="_blank"} for more details and preliminary screenshots.

**Re-route disputed deposit funds to burner address instead of donation address**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/135){:target="_blank"})_

_Rejected_

As discussed [here](https://bisq.network/blog/bisq-v1-2-released/){:target="_blank"}, the new trade protocol introduced in v1.2 significantly changes dispute resolution. In case a dispute cannot be settled by mediation, funds in 2-of-2 multisignature escrows are sent to a "donation" address. This donation address is owned by an anonymous Bisq contributor who has [locked a 50 000 BSQ bond](https://explorer.bisq.network/tx.html?tx=45859e0fc3c75db969fb33e85dfd5b35c62743ba8649186ca02703d90579ac3a){:target="_blank"}, and they're required to use the bitcoin accumulated there to [buy and burn BSQ every 4 weeks](https://github.com/bisq-network/proposals/issues/116){:target="_blank"} (or sooner, if the balance exceeds 50% of the bond amount).

This DAO proposal suggested to instead send deposit funds to a burner address (i.e., one not controlled by any Bisq contributor) to avoid the possibility of the donation address holder colluding with a trader to send all funds to them (i.e., entering trades and forcing them to arbitration, which would send all deposit funds to the address they control).

Ultimately, the risk was acknowledged but not considered an urgent issue.

1. Although the donation address holder is outwardly anonymous, the person who holds the role was voted into it by sufficient BSQ weight, indicating core contributors are confident this person is trustworthy.
2. BTC and BSQ transactions are public, so in the event there are issues, the person would be outed quickly, lose their bond, and probably become an outcast.

While this is not what people wanted to hear, it's possible expectations for the new trade protocol were set too high. The new trade protocol does not promise _trustless_ trading and dispute resolution—such a thing may not even be possible. It does, however, _reduce_ trust in some places (no anonymous figure with third key) and _decentralize_ trust in others (responsibility to make traders whole is now spread across the counterparty, mediator, arbitrator, and the Bisq DAO).

And of course, liability on the network itself is reduced significantly without the third key.

How will this new setup work? We shall see. Minimizing the need for dispute resolution (bug-fixing, user interface enhancements, etc) is now a high development priority for the near-future.
