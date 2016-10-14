import { Angular2ExcersisePage } from './app.po';

describe('angular2-excersise App', function() {
  let page: Angular2ExcersisePage;

  beforeEach(() => {
    page = new Angular2ExcersisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
