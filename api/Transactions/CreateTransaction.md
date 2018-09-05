---
layout: page
title: CreateTransaction API
date: 2018-09-05
comments: true
categories: [avatax, api]
product: avatax
doctype: api-references
api-category: Transactions
api: CreateTransaction
disqus: 1
---

<table class="styled-table">
    <tr>
        <th>PURPOSE</th>
        <td>Create a new transaction</td>
    </tr>
    <tr>
        <th>HTTP VERB</th>
        <td><code class="highlight-rouge">POST</code></td>
    </tr>
    <tr>
        <th>URL (SANDBOX)</th>
        <td>https://sandbox-rest.avatax.com/api/v2/transactions/create</td>

    </tr>
    <tr>
        <th>URL (PRODUCTION)</th>
        <td>https://rest.avatax.com/api/v2/transactions/create</td>

    </tr>
    <tr>
        <th>CONTENT-TYPE</th>
        <td><code class="highlight-rouge">application/json</code></td>
    </tr>
    <tr>
        <th>RESPONSE BODY</th>
        <td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel">TransactionModel</a></td>
    </tr>
</table>

## Description

<p>Records a new transaction in AvaTax.</p>
<p>A transaction represents a unique potentially taxable action that your company has recorded, and transactions include actions like
sales, purchases, inventory transfer, and returns (also called refunds).</p>
<p>The <code>CreateTransaction</code> endpoint uses the tax profile of your company to identify the correct tax rules
and rates to apply to all line items in this transaction.  The end result will be the total tax calculated by AvaTax based on your
company's configuration and the data provided in this API call.</p>
<p>The <code>CreateTransaction</code> API will report an error if a committed transaction already exists with the same <code>code</code>.  To
avoid this error, use the <code>CreateOrAdjustTransaction</code> API - it will create the transaction if it does not exist, or
update it if it does exist.</p>
<p>To generate a refund for a transaction, use the <code>RefundTransaction</code> API.</p>
<p>The field <code>type</code> identifies the kind of transaction - for example, a sale, purchase, or refund.  If you do not specify
a <code>type</code> value, you will receive an estimate of type <code>SalesOrder</code>, which will not be recorded.</p>
<p>The origin and destination locations for a transaction must be identified by either address or geocode.  For address-based transactions, please
provide addresses in the fields <code>line</code>, <code>city</code>, <code>region</code>, <code>country</code> and <code>postalCode</code>.  For geocode-based transactions, please provide the geocode
information in the fields <code>latitude</code> and <code>longitude</code>.  If either <code>latitude</code> or <code>longitude</code> or both are null, the transaction will be calculated
using the best available address location information.</p>
<p>You may specify one or more of the following values in the <code>$include</code> parameter to fetch additional nested data, using commas to separate multiple values:</p>
<ul class="normal">
<li>Lines</li>
<li>Details (implies lines)</li>
<li>Summary (implies details)</li>
<li>Addresses</li>
<li>SummaryOnly (omit lines and details - reduces API response size)</li>
<li>LinesOnly (omit details - reduces API response size)</li>
<li>ForceTimeout - Simulates a timeout.  This adds a 30 second delay and error to your API call.  This can be used to test your code to ensure it can respond correctly in the case of a dropped connection.</li>
</ul>
<p>If you omit the <code>$include</code> parameter, the API will assume you want <code>Summary,Addresses</code>.</p>



## Relevant Blog Posts

<ul class="normal">
{% for post in site.posts %}
   {% if post.relevantapimethods contains 'CreateTransaction' %}
       <li><a href="{{ post.url }}">{{ post.title }}</a></li>
   {% endif %}
{% endfor %}
</ul>

## Parameters

<table class="styled-table">
    <thead>
        <tr>
            <th>LOCATION</th>
            <th>PARAMETER</th>
            <th>ATTRIBUTES</th>
            <th>SUMMARY</th>
        </tr>
    </thead>
    <tbody>
<tr>
<td>QueryString</td>
<td><code class="highlight-rouge">include</code></td>
<td>String, Optional</td>
<td><p>Specifies objects to include in the response after transaction is created</p>
</td>
</tr>
<tr>
<td>Header</td>
<td><code class="highlight-rouge">X-Avalara-Client</code></td>
<td>String, Optional</td>
<td><p>Identifies the software you are using to call this API.  For more information on the client header, see <a href="https://developer.avalara.com/avatax/client-headers/">Client Headers</a> .</p>
</td>
</tr>
<tr>
<td>RequestBody</td>
<td><code class="highlight-rouge">model</code></td>
<td>CreateTransactionModel, Optional</td>
<td><p>The transaction you wish to create</p>
</td>
</tr>

    </tbody>
</table>


<div>
    <div class="try-it-now-header" data-target="#try-it-now" data-toggle="collapse" OnClick="$('#try-it-now-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="try-it-now-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Try It Now</h3>
    </div>
    <div class="collapse" id="try-it-now">

        <div class="api-console-output">
            <h5 class="console-output-header">API Endpoint</h5>
            <div class="row" style="margin: 10px;">
                <div class="code-snippet-plaintext" style="display: inline;" id="console-method">POST</div>
                <div class="code-snippet-plaintext" style="display: inline;" id="console-server">https://sandbox-rest.avatax.com</div>
                <div class="code-snippet-plaintext" style="display: inline;" id="console-path">/api/v2/transactions/create</div>
            </div>
            <h5 class="console-output-header">
                Headers
                <i class="glyphicon glyphicon-pencil"></i>
            </h5>
            <div class="code-snippet reqScroll">
                <textarea style="height: 50px;" id="console-headers" >Authorization: (use Developer website demo credentials)
X-Avalara-Client: Avalara Developer Website; 18.8.0; AvaTax SDK; 18.8.0; developer-console</textarea>
            </div>
            <div class="row" style="margin-bottom: 8px;">
                <div class="col-md-6 console-req-container">
                    <h5 class="console-output-header">
                        Request
                        <i class="glyphicon glyphicon-pencil"></i>
                    </h5>
                    <textarea id="console-input-sample" style="display: none;">{
  "lines": [
    {
      "number": "1",
      "quantity": 1.0,
      "amount": 100.0,
      "taxCode": "PS081282",
      "itemCode": "Y0001",
      "description": "Yarn"
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2018-09-05",
  "customerCode": "ABC",
  "purchaseOrderNo": "2018-09-05-001",
  "addresses": {
    "singleLocation": {
      "line1": "2000 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92614"
    }
  },
  "commit": true,
  "currencyCode": "USD",
  "description": "Yarn"
}</textarea>
                    <div class="code-snippet reqScroll">
                        <textarea id="console-input">{ }</textarea>
                    </div>
                </div>
                <div class="col-md-6 console-res-container">
                     <h5 class="console-output-header">Response</h5>
                     <div class="code-snippet respScroll">
                         <pre id="console-output"> </pre>
                     </div>
                 </div>
             </div>
             <div>
                 <button class="btn btn-secondary" style="color: #000000;" type="button" onClick="$('#console-input').empty().val($('#console-input-sample').val());">Fill with Sample Data</button>
                 <button class="btn btn-secondary" style="color: #000000;" type="button" onClick="$('#console-input').empty().val('{ }');">Reset</button>
                 <button class="btn btn-primary" type="button" onClick="ApiRequest();">Submit</button>
             </div>
        </div>
    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#example-request" data-toggle="collapse" OnClick="$('#example-request-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="example-request-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Request</h3>
    </div>
    <div class="collapse" id="example-request">

    <h4>Request Path</h4>
    
{% highlight markdown %}
POST https://sandbox-rest.avatax.com/api/v2/transactions/create
{% endhighlight %}
<h4>Request Body</h4>
<p>Complete documentation: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel">CreateTransactionModel</a></p>
{% highlight json %}
{
  "lines": [
    {
      "number": "1",
      "quantity": 1.0,
      "amount": 100.0,
      "taxCode": "PS081282",
      "itemCode": "Y0001",
      "description": "Yarn"
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2018-09-05",
  "customerCode": "ABC",
  "purchaseOrderNo": "2018-09-05-001",
  "addresses": {
    "singleLocation": {
      "line1": "2000 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92614"
    }
  },
  "commit": true,
  "currencyCode": "USD",
  "description": "Yarn"
}
{% endhighlight %}


    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#example-response" data-toggle="collapse" OnClick="$('#example-response-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="example-response-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Response</h3>
    </div>
    <div class="collapse" id="example-response">
    <h4>Response Body</h4>
<p>Complete documentation: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel">TransactionModel</a></p>


{% highlight json %}
{
  "id": 123456789,
  "code": "0206ddd2-c713-473f-86b4-247b819e3b91",
  "companyId": 12345,
  "date": "2018-09-05",
  "status": "Committed",
  "type": "SalesInvoice",
  "currencyCode": "USD",
  "entityUseCode": "",
  "customerVendorCode": "ABC",
  "customerCode": "ABC",
  "exemptNo": "",
  "reconciled": true,
  "locationCode": "DEFAULT",
  "salespersonCode": "DEF",
  "taxOverrideType": "None",
  "taxOverrideAmount": 0.0,
  "taxOverrideReason": "",
  "totalAmount": 1000.0,
  "totalExempt": 0.0,
  "totalDiscount": 0.0,
  "totalTax": 62.5,
  "totalTaxable": 1000.0,
  "totalTaxCalculated": 62.5,
  "adjustmentReason": "NotAdjusted",
  "adjustmentDescription": "",
  "locked": false,
  "region": "CA",
  "country": "US",
  "version": 0,
  "originAddressId": 123456789,
  "destinationAddressId": 123456789,
  "isSellerImporterOfRecord": false,
  "description": "Yarn",
  "taxDate": "2018-09-04T17:00:00-07:00",
  "lines": [
    {
      "id": 123456789,
      "transactionId": 123456789,
      "lineNumber": "1",
      "boundaryOverrideId": 0,
      "entityUseCode": "",
      "description": "Yarn",
      "destinationAddressId": 12345,
      "originAddressId": 123456789,
      "discountAmount": 100.0,
      "discountTypeId": 0,
      "exemptAmount": 0.0,
      "exemptCertId": 0,
      "exemptNo": "",
      "isItemTaxable": true,
      "isSSTP": false,
      "itemCode": "116292",
      "lineAmount": 1000.0,
      "quantity": 1.0,
      "ref1": "Note: Deliver to Bob",
      "reportingDate": "2018-09-05",
      "revAccount": "",
      "sourcing": "Destination",
      "tax": 62.5,
      "taxableAmount": 1000.0,
      "taxCalculated": 62.5,
      "taxCode": "PS081282",
      "taxDate": "2018-09-05",
      "taxEngine": "",
      "taxOverrideType": "None",
      "taxOverrideAmount": 0.0,
      "taxOverrideReason": "",
      "taxIncluded": false,
      "details": [
        {
          "id": 123456789,
          "transactionLineId": 123456789,
          "transactionId": 123456789,
          "addressId": 12345,
          "country": "US",
          "region": "CA",
          "stateFIPS": "06",
          "exemptAmount": 0.0,
          "exemptReasonId": 4,
          "inState": false,
          "jurisCode": "06",
          "jurisName": "CALIFORNIA",
          "jurisdictionId": 5000531,
          "signatureCode": "AGAM",
          "stateAssignedNo": "",
          "jurisType": "STA",
          "nonTaxableAmount": 0.0,
          "nonTaxableRuleId": 0,
          "nonTaxableType": "BaseRule",
          "rate": 0.0625,
          "rateRuleId": 1321915,
          "rateSourceId": 3,
          "serCode": "",
          "sourcing": "Destination",
          "tax": 62.5,
          "taxableAmount": 1000.0,
          "taxType": "Sales",
          "taxName": "CA STATE TAX",
          "taxAuthorityTypeId": 45,
          "taxRegionId": 2127184,
          "taxCalculated": 62.5,
          "taxOverride": 0.0,
          "rateType": "General"
        }
      ],
      "vatNumberTypeId": 0
    }
  ],
  "addresses": [
    {
      "id": 0,
      "transactionId": 0,
      "boundaryLevel": "Address",
      "line1": "100 Ravine Lane Northeast #220",
      "city": "Bainbridge Island",
      "region": "WA",
      "postalCode": "98110",
      "country": "US",
      "taxRegionId": 0
    }
  ]
}
{% endhighlight %}

    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#curl-example" data-toggle="collapse" OnClick="$('#curl-example-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="curl-example-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Using CURL</h3>
    </div>
    <div class="collapse" id="curl-example">

{% highlight shell %}
curl
    -X POST
    -H 'Accept: application/json'
    -H 'Authorization: Basic aHR0cHdhdGNoOmY='
{
  "lines": [
    {
      "number": "1",
      "quantity": 1.0,
      "amount": 100.0,
      "taxCode": "PS081282",
      "itemCode": "Y0001",
      "description": "Yarn"
    }
  ],
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2018-09-05",
  "customerCode": "ABC",
  "purchaseOrderNo": "2018-09-05-001",
  "addresses": {
    "singleLocation": {
      "line1": "2000 Main Street",
      "city": "Irvine",
      "region": "CA",
      "country": "US",
      "postalCode": "92614"
    }
  },
  "commit": true,
  "currencyCode": "USD",
  "description": "Yarn"
}
    https://sandbox-rest.avatax.com/api/v2/transactions/create

{% endhighlight %}

    </div>
</div>
