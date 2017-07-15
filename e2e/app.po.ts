import { browser, by, element } from 'protractor';

export class BioHubPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bio-hub-root h1')).getText();
  }
}
