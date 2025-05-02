// Runs on Amazon product pages to grab the product title
const titleElement = document.getElementById('productTitle');
if (titleElement) {
  const productTitle = titleElement.innerText.trim();
  chrome.runtime.sendMessage({ action: 'productFound', title: productTitle });
}
