import { WetterInformationAngularPage } from './app.po';

describe('wetter-information-angular App', function() {
  let page: WetterInformationAngularPage;

  beforeEach(() => {
    page = new WetterInformationAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
