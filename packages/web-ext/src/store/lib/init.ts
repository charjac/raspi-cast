import { store } from '../index';

export const initState = async () => {
  const [pageUrl, { castIp }]: any = await Promise.all([
    browser.tabs
      .query({
        active: true,
        windowId: (browser.windows as any).WINDOW_ID_CURRENT,
      })
      .then<string>(([tabInfo]) => tabInfo.url as string),
    browser.storage.local.get(['castIp']),
  ]);

  store.dispatch({
    setState: { pageUrl, castIp },
  });
};
