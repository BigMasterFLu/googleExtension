chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "startAliExpressSearch") {
    const tab = await getActiveTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        return new Promise(resolve => {
          chrome.runtime.sendMessage({ action: "getAmazonImages" }, resolve);
        });
      }
    }, async (result) => {
      const images = result?.[0]?.result?.images;
      if (images && images.length) {
        const imageUrl = images[0];
        const blob = await fetch(imageUrl).then(r => r.blob());
        const file = new File([blob], "product.jpg", { type: blob.type });

        const formData = new FormData();
        formData.append("image", file);

        const upload = await fetch("https://vi.aliexpress.com/image-search/api/image/upload", {
          method: "POST",
          body: formData
        });

        const json = await upload.json();
        const redirectUrl = json?.result?.imageSearchUrl;
        if (redirectUrl) {
          chrome.tabs.create({ url: "https:" + redirectUrl });
        } else {
          console.error("AliExpress upload failed.");
        }
      }
    });
  }
});

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}
