'use strict';

chrome.webRequest.onCompleted.addListener(function (details) {
	if (!details.fromCache) {
		return;
	}
	chrome.browserAction.setIcon({
		'path' : '/img/m9.png',
		'tabId' : details.tabId
	});
}, {
	'urls' : [
		'http://*/*'
	],
	'types' : [
		'main_frame'
	]
});
