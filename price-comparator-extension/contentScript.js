chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getAmazonImages") {
      const images = [];
      const imageElements = document.querySelectorAll("#imgTagWrapperId img, #main-image-container img");
  
      imageElements.forEach(img => {
        const src = img.getAttribute("data-old-hires") || img.getAttribute("src");
        if (src && !images.includes(src)) {
          images.push(src);
        }
      });
  
      sendResponse({ images });
    }
  });
  