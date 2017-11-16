---
layout: page
title: Roadmap &lsaquo; Bisq - The decentralized bitcoin exchange
banner: /images/roadmap1.png
---
# Roadmap

The Bisq Roadmap is a living document that shares the Bisq Team's vision and our current development priorities. This Roadmap is intended to provide an idea of when certain features are likely to become available.

This Roadmap might change at any time, especially in response to [Community](/community/) feedback.

## Planned milestones

### Version 1.0
 - Fully decentralized arbitration system

### Version 0.9
 - P2P network improvements

### Version 0.8
 - Add native notifications
 - Add native support for detecting standby/sleep

### Version 0.7
 - Trading APIs
 - Trezor support
 - Windows code signing


## Releases

### Version 0.6
Released [November 16th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.6.0)
- Add support for Tor bridges and pluggable transports (https://github.com/bisq-network/exchange/issues/998)
- Provide Bitcoin full nodes from Bisq developers (https://github.com/bisq-network/roles/issues/39) to protect against BitcoinJ vulnerabilities (BitcoinJ is blindly following longest PoW chain and not checking consensus rule violations). That also avoids the privacy issues with bloom filters. (https://github.com/bisq-network/exchange/issues/999)
- Add account age verification scheme (https://github.com/bisq-network/proposals/blob/master/payment-account-age-witness.adoc, https://github.com/bisq-network/exchange/issues/1000)
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

### Version 0.5.3
Released [July 17th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.5.3)
 - The change of the application name from "bisq" to "Bisq" caused a change of the application directory as well. That caused on Linux that users wallet and data have been in the "bisq" and the app creates a new "Bisq" folder. To fix that we rename the application directory from "bisq" to "Bisq" if "Bisq" did not exist. If both already existed (if user has run 0.5.2.) we rename "Bisq" to "Bisq_backup" and "bisq" to "Bisq" assuming that the app dir with the current wallet and data was"bisq" from version 0.5.1. If case the user used the wallet and data now in "Bisq_backup" he has to move the folders content manually to the "Bisq" folder.

### Version 0.5.2
Released [July 17th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.5.2)
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

### Version 0.5.1
Released [July 1st 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.5.1)
 - Add callback for tradeFee tx once seen in the network to avoid errors at take offer.
 - Separate resource files for PersistedEntryMap by base currency (separate trade statistics)
 - Move base currency/network selection from network settings to preferences
 - Add btc address validator to last trade step for withdrawal.
 - Remove dont show again option for tx summary popup at withdrawal.
 - Add support for different REFERENCE_DEFAULT_MIN_TX_FEE by base currency
 - Fix issue with German as default language if OS is Windows/German
 - Add warning for CXC regrading daily or monthly transfer limits

### Version 0.5.0
Released [June 28th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.5.0)
 - Support multiple base currencies. Beside BTC the user can choose to use LTC or DOGE as base market. More will come in future releases.
 - Use fee estimation service form https://bitcoinfees.21.co to use dynamic mining fees.
 - Use dynamic trading fees. Trading fees are based on trade amount and distance to market price.
Min. fee (MF) = 0.0002 BTC, default fee (DF) = 0.002 BTC, amount factor (AF) = 1/BTC, market price factor (MF) = square root of percent value (e.g. 1% -> 1, 9% 0 -> 3, 0.01% -> 0.1). Tradeing fee = max(MF, DF * amount * AF * MF). E.g. 0.002 BTC for 1 BTC trade at 1% market price distance.
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

### Version 0.4.9.9.3
Released [May 18th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.9.3)
 - Adopt trading fee value to match new tx fee

### Version 0.4.9.9.2
Released [May 18th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.9.2)
 - Increase tx fee for trades to 0.0015 BTC
 - Increase default tx fee for non-trade txs to 0.0015 BTC
 - Add Janus and OctoCoin

### Version 0.4.9.9.1
Released [March 22th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.9.1)
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

### Version 0.4.9.9
Released [February 11th 2017](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.9)
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
 - Added input validation for altocin addresses: IOP, PIVX, GBYTE
 - Added input validation for IBAN, BIC, email
 - Rename Cash/ATM deposit to Cash deposit
 - Increase max. allowed deviation from market price to 30%
 - Don't show error popup for exception on Linux after screen resolution change or return from monitor standby
 - Use more randomized prefix for short offer ID, add version as postfix
 - Show arbitrators support tab if arbitrator has revoked but has open disputes
 - Increase offer availability and trade timeouts
 - Update to JDK 8u121
 - Enable again the Apple developer certificate for code signing on OSX

### Version 0.4.9.8
Released [November 19th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.8)
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
 - Use default btc format (allow more then 4 decimal places)
 - Add tool for exporting wallet data
 - Fix critical bug with BitcoinJ Bloomfilter handling
 - Ignore TTL for persisted data objects (trade statistics) in local data map

### Version 0.4.9.7
Released [October 20th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.7)
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

### Version 0.4.9.6
Released [September 4th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.6)
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

### Version 0.4.9.5
Released [August 29th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.5)
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

### Version 0.4.9.4
Released [August 26th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.4)
 - Add fix for unsupported payment methods

### Version 0.4.9.3
Released [August 8th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.3)
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

### Version 0.4.9.2
Released [July 30th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.2)
 - Bugfix with repeated publication of trade statistics data
 - Add "Show all currencies" to trade statistics view to see total volume of all currencies
 - Add warning popup if Tor is enabled for http and user clicks a button to open a webpage
 - Show offerers bank name also for SEPA in offer details window
 - Fix bug with missing market price updates
 - Save Fiat and Altcoin currency list as JSON if –dumpStatistics is enabled
 - Use info as default log level, improve logging
 - Other minor bug fixes

### Version 0.4.9.1
Released [July 27th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9.1)
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

### Version 0.4.9
Released [July 17th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.9)
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

### Version 0.4.8.1
Released [July 5th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.8.1)
 - Hotfix: Fix bug with support for multiple arbitrators

### Version 0.4.8
Released [May 25th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.8)
 - Bugfix: Removed Payment ID from trade contract for Monero
 - Fix NullPointer at Bank account setup

### Version 0.4.7
Released [May 25th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.7)
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

### Version 0.4.6
Released [April 29th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.6)
 - Bugfix for fee calculation when using password protection
 - Added Sibcoin, Creditbit

### Version 0.4.5
Released [April 29th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.5)
 - Bugfix for rounding amount which caused issues at withdrawal
 - Display exact bitcoin amount (without rounding)
 - Change Myriadcoin ticker symbol as it conflicts with Malaysian ringgit
 - Change wording for bank form
 - Added I/O Coin, Groestlcoin, MarteXcoin
 - Change name of Anti.cash to Anti (on their request)

### Version 0.4.4
Released [April 27th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.4)
 - GPG signed hashes of all binaries (never run binaries which are not signed by Bisq!)
 - Add new seed node
 - Added new coins: Myriadcoin, Verge
 - Improve wording
 - Fix wrong fee calculation
 - Fix update popup handling

### Beta Preview Version 0.4.3
Released [April 23th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.3)
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

### Beta Preview Version 0.4.2
Released [April 17th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.2)
 - Add percentage based price for offers (distance from market price).
 - Fix bloom filter privacy vulnerabilities in BitcoinJ
 - UI improvements
 - Bug fixes

### Beta Preview Version 0.4.1
Released [April 14th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.1)
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

### Beta Preview Version 0.4.0
Released [April 08th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.4.0)
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

### Alpha Version 0.3.6
Released [March 20th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.6)
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

### Alpha Version 0.3.5
Released [March 11th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.5)
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
 - Display inboud and outbound traffic
 - Measure round trip time
 - Throttle max. traffic
 - Add "Show all currencies" option to the offer book
 - Make market price invertable
 - Notifications and advanced popup handling

### Alpha Version 0.3.4
Released [February 9th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.4)
 - P2P network improvements
 - Use Tor for BitcoinJ
 - UI improvements
 - Bugfixes

### Alpha Version 0.3.3
Released [January 27th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.3)
 - Remove initial confirmation handshake in P2P network
 - Add spread overview to markets screen
 - Make mainnet default network
 - UI improvements
 - Bugfixes

### Alpha Version 0.3.2.3
Released [January 19th 2016](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.2.3)
 - P2P network improvements
 - UI improvements
 - Bugfixes
 - Enable mainnet

### Alpha Version 0.3.2.2
Released [December 28th 2015](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.2.2)
 - Bug fixes
 - P2P network stability improvements

### Alpha Version 0.3.2.1
Released [December 20th 2015](https://github.com/bitsquare/bitsquare/releases/tag/v0.3.2.1)
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

### Alpha Version 0.2.1
Released [May 17th 2015](https://github.com/bitsquare/bitsquare/releases/tag/v0.2.1)
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

### Alpha Version 0.1.3
Released [March 30th 2015](https://github.com/bitsquare/bitsquare/releases/tag/v0.1.3)
 - Traders can quit application during the trade process and continue later
 - Encryption for DHT mailbox
 - Use P2SH for MultiSig
 - Add data protection for DHT storage
 - When trader goes offline his offers get removed from the offer book and will get added again when he goes online again (app should run in background when window gets closed, but that is deactivaed at the moment)
 - Update to TomP2P Beta 6
 - Update to tag of latest BitcoinJ master

### Alpha Version 0.1.1
Released [March 7th 2015](https://github.com/bitsquare/bitsquare/releases/tag/v0.1.1)
 - Support for UpdateFX
 - Update to TomP2P beta3
 - Relay mode for P2P network
 - Use maven instead of Gradle

### Alpha Version 0.1.0
Released [December 11th 2014](https://github.com/bitsquare/bitsquare/releases/tag/v0.1.0)
 - Fully functional UI for executing a trade in one of 2 variants (BTC buyer makes offer, seller takes offer)
 - Offer book
 - Create an offer
 - Take an offer from the offer book
 - Account registration
 - Portfolio management (open offer, open trade, closed trades)
 - Fund management (withdrawal, Tx history)
 - P2P network works with port forwarding (automatic or manual)
 - Binaries for all OS

You can help speed up our progress by [contributing](/contribute/) to Bisq.
