---
layout: post
title: "Open Source Software Development in the Age of AI"
author: HenrikJannsen
excerpt: "How AI-assisted development, growing participation, and financial constraints are changing contributions to Bisq, and the budget and review changes we are introducing in response."
lang: en
---

For much of its history, Bisq needed more developers and actively sought experienced, talented contributors.

Over the past six months, the situation has changed in several ways:

- Our development team has grown considerably.
- AI-assisted development is helping new contributors get started and submit work much faster.
- As AI reshapes the IT sector, more developers are looking for new opportunities.
- AI-assisted attacks and exploits have increased our security workload, while security-related service interruptions and the Bitcoin bear market have reduced revenue.

For an open DAO like Bisq, where anyone can contribute and request compensation, these changes bring both opportunities and challenges. We need to balance growing participation with the review capacity and funding available.

## The Bottleneck Is Shifting

Producing code has become easier. Reviewing it, establishing trust, and deciding which changes deserve attention still require experienced people.

A polished pull request does not necessarily reveal how well its author understands the code, its security implications, or how it fits into the wider project. Contributors need to be able to explain their decisions, respond thoughtfully to feedback, and take responsibility for their work.

As contributions increase, several challenges become more pressing:

- **Priorities:** Changes outside the roadmap compete for attention with essential work.
- **Review capacity:** Onboarding, coordination, and repeated feedback cycles draw on maintainers’ limited time.
- **Trust and security:** Building trust with new contributors takes time, particularly for security-sensitive work.
- **Coordination:** A larger contributor base needs clearer ownership, planning, and budgets.

For some tasks, an experienced maintainer using AI for implementation and a second model to support review can complete the work faster than a lengthy feedback cycle with a new contributor. We need to consider the total effort required to review, integrate, and maintain a contribution.

## Bisq Needs to Focus Its Resources

Security work places particular demands on our core developers. It requires deep project knowledge and supervision from experienced, trusted contributors.

Alongside keeping Bisq safe, completing MuSig remains our highest project priority. Much of that work depends on understanding the system as a whole.

Reimbursements following the [May 1 incident][1] and security bounties add further financial pressure. With a larger development team and higher spending, our expenses currently exceed revenue.

We need to bring commitments back in line with the resources available.

## What Will Change

To protect Bisq’s sustainability and make room for its most important work, we will introduce:

- **Budgets for each development team**, aligned with project priorities.
- **Lower informal compensation ceilings**, reflecting current financial constraints.
- **A temporary pause on accepting new contributors for compensated development and on routinely reviewing their PRs.**

We appreciate the effort of contributors who have already submitted work and will try to find a fair way forward. Reviews have always depended on maintainer capacity, and compensation remains subject to DAO approval.

**From now on, new contributors should not assume that submitted PRs will be reviewed or compensated.** Before investing substantial time, please contact the relevant maintainers to discuss priorities, review capacity, and whether funded work is available.

Maintainers may make exceptions for high-value contributions, especially where contributors demonstrate their own technical judgment, a good understanding of the project, and the ability to maintain their work.

Our goal is to keep Bisq open to meaningful participation while ensuring its long-term sustainability. We welcome suggestions on making this transition fair and preserving opportunities for future contributors.

[1]: /blog/security-incident-post-mortem/
