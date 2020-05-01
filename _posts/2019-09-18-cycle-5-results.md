---
layout: post
title: "Bisq DAO Cycle 5: Results"
author: Steve Jain
excerpt: "Cycle 5 of the Bisq DAO ended at block 595 146 on September 16 2019. This post covers its results, as well as an important lesson learned. <br><br>"
lang: en
en-only: true
---

Cycle 5 of the Bisq DAO went smoothly and resulted in some important decisions. There was also one incident which taught us an important lesson.

### Summary

* Cycle took place between blocks 590 467 and 595 146
  * Calendar dates: 08/16/2019 - 09/16/2019
* 35 proposals
  * 5 bonded role proposals (1 duplicate)
  * 1 request to change a parameter
  * 4 general proposals (1 duplicate)
  * 25 compensation requests
* 432 votes cast
* 100 471 BSQ issued
* 54 348 BSQ burned

See notes on duplicate proposals below in "Lesson Learned" section. Non-compensation proposals are covered below.

This cycle garnered almost twice as many votes as any cycle so far. Spike in issuance was for compensation for a handful of new developers to the project.

### Proposal Details

**GitHub admin**

_Proposal for bonded role ([link](https://github.com/bisq-network/proposals/issues/108){:target="_blank"})_

_Approved_

Upon approval, this proposal created a bonded role for a _GitHub admin_ in the Bisq DAO assigned to ripcurlx, who [locked the requisite 50 000 BSQ bond](https://explorer.bisq.network/tx.html?tx=5890c06cfeb80b8b987a730735c0bead52a6864f9a969dfe6309c18270e5251e){:target="_blank"} earlier today.

Monthly updates for the role are in [the role's issue](https://github.com/bisq-network/roles/issues/16){:target="_blank"}.

**Bitcoin donation address owner**

_Proposal for bonded role, DAO parameter adjustment ([link](https://github.com/bisq-network/proposals/issues/116){:target="_blank"})_

_Approved_

Upon approval, this proposal created a bonded role for the _BTC donation address owner_ in the Bisq DAO assigned to burning2019, who [locked the requisite 50 000 BSQ bond](https://explorer.bisq.network/tx.html?tx=45859e0fc3c75db969fb33e85dfd5b35c62743ba8649186ca02703d90579ac3a){:target="_blank"} on Monday.

It also set the `RECIPIENT_BTC_ADDRESS` DAO parameter (aka "donation address") to the bitcoin address specified in the same GitHub proposal linked above.

Part of the core purpose of the Bisq DAO is to [route trading fees directly from traders to contributors](https://docs.bisq.network/user-dao-intro.html#earn-and-distribute-revenue){:target="_blank"} with no one person or entity authorizing funds, providing funds, or routing funds. This is why we encourage Bisq users to use BSQ to pay trading fees, but we don't coerce, so BSQ is optional. Traders can still pay trading fees in BTC. Instead of going to arbitrators, BTC fees will soon go to the donation address.

The person taking on this role will periodically purchase BSQ with the BTC accumulated in the donation address. They will be assigned to the [corresponding role issue](https://github.com/bisq-network/roles/issues/80){:target="_blank"} shortly, where you will see monthly updates.

**Mediators**

_Proposal for bonded roles ([link 1](https://github.com/bisq-network/proposals/issues/112){:target="_blank"}, [link 2](https://github.com/bisq-network/proposals/issues/117){:target="_blank"})_

_Approved_

Upon approval, two bonded roles were created for a _mediator_ in the Bisq DAO, one assigned to bisquser and another to leo. bisquser [locked the requisite 10 000 BSQ bond](https://explorer.bisq.network/tx.html?tx=59d0249f6de5545f941d7a170e1ea36e80499d4d1f95d0035ec3ffe431dec018){:target="_blank"} on Monday. leo has not locked their bond as of this writing.

[Mediation](https://docs.bisq.network/trading-rules.html#mediation){:target="_blank"}, along with trader chat, are both mechanisms to refine dispute resolution released with v1.1.6 of Bisq.

Both people will be assigned to the [corresponding role issue](https://github.com/bisq-network/roles/issues/87){:target="_blank"} shortly, where you will see monthly updates.

**Use 90-day average of BSQ price for compensation requests**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/114){:target="_blank"})_

_Approved_

This proposal removes the 1 USD peg for BSQ in favor of a 90-day market average. This average will be determined at the beginning of each DAO cycle, and all compensation requests made in the cycle should be made accordingly.

As it turns out, the 90-day average BSQ price for Cycle 6 (the current DAO cycle as of this writing) is [1 USD per BSQ](https://github.com/bisq-network/compensation/issues/364){:target="_blank"}.

**Create Analytics Operator and Analytics Administrator roles**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/115){:target="_blank"})_

_Approved_

Google Analytics was recently replaced with Matomo for better user privacy on Bisq websites.

As a result, new roles were approved to operate the Matomo server and administer it as needed.

**Improve Bisq testing frameworks**

_Generic proposal ([link](https://github.com/bisq-network/proposals/issues/105){:target="_blank"})_

_Approved_

This proposal approved a slight shift in strategy for Bisq development, one that focuses more on increasing code quality and testing.

You can find out more on the related [developer session recording](https://www.youtube.com/watch?v=n3kWsRAe2qk){:target="_blank"}, or on the session's [notes](https://github.com/bisq-network/events/issues/28){:target="_blank"}.

### Lesson Learned

So it seems the Bisq DAO itself continues to work as intended. The only notable issue we had in this cycle was actually more of a problem with the human beings who used the DAO.

One of the users who proposed to take a mediator role, known on GitHub as leo816, ended up with duplicate proposals available for voting (this probably wasn't their fault, as it's [a known issue](https://github.com/bisq-network/bisq/issues/3270){:target="_blank"}). The name on the first proposal was "lio", an apparent typo, so a second proposal was made with the name "leo".

The issue was that DAO voters almost approved both proposals. Just a little bit of due diligence would have revealed the "lio" proposal was merely a duplicate of the "leo" proposal and should be rejected.

Granted, leo816 should have used their exact handle "leo816" instead of "leo" so it would be easier for voters to relate their GitHub proposal to their DAO proposal. But still, there was no reason for a rational voter to approve both proposals.

Here are voting results of the "leo" proposal. Approvals were unanimous:

![DAO Voting Negligence 1](/images/blog/dao-voting-negligence-1.png)

And here are voting results of the "lio" proposal. Some rejections, but most people approved it too:

![DAO Voting Negligence 2](/images/blog/dao-voting-negligence-2.png)

Open governance can only work if participants take the time and pay the attention needed to make responsible decisions.

**Please make sure you do your due diligence before voting!**
