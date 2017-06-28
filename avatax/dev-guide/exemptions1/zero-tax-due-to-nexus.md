---
layout: page
title: Zero Tax Due to Nexus
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---
{% include exemptions_toc.html %}

The most common reason that tax could be zero is if your company does not have <b><u>"Nexus"</u></b>, and is not obligated to collect tax.

This definition of the word <b><u>Nexus</u></b> comes from the United States, where a legal ruling by the supreme court established that a company must only collect tax if they have sufficient "Nexus" in a jurisdiction.  Unfortunately, the specific definition of Nexus is complex and changes when new laws are passed or when new legal precedents are established.  

When using AvaTax, your company must decide where it has nexus, and where it does not.  This selection is used to determine whether you are obligated to collect taxes.  For example, if your company has nexus in the state of Massachusetts, but you do not have nexus in the state of Rhode Island, in general a tax calculation for a customer in Rhode Island will result in zero tax.  According to legal precedents in the United States, this zero tax means that it is the responsibility of the buyer, instead, to determine the correct tax to pay to the taxing authority.  This tax obligation is called "Consumer Use Tax".

<div class="dev-guide-test">
<h3 id="exemptions-3">Testing Nexus Based Obligations</h3>
<h4>Set Up</h4>
Your DEVGUIDE company should have nexus in Washington State, but not in Rhode Island.

In your connector, creat the following transaction: 

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

Calculate tax for your transaction using AvaTax.

<h4>Expected API Call</h4>
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

<h4>Assertions</h4>

The tax for line 1 should be $0.00.

The Taxable amount for line 1 should be $0.00. 

The Exempt amount for line 1 should be $100.00.

</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions1/zero-tax-due-to-nexus/">Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions1/states-that-do-not-collect-sales-tax/">Next</a></li>
</ul>