---
layout: page
title: 1.4 - Configure your Avatax Account
product: avaTax
doctype: dev_guide
chapter: getting-started-with-avatax
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/troubleshooting/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
To use AvaTax, you must configure your company and set up your tax profile.  You can configure your company on the <a class="dev-guide-link" href="https://admin-avatax.avalara.net/login.aspx">AvaTax administration website</a> or by using the API directly.

If you are building a connector that links up to AvaTax, you don't have to do any work to setup a company.  Your customers will log onto AvaTax and follow the company setup steps themselves.  No work necessary!

To continue with this developer guide, let's set up a test company right now for our developer guide test cases.  This company will allow us to finish all the test cases within the AvaTax Developer Guide using a company with a known tax profile.  Let's take a look at a sample request code:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 1.3.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CompanyInitialize with the following parameters:</li>
    <ul class="dev-guide-list">
        <li>Name: Developer Guide Company</li>
        <li>CompanyCode: DEVGUIDE</li>
        <li>Address:
            <ul class="dev-guide-list">
                <li>123 Main Street</li>
                <li>Irvine, CA 92615</li>
            </ul>
        </li>
        <li>Contact:
            <ul class="dev-guide-list">
                <li>Bob Example</li>
                <li>bob@example.org</li>
                <li>714 555 2121</li>
            </ul>
        </li>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Company is created</li>
    <li>TODO: More assertions</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>CompanyInitialize:
            <pre>
{
  "name": "Developer Guide Company",
  "companyCode": "DEVGUIDE",
  "taxpayerIdNumber": "12-3456789",
  "line1": "123 Main Street",
  "city": "Irvine",
  "region": "CA",
  "postalCode": "92615",
  "country": "US",
  "firstName": "Bob",
  "lastName": "Example",
  "title": "Owner",
  "email": "bob@example.org",
  "phoneNumber": "714 555-2121",
  "mobileNumber": "714 555-1212"
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

Congratulations!  You have successfully initialized your first AvaTax company using the RESTv2 API. 

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/troubleshooting/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>