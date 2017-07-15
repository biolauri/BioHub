import { BioHubPage } from './app.po';

describe('bio-hub App', () => {
  let page: BioHubPage;

  beforeEach(() => {
    page = new BioHubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bio-hub!');
  });
});
