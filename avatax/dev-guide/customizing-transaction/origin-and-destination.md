---
layout: page
title: 3.2 - Using Origin and Destination Addresses
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/document-level/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-codes/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

As mentioned in <a class="dev-guide-link" href="/avatax/dev-guide/transactions/">Chapter 2 - Transaction</a>, using line level address types addresses are used to help determine tax for a given transaction in a given situation.  A retail transaction and an eCommerce transaction are not that much different.  They both use an origin and destination, but while the retail location is likely bought and sold at the same location it still contains an origin and a destination, they just happen to be the same address.  An eCommerce transaction varies in that at least two different addresses are taken into account.  For example, in a retail transaction where the origin and destination are the same, we'd use the <code>SingleLocation</code> address, but for an eCommerce transaction, we'd use <code>ShipFrom</code> and <code>ShipTo</code>.

Let's try building a transaction that uses two different addresses and a single line item:

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in California and Washington.</li>
    <li>In your connector, create the following transactions</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-1</li>
            <li>Document Date: 2017-06-15</li>
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
                <li>Amount $100</li>
                <li>TaxCode P0000000</li>
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $100.00</li>
    <li>The tax should be sourced within California</li>
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
      "postalCode": "92612"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000"
    },
  ]
}
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Using Line Level Address Types</h3>

Origin and destination fields are not bound to the document level, they can also be used on the line level to accommodate scenarios in which an item may not be available and is shipping from another location or where a buyer may have multiple locations that they need items shipped.  There are a variety of reasons in which this may occur, but it's important to remember you do not need to specify different addresses for each line.  Document level properties still apply and your origin and destination addresses will only be overridden by the line address property that is different.  For example, if you have two lines and one item is out of stock at the origin and must be shipped from another location, you only need to change the line level origin for that line.  The document level origin and destination will continue to apply.

Ok, let's try another test.  In this example, we'll be purchasing an item from a store and would like one item shipped to a secondary address.  The store doesn't carry that item in stock and must send it from one of their other distribution centers.  This would mean that one line item would have both an origin and destination that is different from the document level origin and destination:
<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 3.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Rhode Island and Washington.</li>
    <li>In your connector, create the following transactions:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-2</li>
            <li>Company Code: DEVGUIDE</li>
            <li>Customer Code: ABC</li>
            <li>Document Date: 2017-06-15</li>
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
            </ul>
        </li>
    <li>Calculate tax for your transaction using AvaTax.</li>  
</ul>
<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The taxable amount should be $100.00</li>
    <li>The tax for both lines should be sourced within Washington.</li>
    <li>Line1 should have tax calculated for Washington State, Grays Harbor County, and the city of Aberdeen.</li>
    <li>Line2 should have tax calculated for Washington State, King County, and the city of Seattle.</li>
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
  "code": "Chapter-3-Test-2",
  "companyCode": "DEVGUIDE",
  "customerCode": "ABC",
  "date": "2017-06-15",
  "addresses": {
    "shipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
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
      "amount": 65,
      "taxCode": "P0000000",
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
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/document-level/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/using-reference-codes/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>