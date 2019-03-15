---
layout: post
title: An Overview of the Bisq Network
author: Aruna Surya
excerpt: If you are into cryptocurrencies, you may be interested in Bisq, a decentralized exchange that enables you to trade bitcoin for fiat currencies and other cryptocurrencies. Unlike centralized exchanges, you preserve your privacy when trading on Bisq since there is no need for registration or approval from any central authorities. In this post, I will give you an overview of the Bisq software and the Bisq network.<br><br>
---

<hr>

*Aruna is a Bisq contributor with a non-technical background who is currently leading the Blog and Translation efforts.*

_If you'd like to contribute a post, please reach out on [Slack](https://bisq.network/slack-invite) or [on our forum](https://bisq.community/t/call-for-blog-writers/7040)!_

<hr>

If you are into cryptocurrencies, you may be interested in Bisq, a decentralized exchange that enables you to trade bitcoin for fiat currencies and other cryptocurrencies.
Unlike centralized exchanges, you preserve your privacy when trading on Bisq since there is no need for registration or approval from any central authorities. In this post, I will give you an overview of the Bisq software and the Bisq network.

## Bisq Software
Bisq is decentralized which means that there is no central component that, if removed, would cause Bisq to fail. For instance, the exchange data such as offers to buy or sell BTC is not stored on any central server. You do not need to go to a central website to trade. Instead, you download and install [the Bisq application](https://bisq.network/downloads/) on your computer. The Bisq app is free/open-source software (FOSS) which is maintained and improved by a network of contributors. By running the software, your computer becomes part of the Bisq network.

There are many different payment methods that you can use on Bisq. For instance, if you are using MoneyGram to receive USD in exchange for BTC, you need to add information about your MoneyGram account so that your trading partner can send you USD. Bisq does not automatically send the USD from your trading partner to you, it just gives them the information they need to send USD to your MoneyGram account. Since your data is stored locally on your computer, the rest of the network doesn't know the details about your MoneyGram account.

The app contains an internal BTC wallet. Upon starting the app, you are encouraged to write down your seed phrase and backup your wallet data. You are responsible for your own funds since the rest of the Bisq network has no access to them. Anyone can make an offer to buy or sell BTC, and you are free to take that offer or not. When you take someone's offer, under the hood your Bisq software communicates with that of your trading partner. Both of you need to make a security deposit as insurance against potential fraud by either of you. That deposit is locked in 2-of-3 multisig which includes you, your trading partner and an anonymous Bisq arbitrator, and can only be unlocked if two out of three people agree. In the event of a dispute, an arbitrator investigates the trade and determines the right course of action.

Bisq has been generating revenue and operating without any major issues since its launch in April 2016. It has processed about 22,000+ trades.

## Bisq Network
The Bisq network consists of nodes running the Bisq software, and is a second layer running on top of the Bitcoin network. Just like the Bitcoin network, it is a peer-to-peer (P2P) network that does not have a central server and is instead made up of individual peers. Bitcoin transactions on Bisq are validated by a handful of Bitcoin full nodes run by trusted contributors, but you are free to connect your own full node to Bisq as well. Upon starting, the Bisq app connects to these nodes. If there is a local Bitcoin full node, the software automatically detects it and connects to it instead.

In addition to Bisq nodes, the network includes several other nodes, each with a specific function. Every time the Bisq app gets started, it gets connected to seed nodes. Seed nodes run the Bisq software, and they introduce users to other Bisq nodes. Price nodes fetch data on cryptocurrency prices and serve it to Bisq nodes. Currently, the price nodes fetch the BTC price in fiat from bitcoinaverage.com, and altcoin data from poloniex.com and coinmarketcap.com.

## Further Reading
You can learn more about Bisq [here](https://docs.bisq.network/intro.html) and how to install the Bisq software [here](https://docs.bisq.network/getting-started.html).
For more technical details of the Bisq P2P network, please visit [this blog post by Manfred Karrer](https://bisq.network/blog/new-p2p-network/).


