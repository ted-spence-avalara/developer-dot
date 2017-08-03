---
layout: page
title: 2.5 - Line Items - Amounts, Quantities, Tax Codes, etc.
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-level-details/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/addresses/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

To accurately calculate tax, you'll need to provide some details about what is being sold. There are a number of options which will be covered in greater detail next chapter, but at minimum you will need to send the details of 1 line item.

<span class="dev-guide-bold">Line Number: </span>This is not strictly required, but if you don't send a line number a garbled alphanumeric string will be generated. Just send a line number.

<span class="dev-guide-bold">Quantity:</span> This is the quantity of the good or service being sold.

<span class="dev-guide-bold">Amount: </span> This is the price of the good or service being sold. This is the total for the line.

<span class="dev-guide-bold">Tax Code:</span> This is how you specify the good or service type that is being sold. This is not a required field, and if a tax code is not sent AvaTax defaults to treating the item as taxable <span class="dev-guide-bold">Tangible Personal Property</span> using the tax code <span class="dev-guide-bold">P0000000.</span> We'll go into options for other tax codes next chapter, but we wanted to cover this briefly since we'll be seeing <span class="dev-guide-bold">P0000000</span> in the Response for our test API call.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/document-level-details/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/addresses/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>