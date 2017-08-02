---
layout: page
title: Chapter 5 - Product Taxability
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/chapter-summary/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
How can I represent product and service level properties during the get tax call? 

Sales tax calculation results are driven by jurisdiction, dependent of the service or product being referenced in the API. Avalara's Tax codes have built in logic to represent the applicable sales tax regulations for each state. This can be identified by sending the property “taxCode": “xxxxxxxx” within the transaction. The tax code helps to identify what tax rules and rates apply to the transaction. As the Avalara content team has provides the research (and maintenance of) the taxability by state on the back end. The taxability logic is built in already. We have thousands of tax codes available - try searching through our online tax code web site, <a class="dev-guide-link" href="https://taxcode.avatax.avalara.com/">https://taxcode.avatax.avalara.com/</a>, to find a corresponding tax code related to a product or service.

In this chapter, you'll learn how to find the appropriate tax code for your product, and how to use that tax code correctly in an AvaTax transaction.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/reconciliation/chapter-summary/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>