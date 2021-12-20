class EmailCreatorPage {
  get makeRandomEmail() {
    return $('//div[@class="txtlien"]/b[contains(text(),"Random")]');
  }
}

module.exports = EmailCreatorPage;
