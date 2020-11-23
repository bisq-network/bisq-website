#!/usr/bin/env zsh
MARKETS_DATA=$( curl -s https://bisq.markets/api/markets )

# <option value="ade_btc">Adeptio (ADE)</option>
for key in `echo "${MARKETS_DATA}" | jq 'keys[]'`;do
    LNAME=$(echo "${MARKETS_DATA}" | jq -r .${key}.lname)
    RNAME=$(echo "${MARKETS_DATA}" | jq -r .${key}.rname)
    LSYMBOL=$(echo "${MARKETS_DATA}" | jq -r .${key}.lsymbol)
    RSYMBOL=$(echo "${MARKETS_DATA}" | jq -r .${key}.rsymbol)
    RTYPE=$(echo "${MARKETS_DATA}" | jq -r .${key}.rtype)
    name="${RNAME}"
    symbol="${RSYMBOL}"
    if [ "${RTYPE}" = "crypto" ];then
        name="${LNAME}"
        symbol="${LSYMBOL}"
    fi
    echo "${name}|<option value=${key}>${name} (${symbol})</option>"
done|sort|cut -d '|' -f2 > ./_includes/market_currency_selector.html
