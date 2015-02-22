$(function () {
    var apiendpoint = optionHandler.loadSetting(['apiendpoint']);

    if (apiendpoint) {
        apiendpoint = apiendpoint.apiendpoint;
    }

    $("#webapilocation").val(apiendpoint);

    $("#saveConfig").click(function () {
        optionHandler.saveSetting('apiendpoint', $("#webapilocation").val());
        optionHandler.notify();
    });
});


var optionHandler = {

    loadSetting: function (setting, f) {
        chrome.storage.sync.get(setting, function (item) {
            if (typeof (f) == 'function') {
                f(item);
            }
            else {
                return item;
            }
        });
    },

    saveSetting: function (key, value) {
        chrome.storage.sync.set({ key: value });
    },

    notify: function () {
        var opt = {
            type: "basic",
            title: "Setting Saved.",
            message: "Your settings have been saved.",
            iconUrl: "img/icon.png"
        };

        chrome.notifications.create('save', opt, function () {
        });
    }
};