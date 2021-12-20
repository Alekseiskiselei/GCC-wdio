class SearchResultPage {
  get chooseSearchResult() {
    return $('//div[@class="gs-title"]//a[@data-ctorig="https://cloud.google.com/products/calculator"]');
  }
}

module.exports = SearchResultPage;
