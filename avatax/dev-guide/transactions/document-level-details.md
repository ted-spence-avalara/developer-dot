---
layout: page
title: 2.4 - Document-Level Details
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-types/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/line-items/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
There are several pieces of information you'll need to provide at the document level, meaning that they apply to the entire transaction. We're just going to briefly cover the basics here, but we'll go into more detail about these fields and others in <a class="dev-guide-link" href="/avatax/dev-guide/transactions/customizing-your-transaction/">Chapter 3 - Customizing Your Transaction</a>. 

<code>CompanyCode</code>: This is how you'll control which of your companies a transaction is associated with. When you set up a company in AvaTax, you will assign it a unique Company Code. This will need to match one of those company codes, and the transaction will use the company tax profile (nexus settings, tax rules, etc.) of the company specified. If you leave this value null, your account's default company will be used instead.

<code>DocType</code>: This specifies the type of document to create. A document type ending with <code>Invoice</code> is a permanent transaction that will be recorded in AvaTax. A document type ending with <code>Order</code> is a temporary estimate that will not be preserved. We just went over this, so if you need a refresher just hit the 'previous' button!

If you omit this value, the API will assume you want to create a SalesOrder.

<code>Code</code>: The internal reference code used by the client application. This is used for operations such as Get, Adjust, Settle, and Void. If you leave the transaction code blank, a GUID will be assigned to each transaction.

This must be unique to the document type - you cannot have two SalesInvoice transactions with a document code of INV001, for instance. You could, however, have a SalesInvoice with the document code INV001 and a ReturnInvoice with the document code INV001, since these are separate document types.

<code>Date:</code> Transaction Date - The date on the invoice, purchase order, etc.

By default, this date will be used to calculate the tax rates for the transaction. If you wish to use a different date to calculate tax rates, please specify a taxOverride of type taxDate.

<code>CustomerCode:</code> The client application customer reference code. This is especially important for triggering exemption certificates, so you'll need to be able to send consistent customer codes (see <a class="dev-guide-link" href="/avatax/dev-guide/exemptions/">Chapter 8 - Exemptions </a>for more details on this).

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-types/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/line-items/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>