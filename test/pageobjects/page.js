class Page {
  async open(path) {
    await browser.url(path);
    await browser.maximizeWindow();
  }

  async click(element) {
    await element.click();
  }

  async enterTextAndSend(element, text) {
    await element.click();
    await element.addValue(text);
    await element.keys('Enter');
  }

  async enterText(element, text) {
    await element.click();
    await element.addValue(text);
  }

  async pasteText(element) {
    await element.click();
    await element.keys(['Shift', 'Insert']);
  }

  async selectDropdownList(openDropDown, chooseItem) {
    await openDropDown.click();
    await chooseItem.waitForClickable();
    await chooseItem.click();
  }

  async findDataToCompare(element) {
    return await element.getText();
  }

  async pause() {
    await browser.pause(5000);
  }

  async switchFrame(frame) {
    await browser.switchToFrame(await frame);
  }

  async makeWindowHandle() {
    return await browser.getWindowHandle();
  }

  async openNewWindow(url) {
    await browser.newWindow(url);
  }

  async switchWindow(window) {
    await browser.switchToWindow(window);
  }
}

module.exports = Page;
