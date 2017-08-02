---
layout: post
title: "Why decentralisation is essential for bitcoin's utility as money"
author: Manfred Karrer
---
There was recently an important incident in the bitcoin space.

No, I am not talking about what happened at [Bitstamp][1]. Theft is not a systemic risk. All the big bank robberies never threatened the monetary system. Those companies need to improve their security and even with the best security there will always be left some risk for theft.

What concerned me much more is a case where I might lose my bitcoin not because somebody has stolen it, but because somebody started to destroy bitcoin as money.

[Coinbase][2] has ([not the first time][3]) caused some concerns as they are tracing coins.
That is a systemic danger much more serious than even the MtGox incident.

### Why is this a problem?

[Bitcoins anonymity][4] (or better pseudonymity) is based on the assumption that you cannot match an address to the real identity of the person owning it. All bitcoin transactions are connected and you can analyze quite well the flow of the money. As soon as you are able to match addresses to real identities, you are weakening the anonymity potential of bitcoin. With [coin merge][5] you lose even the anonymity of not yet matched coins.

Anonymity is for bitcoin [even more important][6] than for national currencies as the block chain is completely public.

Coin tracing gets much worse when the huge majority of bitcoin entry and exit gateways are in the hands of companies which know the real identities behind the addresses.

Imagine a simple example where you purchase 1 bitcoin from Coinbase and then spend that at an online shop which is using Coinbase as bitcoin payment processor. Coinbase has perfect information that you have spent that bitcoin in that particular shop.

If the shop uses another payment processor the information is still accessible for governmental agencies, and after all the [Snowden revelations][7] it is valid to assume that they are collecting those data with or without the knowledge and consent of the companies.

In a world where the huge majority of monetary transactions are including at least one company, that leads to a surveillance level which even exceeds the surveillance potential of the fiat system, since cash is at least very hard to track.

If that surveillance potential is not enough to alarm us, lets have a look at further potential results of coin tracing. If coins which you have received might be at risk of having been used in a criminal activity and the coins are traceable, those coins might not be accepted and therefore lose their value. That would lead to the situation that you would need to always check if there might be a risk that your bitcoin has become blacklisted. This would destroy the utility of money as it was already recognized in the 18th century by a [scottish court][8].

[Fungibility][9] is an **essential property of money** and any attack on that would destroy its value.

That is why I am much more concerned about what Coinbase is doing than the hacks at Bitstamp or last year at MtGox. Nobody could steal my bitcoins if I am not using those companies, but if they are attacking bitcoin's fungibility, they are attempting to destroy my bitcoins as well.

### But how can we be sure that bitcoin companies are not logging and tracing transactions?

Should we simply trust them from some terms of conditions statement? Should we ask for legal protection and regulation? You would probably not be in the bitcoin boat if you would rely on models based on trust in legacy systems. So we need better solutions.

Lets get back to the above example: It is very easy to trace if one company is used as exchange and as payment processor for merchants at the same time. It gets a bit harder to collect meaningful information if there are several companies involved, but for a governmental agency that is also not a hurdle. If they are distributed in different countries it gets a bit harder again, but hacking into foreign countries' companies is nothing that would cause a headache to the three letter agencies.

Solutions like [CoinJoin][10] and [merge avoidance][11] are very important tools to improve the anonymity of bitcoin, but we can do even better with decentralizing the important gateways like exchanges and markets.

In a pure P2P economy where monetary transactions are handled in a decentralized manner, everyone acts as both a provider and consumer of goods and services. In this model surveillance would need to be expanded to all participants in order to trace all transactions. That would at least raise the costs of mass surveillance significantly.

A fully P2P economy may not be realistic for various reasons, but it should be clear that **decentralized gateways** reduce threats to fungibility and therefore help to **preserve an essential property of bitcoin as money**.

[1]: http://insidebitcoins.com/news/bitstamp-theft-was-unfortunate-but-predictable-time-to-go-back-to-bitcoins-roots/28429
[2]: https://www.reddit.com/r/Bitcoin/comments/2q90m9/coinbase_is_monitoring_your_transactions_poorly/
[3]: https://www.reddit.com/r/Bitcoin/comments/2e2yxr/beware_coinbase_is_banning_accounts_that_play_on/
[4]: https://bitcoin.org/bitcoin.pdf
[5]: https://medium.com/@octskyward/merge-avoidance-7f95a386692f
[6]: https://bitcoin.org/en/protect-your-privacy
[7]: https://en.wikipedia.org/wiki/Global_surveillance_disclosures_%282013%E2%80%93present%29
[8]: https://www.reddit.com/r/Bitcoin/comments/1qomqt/what_a_landmark_legal_case_from_mid1700s_scotland/
[9]: https://en.wikipedia.org/wiki/Fungibility
[10]: https://bitcointalk.org/index.php?topic=279249.0
[11]: https://bitcoin.org/en/developer-guide#term-merge-avoidance
