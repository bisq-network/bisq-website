---
layout: post
title: "Trends in Trading Activity, August 2020"
author: Steve Jain
excerpt: "Most active markets, most active payment methods, and premiums paid across the network for August 2020. If you're wondering how to buy and sell bitcoin on Bisq quickly and cost-effectively, this post is for you. <br><br>"
lang: en
---

Bisq hit 70,000 trades all-time in August 2020. The past 12 months have been particularly interesting: there were well over 2,000 trades per month for every single month, with many months at or over 3,000 trades.

This sort of sustained trading activity is unprecedented for Bisq. In the past 12 months (from August 2019 to August 2020) there were more trades on the network than in the 36 months before that.

Now that the monthly numbers have been big enough for long enough, it might be interesting to take a look at some trends in trading activity over the past 12 months.

## TL;DR

The following findings are based on trade data from the past 12 months: August 2019 to August 2020.

* Top 5 most active markets on Bisq, in order: EUR, USD, XMR, BRL, GBP
* Top payment methods, by market:
  * EUR: SEPA and Revolut
  * USD: Zelle and US Postal Money Order
  * BRL: National bank transfer
  * GBP: Faster Payments
* Premiums are generally in 1-3% range for active markets; exception is ≤0.01 BTC trades, where premiums can be 6-7% on average for offer takers
  * This is because mining fees and smaller profit margins for smaller trades drive up trading costs for offer makers
  * Traders can mitigate this by **making their own bids** for **bigger trade sizes**
  * No evidence that account signing contributes to these higher premiums
* Selling bitcoin on Bisq can be lucrative

See numbers to back these findings below.

## Most active markets

One way to articulate Bisq's vision is to become the [fiat foreign exchange layer for Bitcoin](https://twitter.com/bisq_network/status/1010168687364657152).

So while trading fiat for bitcoin is Bisq's intended function, Bisq's trade protocol is agnostic to what's on the other side of the trade, so some altcoins are also traded on the network.

Here are the most active markets on Bisq in the past 12 months.

<img src="/images/blog/trading-trends-august-2020-1.png" loading="lazy" alt="Most active markets on Bisq, August 2019 - August 2020." width="400">

## Most common payment methods

Which payment methods did people use most often to settle Bisq trades?

This is how the breakdown looks across the network.

<img src="/images/blog/trading-trends-august-2020-2.png" loading="lazy" alt="Most popular payment methods, in aggregate" width="500">

But of course only certain payment methods are useful in certain markets, so here's a breakdown of top payment methods in top markets.

<img src="/images/blog/trading-trends-august-2020-3.png" loading="lazy" alt="Most popular payment methods for EUR" width="440">

<img src="/images/blog/trading-trends-august-2020-4.png" loading="lazy" alt="Most popular payment methods for USD" width="440">

<img src="/images/blog/trading-trends-august-2020-5.png" loading="lazy" alt="Most popular payment methods for BRL" width="440">

<img src="/images/blog/trading-trends-august-2020-6.png" loading="lazy" alt="Most popular payment methods for GBP" width="440">

Every single trade in the CAD market during this time period used Interac e-Transfer, and almost all AUD trades used national bank transfers.

## Premiums paid to buy

Pricing often discourages new or prospective Bisq users. Many will open Bisq, see few offers, complain that the ones available are expensive, and then leave (and maybe tweet about it).

Let's see what kinds of premiums people are really paying to buy bitcoin on Bisq. If you're looking to sell bitcoin on Bisq, you would be _earning_ these premiums.

Below are average premiums for the past 1 year for EUR and USD.

Only data for November 2019 and afterward is shown since this was the first full month with fiat markets open again (new users had been restricted from buying more than 0.01 BTC for much of 2019; <a href="{% post_url 2019-10-29-bisq-v1-2-released %}">account signing introduced in v1.2</a> lifted that restriction). This development changed trading dynamics significantly, so comparing metrics before and after November 2019 doesn't make sense.

Also, only data for EUR and USD are shown since only these markets provide data that is extensive enough to provide meaningful metrics.

To clarify the figures shown below: premiums indicate how much more the buyer paid over the spot price of bitcoin at the time of the trade.
* "Buy Offers" are trades that originated from an offer made by a bitcoin buyer (aka, a bid)
* "Sell Offers" are trades that originated from an offer made by a bitcoin seller (aka, an ask)

<img src="/images/blog/trading-trends-august-2020-7.png" loading="lazy" alt="Premiums in EUR and USD markets" width="500">

To make the chart above more concrete, here is an example takeaway. Bitcoin buyers in the EUR market paid an average premium of 1.367% on offers *they made* to buy 0.01 BTC or less. And buyers paid an average premium of 6.853% when they *took existing offers* from sellers of 0.01 BTC or less.

As you can see, that high premium to take existing offers goes down significantly as trade size goes up.

So how can one buy bitcoin for a more reasonable price on Bisq?
1. **Make your own bids to buy bitcoin**. Across all trade sizes, buyers who make bids pay significantly less than buyers who take what they see already on the Bisq offer book. Add the [differential in trading fees](https://bisq.wiki/Trading_fees){:target="_blank"} for offer makers versus offer takers, and the premium paid to take existing offers grows even wider. Takers pay 0.35% of trade amount while makers pay only 0.05% of trade amount, if paying with BSQ; takers pay 0.7% of trade amount while makers pay only 0.1% of trade amount, if paying with BTC.

2. **Do bigger trades**. Premium paid goes down significantly as trade size goes up. You can enable bigger trade sizes by getting your payment accounts signed and allowing your payment accounts to age. See more on these mechanisms to secure the network [here on the wiki](https://bisq.wiki/Account_limits){:target="_blank"}.

### Effect of account signing

Some of you savvy Bisq traders may be wondering if the high premiums in the ≤0.01 BTC segment are related to sellers taking advantage the market for account signing (i.e., charging a premium to buyers looking to obtain signed payment accounts).

It's difficult to determine if this is the case by looking at the EUR or USD markets alone, as signing is required for all major payment methods in those markets. But we can gain some insight by looking at the GBP market.

Although there were only 226 trades in the GBP market since November 2019, GBP is unique in that it:
* is an active Bisq market, which means account signing *is* required for payment methods with chargeback risk
* primarily uses a payment method which does *not* require signing

As a bonus, there were a nice handful of trades using national bank transfers and Revolut, which *do* require signing.

Here's the data.

<img src="/images/blog/trading-trends-august-2020-8.png" loading="lazy" alt="Premiums in GBP markets" width="650">

Sellers using all 3 payment methods asked for premiums in the 6-7% range (on average), and these premiums dropped significantly with higher trade sizes—whether or not the payment method required signing didn't seem to matter much.

Therefore this GBP data seems to indicate that the phenomenon of sellers asking for large premiums on small trades probably has less to do with signing and more to do with profitability. After all, at current prices, even a 10% premium won't yield a seller a huge profit on a <0.01 BTC trade. Furthermore, mining fees need to be paid no matter what, and these costs are proportionally larger for smaller trades.

Also consider that sellers asking for higher premiums are also doing the extra legwork of keeping Bisq online and available throughout the day and night so their offers can be available to you. They're convenient—and convenience always costs.

So if you're a bitcoin seller, even if you're not particularly concerned about privacy, trading on Bisq can be lucrative. In fact, some buyers will [bid sizable premiums](https://twitter.com/bisq_network/status/1284179918184755200){:target="_blank"} for buying bitcoin using certain payment methods.

Accordingly, buyers willing to put in a little more legwork are rewarded with better prices.

### Monero premiums

Last but not least, here is how Monero premiums have looked. The Monero market is driven by wholly different forces than fiat markets, as account signing and aging do not apply, and 2 BTC can be traded at once using new payment accounts (no waiting necessary).

Still, v1.2 also introduced a new trade protocol which affected trading dynamics on all markets, so figures shown here are also for November 2019 and onward.

<img src="/images/blog/trading-trends-august-2020-9.png" loading="lazy" alt="Premiums in XMR markets" width="440">

These figures are provided from the point of view of a Monero buyer. To make this chart more concrete, here is an example takeaway. Monero buyers paid an average premium of 0.494% on offers *they made* to buy 0.1 BTC or less of Monero. And buyers paid an average premium of 3.685% when they *took existing offers* from sellers of 0.1 BTC or less of Monero.

So it seems the same dynamics seem to apply across the board: make your own bids and do bigger trades to get better pricing.

## Other metrics

What other metrics would you like to know about trading on Bisq? We're currently building [a whole new markets dashboard](https://github.com/bisq-network/projects/issues/41){:target="_blank"} and could use your input.

Suggest your ideas to [@bisq_network on Twitter](https://twitter.com/bisq_network){:target="_blank"}, in the [Keybase group](https://keybase.io/team/bisq){:target="_blank"}, or [any other Bisq social channel](https://bisq.network/community/).
