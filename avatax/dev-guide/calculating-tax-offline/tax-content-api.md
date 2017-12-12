---
layout: page
title: 11.3 - Tax Content API
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h2>The Tax Content API Response</h2>

Avalara's Tax Content API provides businesses with the content required to calculate tax locally in a disconnected environment. The Content API response includes tax jurisdiction, tax rate, and product/service taxability information for each Tax Code and storefront Location configured in your AvaTax account.
To begin, let's take a look at the fields included in a Tax Content API response.

Here are the details for each field included in a Tax Content API response:

<div class="mobile-table">
	<table class="styled-table">
		<thead>
			<tr>
				<th>ScenarioId</th>
				<th>Field Description</th>
				<th>Sample Data</th>
			</tr>
		</thead>
    <tbody>
      <tr>
        <td>ScenarioId</td>
        <td>This field is used to group tax scenarios together. A tax scenario will consist of a single Location and single Tax Code</td>
        <td>1</td></tr><tr>
          <td>EffDate</td>
          <td>The date the tax information becomes effective</td>
          <td>4/1/2011 12:00:00 AM</td>
        </tr>
        <tr>
          <td>EndDate</td>
          <td>The date the tax information is no longer effective. Tax data is effective on this date, but is not effective on the following date</td>
          <td>
            <span>12/31/9999 12:00:00 AM</span>
          </td>
        </tr>
        <tr>
          <td>LocationCode</td>
          <td>Unique location identifier</td>
          <td>001</td>
        </tr>
        <tr>
          <td>TaxCode</td>
          <td>Avalara System Tax Code or Custom Tax Code</td>
          <td>P0000000</td>
        </tr>
        <tr>
          <td>ShipToCity</td>
          <td>The ship-to city</td>
          <td>Durham</td>
        </tr>
        <tr>
          <td>ShipToCounty</td>
          <td>The ship-to county</td>
          <td>DURHAM</td>
        </tr>
        <tr>
          <td>ShipToState</td>
          <td>The ship-to state</td>
          <td>NC</td>
        </tr>
        <tr>
          <td>ShipToPostalCode</td>
          <td>Postal code associated with the location address</td>
          <td>27707-1764</td>
        </tr>
        <tr>
          <td>ShipToCountry</td>
          <td>The ship-to country</td>
          <td>US</td>
        </tr>
        <tr>
          <td>JurisType</td>
          <td>The jurisdiction type. There are five supported values - Country, State, County, City, Special</td>
          <td>State</td>
        </tr>
        <tr>
          <td>JurisCode</td>
          <td>Unique numeric, alpha, or alphanumeric code identifying a jurisdiction. This field is optional</td>
          <td>001, EKTF0</td>
        </tr>
        <tr>
          <td>JurisName</td>
          <td>The name of the jurisdiction that corresponds to this tax record</td>
          <td>NORTH CAROLINA</td>
        </tr>
        <tr>
          <td>TaxType</td>
          <td>The tax type associated with the rate</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>Tax_Description</td>
          <td>The description of the tax</td>
          <td>NC STATE TAX</td>
        </tr>
        <tr>
          <td>Tax_Rate</td>
          <td>The tax rate. "0.03" corresponds to 3%. Exempt records will have a rate of 0.</td>
          <td>0.03</td>
        </tr>
        <tr>
          <td>Cap</td>
          <td>Applies a cap to the taxable amount. Amounts up to the cap are taxable. Amounts over the cap are non-taxable. The tax rate applies to the taxable amount.</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Threshold</td>
          <td>Applies a threshold to the taxable amount. Amounts up to and including the threshold are non-taxable. Amounts over the threshold are taxable. The tax rate applies to the taxable amount.</td>
          <td>100</td>
        </tr>
        <tr>
          <td>TaxRuleOptions</td>
          <td>Applies a special tax scenario rule to the transaction. There is only one supported value at this time: TaxAll. With a threshold, this rule taxes the entire amount once the total is over the threshold</td>
          <td>TaxAll</td>
        </tr>
        <tr>
          <td>TaxApplicationLevel</td>
          <td>This field is not used at this time, but will be leveraged for tax-on-tax scenarios in the future. This field will define the order in which taxes are applied in a tax-on-tax scenario and the tax base for each individual tax</td>
          <td>N/A</td>
        </tr>
      </tbody>
	</table>  
</div>

<h2>Old Content Persists Below</h2>

Here's how this task works:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 11.4.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Call CreateOrAdjustTransaction with these parameters:</li>
    <ul class="dev-guide-list">
        <li>Date: 2017 06 15</li>
        <li>Address
            <ul class="dev-guide-list">
                <li>SingleLocation - 100 Ravine Lane NE, Bainbridge Island, WA 98110</li>
            </ul>
        </li>
        <li>Lines</li>
        <ul class="dev-guide-list">
            <li>qty 1</li>
            <li>TaxCode P0000000</li>
            <li>amount 100</li>
        </ul>
        <li>TaxOverride</li>
        <ul class="dev-guide-list">
            <li>Type: TaxAmount</li>
            <li>Amount: 10</li>
        </ul>
    </ul>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>There is a difference between the TaxCollected and Tax value</li>
    <li>The Tax value is 10</li>
    <li>The TaxCalculated value is 9.</li>
    <li>The difference between Tax and TaxCalculated means that AvaTax determined that you overcollected by $1.</li>
    <li>For customers using Avalara Managed Returns, this overcollect amount will be automatically reported on your next tax filing.</li>
    <li>Customers filing returns outside of Avalara must ensure that this overcollection amount is correctly reported.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "lines": [
    {
      "amount": 100,
      "taxCode": "P0000000"
    }
  ],
  "type": "SalesInvoice",
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
  "taxOverride": {
    "type": "taxAmount",
    "taxAmount": 10.0,
    "reason": "Tax calculated offline"
  }
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

You have now enabled your software to respond gracefully to a temporary outage in connectivity, and to prepare your transaction correctly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/reconcile-transactions-after-outage/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
