// Extracts product title from Amazon product page
const titleElement = document.getElementById("productTitle");

if (titleElement) {
  const productTitle = titleElement.innerText.trim();
  chrome.runtime.sendMessage({ action: "productFound", title: productTitle });
}
