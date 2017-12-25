import { TurkistanAmericanAppPage } from './app.po';

describe('turkistan-american-app App', () => {
  let page: TurkistanAmericanAppPage;

  beforeEach(() => {
    page = new TurkistanAmericanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
