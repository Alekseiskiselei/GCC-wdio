class CreatedEmailPage {
  get copyEmail() {
    return $('//div[@class="tooltip"]//button[@class="md but text f24 egenbut"]');
  }

  get checkInboxBtn() {
    return $('//button[@onclick="egengo();"]');
  }
}

module.exports = CreatedEmailPage;
