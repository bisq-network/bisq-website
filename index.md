---
layout: page
title: titles.home
banner: /images/bitsquare-home2.jpg
---

{% assign page = site.posts.first %}
{% assign content = page.content %}
{% include post.html param="Include parameter value from index.html"%}
