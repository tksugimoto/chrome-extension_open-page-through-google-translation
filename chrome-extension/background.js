chrome.action.onClicked.addListener(tab => {
	if (tab.url.startsWith('chrome://')) return;
	if (tab.url.startsWith('file://')) return;

	const query = Object.entries({
		/* 元の言語 */
		sl: 'en',
		/* 翻訳する言語 */
		tl: 'ja',
		u: tab.url,
		/* 原文を表示する */
		anno: 2,
	}).map(([key, value]) => {
		return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
	}).join('&');

	chrome.tabs.create({
		url: `https://translate.google.co.jp/translate?${query}`,
		openerTabId: tab.id,
	});
});
