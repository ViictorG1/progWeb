import { MakeUListPage } from './app.po';

describe('make-ulist App', () => {
  let page: MakeUListPage;

  beforeEach(() => {
    page = new MakeUListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
