---
layout: page
title: Roadmap &lsaquo; Bisq - The decentralized Bitcoin exchange
banner: /images/roadmap1.png
---
# Roadmap

The Bisq Roadmap is a living document that shares the Bisq Team's vision and our current development priorities. This Roadmap is intended to provide an idea of when certain features are likely to become available.
{: .mt-4 .col-sm-12 .col-md-10 .pl-0}

This Roadmap might change at any time, especially in response to [Community]({{ site.url }}/community/) feedback.
{: .mt-4 .col-sm-12 .col-md-10 .pl-0}

You can help speed up our progress by [contributing](https://docs.bisq.network/contributor-checklist.html) to Bisq.
{: .mt-4 .col-sm-12 .col-md-10 .pl-0}

## Planned milestones
{: .mt-5 .pt-5}
##### Version 2.0
{: .mt-5 .mb-2}
 - New trade protocol

## Releases
{: .mt-5 .pt-5}

##### Version 1.1.1
{: .mt-5 .mb-2}
Released [May 6th 2019](https://github.com/bisq-network/bisq/releases/tag/v1.1.1)

This is a hotfix release mainly covering following issue:
- [Allow seller to take any offers](https://github.com/bisq-network/bisq/pull/2813)


##### Version 1.1.0
{: .mt-5 .mb-2}
Released [May 2nd 2019](https://github.com/bisq-network/bisq/releases/tag/v1.1.0)

As there is hardly any scam risk for crypto-to-crypto trades, this release decreases the security deposit amount for these trades back to the pre-DAO state. Also with this release, the time to synchronize the Bisq DAO state should be reduced a lot, and there are many smaller bug fixes and improvements.

Most importantly, this release also includes a temporary restriction that blocks accounts that were created recently to trade in certain markets where we had scammers. **Users running older clients (< 1.1.0) will be completely blocked from trading**, so it is critical that you update as soon as possible! The upcoming release 1.2.0 will include a more robust set of features that should make it nearly impossible to scam traders on Bisq anymore. 

###### DAO
- [Request blocks in case we have not received it](https://github.com/bisq-network/bisq/pull/2730)
- [Add node address and capabilities to prevent timeout](https://github.com/bisq-network/bisq/pull/2732)
- [Fix issues with DAO full mode in preferences](https://github.com/bisq-network/bisq/pull/2736)
- [Count cycles correctly](https://github.com/bisq-network/bisq/pull/2757)

###### UI
- [Add UTF8 for getBytes calls](https://github.com/bisq-network/bisq/pull/2737)
- [Use existing styling for developer alert message](https://github.com/bisq-network/bisq/pull/2746)
- [Use same precision for all x-axis labels](https://github.com/bisq-network/bisq/pull/2763)

###### Trading
- [Add check for account age to apply restrictions](https://github.com/bisq-network/bisq/pull/2801)
- [Improve ignore list](https://github.com/bisq-network/bisq/pull/2733)
- [Improve handling of editing of offers with invalid security deposit](https://github.com/bisq-network/bisq/pull/2740)
- [Use different security deposit for fiat-crypto and crypto-crypto trades](https://github.com/bisq-network/bisq/pull/2742)
- [Add filter to trade history](https://github.com/bisq-network/bisq/pull/2752)
- [Fix account age display of peer](https://github.com/bisq-network/bisq/pull/2753)
- [Don't disable confirm buttons](https://github.com/bisq-network/bisq/pull/2764)

###### Wallet
- [Set p2shHeader to fix address validation issues](https://github.com/bisq-network/bisq/pull/2728)

###### Development
- [Remove BSQ filter for crypto currencies](https://github.com/bisq-network/bisq/pull/2734)
- [Reflect pricenode operator change in ProvidersRepository](https://github.com/bisq-network/bisq/pull/2769)
- [Update mobile notification relay node DEV_URL IP address](https://github.com/bisq-network/bisq/pull/2770)

### Assets
Added two new asset: List Trust Eth reOrigin (TEO) and ParsiCoin (PARS)

##### Version 1.0.1
{: .mt-5 .mb-2}
Released [April 16th 2019](https://github.com/bisq-network/bisq/releases/tag/v1.0.1)

This is a hotfix release mainly covering following two issues:
- [Rebroadcast new blocks at lite nodes to improve DAO synchronization](https://github.com/bisq-network/bisq/pull/2719)
- [Fix wrong calculation of percentage based security deposit in edit offer screen](https://github.com/bisq-network/bisq/pull/2723)

##### Version 1.0
 {: .mt-5 .mb-2}
Released [April 15th 2019](https://github.com/bisq-network/bisq/releases/tag/v1.0.0)

This is probably the most important release since the launch of Bisq as it includes the **Bisq DAO for Mainnet**!
- Bisq’s trading network was already decentralized. With the Bisq DAO, Bisq’s leadership is now decentralized too, making Bisq exceptionally resistant to censorship.
- Trade BSQ (colored bitcoin) to participate in Bisq governance. You can buy and sell BSQ just like any other asset on Bisq.
- Get a 90% discount on trading fees when you use BSQ. Save money and support the project at the same time!

###### Bisq DAO
- [Add genesis transaction and changes required for v1.0.0](https://github.com/bisq-network/bisq/pull/2648)
- [Improve handling of DAO state conflicts](https://github.com/bisq-network/bisq/pull/2674)
- Add DAO launch popup [1](https://github.com/bisq-network/bisq/pull/2688), [2](https://github.com/bisq-network/bisq/pull/2689), [3](https://github.com/bisq-network/bisq/pull/2696), [3](https://github.com/bisq-network/bisq/pull/2701), [4](https://github.com/bisq-network/bisq/pull/2703)
- [Add missing check to prevent re-selection of proposal](https://github.com/bisq-network/bisq/pull/2700)

###### UI
- [Update list of removed assets](https://github.com/bisq-network/bisq/pull/2680)
- [Left align hyperlinks](https://github.com/bisq-network/bisq/pull/2690)
- [Remove non-core languages (ro, hu, sr)](https://github.com/bisq-network/bisq/pull/2697)
- [Prevent text overlapping in popups](https://github.com/bisq-network/bisq/pull/2699)

##### Version 0.9.8
{: .mt-5 .mb-2}
Released [April 8th 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.8)

This is a release focused on issues within the Bisq DAO on our DAO Testnet. Everyone who participates in testing please update to this release to continue with testing!

###### Bisq DAO (on our DAO Testnet)
- [Protect against late blind vote publishing](https://github.com/bisq-network/bisq/pull/2667)
- [Use cryptographic hash from protobuffer serialized data instead of hashCode](https://github.com/bisq-network/bisq/pull/2665)
- [Add information of Satoshis needed for coloring](https://github.com/bisq-network/bisq/pull/2638)
- [Improve transaction display for BTC withdrawal from BSQ wallet](https://github.com/bisq-network/bisq/pull/2655)
- [Add filter for min required version for DAO](https://github.com/bisq-network/bisq/pull/2670)
- [Handle selected proposal popup state when new block is parsed](https://github.com/bisq-network/bisq/pull/2636)
- [Update insufficient BTC warning for issuance proposals](https://github.com/bisq-network/bisq/pull/2643)
- [Close printWriter before renaming temp file](https://github.com/bisq-network/bisq/pull/2669)
- [Reword text in proposal fee pop-up](https://github.com/bisq-network/bisq/pull/2656)
- [Reduce transaction broadcast timeout](https://github.com/bisq-network/bisq/pull/2657)
- [Fix max available stake for voting showing negative](https://github.com/bisq-network/bisq/pull/2622)
- [Fix incorrect required BSQ amount in warning text](https://github.com/bisq-network/bisq/pull/2630)
- [Fix incorrect transaction size shown for bonding](https://github.com/bisq-network/bisq/pull/2652)
- [Fix typo](https://github.com/bisq-network/bisq/pull/2647)

###### Trading
- [Change wrong name for Siacoin in removed crypto list](https://github.com/bisq-network/bisq/pull/2635)

###### Development
- [Add handling for bitcoinRegtestHost=none](https://github.com/bisq-network/bisq/pull/2646)

##### Version 0.9.7
{: .mt-5 .mb-2}
Released [April 2nd 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.7)

This is a hotfix release to fix a rounding issue for market based price offers introduced in v0.9.6.

##### Version 0.9.6
{: .mt-5 .mb-2}
Released [April 2nd 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.6)

This will be the last feature release before the Bisq DAO goes live on Mainnet! It is not only packed with updates around the Bisq DAO, but also includes bug fixes for Tor startup, improvements in message handling and many more minor bug fixes.

###### Bisq DAO (on our DAO Testnet)
- Lots of UI improvements [1](https://github.com/bisq-network/bisq/pull/2566), [2](https://github.com/bisq-network/bisq/pull/2595)
- [Show the correct BSQ or BTC trading fee if it is maker or taker](https://github.com/bisq-network/bisq/pull/2512)
- [Add Facts & Figures section](https://github.com/bisq-network/bisq/pull/2513)
- [Make vote result JSON deterministic](https://github.com/bisq-network/bisq/pull/2515)
- [Add transaction id to proposal display](https://github.com/bisq-network/bisq/pull/2519)
- [Add feedback popup for DAO test users](https://github.com/bisq-network/bisq/pull/2521)
- [Add hash of DAO state](https://github.com/bisq-network/bisq/pull/2532)
- [Don't show locally rejected proposals as accepted in UI](https://github.com/bisq-network/bisq/pull/2528)
- [Improve data structure, validation and performance](https://github.com/bisq-network/bisq/pull/2556)
- [Add mining fee to un/lock bond popup](https://github.com/bisq-network/bisq/pull/2577)
- [Add ISSUANCE_LIMIT param and check for max issuance per cycle](https://github.com/bisq-network/bisq/pull/2584)
- [Prevent BSQ offers below dust limit](https://github.com/bisq-network/bisq/pull/2592)
- [Add irregular txType, add check for total balance, prevent proposal withhold attack](https://github.com/bisq-network/bisq/pull/2587)
- [Add missing check for mandatory BSQ output](https://github.com/bisq-network/bisq/pull/2614)
- [Fix get all bonds not returning not active bonds](https://github.com/bisq-network/bisq/pull/2576)

###### Trading
- [Add removed deprecated payment methods again as it would break trade history](https://github.com/bisq-network/bisq/pull/2505)
- [Set max buyer's security deposit to 20% instead of 10%](https://github.com/bisq-network/bisq/pull/2575)
- [Improve broadcasting of transactions](https://github.com/bisq-network/bisq/pull/2536)
- [Suppress popup at shutdown when open offers are disabled](https://github.com/bisq-network/bisq/pull/2569)
- [Increase request timeouts](https://github.com/bisq-network/bisq/pull/2583)

###### Wallet
- [Improve restore wallet from seed process](https://github.com/bisq-network/bisq/pull/2524)
- [Fix missing balance at restore from seed words](https://github.com/bisq-network/bisq/pull/2517)

###### UI
- Lots of typos and grammar mistakes fixed [1](https://github.com/bisq-network/bisq/pull/2582), [2](https://github.com/bisq-network/bisq/pull/2531), [3](https://github.com/bisq-network/bisq/pull/2565)
- [Show close button when creating offer without required account](https://github.com/bisq-network/bisq/pull/2590)
- [Show fiat rounding info popup also when switching between payment accounts](https://github.com/bisq-network/bisq/pull/2598)
- [Fix error and improve wording for security deposit](https://github.com/bisq-network/bisq/pull/2511)
- [Fix BTC status incorrectly hidden on splash screen](https://github.com/bisq-network/bisq/pull/2567)
- [Make create offer label cases easier to translate](https://github.com/bisq-network/bisq/pull/2606)

###### Development
- [Use the latest bitcoinj version](https://github.com/bisq-network/bisq/pull/2602)
- [Move clear blockstore feature to bitcoinj](https://github.com/bisq-network/bisq/pull/2563)

###### Privacy
- [Fix exception handling during Tor setup](https://github.com/bisq-network/bisq/pull/2538)
- [Update Netlayer to 0.6.5](https://github.com/bisq-network/bisq/pull/2581)

###### Monitoring
- [Added market metric](https://github.com/bisq-network/bisq/pull/2507)

###### Assets
- Added 4 new assets: Amitycoin (AMIT), Navcoin (NAV), Qwertycoin (QWC), XDR (XDR0)

##### Version 0.9.5
{: .mt-5 .mb-2}
Released [March 6th 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.5)

This release introduces  **instant trading** for altcoins (trade duration < 1 hour), **percentage based security deposits** to better match the traded amount and other bug fixes across the board. Especially the problem with lost trading fees should be a thing of the past from now on.

One important feature for the Bisq DAO is now also included in this version: Spending of unconfirmed BSQ change outputs.

So there are many reasons to update to this version including 13 new assets.

###### Bisq DAO (on our DAO Testnet)
- [Allow spending of unconfirmed BSQ change outputs](https://github.com/bisq-network/bisq/pull/2482)
- [Show valuation in BTC balance tooltips](https://github.com/bisq-network/bisq/pull/2481)
- [Update bond lockup prompt](https://github.com/bisq-network/bisq/pull/2487)
- [Fix incorrect available balance for voting](https://github.com/bisq-network/bisq/pull/2462)

###### Trading
- [Add altcoin payment method for live trading](https://github.com/bisq-network/bisq/pull/2490)
- [Use percentage based value for security deposit](https://github.com/bisq-network/bisq/pull/2498)
- [Fix lost taker fee problem by delaying broadcasting of taker fee tx](https://github.com/bisq-network/bisq/pull/2488)
- [Fix memory leak in message throttle mechanism](https://github.com/bisq-network/bisq/pull/2475)

###### UI
- [Fix system tray visibility for macOS in dark mode](https://github.com/bisq-network/bisq/pull/2492)
- [Fix issue in multi-screen environment on Linux](https://github.com/bisq-network/bisq/pull/2460)
- [Fix Windows system tray icon resolution](https://github.com/bisq-network/bisq/pull/2467)

###### Development
- [Seed node repo refactoring](https://github.com/bisq-network/bisq/pull/2464)
- [Add program arguments for p2p network config](https://github.com/bisq-network/bisq/pull/2494)
- [Remove Log.traceCall methods to improve performance](https://github.com/bisq-network/bisq/pull/2500)

###### Build
- [Add MacOS support in install_java.sh script](https://github.com/bisq-network/bisq/pull/2483)

###### Installation
- [Update installer background for macOS](https://github.com/bisq-network/bisq/pull/2471)

###### Assets
- Added 13 new assets: Arqma (ARQ), Bitzec (BZC), CloakCoin (CLOAK), Doichain (DOI), DSTRA (DST), Galilel (GALI), Hatch (HATCH), Helium (HLM), LitecoinPlus (LCP), MirQuiX (MQX), Plenteum (PLE), Veil (VEIL), XDR (XDR)

##### Version 0.9.4
{: .mt-5 .mb-2}
Released [February 21st 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.4)

This release is featuring a 2x increase of the current trade limits for fiat and altcoins, lots of improvements for the Bisq DAO on Testnet and includes bug fixes across the app. You should update to this release especially if you had problems restoring your wallet or tor related startup issues.

###### Bisq DAO (on Testnet)
- [Enable DAO menu item for Mainnet](https://github.com/bisq-network/bisq/pull/2342)
- [Show DAO news badge](https://github.com/bisq-network/bisq/pull/2394)
- [Add additional information on DAO](https://github.com/bisq-network/bisq/pull/2421)
- [Show warning for bonded role if user has insufficient funds](https://github.com/bisq-network/bisq/pull/2386)
- [Show information while DAO is synchronized](https://github.com/bisq-network/bisq/pull/2388)
- [Show information if no proposal can be created right now](https://github.com/bisq-network/bisq/pull/2372)
- [Adjust length of DAO phases depending on network](https://github.com/bisq-network/bisq/pull/2277)
- [Show BSQ trading fee more explicitly when funding your offer](https://github.com/bisq-network/bisq/pull/2379)
- [Wait until proposal is published before resetting the form](https://github.com/bisq-network/bisq/pull/2384)
- [Add link from confiscation proposal to bond view](https://github.com/bisq-network/bisq/pull/2366)
- [Filter out blind votes not included in majority hash](https://github.com/bisq-network/bisq/pull/2371)
- [Handle republishing of all DAO governance data](https://github.com/bisq-network/bisq/pull/2363)
- [Handle properly burn cases](https://github.com/bisq-network/bisq/pull/2365)
- [Avoid BSQ burn by mistake](https://github.com/bisq-network/bisq/pull/2242)
- [Fix issues with majority hash](https://github.com/bisq-network/bisq/pull/2360)
- [Fix incorrect time shown in phase duration](https://github.com/bisq-network/bisq/pull/2313)
- [Fix snapshot issue](https://github.com/bisq-network/bisq/pull/2329)
- [Fix incorrect phase display](https://github.com/bisq-network/bisq/pull/2333)
- [Fix missing removal of old or invalid proposals](https://github.com/bisq-network/bisq/pull/2377)
- [Fix roll over behaviour of highlighted table titles](https://github.com/bisq-network/bisq/pull/2370)

###### Trading
- [Increase trade limit. Make trade limit a DAO parameter](https://github.com/bisq-network/bisq/pull/2413)
- [Show all offers in offer book dashboard](https://github.com/bisq-network/bisq/pull/2318)
- [Improve Monero and Cryptonote address validator](https://github.com/bisq-network/bisq/pull/2422)
- [Add info popup for BEAM accounts. Improve GRIN info popup text.](https://github.com/bisq-network/bisq/pull/2423)
- [Remove email for Revolut account](https://github.com/bisq-network/bisq/pull/2426)
- [Add more instructions at dispute system message](https://github.com/bisq-network/bisq/pull/2428)
- [Improve handling of removed assets](https://github.com/bisq-network/bisq/pull/2306)
- [Allow payment account selection in fund offer screen](https://github.com/bisq-network/bisq/pull/2315)
- [Fix trade currency handling for multiple currency payment accounts](https://github.com/bisq-network/bisq/pull/2310)

###### UI
- [Improve resizing of buy and sell tables](https://github.com/bisq-network/bisq/pull/2317)
- [Not show warning popup for imported payment accounts](https://github.com/bisq-network/bisq/pull/2316)
- [Add Altcoin disclaimer](https://github.com/bisq-network/bisq/pull/2233)
- [Fix grammatical mistakes and errors in display strings](https://github.com/bisq-network/bisq/pull/2314)
- [Fix offer book chart is not updated](https://github.com/bisq-network/bisq/pull/2237)

###### Privacy/Security
- [Delete tor files at startup](https://github.com/bisq-network/bisq/pull/2344)
- [Improve handling when unable to connect to tor](https://github.com/bisq-network/bisq/pull/2399)

###### Wallet
- [Fix wallet restore issue on Windows](https://github.com/bisq-network/bisq/pull/2403)

###### Development
- [Allow host as bitcoinRegtestHost parameter](https://github.com/bisq-network/bisq/pull/2312)
- [Allow tor to be used with regtest](https://github.com/bisq-network/bisq/pull/2346)
- [Remove libdohj dependency](https://github.com/bisq-network/bisq/pull/2368)
- [Add scripts to autosetup dao on regtest](https://github.com/bisq-network/bisq/pull/2405)
- [Add application launchers for UI test files](https://github.com/bisq-network/bisq/pull/2389)

###### Build
- [Improve JAVA_HOME override](https://github.com/bisq-network/bisq/pull/2248)
- [Add execute permission for shell scripts](https://github.com/bisq-network/bisq/pull/2350)

###### Installation
- [Fix windows install custom translations](https://github.com/bisq-network/bisq/pull/2247)
- [Update macOS installer background image](https://github.com/bisq-network/bisq/pull/2265)

###### Infrastructure
- [First milestone of new monitoring](https://github.com/bisq-network/bisq/pull/2348)
Check it out at https://monitor.bisq.network

###### Assets
- Added 19 new assets: Adeptio (ADE),  Askcoin (ASK), Augmint Euro (AEUR), AustraliaCash (AUS), BitDaric (DARX), Cash2 (CASH2), Credits (CRDS), CRowdCLassic (CRCL), DAI Stablecoin (DAI), DeepOnion (ONION), Fujicoin (FJC), LitecoinZ (LTZ), Lytix (LYTX), Mile (MILE), Persona (PRSN), TrueUSD (TUSD), USD Coin (USDC), VectorspaceAI (VXV), ZelCash (ZEL)

- Removed assets: Gridcoin (GRC) and ZeroOneCoin (ZOC)


##### Version 0.9.3
{: .mt-5 .mb-2}
Released [January 8th 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.3)

This is a hot fix release as an empty trade object causes the trades statistic screen to fail right now.

##### Version 0.9.2
{: .mt-5 .mb-2}
Released [January 8th 2019](https://github.com/bisq-network/bisq/releases/tag/v0.9.2)

With this release the fee model of Bisq was simplified and the maker fee reduced. The Bisq trading fee for the offer maker is now a fixed percentage of 0.1% and for the taker it was increased from 0.2% to 0.3%. This should reflect the higher burden on the maker side and incentivize market makers.
Besides that we squashed some bugs in the Bisq DAO and improved the UI on multiple places. This release adds 19 new assets including the 2 Mimblewimble implementations Beam and Grin (Grin will be enabled as soon as it goes live on Mainnet).

###### Bisq DAO (on Testnet)
- [Fix icon handling in vote result table](https://github.com/bisq-network/bisq/pull/2172)
- [Fix late proposals processing](https://github.com/bisq-network/bisq/pull/2191)
- [Fix vote reveal transaction publishing](https://github.com/bisq-network/bisq/pull/2195)
- [Fix performance issue at parsing](https://github.com/bisq-network/bisq/pull/2199)

###### Trading
- [Simplify fee model by using fixed percentage](https://github.com/bisq-network/bisq/pull/2212)
- [Reduce maker fee to 0.1%](https://github.com/bisq-network/bisq/pull/2213)

###### UI
- Updated existing translations and added Persian as new supported language
- Fix multiple typos and minor grammatical mistakes: [1](https://github.com/bisq-network/bisq/pull/2138), [2](https://github.com/bisq-network/bisq/pull/2148), [3](https://github.com/bisq-network/bisq/pull/2162), [4](https://github.com/bisq-network/bisq/pull/2185)
- [Reduce line height in certain tables](https://github.com/bisq-network/bisq/pull/2215)
- [Show more verbose label when taking an existing offer](https://github.com/bisq-network/bisq/pull/2215)
- [Show warning popup if multiple valid payment accounts are available for offer](https://github.com/bisq-network/bisq/pull/2215)
- [Improve padding of password input window](https://github.com/bisq-network/bisq/pull/2215)
- [Disable payment accounts combobox in pay funds screen when taking an offer](https://github.com/bisq-network/bisq/pull/2215)
- [Improve button hover effect, so it is not mistaken as disabled](https://github.com/bisq-network/bisq/pull/2187)
- [Update "Next"-button on account change, when creating an offer](https://github.com/bisq-network/bisq/pull/2205)

###### Privacy/Security
- Update to netlayer 0.6.3: [1](https://github.com/bisq-network/bisq/pull/2192), [2](https://github.com/bisq-network/bisq/pull/2194)

###### Development
- [Improve Windows packaging process](https://github.com/bisq-network/bisq/pull/2163)
- [Improve Linux packaging process](https://github.com/bisq-network/bisq/pull/2190)
- Improve install_java.bat for Windows: [1](https://github.com/bisq-network/bisq/pull/2131), [2](https://github.com/bisq-network/bisq/pull/2165)
- [Configure default system JDK for Linux](https://github.com/bisq-network/bisq/pull/2211)
- [Remove pricenode direct dependency on assets](https://github.com/bisq-network/bisq/pull/2197)
- [Be able to upgrade bitcoinj without upgrading libdohj](https://github.com/bisq-network/bisq/pull/2198)
- [Preparations for http api](https://github.com/bisq-network/bisq/pull/2207)

###### Installation
- [Improve Windows install experience](https://github.com/bisq-network/bisq/pull/2164)

###### Infrastructure
- [Don't show filtered currencies](https://github.com/bisq-network/bisq/pull/2220)
- [Bisq Network Monitor: Milestone Babysteps](https://github.com/bisq-network/bisq/pull/2181)

###### Assets
- Added 19 new assets:
Aeon (AEON), Beam (BEAM), Bitmark (BTM), Dextro (DXO), FourtyTwo (FRTY), GambleCoin (GMCN), Grin (GRIN) (will be enabled on Mainnet release), Horizen (ZEN), IdaPay (IDA), Iridium (IRD), Noir (NOR), Pinkcoin (PINK), Qbase (QBS), Remix (RMX), SiaPrimeCoin (SCP), SpaceCash (SPACE), UnitedCommunityCoin (UCC), Webchain (WEB), WrkzCoin (WRKZ)
- Removed not traded assets.

##### Version 0.9.1
{: .mt-5 .mb-2}
Released [December 13th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.9.1)

###### Bisq DAO (on Testnet)
- [Fix selection of BTC testnet in Settings](https://github.com/bisq-network/bisq/pull/2063)
- [Fix reorg issues](https://github.com/bisq-network/bisq/pull/2056)
- [Improve handling of reorgs](https://github.com/bisq-network/bisq/pull/2067)
- [Handle RPC errors](https://github.com/bisq-network/bisq/pull/2098)
- [UI improvements in Voting screen](https://github.com/bisq-network/bisq/pull/2094)
- [Fix validatation of display fields in proposal display](https://github.com/bisq-network/bisq/pull/2074)
- [Use animation for vote button](https://github.com/bisq-network/bisq/pull/2099)
- [Use uppercase in submenu items](https://github.com/bisq-network/bisq/pull/2109)

###### Trading
- [Decrease the price tolerance window in offers](https://github.com/bisq-network/bisq/pull/2079)
- [Remove testnet and regtest for DASH and LTC](https://github.com/bisq-network/bisq/pull/2095)
- [Remove BCH](https://github.com/bisq-network/bisq/pull/2096)
- [Show rounded trade volume in contracts](https://github.com/bisq-network/bisq/pull/2111)

###### Payment methods
- [Fix wrong positioning of requirements field in CashDeposit](https://github.com/bisq-network/bisq/pull/2060)

###### UI
- [Improve startup time by updating checkpoint files](https://github.com/bisq-network/bisq/pull/2070)
- [Left align table columns to improve readability](https://github.com/bisq-network/bisq/pull/2062)
- [Refine various UI strings](https://github.com/bisq-network/bisq/pull/2104)
- [Bug fix: Close window without triggering action on ESC](https://github.com/bisq-network/bisq/pull/2077)
- [Bug fix: Views are sometimes not updated when switching quickly between sub sections](https://github.com/bisq-network/bisq/pull/2108)
- [Bug fix: Prevent duplicate popup windows](https://github.com/bisq-network/bisq/pull/2111)
- [Bug fix: Update validation of volume when percentage price is set](https://github.com/bisq-network/bisq/pull/2111)

###### Privacy/Security
- [Stream isolation for Tor](https://github.com/bisq-network/bisq/pull/2081)

###### Development
- [Consolidate install_java.sh scripts](https://github.com/bisq-network/bisq/pull/2055)
- [Update install_java.bat](https://github.com/bisq-network/bisq/pull/2085)
- [Bug fix: Surgical fix to default command line parameters](https://github.com/bisq-network/bisq/pull/2090)

###### Installation
- [Bug fix: Windows installer issues](https://github.com/bisq-network/bisq/pull/2103)

###### Assets
- Removed Bitcoin Cash (BCH) based on [stakeholder voting](https://github.com/bisq-network/proposals/issues/61)

##### Version 0.9.0
{: .mt-5 .mb-2}
Released [December 3rd 2018](https://github.com/bisq-network/bisq/releases/tag/v0.9.0)

###### Bisq DAO (on Testnet)
- BSQ wallet (Send/Receive BSQ)
- Governance (Make and vote on proposals, create compensation requests, change DAO parameters, issue BSQ)
- Bonding (Create bonded roles/bonded reputation)
- Pay asset listing fee with BSQ
- Proof of burn with BSQ
- Pay trading fees with BSQ

###### Trading
- [Warn users when closing the app with open offers](https://github.com/bisq-network/bisq/pull/1716)
- [Wait for offer availability check before allowing funding of wallet](https://github.com/bisq-network/bisq/pull/1775)
- [Add buyers payment account name to trade screen (if multiple payment accounts of the same type exist)](https://github.com/bisq-network/bisq/pull/1735)
- [Fix last request timestamp in price feed service](https://github.com/bisq-network/bisq/pull/1730)
- [Fix transaction broadcaster issue](https://github.com/bisq-network/bisq/pull/1763)

###### Payment methods
- [Add Monero address validation](https://github.com/bisq-network/bisq/pull/1683)
- [Improve Monero trade info popup](https://github.com/bisq-network/bisq/pull/1720/files)
- [Update instructions for Monero transaction proof](https://github.com/bisq-network/bisq/pull/1902)
- [Add Citibank to Zelle](https://github.com/bisq-network/bisq/pull/1688)
- [Add info for Faster Payment that the receivers name is not required](https://github.com/bisq-network/bisq/pull/1694)
- [Add Contact info for F2F](https://github.com/bisq-network/bisq/pull/1713)
- [Add warning popup for Cash Deposit](https://github.com/bisq-network/bisq/pull/1822)
- [Add PromptPay (Thailand)](https://github.com/bisq-network/bisq/pull/1831)
- [Add Interac E-transfer question/answer validation](https://github.com/bisq-network/bisq/pull/1845)
- [Remove account age from limitations of altcoin accounts](https://github.com/bisq-network/bisq/pull/1747)

###### UI
- Redesign: Bisq in a fresh new green look including lots of minor UI improvements and bug fixes
- Improved text in various places (by @arunasurya)
- New locales (Thai and Vietnamese) by @initCCG
- [Avoid standby mode](https://github.com/bisq-network/bisq/pull/1712)
- [Optimize initial data load](https://github.com/bisq-network/bisq/pull/1905)
- [Increase display time of notifications](https://github.com/bisq-network/bisq/pull/1711)
- [Convert long dash to short dash for minus values](https://github.com/bisq-network/bisq/pull/1936)
- [Add blockstream.info as default explorer](https://github.com/bisq-network/bisq/pull/1919)
- [Limit initial window size on application launch](https://github.com/bisq-network/bisq/pull/1945)
- [Save "Show all" state in currency selector (Trade Charts) ](https://github.com/bisq-network/bisq/pull/1727)
- [Add arrow key support for preferences currency selection](https://github.com/bisq-network/bisq/pull/1774)
- [Add arrow key support for arbitrator language selection](https://github.com/bisq-network/bisq/pull/1774)
- [Fix truncation issue when using display scaling levels](https://github.com/bisq-network/bisq/pull/1767)
- [Fix issues with wrong base currency](https://github.com/bisq-network/bisq/pull/1913)

###### Privacy/Security
- [Make torrc "editable" via system properties](https://github.com/bisq-network/bisq/pull/1893)
- [Use tor binaries from TorBrowser 8.0.3](https://github.com/bisq-network/bisq/pull/1928)

###### Development
- [Move all repositories into one mono repository](https://github.com/bisq-network/bisq/pull/1650)
- [Add Java 10 support](https://github.com/bisq-network/bisq/pull/1660)

###### Assets
- Add 25 new assets:
Actinium (ACM), Bitcoin 2 (BTC2), Bitcoin Rhodium (XRC), Blur (BLUR), Chaucha (CHA), Croat (CROAT), Dragonglass (DRGL), EtherStone (ETHS), Kekcoin (KEK),  Mask (MASK), MoX (MOX), MobitGlobal (MBGL), MonetaryUnit (MUE), Neos (NEOS), PZDC (PZDC), QMCoin (QMCoin), Radium (RADS), Ryo (RYO), SUB1X (SUB1X), Starwels (MAI), TurtleCoin (TRTL), Zero (ZER)
- Remove not traded assets.


##### Version 0.8.1
{: .mt-5 .mb-2}
Released [November 13th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.8.1)
- Include up-to-date trade statistics and account age witness db in binary to speed up start-up

##### Version 0.8
{: .mt-5 .mb-2}
Released [August 22nd 2018](https://github.com/bisq-network/bisq/releases/tag/v0.8.0)
- Rounding of fiat values to improve privacy
- Add mobile notifications
- Fix transaction broadcast issue
- Add HalCash
- Add Face to Face payment
- Add warning popup for languages not natively supported by arbitration
- Reflect new repository structure in issue links
- Fix reseting of amount column in trade statistics
- Added DAO code
- Refactoring of generics

##### Version 0.7.1
{: .mt-5 .mb-2}
Released [July 4th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.7.1)
- Ack messages for all trade, offer- and dispute messages
- Show popup if local Bitcoin core is running
- Lower minimum withdrawal fee to 1 satoshi per byte
- Add popup for feedback after trade competion
- Add referrer Id for external Bisq market makers
- Remove validation for Argentinian account numbers and allow manual edit
- Deactivate Venmo and CashApp
- Don’t include assets with diff. network type
- Don’t treat RBF transactions as risky
- Ignore “Alert key compromised” message from old nodes in Bitcoinj
- Add new payment method: MoneyGram
- Add 28 new assets: 01coin, Aquachain, BitCloud, Bitcoin Core, Bitcoin Instant, Credits, Cryptonodes, CryptoTari, DACash, Diamon, DRIP, FuturoCoin, Graft, LikeCoin, Lobstex, MaxCoin, MegaCoin, MicroCoin, Motion, Myriadcoin, Nano, NewPowerCoin, Nimiq, Pix, PixelPropertyToken, PRiVCY, Triton, Wavi
- Fix bug in edit offer screen
- Fix bug with Sepa offers and Sepa instant taker
- Fix reuse of change addresses
- Fix wrong duration translation in double digit numbers
- Fix wrong singular word translation in double digit numbers
- Fix sorting of currencies in market/trades

##### Version 0.7
{: .mt-5 .mb-2}
Released [May 11th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.7.0)
- Add feature for editing offers
- Add new payment method: WeChat Pay
- Add additional nationalAccountId field to enable national bank transfers in Argentina
- Show Bank ID (BIC/SWIFT) for cash deposit in offer detaisl window and show popup when taking the offer to make sure the taker has a local bank branch in his area
- Do not allow Sepa account for Revolut SEPA BICs (many banks did nto accept that BIC)
- Add new altcoins: Pied Piper Coin, 10grans, Angelcoin, Arto, BitZeny, Bitcore, DSTRA, Dinero, Exceed, GeoCoin, Instacash, Koto, Kumacoin, LitecoinExtreme, MFCoin, Madbyte, Mazacoin, NEETCOIN, Phore, Qwark, ROIcoin, Ringo, Semux, Strayacoin, Tamadcoin, Ubiq, WorldMobileCoin, Xuez
- Improve UI at create offer screen
- Improve UI at offerbook screen
- Improve UI at markets screen
- Add trader icon to offer book
- Adds information/warning icon for market based price input field
- Add monospace font support and optimize alignment for number columns
- Add number of open offers to currency filter popups
- Improve info during trade process
- Use auto focus on the first input field on all screens
- Support quick access to top nav items with Alt 1–9 keyboard shortcuts
- Make arbitration chat messages selectable
- Fix bug with sorting in spread view
- Migrate build from Maven to Gradle
- Break up project in several sub projects
- Extract asset (altcoins) handling to own project

##### Version 0.6.7
{: .mt-5 .mb-2}
Released [February 26th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.6.7)
- Fix bug: Cannot select US national bank transfer in Create offer #1404
- Fix bug: Cannot remove deactivated offer #1403


##### Version 0.6.6
{: .mt-5 .mb-2}
Released [February 23th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.6.6)
- Reduce min. trade fee from 0.0002 BTC to 0.00005 BTC
- Add option to set an open offer inactive
- Add new payment methods: Venmo, Cash App (Square), Popmoney, Revolut, Uphold, MoneyBeam (N26)
- Re-enable national bank transfer (ACH, WIRE) for US
- Add TD Bank as Zelle memberbank
- Add popup for explaining the trade limits at account creation
- Add new altcoins: Stellite, Dai Stablecoin, Obsidian, BitDaric, Yenten, Cassubian Detk, DigiMoney, SpeedCash, SOS Coin, AchieveCoin, vDinar
- Change max. deviation of market price to 30% (in settings it can be extended to 50%)
- Fix wrong fee estimation (#1325)
- Fix bug with deactivated Cash deposit offers
- Fix bug with currency selection in create offer screen when a multi-currency account is used


##### Version 0.6.5
{: .mt-5 .mb-2}
Released [January 31th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.6.5)
- Start counting remaining trade period after first blockchain confirmation
- Fix missing balance in UI after wallet restore from seed words
- Change recovery handling if price provider node connection fails
- Add button to Tor settings popup for deleting outdated Tor files in case of connection problems
- Fix issue with not being able to delete spv chain file on Windows
- Change failing provider node and bitcoin node with new onion addresses


##### Version 0.6.4
{: .mt-5 .mb-2}
Released [January 21th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.6.4)
- Only allow transaction broadcast if blockchain download is completed and connection to min required bitcoin nodes is done.
- If connected to localhost Bitcoin node and connection get lost prevent that Bisq connects to public network.
- Show info in footer and splash screen if localhost Bitcoin node is available
- Fix issues with price feed requests
- Fix issue with incorrect display of nr. of offers in spread view
- Add new altcoins: Creativecoin, Infinity Economics
- Add onion address to Bitcoin node btc.jochen-hoenicke.de

##### Version 0.6.3
{: .mt-5 .mb-2}
Released [January 11th 2018](https://github.com/bisq-network/bisq/releases/tag/v0.6.3)
- Add timeout handler for tx broadcaster
- Change broadcast policy parameters: Min required connections: 4; broadcast to all connected nodes; wait to hear back from 2 nodes to complete broadcast call (or timeout triggers complete handler).
- Revert change in 0.6.2 for disconnecting from seed node after reaching 6 connections
- Request initial data from several seed nodes instead of only one for more redundancy
- Optimize fee estimation policy for taker
- Add new altcoins: DeepOnion, WILD Token
- Deactivate stream isolation (hidden services are stream isolated by default)
- Fix wrong year at backup file name
- Fix NullPointer exception at seed word restore if data is not set
- Suppurt cmd+Enter shortcut for sending a dispute message
- Fix UI bugs (duplicate currency entries, not filtering edited currency list)
- Improve logs
- Improve seed node monitor
- Use different popup for Zcoin with instruction to only use transparent addresses

##### Version 0.6.2
{: .mt-5 .mb-2}
Released [December 20th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.6.2)
- Improve withdrawal screen: Choose sending or receiving amount. Choose all available inputs or manual input selection.
- Add "Update later" button to download update window. Make version label clickable and show if new version is available.
- Only use hidden service btc nodes if Tor is enabled for BitcoinJ and provided nodes are used.
- Optimize P2P network startup behavior
- Separate fees in trade complete screen.
- Show withdrawal btc address only after button click in trade complete screen.
- Added new altcoins: Cagecoin, Spectrecoin, Verify
- Add more provided Bitcoin nodes
- Add more seed nodes
- Add more provider nodes (market price, miner fee estimation)
- Add second seed node for DASH and LTC
- Add filter for btc nodes
- Use domainname instead of IP if both are known for btc nodes
- Increase connection timeouts
- Increase timeout for offer availability check
- Increase time for showing Tor settings at startup to 30 sec.
- Increase offer refresh and republish intervals and offer TTL.
- Decrease maxConnections for btc network from 10 to 9
- Remove unneeded broadcast trade fee tx tasks
- Remove checks for min. trade fee to enable change in upcoming versions
- Fix missing resort after price feed actualization
- Fix incorrect ordering of available offers
- Fix wrong sorting of markets column
- Fix for handling of modal window closing (some Linux windows managers)
- Only hide prompt text after user starts typing
- Use currency name instead of code for compareTo
- Update docs

##### Version 0.6.1
{: .mt-5 .mb-2}
Released [November 26th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.6.1)
- Add SEPA Instant Payments as new payment method
- Add Madcoin, Bitcoin Cash, Bitcoin Clashic, Bitcoin Gold
- UI Improvements
- Reduce default nr. of connections to Bitcoin network from 12 to 10
- Add new Bitcoin nodes
- Fix price sorting bug at buy screen when an altcoin was selected
- Fix layout bug
- Improve logging

##### Version 0.6.0
{: .mt-5 .mb-2}
Released [November 16th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.6.0)
- Add support for Tor bridges and pluggable transports (https://github.com/bisq-network/bisq/issues/998)
- Provide Bitcoin full nodes from Bisq developers (https://github.com/bisq-network/roles/issues/39) to protect against BitcoinJ vulnerabilities (BitcoinJ is blindly following longest PoW chain and not checking consensus rule violations). That also avoids the privacy issues with bloom filters. (https://github.com/bisq-network/bisq/issues/999)
- Add account age verification scheme (https://github.com/bisq-network/proposals/blob/master/payment-account-age-witness.adoc, https://github.com/bisq-network/bisq/issues/1000)
- Reduce DEFAULT_TAKER_FEE_IN_BASE_CUR from 0.003 BTC to 0.002 BTC (that is the base for a 1 BTC trade)
- Lower miner fees by fee estimation adjustments (using maxDelay 20 instead of 10 and taking average of 12 last fee results)
- Lower miner fee by transaction size calculation. Instead of using 600 bytes as estimation of trade fee tx we create a dummy tx to get the exact size id funds are on the wallet, otherwise we use 260 bytes for maker and 320 bytes for taker (deposit and payout tx are larger).
- Reduce security deposit: DEFAULT_BUYER_SECURITY_DEPOSIT from 0.03 BTC to 0.01 BTC; MAX_BUYER_SECURITY_DEPOSIT from 0.2 BTC 0.05 BTC, MIN_BUYER_SECURITY_DEPOSIT from 0.001 BTC to 0.0005 BTC; SELLER_SECURITY_DEPOSIT from 0.01 BTC to 0.003 BTC
- Use new trade limits to reflect higher BTC price: Bank transfers: 0.25 BTC; Swish, OKPay, PerfectMoney, AliPay: 0.5 BTC; Altcoins 1 BTC (exception SiaFund as their price is about 3 BCT and it is not dividable, so we allow 4 BTC there)
- Add Western Union as payment method
- Show latest trade price in case no price from external market price providers is available. To be used only for informational purpose not for % based offers due price manipulation risks.
- Enable Bisq DAO phase 1 on Bitcoin Testnet: BSQ genesis distribution, BSQ trading, BSQ used for paying trade fee, BSQ wallet with send, receive and tx list screens, dashboard
- Add new languages: Chinese, Hungarian, Romanian, Russian, French, Turkish
- Added new Altcoins: DECENT, Pranacoin, WACoins, ZenCash, Ellaism, Cryptonite, Terracoin, Internext, Particl
- Add all missing countries (all global countries taken from https://restcountries.eu/rest/v2/all?fields=name;region;subregion;alpha2Code;languages)
- Add OXT as BTC blockexplorer
- Use new seed nodes and price relay nodes operated by different Bisq developers and bonded by BSQ
- Use new more efficient data structure for tradeStatistcs objects
- Add filter for arbitrators, seed nodes and price relay nodes
- Change pw length restriction
- Change name of IOP to "Internet Of People"
- Remove DOGE as base currency (zero trade activity)
- Reduce number of seed nodes for LTC and DASH (very low trade activity)
- Removed never-traded altcoins: Advanced Internet Blocks (AIB), Anoncoin (ANC), Anti (ANTI), AquariusCoin (ARCO), Argentum (ARG), Augur (REP), Battlestars (BATL), BigUp (BIGUP), BitAUD (BITAUD), BitCHF (BITCHF), BitCNY (BITCNY), BitEUR (BITEUR), BitGBP (BITGBP), BitHKD (BITHKD), BitNZD (BITNZD), BitSEK (BITSEK), BitSGD (BITSGD), BitSYNQ (SYNQ), BitShares (BTS), BitUSD (BITUSD), Blackcoin (BLK), Clams (CLAM), CloakCoin (CLOAK), Comet (CMT), Creditbit (CRBIT), Crown (CRW), Crypto Bullion (CBX), DIBCOIN (DIBC), Digibyte (DGB), Digital Rupees (DRS), DigixDAO Tokens (DGD), EOS (EOS), EUR Tether (EURT), Emercoin (EMC), Eternity (ENT), Europecoin (ERC), EverGreenCoin (EGC), Factom (FCT), FairCoin (FAIR), FlorinCoin (FLO), GameCredits (GAME), Gemz (GEMZ), Groestlcoin (GRS), Gulden (NLG), HOdlcoin (HODL), HunCoin (HNC), I/O Coin (IOC), JPY Tether (JPYT), Janus (JNS), Jumbucks (JBS), LTBcoin (LTBC), Maker (MKR), MarteXcoin (MXT), Moin (MOIN), Myriadcoin (XMY), NEM (XEM), Nevacoin (NEVA), NuShares (NSR), OKCash (OK), Omni (OMNI), Opal (OPAL), Peercoin (PPC), Pinkcoin (PINK), PlatinumBar (XPTX), Plutons (PLU), PotCoin (POT), Primecoin (XPM), Radium (RADS), RealEst. Coin (REALEST), Ripple (XRP), Shift (SHIFT), Smileycoin (SMLY), SolarCoin (SLR), Steem Dollars (STEEMUSD), Stellar Lumens (XLM), StorjcoinX (SJCX), Stratis (STRAT), Swarm City Token (SWT), Syndicate (SYNX), Synereo (AMP), Triangles (TRI), USD Tether (USDT), VCoin (VCN), VPNCoin (VPN), Verge (XVG), VeriCoin (VRC), Waves (WAVES), Worldcoin (WDC), Xaurum (XAUR), YACCoin (YACC), YbCoin (YBC)
- Many smaller improvements in the UI
- Fix wrong date handling in trade statistics charts
- Listen to bitcoin network for deposit and payout transaction in case the P2P message did not arrive
- Support different keys for code signing in download-tool
- Fix bug with missing MultiSigKey (findKeyFromPubKeyHash call was used instead of findKeyFromPubKey)
- Fix missing persistence for trade statistic object in seed nodes
- Fix but with offer sorting
- Use smaller font and width for TAC window on very small screens
- Use netlayer Tor library (https://github.com/JesusMcCloud/netlayer/)
- Improved build system

##### Version 0.5.3
{: .mt-5 .mb-2}
Released [July 17th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.5.3)
 - The change of the application name from "bisq" to "Bisq" caused a change of the application directory as well. That caused on Linux that users wallet and data have been in the "bisq" and the app creates a new "Bisq" folder. To fix that we rename the application directory from "bisq" to "Bisq" if "Bisq" did not exist. If both already existed (if user has run 0.5.2.) we rename "Bisq" to "Bisq_backup" and "bisq" to "Bisq" assuming that the app dir with the current wallet and data was"bisq" from version 0.5.1. If case the user used the wallet and data now in "Bisq_backup" he has to move the folders content manually to the "Bisq" folder.

##### Version 0.5.2
{: .mt-5 .mb-2}
Released [July 17th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.5.2)
 - Remove requirement for exchanging the email address and to do an ID check with the trading peer when using payment methods with bank transfer
 - Add in-app downloader for installer of a new release with integrated signature check
 - Increase trade limits to 2 BTC for OK_PAY and Altcoins
 - Add Dash as additional basecurrency to Bitcoin, Litecoin and Doge.
 - Fix issue with non-english OS
 - Add a reminder to write down the wallet seed and make a backup before setting the wallet password
 - Rename ClearXChange to Zelle
 - Improve build setup (auto install protoc)
 - Fix date format
 - Only request restart at base currency selection if it has changed from default.
 - Remove popup at startup for selecting base currency

##### Version 0.5.1
{: .mt-5 .mb-2}
Released [July 1st 2017](https://github.com/bisq-network/bisq/releases/tag/v0.5.1)
 - Add callback for tradeFee tx once seen in the network to avoid errors at take offer.
 - Separate resource files for PersistedEntryMap by base currency (separate trade statistics)
 - Move base currency/network selection from network settings to preferences
 - Add btc address validator to last trade step for withdrawal.
 - Remove don't show again option for tx summary popup at withdrawal.
 - Add support for different REFERENCE_DEFAULT_MIN_TX_FEE by base currency
 - Fix issue with German as default language if OS is Windows/German
 - Add warning for CXC regrading daily or monthly transfer limits

##### Version 0.5.0
{: .mt-5 .mb-2}
Released [June 28th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.5.0)
 - Support multiple base currencies. Beside BTC the user can choose to use LTC or DOGE as base market. More will come in future releases.
 - Use fee estimation service form https://bitcoinfees.21.co to use dynamic mining fees.
 - Use dynamic trading fees. Trading fees are based on trade amount and distance to market price.
Min. fee (MF) = 0.0002 BTC, default fee (DF) = 0.002 BTC, amount factor (AF) = 1/BTC, market price factor (MF) = square root of percent value (e.g. 1% -> 1, 9% 0 -> 3, 0.01% -> 0.1). Trading fee = max(MF, DF * amount * AF * MF). E.g. 0.002 BTC for 1 BTC trade at 1% market price distance.
 - Make security deposit for buyer customizable at offer creation (allowed range: 0.001 BTC - 0.2 BTC)
 - Use fixed security deposit for seller (0.01 BTC)
 - Simplify trade process by removing locktime support (removed finalize payout step)
 - Use protobuffer instead of Java serialization in P2P network and local persistence
 - Use BIP 44 wallet for BTC and BSQ
 - Update to BitcoinJ 0.14.1 release
 - Updated tor binaries from TorBrowser 6.5
 - Re-brand to Bisq
 - Use new max. trade limits to reduce risks with possible bugs in new version as well as to reflect higher BTC price Bank transfers: 0.5 BTC Swish, OKPay, PerfectMoney, AliPay: 1 BTC Altcoins 1 BTC (exception SiaFund as their price is about 3 BCT and it is not dividable)
 - Add email field to bank payment methods for enabling traders to verify identity (to protect against charge back risk)
 - Change max trade period for SEPA to 6 days. In exceptional situations like at long bank holidays exceeding the period will be tolerated.
 - Auto select also non-EURO SEPA countries by default at SEPA account setup
 - Added new altcoins: Janus, OctoCoin, PEPECASH
 - Use percentage based price as default. Swap input text controls when toggle between fixed price and percentage based price. Hide percentage based inputs if no market price is available.
 - Support for translations of all application display strings
 - User can select preferred language (of those which are already translated) and default country.
 - Supported new languages: German, Spanish, Greek, Portuguese and Serbian (still require UI layout adjustments)
 - Remove ask and bid market price and use always last price.
 - Add button in settings to resync SPV chain (delete SPV chain file)
 - Add button for opening log file
 - Remove arbitrator as potential receiver at dispute payout
 - Improve arbitration payout screen
 - Use TTL of 30 min. for market prices on the provider side.
 - Check for market price age on client. Allow max. 30 min old market prices
 - Show provider node at tooltip over price feed provider icon
 - Persist last used payment account for create offer screen
 - Use same seed words for both BTC and BSQ wallet
 - Added BSQ as coin_type 142 0x8000008E to https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 - Update Bitcoin checkpoint file
 - Fix bug with backup path when path had become inaccessible
 - Fixed bug with not displaying correct MultiSig address in LockedFunds view.
 - Add checks for locked up funds of failed trades.
 - Add shortcut to remove failed trade from pending trades view.
 - Use for Windows build no version nr at jar files to avoid collecting multiple jars at updates.
 - Prepare the split role of arbitrator in mediator (has no MultiSig key) and arbitrator (3rd key holder of MultiSig).
Not implemented yet in the UI, so mediator is at the moment identical with arbitrator.
 - Add email and pgp pubkey to data structure (no support yet implemented in UI)
 - Add support for passing counter currency tx ID to BTC seller (not impl. in UI yet)
 - Change key combination for open dispute from cmd+o to alt+o and for opening emergency wallet from cmd+e to alt+e
 - Update TAC
 - Don't provide market price for Venezuelan currency (VEF) as official exchange rate is not reflecting reality
 - Add -BjvmOptions=-Xss1280k for Linux builds to avoid SegFault problem with latest Ubuntu update

##### Version 0.4.9.9.3
{: .mt-5 .mb-2}
Released [May 18th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.9.3)
 - Adopt trading fee value to match new tx fee

##### Version 0.4.9.9.2
{: .mt-5 .mb-2}
Released [May 18th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.9.2)
 - Increase tx fee for trades to 0.0015 BTC
 - Increase default tx fee for non-trade txs to 0.0015 BTC
 - Add Janus and OctoCoin

##### Version 0.4.9.9.1
{: .mt-5 .mb-2}
Released [March 22th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.9.1)
 - Fix protobuffer serialization issue with transaction version used in transaction hash at Bitcoin Core 14, causing UnreadableWalletException. For more details see: https://groups.google.com/forum/#!topic/bitcoinj/mhV9BvoSYMo
 - Add info popups for requirements for ClearXchange
 - Add scroll pane support to all screens.
 - Fix wrong percentage calculation in spreads view for altcoins
 - Fix missing tx fee at emergency wallet payout.
 - Add address validation for ETH
 - Don't use peers from AddressMessage calls if we use a custom Bitcoin node list or localhost.
 - Ability to re-open a dispute (e.g. if no answer from arbitrator in case of network problems)
 - Update MIN_NONDUST_OUTPUT from 546 to 2730 satoshis
 - Fix missing persistence calls when internal wallet structure has changed, possibly causing bugs with

##### Version 0.4.9.9
{: .mt-5 .mb-2}
Released [February 11th 2017](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.9)
 - Changed trade transaction fee from 0.0002 BTC to 0.0005 BTC
 - Change protocol version for offers to support higher transaction fee
 - Change Create-Offer-Fee from 0.0005 BTC to 0.0008 BTC (includes the 0.0005 tx fee, so the net fee to the arbitrator is same as before -> 0.0003 BTC)
 - Increase security deposit from 0.01 BTC to 0.03 BTC
 - Add LTBcoin, Fermat (IOP), Swarm City Token (SWT), AquariusCoin, Byte, Nevacoin, PIVX, Xaurum, Safe FileSystem Coin (SFSC)
 - Support for Bitcoin nodes running as hidden services
 - DNS lookup over Tor
 - Connect to local Bitcoin Core node if it is running (ignore use Tor flag)
 - Add program argument: socks5DiscoverMode
 - Export Wallet data (keys) feature
 - Show percentage in spreads table
 - Add input validation for Norwegian bank account
 - Fix bank account from for Chile and Norwegian
 - Add Georgia, Botswana
 - Add new blockexplores: SoChain, Bitaps
 - Added check for ZEC addresses (only t addresses are permitted) and info popup for ZEC and ZXC
 - Added input validation for altcoin addresses: IOP, PIVX, GBYTE
 - Added input validation for IBAN, BIC, email
 - Rename Cash/ATM deposit to Cash deposit
 - Increase max. allowed deviation from market price to 30%
 - Don't show error popup for exception on Linux after screen resolution change or return from monitor standby
 - Use more randomized prefix for short offer ID, add version as postfix
 - Show arbitrators support tab if arbitrator has revoked but has open disputes
 - Increase offer availability and trade timeouts
 - Update to JDK 8u121
 - Enable again the Apple developer certificate for code signing on OSX

##### Version 0.4.9.8
{: .mt-5 .mb-2}
Released [November 19th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.8)
 - Added Crown, Pascal Coin, Smileycoin, RealEst. Coin
 - Now all traffic is going over Tor (price requests from Poloniex could not be routed over Tor because they use Cloudflare)
 - Added request to CoinMarketCap to get more prices for altcoins not listed at Poloniex
 - Use 2 proxy price feed providers as hidden service for requesting accumulated BitcoinAverage (new API), Poloniex and CoinMarketCap price data
 - Add program argument to add custom price feed providers
 - Add module for running a own proxy price feed provider (requires BitcoinAverage API keys). Supports both clearnet and hidden service
 - Display time of latest price update at tooltip over provider icon in market price widget
 - Remove http proxy option because it is not needed anymore (Cloudflare issue with Poloniex solved by the proxy)
 - Remove tor bridge support (was not solving GFW issues and caused only problems when connections to Tor failed at startup)
 - Add option for setting custom bitcoin nodes in network settings (additional possible via program argument)
 - Add new block explorers to settings
 - Increase max. trade period for US postal money order to 8 days
 - Use default btc format (allow more than 4 decimal places)
 - Add tool for exporting wallet data
 - Fix critical bug with BitcoinJ Bloomfilter handling
 - Ignore TTL for persisted data objects (trade statistics) in local data map

##### Version 0.4.9.7
{: .mt-5 .mb-2}
Released [October 20th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.7)
 - Added new payment methods: Chase QuickPay, Interac e-Transfer
 - Increase trade limits for Altcoins to 3 BTC, OKPay, Swish and AliPay to 2 BTC, ClearXChange, Cash deposit and US postal money order to 1 BTC
 - Added now altcoins: Zcash, Zcoin, Augur, Siafund, Gulden, Stellar Lumens, Emercoin, Plutons, GameCredits, PotCoin, Omni, Stratis, ReddCoin, VeriCoin, Radium
Digital Rupees, Vcash, Waves, HOdlcoin, Burstcoin, Triangles, Argentum, DIBCOIN, Eternity, Battlestars, Nav Coin, DynamicCoin, Anoncoin, DarkNet
 - Change behavior of currency list to display user defined currencies instead of all currencies for which offers are available (same behavior like it was before v0.4.9.6)
 - Add Kazakhstan and Kenya to country list
 - Add Nr. of trades to trade statistics tooltip
 - Display time span in trade statistics tool tip
 - Show tx size in withdraw popup
 - Remove 1 min interval in trade statistics, add year interval
 - Added support for custom payout at disputes, define who is the publisher and re-opening a closed dispute
 - Use single gpg signatures of binaries instead of signature of bundled hashes.
 - Improved wording
 - Improved layout for small screens
 - Fix bug with withdrawal if tx size exceeds 100kb
 - Fix and improve build doc and scripts
 - Update to latest jdk version with bugfix for SortedList (remove our jdkfix module)

##### Version 0.4.9.6
{: .mt-5 .mb-2}
Released [September 4th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.6)
 - Added new altcoins: Opal, Synereo
 - Fixed bug with invalid offer ID causing wrong balance display and duplicate trade statistic items
 - Added new payment method: Faster payments
 - Add support for other currencies than countries default currency at bank accounts and cash deposit
 - Add support for EUR for PerfectMoney
 - Add Extra requirements field to Cash deposit form
 - Add copy icons to data fields in Cash Deposit, ClearXchange and US Postal Money Order
 - Add Nr. of disputes and onion address display to dispute table and details popup
 - Add dispute result reasons: No response and Protocol violation
 - Change warning popup if create offer button pressed with no account for selected currency in offer book views
 - Revert decrease of Nr. of peers to send message at broadcast
 - Decrease interval for sending keep alive messages
 - Delay result handler for mailbox message storage

##### Version 0.4.9.5
{: .mt-5 .mb-2}
Released [August 29th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.5)
 - Add new payment methods: Cash deposit, US Postal money order, ClearXchange
 - Remove support for bank transfers in US (ACH has high chargeback risk and WIRE is too expensive)
 - Added new altcoins: LBRY Credits, Syndicate, HunCoin, Unobtanium, Digibyte, VCoin, Decred, Crypto Bullion, 1CRedit, YACCoin, Advanced Internet Blocks
 - Apply industry standard with altcoin price notation and currency pair notation
 - Show all offers in market screen
 - Click on offers in market scree row triggers navigation to Buy or Sell screen and selects currency
 - Rearrange columns so sell and buy prices are in the middle to see spread better
 - Rename columns headers and table header
 - Add currency pair, primary market based values and display strings for price, amount and volume for offer and trade json files
 - Fixed bug with missing persistence of preferences changes
 - Use defuat vlaue true for "Use Tor for BitcoinJ"
 - Sort currencies in lists alphabetically
 - Add checkbox in settings to display nr. of trades or offers for currency list in market screens. Sort by nr. trade/offer if selected.
 - Ignore offers in market offer book view which are further than 30% from best price if there are more then 3 offers on one side
 - Show only currencies in market view which are used in offers or trades
 - Replace payment method column with accumulated BTC amount in market offer book
 - Add payment method column to trades statistics table
 - Store arbitrator pubKey in trade object to avoid null pointer when the arbitrator is not available in the trade process
 - Set flag to connection at initial data request so the peer does not get disconnected from seed node if max connections are reached at seed node.

##### Version 0.4.9.4
{: .mt-5 .mb-2}
Released [August 26th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.4)
 - Add fix for unsupported payment methods

##### Version 0.4.9.3
{: .mt-5 .mb-2}
Released [August 8th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.3)
 - Increase trade limits (Altcoins: 2 BTC, Banks: 1 BTC, Others: 1.5 BTC)
 - Added new coins: Mycelium Token, BitUSD, Steem Dollars, STEEMUSD, BitCNY, BitEUR, BitCHF, BitGBP, BitNZD, BitAUD, BitSGD, BitHKD, BitSEK, Comet, BitSYNQ
 - Removed deprecated ETHC (was replaced by ETC)
 - Reduce performance peak when loading statistics data at startup by delayed processing
 - Exclude statistics data from getting loaded what the user has already
 - Add statistics data dump to binary, so new users don't need to load all the data at first startup
 - Add RPM Linux binaries
 - Add reminder popup for setting up a password, backing up seed word and doing a data dir backup
 - Increase nr. of rolling backups for wallet and keys to 20.
 - Fix JSON dump to be stored as plain text instead of Java serialized object
 - Add option to dump offers as json
 - Add maxMemory prog. arg for seed nodes and statists app
 - Add precision to currency json file
 - Improve wording

##### Version 0.4.9.2
{: .mt-5 .mb-2}
Released [July 30th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.2)
 - Bugfix with repeated publication of trade statistics data
 - Add "Show all currencies" to trade statistics view to see total volume of all currencies
 - Add warning popup if Tor is enabled for http and user clicks a button to open a webpage
 - Show offerers bank name also for SEPA in offer details window
 - Fix bug with missing market price updates
 - Save Fiat and Altcoin currency list as JSON if –dumpStatistics is enabled
 - Use info as default log level, improve logging
 - Other minor bug fixes

##### Version 0.4.9.1
{: .mt-5 .mb-2}
Released [July 27th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9.1)
 - Add trade statistics. Price chart, volume chart and table for trades.
 - Add tor support for http request (excluding Poloniex because of problems with Couldflare captcha)
 - Add tor support for BitcoinJ (experimental)
 - Add support for passing sock 5 proxy address via program argument to be used for BitcoinJ and/or http requests (I2P VPN, …)
 - Change EtherClassic ticker from ETHC to ETC (as they requested, ETHC still supported by deprecated)
 - Support list of seed nodes for Bitcoin network
 - Add program arguments: useTorForBtc, useTorForHttp, dumpStatistics (store statistics as json), socks5ProxyBtcAddress, socks5ProxyHttpAddress, useTorForHttp, btcSeedNodes
 - Update BitcoinJ with actual seed addresses
 - Added capability support to have more fine grained control at updates.
 - Bugfix with missing bank name field when payment method same bank account was used
 - Display offerers bank name or bank ID in offer details

##### Version 0.4.9
{: .mt-5 .mb-2}
Released [July 17th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.9)
 - Added EtherClassic, USD Tether, EUR Tether, JPY Tether, Lisk, DigixDAO Tokens, Worldcoin, FlorinCoin
 - Support for Tor bridges
 - Use embedded font to have same layout in all OS versions
 - Add number of offers info to offer book view
 - Add logos for market price providers
 - Limit nr. of Bitcoin network peers at re-connect after connection loss
 - Increase default tx fee for withdrawal to 0.0002 BTC
 - Persist selected currency in market screen and offer book screens
 - Add export to csv feature for trade and tx history
 - Add export and import payment accounts feature
 - Add holder name at confirmation popups for trades using bank account
 - Show Nr. of trades at peer icon
 - Show peer info on mouse click on icon
 - Add editable tag to peer
 - Add Insight block explorer
 - Use different busy indicator with much lower cpu load than JavaFX ProgressIndicator
 - Add check for arm cpu architecture
 - Add 80 byte support for OP_RETURN in BitcoinJ fork
 - Add program arguments for maxConnection, log level, custom seed nodes and ignore developers messages/alerts
 - Increase check offer availability and trade protocol timeout
 - Add check for arbitrator and trade price tolerance at offer availability check
 - Add display of fiat or altcoin amount in contract window
 - Add copy icon for onion addresses textfields in offer/trade/contract windows
 - Add nr. of bid and ask offer to statistics table
 - Restrict max market price deviation to 20%
 - Display 2 decimal places for percentage price
 - Show nr. of offers and total btc amount in spreads view
 - Add busy indicator when entering wallet password
 - Fix bug with missing available balance update
 - Fixed JavaFX bug with SortedList (offer book)
 - Fixed bug with dangling trades and disputes
 - Fixed bug with cases of missing complete state at trades when users are offline

##### Version 0.4.8.1
{: .mt-5 .mb-2}
Released [July 5th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.8.1)
 - Hotfix: Fix bug with support for multiple arbitrators

##### Version 0.4.8
{: .mt-5 .mb-2}
Released [May 25th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.8)
 - Bugfix: Removed Payment ID from trade contract for Monero
 - Fix NullPointer at Bank account setup

##### Version 0.4.7
{: .mt-5 .mb-2}
Released [May 25th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.7)
 - Added Monero, Maker, DAO, STEEM, BigUp, PlatinumBar, Jumbucks, Pinkcoin, OKCash, GridCoin, Moin, SolarCoin, Shift, Europecoin, PostCoin
 - Increase trade limits (Altcoins: 2 BTC, OKPay: 1.5 BTC, Banks: 0.75 BTC, Others: 1 BTC)
 - Support EUR option for SEPA countries which have a non-EUR currency
 - Customize bank account forms for countries: BR, UK, US, AU, CA, MX, SE, HK, NZ,
 - Add search field to Combobox for altcoins
 - Added Moldova
 - Add input validations for fiat payment method forms (only for customized countries)
 - Add info popup for mining fee when depositing funds
 - Show % price in open offers table
 - Increase max msg size for GetDataResponse
 - Change TTL and refresh/republish time
 - Fix incorrect handling of TTL
 - Fixed wrong sorting in tables
 - Fix validation bug for inputs at create offer screen
 - Add network stress tests

##### Version 0.4.6
{: .mt-5 .mb-2}
Released [April 29th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.6)
 - Bugfix for fee calculation when using password protection
 - Added Sibcoin, Creditbit

##### Version 0.4.5
{: .mt-5 .mb-2}
Released [April 29th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.5)
 - Bugfix for rounding amount which caused issues at withdrawal
 - Display exact bitcoin amount (without rounding)
 - Change Myriadcoin ticker symbol as it conflicts with Malaysian ringgit
 - Change wording for bank form
 - Added I/O Coin, Groestlcoin, MarteXcoin
 - Change name of Anti.cash to Anti (on their request)

##### Version 0.4.4
{: .mt-5 .mb-2}
Released [April 27th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.4)
 - GPG signed hashes of all binaries (never run binaries which are not signed by Bisq!)
 - Add new seed node
 - Added new coins: Myriadcoin, Verge
 - Improve wording
 - Fix wrong fee calculation
 - Fix update popup handling

##### Beta Preview Version 0.4.3
{: .mt-5 .mb-2}
Released [April 23th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.3)
 - Check if BC provider is defined
 - Ignore stupid oracle limited security permissing by reflection
 - Add check if correct architecture version is installed (32/64 bit)
 - Fixed issues with "could not generate key" error
 - Increased take offer availability check timeout
 - Reduce FP rate for bloomfilter to reduce bandwidth consumption
 - Added new altcoins: NEM, Anti.cash, VPNCoin, MaidSafeCoin, YbCoin, VeriCoin, EverGreenCoin, CloakCoin, Espers
 - Add altcoin name to button in market overview
 - Use home dir for directory chooser at backup screen
 - Remove string abbreviation at copy altcoin address
 - Update to latest java version
 - Fix bug at exit from system tray

##### Beta Preview Version 0.4.2
{: .mt-5 .mb-2}
Released [April 17th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.2)
 - Add percentage based price for offers (distance from market price).
 - Fix bloom filter privacy vulnerabilities in BitcoinJ
 - UI improvements
 - Bug fixes

##### Beta Preview Version 0.4.1
{: .mt-5 .mb-2}
Released [April 14th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.1)
 - Fix bug when trader is offline and use password protection signing payout tx fails
 - Add wallet restore from seed words option at enter password popup at startup
 - Fix bug with pressing enter closing wallet password popup at startup
 - Fix bug with timeout warning popup at startup
 - Set default font size to avoid systemwide font scaling in Windows
 - Remove option for BitcoinJ over Tor (Tor in BitcoinJ is considered experimental; Bitcoin over Tor will be supported later over our native Tor instance)
 - Add sticky market price checkbox to settings: If sticky market price is selected market price does not change with currency selection, otherwise it is context sensitive.
 - Fix bug with not pruning rolling backup files
 - Show by default all currencies in offer book
 - Add fiat/altcoin amount and spend or receive flag to offer and trade details windows
 - Allow create offer when "show all" is selected in offer book and default currency is not matching payment account currency
 - Add informational popups
 - Improve wordings

##### Beta Preview Version 0.4.0
{: .mt-5 .mb-2}
Released [April 08th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.4.0)
 - Support usage of a global Bisq wallet for funding multiple offers/trades
 - Alternatively support of trading wallets for separating trades and getting higher privacy protection
 - Add screens for deposit funds and locked funds
 - Use combo box for exchange rates
 - Add Windows 32 bit binaries
 - Add Linux 32 bit binaries
 - Increased trade limits (Bank transfers: 0.5 BTC, payment processors: 0.75 BTC, OKPay, Altcoins: 1 BTC)
 - Reduce trade tx fee to 0.0002 BTCReduce trade tx fee to 0.0002 BTC
 - Reduce default withdrawal tx fee to 0.0001 BTC
 - Make withdrawal tx fee adjustable in settings
 - Add check for too wide deviation from market price at create offer
 - Make deviation from market price adjustable in settings
 - Rolling backup for all files (wallet, db, tor hidden service private key)
 - Improve UI for restoring wallet from seed words
 - Add button for opening data directory
 - Use clearnet instead of Tor for BitcoinJ as default
 - Remove check for mining fee at deposit tx
 - Support sorting for all table columns
 - Show contract in new window
 - Fix Font render issue on Linux
 - Use altcoin name when setting up the address for the cryptocurrency account
 - Use system time instead of blocks for remaining trade time
 - Add "About Bisq" screen

##### Alpha Version 0.3.6
{: .mt-5 .mb-2}
Released [March 20th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.3.6)
 - Increase trade limits (Banks: 0.3 BTC, Payment processors: 0.4 BTC, Altcoins: 0.5 BTC)
 - Reduce min. required mining fee for funding tx to 0.0001 BTC
 - Reduce create offer fee to 0.0005 BTC
 - Added FairCoin
 - Added ShadowCash
 - Display onion address of offerer and trading peer in details windows
 - Show Identicon for offerers or trading peers onion address and indicate repeated trades
 - Don't show own offers in offer book, make it adjustable in settings
 - Show QR Code at funding screens, Remove QR Code Icon from AddressTextField, Add CopyIcon to Create Offer funding screen
 - Display additional info for Altcoins at buy/sell buttons
 - Show payment in market overview offer book tables
 - Show update notification if client version is older than new version
 - Increase timeout for trade process forn 30 sec to 60 sec.
 - Add build instructions for OpenJDK/OpenJFX
 - Resend confirmation at startup if peer has not continued trade process
 - Add check if unlimited Strength for cryptographic keys is enabled in case the user has compiled the binary on his own

##### Alpha Version 0.3.5
{: .mt-5 .mb-2}
Released [March 11th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.3.5)
 - New payment methods: National bank transfer, Transfer with same bank, Transfer with specific bank
 - Support 75 global currencies and 18 alternative crypto currencies
 - Price feed for all major currencies and all alternative crypto currencies
 - Make list of displayed currencies customizable
 - Separate crypto currencies accounts
 - Increase trade limits to 0.1-0.3 BTC
 - Make trade limit depend on payment method
 - Check transaction fee for funding transactions
 - Use specific colors for buy and sell
 - P2P network optimizations (refresh offers)
 - Reconnect and republish offers after inactivity (detect standby/sleep mode)
 - Display detailed info for P2P connections
 - Display inbound and outbound traffic
 - Measure round trip time
 - Throttle max. traffic
 - Add "Show all currencies" option to the offer book
 - Make market price invertible
 - Notifications and advanced popup handling

##### Alpha Version 0.3.4
{: .mt-5 .mb-2}
Released [February 9th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.3.4)
 - P2P network improvements
 - Use Tor for BitcoinJ
 - UI improvements
 - Bugfixes

##### Alpha Version 0.3.3
{: .mt-5 .mb-2}
Released [January 27th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.3.3)
 - Remove initial confirmation handshake in P2P network
 - Add spread overview to markets screen
 - Make mainnet default network
 - UI improvements
 - Bugfixes

##### Alpha Version 0.3.2.3
{: .mt-5 .mb-2}
Released [January 19th 2016](https://github.com/bisq-network/bisq/releases/tag/v0.3.2.3)
 - P2P network improvements
 - UI improvements
 - Bugfixes
 - Enable mainnet

##### Alpha Version 0.3.2.2
{: .mt-5 .mb-2}
Released [December 28th 2015](https://github.com/bisq-network/bisq/releases/tag/v0.3.2.2)
 - Bug fixes
 - P2P network stability improvements

##### Alpha Version 0.3.2.1
{: .mt-5 .mb-2}
Released [December 20th 2015](https://github.com/bisq-network/bisq/releases/tag/v0.3.2.1)
 - Support for several payment methods (Sepa, OkPay, PerfectMoney,…)
 - Support for Altcoins
 - Arbitrator registration
 - Support for arbitration and support tickets
 - Arbitrator chat and messaging tool
 - Trade contract
 - Data backup
 - Recover from seedwords
 - Password protection
 - Optional lock-time by payment method
 - Market overview (buy/sell offers chart and tables)
 - UI/Usability improvements
 - Charts for market data
 - Changed network layer to a flooding network over Tor and Hidden Services

##### Alpha Version 0.2.1
{: .mt-5 .mb-2}
Released [May 17th 2015](https://github.com/bisq-network/bisq/releases/tag/v0.2.1)
 - Support second trade variant (Offerer is Bitcoin seller)
 - Change UI for trade process to wizard style
 - Encrypt all messages sent over wire
 - Use Fiat payment method specific lock time for payout transaction to reduce bank charge back risk
 - Support changed IP address after reconnect
 - Add reserved tab in Funds screens
 - Remove open trades from withdrawal list
 - Separate DHT networks by Bitcoin networks
 - Separate GUI code to a module
 - Code signing for MAC (Apple developer certificate)
 - Interconnect bootstrap nodes on 3 servers
 - Improve network settings pane
 - Synchronizing bitcoin network not blocking startup anymore
 - Connection loss not terminating app

##### Alpha Version 0.1.3
{: .mt-5 .mb-2}
Released [March 30th 2015](https://github.com/bisq-network/bisq/releases/tag/v0.1.3)
 - Traders can quit application during the trade process and continue later
 - Encryption for DHT mailbox
 - Use P2SH for MultiSig
 - Add data protection for DHT storage
 - When trader goes offline his offers get removed from the offer book and will get added again when he goes online again (app should run in background when window gets closed, but that is deactivated at the moment)
 - Update to TomP2P Beta 6
 - Update to tag of latest BitcoinJ master

##### Alpha Version 0.1.1
{: .mt-5 .mb-2}
Released [March 7th 2015](https://github.com/bisq-network/bisq/releases/tag/v0.1.1)
 - Support for UpdateFX
 - Update to TomP2P beta3
 - Relay mode for P2P network
 - Use maven instead of Gradle

##### Alpha Version 0.1.0
{: .mt-5 .mb-2}
Released [December 11th 2014](https://github.com/bisq-network/bisq/releases/tag/v0.1.0)
 - Fully functional UI for executing a trade in one of 2 variants (BTC buyer makes offer, seller takes offer)
 - Offer book
 - Create an offer
 - Take an offer from the offer book
 - Account registration
 - Portfolio management (open offer, open trade, closed trades)
 - Fund management (withdrawal, Tx history)
 - P2P network works with port forwarding (automatic or manual)
 - Binaries for all OS
