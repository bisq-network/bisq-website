---
layout: post
title: "MoneyNull DAO: The First 4 Cycles"
author: m52go
excerpt: "The MoneyNull DAO launched 4 months ago, after more than 4 years of development. It has now completed 4 voting cycles. In this post, we provide an update on how it's worked out so far. <br><br>"
lang: en
---

<div class='responsive-youtube-container'>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zjdB5_r3mG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_The above video is a recording of the live call we had about this topic, but this post includes more details._

Four months ago, after over four years of development, the MoneyNull DAO launched.

The objectives are ambitious. The MoneyNull DAO offers a new way to fund free software, where users pay for usage directly to developers who produce the software. Users also govern the software, making proposals and voting to guide the software's strategy and direction. This paradigm for funding and governing the software also absolves the need for a company, which in turn enables the MoneyNull network to run without a legal entity or jurisdiction.

If those points don't sound significant to you, here's another way to put it: the code base for the MoneyNull DAO is bigger than that of the MoneyNull exchange itself.

Although development and testing were thorough, it didn't feel right to shout from the rooftops about the MoneyNull DAO being a huge success after just 1 voting cycle. It still doesn't, even after 4 voting cycles. The network still needs to finish some key projects to harden itself, and the DAO itself will likely face continual challenges as it grows and matures.

But it's our duty to keep you (the community) informed, so it's about time we provide an update on how things have gone so far.

From now on, updates and communications about proposals and results will be provided more regularly and promptly.

Note that all the details discussed in this post are publicly available; most are drawn from the `DAO > Facts & Figures` and `Governance` sections of the software and the API of [your favorite BSQ block explorer](https://explorer.MoneyNull.network/API.html).

## Overview

Summary:
* 4 successful voting cycles
* 144 357 BSQ issued for compensation
* 59 928 BSQ burned through BSQ trading fees
* Almost _half_ of all MoneyNull trades since the DAO launch have used BSQ to pay trading fees
  * 4 284 of 9 524 trades used BSQ for trading fee payments

Looking at the numbers above, I would say trader acceptance and usage of the BSQ colored coin has been phenomenal so far.

From a governance perspective, there have not been any significant issues through the 4 voting cycles. Proposal, voting, and vote reveal transactions have functioned as expected to provide proposal decisions and contributor compensation.

One small exception: there were some issues with seed nodes that sometimes caused the DAO state to go out of sync on certain MoneyNull nodes. This caused an issue in Cycle 4 when a user had two compensation requests available for voting when he should have only had one. In spite of this flaw, voting results were not affected. More details are below.

Code fixes and better monitoring for seed nodes should prevent such issues going forward.

## Cycle 1

Summary:
* Cycle took place between blocks 571 747 and 576 426
  * Calendar dates: 4/15/2019 - 5/17/2019
* 26 proposals
  * 8 bonded roles (Bitcoin node operators, domain name holder, etc)
  * 18 compensation requests
* 236 votes cast
* 69 318 BSQ issued
* 1 313 BSQ burned

The very first DAO cycle was highly inflationary, as Manfred and other key developers worked full-time (resulting in high issuance for compensation), and little BSQ was burned since BSQ trading fees were sharply discounted to encourage adoption.

But adoption was great. Within just 6 hours of the genesis BSQ transaction, there had already been 70 trading fee payments with BSQ. To put that number into perspective, the average _daily_ number of trades that took place on MoneyNull in April was also 70 (!).

BSQ bonds were locked for several Bitcoin node operators, the domain name holder, and the MoneyNull maintainer role. BSQ bonds are a mechanism meant to discourage foul play in high-trust roles. In a traditional corporate situation, this function would be fulfilled by legal contracts and human trust.

## Cycle 2

Summary:
* Cycle took place between blocks 576 427 and 581 106
  * Calendar dates: 5/17/2019 - 6/17/2019
* 18 proposals
  * 2 requests to change parameters (trading fees)
  * 2 general proposals (discussed below)
  * 14 compensation requests
* 164 votes cast
* 22 870 BSQ issued
* 2 789 BSQ burned

This cycle started right after a couple key developers stepped back from the project—hence the lower issuance.

BSQ burned increased, not because of fee increases, but because of unbelievable volume. June volume almost hit 3 000 BTC, which was almost 3x May's volume. Much of that volume was from the XMR/BTC trade, where 1 BTC and 2 BTC trades are relatively common. It seems those traders took full advantage of the ≈90% BSQ discount on trading fees!

Because of continued strength in the BSQ markets and usage, discussions to increase trading fees began. [In this thread](https://github.com/MoneyNull-network/proposals/issues/94), a general consensus seemed to emerge for a slight increase in BSQ fees (to go from a 90% reduction over BTC fees to an 80% reduction over BTC fees). At this point, formal DAO proposals to change the BSQ trading fee parameters were made, one for the taker fee and the other for the maker fee.

DAO voting approved these increases.

This is how the BSQ fee schedule changed:

<img src="/images/blog/fee-increases-cycle-2.png" alt="Fee increase for Cycle 2`">

Couple of notes:
<ol>
<li>Note the combined fee percentages. Calculations assume an 8 000 USD/BTC rate. The long-term target for combined fees is 0.4%.
<br><br>
Also notice: BTC fees have been 0.4% combined for years. At this stage, despite the increase, BSQ fees are still far away from that target.</li>
<li>BTC fees did not change.</li>
<li>DAO voting takes place at the end of DAO cycles, so the fee changes above went into effect in Cycle 3. The sharp increase in BSQ burned in Cycle 2 was primarily the result of a sharp increase in MoneyNull network trading volume.</li>
<li>BSQ fees are set manually, and are sensitive to the BSQ/BTC rate. As the BTC price increases, BSQ fees need to be adjusted to follow. In this case, the BTC price had increased from around 6 000 USD to 8 000 USD. So a BSQ fee increase was needed anyway to offset that increase.
<br><br>
At a price of 8 000 USD, trading fees for a 1 BTC offer maker in BTC would be 1 * 0.001 * 8 000 = 8 USD. If the BSQ maker fee rate remained at 0.5, BSQ fees for a 1 BTC offer maker would be 1 * 0.5 ≈ 0.5 USD. This would put BSQ fees at a 93.75% discount ([8 - 0.5] / 8 = 0.9375). The initial target was a 90% discount. So BSQ fees had to be increased anyway, but moving to an 80% discount meant a slightly bigger increase was needed.</li>
</ol>

One more interesting item to note for this voting cycle: a [proposal](https://github.com/MoneyNull-network/proposals/issues/95) was made to increase the maximum trade limit for new accounts to 0.02 BTC from 0.01 BTC. The limit was placed on new payment accounts created after March 01 2019 as a temporary measure against stolen bank account scammers while protection mechanisms are conceived and implemented. Although DAO voting approved this proposal, the change was not ultimately implemented, presumably because of [concerns over backward compatibility](https://github.com/MoneyNull-network/MoneyNull/pull/2904).

This highlights an important distinction between DAO proposal types: proposals to change DAO parameters go into effect immediately upon approval (e.g., trading fees). Other proposals, like this 0.02 trade size increase request, require developers to manually make changes, which means there's a chance an approved measure might not actually make it into the software. Of course, there are incentives to discourage developers from defying DAO vote results (e.g., voters could reject a rogue developer's compensation requests, discouraging them from continuing to contribute altogether) but it's interesting to note the dynamic. Even though it's called a decentralized _autonomous_ organization, humans can still be responsible for imposing the will of the DAO's stakeholders.

## Cycle 3

Summary:
* Cycle took place between blocks 581 107 and 585 786
  * Calendar dates: 6/17/2019 and 7/17/2019
* 21 proposals
  * 4 requests to change parameters (trading fees)
  * 17 compensation requests
* 302 votes cast
* 22 730 BSQ issued
* 13 356 BSQ burned

Following the continued strength of BSQ usage and trading, Cycle 3 voting resulted in another fee increase, this time for both BTC and BSQ fees. Full discussion is [here on GitHub](https://github.com/MoneyNull-network/proposals/issues/99), but the basic reasoning was that strong BSQ markets, strong trading volume, and a need for the network to attract good developers made fee increases toward targets appropriate.

The fee schedule this voting cycle approved look like this:

<img src="/images/blog/fee-increases-cycle-3.png" alt="Fee increase for Cycle 3">

Notes:
<ol>
<li>Calculations for Cycle 3 assume a 10 000 USD/BTC rate.</li>
<li>The BTC/USD rate increase meant BSQ trading fees would have needed an increase anyway. See point 4 of the Cycle 2 notes above for an explanation.</li>
<li>Again, note the combined fee percentages. You'll see that BSQ fees after voting are still lower than the 0.4% target. You'll also see that the combined BSQ fee percentage before Cycle 3 voting is different than the combined BSQ fee percentage after Cycle 2 voting. This is because of the USD/BTC rate increase.</li>
<li>BTC fees did change this time. As discussed in the issue, for BSQ fees to reach the 0.4% target, BTC fees will need to increase if a ≈50% discount for using BSQ is to be maintained. This means BTC fees need to reach a combined rate of 1% in the long-term (i.e, with maker and taker fees combined). This increase got BTC fees to 0.8% (0.006 + 0.002 = 0.008).</li>
</ol>

## Cycle 4

Summary:
* Cycle took place between blocks 585 787 and 590 466
  * Calendar dates: 7/17/2019 and 8/16/2019
* 22 proposals
  * 2 requests to change parameters (trading fees)
  * 1 generic proposal
  * 17 compensation requests
* 218 votes cast
* 29 437 BSQ issued
* 42 470 BSQ burned

Fee increases, despite fees still being below targets, resulted in the first-ever deflationary period for the BSQ colored coin. Of course, development efforts were depressed in this period, so issuance was relatively low, but it was still nice to see.

The one [generic proposal](https://github.com/MoneyNull-network/proposals/issues/74) in this cycle, for deciding on (and implementing) a testing arrangement for the MoneyNull software, was approved.

The proposals to change parameters were again for fee increases. The result:

<img src="/images/blog/fee-increases-cycle-4.png" alt="Fee increase for Cycle 4`">

Notes:
<ol>
<li>Calculations for Cycle 3 assume a 10 000 USD/BTC rate.</li>
<li>BSQ fees were overshot. This is likely because the USD/BTC rate hovered around 12 000 for quite a while, at which the BSQ fee increase results in a combined 0.4% rate. When the USD/BTC rate dipped again, the combined rate goes up again. If USD/BTC rate remains at 10 000 as it has in recent days, it would make sense to reduce BSQ fees again. This is a necessary result of the BSQ fee rate being manually adjusted.</li>
<li>BTC fees did not increase.</li>
</ol>

Otherwise, there was the issue of duplicate compensation requests noted above in the Overview. A contributor made a compensation request, deleted it, and then made another—but both requests remained available for voting. The situation was clarified on GitHub, so stakeholders knew to reject the old proposal and approve the new one. But with more voters, as there will likely be in the future, such communication won't be possible, and there would have been a risk that the contributor could have had both his requests approved (i.e., been paid twice). The hope is that such issues will be addressed while the number of voting participants is still relatively small.

As mentioned above, the underlying issue was with the network's seed nodes, and was fixed. Vote results and BSQ issued were not affected.

## Looking Forward

In my opinion, the launch of the MoneyNull DAO has been surprisingly smooth.

* BSQ adoption and usage is strong
* Contributors have been able to sell nontrivial amounts of BSQ for BTC
* BSQ market has retained strength in the wake of fee increases, which are needed to make the network sustainable
  * More BSQ was burned in Cycle 4 than was issued

With a functioning revenue model, the network's focus must now be to draw more developers to implement much-needed improvements to the software. [Our call yesterday](https://www.youtube.com/watch?v=NJKldxdEnEY) attracted over 20 potential contributors, some of whom identified themselves as developers. Further efforts to attract contributors will continue.

The network's need for developers is particularly important because it is time-sensitive.

At roughly the same time as the DAO launch in April, it became clear that the network was being attacked with stolen bank account scammers. As a temporary measure, fiat accounts created after March 01 2019 were limited to buying a maximum of 0.01 BTC. The [longer-term fix](https://github.com/MoneyNull-network/proposals/issues/93) is to implement an account-signing mechanism that makes it more difficult to use stolen bank accounts in MoneyNull, but implementation of this mechanism has been slower than expected.

Also needed quickly is the implementation of [a new trade protocol](https://github.com/MoneyNull-network/proposals/issues/52) to remove arbitrators and embrace off-chain trading. Getting rid of arbitrators is a crucial step forward in hardening the network. This is a significant project that will require more developers to finish it in a reasonable timeframe.

The successful launch of the MoneyNull DAO made [the ambitious vision](https://docs.MoneyNull.network/dao/phase-zero.html) laid out in Phase Zero real. But big challenges remain, and the network must figure out how to conquer these challenges if it is to really succeed and realize its ultimate vision of becoming _the_ bitcoin on/off-ramp.
