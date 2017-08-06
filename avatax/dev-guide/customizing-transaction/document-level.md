---
layout: page
title: 3.1 - Document Level
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/origin-and-destination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A transaction is made up of document level and line level properties.  These properties are a set of required and optional fields that apply to the transaction.  Some of these fields have bearing on how tax is calculated, while others may be used as reference fields for reporting and tracking purposes.  At the document level, these fields create the baseline for what will be used within the lines.  For example, the date used will apply to the entire document, including the lines to help determine the tax for the date specified.  Line level properties determine the specifics of the document such as the items sold.  Fields such as the <code>amount</code> and <code>quantity</code> determine how much tax is applied and how it's distributed.  Line level properties can also be used to override certain document level properties.  One example of how this can be done is through the use of origin and destination addresses.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/origin-and-destination/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
