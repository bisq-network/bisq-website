# pull translations from transifex
echo "Pulling translations from Transifex..."
tx pull -l de,es,zh_CN,ru,pt_BR,pt,ja,fr

# replace yml files with different language codes
echo "Renaming yml files in data folder..."
mv ../_data/zh_CN.yml ../_data/zh-CN.yml
mv ../_data/pt_BR.yml ../_data/pt-BR.yml
mv ../_data/pt.yml ../_data/pt-PT.yml

echo "Done."
echo "Please don't forget to translate DAO images, especially if adding a new language."
