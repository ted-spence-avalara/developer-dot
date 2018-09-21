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

function makeAddressObj(){
    const address = $('#dropdown-addresses').find(":selected").val().split(',');
    const addressObj = {
        "line1": address[0],
        "city": address[1],
        "region": address[2],
        "country": address[3],
        "postalCode": address[4],
    }
    return addressObj;
}

function fillWithSampleData() {
    const sampleData = buildSampleData();
    $('#console-input').empty().text(JSON.stringify(sampleData, null, 2));
};

function buildSampleData() {
    const taxCode = $('#dropdown-products').find(":selected").val();
    const description = $('#dropdown-products').find(":selected").attr('description');
    const address = makeAddressObj();
    
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
            "singleLocation": address,
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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey: bucketRes.Body.toString(),
                method:$('#console-method').text(),
                route: $('#console-server').text() + $('#console-path').text(),
                queryString: {},
                pathParams:{},
                postBody: data
            })
        })
        .then((rawApiResponse) => {
            return rawApiResponse.json().then((body) => {
                $(".loading-pulse").css('display', 'none'); 
                $('#console-output').text(JSON.stringify(body, null, 2));

                //TODO handle errors
                // $('#console-output').text("HTTP Error: " + body.status + "\n\n" + JSON.stringify(result, null, 2));

                return {
                    status: rawApiResponse.status.toString(),
                    statusMessage: rawApiResponse.statusText,
                    body: body,
                };
            });
        });
    })
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


