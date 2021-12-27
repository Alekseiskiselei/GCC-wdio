const Page = require('../pageobjects/page');

class EmailCreatorPage extends Page {
  get makeRandomEmail() {
    return $('//div[@class="txtlien"]/b[contains(text(),"Random")]');
  }
}

module.exports = EmailCreatorPage;
