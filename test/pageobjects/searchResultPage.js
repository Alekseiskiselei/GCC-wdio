const Page = require('../pageobjects/page');

class SearchResultPage extends Page {
  get chooseSearchResult() {
    return $(
      '//div[@class="gs-title"]//a[@data-ctorig="https://cloud.google.com/products/calculator"]'
    );
  }
}

module.exports = SearchResultPage;
