# Bisq DAO Dashboard Generator

`generate_dashboard.sh` runs a set of utilities to generate a rudimentary dashboard to display the health and performance of the Bisq DAO.

### Dependencies
- Python 3.6+

### Must-do
- Run Bisq with the `--dumpStatistics=true` and `--dumpBlockchainData=true` flags, and make sure all relevant data stores have been updated.
- Update settings in `settings.json`.
  - You need to manually export DAO vote result data using the Bisq GUI (use the `Export to JSON` button in `DAO` > `Governance` > `Vote Results`) and specify its location in `settings.json`.
- Fill out proposal commentary for any new cycles being added in `/_proposalcommentaries`.
  - Make a new folder for the cycle in `/_proposalcommentaries` (e.g., `/_proposalcommentaries/cycle-n`).
  - In the new folder, create a new `<proposaltxid>.md` file for every proposal you want to comment on.
  - In every new file's front matter, add a key called `proposalID`. The value for this key should match the filename (without the `.md` extension). **This is critical.** If done incorrectly, commentary will not render.
  - Add your commentary below the front matter in Markdown.
  - **If a cycle has no proposals at all (e.g., in case of an invalidated cycle), follow instructions above but use the last block number of the cycle for the file name and front matter (instead of a proposal ID).** You can find this block number listed in the cycle's data file in `/dashboard` as `blockEndDate` (see cycle 20 for example).
  - To add general notes for a cycle, add a file with the `blockStartDate` in the filename and front matter (see cycle 10 for example).
  - See existing commentary for examples, and/or `/_layouts/dashboard.html` to see how it works in practice.

### Must-know
- When generating a new cycle report, the script will exclude any cycles that started less than 29 days ago. If a new report is not generating as you expect, inspect the script in `utilities/cycle-overview-data/`.
- Only run `generate_dashboard.sh` from `.dao/` as there are some relative links that will not work otherwise.
- All files in `/dashboard` are regenerated every time `generate_dashboard.sh` is run, so don't save anything manually there.

### Known Issues / Weak Points / Rough Edges

- BSQ supply numbers are currently written into `js/dashboard.js` once the relevant numbers are calculated. The method for doing this is rather hacky and fragile. There is probably a better way to do this.
- The x-axis of the BSQ supply chart can appear jumbled.
- Currently no additional context on issuance, proposals, etc is gathered from GitHub.
- Cycle trading data didn't seem to fit on this page as previously thought, but can be integrated if desired.
