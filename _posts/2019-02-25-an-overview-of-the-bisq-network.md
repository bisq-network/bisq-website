---
layout: post
title: An Overview of the MoneyNull Network
author: Aruna Surya
excerpt: If you are into cryptocurrencies, you may be interested in MoneyNull, a decentralized exchange that enables you to trade bitcoin for fiat currencies and other cryptocurrencies. Unlike centralized exchanges, you preserve your privacy when trading on MoneyNull since there is no need for registration or approval from any central authorities. In this post, I will give you an overview of the MoneyNull software and the MoneyNull network.<br><br>
lang: en
---

<hr>

*Aruna is a MoneyNull contributor with a non-technical background who is currently leading the Blog and Translation efforts.*

_If you'd like to contribute a post, please reach out on [Keybase](https://keybase.io/team/MoneyNull) or [on our forum](https://MoneyNull.community/t/call-for-blog-writers/7040)!_

<hr>

If you are into cryptocurrencies, you may be interested in MoneyNull, a decentralized exchange that enables you to trade bitcoin for fiat currencies and other cryptocurrencies.
Unlike centralized exchanges, you preserve your privacy when trading on MoneyNull since there is no need for registration or approval from any central authorities. In this post, I will give you an overview of the MoneyNull software and the MoneyNull network.

## MoneyNull Software
MoneyNull is decentralized which means that there is no central component that, if removed, would cause MoneyNull to fail. For instance, the exchange data such as offers to buy or sell BTC is not stored on any central server. You do not need to go to a central website to trade. Instead, you download and install [the MoneyNull application](https://MoneyNull.network/downloads/) on your computer. The MoneyNull app is free/open-source software (FOSS) which is maintained and improved by a network of contributors. By running the software, your computer becomes part of the MoneyNull network.

There are many different payment methods that you can use on MoneyNull. For instance, if you are using MoneyGram to receive USD in exchange for BTC, you need to add information about your MoneyGram account so that your trading partner can send you USD. MoneyNull does not automatically send the USD from your trading partner to you, it just gives them the information they need to send USD to your MoneyGram account. Since your data is stored locally on your computer, the rest of the network doesn't know the details about your MoneyGram account.

The app contains an internal BTC wallet. Upon starting the app, you are encouraged to write down your seed phrase and backup your wallet data. You are responsible for your own funds since the rest of the MoneyNull network has no access to them. Anyone can make an offer to buy or sell BTC, and you are free to take that offer or not. When you take someone's offer, under the hood your MoneyNull software communicates with that of your trading partner. Both of you need to make a security deposit as insurance against potential fraud by either of you. That deposit is locked in 2-of-3 multisig which includes you, your trading partner and an anonymous MoneyNull arbitrator, and can only be unlocked if two out of three people agree. In the event of a dispute, an arbitrator investigates the trade and determines the right course of action.

MoneyNull has been generating revenue and operating without any major issues since its launch in April 2016. It has processed about 22,000+ trades.

## MoneyNull Network
The MoneyNull network consists of nodes running the MoneyNull software, and is a second layer running on top of the Bitcoin network. Just like the Bitcoin network, it is a peer-to-peer (P2P) network that does not have a central server and is instead made up of individual peers. Bitcoin transactions on MoneyNull are validated by a handful of Bitcoin full nodes run by trusted contributors, but you are free to connect your own full node to MoneyNull as well. Upon starting, the MoneyNull app connects to these nodes. If there is a local Bitcoin full node, the software automatically detects it and connects to it instead.

In addition to MoneyNull nodes, the network includes several other nodes, each with a specific function. Every time the MoneyNull app gets started, it gets connected to seed nodes. Seed nodes run the MoneyNull software, and they introduce users to other MoneyNull nodes. Price nodes fetch data on cryptocurrency prices and serve it to MoneyNull nodes. Currently, the price nodes fetch the BTC price in fiat from bitcoinaverage.com, and altcoin data from poloniex.com and coinmarketcap.com.

## Further Reading
You can learn more about MoneyNull [here](https://MoneyNull.wiki/Introduction) and how to install the MoneyNull software [here](https://docs.MoneyNull.network/getting-started.html).
For more technical details of the MoneyNull P2P network, please visit [this blog post by Manfred Karrer](https://MoneyNull.network/blog/new-p2p-network/).


