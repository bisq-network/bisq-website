---
layout: post
title: "Bisq Easy on Mobile"
author: HenrikJannsen
excerpt: "The Bisq Easy mobile initiative is now complete."
lang: en
---

With the release of Bisq Connect v0.3.2, we’re excited to announce that the Bisq Easy mobile initiative is now complete.

## Challenges and Solutions

Bringing a fully featured peer-to-peer application over Tor to mobile platforms poses significant challenges. While Bisq
is built in Java—which works well on Android—it is not compatible with iOS. To address this, we developed two
complementary application models:

* **Bisq Easy Mobile**: A full Bisq Easy node with a complete P2P network stack (Android only)
* **Bisq Connect**: A lightweight client for remotely controlling a Bisq 2 backend node (Android and iOS)

---

## Bisq Easy Mobile

Bisq Easy Mobile for Android uses the Bisq 2 Java libraries to deliver a fully featured mobile trading experience.

It provides the same privacy and security guarantees as the Bisq 2 Desktop application, where Bisq Easy is the first
supported trade protocol.

**Pros**

* Runs a full Bisq Easy node
* No additional infrastructure required

**Cons**

* Available on Android only
* Higher resource and bandwidth usage
* Backgrounding the app may interrupt network connectivity; reconnection can take time
* No synchronization with a desktop instance (for dual usage, Bisq Connect is recommended)
* Users must manage backups themselves to prevent data loss

---

## Bisq Connect

Bisq Connect is available on both Android and iOS. It connects to a Bisq 2 backend node, which can run as:

* A Bisq 2 desktop application
* A headless Bisq 2 node on a personal machine or VPS

### Self-Hosted Model

In this setup, you run your own backend node. This provides maximum privacy and security, with your mobile device acting
as a remote control.

### Trusted Node Model

Alternatively, a trusted party—such as a friend or family member—can host the backend node for you. This lowers the
technical barrier and enables a seamless mobile experience without requiring you to manage the infrastructure yourself.

This approach is particularly useful if the node runs continuously on a VPS. However, it requires trust in the operator,
as all data resides on that node.

**Pros**

* Available on both Android and iOS
* Lower resource and bandwidth usage
* With self-hosting, seamless access to the same data across desktop and mobile
* No need for mobile backups (data is stored on the backend node)

**Cons**

* The trusted node model requires trust in the node operator

---

*Note:
Due to Apple’s App Store policies, Bisq Connect is distributed via TestFlight. To install it, first download the
TestFlight app from the App Store, then install Bisq Connect from within TestFlight.*

---

## What About Bisq 1 and the MuSig Trade Protocol?

For Bisq 1, the **Bisq Notifications** app remains available to receive trade-related notifications from your desktop
node.

We are actively developing the new Bisq 2 MuSig trade protocol as the successor to Bisq 1.

Due to technical constraints, there are currently no plans to support this protocol in Bisq Easy Mobile. While these
limitations do not apply to Bisq Connect, implementing full mobile support for Bisq MuSig would still require
significant UI development effort.

Whether we pursue this depends on adoption and demand for Bisq Connect.

---

## What’s Next?

Bisq mobile apps will continue to receive improvements and stability updates. Staying up to date with the latest
releases is recommended for the best experience.

If you encounter issues or have feedback, please reach out via the Bisq Mobile Matrix channel or other community
platforms.

Learn more about the Bisq mobile apps:

- [Bisq Mobile GitHub (README)](https://github.com/bisq-network/bisq-mobile/tree/main?tab=readme-ov-file#bisq-mobile)
- [Bisq Connect for iOS](https://bisq-network.github.io/bisq-mobile/)
- [How to Use Bisq Connect](https://github.com/bisq-network/bisq-mobile/wiki/How-to-use-Bisq-Connect)
- [Bisq 2 Mobile (Wiki)](https://bisq.wiki/Bisq_2_mobile)

---

## Get the app

| Bisq Easy                                                                                                                                                                            | Bisq Connect *(Android)*                                                                                                                                                                           | Bisq Connect *(iOS)*                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="https://play.google.com/store/apps/details?id=network.bisq.mobile.node"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" height="50"/></a> | <a href="https://play.google.com/store/apps/details?id=network.bisq.mobile.client"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" height="50"/></a> | <a href="https://testflight.apple.com/join/abBmehCw"><img src="https://developer.apple.com/assets/elements/icons/testflight/testflight-64x64_2x.png" height="50"/></a><br/><em>TestFlight</em> |
