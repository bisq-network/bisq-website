$(document).ready(function () {
  $("#getting-started .feature-selector > a").on("click", function (event) {
    event.preventDefault();

    var currentStepItem = "";
    var selectorClassList = event.currentTarget.classList;

    for (var i = 0; i < selectorClassList.length; i++) {
      if (selectorClassList[i].indexOf("-item") >= 0) {
        currentStepItem = selectorClassList[i];
        break;
      }
    }

    if (!currentStepItem) {
      return;
    }

    $("." + currentStepItem).removeClass("active");

    $("iframe").each(function () {
      if (this.contentWindow) {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
      }
    });

    if (event.currentTarget.id.indexOf("select-fiat") >= 0) {
      $("#getting-started .start-step-container .start-step .step-text .topical.fiat").addClass("active");
    } else if (event.currentTarget.id.indexOf("select-altcoin") >= 0) {
      $("#getting-started .start-step-container .start-step .step-text .topical.altcoin").addClass("active");
    }

    $(event.currentTarget).addClass("active");
    $("#" + event.currentTarget.id.substring(7)).addClass("active");
  });
});
