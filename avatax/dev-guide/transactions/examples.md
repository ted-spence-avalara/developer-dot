---
layout: page
title: 2.4 - Examples
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/line-items/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
The first transaction we'll set up will be as simple as possible, meaning we'll send only the minimum required fields. The transaction below represents a 'single location' transaction, meaning that it is a point-of-sale cash register transaction. In this case, the transaction would be a sale of an item costing $100.00 to customer ABC. The sale took place on 6/15/2017 somewhere within the ZIP code 98110. Notice we did not specify a <code>CompanyCode</code> - in this situation, the 'default' company in your AvaTax account is used.

We also did not use a full address. AvaTax is able to calculate tax with just a ZIP code, although the results may not be as accurate as if you provide the full street address. 

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 2.2.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Document Code:</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer/vendor code: ABC</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>Send only the ZIP code 98110</li>
            </ul>
        <li>Lines:</li>
            <ul class="dev-guide-list">
                <li>Amount 100</li>
            </ul>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Since this is a 'SalesOrder' transaction, the response includes the sales tax calculation, but the transaction is not committed to the AvaTax admin console.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
    "code": "Chapter-2-Test-1",
    "date": "2017-06-15",
    "customerCode": "ABC",
    "addresses": {
        "singleLocation": {
            "postalCode": "98110"
        }
    },
    "lines": [
        {
            "amount": 100,
        }
    ],
}
            </pre>
        </li>
    </ul>
</div>
</div>
</div>

Now we'll take a look at a more fleshed-out version of a single location transaction. You can see that we've included some additional fields, such as <code>Type</code>, <code>Company Code</code>, <code>Number</code>, and <code>Quantity</code>, as well as specifying a full street address. The additional fields are not strictly required, but it's good practice to include them. Likewise, a full street address is not strictly required, but providing as much address information as is available helps to ensure that you receive the most accurate sales tax calculation.

<div class="dev-guide-test" id="test2">
<div class="dev-guide-test-heading">Test Case - 2.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Type: SalesOrder</li>
        <li>Document Code: Chapter-2-Test-2</li>
        <li>Company Code: DEVGUIDE</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer/vendor code: ABC</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, US 98110</li>
            </ul>
        <li>Lines:</li>
            <ul class="dev-guide-list">
                <li>Number: 1</li>
                <li>Quantity: 1</li>
                <li>Amount: 100</li>
            </ul>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Since this is a 'SalesOrder' transaction, the response includes the sales tax calculation, but the transaction is not committed to the AvaTax admin console.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle2" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
    "type": "SalesOrder",
    "code": "Chapter-2-Test-2",
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "ABC",
    "addresses": {
        "singleLocation": {
          "line1": "100 Ravine Lane NE",
          "city": "Bainbridge Island",
          "region": "WA",
          "country": "US",
          "postalCode": "98110"
        }
    },
    "lines": [
        {
            "number": "1",
            "quantity": 1,
            "amount": 100,
        }
    ],
}
            </pre>
        </li>
    </ul>
</div>
</div>
</div>

Now that we've got our example API set up, we'll send it off and then walk through how to interpret the results.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/line-items/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>