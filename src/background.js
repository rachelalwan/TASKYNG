chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    showHello();
  }
});

chrome.action.onClicked.addListener((tab) => {
  showHello();
});

function showHello(info, tab) {
  let url = chrome.runtime.getURL("hello.html");
  chrome.tabs.create({ url });
}