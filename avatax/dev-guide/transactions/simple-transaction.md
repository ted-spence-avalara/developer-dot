---
layout: page
title: 2.1 - A Simple Transaction
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

First, we will create a transaction using the minimum elements required for a successful tax calculation. The transaction below represents a 'single location' transaction, meaning that it is a point-of-sale cash register transaction. As such, only one address is needed. All other transactions types will need both a "ship-from (origin)" address and a "ship-to (destination)" address. We'll focus on single location transactions for the rest of this chapter to keep things simple, but you can find more information on multi-address transactions in <a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transaction</a>.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 2.1.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Document Date: 2017-06-15</li>
        <li>Customer/vendor code: ABC</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>Send only the ZIP code 27701</li>
            </ul>
        <li>Lines:</li>
            <ul class="dev-guide-list">
                <li>Amount: 100</li>
            </ul>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle1" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle1"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
    "date": "2017-06-15",
    "customerCode": "ABC",
    "addresses": {
        "singleLocation": {
            "postalCode": "27701"
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

Now we'll take a look at a more fleshed-out version of a single location transaction. You can see that we've included some additional fields, such as 'Type', 'Company Code', 'Number', and 'Quantity', as well as specifying a full street address. The additional fields are not strictly required, but it's good practice to include them. Likewise, a full street address is not strictly required, but providing as much address information as is available helps to ensure that you receive the most accurate sales tax calculation.

<div class="dev-guide-test" id="test2">
<div class="dev-guide-test-heading">Test Case - 2.1.2 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Type: SalesOrder</li>
        <li>Company Code: DEVGUIDE</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer/vendor code: ABC</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>512 S Mangum St, Durham NC 27701</li>
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
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "ABC",
    "addresses": {
        "singleLocation": {
            "line1": "512 S Mangum St",
            "city": "Durham",
            "region": "NC",
            "country": "US",
            "postalCode": "27701"
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
  <li class="previous"><a href="/avatax/dev-guide/transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/should-i-commit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>