---
layout: page
title: 8.2 - States that do not Collect Sales Tax
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-nexus/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-product-taxability/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Some states or tax authorities in the United States do not collect sales, use, or transactional taxes.  In this case, transactions will correctly show zero tax, unless they trigger special excise taxes or other functionality.

Let's look briefly at the status of sales tax in a few notable states.  These states are often called the "NOMAD" states, after an acronym that lists the state names: New Hampshire, Oregon, Montana, Alaska, and Delaware.
<ul class="dev-guide-list">
  <li>The state of Alaska does not have a state sales tax.  However, Alaska is also what is known as a <a class="dev-guide-link" href="https://www.avalara.com/blog/2015/11/02/sales-tax-q-a-home-rule-states/">"Home Rule"</a> state, where individual cities and counties are granted the authority to levy and administer their own sales taxes.  This means that, although you will generally not calculate state sales tax in Alaska, local jurisdictions within Alaska may request that you pay sales, seller's use, or consumer use tax if you have nexus within that jurisdiction.  Because of this Home Rule designation, it is necessary for companies to correctly declare their nexus within Alaska and within local jurisdictions within the state of Alaska even though the state itself does not charge sales tax.</li>
  <li>Delaware doesn't have a sales tax, but it does impose other taxes businesses based on their gross sales.  These taxes are not calculated transactionally, which means they will not show up on your AvaTax transactions.</li>
  <li>Montana, New Hampshire, and Oregon prohibit local jurisdictions within the state from levying sales taxes.  As a result, these three states do not have any sales tax either at a local or state level.</li>
</ul>
Although these states do not charge sales tax, it is important that your connector still record tax correctly.  Avalara Certified Connectors must record transactions in AvaTax even if the transaction is within these NOMAD states.  This is necessary because:
<ul class="dev-guide-list">
  <li>Laws can change.  Avalara continually researches tax laws and updates our software promptly as soon as any changes affect correct tax calculation.  If any state changes its tax laws, your customers should not have to update their connector.</li>
  <li>Sourcing rules can change.  Some states can change their tax rules to determine the origin or destination of a transaction differently based on other factors such as the billing address or the call center address of a transaction.  In this case, a transaction that was previously nontaxable based on a NOMAD state law may become taxable based on the origination of the shipment.</li>
  <li>Tax types can change. Depending on your customer's subscriptions, Avalara provides support for excise, telecommunications, E-Waste, bottle taxes, and more.  These tax types may not always be exempt in NOMAD states.</li>
</ul>
To ensure that your connector correctly sends NOMAD tax, you must be able to demonstrate that the tax transaction in the test case below is correctly recorded in AvaTax.

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading"> Test Case: 8.2.1 </div>
<div class="dev-guide-test-content">
<h4>Set Up</h4> 
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Transaction Type: SalesInvoice</li>
        <li>Transaction Code: Chapter-8-Test-1</li>
        <li>Document Date: 2017-06-15</li>
        <li>Addresses</li>
        <ul class="dev-guide-list">
            <li>SingleLocation</li>
            <li>720 SW Broadway, Portland, OR 97205</li>
        </ul>
      <li>Line #1</li>
      <ul class="dev-guide-list">
          <li>Amount: 100</li>
          <li>TaxCode: P0000000</li>
      </ul>
      <li>Commit set to "true"</li>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

Calculate tax for your transaction using AvaTax.

<h4>Assertions</h4>

<ul class="dev-guide-list">
  <li>The tax for line 1 should be $0.00.</li>
  <li>The Taxable amount for line 1 should be $0.00.</li>
  <li>The Exempt amount for line 1 should be $100.00.</li>
  <li>The transaction's Status should be "Committed".</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
  "type": "SalesInvoice",
  "code": "Chapter-8-Test-1",
  "companyCode": "DEVGUIDE",
  "date": "2017-06-15",
  "customerCode": "ABC",
  "commit": "true",
  "addresses": {
    "singleLocation": {
      "line1": "720 SW Broadway",
      "city": "Portland",
      "region": "OR",
      "country": "US",
      "postalCode": "97205"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
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
  <li class="previous"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-nexus/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-product-taxability/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>