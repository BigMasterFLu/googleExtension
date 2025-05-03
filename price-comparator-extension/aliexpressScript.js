// Auto-click first result if we're on image search result page
setTimeout(() => {
    const firstProductLink = document.querySelector("a[href*='/item/']");
    if (firstProductLink) {
      window.location.href = firstProductLink.href;
    }
  }, 3000);
  