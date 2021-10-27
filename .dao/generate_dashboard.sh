#!/bin/bash

echo -e ""
mkdir -p data

# generate cycle burn data

echo -e "Parsing DAO transactions to get burn figures...\n"
python3 utilities/dao-burn/parse-txs.py

# generate cycle overview data

echo -e "Compiling overview data for dashboard...\n"
python3 utilities/cycle-overview-data/fetch.py

# generate series for bsq supply chart

echo -e "Generating data series for BSQ supply chart...\n"
python3 utilities/supply-graph-series/generate.py

head -n 4 ../js/dashboard.js > ../js/dashboard-2.js
less data/highcharts-vars.txt >> ../js/dashboard-2.js
tail -n +7 ../js/dashboard.js >> ../js/dashboard-2.js
mv ../js/dashboard-2.js ../js/dashboard.js

# generate cycle tiles on /dashboard

echo -e "Generating cycle tiles for dashboard page...\n"
python3 utilities/dashboard-tiles/generate.py
