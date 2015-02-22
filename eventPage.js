
chrome.storage.onChanged.addListener(function (changes) {
    change.browserAction.setBadgeText({ "text": changes.total.newValue.toString() });
});

var menuItem = {
    "id": "addRequest",
    "title": "Create Request",
    "contexts": ["selection"]
}

chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function (clickData) {

    if (clickData.menuItemId == "addRequest" && clickData.selectionText) {
        alert('hey');
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});