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

You were able to create a single location transaction in <a class="dev-guide-link" href="avatax/dev-guide/getting-started-with-avatax/">Chapter 1</a>, but how do you handle transactions that may be shipped to another location?  What about transactions that may not be in stock locally and need to be shipped from another warehouse or distribution center?  The use of Origin and Destination addresses will help determine calculation.  

As an example, let's say that I 

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 3.2.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Rhode Island and Washington.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-1</li>
            <li>Document Date: 2017-06-15</li>
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
    <li>The taxable amount should be $100.00.</li>
    <li>The tax should be sourced within Washington.</li>
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
      "amount": 65,
      "taxCode": "P0000000"
    },
    {
      "number2": "2",
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

<h3>Using Line Level Origin and Destination</h3>
Origin and destination fields are not bound to the document level, they can also be used on the line level to accommodate scenarios in which an item may not be available and is shipping from another location or where a buyer may have multiple locations that they need items shipped.  You can use a line level origin or destination address to override the document level addresses, but preserve them for other items.

There are a variety of reasons, but a common reason
<ul class="dev-guide-list">
    <li>An item may not be available at the current location but may be stocked in another distribution center.</li>
    <li>A buyer may have multiple locations for a single order.</li>
</ul>

For example, I am purchasing an item from a store and would like one item shipped to a secondary address.  The store doesn't carry that item in stock and must send it from one of their other distribution centers.  This would mean that one line item would have both an origin and destination that is different from the document level origin and destination.  Let's go ahead and build out that scenario using our second test:

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 3.2.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Rhode Island and Washington..</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-3-Test-2</li>
            <li>Document Date: 2017-06-15</li>
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
    <li></li>
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
  "code": "Chapter-3-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
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
      "amount": 65,
      "taxCode": "P0000000",
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