---
layout: post
title: Bisq v.0.7.1 was released today
author: The Bisq Team
---

The Bisq team is happy to announce the release of version 0.7.1

_"It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult."_ - Lucius Annaeus Seneca 

## Release notes
This release adds acknowledgment status for trade, offer and dispute messages. 
This gives the user more information on each message status (message arrived, arrival confirmed, sent to mailbox) during its trade/dispute experience.
Besides lots of bug fixes, MoneyGram was added as a new payment method and the account field for Argentinian banks support now non-standard account identifiers. 

This release comes also with some important updates for improved network stability.
Please update asap.

## Trading
- [Ack messages for all trade, offer- and dispute messages](https://github.com/bisq-network/bisq-desktop/issues/1585)
- [Add referrer Id for external Bisq market makers](https://github.com/bisq-network/proposals/issues/28)
- [Fix bug in edit offer screen](https://github.com/bisq-network/bisq-desktop/pull/1583) 
- [Remove validation for Argentinian account numbers and allow manual edit](https://github.com/bisq-network/bisq-desktop/pull/1553)
- [Fix bug with Sepa offers and Sepa instant taker](https://github.com/bisq-network/bisq-core/issues/117)
- [Lower minimum withdrawal fee to 1 satoshi per byte](https://github.com/bisq-network/bisq-core/pull/111)
- [Fix reuse of change addresses](https://github.com/bisq-network/bisq-core/pull/113)
- [Don’t treat RBF transactions as risky](https://github.com/bisq-network/bisq-core/pull/124)
- [Fix wrong dust limit values in Bitcoinj](https://github.com/bisq-network/bitcoinj/commit/bbcb39b1c33c61f146265ace94ae54e21e1b8e47)
- [Deactivate Venmo and CashApp](https://github.com/bisq-network/bisq-core/pull/115)

## Payment methods
- Add new payment method: [MoneyGram](https://github.com/bisq-network/bisq-desktop/pull/1522)

## Assets
- Add 28 new assets: 01coin, Aquachain, BitCloud, Bitcoin Core, Bitcoin Instant, Credits, Cryptonodes, CryptoTari, DACash, Diamon, DRIP, FuturoCoin, Graft, LikeCoin, Lobstex, MaxCoin, MegaCoin, MicroCoin, Motion, Myriadcoin, Nano, NewPowerCoin, Nimiq, Pix, PixelPropertyToken, PRiVCY, Triton, Wavi

## UI
- [Add popup for feedback after trade completion](https://github.com/bisq-network/bisq-desktop/issues/1584)
- [Show popup if local Bitcoin core is running](https://github.com/bisq-network/bisq-desktop/issues/1566)
- [Fix wrong duration translation in double digit numbers](https://github.com/bisq-network/bisq-desktop/pull/1552)
- [Fix wrong singular word translation in double digit numbers](https://github.com/bisq-network/bisq-desktop/issues/1549)
- [Fix sorting of currencies in market/trades view](https://github.com/bisq-network/bisq-desktop/pull/1591)

## Development
- [Don’t include assets with diff. network type](https://github.com/bisq-network/bisq-core/pull/129)
- [Ignore “Alert key compromised” message from old nodes in Bitcoinj](https://github.com/bisq-network/bitcoinj/commit/6728ef8bfd685547fe38586302514f2eca6d426c)

## Signature keys
Url of the signing key (Christoph Atteneder): https://bisq.network/pubkey/29CDFD3B.asc
Full fingerprint: `CB36 D7D2 EBB2 E35D 9B75  500B CD5D C1C5 29CD FD3B`

How to verify signatures?
`gpg --digest-algo SHA256 --verify BINARY{.asc*,}`
Replace BINARY with the file you downloaded (e.g. Bisq-0.7.1.dmg)

Verify jar file inside binary:
You can verify on OSX the jar file with:
`shasum -a256 [PATH TO BISQ APP]/Bisq.app/Contents/Java/Bisq-0.7.1.jar`
The output need to match the value from the Bisq-0.7.1.jar.txt file.

## Hint for Debian users
If you have problems starting Bisq on Debian use: `/opt/Bisq/Bisq`

## Download
- [bisq.network/downloads](https://bisq.network/downloads/)

## Update
If you have already Bisq installed, Bisq will detect by itself that an update is available.
You just have to follow the (short) procedure.

## Reminder
We profit to remind all users to realise regular saves.
This will help you if for example your hard disk crashes.
Don't forget also to note your seed words on a safe place.

