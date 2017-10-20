---
layout: post
title: New P2P network
author: Manfred Karrer
---
Some of you might ask what causes the delay of the beta release which was planned for that summer.
The reason for the delay is a change in a fundamental part of the application – **the P2P network**.

_The following might be a bit technical. If you are not interested in those details you can skip to the last paragraph as well._

### DHT

Bitsquare used [TomP2P][1] which is the most mature Java [DHT][2] implementation available and I was lucky to get the author – [Thomas Bocek][3] – on board to help to fix the open issues with [Nat traversal][4].
Those issues was the source of a constant concern since the project start as for any P2P network it is a big challenge to overcome the restrictions set up by NATs and firewalls to avoid that nodes are accessible from other nodes in the internet.

### Tor

[Bernd Prünster][5] introduced another idea to me which turned out to not only solve the NAT problematic but also helps to mitigate other open issues I had with a DHT solution: Using a Tor proxy to delegate the network traffic over [Tor][6] and therefore delegate the NAT problematic to Tor, which has solved that to a very satisfying level (they even pass through Chinas great firewall).

But no worry the Bitsquare user don't need to do anything. It is all integrated into the application and no special setup is required. There are also no performance drawbacks with the small amount of data sent by Bitsquare.

Using Tor not only solved the network connectivity issues but also adds the high level of anonymity Tor provides to Bitsquare. In fact we use Tors [Hidden Services][7] for every node to make the P2P communication completely anonymous ([as far Tor provides that][8]).
That solved another open issue with the previous solution: The offerer need to be able to get contacted by a taker and therefore leaked his IP address when publishing an offer.
Now there are no IP addresses used but onion addresses. Those cannot be used to reveal the real location or identity of the user and that previous privacy issue is therefore solved.

### Flooding network

The network routing algorithm used to transport the data (offers) previously stored in the DHT to all users is now a [flooding][9] (or gossiping) algorithm. A similar one is used in Bitcoin to provide a very robust P2P network with less vulnerabilities as a structured network like a DHT.

More sophisticated and effective routing algorithms like [Kademlia routing][10] which is used in DHTs come with a serious Sybil attack risk, as anyone who can control certain nodes could control the storage of certain data. The problem is that the network ID creation is free and the network ID is used to derive the storage location. So  you can create a huge amount of netwok IDs and then select those which are giving you the control over the data storage location of the data you want to control.
That vulnerability is mitigated with the flooding algorithm as every node stores everything.

Satoshi has chosen the flooding algorithm for Bitcoins P2P network to obtain a highly decentralized and randomized network structure which is very important to secure the network against hostile takeover of parts of the network.
Though it came with some costs regarding resource usage. As we know, every full node in the Bitcoin network has to store 50 GB of blockchain data.
Luckily Bitsquare uses very small amount of short living data and the number of nodes will be much smaller as well. I estimate there will be data storage requirements of a few hundreds of Kilobytes or a few Megabytes. Each data has an expiration date, so our requirements will not cause any scalability problems.

Additionally to the publicly readable data like the offers there are data stored which need to remain private. There are trade process messages which are stored in a kind of mailbox in case the peer is offline. Those data are encrypted and signed and also sent to every node for storage. Only the receiver (who has the private key) can decrypt the data. A similar approach is used in [Bitmessage][11].

### Current state

Of course **building a custom P2P network** is a task which **needs time and caution**. That's what causes the delay in the [roadmap][12] to release the Beta version.
The new network is basically already implemented in the application but it is not completed yet.

I hope that we can release the Beta version in about 2-6 weeks.

[1]: http://tomp2p.net/
[2]: https://en.wikipedia.org/wiki/Distributed_hash_table
[3]: http://www.csg.uzh.ch/staff/bocek.html
[4]: https://en.wikipedia.org/wiki/NAT_traversal
[5]: https://github.com/JesusMcCloud
[6]: https://www.torproject.org/
[7]: https://www.torproject.org/docs/hidden-services.html.en
[8]: https://www.torproject.org/docs/faq.html.en#AttacksOnOnionRouting
[9]: https://en.wikipedia.org/wiki/Flooding_%28computer_networking%29
[10]: https://en.wikipedia.org/wiki/Kademlia
[11]: https://bitmessage.org/
[12]: /roadmap/
