import { AngularValidationPage } from './app.po';

describe('angular-validation App', () => {
  let page: AngularValidationPage;

  beforeEach(() => {
    page = new AngularValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
