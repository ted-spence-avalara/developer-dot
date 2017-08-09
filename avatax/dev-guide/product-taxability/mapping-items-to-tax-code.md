---
layout: page
title: 5.2 - Mapping items to TaxCodes
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/zero-tax-due-to-product-taxability/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Identifying itemCode mapping to taxCodes can be done through the Avatax UI, ERP or via the API. 
<a class="dev-guide-link" href="https://help.avalara.com/000_Avalara_AvaTax/What_You_Sell/Map_Items_to_Tax_Codes?">https://help.avalara.com/000_Avalara_AvaTax/What_You_Sell/Map_Items_to_Tax_Codes?</a>

<pre>
[
  {
   "id": 7754,
   "companyId": 1345,
   "itemCode": “8987987",
   "taxCode": "DC010500",
   "description":"
  }
]
</pre>

The line <code>"description”</code> is a string that will specify additional details about the product, like a name, color, size, etc. 

Some jurisdictions may have regulations pertaining to quantity and amount values. For example, in certain jurisdictions in New York clothing items under $110.00 can be nontaxable.

In Tennessee  a special tax applied when the value of a single physical item (Quantity of 1) has a value exceeding $1,600, up to the value of $3,200.

Examples:
<ul class="dev-guide-list">
    <li>No <a class="dev-guide-link" href="http://www1.nyc.gov/nyc-resources/service/2389/sales-tax">sales tax</a> on an item of clothing or footwear that costs less than $110
    </li>
    <li>Tennessee <a class="dev-guide-link" href="https://revenue.support.tn.gov/hc/en-us/articles/205576765-What-is-a-single-article-and-how-is-sales-tax-on-a-single-article-calculated-<">single article tax cap</a>
    </li>
</ul>

Note: If your business is part of the Streamlined Sales Tax (SST) program, you will be required to send both an <code>“itemCode”</code> and <code>“description”</code> for each product line on your orders. The <code>“description”</code> is an SST requirement not a required field for the API. Yet, sending a description is a best practice for all clients, not just those companies participating in SST program.

Keep in mind that items and tax codes represent the production taxabiltiy. Other factors like exempt status of customer and the client's tax profile generally would place higher in a hierarchy sense to product. Meaning if your customer is exempt, referencing a taxable tax code will still generate a zero tax result. Same of nexus and tax rules. If you are getting a gettax result for a jurisdiction that you have not identified in the Avalara Nexus settings, regardless of the item or tax code passed the result will be nontaxable. The application of these three levels results in the tax calculation you see returned by the API and/or recorded in AvaTax.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/finding-a-tax-code/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/zero-tax-due-to-product-taxability/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>