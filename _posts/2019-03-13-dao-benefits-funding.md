---
layout: post
title: "Benefits of the Bisq DAO, Part I: Funding FLOSS & Avoiding Surveillance Capitalism"
author: Steve Jain
excerpt: "The Bisq DAO enables value transfer and decision-making for the Bisq network. But it has several additional benefits too, which we'll focus on in this series.<br><br>In this post, Part I of this series, we'll discuss how Bisq's revenue model offers a new approach to funding open-source software development that, by design, avoids incentives to exploit user privacy altogether.<br><br>"
---

<hr>

_This is an essay which contains some subjective statements. Steve contributes documentation, copywriting, speaking, media correspondence, and more to the Bisq network. Follow him [here](https://jain.io)._

_If you'd like to contribute a post, please reach out on [Slack](https://bisq.network/slack-invite) or [on our forum](https://bisq.community/t/call-for-blog-writers/7040)!_

<hr>

At the [MIT Bitcoin Expo](https://mitbitcoinexpo.org/) this past weekend, funding open-source software development was a topic of high interest. Arjun Balaji's whole talk was focused on the topic, and a number of people approached me after my panel discussion wondering how the Bisq DAO worked to fund the project without any kind of external fundraising.

The Bisq network's approaches to the challenges of funding open-source software and governing a revenue-earning operation are novel, and I had a great time discussing them with people at the event.

In this post, we'll cover the practical _results_ of these approaches from a financial perspective: how an integrated revenue model—coupled with decentralized governance—results in an open-source software project that can grow and prosper on its own, while actually being _incentivized_ to protect its users' privacy.

_Since we’ll be discussing the benefits of the Bisq DAO, this post assumes you already know a little bit about it. You can learn the basics with [this video series](https://www.youtube.com/playlist?list=PLFH5SztL5cYPAXWFz-IMB4dBZ0MEZEG_e) or [this doc](https://docs.bisq.network/user-dao-intro.html)._

## 0. A Note on DAOs

You may have come across the term 'DAO' before. As covered [here](https://docs.bisq.network/user-dao-intro.html#what-is-a-dao), a decentralized autonomous organization (DAO) can be considered a generic term for a governance model sanctioned by software instead of by a state.

A DAO can be made for any purpose, just like a company can be: DASH uses a DAO to manage its cryptocurrency, while Moloch uses a DAO to allocate capital to projects in the Ethereum space.

Bisq, on the other hand, will soon use a DAO to manage the funding and governance of its bitcoin exchange software: a business-like service with day-to-day operations, revenue, strategy, etc.

Bisq's DAO is designed to conquer a different challenge with a different set of complexities from the other examples above.

## 1. Funding the Project

Bisq is open-source software, but that misses some important nuances. It's also free/libre software that provides users the same 4 freedoms Richard Stallman outlines as fundamental to free software:

* freedom to run the software as you wish, for any purpose
* freedom to study how the program works, and change how it works
* freedom to redistribute copies (e.g. to help your neighbor)
* freedom to distribute copies of your modified version to others

The only restriction is a practical one: if you do choose to distribute your own copy of the software, you must use a different name and logo so that users don't confuse your version for an official release by the Bisq project.<sup>1</sup>

Great for users, right? But how can such software make any money?

In his writings, Stallman points out that the 'free' in 'free software' refers to freedom, not price, so free software vendors can price their software as they please.

#### Typical Approaches to Funding: External

Practically, however, charging for free software (and really, any software) is difficult. In the past, when software was distributed on floppy disks and CDs, one could charge for the convenience of obtaining the software on physical media.

But nowadays, the internet makes copying and distributing software trivial and almost free. In addition, software is expected to be maintained in perpetuity, so one-time payments aren't enough.

As a result, many software projects rely on donations to fund development: donations of time from developers who maintain software as a labor of love, and donations of money from users who are particularly fond of the software.  [Other models exist](https://en.wikipedia.org/wiki/Business_models_for_open-source_software) to fund software development such as sponsorships, selling professional services, selling the software as a service, etc.

These can all be fine means of sustaining software projects, and some projects have used them quite successfully.

But most of these conventional models for monetizing software have one thing in common: they’re all external to the software itself. On one hand, there’s the code, and on the other hand, there’s some kind of a scheme to make improving the code worthwhile.

#### Bisq's Approach to Funding: Integrated

Bisq takes a different approach: it looks inward. It charges a small fee for using the software, right from within the software itself. Specifically, Bisq users pay trading fees: the Bisq software enables a peer-to-peer marketplace, and users pay a small fee every time they make or take offers in the marketplace.

These fees bring in the funds to sustain the various functions of the Bisq project: development, design, documentation, etc.

Of course, there are 3 critical advantages Bisq has here that many software projects don't have:

* users perceive paying trading fees as a natural occurrence when using a digital marketplace
* the means to make payments are neatly weaved in to the natural experience of using the software
* fees are charged in bitcoin, so no external payment services need to be trusted for processing, and users can remain anonymous

The third advantage is one that anyone can replicate—just start accepting bitcoin—but the first two are a bit trickier.

#### Applying an Integrated Approach to Other Projects

The first item in that list is perhaps the biggest obstacle for other software projects, as it’s a product of social conditioning: people just don’t ever expect to pay for software. Opportunities to charge users fees in the natural flow of an application are exceedingly rare.

In my opinion, this is partly because developers have been too generous over the years. Consumers don’t think twice about paying for food in a restaurant or buying goods in a store. Yet they'll balk at paying a one-time 1 USD fee for an app that we expect to work perfectly for the rest of time.

Over time, many developers have just resorted to giving their software away for free for the attention, resume boost, and other ancillary benefits. The situation is even worse in the open-source world, such that many people now act as if “open-source” means “it magically appeared out of nowhere” and are often disgusted with requests to support software they appreciate. Ask me how I know.

Hence the prevalence of external funding models.

Hopefully Bitcoin and emerging technologies like Lightning can help reverse this dynamic and reduce the friction of integrating revenue models directly into software. Specific ideas and approaches to achieve this are beyond the scope of this article, but I really hope developers take the liberty to experiment. Bitcoin is sound money, sure, but it’s also natively digital money that might be able to help us monetize good, well-intentioned software more gracefully.

Bisq proves it’s possible.

If you can conquer the sociological and psychological challenges to integrating a revenue model into your software, the result can be elegant and empowering: no need to worry about consulting clients, appeasing sponsors, or anything else—just focus on the software!

## 2. Ensuring User Privacy

Furthermore, and perhaps even more profound is that an integrated revenue model can power a totally new business dynamic—one that protects user privacy by design.

Whereas most other ventures are incentivized to exploit user privacy, Bisq is actually incentivized to protect user privacy.

Let's see how this works.

#### Background: Data-Gathering

Most digital services are operated by for-profit companies. You’ve probably heard of some of the more notable ones like Facebook, Twitter, and Google.

Lately, awareness of these companies' pathetic privacy practices has gone mainstream. People are realizing that these big technology companies are unscrupulous mercenaries, and that their most personal data is actually stored to sell (not for their convenience, or whatever pretty marketing-speak they give you).

But how did we get here? Why is it that we’re dealing with these egregious privacy violations now?

In the not-so-distant past, our most sensitive personal data could only be accessed by select institutions: those in government, healthcare, finance, etc. While these sectors surely sold customer data for profit, such activity was relatively minimal. Regulation probably had something to do with it, but the technology to collect and store data was relatively primitive and expensive.

There was a practical limit on the extent of data that could be collected, stored, and leveraged in the first place.

In the past few years, however, that’s all changed. Almost every service you interact with can (and probably does) collect vast amounts of data on you with minimal cost, whether through mobile apps, website analytics, or through other (often more nefarious) means.

For these modern digital services, collecting data is just a part of smart business. Businesses gain deep insights to help them optimize their services, strike partnerships, and develop new products. Rational profit-maximizing business owners have no reason _not_ to collect as much data as they can.

#### Result: Privacy Predicament

Gathering data may be a perfectly fine business practice with a perfectly good business case, but the result is rather odd: **accumulated data becomes a hugely valuable asset**.

It's a rather peculiar dynamic: a company can gradually accumulate a productive asset _merely_ through the normal course of its business operations.

That would be like me earning a bonus at my job purely because I ate, slept, and breathed on a regular basis...

So, what should a company do with all this data? Should they just disregard it in the name of moral superiority? Act as if it doesn't exist? Miss Wall Street's profit expectations? Ha! Fat chance.

This is where the issues start.

While companies are not required by law to maximize profit, in practice, the incentives for company executives to do so are overwhelming. Investors need returns, executives want big paydays, media vies for attention, and everyone is hungry for power and status—and the result is whatever can be monetized will be monetized, and so, data collected is data sold.

#### A Better Way: Beyond the Corporation

_But that's capitalism_, you retort. Companies exist to offer services and earn money, and they’ve always been exploitive, but the market will eventually react and handle them. It’s not a great economic system, but it’s the least worst alternative.

Sure, but what if we could align incentives better to discourage such activity in the first place?

The issue, I contend, is not the pursuit of profits. Profits are powerful indicators of progress and essential to enabling innovation for further progress. The issue is with how profits are incentivized.

With a company, you see, all resources (and returns on those resources) are centralized in one place. The more resources a company gathers for itself, the more capable it becomes to generate profits: more people, more capital, more sales, more partnerships, more brand prestige, and more data all lead to more profits.

This is why every company has entire functions dedicated to maximize the accumulation of these resources—more of all these things generates more profits for the mothership.

**But what if there were no mothership? What if a profit-generating operation had no central entity to accumulate assets and collect profits?**

Is there a way to maintain the benefits of having a company (i.e., low costs to coordinate professional cooperation<sup>2</sup>), and maintain the profit motive, but do away with the centralization of profits? Perhaps create some hybrid of an operation that coordinates the efforts of a group of people, but decentralizes the operation's assets and revenue collection?

The Bisq DAO offers a mechanism for achieving this, and the result is a huge win for user privacy.

#### The Bisq DAO: A Capitalistic Model that Encourages Privacy Protection

As we’ve mentioned elsewhere, Bisq is not a company or legal entity of any kind. It’s a network composed of:

1. users running the Bisq software and interacting over its peer-to-peer network
2. contributors who build and maintain the Bisq software

This means its financial structure is very different from that of a company. Companies have common pools of assets, liabilities, and equity—assets are leveraged to produce profits, profits boost equity, and higher equity value is what makes investors (and executives) happy. Generally, more assets means more firepower to produce more profits, so maximizing assets (like data!) is a core objective.

But Bisq doesn’t have a balance sheet, since it’s not an entity, so it doesn’t have assets.

And because it’s free/libre software, no one owns its intellectual property, and it can get away with not having any common assets beyond accounts for GitHub, Twitter, and various servers which are owned by its network of contributors to fulfill their assigned functions.

The result: there is no shared pool of resources for the project to accumulate and exploit.

So whereas accumulated assets (i.e., data) are the primary enablers of revenue for businesses like Facebook, accumulated assets don’t even exist for Bisq. Instead, the labor of Bisq’s contributors is the primary enabler of its revenue: contributors maintain the software, traders pay fees to use the software, those fees are distributed to contributors for their work, and contributors are incentivized to make the software better to increase fee revenue.

**The incentive structure is based solely on producing and consuming software**. Having a big honeypot of data makes no sense.

Indeed, it's actually counter-productive. Even if a contributor on the network did start to collect data through their own means for the whole network to leverage, such an activity would add a point of reliance to the system and degrade its resilience. This directly clashes with the [core principles of the project](https://docs.bisq.network/intro.html#why-bisq-exists), and the community would probably reject integrating such activities into the system.<sup>3</sup>

In this way, Bisq discourages data gathering by design. Through the Bisq DAO, people maintain continuous relationships to coordinate their work with low cost, and the profit motive is high. But with no mothership, profits go directly to the people who earned them, so there is no pressure to accumulate a common base of assets.

Of course, open-source software is a crucial part of this dynamic: as a user, you can verify you’re not sending any data by inspecting the code yourself. But it’s nice to know that the collection of data doesn’t fit the incentive structure of the system.

## 3. Conclusion

Bisq is built to operate its software while protecting its users' privacy. It's done this by integrating a viable means of earning revenue right into its software, and its decentralized governance structure ensures there can be no way to accumulate common assets (i.e., user data) to exploit later.

As long as companies operating digital services are traditionally capitalistic (i.e., with a common balance sheet, incentivized to maximize returns for investors and executives), they will continue to exploit user data for profit.

Profit-seeking on its own is not bad, but incentives that encourage immoral profit-seeking are bad.

The Bisq DAO endeavors to maintain the positive elements of a company to efficiently coordinate productivity while discarding the negative elements that encourage privacy problems.

In the next part in this series, we will discuss how the Bisq DAO's incentive structure discourages exploitation of its workers and users—another common tendency of traditional companies.

<hr>

<br>
<sup>1</sup> Specifically, Bisq software is licensed under the GNU Affero General Public License v3.0.
<br><br>
<sup>2</sup> The company is a hugely beneficial entity. As Ronald Coase articulated in his article _The Nature of the Firm_ in 1937, companies dramatically lower transaction and coordination costs in the pursuit of business. The advent of the modern limited-liability joint-stock company has been a drastically under-appreciated enabler of modern progress.
<br><br>
<sup>3</sup> Furthermore, it's worth noting that [the software](https://github.com/bisq-network/bisq) makes it technically impossible to collect very much data in the first place.
