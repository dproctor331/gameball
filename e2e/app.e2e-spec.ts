import { GameballPage } from './app.po';

describe('gameball App', () => {
  let page: GameballPage;

  beforeEach(() => {
    page = new GameballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
