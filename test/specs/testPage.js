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

  before(async function () {
    await startPage.open();
    await browser.maximizeWindow();
    await startPage.findInput.click();
    await startPage.findInput.addValue(searchText);
    await startPage.findInput.keys('Enter');

    await searchResultPage.chooseSearchResult.click();

    await browser.switchToFrame(await calcPage.switchFirstFrame);
    await browser.switchToFrame(await calcPage.switchSecondFrame);

    await calcPage.defineNumberOfInstances.click();
    await calcPage.defineNumberOfInstances.addValue(numberOfInstances);

    await calcPage.chooseOperatingSystem.click();
    await calcPage.selectFirstOption.click();

    await calcPage.chooseSeries.click();
    await calcPage.selectN1Series.waitForClickable();
    await calcPage.selectN1Series.click();

    await calcPage.chooseMachineType.click();
    await calcPage.selectN1S8Type.waitForClickable();
    await calcPage.selectN1S8Type.click();

    await calcPage.addGPU.click();
    await calcPage.chooseGPUType.click();
    await calcPage.selectV100.waitForClickable();
    await calcPage.selectV100.click();

    await calcPage.chooseNumberOfGPUs.click();
    await calcPage.selectOneGPU.waitForClickable();
    await calcPage.selectOneGPU.click();

    await calcPage.chooselocalSSD.click();
    await calcPage.selectSize.waitForClickable();
    await calcPage.selectSize.click();

    await calcPage.chooseDatacenterLocation.click();
    await calcPage.selectFrankfurt.waitForClickable();
    await calcPage.selectFrankfurt.click();

    await calcPage.chooseUsageTerm.click();
    await calcPage.selectOneYear.waitForClickable();
    await calcPage.selectOneYear.click();

    await calcPage.addToEstimate.click();
  });

  it('should VM class be regular', async function () {
    const vmClass = await calcPage.showVMClass.getText();
    expect(vmClass).to.be.include('regular');
  });

  it('should Instance type be n1-standard-8', async function () {
    const type = await calcPage.showType.getText();
    expect(type).to.be.include('n1-standard-8');
  });

  it('should Region be Frankfurt', async function () {
    const region = await calcPage.showRegion.getText();
    expect(region).to.be.include('Frankfurt');
  });

  it('should Local SSD 2x375 GiB', async function () {
    const ssd = await calcPage.showSSD.getText();
    expect(ssd).to.be.include('2x375 GiB');
  });

  it('should commitment term be 1 Year', async function () {
    const term = await calcPage.showTerm.getText();
    expect(term).to.be.include('1 Year');
  });

  it('should final Total estimated cost per one month correspond cost recieved with manual testing', async function () {
    const cost = await calcPage.showCost.getText();
    expect(cost).to.be.include('USD 1,082.77');
  });

  it('should total cost shown in calculator coincide with cost shown in letter', async function () {
    const calculatorCost = await calcPage.showCost.getText();
    await calcPage.emailEstimate.click();
    const parentWindow = await browser.getWindowHandle();

    await browser.newWindow(emailCreatorURL);
    const childWindow = await browser.getWindowHandle();

    await emailCreator.makeRandomEmail.click();
    await createdEmailPage.copyEmail.click();

    await browser.switchToWindow(parentWindow);
    await browser.switchToFrame(await calcPage.switchFirstFrame);
    await browser.switchToFrame(await calcPage.switchSecondFrame);
    await calcPage.findEmailInput.click();
    await calcPage.findEmailInput.keys(['Shift', 'Insert']);
    await calcPage.sendMailBtn.click();

    await browser.switchToWindow(childWindow);

    await createdEmailPage.checkInboxBtn.click();

    await browser.switchToFrame(await finalPage.switchFinalFrame);
    const emailCost = await finalPage.showFinalCost.getText();
    expect(calculatorCost).to.be.include(emailCost);
  });
});
