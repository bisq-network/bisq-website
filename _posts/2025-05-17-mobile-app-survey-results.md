---
layout: post
title: "Mobile App Survey Results"
author: HenrikJannsen
excerpt: "Presentation of the results from our recent survey"
lang: en
---

On April 27th, we conducted a [survey](/blog/mobile-app-survey/) to better understand the preferences of potential users for the upcoming **Bisq Easy mobile app**.

### Key Findings

The survey provided valuable insights and largely confirmed our expectations. Here are the main takeaways:

- **Android** is by far the dominant platform among respondents.
- There is a roughly equal distribution of Android users who would choose between **full mode** and **Bisq Connect**.
- Among Bisq Connect users, the majority would connect to their own desktop node. Only 9% would connect to a third-party node ("Uncle Jim" setup). This aligns with our assumption that the survey participants are mainly active Bisq users.
- **71%** said they would be willing to run a node for a friend or family member.
- Most respondents prefer using **Tor** (68%) or their **home network** (18%) for connectivity when using Bisq Connect.
- For those interested in full mode, only **12%** consider **synchronization with their Desktop Bisq 2 app** a must-have feature.

### Implications for Our Roadmap

There has been internal debate about whether we should release the Bisq Connect app before **Tor support** is implemented. The survey results clearly indicate that most users intend to use Bisq Connect over Tor. Therefore, we believe it’s the right decision to delay the release until Tor support is in place.

As for synchronization with the Desktop Bisq 2 app, implementing this in a decentralized context is a non-trivial technical challenge. Although we have some rough ideas, it’s a complex undertaking. Given that most users do not consider this feature essential, we will **not prioritize** it at this stage.

### Survey Results

Below is a visual summary of the results collected through our survey platform:

<img src="/images/blog/mobile-survey-results.png" loading="lazy" alt="Mobile Apps comparison" width="650">
