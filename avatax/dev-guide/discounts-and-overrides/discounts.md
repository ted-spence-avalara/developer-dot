---
layout: page
title: 6.2 - Discounts
product: avaTax
doctype: dev_guide
chapter: discounts-and-overrides
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

You have several options for handling discounts with AvaTax. However, before we get to into the details we need to call out the different types of discounts you can apply as each is handled differently. Vendor discounts are simply a price reduction in the sale amount of an item or service. Whereas 3rd party (manufacturer) discounts are, generally speaking, a price reduction sponsored by the manufacturer where the vendor is compensated for the reduced price. When dealing with Vendor discounts, there are three basic ways to include the discount in your GetTax request:

<h3>Apply the Discount Prior to Making the Tax Calculation Request</h3>
MORE DETAIL
<ul class="dev-guide-list">
    <li>What are you doing</li>
    <li>Why are you doing it this way</li>
</ul>

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 6.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 chair.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-3</li>
            <li>Document Date: 2017-06-15</li>
            <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
        </ul>
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
        <li>Add a TaxOverride to set the TaxAmount to $5.67, and specify the reason as "Importing tax calculated by previous tax software"</li>
    <li>Calculate tax for your transaction using AvaTax.</li> 
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $8.10. This is the amount that AvaTax determined is correct.</li>
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
  "code": "Chapter-6-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-01",
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
      "amount": 90,
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

<h3>Add a Line Item with a Negative Amount (Same Tax Code as the Item Being Discounted)</h3>

With this approach, you will simply add an additional line that contains the discounted amount as a negative extended amount. Please ensure to use the same taxCode on the discount line as the item being discounted. This will ensure that any taxability rules applied to the product/service are also applied to the discount.

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 6.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-4</li>
            <li>Document Date: 2017-06-15</li>
            <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount 100</li>
                <li>TaxCode PC040100</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount -10</li>
                <li>TaxCode PC040100</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $8.10. This is the amount that AvaTax determined is correct.</li>
    <li>The taxCode for the discount line should match the line being discounted.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "ReturnInvoice",
  "code": "Chapter-6-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-01",
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
      "amount": -10,
      "taxcode": "P0000000"
   }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Use the Header Level < discount> Field and Identify the Lines that will be Participating in the Discount</h3>

With this approach you will pass the complete discounted amount in the < discount> field then identify the lines that are participating in the discount by setting the < discounted> field to 'True'. Unlike the other methods, you will enter the total discount as a positive integer with this approach. If no lines have the < discounted> set to 'True', then the discount will NOT be applied. 

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 6.2.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt only.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-5</li>
            <li>Document Date: 2017-06-15</li>
            <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount 100</li>
                <li>TaxCode PC040100</li>
                <li>Discounted: True</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount 75</li>
                <li>TaxCode P0000000</li>
                <li>Discounted: False</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax.</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The discountAmount for Line 1 should be $10.</li>
    <li>The taxableAmount for Line 1 should be $90</li>
    <li>The TaxCalculated for Line 1 should be $8.10. This is the amount that AvaTax determined is correct.</li>
    <li>The discountAmount for Line 2 should be $0.</li>
    <li>The taxableAmount for Line 1 should be $75</li>
    <li>The TaxCalculated for Line 1 should be $6.75. This is the amount that AvaTax determined is correct.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle3" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle3"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "ReturnInvoice",
  "code": "Chapter-6-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-01",
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
      "discounted": "True"
    },
    {
      "number": "2",
      "amount": 75,
      "taxcode": "P0000000"
      "discounted": "False"
   }
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>3rd Party (Manufacturer) Discounts</h3>

When working with discounts provided by a 3rd party (ex. manufacturer coupon) the process is very similar to the discount method of adding a line with a negative amount. However in this case, instead of using the same tax code as the item being discounted, you will use the tax code for Coupons (third party) - OC030000. Check out Chapter 5 for more information on tax codes and their function.

<div class="dev-guide-test" id="test4">
    <div class="dev-guide-test-heading">Test Case - 6.2.4</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>You would like to provide a $10 discount on a $100 T-Shirt.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-4</li>
            <li>Document Date: 2017-06-15</li>
            <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount 100</li>
                <li>TaxCode PC040100</li>
            </ul>
        </li>
         <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount -10</li>
                <li>TaxCode OC030000</li>
            </ul>
        </li>
        <li>Calculate tax for your transaction using AvaTax</li>
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The totalTaxCalculated amount should be $8.10. This is the amount that AvaTax determined is correct.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle4" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle4"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li> 
                <pre>
{
  "type": "ReturnInvoice",
  "code": "Chapter-6-Test-2",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-01",
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
      "amount": -10,
      "taxcode": "OC030000"
   }
  ]
}              </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/discounts-and-overrides/overrides/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/discounts-and-overrides/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>