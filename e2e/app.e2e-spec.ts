import { ChatsterPage } from './app.po';

describe('chatster App', () => {
  let page: ChatsterPage;

  beforeEach(() => {
    page = new ChatsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
