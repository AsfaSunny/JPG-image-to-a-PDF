chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: "https://smallpdf.com/pdf-converter"
  });
});
