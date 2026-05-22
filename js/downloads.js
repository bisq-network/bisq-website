(function () {
  var api = "https://api.github.com/repos/bisq-network/bisq-mobile/releases?per_page=100";
  var prefixes = {
    easy: "anode_",
    connect: "connect_"
  };

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function sanitizeTag(tag) {
    return (tag || "").trim().replace(/[^a-zA-Z0-9._-]/g, "");
  }

  function extractVersion(tag, prefix) {
    var safeTag = sanitizeTag(tag);
    var escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safeTag.replace(new RegExp("^" + escapedPrefix, "i"), "");
  }

  function findLatestByPrefix(releases, prefix) {
    var matches = releases.filter(function (release) {
      if (release.draft) {
        return false;
      }

      var tag = sanitizeTag(release.tag_name);
      return tag.toLowerCase().indexOf(prefix.toLowerCase()) === 0;
    });

    if (matches.length === 0) {
      return null;
    }

    return matches.reduce(function (latest, current) {
      if (!latest) {
        return current;
      }

      var latestTime = Date.parse(latest.published_at || latest.created_at || 0);
      var currentTime = Date.parse(current.published_at || current.created_at || 0);

      if (Number.isNaN(latestTime)) {
        return current;
      }

      if (Number.isNaN(currentTime)) {
        return latest;
      }

      return currentTime > latestTime ? current : latest;
    }, null);
  }

  function replaceVersionInLinks(prefix, placeholder, version) {
    if (!placeholder || !version) {
      return;
    }

    Array.prototype.forEach.call(document.querySelectorAll("a[href]"), function (link) {
      if (link.href.indexOf(prefix + placeholder) >= 0) {
        link.href = link.href.split(placeholder).join(version);
      }
    });
  }

  function updateVersionText(selector, version) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function (element) {
      element.textContent = version;
    });
  }

  async function updateMobileReleaseVersions() {
    try {
      var response = await fetch(api, {
        headers: { "Accept": "application/vnd.github.v3+json" }
      });

      if (!response.ok) {
        throw new Error("GitHub API error " + response.status);
      }

      var releases = await response.json();
      if (!Array.isArray(releases)) {
        throw new Error("Unexpected GitHub API response");
      }

      var easyRelease = findLatestByPrefix(releases, prefixes.easy);
      var connectRelease = findLatestByPrefix(releases, prefixes.connect);
      var easyVersionElement = document.querySelector('[data-version="bisq-easy"]');
      var connectVersionElement = document.querySelector('[data-version="bisq-connect"]');

      if (easyRelease && easyVersionElement) {
        var easyVersion = extractVersion(easyRelease.tag_name, prefixes.easy);
        replaceVersionInLinks(prefixes.easy, easyVersionElement.textContent.trim(), easyVersion);
        updateVersionText('[data-version="bisq-easy"]', easyVersion);
      }

      if (connectRelease && connectVersionElement) {
        var connectVersion = extractVersion(connectRelease.tag_name, prefixes.connect);
        replaceVersionInLinks(prefixes.connect, connectVersionElement.textContent.trim(), connectVersion);
        updateVersionText('[data-version="bisq-connect"]', connectVersion);
      }
    } catch (error) {
      console.error("Failed to fetch Bisq Mobile releases:", error);
    }
  }

  ready(updateMobileReleaseVersions);
})();
