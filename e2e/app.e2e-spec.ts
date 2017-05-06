import { NewAppliPage } from './app.po';

describe('new-appli App', () => {
  let page: NewAppliPage;

  beforeEach(() => {
    page = new NewAppliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
