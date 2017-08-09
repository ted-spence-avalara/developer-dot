---
layout: page
title: 5.1 - Finding a Tax Code
product: avaTax
doctype: dev_guide
chapter: product-taxability
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

So far in the developer guide, your code has left the <code>taxCode</code> field empty.  In this case, AvaTax assumes you are creating transactions that refer to general Tangible Personal Property, which is represented by the default tax code, <code>P0000000</code>.

As long as you continue using a null tax code, AvaTax will treat your products the same.  However, many products are taxed differently in different jurisdictions.  Finding the correct tax code will ensure that AvaTax treats your product correctly everywhere.

You can find the correct tax code for your product in one of two ways:
<ul class="dev-guide-list">
    <li>Look on Avalara's <a class="dev-guide-link" href="https://taxcode.avatax.avalara.com">tax code site</a></li>
    <li>Or you could call the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes API</a> to list available tax codes</li>
</ul>

When you use tax codes correctly in AvaTax, you will get the correct tax rate for your transaction. Some customers will choose to enter a tax code directly when creating a transaction. 

Other customers may wish to search for tax codes directly through the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes API</a>.   A common use case is to show a drop down text box.  When a customer starts typing the word "C", your program can call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes</a> to find all tax codes that begin with the letters that the customer has typed.  Here's how to call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/">ListTaxCodes</a>:

<pre>

GET /api/v2/definitions/taxcodes/$filter=description startswith C
 
 
{
    "id": 56789,
    "companyId": 12345,
    "taxCode": "PF050101",
    "taxCodeTypeId": "P",
    "description": "Carbonated beverages",
    "parentTaxCode": "PF050001",
    "isPhysical": true,
    "goodsServiceCode": 0,
    "entityUseCode": "",
    "isActive": true,
    "isSSTCertified": true
}
</pre>

<h3>Adding TaxCodes to your Transaction</h3>

On the document line level you can pass via the <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransactionModel</a>. There are a few properties that allow you to identify your line categories of <code>“ItemCode”</code>, <code>“Qty”</code>, <code>“Amount”</code>, <code>“Description”</code>, and <code>“TaxCode”</code>. The <code>ItemCode</code> are generally the value passed by your integration or web service to represent a part number, SKU or product ID for the said products or services.

<pre>
{
  "LineNo":"01",
  "Qty":"1",
  "Amount":"5.99",
  "TaxCode":"PF050001"
}
</pre>

<h3>Custom TaxCodes</h3>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/product-taxability/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/product-taxability/mapping-items-to-tax-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
