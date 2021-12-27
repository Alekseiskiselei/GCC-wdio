const Page = require('../pageobjects/page');

class FinalPage extends Page {
  get showFinalCost() {
    return $('//h3[contains(text(),"USD")]');
  }

  get switchFinalFrame() {
    return $('//*[@name="ifmail"]');
  }
}

module.exports = FinalPage;
