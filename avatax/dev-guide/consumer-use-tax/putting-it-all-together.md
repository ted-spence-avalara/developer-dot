---
layout: page
title: 10.3 - Putting It All Together
product: avaTax
doctype: dev_guide
chapter: consumer-use-tax
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/what-is-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

In this section we will look at three of the most common use tax transactions:
<ul class="dev-guide-list">
    <li>How to calculate use tax on a <code>PurchaseOrder</code></li>
    <li>How to calculate use tax for a <code>VendorInvoice</code> where no tax was calculated</li>
    <li>How to calculate/verify use tax for a <code>VendorInvoice</code> with a tax calculation</li>
</ul>

<h3>Creating a Purchase Order</h3>
In this first example, we are working in the procurement department and we need to purchase some widgets for our business to use in the office. We will provide our vendor with a purchase order, which will include an estimated tax calculation. You'll notice that the structure of the request looks very similar to the Sales Tax requests from the previous chapters. That's because when providing a Purchase Order to a vendor we want to simulate the sales order that your vendor would send to you. There are some key differences that you should take into consideration:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be set to <code>SalesOrder</code></li>
</ul>
<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Case - 10.3.1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Call the CreateLocations API call with the following information:</li>
        <ul class="dev-guide-list">
            <li>locationCode: TEXASWAREHOUSE</li>
            <li>Description: "Texas Warehouse chap-9-test-1"</li>
            <li>addressTypeId: "Location"</li>
            <li>addressCategoryId: "Warehouse"</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>600 Congress Avenue, Austin, TX 78101</li>
                </ul>
            </li>
            <li>dbaName: Developer Guide Texas Warehouse</li>
            <li>outletName: Texas Warehouse</li>
            <li>registeredDate: Jan 1 2015</li>
         </ul>
  </ul> 

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Your location is created.</li>
    <li>The location code matches the value you sent in.</li>
    <li>The address matches the value you sent in.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle1" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle1"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li>
                <pre>
[
  {
    "locationCode": "TEXASWAREHOUSE",
    "description": "Chapter-9-Test-1",
    "addressTypeId": "Location",
    "addressCategoryId": "MainOffice",
    "line1": "600 Congress Ave",
    "city": "Austin",
    "region": "TX",
    "postalCode": "78701",
    "country": "US",
    "isDefault": false,
    "isRegistered": false,
    "dbaName": "Developer Guide Texas Warehouse",
    "outletName": "Texas Warehouse",
    "registeredDate": "2015-01-01T00:00:00"
  }
]
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Purchase Invoice - No Vendor Assessed Tax</h3>
Ok, so let's jump ahead to when you've received your widgets along with the invoice from your vendor. Looking at the invoice, you note that tax was not assessed on the order, so let's take a look at how to calculate tax on this transaction. Again, here are some key differences that you should take into account:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be set to <code>PurchaseInvoice</code></li>
    <li>The Vendor Assessed Tax should be noted as a <code>TaxOverride</code>/<code>TaxAmount</code>, even if the amount is $0</li>
</ul>

<div class="dev-guide-test" id="test2">
    <div class="dev-guide-test-heading">Test Case - 10.3.2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Call the CreateLocations API call with the following information:</li>
        <ul class="dev-guide-list">
            <li>locationCode: TEXASWAREHOUSE</li>
            <li>Description: "Texas Warehouse chap-9-test-2"</li>
            <li>addressTypeId: "Location"</li>
            <li>addressCategoryId: "Warehouse"</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>600 Congress Avenue, Austin, TX 78101</li>
                </ul>
            </li>
            <li>dbaName: Developer Guide Texas Warehouse</li>
            <li>outletName: Texas Warehouse</li>
            <li>registeredDate: Jan 1 2015</li>
         </ul>
  </ul> 

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Your location is created.</li>
    <li>The location code matches the value you sent in.</li>
    <li>The address matches the value you sent in.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li>
                <pre>
[
  {
    "locationCode": "TEXASWAREHOUSE",
    "description": "Chapter-9-Test-1",
    "addressTypeId": "Location",
    "addressCategoryId": "MainOffice",
    "line1": "600 Congress Ave",
    "city": "Austin",
    "region": "TX",
    "postalCode": "78701",
    "country": "US",
    "isDefault": false,
    "isRegistered": false,
    "dbaName": "Developer Guide Texas Warehouse",
    "outletName": "Texas Warehouse",
    "registeredDate": "2015-01-01T00:00:00"
  }
]
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>

<h3>Purchase Invoice - With Vendor Assessed Tax</h3>
This time, let's imagine that your widget vendors invoice did note some sales tax. However, it may not be the value you are expecting, let's take a look at how you can check the calculation to determine if it is correct. Like the previous example, here are the key differences that you should take into account:
<ul class="dev-guide-list">
    <li>The Origin Address on the transaction should represent the address of your Vendor.</li>
    <li>The Destination Address on the transaction should represent the location where the goods will be consumed.</li>
    <li>The Document Type should be set to <code>PurchaseInvoice</code></li>
    <li>The Vendor Assessed Tax should be noted as a <code>TaxOverride</code>/<code>TaxAmount</code>.</li>
</ul>

<div class="dev-guide-test" id="test3">
    <div class="dev-guide-test-heading">Test Case - 10.3.3</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>Call the CreateLocations API call with the following information:</li>
        <ul class="dev-guide-list">
            <li>locationCode: TEXASWAREHOUSE</li>
            <li>Description: "Texas Warehouse chap-9-test-3"</li>
            <li>addressTypeId: "Location"</li>
            <li>addressCategoryId: "Warehouse"</li>
            <li>Addresses:
                <ul class="dev-guide-list">
                    <li>600 Congress Avenue, Austin, TX 78101</li>
                </ul>
            </li>
            <li>dbaName: Developer Guide Texas Warehouse</li>
            <li>outletName: Texas Warehouse</li>
            <li>registeredDate: Jan 1 2015</li>
         </ul>
  </ul> 

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Your location is created.</li>
    <li>The location code matches the value you sent in.</li>
    <li>The address matches the value you sent in.</li>
</ul>
<div class="dev-guide-dropdown">
        <input id="checkbox_toggle2" type="checkbox" />
        <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
        <label for="checkbox_toggle2"><h4>Expected API Call</h4></label>
        <ul class="dev-guide-dropdown-content">
            <li>
                <pre>
[
  {
    "locationCode": "TEXASWAREHOUSE",
    "description": "Chapter-9-Test-1",
    "addressTypeId": "Location",
    "addressCategoryId": "MainOffice",
    "line1": "600 Congress Ave",
    "city": "Austin",
    "region": "TX",
    "postalCode": "78701",
    "country": "US",
    "isDefault": false,
    "isRegistered": false,
    "dbaName": "Developer Guide Texas Warehouse",
    "outletName": "Texas Warehouse",
    "registeredDate": "2015-01-01T00:00:00"
  }
]
                </pre>
            </li>
        </ul>
    </div>
</div>
</div>
Now, let's take a closer look at the returned results, here we can get a good look at the accuracy of your vendor's tax calculation:

NOTE: Go into the difference between Tax and TaxCalculated

Now that you have the tax determination from AvaTax alongside the vendor charged tax, you can take some action with the invoice!

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/what-is-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/consumer-use-tax/chapter-summary/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>