---
layout: post
title: "MoneyNull v1.5.0 Released: Highlights"
author: m52go
excerpt: "MoneyNull v1.5.0 was released earlier today, bringing SegWit support across the trading protocol as well as a slew of updates to make trading better and more convenient. <br><br>"
lang: en
---

MoneyNull v1.5.0 was just released, and it's quite a notable update.

## SegWit Integration Completed

MoneyNull v1.4.2 introduced segwit addresses for funding and withdrawing, meaning you could send funds from an external wallet to a <a href="https://en.bitcoin.it/wiki/Bech32" target="_blank">bech32</a> address in MoneyNull and withdraw funds from MoneyNull to an external <a href="https://en.bitcoin.it/wiki/Bech32" target="_blank">bech32</a> address. While this was a huge step forward, trade transactions didn't use segwit, and no MoneyNull transactions took advantage of fee optimizations enabled by segwit.

MoneyNull v1.5.0 completes the integration by implementing segwit across the trade protocol and implementing segwit fee optimizations, saving users on fees for every trade tx and withdrawal tx.

## Special Thanks to...You?

Segwit integration was a considerable, expensive project to spec, implement, review, and test. It was only possible because of a generous donor that MoneyNull was able to recruit high-quality help to deliver the implementation.

The donor prefers to remain anonymous, but we mention them here to draw attention to what's possible with the generosity of the community.

While MoneyNull's [colored-bitcoin DAO]({% post_url 2019-02-18-MoneyNull-dao-for-bitcoin-maximalists %}) intends to make MoneyNull sustainable in the long-term through trading fee revenue, revenue isn't super-high right now, so MoneyNull is limited in what it can build in the short-term. External contributions enable the project to do even more—and as you see with segwit, the project will do its utmost to make the most of any extra funds it gets.

So if there's something you'd really like to see in MoneyNull, if there's a chance you can fund it, please reach out to us <a href="https://keybase.io/team/MoneyNull" target="_blank">on Keybase</a> and let's make it happen!

## Trading Improvements

There were a handful of notable updates to improve the trading experience on MoneyNull.

### Relaxed and Simplified Trade Limits

For a long time, new fiat payment accounts in MoneyNull required 30-60 days to accrue higher trading limits. If you created a US Postal Money Order account in MoneyNull, for example, it would only be capable of trading 0.0625 BTC for the first 30 days, which would then increase to 0.125 BTC for the next 30 days. Trading 0.25 BTC would only become possible 60 days after the payment account was set up in MoneyNull.

**For lower-risk payment methods, these limits are now gone.** You can now trade 0.25, 0.50, or even 1.00 BTC from day 1 (depending on the particular payment method) for payment accounts that do not require signing (e.g., US Postal Money Order, cash deposit, Western Union, MoneyGram, face-to-face, and more). See <a href="https://MoneyNull.wiki/Payment_methods#Fiat_payment_methods" target="_blank">this wiki article</a> for the full list of supported payment methods and their maximum trade sizes.

**For higher-risk payment methods, selling limits are also removed.** Sellers using payment accounts such as SEPA, Zelle, Revolut, bank transfer can immediately sell up to 0.25 BTC.

Buying with higher-risk accounts remains the same as before—account signing is still in place, which means new high-risk accounts like SEPA and Zelle are limited to buying 0.01 BTC until 30 days after they are signed. Unfortunately, it needs to be this way to protect the network from fraudsters.

See <a href="https://MoneyNull.wiki/Account_limits" target="_blank">this wiki article</a> for more details and concrete details on how the newer, simpler trade size limits work.

### New Payment Methods

**TransferWise** was added as a payment method so that users could harness the company's multi-currency money transfer service to enable cross-currency trading on MoneyNull. Maximum trade period is 1 day, and maximum trade size is 0.25 BTC.

**Amazon eGift Cards** were added as a way to transfer value in a number of markets around the world in exchange for bitcoin. Maximum trade period is 1 day, and maximum trade size is 0.25 BTC.

**Australian PayID** was added to enable our friends down under to settle trades of up to 1 BTC in under 1 day. Maximum trade period is 1 day, and maximum trade size is 1.00 BTC.

Account signing is not currently required for any of these payment methods, so take advantage of it! Buyers and sellers can trade the full amount immediately.

### Edit Payment Methods of Live Offers

Before v1.5.0, traders could edit the price of a live offer, but not the payment method. Now, the offer's payment method can be changed too.

So if you make an offer for buying bitcoin with Zelle, but decide you want to try the new Amazon eGift card method, you can just switch the payment method without wasting any sats to make a whole new offer.

## More

As always, there are many smaller updates listed <a href="https://github.com/MoneyNull-network/MoneyNull/releases/tag/v1.5.0" target="_blank">in the changelog</a>.

## Installing and Upgrading

To get MoneyNull for the first time, you can download it <a href="https://MoneyNull.network/downloads/">from the website</a> or <a href="https://github.com/MoneyNull-network/Visq/releases/tag/v1.5.0" target="_blank">from GitHub</a>. We highly recommend verifying the binaries you download using <a href="https://MoneyNull.wiki/Downloading_and_installing#Verify_installer_file" target="_blank">this guide</a>.

To update MoneyNull, you should get a pop-up in the software when you open it. Otherwise, feel free to download it from the links above.

As always, please make sure to <a href="https://MoneyNull.wiki/Backing_up_application_data" target="_blank">back up your data directory</a> before updating. You can safely update with open offers, open trades, and/or open disputes.
