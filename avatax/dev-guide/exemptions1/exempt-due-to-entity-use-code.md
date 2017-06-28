---
layout: page
title: Exempt due to Entity Use Code
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

{% include exemptions_toc.html %}


An Entity Use Code provides information about how a transaction will be used by the customer, and information about the type of customer making the purchase.  For example, a purchase made by the US federal government would be designated for government use, and it would generally be exempt or nontaxable for that specific use.

Entity Use Codes are generally displayed in the user interface of a connector as a dropdown, combo box, or selection element.  This element uses the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a> to retrieve the list of available choices, and displays it as a list of values in a dropdown.  The default value should be NULL, indicating that by default a transaction does not have a custom entity use code.

********Insert the dropdown picture here*********

The value of the customer's choice is placed in the <u><b>customerUsageType</b></u> field in the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransctionModel</a> element.  Here's how to find the values and put them into your transaction.

First, call the  <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a>.  The field "code" is the value you will use, and the field "name" is the description you will show to the customer.  You can either show "code - name", like "A - FEDERAL GOV", or you can just show the name field.

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

If the customer makes a choice, put that value in the "customerUsageType field on the CreateTransactionModel element:

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

If the customer does not make a choice, omit the customerUsageType element entirely, or set its value to null.

Since changing this value can make an entire transaction exempt, this field is not generally displayed when building a web storefront.  Developers are encouraged instead to ask their customers for an exemption certificate or other documentation that can validate the claim that the customer is an exempt buyer.

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading"> Certification Requirements - Entity Use Codes </div>
<div class="dev-guide-certification-content">
<h4>Certified Connector</h4>
<h3>Requirements</h3>
<ul class="dev-guide-list">
    <li>AvaTax Certified Connectors must allow a salesperson to provide an entity use code for a transaction.</li>
    <li>The connector must display a dropdown box allowing the salesperson to choose from defined codes.</li>
    <li>The default code must be null.</li>
</ul>
<h4>Custom Integration</h4>
<h3>Suggested</h3>
<ul class="dev-guide-list">
    <li>It's suggested for a Custom integration to implement entity use codes, if the application supports Tax Exempt sales.</li>
</ul>
</div>
</div>

<div class="dev-guide-test">
<div class="dev-guide-test-heading">Test Case: Entity Use Code Exemptions </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>

Transactions sold with an EntityUseCode of "D" are considered sold for foreign diplomatic use.
In the United States, foreign diplomatic sales are legally exempt from sales taxes.
In your connector, create the following transaction:
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
Calculate tax for your transaction using AvaTax.

<h4>Expected API Call</h4>
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

<h4>Assertions</h4>

The tax for line 1 should be $0.00.

The Taxable amount for line 1 should be $0.00.

The Exempt amount for line 1 should be $100.00.
</div>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions1/exempt-due-to-entity-use-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions1/zero-tax-using-tax-overrides/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>