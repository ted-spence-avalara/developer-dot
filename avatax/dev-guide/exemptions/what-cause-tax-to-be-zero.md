---
layout: page
title: 8.1 - What causes tax to be zero?
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-nexus/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

One of the most common questions asked about tax software is, "Why is there no tax on this transaction?"  Since a tax calculation involves many different factors, let's begin by analyzing all the reasons that a transaction could be calculated to have zero tax.

Tax can be zero for either a legal reason or a technical reason.  In the case of a legal reason, AvaTax is set up to allow you to configure this legal reason and it will correctly calculate zero tax based on these circumstances:
<ul class="dev-guide-list">
    <li>In the United States, a company may not be compelled to collect tax.  For example, this will occur if the company is selling a product in a jurisdiction where they do not have <a href="/avatax/dev-guide/glossary/#nexus" class="dev-guide-link">Nexus</a>. In this case, it is legally the responsibility of the buyer to remit Consumer Use Taxes, but the seller is not required to charge taxes on the transaction.</li>
    <li>Some states in the United States have zero sales or use tax rates.</li>
    <li>A product may be non-taxable, or exempt, or have its tax rate set to zero.  Some jurisdictions use the phrase "Nontaxable" to refer to product-taxability, while others refer to this as an "Exemption" or a "Zero-Rate".  This use case is fully described in <a class="dev-guide-link" href="/avatax/dev-guide/product-taxability/">Chapter 5, "Product Taxability."</a></li>
    <li>A buyer may have an Exemption Certificate, such as a Resale Exemption Certificate or a Direct Pay Permit.</li>
    <li>The purchase may be made for an exempt purpose, which would be identified by an <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/EntityUseCodeModel/">EntityUseCode.</a> For example, purchases for diplomatic use are generally exempt in the United States. (can we discuss - they can be exempted differently but it is essentially the same thing - AP)</li>
</ul>

There are also technical reasons why tax may be zero.  When using AvaTax, you can specifically make a request to specify a <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TaxOverrideModel/">TaxOverride</a>.
<ul class="dev-guide-list">
    <li>A TaxOverride indicates that you are forcing AvaTax to set a specific tax amount for a transaction.  This is useful when importing transactions from a different source; or for comparing functionality between AvaTax and a different tax engine.</li>
</ul>

Although tax overrides may seem to be a very easy way to adjust the taxes for a transaction, we do not recommend using it except when importing transactions whose tax was calculated using a different tax engine.

Let's discuss each condition in turn. 

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions/zero-tax-due-to-nexus/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
