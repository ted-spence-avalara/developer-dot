---
layout: page
title: 3.4 - User Managed Meta Data
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/using-reference-codes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Much like the reference code fields, there are other meta data that can be utilized in both document level and line level properties.  These meta data fields are helpful in providing information that helps provide additional information and tracking around the transaction.  For example, if you have a sales associate that made the sale for the customer, you can track that at the document level.

Below is a list of the available meta data fields and at which level they can apply (document or line):
<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Field Name</th>
                <th>Level</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Customer Code</td>
                <td>Document</td>
                <td>Company name or number of the purchaser.</td>
            </tr>
            <tr>
                <td>Purchase Order Number</td>
                <td>Document</td>
                <td>If converting to another document type from a purchase order (i.e. purchase invoice) you can reference that in this field.</td>
            </tr>
            <tr>
                <td>Salesperson Code</td>
                <td>Document</td>
                <td>The number of the sales person associated with the transaction.</td>
            </tr>
            <tr>
                <td>Salesperson Code</td>
                <td>Document</td>
                <td>The number of the sales person associated with the transaction.</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>Line</td>
                <td>Field provided to describe the item/service/shipping method for that given line.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.4.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Rhode Island and Washington.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-3</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: ABC</li>
            <li>Reference Code: SalesOrder 123456</li>
            <li>Sales Person Code: SA8675309</li>
            <li>Purchase Oder</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>468 Angell Street, Providence, RI 02906</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>821 2nd Ave, Seattle, WA 98208</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount $65</li>
                <li>TaxCode P0000000</li>
                <li>Ref1 "Item out of stock in Providence distribution center. ShipFrom Newport distribution center."</li>
                <li>Ref2 "Customer would like the itemtoShipToasecondary address."</li>
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>142 Long Wharf, Newport, RI 02840</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>422 S F St, Aberdeen, WA 98520</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount $35</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li></li>
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
  "code": "Chapter-3-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ABC",
  "referenceCode": "SalesOrder 123456",
  "salespersonCode": "SA8675309",
  "purchaseOrderNo": "PO2376500
  "addresses": {
    "shipFrom": {
      "line1": "468 Angell Street",
      "city": "Providence",
      "region": "RI",
      "country": "US",
      "postalCode": "02906"
    },
    "shipTo": {
      "line1": "821 2nd Ave",
      "city": "Seattle",
      "region": "WA",
      "country": "US",
      "postalCode": "98104"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 84,
      "taxCode": "P0000000",
      "ref1": "Item out of stock in Providence distribution center.  ShipFrom Newport distribution center."
      "ref2": "Customer would like the item to ShipTo a secondary address."
      "addresses": {
        "shipFrom": {
          "line1": "12 Christies Landing",
          "city": "Newport",
          "region": "RI",
          "country": "US",
          "postalCode": "02840"
        },
        "shipTo": {
          "line1": "422 S F St.",
          "city": "Aberdeen",
          "region": "WA",
          "country": "US",
          "postalCode": "98520"
        }
      }
    },
    {
      "number": "2",
      "amount": 16,
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
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/using-reference-codes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>