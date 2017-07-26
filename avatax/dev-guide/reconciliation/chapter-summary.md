---
layout: page
title: Chapter 4 - Chapter Summary
product: avaTax
doctype: dev_guide
chapter: reconciliation
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/">Next Chapter - Product Taxability<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
In this chapter, you've seen all the features available in AvaTax for designing a transaction reconciliation process.  You can choose which process best fits your company.

<ul class="dev-guide-list">
    <li>For a simple web store, you may prefer to use a direct-commit process, and refund any transaction if an error is discovered.  This process only uses two API calls: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> and <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/">RefundTransaction.</a></li>
    <li>For a small accounting system, you may prefer to use a one-stage commit process, and void any transactions when an error is discovered.  This process would also use CommitTransaction and VoidTransaction.</li>
    <li>More complex processes will use all available APIs, including <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/VerifyTransaction/">VerifyTransaction</a>, <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/ListTransactionsByCompany/">ListTransactionByCode</a>, and <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/AdjustTransaction/">AdjustTransaction.</a></li>
</ul>

Connector developers are free to customize the use of the reconciliation API suite to match their business processes.


<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/modifying-a-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/">Next Chapter - Product Taxability<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>