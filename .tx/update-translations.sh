# pull translations from transifex
tx pull -l de,es,zh_CN,ru,pt_BR,pt,ja,fr

# replace yml files with different language codes
mv ../_data/zh_CN.yml ../_data/zh-CN.yml
mv ../_data/pt_BR.yml ../_data/pt-BR.yml
mv ../_data/pt.yml ../_data/pt-PT.yml

# update svg files
node update-svg-text.js
