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

const buildAuth = (authFormula) => {
    // Grab all auth variables out of authFormula str (should be in <> brackets)
    let auth;

    if (!authFormula) {
        auth = null;
    } else {
        const authParams = authFormula.match(/<\w+>/g).map((key) => key.substring(1, key.length - 1)).reduce((accum, key) => ({...accum,
            [key]: ''
        }), {});

        auth = {
            formula: authFormula,
            params: authParams
        };
    }

    return auth;
};

function ApiRequest()
{
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
        headers: buildAuth("`Basic ${btoa(`<username>:<password>`)}`"),        ,
        data: $('#console-input').val(),
        dataType: "json",
        contentType: "application/json",
        success: function(result) { $('#console-output').text(JSON.stringify(result, null, 2)); },
        error: function(result) { $('#console-output').text("HTTP Error: " + result.status + "\n\n" + JSON.stringify(result, null, 2)); }
    };

    // Execute the request
    $.ajax(obj);
    // submitApiRequest(obj)
}

$(document).ready(function()
{
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
