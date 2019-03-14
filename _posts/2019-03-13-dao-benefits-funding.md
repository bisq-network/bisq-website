---
layout: post
title: "Benefits of a DAO, Part I: Funding FLOSS & Avoiding Surveillance Capitalism"
author: Steve Jain
excerpt: "The Bisq DAO enables value transfer and decision-making for the Bisq network. But it has several additional benefits too, which we'll focus on in this series.<br><br>In this post, Part I of this series, we'll discuss how Bisq's revenue model offers a new approach to funding open-source software development that, by design, avoids incentives to exploit user privacy altogether.<br><br>"
---

_This post is by Steve Jain. Steve contributes writing in the form of documentation, copywriting, media correspondence, and more to the Bisq network._

At the [MIT Bitcoin Expo](https://mitbitcoinexpo.org/) this past weekend, funding open-source software development was a topic of high interest. Arjun Balaji's whole talk was focused on the topic, and a number of people approached me after my panel discussion wondering how the Bisq DAO worked to fund the project without any kind of external fundraising.

If you're interested in learning about how the Bisq DAO works, I encourage you to first check out [this video series](https://www.youtube.com/playlist?list=PLFH5SztL5cYPAXWFz-IMB4dBZ0MEZEG_e) or [this doc](https://docs.bisq.network/user-dao-intro.html). The second half of this post will assume you already have a basic understanding of the Bisq DAO.

Here we'll stick to discussing the practical _results_ of the Bisq DAO's revenue model as they apply to (1) sustaining the project and (2) ensuring user privacy.

## Funding the Project

Bisq is open-source software, but that misses some important nuances. It's also free/libre software that provides users the same 4 freedoms Richard Stallman outlines as fundamental to free software:

* freedom to run the software as you wish, for any purpose
* freedom to study how the program works, and change how it works
* freedom to redistribute copies (e.g. to help your neighbor)
* freedom to distribute copies of your modified version to others

The only restriction is a practical one: if you do choose to redistribute your own copy of the software, you must a different name and logo so that users don't confuse your version for an official release by the Bisq project.<sup>1</sup>

Great for users, right? But how can such software make any money?

In his writings, Stallman points out that the 'free' in 'free software' refers to freedom, not price, so free software vendors are free to charge for their software however they like.

#### Typical Approaches to Funding: External

Practically, however, charging for free software is difficult. In the past, when software was distributed on floppy disks and CDs, it was possible to charge for the convenience of obtaining the software on physical media. But nowadays, the internet makes copying and distributing software trivial and almost free.

As a result, many software projects rely on donations to fund development: donations of time from developers who maintain software as a labor of love, and donations of money from users who are particularly fond of the software. [Other models exist](https://en.wikipedia.org/wiki/Business_models_for_open-source_software) to fund free software development such as sponsorships, selling professional services, selling the software as a service, etc.

These can all be fine means of sustaining software projects, and some projects have used them quite successfully. But most of these conventional models for monetizing software have one thing in common: they're all external to the software itself. There's the code on one hand, and on the other, there's some scheme to make improving the code worthwhile.

#### Bisq's Approach to Funding: Integrated

Bisq takes a different approach: it looks inward. It charges a small fee for using the software, right from within the software itself. Specifically, Bisq users pay trading fees: the Bisq software enables a peer-to-peer marketplace, and users pay a small fee every time they make or take offers in the marketplace.

These fees bring in the funds to sustain the Bisq project: development, design, documentation, etc.

Of course, there are 3 critical advantages Bisq has here that most software projects don't have:

* users perceive paying trading fees as a natural occurrence when using a digital marketplace
* the means to make payments are neatly weaved in to the natural experience of using the software
* fees are charged in bitcoin, so no external payment services need to be trusted for processing, and users can remain anonymous

The third advantage is one that anyone can replicate—just start accepting bitcoin. The first two are a bit trickier.

#### Lessons for Other Projects

The first item is perhaps the biggest obstacle, as it's a product of social conditioning: people just don't ever expect to pay for software. There is almost never a 'natural' opportunity to charge users a fee during the normal use of a software application.

Part of it, in my opinion, is that developers have been too generous over the years. Many have given their software away for free for the attention, resume boost, and sometimes just thinking they'll 'figure it out' as time goes on. Whatever the reason, the result is that many people now equate 'open-source' with 'free as in beer' and are often disgusted with requests to support software they appreciate. Ask me how I know.

Hence the prevalence of external funding models.

Still, if you can figure out a way to integrate a revenue model into your software, the result can be elegant and empowering: no need to worry about consulting clients, appeasing sponsors, or anything else—just focus on the software!

Specific techniques will depend on your specific application. Charging a tiny fee every time a user opens a terminal in your Linux distro would probably not be viable, but maybe charging a small fee for the convenience of downloading programs directly from the distro's official repositories (instead of finding, verifying, and building the software yourself) could work?

Bitcoin and emerging tools like Lightning can help reducing the friction of integrating such revenue models into software that doesn't have any natural means for charging fees. In any case, developers should be creative and experiment.

## Ensuring User Privacy

An integrated revenue model that doesn't depend on any third parties can be empowering. So empowering, in fact, that it's a core component of a totally new business dynamic.

This new dynamic: protecting user privacy. Whereas most other projects are incentivized to exploit user privacy, Bisq is actually incentivized to protect user privacy—by design through its financial structure.

Let's see take a look at how this works.

#### Background: Data-Gathering

Most digital services are operated by for-profit companies. You've probably heard of some of the more notable ones like Facebook, Twitter, and Google.

Lately, the pathetic privacy policies (along with the practical consequences) of these companies have gone mainstream. People are realizing that these big technology companies are unscrupulous mercenaries, and that their most personal data is actually stored to sell (not for their convenience, or whatever pretty marketing-speak they're given).

But how did we get here? Why is it that we're dealing with these egregious user privacy violations now?

In the not-so-distant past, our most sensitive personal data could only be accessed by select institutions: those in government, healthcare, finance, etc. While these sectors surely sold customer data for profit, such activity was probably relatively minimal, because (1) these sectors are highly regulated and (2) technology to collect and store data was relatively primitive and expensive, so there was a practical limit on the extent of data that could be collected, stored, and leveraged in the first place.

In the past few years, however, that's all changed. Almost every service you interact with can (and does) collect vast amounts of data on you with minimal cost, whether through mobile apps, website analytics, or through other (often more nefarious) means.

For these modern digital services, collecting data is just a part of smart business. It provides deep insights to help businesses optimize their services, strike partnerships, and develop new products. As a rational profit-maximizing business owner, there's no reason _not_ to collect as much data as you can.

#### The Privacy Predicament

Gathering data may be a perfectly fine business practice with a perfectly good business case, but the result is rather odd: accumulated data becomes a hugely valuable asset.

This is a peculiar dynamic that only became possible in recent years with recent technology: companies gradually accumulate a productive asset through the normal course of their business operations.

It's almost like a non-financial form of interest earned through the day-to-day operation of a company, as if Amazon earned a commission from the Internet Gods every time it sold you toilet paper. Odd, but that's kinda what's happening.

Anyway, what should a company do with this big data asset? This is where the issues start.

While companies are not required by law to make a profit, in practice, the incentives for company executives to maximize profits (quickly) are quite strong. Investors need returns, executives want big paydays, media vies for attention, and everyone is hungry for power and status—the result is whatever can be monetized will be monetized, and so, data is sold.

Curiously, companies tend to avoid listing their data as line items on their balance sheets. Feel free to check the raw data yourself (here are recent annual financial filings from [Facebook](https://www.sec.gov/Archives/edgar/data/1326801/000132680119000009/fb-12312018x10k.htm), [Twitter](https://www.sec.gov/Archives/edgar/data/1418091/000156459019003523/twtr-10k_20181231.htm), and [Yelp](https://www.sec.gov/Archives/edgar/data/1345016/000162828019002312/yelp_10-kx12312018.htm)). You won't see anything resembling user data on those balance sheets (except for intangible assets gained through acquisition, but those are not exhaustive). Yet these data assets are the primary means of generating revenue!

Maybe these companies cannot figure out in which section to list their data...assets, or liabilities?

#### A Better Way: Beyond the Corporation

_But that's capitalism_, you retort. Companies exist to offer services and earn money, and they've always been exploitive, but the market will eventually react and handle them. It's not a great economic system, but it's the least worst of the alternatives.

Generally I agree, but I'll counter that there may be a way to better align incentives to discourage such activity in the first place.

The issue, I contend, is not the pursuit of profits. Profits are powerful indicators of progress and essential to enabling innovation for further progress. The issue is with how profits are incentivized.

With a company, you see, all benefits are centralized in one place. The more resources a company gathers for itself, the more capable it becomes to generate profits: more people, more capital, more sales, more partnerships, more brand prestige, more data.

This is why every company has entire functions dedicated to maximize the accumulation of those resources—more of all these things generate more profits for the mothership.

**But what if there were no mothership? What if a profit-generating operation had no central entity to accumulate assets and collect profits?**

We have to be careful here, because the company is an important entity. As Ronald Coase articulated in his article _The Nature of the Firm_ in 1937, companies dramatically lower transaction and coordination costs in the pursuit of business.

But is there a way to maintain these low costs of operations, maintain the profit motive, but do away with the centralization of profits? Perhaps some hybrid of a collective operation to coordinate efforts with decentralized assets and decentralized distribution of revenue?

The Bisq DAO offers a mechanism for achieving this, and the result is a huge win for user privacy.

#### A Capitalistic Model that Encourages Privacy Protection

As we've mentioned elsewhere, Bisq is not a company or entity of any kind. It's a network composed of (1) users running the Bisq software and interacting over its peer-to-peer network and (2) contributors who build and maintain the Bisq software.

This means its financial structure is very different from that of a company. Companies have assets, liabilities, and equity—assets are leveraged to produce profits, profits boost equity, and higher equity value is what makes investors (and executives) happy. Generally, more assets means more firepower to produce more profits, so maximizing assets (like data!) is a core objective.

But Bisq doesn't have a balance sheet, since it's not an entity, so it doesn't have assets. Because it's just free/libre software (in contrast to a factory that needs physical space and machinery), no one owns its intellectual property, and it can get away with not having any common assets beyond accounts for GitHub, Twitter, and various servers which are owned by various contributors to fulfill their assigned functions.

The result: there is no shared pool of resources for the project to accumulate and exploit.

So whereas accumulated assets (i.e., data) are the enablers of revenue for businesses like Facebook, accumulated assets don't exist for Bisq. Instead, the labor of Bisq's contributors is the enabler of its revenue: contributors maintain the software, enabling traders to pay trading fees, and fees are distributed to contributors for their work.

In this way, **data gathering is prevented by design.** People maintain continuous relationships to coordinate their work with low cost, and the profit motive is high. But with no mothership, profits go directly to the people who earned them, so there is no pressure to accumulate a common base of assets.

You might argue that there's nothing preventing one contributor from collecting data through their own means for the whole network to leverage. You'd be right, but such an activity would add a point of reliance to the system and degrade its resilience. Bisq's goal is to make its governance as decentralized as possible, so collecting data in any one place clashes with that goal and the community would reject it.

Of course, free software is a crucial part of this dynamic: as a user, you can verify you're not sending any data by inspecting the code yourself. But it's nice to know that the collection of data doesn't even fit the incentive structure of the system.

#### Conclusion

From a purely financial perspective, Bisq is built to protect its users' privacy. It has a viable means of earning revenue integrated into its software, and it has no way to accumulate common assets (i.e., user data) to exploit later.

As long as companies operating digital services are traditionally capitalistic (i.e., with a common balance sheet, incentivized to maximize returns for investors and executives), they will continue to exploit user data for profit. Profit-seeking is not bad, but bad incentives that encourage immoral profit-seeking are bad.

In the next part in this series, we will discuss how the Bisq DAO's incentive structure prevents exploitation of its workers and users—another common tendency of traditional companies.

<br>
<sup>1</sup> Specifically, Bisq software is licensed under the GNU Affero General Public License v3.0
