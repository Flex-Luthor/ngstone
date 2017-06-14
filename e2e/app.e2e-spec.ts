import { NgstonePage } from './app.po';

describe('ngstone App', () => {
  let page: NgstonePage;

  beforeEach(() => {
    page = new NgstonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
