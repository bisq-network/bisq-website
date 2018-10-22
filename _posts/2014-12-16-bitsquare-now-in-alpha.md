---
layout: post
title: "Bitsquare: Now in Alpha"
author: Chris Beams
---
After many months of research and development, we're excited to announce the release of [Bitsquare v0.1][1]. This marks the beginning of our alpha phase and the first major milestone on the road to a fully-functional Bitsquare v1.0.

### What is Bitsquare?

If you're reading this, you've probably gathered that Bitsquare is a _decentralized bitcoin exchange_. Perhaps you've watched the [explainer video][2] as well. Let's get a bit more specific, then—Bitsquare is a system designed to allow people to exchange bitcoin for national currencies, and it's comprised of three major components:

 1. the Bitsquare client: a cross-platform, open source, JVM-based desktop application;
 2. the Bitsquare network: a distributed hash table (DHT) loosely similar to that used in BitTorrent;
 3. the Bitsquare protocol: a secure approach to trading and arbitration using bitcoin's built-in multi-signature transaction capabilities.

Together, these components form a peer-to-peer system without centralized control and without single points of failure. That's what _decentralized_ means to us, and if that description reminds you of bitcoin itself, that's good, because Bitsquare was designed to reflect bitcoin's own principles and philosophy. Simply put, Bitsquare is built on the idea that individuals should be free to engage in mutually beneficial exchange without sacrificing the privacy of their personal information or the security of the funds being traded.

One way to think about Bitsquare is to imagine what a [Satoshi Square][3] meeting might look like if it were held online—in fact, that's where the _square_ in Bit_square_ comes from. Satoshi Squares happen all over the world, and they're all about regular people getting together to buy and sell bitcoin in a safe space. And that's what Bitsquare is about too. Our primary goal is not to build a highly sophisticated platform for day traders—it's to build a secure, privacy-respecting, and user-friendly way for everyday people to buy and sell bitcoin from anywhere in the world.

In short, we think the bitcoin ecosystem deserves an exchange option that is as decentralized and robust as bitcoin itself. We hope you do too—and if you do, you probably have many questions about how it all works. The [white paper][4] and [FAQ][5] are great places to start getting those questions answered. We look forward to diving into all the specifics in future blog posts and videos, but don't hesitate to reach out and ask questions directly in the meantime.

### Who is Bitsquare?

The Bitsquare core team is Manfred Karrer, Chris Beams, Steve Myers, Richard Myers and Lloyd Johnson. We've been fortunate to have the help of many other contributors along the way, and we're on the lookout for additional developers and security experts to join us.

Our team members live in the US, Europe and Australia, and have come together to work on Bitsquare out of mutual passion for bitcoin's potential and the belief that decentralized exchanges are a critical infrastructural element currently missing from the bitcoin ecosystem.

We are not—and do not intend to become—incorporated as a business of any kind in any jurisdiction. We're a global group of developers and technologists committed to making Bitsquare's decentralized exchange a reality—nothing more, nothing less. To sustain and accelerate our development efforts, we'll raise money through crowdfunding on a per-milestone basis, starting with our next milestone (v0.2). We'll be announcing complete details soon; in the meantime, feel free to take a look at our [crowdfunding][8] and [governance][9] docs.

### The road to 1.0

For the last several months, Bitsquare has been in a _pre-alpha_ state, meaning that while certain use cases for the system have been working for a while already, we hadn't yet created installers and user guides and everything else necessary for non-developers to simply download and use Bitsquare. This was primarily because we were occupied with network stability and other fundamental issues that often prevented Bitsquare from practical use outside the context of development and debugging.

As mentioned above, Bitsquare is now in _alpha_ with today's release of version 0.1. This means:

Sounds pretty good so far, right? Well, here's the _alpha_ part:

 - All bitcoin operations take place on the bitcoin [testnet][10] during the alpha phase. This means you can't trade "real" (mainnet) bitcoins yet, and you'll need to get test coins from a [testnet][11] [faucet][12].
 - Because real bitcoins aren't being traded, no real national currency is traded either. We recommend "simulating" this step of the protocol with your trading partner via chat or email.
 - Because the project is still young, Bitsquare's offer book may be empty at any given time, meaning you may need to seek out a trading partner. You might want to ask a friend or find someone in the [#bitsquare-trading][14] IRC channel.
 - Depending on your network configuration and router equipment, you may have issues connecting to the Bitsquare network. For example, you may need to [configure manual port forwarding][15] on your home router.

There are other limitations as well, but hopefully you get the idea—Bitsquare is working software, but it's _alpha-quality_ working software. You should expect a few bumps, but we hope you'll join us for the ride anyway.

We've published a [roadmap][16] detailing a series of nine milestones on the way to Bitsquare v1.0. Today we're releasing v0.1. The next milestone release will (unsurprisingly) be v0.2, and so on. Bitsquare will keep its _alpha_ designation for as many milestones as necessary until it becomes reasonable to begin testing small trades on the bitcoin mainnet. At that point, we'll announce that Bitsquare is in _beta_, and of course this will mean the start of real national currency trading as well.

Bitsquare will exit _beta_ with the release of v1.0, which we're setting a high bar for. To us, v1.0 means that users must be able to expect with a high degree of certainty that their information and funds are safe under any condition or failure mode, and that in the case of a dispute or misunderstanding, Bitsquare's decentralized arbitration system is standing by to help. The release of v1.0 will also carry with it [certain guarantees][17] about interoperability and compatibility with subsequent versions of the software.

### Next steps

[Take Bitsquare for a spin right now][1] if you like—we'd love to hear your feedback. Perhaps you'd like to join us for one of our upcoming [Bitsquare WAN parties][18], in which we get together in larger groups via IRC and put Bitsquare through its paces. They're a great way to get to know the application, the team, and other folks helping to make Bitsquare a reality. To stay up to date you can [subscribe to the blog][19], [newsletter][20] and/or join the [Bitsquare mailing list][21]. In any case, stay tuned—this is just the beginning.

[1]: https://github.com/bitsquare/bitsquare/releases/v0.1.0
[2]: https://vimeo.com/113838717
[3]: https://twitter.com/SatoshiATX
[4]: /docs/bitsquare.pdf
[5]: /faq/
[8]: /crowdfunding/ (not online anymore)
[9]: /governance/ (not online anymore)
[10]: https://en.bitcoin.it/wiki/Testnet
[11]: http://faucet.xeno-genesis.com/
[12]: http://tpfaucet.appspot.com/
[14]: http://webchat.freenode.net/?channels=bitsquare-trading
[15]: https://github.com/bitsquare/bitsquare/wiki/How-to-setup-port-forwarding
[16]: /roadmap/
[17]: http://semver.org/
[18]: https://github.com/bitsquare/bitsquare/wiki/Bitsquare-WAN-Parties
[19]: /blog/feed.atom
[20]: http://bitsquare.us9.list-manage.com/subscribe?u=fee3c64b1504e7835a98b0ed3&id=dc09b9ca64
[21]: /community/#mailing-list
