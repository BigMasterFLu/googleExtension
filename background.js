chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'productFound') {
      const query = encodeURIComponent(message.title);
      const compareUrl = `https://www.google.com/search?q=buy+${query}`;
      
      // You would replace this with your own comparison site eventually
      chrome.tabs.create({ url: compareUrl });
    }
  });
  