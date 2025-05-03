function buildSearchUrls(product) {
    const encoded = encodeURIComponent(product);
  
    return [
      `https://www.google.com/search?q=buy+${encoded}`,
      `https://www.walmart.com/search?q=${encoded}`,
      `https://www.ebay.com/sch/i.html?_nkw=${encoded}`,
      `https://www.target.com/s?searchTerm=${encoded}`,
      `https://www.bestbuy.com/site/searchpage.jsp?st=${encoded}`
    ];
  }
  