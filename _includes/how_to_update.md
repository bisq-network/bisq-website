Updating from Transifex
=====

Example using `pt-BR`


download translated files
----
go to transifex, get your language and download the files:
https://www.transifex.com/bisq/bisq-website/ 

You should end up with 6 files:
1. `for_use_bisq-website_community_pt_BR.md`
2. `for_use_bisq-website_dao_content_pt_BR.yml`
3. `for_use_bisq-website_images_pt_BR.yml`
4. `for_use_bisq-website_main_nav_pt_BR.yml`
5. `for_use_bisq-website_strings_pt_BR.md`
6. `for_use_bisq-website_vision_pt_BR.md`


Copy the language folder from another language
----

Take another language that has a folder and make a copy of it. name it by the ISO code of the language you translated to.

i.e. copying `pt-PT` as `pt-BR`


Adapt the headers
----

Within the folder you just created, in the markdown files (.md) 
edit the parts that need changing.

```
lang: pt-BR
flag: 🇧🇷
language: Português (BR)
```

Updating
---

head to the `_data` folder

now we're going to open the files from transifex and copy them into their respective place in `_data`

note the files here are in pairs: i.e. `dao_content.yml` & `dao_content_tr.yml`

We are going to edit the second one. `_tr` refers to "translation"


Note: when copying the `main_nav_tr.yml` keep in mind that the characters used in transifex are not valid and yield an error when Jekyll is initialising. So the way to deal with it is to simply copy a previous language from above in that file. Open the 4th file from transifex (`for_use_bisq-website_main_nav_pt_BR.yml`) side by side and copy the contents
