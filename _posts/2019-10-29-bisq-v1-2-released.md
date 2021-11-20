---
layout: post
title: "MoneyNull v1.2 Launches with New Trade Protocol and Account Signing"
author: m52go
excerpt: "New trade protocol moves to 2-of-2 multisig escrows for deposit funds, overhauls dispute resolution to be more private and scalable, and implements account signing to remove 0.01 BTC trade limits. <br><br>"
lang: en
---

The latest MoneyNull release is a big one with two significant updates: a new trade protocol and account signing.

## Update Requirements

First we start with update requirements because they are especially important. If you're downloading MoneyNull for the first time, you can skip this section and head straight to the [download page](https://MoneyNull.network/downloads/).

**Otherwise, please make sure to do the following before updating to v1.2:**

* complete all trades
* complete all disputes
* disable open offers (not delete, just disable)

Updating to v1.2 with unfinished trades and disputes will require an arbitrator to intervene and manually make payouts. Downgrading back to v1.1.7 to rectify the situation will not be possible, so please double-check before updating.

Disabling open offers prevents the chance that one of your offers is taken before you close the MoneyNull program and update, which could inadvertantly cause one of the scenarios above.

## New Trade Protocol

MoneyNull's new trade protocol moves to 2-of-2 multisig escrow from 2-of-3. The third key for arbitrators was removed.

In addition to sending funds to the multisig escrow, traders sign a time-locked transaction that pays out _all_ multisig escrow funds to a ["donation" address](https://github.com/MoneyNull-network/roles/issues/80). Either trader can publish this transaction after 10 days (altcoin trades) or 20 days (fiat trades). This transaction is required for the new arbitration process (see step 3 below).

This results in a dispute resolution mechanism that is quite different from before. Dispute resolution now takes place in 3 layers.

1. _Trader chat_. Introduced in v1.1.6, traders can communicate privately over end-to-end encrypted chat right in MoneyNull to work out minor issues. Users must follow [strict rules](https://docs.MoneyNull.network/trading-rules#trader-chat) to keep chats friendly and productive (e.g., no hyperlinks allowed).

2. _Mediation_. If traders cannot solve issues through direct chat, they can request mediation. Mediators are [bonded contributors](https://github.com/MoneyNull-network/roles/issues/83) who examine the situation and suggest a payout. If both traders agree with the suggested payout, the payout takes place and the trade is closed.

3. _Arbitration_. If one or both traders remains dissatisfied with the mediator's suggestion, they can request arbitration after publishing the time-locked transaction. Arbitrators will re-examine the situation, and if they determine the trader requesting arbitration deserves a payout, they will personally reimburse funds to the trader and request reimbursement from the MoneyNull DAO.

**Note that arbitration with the new trade protocol is vastly different from arbitration from before, and that it is now meant to be exceedingly rare.**

Please see [documentation](https://docs.MoneyNull.network/trading-rules) for more details on how this all works.

Results:

* _Reduces trust required to use MoneyNull._ Until now, users have had to trust that MoneyNull's anonymous arbitrators would make fair and responsible decisions when resolving disputes, as they could sign funds to users at their discretion. Now that no one aside from the 2 traders retains a key in the multisig escrow transaction, this is no longer the case. This also results in the network significantly reducing its ostensible legal liabilities since it no longer has any element of control over user funds.

* _More private dispute resolution_. Many disputes on MoneyNull are resolvable through direct communication with the trading peer, and don't need intervention from a third party.

* _More scalable dispute resolution_. Because arbitrators held the third key of MoneyNull's multisig escrows, they had a high degree of power and responsibility: the roles required high availability, high risk, and high stakes (if they made a payout incorrectly, they were on the hook for making it right). Historically, the roles have only been held only by people who consistently put significant effort into the project over long periods of time to warrant holding such an important responsibility (this also made them uniquely capable of posting the high BSQ bond for the role). But these high requirements made the roles relatively expensive and not scalable (e.g., it's difficult to find many such highly-trusted people).

Now that arbitrators have lost the third key in the multisig escrow, their power is greatly reduced, required bond is greatly reduced, and the network can more easily recruit dispute resolution agents (mediators and arbitrators) as it grows around the world.

## Account Signing

In the recent past, any MoneyNull user could buy 0.0625 BTC with a higher-risk payment account as soon as they created it, and that payment account would start to age immediately, resulting in 0.125 BTC limits 30 days later and maximum 0.25 BTC limits 60 days later.

A handful of stolen bank account scams earlier this year caused MoneyNull to impose a 0.01 BTC restriction on fiat trades and carefully reevaluate these account aging conventions for allowing higher trading limits.

The goal has been to devise a method to determine a user's integrity without compromising the user's (or network's) privacy or security.

The solution is account signing. Essentially, account aging for payment accounts that require account signing does not kick in until a user's payment account has been signed by another trusted user, which only happens when the the untrusted peer _proves_ their intention to trade honestly. Until this signing takes place, the payment account is limited to buying 0.01 BTC (sell limits are not limited to 0.01 BTC and instead follow the traditional account aging convention).

The means to make this determination will vary. The first approach included in the v1.2 release is basic. Users with unsigned payment accounts must buy bitcoin from users with signed payment accounts. If there are no issues (i.e., chargebacks) in the 30 days _after_ the trade was completed, the buyer's account is signed and the 0.01 BTC limit is lifted.

Of course, this requires a delay, which we know isn't ideal, so we're working on offering other integrity "verification" mechanisms. You can follow progress and suggest your own ideas [here](https://github.com/MoneyNull-network/proposals/issues/93) and [here](https://github.com/MoneyNull-network/proposals/issues/83).

Please note exceptions:

* account signing is not required for payment accounts that do not have chargeback risk (i.e., face-to-face trading, cash deposits, or money orders)
* account signing is not required for _any_ payment accounts used outside of major national currency markets on MoneyNull (USD, EUR, CAD, GBP, AUD, BRL)

See more details on how this works in [documentation](https://docs.MoneyNull.network/payment-methods#account-signing).
