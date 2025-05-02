document.getElementById('search').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const title = document.getElementById('productTitle')?.innerText?.trim();
          if (title) {
            chrome.runtime.sendMessage({ action: 'productFound', title });
          } else {
            alert("Couldn't find product title on this page.");
          }
        }
      });
    });
  });
  