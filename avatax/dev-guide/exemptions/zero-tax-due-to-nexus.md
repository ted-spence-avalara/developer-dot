---
layout: page
title: 8.1 - Zero Tax Due to Nexus
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/states-that-do-not-collect-sales-tax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The most common reason that tax could be zero is if your company does not have <a class="dev-guide-link" href="/avatax/dev-guide/glossary/#nexus">"Nexus"</a>, and is not obligated to collect tax.

This definition of the word Nexus comes from the United States, where a legal ruling by the supreme court established that a company must only collect tax if they have sufficient "Nexus" in a jurisdiction. Unfortunately, the specific definition of Nexus is complex and changes when new laws are passed or when new legal precedents are established.  

When using AvaTax, your company must decide where it has nexus, and where it does not.  This selection is used to determine whether you are obligated to collect taxes.  For example, if your company has nexus in the state of Massachusetts, but you do not have nexus in the state of Rhode Island, in general a tax calculation for a customer in Rhode Island will result in zero tax. According to legal precedents in the United States, this zero tax means that it is the responsibility of the buyer, instead, to determine the correct tax to pay to the taxing authority. This tax obligation is called "Consumer Use Tax".

<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 8.1.1</div>
<div class="dev-guide-test-content">
<h4>Set Up</h4>
<ul class="dev-guide-list">
    <li>Your DEVGUIDE company should have nexus in Washington State, but not in Rhode Island.</li>
    <li>In your connector, create the following transaction:</li>
        <ul class="dev-guide-list">
            <li>Transaction Type: SalesInvoice</li>
            <li>Transaction Code: Chapter-8-Test-1</li>
            <li>Document Date: 2017-06-15</li>
            <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>468 Angell Street, Providence, RI 02906</li>
            </ul>
            <li>Line #1</li>
            <ul class="dev-guide-list">
                <li>Amount: 100</li>
                <li>TaxCode: P0000000</li>
            </ul>
        </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>The tax for line 1 should be $0.00.</li>
    <li>The Taxable amount for line 1 should be $0.00. </li>
    <li>The Exempt amount for line 1 should be $100.00.</li>
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
    "addresses": {
        "singleLocation": {
            "line1": "468 Angell Street",
            "city": "Providence",
            "region": "RI",
            "country": "US", 
            "postalCode": "02906"
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
   <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/states-that-do-not-collect-sales-tax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>