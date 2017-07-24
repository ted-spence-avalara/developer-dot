---
layout: post
title: AvaTax Communications
description: AvaTax Communications
date: 2017-07-24 12:00
author: Qijing Yu
comments: true
categories:
product: blog
doctype: blog
disqus: 1
---
Now that you have learned how to make a Sales And Use AvaTax call, you want to extend your ability of making diverse types tax transactions, for example: Telecommunications. The good news is AvaTax is now supporting the Telecoms tax calculation. With a few setups, you can easily use your regular AvaTax account for making Telecoms transactions.

<h3>Required setups</h3>

There are a few things you need to pre-configure before making a successful AvaTax Communications transaction:
<ul class="normal">
    <li>Have an AvaTax account subscribed to AvaComms service</li>
    <li>Have at least one company added to the account</li>
    <li>Have your company configured with a ClientId (and ClientProfileId) provided by your Communications account manager, by posting a request to our REST API as below:
    <table class="styled-table">
        <thead>
            <tr>
                <th>CreateCommsConfig - <code>POST</code> /api/v2/companies/{id}/configuration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">[
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"ClientId"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: </span><span class="s2">"536"</span>
    <span class="p">},
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"ClientProfileId"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: </span><span class="s2">"1"</span>
    <span class="p">}
]</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </li>
    <li>Ready to make a transaction</li>
</ul>

<h3>How to make an AvaTax Communications call</h3>

A Communications tax call is largely the same with regular AvaTax calls, with exception of a few extra parameters, as:
<ul class="normal">
    <li>AvaTax.Communications.TransactionType</li>
    <li>AvaTax.Communications.ServiceType</li>
    <li>AvaTax.Communications.Lines</li>
    <li>AvaTax.Communications.Minutes</li>
    <li>AvaTax.Communications.CustomerType</li>
    <li>…</li>
</ul>
For example, a Communications transaction looks something as below:
<table class="styled-table">
        <thead>
            <tr>
                <th>AvaTax Communications transaction example - <code>POST</code> /api/v2/transactions/create</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">{</span>
    <span class="nt">"type"</span><span class="p">: </span><span class="s2">"SalesInvoice"</span><span class="p">,</span>
    <span class="nt">"companyCode"</span><span class="p">: </span><span class="s2">"DEFAULT"</span><span class="p">,</span>
    <span class="nt">"date"</span><span class="p">: </span><span class="s2">"2017-05-26"</span><span class="p">,</span>
    <span class="nt">"customerCode"</span><span class="p">: </span><span class="s2">"RestSample"</span><span class="p">,</span>
    <span class="nt">"purchaseOrderNo"</span><span class="p">: </span><span class="s2">"2017-05-26-001"</span><span class="p">,</span>
    <span class="nt">"addresses"</span><span class="p">: {</span>
        <span class="nt">"singleLocation"</span><span class="p">: {</span>
            <span class="nt">"line1"</span><span class="p">: </span><span class="s2">"8675 W 96th Street Suite 220"</span><span class="p">,</span>
            <span class="nt">"city"</span><span class="p">: </span><span class="s2">"Overland Park"</span><span class="p">,</span>
            <span class="nt">"region"</span><span class="p">: </span><span class="s2">"KS"</span><span class="p">,</span>
            <span class="nt">"country"</span><span class="p">: </span><span class="s2">"US"</span><span class="p">,</span>
            <span class="nt">"postalCode"</span><span class="p">: </span><span class="s2">"66212"</span><span class="p">,</span>
        <span class="p">}
    },</span>
    <span class="nt">"lines"</span><span class="p">: [
        {</span>
            <span class="nt">"number"</span><span class="p">: </span><span class="s2">"1"</span><span class="p">,</span>
            <span class="nt">"quantity"</span><span class="p">: </span><span class="mi">1</span><span class="p">,</span>
            <span class="nt">"amount"</span><span class="p">: </span><span class="mi">100</span><span class="p">,</span>
            <span class="nt">"taxCode"</span><span class="p">: </span><span class="s2">"P0000000"</span><span class="p">,</span>
            <span class="nt">"description"</span><span class="p">: </span><span class="s2">"Yarn"</span><span class="p">,</span>
            <span class="nt">"parameters"</span><span class="p">: {</span>
                <span class="nt">"AvaTax.Communications.TransactionType"</span><span class="p">: </span><span class="s2">"Cellular"</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.ServiceType"</span><span class="p">: </span><span class="s2">"Access Charge"</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.Lines"</span><span class="p">: </span><span class="mi">10</span><span class="p">,</span>
                <span class="nt">"AvaTax.Communications.Minutes"</span><span class="p">: </span><span class="mi">60</span>
            <span class="p">}
        }
    ],</span>
    <span class="nt">"commit"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
    <span class="nt">"currencyCode"</span><span class="p">: </span><span class="s2">"USD"</span><span class="p">,</span>
    <span class="nt">"description"</span><span class="p">: </span><span class="s2">"Yarn"</span><span class="p">,</span>
    <span class="nt">"parameters"</span><span class="p">: {</span>
            <span class="nt">"AvaTax.Communications.CustomerType"</span><span class="p">: </span><span class="s2">"Business"</span><span class="p">,</span>
            <span class="nt">"AvaTax.Communications.BusinessClass"</span><span class="p">: </span><span class="s2">"CLEC"</span><span class="p">,</span>
            <span class="nt">"AvaTax.Communications.Sale"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt"> "AvaTax.Communications.ServiceClass"</span><span class="p">: </span><span class="s2">"Primary Long Distance"</span><span class="p">,
    },</span>
    <span class="nt">"debugLevel"</span><span class="p">: </span><span class="s2">"Diagnostic"</span>
<span class="p">}</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

And the calculation response for above request is:
<table class="styled-table">
        <thead>
            <tr>
                <th>Communications calculation response</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
{
  "id": 0,
  "code": "b08190bc-d449-4643-b34c-caf2cf6cfa68",
  "companyId": 0,
  "date": "2017-05-26",
  "paymentDate": "2017-05-26",
  "status": "Temporary",
  "type": "SalesInvoice",
  "currencyCode": "USD",
  "customerVendorCode": "RestSample",
  "reconciled": false,
  "purchaseOrderNo": "2017-05-26-001",
  "totalAmount": 100,
  "totalExempt": 0,
  "totalTax": 22.427061,
  "totalTaxable": 111.032317,
  "totalTaxCalculated": 22.427061,
  "adjustmentReason": "NotAdjusted",
  "locked": false,
  "version": 1,
  "exchangeRateEffectiveDate": "2017-05-26",
  "exchangeRate": 1,
  "isSellerImporterOfRecord": false,
  "description": "Yarn",
  "modifiedDate": "2017-07-24T21:53:30.6139926Z",
  "modifiedUserId": 30581,
  "taxDate": "0001-01-01T00:00:00",
  "lines": [
    {
      "id": 0,
      "transactionId": 0,
      "lineNumber": "1",
      "description": "",
      "discountAmount": 0,
      "exemptAmount": 0,
      "exemptCertId": 0,
      "isItemTaxable": true,
      "lineAmount": 111.032317,
      "quantity": 1,
      "reportingDate": "1900-01-01",
      "tax": 22.427061,
      "taxableAmount": 111.032317,
      "taxCalculated": 22.427061,
      "taxCode": "Cellular - Access Charge",
      "taxDate": "2017-07-24",
      "taxIncluded": false,
      "details": [
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 37.1,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "STA",
          "nonTaxableAmount": 37.1,
          "rate": 0.0725,
          "tax": 4.56025,
          "taxableAmount": 62.9,
          "taxType": "Sales",
          "taxName": "CONNECTIVITY CHARGES - Universal Service Fund (Wireless)",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 4.56025,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 0,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "STA",
          "nonTaxableAmount": 100,
          "rate": 0.6,
          "tax": 0.6,
          "taxableAmount": 0,
          "taxType": "Sales",
          "taxName": "E-911 CHARGES - E911 (Wireless)",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 0.6,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 0,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "CIT",
          "nonTaxableAmount": -11.032317,
          "rate": 0.01125,
          "tax": 1.249114,
          "taxableAmount": 111.032317,
          "taxType": "Sales",
          "taxName": "SALES AND USE TAXES - Sales Tax",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 1.249114,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 0,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "CTY",
          "nonTaxableAmount": -11.032317,
          "rate": 0.01475,
          "tax": 1.637727,
          "taxableAmount": 111.032317,
          "taxType": "Sales",
          "taxName": "SALES AND USE TAXES - Sales Tax",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 1.637727,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 0,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "STA",
          "nonTaxableAmount": -11.032317,
          "rate": 0.065,
          "tax": 7.217101,
          "taxableAmount": 111.032317,
          "taxType": "Sales",
          "taxName": "SALES AND USE TAXES - Sales Tax",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 7.217101,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 62.9,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "CNT",
          "nonTaxableAmount": 62.9,
          "rate": 0.174,
          "tax": 6.4554,
          "taxableAmount": 37.1,
          "taxType": "Sales",
          "taxName": "CONNECTIVITY CHARGES - Fed USF Cellular",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 6.4554,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 0,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "CNT",
          "nonTaxableAmount": 0,
          "rate": 0.016667,
          "tax": 0.016667,
          "taxableAmount": 100,
          "taxType": "Sales",
          "taxName": "REGULATORY CHARGES - FCC Regulatory Fee (Wireless)",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 0.016667,
          "rateType": "General",
          "rateTypeCode": "General"
        },
        {
          "id": 0,
          "transactionLineId": 0,
          "transactionId": 0,
          "country": "USA",
          "region": "",
          "exemptAmount": 62.9,
          "jurisCode": "",
          "jurisName": "",
          "stateAssignedNo": "",
          "jurisType": "CNT",
          "nonTaxableAmount": 62.9,
          "rate": 0.01862,
          "tax": 0.690802,
          "taxableAmount": 37.1,
          "taxType": "Sales",
          "taxName": "CONNECTIVITY CHARGES - Telecommunications Relay Surcharge (Cellular)",
          "taxAuthorityTypeId": 0,
          "taxCalculated": 0.690802,
          "rateType": "General",
          "rateTypeCode": "General"
        }
      ],
      "parameters": {
        "AvaTax.Communications.TransactionType": "Cellular",
        "AvaTax.Communications.ServiceType": "Access Charge",
        "AvaTax.Communications.Lines": "10",
        "AvaTax.Communications.Minutes": "60"
      }
    }
  ],
  "addresses": [
    {
      "id": 0,
      "transactionId": 0,
      "boundaryLevel": "Zip5",
      "line1": "8675 W 96th Street Suite 220",
      "city": "Overland Park",
      "region": "KS",
      "postalCode": "66212",
      "country": "US",
      "taxRegionId": 0,
      "latitude": "",
      "longitude": ""
    }
  ],
  "summary": [
    {
      "country": "USA",
      "region": "",
      "jurisType": "State",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "CONNECTIVITY CHARGES - Universal Service Fund (Wireless)",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 62.9,
      "rate": 0.0725,
      "tax": 4.56025,
      "taxCalculated": 4.56025,
      "nonTaxable": 37.1,
      "exemption": 37.1
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "State",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "E-911 CHARGES - E911 (Wireless)",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 0,
      "rate": 0.6,
      "tax": 0.6,
      "taxCalculated": 0.6,
      "nonTaxable": 100,
      "exemption": 0
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "City",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "SALES AND USE TAXES - Sales Tax",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 111.032317,
      "rate": 0.01125,
      "tax": 1.249114,
      "taxCalculated": 1.249114,
      "nonTaxable": -11.032317,
      "exemption": 0
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "County",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "SALES AND USE TAXES - Sales Tax",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 111.032317,
      "rate": 0.01475,
      "tax": 1.637727,
      "taxCalculated": 1.637727,
      "nonTaxable": -11.032317,
      "exemption": 0
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "State",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "SALES AND USE TAXES - Sales Tax",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 111.032317,
      "rate": 0.065,
      "tax": 7.217101,
      "taxCalculated": 7.217101,
      "nonTaxable": -11.032317,
      "exemption": 0
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "Country",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "CONNECTIVITY CHARGES - Fed USF Cellular",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 37.1,
      "rate": 0.174,
      "tax": 6.4554,
      "taxCalculated": 6.4554,
      "nonTaxable": 62.9,
      "exemption": 62.9
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "Country",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "REGULATORY CHARGES - FCC Regulatory Fee (Wireless)",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 100,
      "rate": 0.016667,
      "tax": 0.016667,
      "taxCalculated": 0.016667,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "USA",
      "region": "",
      "jurisType": "Country",
      "jurisCode": "",
      "jurisName": "",
      "taxAuthorityType": 0,
      "stateAssignedNo": "",
      "taxType": "Sales",
      "taxName": "CONNECTIVITY CHARGES - Telecommunications Relay Surcharge (Cellular)",
      "taxGroup": "",
      "rateType": "General",
      "rateTypeCode": "General",
      "taxable": 37.1,
      "rate": 0.01862,
      "tax": 0.690802,
      "taxCalculated": 0.690802,
      "nonTaxable": 62.9,
      "exemption": 62.9
    }
  ],
  "parameters": {
    "AvaTax.Communications.CustomerType": "Business",
    "AvaTax.Communications.BusinessClass": "CLEC",
    "AvaTax.Communications.Sale": "true",
    "AvaTax.Communications.ServiceClass": "Primary Long Distance"
  }
}
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

Note that the "AvaTax.Communications.TransactionType" and "AvaTax.Communications.ServiceType" are two parameters required in order to make a Communications transaction. The other parameters are required or optional depending on distinctive use cases. For example, "AvaTax.Communications.Minutes" and "AvaTax.Communications.Lines" are only required for certain T/S (Transaction/Service) pairs. You can use the /api/v2/communications/tspairs API to look up whether Minutes or Lines are required for the T/S pair your business is operating.

<h3>What are allowed T/S pairs and parameters</h3>

There are 4 APIs we provided in the REST API suite for you to look up available T/S pairs and parameters:
<ul class="normal">
    <li>GET /api/v2/communications/tspairs  to look up complete list of T/S pairs.</li>
    <li>GET /api/v2/communications/transactiontypes  to look up all transaction types accepted.</li>
    <li>GET /api/v2/communications/transactiontypes/{id}/servicetypes to look up all service types allowed of a transaction type.</li>
    <li>GET /api/v2/parameters/parameters  to look up all parameters allowed when making a transaction call.</li>   
</ul>

<h3>To make your transactions easier</h3>
If most of your transactions look the same, with only changes on one or two parameters. You can facilitate your transaction calls by setting the AvaCommsConfig in the way that it records the common parameter values you use. So that they will be used as default values if you don't explicitly pass them in your transactions. Of course, if you pass a value in your transaction for a parameter already exists in the config, the transaction value always takes priority. 

Below is how you configure default parameters. Make sure you pass a valid JSON for the Parameters value. You can always do the same POST operation again to update the default parameters.

<table class="styled-table">
        <thead>
            <tr>
                <th>Configuring default parameters - <code>POST</code> /api/v2/companies/{id}/configuration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="language-json highlighter-rouge">
                        <pre class="highlight">
<span class="p">[
    {</span>
        <span class="nt">"companyId"</span><span class="p">: </span><span class="mi">12345</span><span class="p">,</span>
        <span class="nt">"category"</span><span class="p">: </span><span class="s2">"AvaCommsConfig"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">: </span><span class="s2">"Parameters"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">: "{</span>
            <span class="nt">\"AvaTax.Communications.IsPrivateLine\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.PrivateLineSplit\"</span><span class="p">: </span><span class="mi">0.0</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CustomerType\"</span><span class="p">: </span><span class="s2">\"Business\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.BusinessClass\"</span><span class="p">: </span><span class="s2">\"CLEC\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Sale\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.ServiceClass\"</span><span class="p">: </span><span class="s2">\"Primary Long Distance\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CustomerNumber\"</span><span class="p">: </span><span class="s2">\"RestSample\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.CompanyIdentifier\"</span><span class="p">: </span><span class="s2">\"TST\"</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.AdjustmentMethod\"</span><span class="p">: </span><span class="mi">0</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Debit\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.FacilitiesBased\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Franchise\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Lifeline\"</span><span class="p">: </span><span class="mi">false</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.Regulated\"</span><span class="p">: </span><span class="mi">true</span><span class="p">,</span>
            <span class="nt">\"AvaTax.Communications.ServiceLevelNumber\"</span><span class="p">: </span><span class="mi">3456</span>
        <span class="p">}"</span>
    <span class="p">}
]</span>
                        </pre>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>