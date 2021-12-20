const Page = require('../pageobjects/page');

class StartPage extends Page  {
  get findInput() {
    return $('//input[@aria-label="Search"]');
  }

  open() {
    super.open('https://cloud.google.com/');
  }
}

module.exports = StartPage;


















































