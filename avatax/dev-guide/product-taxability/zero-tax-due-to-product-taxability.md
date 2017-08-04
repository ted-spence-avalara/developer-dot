---
layout: page
title: 5.3 - Zero Tax due to Product Taxability
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/mapping-itmes-to-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<div class="dev-guide-test" id="test">
    <div class="dev-guide-test-heading">Test Case - 5.3.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Carbonated Beverages are considered exempt in Washington State.</li>
    <li>The TaxCode for a Carbonated Beverage is PF050101.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-5-Test-1</li>
            <li>Document Date: 2017-06-15</li>
            <li>Document Date: 2017-06-15</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>SingleLocation</li>
                    <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
                </ul>
            </li>
            <li>Line #1:
                <ul class="dev-guide-list">
                    <li>Amount 100</li>
                    <li>TaxCode P0000000</li>
                </ul>
            </li>
            <li>Line #2:
                <ul class="dev-guide-list">
                    <li>Amount: 75</li>
                    <li>TaxCode PF050101</li>
                </ul>
            </li>
        </ul> 
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $9.00.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
    <li>The Exempt amount for line 1 should be $0.00.</li>
    <li>The tax for line 2 should be $0.00.</li>
    <li>The Taxable amount for line 2 should be $0.00.</li>
    <li>The Exempt amount for line 2 should be $75.00.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle1" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle1"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-5-Test-1",
  "companyCode": "DEFAULT",
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
      "amount": 100,
      "taxCode": "P0000000"
    },
    {
      "number": "2",
      "amount": 75,
      "taxCode": "PF050101"
    }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
<div class="dev-guide-test" id="test">
    <div class="dev-guide-test-heading">Test Case - 5.3.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Re-create the transaction in step 1, but this time change it as follows:</li>
        <ul class="dev-guide-list">
            <li>Transaction Code: Chapter-5-Test-2</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>SingleLocation</li>
                    <li>14 Wall Street, New York, NY 10005</li>
                </ul>
            </li>
        </ul> 
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $8.88.</li>
    <li>The Taxable amount for line 1 should be $100.00.</li>
    <li>The Exempt amount for line 1 should be $0.00.</li>
    <li>The tax for line 2 should be $6.66.</li>
    <li>The Taxable amount for line 2 should be $75.00.</li>
    <li>The Exempt amount for line 2 should be $0.00.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-5-Test-2",
  "companyCode": "DEFAULT",
  "date": "2017-06-15",
  "customerCode": "ABC",
  "addresses": {
    "singleLocation": {
      "line1": "14 Wall Street",
      "city": "New York",
      "region": "NY",
      "country": "US",
      "postalCode": "10005"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    },
    {
      "number": "2",
      "amount": 75,
      "taxCode": "PF050101"
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
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/mapping-itmes-to-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>