---
layout: post
title: "Security Incident Post-Mortem"
author: HenrikJannsen
excerpt: "Details of the May 1, 2026 Bisq v1 security incident, its impact, the mitigations in Bisq 1.10.0, and the security lessons guiding follow-up work."
lang: en
---

## Introduction

On May 1, 2026, Bisq v1 experienced a security incident affecting its trade protocol. An attacker exploited insufficient validation checks in parts of the protocol using a modified client implementation. The attack targeted active altcoin trades and resulted in losses for a limited number of users.

This post-mortem explains what happened, how the incident was contained, what we discovered during the investigation, what changes were implemented in response, and what lessons we are taking forward.

We want to acknowledge the impact this incident had on affected users and the wider Bisq community. Incidents of this kind directly challenge confidence in Bisq, and we approached both the investigation and the remediation effort with that responsibility in mind.

## Summary

* The exploit affected Bisq v1 only.
* Bisq 2 and the Bisq Easy protocol were not affected.
* The attacker exploited missing validation checks within the trade protocol.
* Only altcoin trades were impacted.
* Fiat trades were protected by the account age witness signing system.
* User funds stored in Bisq wallets were not directly compromised.
* 10 users were affected.
* Total losses amounted to 11.59104 BTC.
* Three traders suffered the vast majority of losses.
* Trading was halted through an emergency version enforcement mechanism to prevent continued exploitation.
* No additional exploit path capable of directly stealing funds was identified during the broader security review.

## Timeline

### Initial Exploitation

The attack appears to have started during the early hours of May 1, 2026. The attacker selectively targeted open offers and manipulated trades through a modified client.

### Detection and Emergency Response

Once suspicious activity was identified, emergency measures were activated to stop further exploitation. Trading was effectively disabled by enforcing a non-existent mandatory trading version, preventing peers from continuing protocol interactions.

At the same time:

* Investigation efforts began immediately.
* Affected users were asked to open mediation cases.
* Information about the incident was distributed through our main communication channels.
* Internal analysis focused on reproducing the exploit and identifying the root cause.

### Investigation Phase

The original plan was to release a minimal hotfix as quickly as possible. However, as the investigation progressed, it became clear that a narrow patch would not provide sufficient assurance against follow-up attacks.

The scope of the review expanded beyond the immediate exploit path to include:

* Trade protocol validation
* Wallet interaction surfaces
* P2P network behavior
* DAO-related components
* External infrastructure dependencies
* Build and dependency security

Given how quickly AI-assisted tools can now surface this class of issue, we had to assume additional probing attempts would follow after reopening the network.

### Release Preparation

Rather than maintaining a small isolated hotfix branch, the fixes were merged into the main development branch that already contained work originally planned for the 1.9.23 release. That work later became 1.10.0, which increased the amount of testing required but allowed for a more comprehensive hardening effort.

## Impact Assessment

The incident was limited in scope compared to the worst-case scenarios initially considered during the first hours of the investigation.

### What Was Affected

* Open altcoin offers that were actively taken by the attacker
* A limited number of traders participating in affected trades

### What Was Not Affected

* Fiat trades
* Bisq 2
* Funds passively stored in Bisq wallets
* DAO integrity
* The broader P2P network infrastructure

The account age witness signing mechanism used for fiat trades likely acted as an effective deterrent and significantly reduced the potential attack surface.

## Root Cause

The primary exploit path resulted from insufficient validation inside the trade protocol. The attacker used a modified client to bypass assumptions made by honest peers. Specifically, the taker defines the miner fee for the trade transactions and passes that value to the maker. This value was not validated against negative numbers, allowing the attacker to cause the maker to calculate an incorrect output value for the multisig output.

The vulnerability exposed weaknesses in how certain protocol messages and trade-related data were verified before acceptance.

During the investigation, additional weaknesses and edge cases were discovered and corrected. None of those secondary findings are currently believed to have enabled direct theft of funds, though some could have created operational or transaction integrity risks.

## Security Review Findings

### Trade Protocol

The majority of relevant findings were concentrated within the trade protocol itself. Significant hardening work was performed around:

* Trade message validation
* Deposit transaction verification
* Payout transaction validation
* Contract data consistency checks
* Peer-provided wallet data validation

### Wallet Security

No wallet vulnerability capable of directly compromising user funds was identified.

However, Bisq still operates as a hot wallet integrated into a complex P2P trading application, which inherently carries higher risk than standard wallets. For this reason, users should continue following standard operational security practices and avoid storing long-term savings inside the Bisq wallet.

### Infrastructure and Network Components

The investigation also reviewed:

* DAO functionality
* P2P networking
* Node infrastructure
* External market price dependencies

No critical vulnerabilities were identified in those systems, though several issues were fixed as part of the broader hardening effort.

## Immediate and Long-Term Mitigations

The [1.10.0 release](https://github.com/bisq-network/bisq/releases/tag/v1.10.0) includes a broad set of security improvements introduced in response to the incident.

### Security Hardening

Key improvements include:

* Expanded protocol validation checks
* Additional verification of trade-related transactions and data
* Improved protection against supply chain attacks through dependency signature verification
* Build process hardening and additional toolchain verification
* Updated dependencies including Java, JavaFX, Tor, and bitcoinj
* New Docker-based DAO and end-to-end trade testing infrastructure
* Partial [reproducible build system](https://github.com/bisq-network/bisq/blob/master/docs/reproducible-builds/README.md) groundwork, not yet applied to this release but planned to fully benefit the next release
* An in-app reminder advising users not to use the Bisq wallet for long-term storage of higher balances

### User-Facing Security Changes

Several precautionary limitations were introduced to reduce risk exposure while additional auditing work continues:

* Reduced maximum trade size to 0.125 Bitcoin
* Limited acceptable price deviation to 25%
* Disabled XMR auto-confirmation until an in-depth security audit is performed
* Removal of dispute chat attachments and dispute log file transfers
* Removal of the webcam QR scanning dependency due to its large set of native libraries, with a more secure replacement planned for a future release

These changes prioritize security and risk reduction over convenience.

## Reimbursement

A [reimbursement proposal](https://github.com/bisq-network/proposals/issues/481) has been submitted to the DAO with the goal of fully reimbursing affected users in Bitcoin, subject to DAO approval and arbitrator confirmation of eligibility.

The proposal describes an anonymous group of "Refund Angels" who would advance the refunds in BTC. The separate question of how those contributors are later reimbursed by the DAO is expected to be handled in a later DAO cycle and should not affect timely refunds for victims.

Throughout the process, the objective remained consistent:

* Full reimbursement for victims
* Minimizing negative impact on the DAO
* Protecting BSQ stakeholders and contributors from disproportionate burden

We appreciate the constructive participation from the community during these discussions.

## Lessons Learned

### The Era of AI-Assisted Exploitation

During the investigation, a member of our team identified the vulnerability using AI-assisted analysis. That contributor was able to locate and remediate the issue significantly faster than the rest of the team, reinforcing our belief that similar AI-assisted techniques may also have been used to discover the vulnerability in the first place.

This incident challenges the long-standing assumption that software which has been publicly deployed and scrutinized for many years can automatically be considered “battle-tested.” Advances in AI-assisted vulnerability research are changing the landscape: flaws that previously remained undiscovered for years can now be identified much more quickly and systematically.

To adapt to this evolving threat environment, we also increased our use of AI-assisted tooling during the response and remediation process. In particular, the implementation of the reproducible build system was accelerated substantially through AI assistance and would likely not have been feasible within the same timeframe using traditional approaches alone.

### Layer Boundaries Matter

One of the most important findings was that architectural friction can provide meaningful security benefits.

In Bisq 1, certain trade setup steps required explicit user action outside the trade protocol itself. That separation unintentionally created a containment boundary which limited the scale of the exploit.

Some of those boundaries had been streamlined away in the new MuSig protocol design for Bisq 2 for efficiency and UX reasons. This incident demonstrated that reducing friction can also reduce security segmentation. We will reconsider those design decisions.

### Fast Fixes Can Increase Risk

While there was pressure to restore trading quickly, releasing a narrowly scoped hotfix without broader review would have introduced unacceptable risk.

The delayed release schedule was the result of deliberately choosing comprehensive validation and testing over speed.

### Defense in Depth Is Essential

No single safeguard should be assumed sufficient in adversarial environments. Validation, isolation boundaries, reproducible builds, dependency verification, and operational constraints all contribute to reducing systemic risk.

## Next Steps

Work following this incident continues in several areas:

* Additional protocol review and auditing
* Continued reduction of attack surface
* Completion of reproducible build deployment
* Further end-to-end automated testing
* Review of protocol assumptions in future Bisq versions
* Evaluation of stronger wallet isolation approaches

Security hardening will remain an ongoing priority rather than a one-time response.

## Closing

We want to thank everyone who contributed during this incident:

* Users who quickly reported affected trades
* Mediators and contributors assisting with investigations
* Developers and reviewers working on fixes and testing
* Community members providing support and coordination

Incidents like this are difficult for any open decentralized project. Transparency, careful analysis, and disciplined remediation are essential to maintaining long-term resilience and trust.

We remain committed to learning from this event and continuing to strengthen the security and robustness of Bisq.
