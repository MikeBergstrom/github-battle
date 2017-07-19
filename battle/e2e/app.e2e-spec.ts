import { BattlePage } from './app.po';

describe('battle App', () => {
  let page: BattlePage;

  beforeEach(() => {
    page = new BattlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
