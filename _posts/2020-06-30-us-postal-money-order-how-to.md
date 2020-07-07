---
layout: post
title: "How to buy non-KYC bitcoin with a US Postal Money Order"
author: "@heady_wook"
excerpt: "Walking through the process of buying bitcoin with one of the most private payment methods available on Bisq. <br><br>"
lang: en
---

<img src="/images/blog/uspsmo-1.jpg" loading="lazy">

## Introduction

In this guide, my goal is to get you to buy non-KYC bitcoin using a US Postal Money Order (US PMO), one of the most private purchase methods available on Bisq. I will cover how to create a US PMO payment account, how to create a buy offer, and how to buy and send a US PMO via US Postal Service (USPS). This guide will not cover how to download Bisq, take a buy offer, explain deposit collateral, the trade-offs of non-KYC, or how to run Bisq on your own full node. If this is what you need, then read [10 Steps to your first non-KYC bitcoin](https://www.bitcoinqna.com/post/10-steps-to-your-first-non-kyc-bitcoin) by [@BitcoinQ_A](https://twitter.com/bitcoinq_a) for an overview of most of these topics.

## Adding US Postal Money Order as a payment method

The first step in buying bitcoin with a US Postal Money Order (US PMO) on Bisq is to create the payment account in Bisq. This is done in the `Account` > `National currency accounts` tab. Select `Add new account` and pick "US Postal Money Order" in the `Select payment method` drop-down menu. Next, it will prompt for a name and address. Since this is non-KYC, it can be better to use a fake name. Optionally, take it to the next level and use a random name generator to avoid injecting bias into the name. Search "random name generator" in your browser.

<img src="/images/blog/uspsmo-2.jpg" loading="lazy" alt="Figure 1. The supplies.">
<span class="caption">Figure 1. The supplies.</span>

Before I continue, I must mention that it is generally against Bisq trading policy to use fake information in any payment account. However, because a US Postal Money Order (US PMO) is a bearer instrument that works regardless of the name of the sender, it is okay to use a fake name and address **only for buying**.

For the address, there are a couple options depending on how much information you want to give. Since this is non-KYC, do not use your real address. Select one of the following options which you are most comfortable with.

_Pick an Address, Option 1 - More Private_

Use a fake address (search "random address generator") or omit it. The benefit of this option is absolutely no information is revealed. A risk associated with this option is if the envelope is returned for any reason, it would go to the wrong address or end up at the Post Office. The chances of retrieving a returned envelope are reduced with this option.

_Pick an Address, Option 2 - Slightly Less Private_

Enter the address of a neighbor, a friend, or a nearby building, such as the leasing office in an apartment complex or a local mom-and-pop shop. This increases the chances of retrieving a returned envelope and keeps your home address private at the cost of revealing a snippet of information about location.

_After Picking an Address_

Once you decide on the address, save the new account in Bisq. I should mention a couple things here. First, I have not yet experienced any issues with sending an envelope through the USPS. Fortunately, if there were an issue, Bisq has a dispute resolution system in place to address it. Regardless of your choice, the envelope will likely be delivered. Second, the account that is created is only for making purchases. **If you intend on selling, you must create a separate payment account with valid information in order to receive a US PMO.**

## Creating a buy offer with a US Postal Money Order

Now that the new payment method has been created, I will go over how to create a buy offer with a US Postal Money Order (US PMO) on Bisq. To start, go to the `Buy BTC` tab, select `Create new offer to buy BTC with USD`, and verify the correct trading account is selected (i.e., US PMO). Next, enter the amount of bitcoin to purchase (for example, 0.01 BTC). New US PMO payment accounts on Bisq are limited to buying or selling 0.0625 BTC per trade. This limit increases to 0.125 BTC after 30 days and to 0.25 BTC after 60 days (see [account limits](https://bisq.wiki/Account_limits#Account_aging){:target="_blank"} for details on how account aging works).

Next, enter the percent premium, or price, to pay—but keep the total buy amount below $1,000. If the total is more than $1,000, then the Post Office cashier will be required to ask for identification. This is a trade-off that must be made for non-KYC bitcoin. However, it is possible to acquire multiple US PMOs across a few days.

A price at market value (i.e., no premium) would be at zero percent (0.00%). Positive percentages indicate a price below market value and negative percentages indicate a price above market value. I usually pay a premium because it comes with a couple benefits. One benefit to paying a premium is sellers prioritize them over others (i.e., your offer is taken quicker). A second benefit is your peer, the seller, makes the gains versus some centralized panoptic exchange. However, if you wish, I encourage you to set a price at or reasonably below market value. With patience and a low time preference, your offer will likely get taken.

<img src="/images/blog/uspsmo-3.jpg" loading="lazy" alt="Figure 2. Buy offer for 0.01 BTC at 6.25% above market value.">
<span class="caption">Figure 2. Buy offer for 0.01 BTC at 6.25% above market value.</span>

After entering the amount and price, select `Next step`. You will now need to fund your buy offer by depositing a bitcoin collateral (i.e., escrow). It will be returned after another trader takes your buy offer (or if you cancel the offer). Follow the prompts and deposit the collateral to the address provided on Bisq. Once sent, confirmation is generally quick. Once the deposit has been confirmed, you will be able to complete your buy offer. You can check on your offer in the `Portfolio` > `My open offers` tab. Scroll to it and you will see an option to change pricing or cancel it. If you cancel the offer, you will forfeit Bisq's trading fee (but you will get your deposit back).

Now all you do is wait for a seller to take your buy offer. You can do this by running Bisq for a few hours a day, overnight, or a few days out of the week until the offer is taken. To give you an idea on how long you might need to wait, I have had some offers get taken within two days of posting while others took up to three weeks to get taken.

## Buying and sending via US Postal Service

Now that you have a buy offer open with a US Postal Money Order (US PMO) on Bisq, I will go over buying and sending a US PMO to the seller through the US Postal Service (USPS). I will review the supplies needed and how to prepare the envelope for delivery. Then, I will discuss the best practices on obtaining the US PMO.

### Supplies and preparation

To send a US Postal Money Order (US PMO) in the mail, you will need the following:
* envelope(s)
* stamp(s)
* blank sheet(s) of printer paper
* pen

Find a private place to fill out the envelope. In the top-left corner of the envelope, write your pseudo-name and "address" (or omit it, depending on your method). On the top-right corner, place the stamp. In the middle of the envelope write the name and address of the seller provided to by Bisq.

Next, fold the blank sheet of paper in half twice (to form a "V" shape). Place the folded sheet in the envelope with the opening face up. In between the "V" opening, place the US PMO (see Figure 3). Doing this adds an extra layer of thickness to prevent someone from looking in on the envelope's contents.

<img src="/images/blog/uspsmo-4.jpg" loading="lazy" alt="Figure 3. Add an extra layer of thickness to the envelope.">
<span class="caption">Figure 3. Add an extra layer of thickness to the envelope.</span>

Finally, to seal the envelope, you might consider moistening your finger with water rather than licking it. Envelopes are typically delivered in 3-5 business days, depending on distance and whether it was sent earlier or later in the week.

### Buying the US Postal Money Order

In this section, I discuss the best practices on buying a US Postal Money Order (US PMO). Use the following suggestions to maximize your privacy. Otherwise, do what you are comfortable with.

For starters, get cash (this is a must) because it does not leave an electronic trace and is not connected to your identity like a debit/credit card is. Get the exact amount of cash as listed on Bisq plus extra cash to cover the US Postal Service (USPS) fee. The fee is $1.25 for US PMO values of $0.01 to $500.00 and $1.75 for values of $500.01 to $1,000.00.

<img src="/images/blog/uspsmo-5.jpg" loading="lazy" alt="Figure 4. A US Postal Money Order.">
<span class="caption">Figure 4. A US Postal Money Order.</span>

Next, when going to the USPS, make sure you have your cash and, since this is about non-KYC, intentionally leave your identification behind. Also, consider wearing sunglasses and a mask to cover your face. In the days of COVID-19, wearing a mask has become ever so normalized. This works great for hiding your identity from the cashier, cameras, and other passerby—a collateral benefit. As for the sunglasses, I have been able to buy a US PMO without ever taking them off. I forgot I was wearing them at the time, but the cashier did not say anything anyway.

If this is your first time buying a US PMO, let me tell you: it is easy as pie. It is your right to use the USPS money service, so exercise it. Simply walk up to the cashier and tell them you want a money order for $XXX.XX. Complete the exchange and ask for a printed receipt (keep this for your records in case of arbitration). Should they ask you for identification, as nicely as possible tell them, "I do not have it on me and I am pretty sure I am not required to show identification for US PMOs under $1,000." Alternatively, try a different USPS location or return later.

Upon receiving the US PMO, place it out of sight (cameras), let the ink dry (avoid smearing it), and leave. Find a private place to fill out the US PMO and the envelope, if you have not done so already. On the receipt portion of the US PMO (see Figure 4), write the sellers information, tear it off, and keep it for your records along with your receipt from the USPS. Once the trade is finalized, I like to burn the receipts in a bowl rather than shred them or throw them away. Next, complete the "Pay to" portion with the seller's information (left side) along with the memo as specified by Bisq. Fill in your fake name and fake address or omit it (right side). Double check everything is accurate on the envelope, US PMO, and Bisq. Then place it in the outgoing mail.

Lastly, on Bisq, you must select the `Payment started` button to continue with the trade. The seller will be notified the payment was sent and then must verify they received it. Again, depending on the circumstances, the seller will receive your money order within 3-5 business days. Also, Bisq provides an eight-day window for the transaction to be completed before arbitration can occur.

Once the seller verifies they received the payment, the funds will be released to you.

Congratulations, you now have non-KYC bitcoin!

You will have the option to withdraw to your Bisq wallet or to an external wallet. If you withdraw to an external wallet, you must withdraw it to a P2SH bitcoin address (starts with a 3; lower fees) or a legacy (P2PKH) address (starts with 1; higher fees). The only type of address you cannot withdraw to is Bech32 (starts with bc1).

## Conclusion

In this guide, I walked through how to buy non-KYC bitcoin with a US Postal Money Order (US PMO) on Bisq. I reviewed how to add a US PMO payment account and how to create a buy offer on Bisq. I also reviewed how to buy a US PMO and prepare it for delivery. I hope this guide has accomplished its goal and has led you to purchase non-KYC bitcoin using a US PMO on Bisq. If so, cheers!
