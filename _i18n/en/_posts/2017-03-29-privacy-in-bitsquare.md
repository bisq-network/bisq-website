---
layout: post
title: Privacy in Bisq
author: Manfred Karrer
---
To write a blog post about privacy in Bisq has been already a long time on my TODO list.

One reason why I postponed it for so long was that I tried to fix the weaknesses rather than to explain such complicated stuff to a broader (potentially non-technical) audience.

But as we still don't have the resources to fix the main issue (see section below about the BitcoinJ bloom filter) I want to explain the background of the issue and propose the solution how you can protect your privacy even in the presence of that existing weakness.

Beside that I want to give an overview about different areas where privacy is relevant in Bisq.

I think we have already achieved a very high level of protection of user's privacy. We can do still better and are working on further improvements.

But the main goal of that article is to give those who take privacy serious enough background and guide them how they can get out the most from Bisq.

Be warned, that blog post will be a bit technical. Privacy is a complex topic and requires some basic understanding about how Bitcoin transactions work.

So let's get started.

One area where privacy plays an important role is how the data between the peers are transferred.

## Privacy in the P2P network

We use Tor ([hidden services](https://www.youtube.com/watch?v=wHmxCeLpveA)) for the P2P network.

With Tor we get a very high level of privacy on the transport layer. So there are no IP addresses visible which could be used to identify a trader. As we use hidden services we even don't have the issue that the exit nodes are a critical bottleneck in Tor.

In Bisq there are mainly 2 different types of messages:

 1. Broadcast messages (e.g. offers are broadcasted to all peers)
 2. Direct messages (e.g. 2 peers are communicating directly in the trade process)

In the first case the messages are not encrypted as all users need to be able to read the offers. The only identifying data included in an offer is the onion address of the offer-maker. That is required to contact him when one wants to take the offer.

The direct messages are sent directly to the other peer and are encrypted and signed in Bisq. Beside that it is encrypted as well on the Tor layer.

Though there are some things which needs to be considered – even with Tor.

**The repeated usage of the onion address carries a potential privacy concern:** Onion addresses of offers and trades could be used to map together an identity.

But that privacy leak to the trading peer can be also seen as a feature – and is actually used as such:

The small icon on the right of an offer entry or trade shows the onion address, whether you have traded already as well as the nr. of trades. This kind of "P2P reputation" (only you get the info about the data which you have anyway in the app from past trades – there is no centralized data collection) can be useful to easily identify traders with which one has traded already.

You can even tag a peer with arbitrary text like "Fast trader" (this data is only used in the scope of your local application).

![](/images/Screen-Shot-2017-03-28-at-23.14.54.png)
Edit peer info
{:class="wp-caption-text"}

![](/images/Screen-Shot-2017-03-28-at-23.15.42-768x168.png)
Tooltip
{:class="wp-caption-text"}

There might be different opinions if the re-use of the onion address for all offers and trades is positive (can be used for reputation) or if it is considered negative in regards to privacy.

### Future improvements
In future versions we want to make it possible to reset your onion address (in the settings).

There might be another option that we use separate onion addresses for each offer. But that might be resource heavy as multiple Tor circuits need to be maintained, multiple hidden service published (takes about 30 sec. – that is the delay at the application startup) and will complicate code as well. So this is not considered for the near future.

Beside that we will support an optional GPG key which can be used for reputation.

In the next version we will add this already on the data layer, though it is not implemented yet in the UI. With that key we could build a reputation system where a user can proof with his signature that he is the originator of certain offers or trades if he wants to and to whom he wants to.

That way we decouple the network ID with reputation and users can choose if they want to build up a long term reputation at the cost of loss of some privacy to the trading peer or if they prefer to not use reputation and in case of network ID renewals the offers and trades cannot be associated to one identity.

### What can you do now?
For users who don't want to connect potentially all their offers to one identity it is recommended to [create a new data directory][1] from time to time (you must not have open offers, trades or disputes) or to use a program argument (e.g. –appName=Bisq-2) so a new data directory with that given name will be created and you can run multiple instances of Bisq in parallel which are completely unrelated (that setup is used by developers as well).

### Summary
The usage of the network ID (onion address) might be seen as privacy weakness but to have a long term ID is a requirement for reputation.

In future we will decouple that by using an optional GPG key for reputation and enable renewal of the onion address.

## Privacy in Fiat trades

When the users are trading Bitcoin with a national currency the transfer of the Fiat currency requires usually some personally identifying data.

With a bank transfer it is typically the name and the bank account number. With other payment methods it might be an email address or phone number (e.g. ClearXchange, Interac, Swish,…). Only with OKPay and PerfectMoney an account number alone is sufficient. But even there the account is usually verified in the registration process at the payment provider so the company knows the real life identity behind that account number.

It is important to understand that **only the trading peer will see that account data** (the name in the case of a bank transfer) **as well as the arbitrator in case of a dispute**.
In all trades which are not disputed, the arbitrator has no access to this data. The account data is only stored locally on your computer.

The Fiat receiver needs to expose his bank data to the other peer, otherwise the Fiat sender could not transfer the money.
The Fiat sender usually also gets exposed by the receiving bank as most banks show the name and bank account nr. of the sender in the transaction history.

There is another important reason why we exchange the account data in both directions:
There are some [known social engineering scams](https://github.com/bitsquare/bitsquare/issues/373) where a BTC seller receives the Fiat money from a victim who got tricked into a purchase at some Ebay-like platforms but the victim never receives the purchased good. The scammer gives the victim the bank account nr. of the BTC seller, the BTC seller receives the Fiat and then releases the BTC to the scammer. After a few days the victim discovers that he got scammed, goes to the police and probably requests a bank chargeback. The seller gets in trouble to explain that he was not the scammer and probably accepts the chargeback to avoid more hassles.

Luckily that never happened at Bisq but we need to be careful not to attract such scammers.
To protect against such fraud we require the Fiat receiver to only release the BTC if the bank data in the Bisq application is matching with the data on his bank statement, otherwise he needs to open a dispute.

### Planned improvements
The payment account data (e.g. bank account number and name in case of a bank transfer) could be encrypted by default when the data is exchanged with the arbitrator in case of a dispute. In most cases the arbitrator does not require the data so the traders privacy is better protected. Only in those rare cases when the arbitrator needs the data for the dispute resolution process he can request the decrypted data from the trader.

### Summary
The exposure of the bank account data to the other peer (and arbitrator in case of a dispute) is a necessary requirement when a Fiat transfer is involved. In future releases we might add an improvement that the arbitrator does not see the account data by default and has to request it from the trader if needed.

### Avoiding coin merge

The returned change amount when funding an offer and/or trade as well as the funds you get out from a completed trade are re-used for other trades if you choose to use the **Bisq internal wallet**.
This connects the trades at the Bitcoin [transaction graph](https://www.youtube.com/watch?v=HScK4pkDNds) level.

To avoid that, you need to fund each offer independently from an external wallet and withdraw the funds at the end of the trade to an external wallet.
Of course you need to take care that you don't leak your privacy with **coin merge** again in the external wallet (you can use multiple external wallets as well to make that easier).

UI-wise that strategy is [fully supported](https://github.com/bitsquare/bitsquare/wiki/Dedicated-trade-wallets) in Bisq (in fact it was the only option initially) but we are aware that most people prefer the more convenient usage of the internal wallet to re-use bitcoins from one trade for funding the next trade.
Unfortunately there is no good solution to combine both **convenience with privacy** here.

To offer a tool (similar to coin control in Bitcoin Core) to let the user decide which unspent transaction outputs (UTXO) should be used for funding an offer or trade might help to mitigate the problem. But there is some complexity and difficulty involved to decide which UTXO to use as well the problem that often you don't have enough options to choose from. So that approach does not look like a feasible strategy to solve that issue. It is a conceptual problem from the way how transactions are connected in a graph in Bitcoin.

**Coinjoin** is one of the very few strategies to combat that issue.
We have rough plans to either add Coinjoin to Bisq in future, integrate an external Coinjoin implementation in a user friendly manner or find another solution with an automated trade to an Altcoin which has strong privacy protection built in at the protocol level like [Monero](https://getmonero.org/) or [Zcash](https://z.cash/).

Hopefully we will see more privacy improvements like [Confidential transactions](https://bitcoinmagazine.com/articles/confidential-transactions-how-hiding-transaction-amounts-increases-bitcoin-privacy-1464892525/) integrated to Bitcoin as well.

### Summary
If you want strong privacy you need to fund each trade independently and withdraw the funds from a completed trade to an external wallet where you have to take care to not merge the coins again (which is not easy).

## Privacy in the Bitcoin network

The connection to the Bitcoin network (we use [BitcoinJ](http://bitcoinj.github.io/) which uses the SPV model) is by default over Tor (we use a mix of connections to clear-net full nodes which are passing the Tor exit nodes and full nodes running as hidden services, therefore never exiting the Tor network).
The user can pass a program argument to use a custom Bitcoin full node as well. Alternatively a locally running Bitcoin node (localhost) can be used. The Bisq application discovers that local node automatically and uses it as the only node for the Bitcoin network connection. So no configuration is required.

The users who don't run their own full Bitcoin node are exposed to a severe privacy leak inherited from the broken **BitcoinJ bloom filters**[^privacy-in-bitcoinj] [^bloom-filters].
I tried to fix the most critical flaws[^bloom-fixes] but unfortunately it turned out that it requires more effort to fix that[^bloom-bounty]. So the bloom filters are still leaking considerable information to full nodes (in case those are operated by chain analysis companies spying on the network).

**What is leaked:**
A spying full node will find out quite easily that all the addresses created by the HD wallet (about 1300) are from one wallet (belongs to the same owner).

They don't see the IP address as we use Tor (with other BitcoinJ wallets even the IP address is leaked).
If one of those addresses is connected to the real life identity of the user all the other addresses are de-anonymized as well (derived from the fact that all come from one wallet – same owner).

Revealing a real life identity can happen easily if you use one of your wallet addresses for any service where you have to register with your ID (centralized exchanges, merchants,…).
Even if you don't leak any Bisq address, with more sophisticated graph analysis using typical usage patterns (e.g. [coin merge](https://diyhpl.us/wiki/transcripts/bitcoin-adam3us-fungibility-privacy/)) it can happen easier than expected that you lose your privacy.

So don't expect privacy on the Bitcoin level unless you run your own full node or you really know what you are doing and are aware of all the pitfalls.

We have some [bounties](https://github.com/bitsquare/bitsquare/issues/487) open in that area and we consider this a high priority issue which hopefully gets solved soon. Any developer experienced with BitcoinJ is very welcome to get in touch with us!

Unfortunately the bloom filters are broken also on the design level, but to fix the implementation flaws would give us at least some level of improvement (and render the effort for the spies higher as well as reduce the quality of their data due to a higher degree of uncertainty – though there might be controversial opinions about that).

That said, you should not be tempted to assume that the privacy problems of bloom filters are fixed after the BitcoinJ bloom filter implementation flaw is fixed.

To get a new bloom filter design implemented and deployed to Bitcoin Core is unfortunately something we cannot expect to happen soon. There are a few interesting efforts in that direction but I am not aware that anyone is working on that[^leo-wandersleb] [^committed-bloom-filters] [^fungibility-problems].

But there is another very **promising solution on the horizon**: To use a **Bitcoin Core node in SPV mode**[^full-block-spv]. [Jonas Schnelli](https://twitter.com/_jonasschnelli_) is working on that and we consider to replace BitcoinJ by that as soon it is production ready and we have enough dev resources to implement it.

**So what can a user do in the current situation to get a protection against those spying full nodes?**
As said initially the only protection is to **run your own full node**, either locally (then Bisq connects by default to it) or you pass the IP address to your node (or a trusted node you know) via a program argument (—btcNodes=[comma separated IP addresses]).

But it is important to do that already at the **first startup** and **always**. One connection to the public Bitcoin network can be enough that you get connected to a spying node and your privacy is leaked (only a new data directory which creates a new wallet will help then – in our [GitHub wiki](https://github.com/bitsquare/bitsquare/wiki) there are [instructions how to do that][1]).

To communicate that complicated issue by displaying a popup at the first Bisq startup would be too confusing and overstraining for most users.

One possible compromise might be to use by default a white-list of trusted full nodes. The user can change to run his own local or remote full node, use his own list of trusted nodes or use the public Bitcoin network. As explained above it must already be taken care of at the first startup, so to use the public network as default would require a popup explaining the complex topic.
To use a white-list of trusted nodes compiled by the Bisq developers introduces centralization and trust issues.
Though I think that is less critical as the user can change afterwards to the public network without any damage, which is not true for the other direction (first public then trusted nodes).

This is clearly controversial and not an optimal solution at all, but might be preferable to the current state where everyone is leaking potentially (and I assume to a high probability) their privacy.
We have not decided to go that road yet, but it is in discussion.

Though as said above a SPV Bitcoin node would be probably the solution we will go mid-term and that would solve that issue anyway.

**Summary:**
For achieving privacy protection on the Bitcoin network level you need to run your own full node.
We are trying to fix the implementation flaws in BitcoinJ but unfortunately bloom filters are already broken on the design level so we will never get proper privacy with the current bloom filters (Bitcoin side).
Alternatively we could provide a white-list of trusted full nodes and use that as default instead of the connection to the public network. This is a problematic approach as well and still in discussion.

The mid-term goal is to use a SPV Bitcoin node integrated in Bisq (similar like we use the Tor binary). For the user that would be transparent and the usability comparable with the current BitcoinJ SPV model. That would not only solve the bloom filter issue but also other weaknesses of BitcoinJ's SPV model (e.g. no validation of consensus rules; in case of a hardfork with Bitcoin Unlimited it would [follow automatically the longest PoW chain](https://groups.google.com/forum/#!topic/bitcoinj/PmMN18xxCI0)).

### Conclusion

Those who care about privacy, take the time to understand the complex context [^bitcoin-privacy-2017] [^bitcoin-privacy-theory-practice] [^bloom-filtering-privacy] and are willing to take the burden to run a full node as well keeping the funding of trades independent to avoid coin merge, can use Bisq with a very high level of privacy protection.
The others are probably leaking their privacy already in many other areas as well so Bisq does not really make their exposure worse.

This is not a satisfying situation though as we want to provide **privacy by default** in a user friendly manner. Convenience and privacy are unfortunately often hard to combine.
But we will continue to work to find the best solutions to solve those current weaknesses.

With all that said we have to emphasize that **Bisq has already archived a very high level of privacy protection** and clearly **outperforms any other Bitcoin exchange** in that matter.
* No registration required. No centralized data collection.
* We use Tor by default for all network traffic. So your IP address never get leaked!
* Our UI supports coin merge avoidance.
* Bisq uses a HD wallet. No address re-use
* There will be future improvements to decouple the network ID with an optional reputation key.
* Once we can use a SPV Bitcoin Core node instead of BitcoinJ we get rid of the bloom filter problem.

Protection of privacy is not only a [core value of Bisq](/blog/exploring-the-new-territory/) but we see it also as a fundamental property of money to achieve [fungibility](https://decentralize.today/bitcoin-fungibility-the-most-important-feature-of-bitcoin-4b87a381f21a#.nj06fezdn).
Bitcoin and the surrounding infrastructure (like exchanges) need to improve in that area so Bitcoin can develop it's full potential as sound money. Sound money for a sound society. Protection of privacy has to be the default state for all, not just a privilege for techies and geeks.

[America's founding fathers](https://en.wikipedia.org/wiki/First_Amendment_to_the_United_States_Constitution) have been more aware of this than today's [retarded politicians.](http://www.reuters.com/article/us-britain-security-rudd-idUSKBN16X0BE)
As we cannot expect much support from that side, let's build our new model as we think it should look like and make the retarded model obsolete.

## References

[^privacy-in-bitcoinj]: [Privacy in BitcoinJ](https://jonasnick.github.io/blog/2015/02/12/privacy-in-bitcoinj)
[^bloom-filters]: [On the Privacy Provisions of Bloom Filters in Lightweight Bitcoin Clients](https://eprint.iacr.org/2014/763.pdf)
[^bloom-fixes]: [Review bloom filter fixes in Bisq's BitcoinJ fork](https://github.com/bitsquare/bitsquare/issues/414)
[^bloom-bounty]: [Bounty: Review Bisq's BitcoinJ Bloomfilter fixes](https://github.com/bitsquare/bitsquare/issues/487)
[^leo-wandersleb]: Leo Wandersleb's efforts on [TransactionFinder](https://github.com/Giszmo/TransactionFinder)
[^committed-bloom-filters]: [Committed bloom filters for improved wallet performance and SPV security](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-May/012636.html)
[^fungibility-problems]: [How have fungiblity problems affected you in Bitcoin?](https://www.reddit.com/r/Bitcoin/comments/4v28jl/how_have_fungiblity_problems_affected_you_in/d5ux6aq)
[^full-block-spv]: [Complete hybrid full block SPV mode](https://github.com/bitcoin/bitcoin/pull/9483)
[^switching-to-new-data-dir]: [Switching to a new Bisq data directory][1]
[^bitcoin-privacy-2017]: [Bitcoin Privacy Landscape In 2017 — Beyond Coin Mixing, General Guidelines And Research](https://hackernoon.com/bitcoin-privacy-landscape-in-2017-zero-to-hero-guidelines-and-research-a10d30f1e034#.6ptypp28o)
[^bitcoin-privacy-theory-practice]: [Bitcoin Privacy: Theory and Practice – Jonas Nick](https://www.youtube.com/watch?v=HScK4pkDNds&t=11m30s)
[^bloom-filtering-privacy]: [Bloom filtering, privacy – Adam Back](https://www.reddit.com/r/bitcoin_devlist/comments/3bsugu/bloom_filtering_privacy_adam_back_feb_20_2015/)

[1]: https://github.com/bitsquare/bitsquare/wiki/Switching-to-a-new-data-directory
