---
layout: post
title: "Where Bisq Stands After the May 1, 2026 Security Incident"
author: HenrikJannsen
excerpt: "An update on security hardening, affected-user reimbursement, Refund Angel distributions, DAO financial risks, and the fee parameters now under review."
lang: en
---

This post provides an update on the current state of security work, the reimbursement of affected users, the role of the Refund Angels, the financial impact on the Bisq DAO, and considerations for long-term sustainability.

Details of the May 1, 2026 security incident can be found in the [post-mortem report][1].

Affected users have now been reimbursed. This was made possible by the Refund Angels, who committed funds before the final compensation terms had been determined.

_Some Bisq-specific terms used in this post are explained in the glossary at the end._

## Executive Summary

- Security hardening for Bisq 1 and Bisq 2 is close to completion. The main remaining items are reproducible builds and the XMR auto-confirmation security audit.
- Victims affected by the May 1, 2026 security incident have been reimbursed.
- BTC fee distributions to Refund Angels are proposed to be phased in gradually. Accounting, compensation, and allocation details still need to be finalized through DAO governance.
- The reimbursement creates significant financial pressure for the DAO. Some fee parameters are also outdated and may need careful adjustment. Any changes should be gradual, monitored, and adjustable.
- No fee parameter changes are finalized by this post. Each change described below would still need to go through the normal DAO proposal and voting process.
- The release of Bisq MuSig remains the highest strategic priority for 2026.

## Contents

- [Security Hardening](#security-hardening)
- [Reimbursement Funding](#reimbursement-funding)
- [Proposed Settlement Model](#proposed-settlement-model)
- [Financial Risks for the DAO](#financial-risks-for-the-dao)
- [Fee Parameters Under Review](#fee-parameters-under-review)
- [Additional Measures to Improve Financial Sustainability](#additional-measures-to-improve-financial-sustainability)
- [How to Participate](#how-to-participate)
- [The Path Forward](#the-path-forward)
- [Glossary](#glossary)
- [References](#references)

## Security Hardening

Since the incident, we have focused on strengthening security in both Bisq 1 and Bisq 2. Most of that work is now complete.

The main remaining task is reproducible builds for both projects. The goal is that several developers independently build the release on all supported operating systems and submit attestations to the release manager. The release manager verifies that the builds match before publishing release binaries and signed build attestations. GitHub CI will also run reproducible builds for all supported platforms to provide a baseline attestation.

The XMR auto-confirmation system still needs a security audit. Until that audit is completed, XMR auto-confirmation will remain disabled.

A small number of additional security improvements remain open in Bisq 2 and are expected to be completed before August 2026.

## Reimbursement Funding

Affected users have been reimbursed. The remaining challenge is how Refund Angels, who provided the reimbursement funds, should receive distributions while limiting the impact on the DAO and its long-term sustainability.

### Proposed Distribution Method

BTC fee distribution to Refund Angels is proposed to be handled through the Filter object. See the [distribution method proposal][2].

During the distribution period, part of the BTC fees that would normally go to Burning Men will instead go to Refund Angels. To avoid a sudden drop in Burning Men revenue, this will be phased in gradually over several DAO cycles. DAO cycles are roughly one month. In the table below, the first DAO cycle is the cycle in which the Refund Angel distribution is activated:

| Period | Refund Angels | Burning Men |
| --- | ---: | ---: |
| First DAO cycle | 25% | 75% |
| Second DAO cycle | 50% | 50% |
| Third DAO cycle and beyond | 75% | 25% |

The final distribution ratio will remain in place until the accepted Refund Angel allocations are fully settled. Within the Refund Angel group, distributions will be proportional to each participant's share of the remaining unsettled allocation, updated after each cycle.

### Reimbursement Timeline

| Milestone                                                                                    | Date |
|----------------------------------------------------------------------------------------------| --- |
| [Proposal][3] for Refunds to Victims of the May 1st Bisq 1 Trade Protocol Incident published | May 15, 2026 |
| Proposal accepted by the DAO                                                                 | May 25, 2026 |
| Affected victims reimbursed                                                                  | June 5, 2026 |

The commitment to cover the full reimbursement amount was made before May 15, 2026, when the final compensation terms were still unknown. Since Refund Angels committed funds under those market conditions, that date should be used as the accounting reference for the initial allocations.

The total loss incurred by victims amounts to 11.59104 BTC. A portion of this has been reimbursed through the standard reimbursement process by Refund Agents, and one affected trader has not yet submitted a reimbursement request. The total amount contributed by Refund Angels to date is 10.98538295 BTC.

For a verifiable BTC/USD reference rate, the CoinGecko historical Bitcoin price for May 15, 2026 is used: 81,052 USD/BTC. Based on this rate, the total contribution of 10.98538295 BTC corresponds to approximately 890,387 USD.

For Refund Angels joining at a later stage, the applicable BTC/USD exchange rate should be fixed at the time their proposal is approved by the DAO.

## Proposed Settlement Model

### Accounting Currency

USD should be the preferred accounting currency because it minimizes exchange-rate risk for both Refund Angels and the DAO.

If allocations were accounted in BTC, significant changes in the Bitcoin price would create asymmetrical outcomes. For example, if Bitcoin appreciated roughly fivefold to around 400,000 USD/BTC, Bisq's fee revenue would likely increase in USD terms due to higher trading activity during a bull market, but decrease in BTC terms. A BTC-denominated obligation could therefore take much longer to settle, increasing the USD value ultimately received by Refund Angels while placing substantial strain on the DAO's finances.

Conversely, a decline in the Bitcoin price to around 16,000 USD/BTC would have the opposite effect. Refund Angels would bear most of the downside, potentially receiving far less in USD terms than they contributed, while the DAO's BTC-denominated obligation would become comparatively easy to satisfy. Such an asymmetric allocation of risk is undesirable for both parties.

USD accounting avoids most of this distortion. It still leaves some uncertainty, because trade volume changes with market conditions, but the risk is more balanced. Refund Angels may wait longer if fee revenue falls, but they receive compensation for the longer period. The DAO may pay more compensation if settlement takes longer, but it avoids extreme BTC price exposure.

Refund Angels who prefer BTC-denominated accounting may still submit proposals; however, the DAO should evaluate such proposals on a case-by-case basis, as they introduce additional exchange-rate and valuation risk.

To limit the DAO’s exposure, such proposals should include a clearly defined maximum compensation cap in USD terms. Once this cap is reached, compensation obligations would terminate, even if the equivalent BTC-denominated amount has not been fully repaid.

### Compensation Rate

Compensation is calculated per DAO cycle at a rate specified by each Refund Angel and applied to the outstanding balance. Compensation is capitalized, meaning any unpaid amount is added to the outstanding balance and becomes part of the base for future calculations.

The settlement period is hard to predict. Based on recent fee revenue, a 12 to 18 month horizon seems realistic, though future volume may differ.

#### Historical Data

As historical context, the chart below shows 12 months of reported BTC fee revenue derived from the [monthly Comptroller reports][10]. Over this period, BTC fee revenue totaled 12.59 BTC, or an average of 1.05 BTC per month. Under the proposed long-term allocation of 75% to Refund Angels, this implies approximately 0.79 BTC per month available for distributions.

<img src="/images/blog/refund-angel-btc-fee-revenue.svg" loading="lazy" alt="Corrected BTC fee revenue from May 2025 through April 2026" width="650">

#### Illustrative Repayment Scenarios

To evaluate how different compensation rates and settlement horizons affect repayment dynamics, the table below models a 900,000 USD funding amount under steady-state conditions (constant monthly distribution and fixed compensation rate).

| Funding amount | Monthly compensation | Monthly distribution needed | Settlement period | Total compensation | Effective compensation* |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 900,000 USD | 2.0% | 85,104 USD | 12 months | 121,244 USD | 13.5% |
| 900,000 USD | 2.0% | 60,032 USD | 18 months | 180,574 USD | 20.1% |
| 900,000 USD | 2.5% | 87,738 USD | 12 months | 152,861 USD | 17.0% |
| 900,000 USD | 2.5% | 62,703 USD | 18 months | 228,655 USD | 25.4% |
| 900,000 USD | 3.0% | 90,416 USD | 12 months | 184,991 USD | 20.6% |
| 900,000 USD | 3.0% | 65,438 USD | 18 months | 277,881 USD | 30.9% |
{: .horizontal-scrollbar-visible}

\* Effective compensation is total compensation paid divided by the original funding amount. It is not an annualized rate.

#### Back-test Using Historical Revenue

Applying the historical 12-month fee series and a 75% allocation to Refund Angels, the model produces approximately 765,560 USD in gross distributions. After applying monthly compensation, approximately 614,081 USD of the original 900,000 USD allocation would be repaid, leaving 285,919 USD outstanding.

Under these assumptions, full repayment would occur around month 17, or month 18 when accounting for the proposed phase-in period.

This back-test does not include BTC/USD price variation or other dynamic factors.

### Open Allocation Model

The initial Refund Angels committed funds before the final settlement terms had been defined. To formalize those commitments, they should submit DAO proposals specifying their funding amount and requested monthly compensation rate. Each proposal will be evaluated and voted on individually by the DAO. In the event of oversubscription, proposals using USD-denominated accounting and offering lower compensation rates should be given preference.

Additional participants may also become Refund Angels by submitting proposals in future DAO cycles. To keep the process simple and transparent, proposals should specify:

- Funding amount, accounted in USD
- Monthly compensation rate
- Reference BTC/USD rate and source used for the initial accounting amount
- Whether BTC accounting is preferred, in which case the proposal should also specify a maximum USD compensation cap to limit risks for the DAO
- Address for receiving BTC fees

Formal approval happens through the Bisq DAO. A GitHub issue or comment is useful for discussion and public review, but it is not a substitute for submitting the DAO proposal during the DAO proposal phase. A separate GitHub user is not required. Participants may use an existing GitHub account, a dedicated pseudonymous account, or avoid GitHub entirely, but DAO voters still need enough verifiable information to connect the requested allocation to the contributed reimbursement funds and the settlement details.

### How to Join the Refund Angels Program

The process for joining the Refund Angels program is similar to submitting a compensation request or any other DAO proposal.

It consists of the following steps:

1. Create a proposal issue in the Bisq [proposal repository](https://github.com/bisq-network/proposals/issues) on GitHub.
2. Allow time for community discussion and feedback on your proposal.
3. Before the DAO proposal phase ends, submit the proposal to the Bisq DAO through the Bisq application.

After the proposal phase ends, DAO stakeholders will vote on all submitted proposals. Once the voting period has concluded, the results will be evaluated.

If your proposal is accepted, your address will be added to the Refund Angel recipient list in the Filter object.
Your share of future distributions will be calculated based on your approved allocation relative to the total outstanding allocations of all participating Refund Angels.

#### Displacement Rule

To give the DAO a mechanism for reducing compensation costs over time, while also allowing early Refund Angels to recover part of their allocation sooner than expected, the settlement model includes a displacement rule. If a later proposal offers more favorable terms, it may replace the most expensive existing allocation. If multiple allocations share the highest compensation rate, the displacement will be allocated proportionally among them.

### Accounting and Monitoring

A monitoring process will track all distributions and outstanding allocations to ensure that Refund Angels are settled accurately and do not receive distributions beyond their approved allocation and accrued compensation.
Minor overpayments caused by rounding or timing differences are acceptable.
For accounting and settlement purposes, DAO cycles will serve as the relevant reporting period.

### Example

For simplicity, assume a reimbursement pool of 900,000 USD.

**DAO cycle 82**

| Refund Angel | Funding amount | Monthly compensation | Fee share |
| ------------ | -------------: | -------------------: | --------: |
| A | 486,000 USD | 2.5% | 54% |
| B | 243,000 USD | 2.3% | 27% |
| C | 171,000 USD | 2.4% | 19% |

During the first DAO cycle, only 25% of BTC fee revenue is allocated to Refund Angels:

| Refund Angel | Share of Refund Angel pool | Share of total BTC fee revenue |
| ------------ | -------------------------: | -----------------------------: |
| A | 54% of 25% | 13.5% |
| B | 27% of 25% | 6.75% |
| C | 19% of 25% | 4.75% |

**DAO cycle 83**

Refund Angel D submits a proposal for 300,000 USD at a monthly compensation rate of 2.35%. If the DAO accepts the proposal, D's allocation displaces the most expensive existing allocation. In this example, that is Refund Angel A at 2.5%.

As a result, A's allocation is reduced from 486,000 USD to 186,000 USD, while D receives a new allocation of 300,000 USD at 2.35%.

Any compensation accrued by A up to the displacement date remains owed under A's original terms. The displacement affects only the remaining unsettled allocation and does not retroactively change previously accrued compensation.

This reduces the DAO's future compensation costs while allowing A to recover a substantial portion of the allocation earlier than expected. A's approved treatment for the displaced portion is unchanged; that portion is simply settled immediately rather than through future fee distributions.

## Financial Risks for the DAO

The Bisq DAO is not designed to maximize profit and does not maintain reserves for reimbursements of this scale. Its sustainability depends primarily on trade-fee revenue and contributor compensation management.

The reimbursement effort and the associated compensation for Refund Angels create a significant financial challenge. The DAO must manage this carefully to preserve the long-term sustainability of the project.

The most immediate impact will be on Burning Men. Most Burning Men are active contributors, and BTC fee distributions provide a relatively frictionless way to convert earned BSQ into BTC. A significant reduction in those distributions could weaken contributor incentives and reduce participation. If such effects become apparent, the allocation of fees to Refund Angels may need to be adjusted.

The DAO's financial sustainability ultimately depends on traders continuing to use Bisq. Fee changes that are too aggressive could make smaller trades uneconomical, reduce liquidity, or encourage high-volume traders to migrate to competing platforms. Any adjustments to the fee model should therefore be introduced gradually, monitored closely, and evaluated based on their actual impact on trading activity.

The challenge for the DAO is to balance these objectives: settling its obligations to Refund Angels, preserving contributor incentives, maintaining an attractive trading environment, and ensuring the long-term sustainability of the project. This post is intended to support that discussion and gather feedback before any decisions are made.

## Fee Parameters Under Review

This section identifies fee parameters that may warrant review. Any change will require a DAO proposal and approval through the DAO governance process.

The reimbursement effort creates additional financial pressure, but it also provides an opportunity to re-evaluate parts of the fee model that may no longer reflect current conditions. The objective is not to maximize fee revenue, but to ensure that the fee model remains sustainable, competitive, and aligned with the long-term needs of the Bisq project.

Different groups are affected by different fee parameters. Small traders are most sensitive to minimum fees, high-volume traders are most sensitive to BSQ fee discounts, and Burning Men are affected by the temporary reallocation of BTC fee revenue.

Any proposed changes should be introduced gradually and evaluated based on measurable outcomes. Relevant metrics include trade volume, offer count, completed trades, average trade size, support burden, stuck-trade rates, BSQ fee usage, the impact on Burning Men revenue, and contributor compensation requirements.

The goal is to identify adjustments that improve the DAO's financial sustainability while minimizing negative effects on traders, contributors, liquidity, and overall platform growth.

### Minimum BSQ Fee

The minimum BSQ fee has not been adjusted alongside the regular BSQ fee schedule. Applying the same discount logic would increase the minimum BSQ fee from 0.03 BSQ to approximately 2 BSQ.

Any change should be evaluated together with potential adjustments to BTC fees. Maintaining a relatively low minimum BSQ fee helps preserve an affordable option for smaller trades.

Because the minimum BSQ fee contributes only a small share of total fee revenue, increasing it is unlikely to materially improve the DAO's financial position. At the current stage, such a change does not appear to be a priority.

### Minimum BTC Fee

The current minimum BTC fee of 0.00005 BTC creates consolidation costs for Burning Men, because they accumulate many small UTXOs that later need to be consolidated, incurring additional miner fees. The impact is strongest on smaller trades and differs between makers and takers.

Because the effects are difficult to model precisely, changes should be gradual.

**Recommendation:** First increase to 0.000075 BTC. If no negative effects are observed, later increase to 0.0001 BTC.
Proposal: [Increase Minimum BTC Fee][5].

### BSQ Fee Discount

The current BSQ fee discount is about 50%. The original purpose of this large discount was twofold: to support a single, centralized Burning Man arrangement that has since been decentralized, and to encourage BSQ acquisition for DAO participation. In practice, most users now treat the discount mainly as a way to reduce trading costs rather than as an incentive to participate in governance. Reducing the discount better aligns the fee model with the role BSQ payments play today.

A lower discount would likely increase BTC fee revenue, especially from higher-volume traders. But fee increases that are too aggressive could push traders away. The target should not be 0%, because BSQ burned directly by traders is still more efficient for the DAO than routing fees through Burning Men.

**Recommendation:** Reduce the discount from 50% to 40%, monitor the effects, and gradually move toward a 25% target if conditions allow.
Proposal: [Reduce BSQ Fee Discount][6] for more background context.

### Reduce Miner Fees

The current default miner fee is 10 sat/vbyte. That value was chosen to reduce the risk of stuck trades during periods of high Bitcoin network congestion. In recent years, however, fee rates have remained low for extended periods, making the current default appear unnecessarily high.

Reducing the fee too aggressively is still not recommended, because delayed transactions and stuck trades can negatively affect both trading peers and increase the support burden.

A moderate reduction in miner fees could help offset some of the impact of potential trade-fee increases, particularly for smaller trades.

**Recommendation:** Reduce the default miner fee to 2 sat/vbyte and make the value configurable through the Filter object. This would allow Bisq to respond quickly to changing mempool conditions without requiring a software release. Under recent network conditions, 2 sat/vbyte appears to be a reasonable default while retaining the flexibility to increase the fee if congestion returns.

Proposal: [Reduce Miner Fees][7] for additional background information.

## Additional Measures to Improve Financial Sustainability

### Improve Stablecoin Support

Bisq already supports a limited number of stablecoins, including USDT (ERC-20), DAI, and TrueUSD.

Support could be expanded by adding additional stablecoins and supporting more blockchain networks for existing stablecoins. Priority should be given to assets and networks with the highest expected trading demand.

The market price feed would also require improvements. Because stablecoins are typically quoted relative to USD, their prices are often more intuitive when displayed differently from conventional altcoin markets. The development effort required for such UI changes would need to be evaluated.

**Recommendation:** Expand support for the most relevant stablecoins and blockchain networks in Bisq 1 and include them in the market price feed, prioritizing those with the highest expected trading volume.

GitHub issue: [Improve Stablecoin Support][8].

### Improve Exposure to Bisq Easy

If fees increase, very small trades may become less economical on Bisq 1. In some of those cases, Bisq Easy may be a more suitable alternative because it does not require security deposits.

**Recommendation:** Provide contextual guidance for very small trades on Bisq 1, and recommend Bisq Easy when estimated trading costs are disproportionate to the size of the trade.

GitHub issue: [Improve Exposure to Bisq Easy][9].

## How to Participate

This post provides context on the situation and the challenges ahead. We welcome participation in the discussion of these issues and invite potential Refund Angels to help ensure Bisq’s long-term sustainability.

- **Discuss fee proposals and the settlement model**: comment on the relevant proposals on GitHub.
- **Participate as a Refund Angel**: submit a DAO proposal with your funding amount, accounting method, and requested monthly compensation rate. New participation may be proposed in any DAO cycle until settlement is completed.
- **Provide feedback**: Join our [community channels](/#community) to take part in the discussion.

## The Path Forward

The release of Bisq MuSig on the Bisq 2 platform remains the highest priority for Bisq development.

The security incident required a substantial amount of time and resources that would otherwise have been dedicated to that effort. As a result, progress has been slower than planned. While it is hard to estimate a release date, we remain hopeful that MuSig can be released during 2026.

Once available, we expect many traders to migrate to Bisq 2 to benefit from the advantages of the MuSig protocol and the Bisq 2 platform. Bisq 1 will continue to operate and is expected to remain the primary home for BSQ markets and DAO governance.

The incident created significant challenges for the project, contributors, and affected users. The immediate priority was to protect users, diagnose the vulnerability, maintain transparent communication, strengthen security, and ensure victims were reimbursed. With those objectives now achieved, attention can return to improving the platform and continuing the transition toward Bisq 2.

The proposals discussed in this post are intended to address the financial challenges caused by the incident while preserving the long-term sustainability of the DAO. We encourage community feedback on those proposals so that any decisions made reflect the interests of traders, contributors, and the broader Bisq community.

## Glossary

* **Refund Angels**: Contributors and supporters who provided funds to enable the prompt reimbursement of victims and who may receive repayment from future BTC fee revenue, subject to DAO approval.
* **Burning Men**: Bisq contributors who burn BSQ in exchange for the right to receive BTC trade fees. They convert BTC fees into burned BSQ on behalf of users who choose not to pay fees in BSQ. This process is one of the mechanisms by which revenue is distributed within the DAO.
* **Filter object**: A network configuration object published and signed by a trusted Bisq contributor. In this context, it defines fee recipients and allocation percentages. Bisq clients verify the signature and reject invalid Filter objects.
* **MuSig**: An upcoming multi-signature based (MuSig2) trade protocol for Bisq 2.

## References

1. [May 1 security incident post-mortem report][1]
2. [Distribution Method for Refund Angels proposal][2]
3. [Proposal for Refunds to Victims of the May 1st Bisq 1 Trade Protocol Incident][3]
4. [BTC/USD price from May 15, 2026][4]
5. [Increase Minimum BTC Fee proposal][5]
6. [Reduce BSQ Fee Discount proposal][6]
7. [Reduce Miner Fees proposal][7]
8. [Improve Stablecoin Support GitHub issue][8]
9. [Improve Exposure to Bisq Easy GitHub issue][9]
10. [Monthly comptroller reports][10]

[1]: /blog/security-incident-post-mortem/
[2]: https://github.com/bisq-network/proposals/issues/484
[3]: https://github.com/bisq-network/proposals/issues/481
[4]: https://api.coingecko.com/api/v3/coins/bitcoin/history?date=15-05-2026&localization=false
[5]: https://github.com/bisq-network/proposals/issues/485
[6]: https://github.com/bisq-network/proposals/issues/486
[7]: https://github.com/bisq-network/proposals/issues/487
[8]: https://github.com/bisq-network/bisq/issues/7915
[9]: https://github.com/bisq-network/bisq/issues/7916
[10]: https://github.com/bisq-network/roles/issues/111
