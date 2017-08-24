---
layout: page
title: 2.3 - Line Items - Amounts, Quantities, Tax Codes, etc.
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-level-details/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/examples/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
To accurately calculate tax, you'll need to provide some details about what is being sold. There are a number of options which will be covered in greater detail next chapter, but at minimum you will need to send the details of 1 line item.

<code>Line Number</code>: This is not strictly required, but if you don't send a line number a garbled alphanumeric string will be generated in the response. For the sake of aesthetics, we recommend sending a line number.

<code>Quantity</code>: This is the quantity of the good or service being sold.

<code>Amount</code>:  This is the price of the good or service being sold. This is the total for the line.

<code>Tax Code</code>: This is how you specify the good or service type that is being sold. This is not a required field, and if a tax code is not sent AvaTax defaults to treating the item as taxable <code>Tangible Personal Property</code> using the tax code <code>P0000000</code>. We'll go into options for other tax codes next chapter, but we wanted to cover this briefly since we'll be seeing <code>P0000000</code> in the Response for our test API call.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-level-details/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/examples/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>