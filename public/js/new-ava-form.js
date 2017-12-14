function insertAvaForm() {
    $('.avaform-wrapper').append('<div style="margin: 20px 20px 20px 20px; padding: 20px 20px 20px 20px;"> <label>Request a Free AvaTax Sandbox Account</label> <form> <div class="form-group"> <label for="name">First Name / Given Name</label> <input type="text" class="form-control" id="firstName" placeholder=""> </div> <div class="form-group"> <label for="name">Last Name / Family Name</label> <input type="text" class="form-control" id="lastName" placeholder=""> </div> <div class="form-group"> <label for="email">Email Address</label> <input type="email" class="form-control" id="email" placeholder="user@example.org"> </div> <div class="form-group"> <label for="company">Company</label> <input type="text" class="form-control" id="company" placeholder="Company Name"> </div> <div class="form-group"> <label for="website">Website</label> <input type="text" class="form-control" id="website" placeholder="Optional"> </div> <div class="form-group"> <label for="phone">Phone</label> <input type="tel" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Phone Number"> </div> <div class="form-group" style="float:left;width:66%;margin-right:2%;"> <label for="street-address">Street Address</label> <input type="text" class="form-control" id="street-address" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;"> <label for="city">City</label> <input type="text" class="form-control" id="city" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;margin-right:2%;"> <label for="region">Region</label> <input type="text" class="form-control" id="region" placeholder="Region / State / Province"> </div> <div class="form-group" style="float:left;width:32%;margin-right:2%;"> <label for="country">Country</label> <input type="text" class="form-control" id="country" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;"> <label for="postal-code">Postal Code</label> <input type="text" class="form-control" id="postal-code" placeholder=""> </div> <button type="button" id="submit" class="btn btn-primary" onclick="return submitShort();" style="clear:both;">Submit</button> </form> <br/> <div id="ava-form-alert" class="alert alert-warning fade in" style="display: none;"> <span id="ava-form-info"></span> </div> </div>');
}

function submitShort() {
    var c_id = null;

    // AvaTag is a marketing feature that gathers informaton and persists it across site visits
    if (AvaTag.getCombinedData()['CampaignID']) {
        c_id = AvaTag.getCombinedData()['CampaignID'];
    }
    // console.log("c_id = " + c_id);
    $('#ava-form-alert').hide();
    var payload = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        company: $('#company').val(),
        website: $('#website').val(),
        phone: $('#phone').val(),
        campaign: c_id,
        companyAddress: {
            line: $('#street-address').val(),
            city: $('#city').val(),
            region: $('#region').val(),
            country: $('#country').val(),
            postalCode: $('#postal-code').val()
        }
    };

    // console.log("payload = ", JSON.stringify(payload));
    $.ajax({
        url: 'https://sandbox-rest.avatax.com/api/v2/accounts/freetrials/request',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        beforeSend: function() {
            $('#submit').prop('disabled', true); // disable button
        },
        error: function(err) {
            var avataxerror = $.parseJSON(err.responseText);
            $('#ava-form-info').html(avataxerror.error.message);
            $('#ava-form-alert').attr('class', 'alert alert-warning fade in');
            $('#submit').prop('disabled', false);
            $('#ava-form-alert').show();
        },
        dataType: 'json',
        success: function(data) {
            $('#ava-form-info').html('Success!  Your account credentials have been sent to <strong>' + data.accountDetailsEmailedTo + '</strong>.');
            $('#ava-form-alert').attr('class', 'alert alert-success fade in');
            $('#submit').prop('disabled', false);
            $('#ava-form-alert').show();
            // console.log(data);
        },
        type: 'POST'
    });
    return false;
}

// Populate forms on ready
$(
    function() {
        insertAvaForm();
    }
);
