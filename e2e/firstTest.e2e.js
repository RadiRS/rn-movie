const waitTo = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Example E2E Testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should navigate to movie detail screen', async () => {
    await waitTo(500);
    await element(by.id('item-0-popular')).tap();
    await expect(element(by.id('movie-detail-screen'))).toBeVisible();
  });
});
