const Page = require('../pageobjects/page');

class CalcPage extends Page {
  get switchFirstFrame() {
    return $('//*[@id="cloud-site"]/devsite-iframe/iframe');
  }

  get switchSecondFrame() {
    return $('//*[@id="myFrame"]');
  }

  get defineNumberOfInstances() {
    return $('#input_75');
  }

  get chooseOperatingSystem() {
    return $('#select_88');
  }

  get selectFirstOption() {
    return $('//*[@id="select_option_77"]/div[@class="md-text"]');
  }

  get chooseSeries() {
    return $('//md-select[@placeholder="Series"]//span[@class="md-select-icon"]');
  }

  get selectN1Series() {
    return $('//div[contains(text(),"N1")]');
  }

  get chooseMachineType() {
    return $('//md-select[@placeholder="Instance type"]//span[@class="md-select-icon"]');
  }

  get selectN1S8Type() {
    return $('//*[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]');
  }

  get addGPU() {
    return $(
      '//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]//div[@class="md-label"]'
    );
  }

  get chooseGPUType() {
    return $('//md-select[@placeholder="GPU type"]');
  }

  get selectV100() {
    return $('//md-option[@value="NVIDIA_TESLA_V100"]');
  }

  get chooseNumberOfGPUs() {
    return $('//md-select[@placeholder="Number of GPUs"]//span[@class="md-select-icon"]');
  }

  get selectOneGPU() {
    return $(
      '//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][@value="1"]'
    );
  }

  get chooselocalSSD() {
    return $(
      '//md-select[@ng-model="listingCtrl.computeServer.ssd"]//span[@class="md-select-icon"]'
    );
  }

  get selectSize() {
    return $(
      '//div[@class="md-select-menu-container md-active md-clickable"]//md-option[@value="2"]'
    );
  }

  get chooseDatacenterLocation() {
    return $('//md-select[@placeholder="Datacenter location"]//span[@class="md-select-icon"]');
  }

  get selectFrankfurt() {
    return $('//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]');
  }

  get chooseUsageTerm() {
    return $('//md-select[@placeholder="Committed usage"]//span[@class="md-select-icon"]');
  }

  get selectOneYear() {
    return $(
      '//div[@class="md-select-menu-container md-active md-clickable"]//md-option[@ng-value="1"]'
    );
  }

  get addToEstimate() {
    return $('//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]');
  }

  get emailEstimate() {
    return $('//button[@aria-label="Email Estimate"]');
  }

  get findEmailInput() {
    return $('//input[@ng-model="emailQuote.user.email"]');
  }

  get sendMailBtn() {
    return $('//button[@aria-label="Send Email"]');
  }

  get showVMClass() {
    return $(
      '//md-list-item[@ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]'
    );
  }

  get showType() {
    return $('//md-list-item[@class="md-1-line md-no-proxy"]//div[contains(text(),"Instance")]');
  }

  get showRegion() {
    return $('//md-list-item[@class="md-1-line md-no-proxy"]//div[contains(text(),"Region")]');
  }

  get showSSD() {
    return $('//md-list-item[@ng-if="item.items.ssd && item.items.ssd != 0"]');
  }

  get showTerm() {
    return $(
      '//md-list-item[@class="md-1-line md-no-proxy ng-scope"]//div[contains(text(),"Commitment")]'
    );
  }

  get showCost() {
    return $('//h2[@class="md-title"]//b[@class="ng-binding"]');
  }
}

module.exports = CalcPage;
