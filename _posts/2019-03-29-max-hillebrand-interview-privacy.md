---
layout: post
title: "Privacy Best Practices & Bisq: An Interview with Max Hillebrand"
author: Ricardo Martinez
excerpt: "Ricardo Martinez interviews Max Hillebrand of the World Crypto Network. They discuss privacy in general, privacy with respect to bitcoin, privacy with respect to Bisq, and more. <br><br>"
---

<hr>

_Ricardo writes for [Coincache.net](https://coincache.net) and is a Bitcoin maximalist, who lives with his wife and son in Colombia._

_If you'd like to contribute a post, please reach out on [Slack](https://bisq.network/slack-invite) or [on our forum](https://bisq.community/t/call-for-blog-writers/7040)!_

<hr>

I have been really excited about the [Bisq DAO](https://bisq.network/dao/) since first hearing about it a few months back. Recently, I decided to check up on it and was surprised by the amount of progress that’s been made. I reached out to Bisq founder Manfred Karrer in order to arrange an interview with someone on the Bisq team about the project for my blog. He was kind enough to put me in touch with someone.

The next day I was on Reddit’s /r/bitcoin, and saw a post by pure coincidence, that the [Bisq team was issuing a call to writers](https://bisq.community/t/call-for-blog-writers/7040) to pen an article for the Bisq blog. I felt this was a sign from above, so I joined the [Bisq Slack](https://bisq.network/slack-invite) and asked how I could help. They suggested I do an interview with someone about Bitcoin privacy. I thought the idea was excellent. Amazing, I wanted to write about Bisq, and now I am writing for Bisq!

I reached out to Max Hillebrand of [World Crypto Network](https://www.youtube.com/user/WorldCryptoNetwork/), who responded amazingly fast. He agreed to do the interview and was even willing to do it the next day. He even suggested we do it as a [live stream](https://www.youtube.com/watch?v=4m-Wh0wSY5M) on World Crypto Network, which was amazing since I watch it all the time, and his show in particular. It all happened so fast it made my head spin. Max was an excellent host as you’ll see below. He gave expert answers, and I learned quite a bit from the interview about Bitcoin privacy and Bisq itself.

Without further ado, I present my Interview with Max Hillebrand, host of Open Source Everything, on the World Crypto Network.

## The Interview

**Q: Hello Max, thanks for having me on your show. I know you usually do the interviews but today I wanted to interview you. I wanted to talk to you about Bitcoin privacy and Bisq, and how Bisq could help people concerned about Bitcoin privacy?**

A: This is a really great topic because the exchange layer is really the main bottleneck for privacy because you’re always inherently touching the fiat system. The fiat system is built to spy on you, it’s very tough to use such a broken system in a way which protects your privacy. There are ways you can do it, however, and I’d say Bisq is one of the most cypherpunk ways you can use to stack satoshis.

**Q: Ok, before we go any further, I have to ask, how did you first hear about Bitcoin? (Sorry, I ask everyone that!)**

A: Good question, I first heard about it a few times in 2012-2013, but it never really caught my interest which is strange because now I really love it. Then in 2016, I watched my first Andreas Antonopoulos video, and it was so damn good, I kind of fell down the rabbit hole. I’ve been gaining more knowledge and trying to understand it and really fell in love with how beautiful this software is.

**Q: Ok, thanks. My next question is, In your opinion, does Bitcoin protect user privacy?**

A: It’s not really that clear yet, I would say. Bitcoin isn’t anonymous, it’s pseudonymous. It’s not really tied to your real world identity, but you build up an identity with a reputation, the coin does, or at least the [UTXO](https://bitcoin.org/en/glossary/unspent-transaction-output) does. There is always the potential of a privacy breaking link with this cluster of UTXOs being associated with your real world identity. Bitcoin can be pretty damned private if used correctly following best practices. If not used correctly, there are many pitfalls you can fall into that deanonymize you. But yes, there are ways to use it where nobody can spy on you.

**Q: Can you tell me what the overall importance of privacy in finance is, and in Bitcoin specifically?**

A: Privacy is inherently important. It is a natural right. It can be very tyrannical, in the sense that we do not have any privacy if the tyrannical ruler has access to every single private conversation or all the economic transactions, it reveals a lot about the individual that can be used for coercion.

For example, we see the current form of surveillance very much tied into the taxation system, so when coupled with the fact that a fiat bank account is not censorship-resistant at all, they can just take the money right out of the bank account, with no defensive mechanism in place for the individual. With state-level surveillance, the power differential is so gigantic, that it can be terribly misused and abused.

**Q: What would you say to someone who thinks privacy isn’t important because they have nothing to hide?**

A: I would ask them to tell me how much money they made last week, and what did they spend it on? What exactly did you buy? Please, I really want to know. Do you see? These questions are really uncomfortable. Why do we close the door when using the bathroom? It’s not because we have something to hide, it’s because we have nothing to share.

There are many parts of everyday life that are very private, for instance, a conversation with your wife, child or business partner. There are many things you don’t want to tell everyone or share with the world.

That’s perfectly fine, there is nothing wrong with that. It’s not that we have things to hide, it’s that some things are just none of your business. If we can also transact without giving personal information, then why provide the information? It just adds risk, and exposure to the potential for abuse.

**Q: Has becoming aware of Bitcoin made you more privacy-conscious?**

A: Absolutely yes, in many ways. Bitcoin in general, pushes you to be more self-sovereign and self-sufficient. For example, I now use my own GPG key which I generated myself, I have full control over my encryption keys. I use them for a variety of purposes including encrypting my communication. Only those I want to talk to receive my messages.

This aspect of controlling your own keys, not only on the Bitcoin level of not giving up custody of your coins but in this information age, where we have these encryption tools, we can use this in a very privacy-preserving way.

Bitcoin kicked me down this rabbit hole very much so because Bitcoin is built with these same tools. It couldn’t work without private key/public key cryptography or networks like Tor for private communication and encryption in general. We have all these tools at our disposal, why not use them?

**Q: Have you changed your online habits and habits in real-life now that you’ve become more privacy-conscious?**

A:  I’ve deleted my Facebook account and many other accounts which are simply security holes. I actually did a show where I taught my viewers how to set up a Yubikey and a password manager. I have different, long and unique, entropy-heavy passwords, for every single account. I use two-factor authentication wherever I can. I am using all libre open source software, except for Google Chrome. I very much treasure libre open source software, not just because it’s more secure but also because of the philosophy behind it.

**Q: Ok, great. Now, this might be a lot to digest for people who are new to privacy, so what would you recommend to a newcomer who’s interested in learning about Bitcoin privacy?**

A: There is so much to learn, I’d say a good place to start is to really understand what UTXOs are, Unspent Transaction Outputs. This basically represents the tip of the chain of digital signatures, which actually represent the unspent coins. This is the actual currency particle or cluster that we have in Bitcoin. A UTXO is born in the block reward of a newly mined block.

This newly minted UTXO can be spent by approving control of the UTXO by providing a valid answer to the script that locks it up. This can have different scripts like a private key, multi-sig, or timelock transaction.

The way Bitcoin transactions actually work is a great place to start. Nopara73 has written a great article about coin control. Only when you understand how bitcoin is actually spent, can you understand how to be private about it.

**Q: Can you tell me what a threat model is?**

A: A threat model is basically a criterion for determining which kind of threats exist for an existing piece of hardware or software. So in Bitcoin, we would assess what kinds of threats could stop it from fulfilling its mission. I would say the mission of Bitcoin is to provide a stable sound monetary system, that has an intrinsic currency which cannot be confiscated or which is optimized to protect property rights.

So, if this is the mission, anything that could potentially stop this mission should be considered in the threat model. In Bitcoin’s threat model there is the assumption that 51% of the miners are honest, but if that’s not the case, the chain with the longest validated proof of work would no longer be reliable and it’d be a failure.

This is just one example of the kind of threat that would be included in a Bitcoin threat model, but you can apply the same principles to privacy. One example is network analysis, how can an attacker use your communication to deanonymize you? Like if you happen to use a clearnet IP address to query a private Bitcoin address on a public block explorer like Blockchain.info. This would provide valuable information for people wanting to spy on you.

The best thing you can do is run your own full node because it’s privacy-preserving. You don’t have to ask anyone else if you’ve received bitcoin. You verify it yourself, on your own hardware, without outside network communication. This greatly reduces your threat model.

**Q: In your opinion, how important is fungibility for privacy in Bitcoin?**

A: On several different layers it is. First of all, without privacy you can’t have private property rights. For example, it starts with your private keys, you keep them private. Fungibility is a monetary phenomenon that ensures privacy. If we have coins that are considered “tainted” in Bitcoin, a mechanism for the market to say this Bitcoin is no longer as valuable, it’s not the same, then Bitcoin’s broken.

This is where fungibility kicks in. Every coin needs to be exchangeable with equal value as any other coin. Gold for instance, if you have a gold coin, as long as it’s gold, it can be traded the same as any other piece of gold of equal value. We need this to be true for every Satoshi on a network level, that there is no code that differentiates these UTXOs or this bitcoin from any other.

For example if you go to a custodial exchange like Coinbase (which you should never use) or, more realistically, Kraken which is probably a little more reputable, but let’s say they tell you we do not want to accept any business with these UTXOs, because they employ blockchain analysis and have a blacklist for whatever reason. Then the fungibility is broken. Every UTXO needs to be as valuable as any other, like gold.

**Q: How do you predict the Lightning Network will impact user privacy?**

A: There is great potential but it’s hard to say how it will play out. The devil’s in the detail. I’d say, on a wider conceptual level, absolutely better. The problem with Bitcoin privacy is that every node can verify every single transaction. Since everyone knows everything, it’s inherently bad for privacy, or very difficult to attain privacy. The Lightning Network flips this dynamic on its head.

You only share the opening transaction on-chain. The subsequent commitment channels update the state of this multisig script. These transactions are not propagated to the entire network, they are only visible to you and the peer you have opened the channel with.

Since Lightning Network is a network of payment channels, there is privacy when you route payments across this network. It uses a routing protocol called Sphinx, which is very similar to the Tor network’s onion encryption protocol. Every hop in a Lightning payment only knows the peer that passed the payment to it, and the peer they pass it to. They do not know who initiated the payment or who received the payment.

On a conceptual basis, the Lightning Network is already much more private than Bitcoin on-chain transactions.owever, there is still a huge amount of work to be done to reach its full potential in terms of privacy.

Although Lightning has the potential to be private, if we use bad implementations that do not follow best practices, or just carelessly give away our private information, then these privacy benefits suffer tremendously.

This is why libre open source software is so important. Bisq for example, is very transparent, you can see the code and who’s done what in the Github, and what they have done before. Same with Wasabi wallet.

So when a Lightning wallet company has a chain analysis subsidiary, you can be sure they are talking. It’s probably not the best choice to give entities like this your personal information.

**Q: I’m glad you mentioned Bisq because my next question is about Bisq. Have you used it to buy and sell Bitcoin?**

A: Yes, Bisq is one of my favorite exchanges if not my favorite exchange period because it is cypherpunk as fuck, as they say.

**Q: Awesome. Can you tell people how Bisq’s privacy differs from the privacy of a traditional exchange?**

A: Ok, with traditional exchanges, we can assume they are a centralized and custodial exchange. This is the edge between Bitcoin and fiat. We can’t use Bitcoin to its full potential, because we are held down by the weakest link in the chain (pun intended), which is of course, the fiat shitcoin.

We really need to be careful with whom we interact. It’s much easier and more convenient when it’s centralized and custodial, but this means giving up the private keys to your coins and losing control there. Then they do it with the fiat too, only making the exchange when they have both, ensuring that it can’t be double spent. It’s a classical middleman.

Trusted third parties are security holes. That was the problem Bitcoin was designed to solve and it does a damned good job of it, being a decentralized, trustless currency.  This is not the case on a traditional exchange. Bisq tries to solve this.

Bisq is very similar to Bitcoin itself, in the sense that it does not require a trusted third party. You don’t give up your private keys or your fiat. Bisq is very much designed to trade bitcoin preserving as much privacy as possible.

So, the way this works is that you’re the server. You host everything, and all the communication is done over Tor, and it’s end-to-end encrypted. Your private keys stay on your hardware, and nobody else can have access to your bitcoin, or your communications. This is already very private, but then you also connect directly to the server of your trading partner, there is no middleman server routing your communications. You communicate only with and directly with your trading partner over Tor.

The exchange is made leveraging the power of Bitcoin using a 2-of-3 multisig. This means the buyer and seller each have provided a private key, and so has an arbitrator provided by the Bisq DAO. This arbitrator will settle any disputes before releasing the coins to the correct recipient. Very rarely are these measures needed, since the fact they exist serves as a deterrent to scammers. I’ve never had a problem with anyone that I have traded with.

**Q: What are your thoughts as a Bitcoin maximalist, on the Bisq DAO and specifically the BSQ token?**

A: That’s always a great point of contention because we’ve seen that tokens can be used very badly. It’s a very new technology and we don’t know how to best apply it yet. 99.9% of all tokens in existence are shit and they are completely worthless in my opinion, and I’d never exchange them or hold them. I do believe that the concept of tokenization, is one that is very compelling if it’s applied correctly, and I’d argue that Bisq as a decentralized autonomous organization has a very interesting use case.

As decentralized as the protocol is, the process of building and maintaining the protocol is not, especially the distribution of fees. For example with Wasabi wallet, they are a company, it’s a completely centralized backend, they collect the fees and pay the developers.

With Bisq this isn’t possible. You are the exchange, so how do we collect the fees to compensate the contributors to the project? This DAO approach is a really good approach. It maybe can be done better, but so far, I think it’s well thought-out and that the incentives align. The basic use is to distribute value from those that use the platform to those that build it.

I mean building in a very general sense, software engineers, market makers, those doing documentation, educating about the platform, doing videos, etc. They can all be compensated in BSQ. BSQ can then be sold to the traders who use the platform, who then, in turn, use the BSQ token to pay trading fees with which they receive a 90% discount for using BSQ.

The nuances are quite complex and I probably can’t cover it all here. It’s something worth looking into because the token improves the platform and solves a critical pain point of centralization in an otherwise perfectly decentralized exchange.

**Q: Do you use Bisq paired with your own node or just the default way that comes installed with the software?**

A: Unfortunately the Bisq implementation is by default an SPV wallet (Simple Payment Verification) which means it doesn’t fully verify. It uses bloom filters (BIP 34) to verify the blocks.  You can, however, connect Bisq to use with your own Bitcoin full node which I am doing. This means that I am pulling all the blocks from my own locally verified node. I don’t communicate with anyone so nobody knows which addresses I am interested in. I am using Bisq with my Nodl (a Bitcoin full node which can be purchased from Nodl.it). My nodl has a full node, my Lightning node and BTCPay server running from there. I also use it with Bisq and Wasabi to pull the blocks from my own node for those apps. It’s always best to run your own full node and to do it over Tor if you can because it protects your IP address as well. You must control your own private keys as well.

**Q: In your opinion, will the Bisq DAO pose the same kind of risks to users as the now-defunct Ethereum DAO which was famously hacked?**

A: I am not 100% sure about the technical aspects of the Bisq DAO. BSQ is a colored coin on Bitcoin. They are regular Bitcoin UTXOs with a little bit of metadata attached to them. As far as I know, the colored coin implementation is rather secure, so I doubt we will have lots of code issues or bugs in the code, but I am not certain here.

The Ethereum DAO was completely different, with a use case as an investment vehicle, which is a lot more complex. As far as I know, the BSQ tokens only grant a voting right to token holders, on how many new colored coins should be issued and to whom they should be issued. The more you hold, the more powerful your vote will be. So it’s very different. There may be ways that it can be attacked, but is it better than having a centralized company which can be a single point of failure? The question is really one of trade-offs. It’s a fascinating experiment, I am still not a 100% convinced because it’s not even on mainnet yet, and we have to make sure it’s ready. Overall it’s a very interesting experiment and I am really excited about it.

**Q: Is there anything else about Bisq, the Bisq DAO, and Bitcoin privacy that we haven’t covered?**

A: Stay tuned, I would say. We have a lot of exciting things coming. For example, Pay to Endpoint transactions, Schnorr signatures which are a way to aggregate signatures and for hiding scripts, like Taproot or Graftroot which rely on Schnorr signatures. Now we can include complex scripts which can be included in this aggregated public key which is indistinguishable from an ordinary public key. Blockchain analysis won’t know if it’s a normal public key, a multisig key, or a script like Taproot, so this provides a lot of privacy in terms of spending your Bitcoin UTXOs. With Schnorr we might also be able to do things like Lightning Network Channel factories very easily with key aggregation.

## Conclusion

Well, there you have it. An excellent rundown of best practices in Bitcoin for preserving user privacy and how to use the Bisq Exchange. I want to give an extra special thanks to both the Bisq contributors, and Max Hillebrand of the World Crypto Network, for helping me make this information available to you.

If you’d like to help out and contribute to the Bisq open-source project,you can start [here](https://docs.bisq.network/contributor-checklist.html).

You can see Max’s shows—[Bitcoin to the Max](https://www.youtube.com/playlist?list=PLPj3KCksGbSZtGhC7nIr_Mf1oCeP8U1tV), [Open Source Everything](https://www.youtube.com/watch?v=41y_eGsdy2U&list=PLPj3KCksGbSb1h33FZbsrtr1feIIwTBHt), and [Bitcoin Optech Newsletter](https://www.youtube.com/watch?v=NAXwLHgYHjo&list=PLPj3KCksGbSY9pV6EI5zkHcut5UTCs1cp)—on the [World Crypto Network](https://www.youtube.com/user/WorldCryptoNetwork/).

Finally, you can check out my blog for more Bitcoin content like this, [right here](https://www.coincache.net). I hope this article was useful for you.
