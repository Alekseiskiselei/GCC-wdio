const { expect } = require('chai');

const StartPage = require('../pageobjects/startPage');
const SearchResultPage = require('../pageobjects/searchResultPage');
const CalcPage = require('../pageobjects/calcPage');
const EmailCreator = require('../pageobjects/emailCreatorPage');
const CreatedEmailPage = require('../pageobjects/createdEmailPage');
const FinalPage = require('../pageobjects/finalPage');

describe('Open web app, set parametrs and check them', async function () {
  
  const startPage = new StartPage();
  const searchResultPage = new SearchResultPage();
  const calcPage = new CalcPage();
  const emailCreator = new EmailCreator();
  const createdEmailPage = new CreatedEmailPage();
  const finalPage = new FinalPage();

  //const googleCloudURL = 'https://cloud.google.com/';
  const searchText = 'Google Cloud Platform Pricing Calculator';
  const emailCreatorURL = 'https://yopmail.com/en/';
  const numberOfInstances = '4';

  before( async function () {
    //await browser.url(emailCreatorURL);
    await startPage.open();
    await browser.maximizeWindow();
    await startPage.findInput.click();
    await startPage.findInput.addValue(searchText);
    await startPage.findInput.keys('Enter');

    await searchResultPage.chooseSearchResult.click();
  });
});
