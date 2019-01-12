---
layout: post-report
title: Report February 2018
author: Christoph Atteneder
---



<script>

var introData = [
  "Highest BTC volume (1,603) and total number of trades (2,522)",
  "Release of v0.9.0 and v0.9.1"
  ];

console.log(introData);


var modulesData = [
      {
          "name" : "Jemmy overy",
          "background" : "grey",
          "padding" : "p-0"
      },
      {
          "name" : "John Smith",
          "background" : "white",
          "padding" : "p-4"
      }
];




var intro, modules = "";


$.each(introData, function (key, value) {
    intro = intro + "<div>" + value + "</div>";
});
$("#report-intro").append('<div class="p-4">' + intro + '</div>');



$.each(modulesData, function (key, value) {


    modules = modules + '<div class="' + value.padding + ' ' + value.background + '-bg">' + value.name + '</div>';


});

$("#report-content").append(modules);







</script>
