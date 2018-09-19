var fixApiRefNav = function() {
    if ($('#the-nav li').length >= 22) {
        $('#the-nav').data('offset-bottom', '160');
    }
};

var fixDropDownMenuLargePosition = function() {
    setTimeout(function() {
        $('.dropdown-large').each(function() {
            var left = $(this).position().left;

            $(this).find('.dropdown-menu-large').css('left', left);
        });
    }, 100);
};

function getCompareDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('');
}

function fillWithSampleData() {
    const sampleData = buildSampleData();
    $('#console-input').empty().text(JSON.stringify(sampleData, null, 2));
};

function buildSampleData() {
    const taxCode = $('option:selected').val();
    const description = $('option:selected').attr('description');

    const sampleData = {
        "lines": [ {
            "number": "1",
            "quantity": 1.0,
            "amount": 100.0,
            "taxCode": taxCode,
            "itemCode": "Y0001",
            "description": description
        } ],
        "type": "SalesInvoice",
        "companyCode": "DEFAULT",
        "date": "2018-09-05",
        "customerCode": "ABC",
        "purchaseOrderNo": "2018-09-05-001",
        "addresses": {
            "singleLocation": {
                "line1": "2000 Main Street",
                "city": "Irvine",
                "region": "CA",
                "country": "US",
                "postalCode": "92614"
            }
        },
        "commit": true,
        "currencyCode": "USD",
        "description": description
    };

    return sampleData;
}

function ApiRequest() {
    // clear the console output and display loading-pulse
    $("#console-output").empty().val();
    $(".loading-pulse").css('display', 'block'); 

    const data = buildSampleData();

    // Split Headers
    var raw = $('#console-headers').val();
    var lines = raw.split(/\r?\n/);
    var h = {};
    for (var i = 0; i < lines.length; i++) {
        var p = lines[i].indexOf(': ');
        if (p > 0) {
            h[lines[i].substring(0, p)] = lines[i].substring(p+2);
        }
    }

    // Here's our object
    var obj = {
        url: $('#console-server').text() + $('#console-path').text(),
        accepts: "application/json",
        type: $('#console-method').text(),
        headers: h,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(result) { $('#console-output').text(JSON.stringify(result, null, 2)); },
        error: function(result) { $('#console-output').text("HTTP Error: " + result.status + "\n\n" + JSON.stringify(result, null, 2)); }
    };

    // Execute the request
    $.ajax(obj);

    // hide loading-pulse
    $(".loading-pulse").css('display', 'none'); 
}

$(document).ready(function() {
    fixApiRefNav();
    fixDropDownMenuLargePosition();

    $('[webinar-hide-before]').each(function() {
      if ($(this).attr('webinar-hide-before') <= getCompareDate()) {
        $(this).show();
      }
    });

    $('[webinar-hide-after]').each(function() {
      if ($(this).attr('webinar-hide-after') >= getCompareDate()) {
        $(this).show();
      }
    });

    // When we show the section nav on xs/sm, clear the main content below the nav
    $('.sm-section-nav').on('shown.bs.dropdown', function() {
        $('main').addClass('section-nav-open');
    });
    // When we hide the section nav on xs/sm, reset the main content next to the nav
    $('.sm-section-nav').on('hidden.bs.dropdown', function() {
        $('main').removeClass('section-nav-open');
    });
});
