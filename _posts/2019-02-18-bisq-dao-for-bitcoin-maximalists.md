---
layout: post
title: Bisq DAO for Bitcoin Maximalists
author: Steve Jain
excerpt: "Let's cut to the chase: the Bisq DAO is built on the Bitcoin network, and the BSQ token is just colored bitcoin.<br><br>"
---

<hr>

_Steve contributes writing in the form of documentation, copywriting, media correspondence, and more to the Bisq network. Follow him [here](https://jain.io)._

_If you'd like to contribute a post, please reach out on [Slack](https://bisq.network/slack-invite) or [on our forum](https://bisq.community/t/call-for-blog-writers/7040)!_

<hr>

Let's cut to the chase: the Bisq DAO is built on the Bitcoin network, and the BSQ token is just colored bitcoin.

Bisq needs a DAO to decentralize its own governance, so that it can become as resistant to censorship as possible.

Furthermore, note that Bisq has already been in operation for almost 3 years, and it makes real revenue right now. **This is not a capital raise.**

## Not a company

**Bisq is not a company or legal entity of any kind**, so new tools are needed to handle governance functions (decision-making and revenue collection) that an entity would otherwise handle.

You may counter that Bisq is working just fine right now without a DAO. And you'd be right, kinda.

Observe:

![DAO Before/After](../../images/dao-before-after.png)

The network functions just fine for traders in both cases: it's distributed with no single points of failure.

But take another look at the left panel. See how all trading fees go to one place? And how decision-making is largely concentrated in that one place too? That's not fine. Governance is so centralized right now that Bisq might as well just become a company.

But the ambition is greater:

* Is it possible to operate the project with no central decision-makers?

* Is it possible to collect and distribute revenue without any central financial accounts?

The Bisq DAO and BSQ token are answers to these questions. They've been devised over the past ~5 years, tested over the past several months, and will soon be deployed on Bitcoin mainnet.

## Common Misconceptions

We've explained how the Bisq DAO works elsewhere ([here's a write-up](https://docs.bisq.network/user-dao-intro.html) and [here's a short video-series](https://www.youtube.com/playlist?list=PLFH5SztL5cYPAXWFz-IMB4dBZ0MEZEG_e)), so we won't cover those details here.

Instead, we'll cover common questions and misconceptions:

**Is Bisq launching a token because it needs money?**

No. The BSQ token does not raise capital. Its purpose is to route trading fees from traders to contributors without any financial accounts.

Bisq has bootstrapped itself to facilitate 22,000+ total trades in the ~3 years since April 2016. It makes real revenue right now.

**All tokens are useless. So why create one?**

Many tokens seem to lack utility since they're issued by legal entities like companies and foundations. Often, these entities could accomplish their goals without tokens.

However, when there is no entity, as in Bisq's case, things change. New tools are needed to collect revenue and make policy. Where can revenue be collected if there is no central wallet? Who determines policy if there is no leadership team?

**Explain to this to me, simply. Please.**

Here's a concrete example of how this mechanism allows traders to pay contributors without any central wallets. We use round numbers for simplicity.

Developer does $1000 of work on Bisq software. He requests $1000 of BSQ, and includes 1000 satoshis with his request. DAO stakeholders vote to approve his request, coloring his 1000 satoshis into BSQ worth $1000. Traders buy this BSQ with $1000 of BTC, and then use the BSQ to pay trading fees.

BSQ is just a placeholder for a BTC payment until the other party is known. The DAO is just a mechanism for collective decision-making in the absence of a CEO.

**Isn't that just creating money out of thin air? That's sketchy.**

BSQ token issuance mirrors the act of human labor: the very act of human labor is creating something out of nothing. Take a developer, for instance. When they implement a feature, they'll add code where there wasn't any before. If they do it right, the code they added will result in new functionality. Voilà! They've just created something out of nothing.

The BSQ token is a tool to capture this newly-created value in an exchangeable medium. Bitcoin miners create money out of thin air too, right? This is no different, just with human labor and subjective validation instead of machine labor and automated validation.

**Why can't you just do this with plain bitcoin?**

Because the sender of bitcoin is not known when compensation is earned.

Consider trading fees. You need a sender and a recipient to do a Bitcoin transaction, right? But there's a gap between the time a contributor does work and the time a trader places a trade, and nowhere to hold the value to be transferred in the interim. BSQ is a tool to hold the value of a contributor's labor until a trader shows up to pay for it.

**Practically, what changes for me as a user?**

Not much. You can choose to continue paying trading fees with BTC, or you can choose to pay trading fees with BSQ. If you choose BSQ, you'll just have to buy BSQ first.

**Why would I go to the trouble of buying BSQ?**

BSQ trading fees will be dramatically cheaper than plain BTC trading fees, at first. Also, the BTC you pay to buy BSQ actually goes to Bisq contributors and helps sustain the project.

**Will I be required to use BSQ to trade on Bisq?**

No, you can choose to continue paying trading fees with plain bitcoin instead of BSQ—just note that you'll pay more than you would pay by using BSQ, and that your fees won't help to sustain the project since they won't be routed to Bisq contributors.

**But...Bisq works just fine without a token right now. Why do a token?**

Because Bisq is adapting its governance model. It's going from a centralized control structure (funding and policy determined by founders) to a decentralized control structure (funding and policy determined collectively by users and contributors).

With the old model, all fees went to arbitrators. The new model enables fees to be distributed meritocratically to all contributors, and a token is needed to make it work.

**Why is Bisq adapting its governance model?**

Because decentralized software is not good enough. What's the point, if the team in charge of the software is still a single point of failure?

This is why we call it the Bisq Network and not the Bisq Project. This has been the plan from the beginning.

**What is the issuance schedule for BSQ tokens?**

New BSQ is issued every time a contributor's request is approved through DAO voting. BSQ issuance is not a one-time event. Issuance is not a capital raise like an ICO—it happens continually as contributors do work.

BSQ is also burned out of existance continually as traders use it to pay trading fees.

This issuance and burning creates a scarcity dynamic for the BSQ token.

**Many tokens sound good in theory. How do you know yours will work in practice?**

Good question. Theory cannot be tested until it's put into practice. However, quite a few aspects of the token and DAO have already been put into practice. People have been paying real bitcoin to use Bisq for almost 3 years now, so the token must have value at launch.

As for the DAO, Bisq contributors have approximated DAO functions with 'low-tech' tools like GitHub and Google Sheets for several months. The DAO merely formalizes these processes.

## Learn More

And here's the first of a series of short videos we made on the Bisq DAO:

<div class='responsive-youtube-container'>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLFH5SztL5cYPAXWFz-IMB4dBZ0MEZEG_e" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

It's fair to question whether Bisq needs to avoid organizing itself under a legal entity, but if you can accept that doing so could have benefits, then a DAO and token are the only reasonable ways to make it work.
