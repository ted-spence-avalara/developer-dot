---
layout: page
title: 2.2 - Document-Level Details
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/line-items/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
There are several pieces of information you'll need to provide at the document level, meaning that they apply to the entire transaction. We're just going to briefly cover the basics here, but we'll go into more detail about these fields and others in <a class="dev-guide-link" href="/avatax/dev-guide/transactions/customizing-your-transaction/">Chapter 3 - Customizing Your Transaction</a>. Please note that not all of the fields below are strictly required, although it's good practice to include them.

<code>CompanyCode</code>: This is how you'll control which of your companies a transaction is associated with. When you set up a company in AvaTax, you will assign it a unique Company Code. This will need to match one of those company codes, and the transaction will use the company tax profile (nexus settings, tax rules, etc.) of the company specified. If you leave this value null, your account's default company will be used instead..

<code>DocType</code>: This specifies the type of document to create. We'll cover this in greater detail later in this chapter, but in short a document type ending with Invoice is a permanent transaction that will be recorded in AvaTax. A document type ending with <code>Order</code> is a temporary estimate that will not be preserved. 

If you omit this value, the API will assume you want to create a <code>SalesOrder</code>, which will not be recorded to the AvaTax admin console and acts as a temporary estimate.

<code>Code</code>: The internal reference code used by the client application. This is used for operations such as Get, Adjust, Settle, and Void. If you leave the transaction code blank, a GUID will be assigned to each transaction.

This must be unique to the document type - you cannot have two <code>SalesInvoice</code> transactions with a document code of INV001, for instance. You could, however, have a <code>SalesInvoice</code> with the document code INV001 and a <code>ReturnInvoice</code> with the document code INV001, since these are separate document types.

<code>Date</code>: Transaction Date - The date on the invoice, purchase order, etc.

By default, this date will be used to calculate the tax rates for the transaction. If you wish to use a different date to calculate tax rates, please specify a <code>taxOverride</code> of type <code>taxDate</code>.

<code>CustomerCode</code>: The client application customer reference code. This is especially important for triggering exemption certificates, so you'll need to be able to send consistent customer codes (see <a class="dev-guide-link" href="/avatax/dev-guide/exemptions/">Chapter 8 - Exemptions </a>for more details on this).

<h3>Addresses</h3>
Addresses are a crucial part of the sales tax calculation process. There are a number of factors that go into sales tax calculation, but the addresses are probably the most important. The total sales tax rate that you pay is generally made up of several smaller rates, and each of those is allocated to a different taxing jurisdiction (think state, county, city). AvaTax determines the correct taxing jurisdictions based on the addresses provided. This may seem fairly straightforward, but there are a huge number of different taxing jurisdictions, and the boundaries aren't always clean or simple to determine. Avalara has a content research team that does the legwork on this so you don’t have to – you just need to give us the address, and we'll determine the correct taxing jurisdictions for you.

The two address types that factor into sales tax calculation are the Origin Address (<code>shipFrom</code>) and the Destination Address (<code>shipTo</code>). The simplest type of transaction is a 'retail point of sale' transaction, where the origin address and the destination address are the same. In this scenario, a customer makes a purchase in a retail location and takes possession of the product(s) at that location. This is the type of transaction that we'll focus on for the rest of this chapter, but we'll discuss how to calculate tax for transactions with multiple addresses in <a class="dev-guide-link" href="/avatax/dev-guide/transactions/customizing-your-transaction/">Chapter 3 - Customizing Your Transaction</a>.

While only the city, state, and ZIP code are required for calculation, it’s best practice to provide as much address information as you have available. This will help to ensure the most accurate tax calculation possible. 

<h3>Address Validation</h3>
We recommend validating/resolving addresses against Avalara's address-validation system. If the address can be resolved, this API provides the latitude and longitude of the resolved location to ensure the most accurate sales tax calculation possible. For the purposes of this chapter we'll just stick with using an address that we know is valid.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/line-items/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>