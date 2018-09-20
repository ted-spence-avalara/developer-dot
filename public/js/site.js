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
            "description": description
        } ],
        "type": "SalesInvoice",
        "companyCode": "DEFAULT",
        "date": "2018-09-05", 
        "customerCode": "ABC",
        "addresses": {
            "singleLocation": {
                "line1": "2000 Main Street",
                "city": "Irvine",
                "region": "CA",
                "country": "US",
                "postalCode": "92614"
            }
        },
        "description": description
    };

    return sampleData;
}

const proxy = {
    "route": "https://xp0wfn7roi.execute-api.us-west-2.amazonaws.com/production/proxy",
    "key": {
        "name": "api-key",
        "location": "v2-devdot-keys/devdot-proxy-key"
    }
}

function ApiRequest() {
    // clear the console output and display loading-pulse
    $("#console-output").empty();
    $(".loading-pulse").css('display', 'block'); 

    const data = buildSampleData();
    const [bucket, key] = proxy.key.location.split('/');

    const keyBucket = new AWS.S3({params: {Bucket: bucket, Key: key}});
    return keyBucket.makeUnauthenticatedRequest('getObject', {}).promise()
    .then((bucketRes) => {
        return fetch(proxy.route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apiKey: bucketRes.Body.toString(),
                method:$('#console-method').text(),
                route: $('#console-server').text() + $('#console-path').text(),
               
                postBody: JSON.stringify(data)
            })
        });
    })
    .then((rawApiRes) => {
        return rawApiRes.json().then((body) => {
            // hide loading-pulse
            $(".loading-pulse").css('display', 'none'); 
            return {
                status: rawApiRes.status.toString(),
                statusMessage: rawApiRes.statusText,
                body: body
            };
        });
    });

     // queryString: endpoint.queryString || {},
     // pathParams: endpoint.pathParams || {},

    // Split Headers
    // var raw = $('#console-headers').val();
    // var lines = raw.split(/\r?\n/);
    // var h = {};
    // for (var i = 0; i < lines.length; i++) {
    //     var p = lines[i].indexOf(': ');
    //     if (p > 0) {
    //         h[lines[i].substring(0, p)] = lines[i].substring(p+2);
    //     }
    // }

    // Here's our object
    // var obj = {
    //     url: $('#console-server').text() + $('#console-path').text(),
    //     accepts: "application/json",
    //     type: $('#console-method').text(),
    //     headers: h,
    //     data: JSON.stringify(data),
    //     dataType: "json",
    //     contentType: "application/json",
    //     success: function(result) { $('#console-output').text(JSON.stringify(result, null, 2)); },
    //     error: function(result) { $('#console-output').text("HTTP Error: " + result.status + "\n\n" + JSON.stringify(result, null, 2)); }
    // };

    // Execute the request
    // $.ajax(obj);

    
}

$(document).ready(function() {
    fixApiRefNav();
    fixDropDownMenuLargePosition();
    fillWithSampleData();

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


