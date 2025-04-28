---
layout: post
title: "Bisq Easy Mobile App Survey"
author: HenrikJannsen
excerpt: "The Bisq Easy Mobile App will support two operation modes.  We are running a survey to better understand user preferences and optimize resource allocation and deployment."
lang: en
---

We are developing **Bisq Easy** mobile applications and would like to better understand your needs.
Your feedback will help us optimize resource allocation and deployment strategy.

Before we ask a few questions, please review the two available modes of operation:

### [Bisq Easy Mobile - Full Node Mode](https://github.com/bisq-network/bisq2/discussions/2665)
- **Description**:
  A self-contained mobile version of the Bisq 2 desktop client, running a full Bisq Easy node with a limited feature set.
- **Platform**: Android only (leverages the existing Java codebase).
- **Functionality**:
    - Connects directly to the Bisq P2P network over Tor.
    - Enables decentralized trading with full autonomy.
- **Requirements**:
    - Higher device resources (CPU, memory, storage).
- **Considerations**:
    - Increased battery and resource consumption.
    - No synchronization with desktop app (user profile and data) initially — may be added later.


### [Bisq Easy Connect - Light Client Mode](https://github.com/bisq-network/proposals/issues/462)
- **Description**:
  A lightweight mobile app that connects to a remote Bisq 2 node and acts as a remote control for Bisq Easy running on that node.
- **Platform**: Android and iOS.
- **Functionality**:
    - Provides user interface only; no P2P or Tor networking on the mobile device itself.
    - Connects securely to a full node via Tor or clearnet.
    - Offers the same limited feature set as Full Node Mode.
- **Remote Node Requirements**:
    - Node must be always online and reachable.
    - Node can be the user's own full node or a trusted operator (e.g., friend and family — "Uncle Jim" model¹).
    - If clearnet (non-Tor) is used, node operator must set up port forwarding.
- **Use Cases**:
    - Lower-resource mobile devices.
    - Mobile access to a self-hosted Bisq node.
    - Onboarding via trusted "Uncle Jim" operators.
- **Considerations**:
    - Requires trust in the remote node operator when using the "Uncle Jim" model.
    - Recommended only in trusted environment (self-hosted node or friends and family).
    - Each remote node can only support one mobile app connection; multi-user support is not available.


##### Quick Overview

<img src="/images/blog/mobile_compare_table.png" loading="lazy" alt="Mobile Apps comparison" width="650">

This two-mode strategy allows us to serve both **advanced users** and **casual users**, maintaining a strong balance between **privacy**, **decentralization**, and **usability** across platforms.

<a target="_blank" href="https://bisq.supersurvey.com/AS6XJ5LC"> <img src="/images/blog/start_survey_button.png" alt="Mobile Apps Survey" loading="lazy" width="650"> </a>


_The survey does not require registration and can be accessed with Tor browser_


¹ *The "Uncle Jim" model refers to a setup where a trusted individual (e.g., a friend or family member) operates a full Bisq node, allowing others to securely connect via the Bisq Easy Connect app. This enables lightweight, decentralized participation without requiring each user to manage their own node infrastructure.*
