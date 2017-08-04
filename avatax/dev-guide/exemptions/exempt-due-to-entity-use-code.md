---
layout: page
title: 8.5 - Exempt due to Entity Use Code
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/exempt-due-to-certificate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-using-tax-overrides/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>


An Entity Use Code provides information about how a transaction will be used by the customer, and information about the type of customer making the purchase.  For example, a purchase made by the US federal government would be designated for government use, and it would generally be exempt or nontaxable for that specific use.

Entity Use Codes are generally displayed in the user interface of a connector as a dropdown, combo box, or selection element.  This element uses the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a> to retrieve the list of available choices, and displays it as a list of values in a dropdown.  The default value should be NULL, indicating that by default a transaction does not have a custom entity use code.

<img src="/avatax/dev-guide/exemptions/exempt_due_to_entity_use_codes_img1.png">

The value of the customer's choice is placed in the <code>customerUsageType</code> field in the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransctionModel</a> element.  Here's how to find the values and put them into your transaction.

First, call the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a>.  The field <code>"code"</code> is the value you will use, and the field <code>"name"</code> is the description you will show to the customer.  You can either show "code - name", like <code>"A - FEDERAL GOV"</code>, or you can just show the name field.

```json
{
    "@recordsetCount": 17,
    "value": [
        {
            "code": "A",
            "name": "FEDERAL GOV",
            "description": "",
            "validCountries": [
                "US"
            ]
        },
        {
            "code": "B",
            "name": "STATE GOV",
            "decription": "",
            "validCountries": [
                "US"
            ]
        },
    ]
}
```

If the customer makes a choice, put that value in the <code>customerUsageType</code> field on the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a> element:

```json
{
    "type": "SalesInvoice",
    "companyCode": "DEFAULT",
    "date": "2017-06-16",
    ...
    "customerUsageType": "A",
    ...
}
```

If the customer does not make a choice, omit the <code>customerUsageType</code> element entirely, or set its value to null.

Since changing this value can make an entire transaction exempt, this field is not generally displayed when building a web storefront.  Developers are encouraged instead to ask their customers for an exemption certificate or other documentation that can validate the claim that the customer is an exempt buyer.

<div class="dev-guide-certification">
    <div class="dev-guide-certification-heading"> Certification Requirements</div>
    <div class="dev-guide-certification-content">
        <ul class="dev-guide-list">
            <li>AvaTax Certified Connectors must allow a salesperson to provide an entity use code for a transaction.</li>
            <li>The connector must display a dropdown box allowing the salesperson to choose from defined codes.</li>
            <li>The default code must be null.</li>
        </ul>
    </div>
</div>

<h3>Custom Integration</h3>
It's suggested for a custom integration to implement entity use codes, if the application supports Tax Exempt sales.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 8.5.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Transactions sold with an EntityUseCode of "D" are considered sold for foreign diplomatic use.</li>
    <li>In the United States, foreign diplomatic sales are legally exempt from sales taxes.</li>
<li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Transaction Type: SalesInvoice</li>
        <li>Transaction Code: Chapter-8-Test-2</li>
        <li>Document Date: 2017-06-15</li>
        <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
        <li>CustomerUsageType: D</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        <li>Line #1:</li>
            <ul class="dev-guide-list">
                <li>Amount: 100</li>
                <li>TaxCode: P0000000</li>
            </ul>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $0.00.</li>
    <li>The Taxable amount for line 1 should be $0.00.</li>
    <li>The Exempt amount for line 1 should be $100.00.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
    "type": "SalesInvoice",
    "code": "Chapter-8-Test-2"
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode:" "ABC",
    "customerUsageType": "D",
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
            "amount": 100,
            "taxCode": "P0000000"
        }
    ]
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/exempt-due-to-certificate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-using-tax-overrides/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>