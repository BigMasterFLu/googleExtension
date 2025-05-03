document.getElementById("reverse-search").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startAliExpressSearch" });
});
