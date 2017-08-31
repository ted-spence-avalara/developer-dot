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

Much like the <code>ReferenceCode</code>, <code>Ref1</code>, and <code>Ref2</code> fields, there are other meta data that can be utilized in both document level and line level properties.  These meta data fields are helpful in providing information that helps provide additional information and tracking around the transaction.  For example, if you have a sales associate that made the sale for the customer, you can track that at the document level.

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
                <td><code>PurchaseOrderNo</code></td>
                <td>Document</td>
                <td>If converting to another document type from a purchase order (i.e. purchase invoice) you can reference that in this field.</td>
            </tr>
            <tr>
                <td><code>SalespersonCode</code></td>
                <td>Document</td>
                <td>The number of the sales person associated with the transaction.</td>
            </tr>
            <tr>
                <td><code>Description</code></td>
                <td>Line</td>
                <td>Field provided to describe the item/service/shipping method for that given line.</td>
            </tr>
        </tbody>
    </table>
</div>

Let's build out final test transaction using everything that we've covered in this chapter:

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.4.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Rhode Island and Washington.</li>
    <li>In your connector, create the following transactions:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-3</li>
            <li>Document Date: 2017-06-15</li>
            <li>Customer Code: ABC</li>
            <li>Reference Code: SalesOrder 123456</li>
            <li>Sales Person Code: SA8675309</li>
            <li>Purchase Order: PO6-5000</li>
        </ul>
        <li>Addresses:
            <ul class="dev-guide-list">
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>18300 Von Karman Ave, Irvine, CA 92612</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #1:
            <ul class="dev-guide-list">
                <li>Amount $65</li>
                <li>TaxCode P0000000</li>
                <li>Description "A bundle of assorted yarn colors"</li>
                <li>Ref1 "Item out of stock in Providence distribution center. ShipFrom Newport distribution center."</li>
                <li>Ref2 "Customer would like the item to ShipTo a secondary address."</li>
                <li>ShipFrom
                    <ul class="dev-guide-list">
                        <li>422 S F St., Aberdeen, WA, US 98520</li>
                    </ul>
                </li>
                <li>ShipTo
                    <ul class="dev-guide-list">
                        <li>21068 Bake Pkwy, Lake Forest, CA 92630</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Line #2:
            <ul class="dev-guide-list">
                <li>Amount $35</li>
                <li>TaxCode P0000000</li>
                <li>Description "A single bolt of wool."</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $100.00 with a total tax amount of $8.58.</li>
    <li>Line1 should have a total tax amount of $5.04, while Line 2 has 2.72.</li>
    <li>Both lines should be sourced in California with the following jurisdictions:
        <ul class="dev-guide-list">
            <li>California State</li>
            <li>Orange County</li>
            <li>Orange County District Tax/Special Tax</li>
            <li>Orange County Local Tax/Special Tax</li>
        </ul>
    </li>
    <li>Sourcing destination should be 21068 Bake Pkwy, Lake Forest, CA 92630.</li>
    <li>Sourcing origin should be 422 S F St., Aberdeen, WA, US 98520.</li>
    <li>Document level properties:
        <ul class="dev-guide-list">
            <li>Reference Code field should list "SalesOrder 123456"</li>
            <li>Sales Person should show as SA8675309</li>
            <li>PO6-5000 should be listed as the Purchase Order</li>
        </ul>
    </li>
    <li>Line level properties:
        <ul class="dev-guide-list">
            <li>Line 1:</li>
            <ul class="dev-guide-list">
                <li>The Description field should state "A bundle of assorted yarn colors"</li>
            </ul>
            <li>Line 2:</li>
            <ul class="dev-guide-list">
                <li>The Description field should state "A single bolt of wool"</li>
            </ul>
        </ul>
    </li>
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
  "code": "Chapter-3-Test-3",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ABC",
  "referenceCode": "SalesOrder 123456",
  "salespersonCode": "SA8675309",
  "purchaseOrderNo": "PO2376500",
  "addresses": {
    "shipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    },
    "shipTo": {
      "line1": "18300 Von Karman Ave",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92630"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 65,
      "taxCode": "P0000000",
      "ref1": "Item out of stock in Providence distribution center.  ShipFrom Aberdeen distribution center.",
      "ref2": "Customer would like the item to ShipTo a secondary address.",
      "description": "A bundle of assorted yarn colors",
      "addresses": {
        "shipFrom": {
          "line1": "422 S F St.",
          "city": "Aberdeen",
          "region": "WA",
          "country": "US",
          "postalCode": "98520"
        },
        "shipTo": {
          "line1": "21068 Bake Pkwy",
          "city": "Lake Forest",
          "region": "CA",
          "country": "US",
          "postalCode": "92630"
        }
      }
    },
    {
      "number": "2",
      "amount": 35,
      "taxCode": "P0000000",
      "description": "A single bolt of wool."
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