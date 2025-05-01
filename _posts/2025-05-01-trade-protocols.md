---
layout: post
title: "Bisq Trade Protocols"
author: HenrikJannsen
excerpt: "Dive into the evolution of Bisq’s Multisig protocol and see how Bisq 2 is laying the foundation for a modular, multi-protocol trading platform."
lang: en
---


#### What is a Trade Protocol?

You can think of a trade protocol like a recipe: it lays out the steps to follow, the ingredients (data) to use, and the expected result — ideally a completed trade, or, if something goes wrong, a clear way to resolve it.

More specifically, it’s a set of rules that two people follow to exchange assets — like Bitcoin for fiat — in a **secure and predictable** way.

It covers:
- What each party needs to do
- What data they need to share (like payment info or signatures)
- And how to handle problems if they come up

What really matters is that the protocol keeps things **secure at every step**, even if the traders don’t know or trust each other. It ensures the trade either completes safely or there's a fair resolution.

without a central authority.


#### Designing a Good Protocol

Bisq’s core value proposition is protecting user privacy. This sets it apart from centralized exchanges, but also introduces unique challenges and constraints.

To achieve strong privacy in the face of surveillance and coercive authorities, Bisq must be decentralized. Decentralization is not optional — it is the only reliable guarantee of censorship resistance, which in turn is essential to preserving user privacy.

This fundamental requirement defines the boundaries of what Bisq can or cannot do. Any compromise on decentralization would undermine the project’s very reason for existence. Therefore, **censorship resistance through decentralization in service of user privacy** is the foundation upon which every Bisq trade protocol must be built.

Beyond this non-negotiable principle, protocol design at Bisq is shaped by balancing three key factors:

* **Security**
* **Privacy**
* **Convenience** (including accessibility, cost, and ease of use)

It's important to recognize that these dimensions often conflict. Maximizing both security and privacy typically comes at the cost of convenience — for example, requiring users to run a full node.

A protocol that offers best-in-class security and privacy but is too difficult to use will struggle to gain adoption. Without users, an exchange cannot fulfill its purpose. Conversely, small trades may not require maximum security, allowing for reasonable trade-offs to improve usability.

**Bisq Easy** is a reflection of such a compromise — offering a simpler user experience by easing some constraints, while remaining true to Bisq’s core principles.

This is why **Bisq 2 introduces a modular platform**, enabling multiple trade protocols to coexist. Users can select the protocol that best matches their needs and context — whether that’s stronger security, more privacy, or greater convenience.

Before we explore the trade protocols on Bisq’s roadmap, let’s take a step back and look at how the original Multisig trade protocol evolved over time.


### Evolution of the Bisq Multisig Trade Protocol

Bisq (formerly Bitsquare) launched in 2016 with a Multisig-based trade protocol. Over time, this protocol has evolved significantly and will receive a major upgrade with the introduction of **Bisq MuSig** in Bisq 2.

Here is an overview of the key differences across the three generations of the protocol.

#### [First Generation: 2-of-3 Multisig](https://github.com/bisq-network/bisq/releases/tag/v0.4.6)

At launch, Bisq used a 2-of-3 Multisig trade protocol where arbitrators — selected randomly from a pool — held the third key.

While this setup was relatively simple and effective in the early days, it came with significant limitations in terms of **scalability**, **security**, and **regulatory exposure**.

One risk involved **malicious arbitrators**: a dishonest actor could run a Bisq node as a trader while simultaneously being selected as their own arbitrator, enabling them to collude and defraud the counterparty. This threat could be partially mitigated by requiring arbitrators to have “skin in the game,” such as bonded capital or a strong reputation.

A more serious and harder-to-contain threat was the possibility of a **hacked arbitrator**. If an attacker gained control over the arbitrator’s application, they could cause widespread damage — for example, by sweeping the offer book and stealing all locked funds (especially from sell offers), or by baiting takers into fraudulent trades.

While this was a tolerable risk during Bisq’s bootstrapping phase, when trading volumes were still low, it posed a severe **scalability issue**. As Bisq grew, so did the potential damage — potentially reaching into the millions. That level of incentive would inevitably attract sophisticated attackers.

Another concern was **legal and regulatory uncertainty**. Because arbitrators held one of the Multisig keys, they could be interpreted as financial intermediaries — especially given the very real risks mentioned above. Regulatory scrutiny tends to focus on systems where users are exposed to trusted third parties, and under this model, arbitrators could be seen as such.

Like the hacking risk, this too became a **scalability constraint** — the more successful Bisq became, the more likely it would draw legal challenges.

These issues made one thing clear: a more resilient, trust-minimized model was needed. The involvement of a third party introduced significant risk — and had to be eliminated.


#### [Second Generation: 2-of-2 Multisig](https://github.com/bisq-network/bisq/releases/tag/v1.2.0)

With the launch of the Bisq DAO, new possibilities emerged that finally allowed these issues to be addressed.

In 2019, with Bisq version 1.2.0, the trade protocol was significantly improved by removing the third key-holder. Now, only the two traders control the keys to the funds.

In case of a dispute, two resolution levels were introduced:

##### [Mediation](https://bisq.wiki/Dispute_Resolution_in_Bisq_1#Level_2:_Mediation)

The mediator helps traders find a cooperative payout. The mediator **has no control** over the funds and cannot enforce any outcome. If no agreement is reached, the case escalates to arbitration.

##### [Arbitration](https://bisq.wiki/Dispute_Resolution_in_Bisq_1#Level_3:_Arbitration)

To initiate arbitration, a trader publishes the **delayed payout transaction**, which sends all trade funds to the Bisq DAO using the [Burningmen system](https://bisq.wiki/Dispute_Resolution_in_Bisq_1#Burning_Men_Protocol), where BTC is converted into burned BSQ.

This transaction is signed by both traders at the beginning of the trade and is time-locked:
- 20 days for fiat trades
- 10 days for altcoin trades

The arbitrator then conducts a second round of dispute investigation and issues a signed resolution statement. The winning party can file a compensation request with the Bisq DAO, which is expected to get approved by DAO stakeholders.

The trader receives compensation in BSQ, which can be sold for BTC on the Bisq market.

To simplify this process, Bisq introduced the optional **refund agent** role. This agent exists solely for convenience, allowing users to delegate the reimbursement process. In most cases (subject to limits and availability), the winning trader receives the refund directly in BTC from the refund agent.

This design **eliminated the third-party** key-holder and instead utilizes the DAO, reducing security risks through layers of human interaction (mediator, arbitrator) and decentralization (DAO voting, Burningman).

#### [Third Generation: Bisq MuSig](https://github.com/bisq-network/proposals/issues/456)

Bisq 2 introduces a major advancement with the implementation of **MuSig**.

MuSig is a cryptographic scheme based on Taproot and Schnorr signatures, allowing the creation of trade transactions that are indistinguishable from regular Bitcoin transactions — **significantly enhancing privacy**.

This protocol also reduces the number of on-chain transactions per trade **from four to one**, resulting in lower fees, especially when miner fees are high.

An additional improvement is the **staged payout structure** in dispute scenarios. If one party is unresponsive (which accounts for the majority of arbitration cases), the responsive peer can receive the funds without entering arbitration.


### [Bisq 2 — A Platform for Multiple Trade Protocols](https://bisq.network/blog/bisq-2-now-in-beta/)

The following is an overview of the roadmap for the various trade protocols planned for Bisq 2.

#### [Bisq Easy](https://bisq.wiki/Bisq_Easy)

With the launch of Bisq 2, we introduced Bisq Easy — a new protocol designed specifically for Bitcoin beginners.

Unlike the Multisig protocol, where both traders need to lock up Bitcoin as a security deposit, Bisq Easy removes that requirement — making it accessible for users who don’t yet own any Bitcoin.

Its security relies on a **reputation system**, leveraging both the Bisq DAO and reputation carried over from Bisq 1:
- Burning or bonding BSQ
- Signed account age witness or account age from Bisq 1

##### How it works:

- The **buyer pays the fiat amount first**.
- After receipt, the **seller releases the Bitcoin**.
- No multisig. No security deposit.

In this system, **reputation is backed by financial commitment**. For example, a seller who has burned $800 in BSQ can trade up to ~$200. This strong economic commitment makes fraud highly unlikely.

The protocol includes a **global trade limit of $600**, with individual trade limits based on seller reputation. Buyers do **not** need any reputation.

This protocol trades off some security in exchange for:
- Greater accessibility (no Bitcoin needed for buyers)
- Flexibility (allows usage of Lightning)
- Convenience (simple chat based interface)


#### [Bisq MuSig](https://github.com/bisq-network/bisq-musig)

Development of **Bisq MuSig** is already in progress, with the aim of delivering it in the coming months.


#### Bisq Lightning

This protocol will enable trading **Lightning BTC for fiat**, while maintaining the same level of security as Bisq MuSig.

It will be composed of several modular protocols that will be implemented and released incrementally:


##### Submarine Swap + Reverse Submarine Swap

Enables conversion between on-chain Bitcoin and Lightning Bitcoin in both directions.


##### Bisq MuSig on Liquid

Ports the MuSig protocol to the **Liquid sidechain**, enabling confidential transactions and forming the core of the Bisq Lightning trade engine.


##### Liquid Submarine Swap + Reverse Submarine Swap

Enables conversion between **Liquid BTC** and **Lightning BTC**, necessary for the complete Bisq Lightning flow.

Once all pieces are in place, Bisq Lightning will operate as follows:
- Converting LN BTC → Liquid BTC
- Using Liquid BTC to fund the MuSig trade
- Converting back to LN BTC after trade completion

From the user's perspective, the process is mostly seamless:
- LN BTC in → LN BTC out + fiat transfer
- No need to interact directly with Liquid BTC


#### Liquid Swaps

With all underlying infrastructure in place, **atomic swaps of Liquid assets** will be a logical and low-effort next step.


#### Monero Swaps

Another major initiative will be the implementation of **XMR-BTC atomic cross-chain swaps**, based on the **Farcaster** protocol. This will enable highly secure and frictionless trading between Monero and Bitcoin.


#### BSQ Swaps

BSQ swaps from Bisq 1 will be ported to Bisq 2.

---

### Challenging Roadmap

We’ve got a lot to build — and we’re excited to get to work.
If this sounds like your kind of challenge and you’ve got the [right skills](https://bisq.network/blog/bisq-needs-senior-java-developers/), we’d love to hear from you — [get in touch](https://bisq.chat)!
