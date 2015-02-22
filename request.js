var requestGenerator = {


    currentRequests: function (f) {
        $.ajax({
            url: 'http://localhost/api/temps',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                f(data);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    },

    writeRequestResponse: function (requests) {
        var strResult = "<table class='table table-hover'><thead><tr><th>Code</th><th>Problem</th><th>Business Unit</th><th>Department</th><th>Status</th><th>Actions</th></tr></thead>";
        $.each(requests.temp, function (index, r) {
            strResult += "<tr><td>" + r.requestCode + "</td><td> " + r.problem + "</td><td>" + r.businessUnit + "</td><td>" + r.department + "</td><td>" + r.status + "</td><td>X</td></tr>";
        });

        strResult += "</table>";
        $("#divResult").html(strResult);
    },

    showRequest: function () {

    },
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    requestGenerator.currentRequests(requestGenerator.writeRequestResponse);
});

function test() {
    chrome.storage.sync.get('total', function (items) {
        var newTotal = 0;
        if (items.total) {
            newTotal += parseInt(items.total);
        }

        var amount = $("#amount").val();
        if (amount) {
            newTotal += parseInt(amount);
        }

        chrome.storage.sync.set({ 'total': newTotal });

        $('#total').text(newTotal);
        $('#amount').val('');
    });
}

$(function () {

});