---
layout: page
title: Chapter 11 - Calculating Tax Offline
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/understanding-and-managing-messages/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Unfortunately things don't always go as we would like them to.  While Avalara outages have been historically infrequent and short in duration, disruptions in connectivity due to service or internet outages are things that should be considered when designing your AvaTax SDK integration. Avalara sends out service notifications if there is an issue with our service which you can monitor through <a class="dev-guide-link" href="status.avalara.com">status.avalara.com</a>.

Avalara does not queue transactions when the web service is down. Unless a connection is made to the web service, you will only receive an "HTTP 500 - Internal Server Error" message which means you have lost connection to the AvaTax Web Service and your local system needs to track invoices until the web service is restored.

Consideration must then be given to how you will report taxes back to the customers and/ or users during the outage, as the solution sets used are wide and diverse depending on the ERP / Shopping Cart system. When weighing your options, you should consult your company’s tax accountant or attorney.

<h3>Common Solutions during outages:</h3>
<ol>
  <li>Prevent orders from being completed until service is restored and tax is calculated dynamically (e.g. not allow invoices to be posted in an ERP).</li>
  <li>Use a fallback method of calculation and then "make up" the difference when service is restored.</li>
</ol>

<h4>Fallback methods may include:</h4>
<ul class="dev-guide-list">
  <li>A rate that is higher than any jurisdiction in which you charge tax (e.g. 12%)</li>
  <li>A 0% rate</li>
  <li>A local rate table that gives an estimate by state or zip code.</li>
</ul>

<h4>Once Services are restored:</h4>
Once the service connection has been restored, he tax can be transmitted to AvaTax using one of the following calculation methods:
<ul class="dev-guide-list">
  <li>Use a tax override of TaxAmount to reflect the estimated tax.</li>
  <li>Use TaxIncluded to back-calculate the correct tax amount from the total (including estimated tax) charged to the customer.</li>
  <li>Allow AvaTax to recalculate the tax amount, and absorb any additional payment of taxes.
</li>
  <li>
Transactions can be loaded with the standard calculation method or by using our batch import functionality directly in the Admin Console.</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/consumer-use-tax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/understanding-and-managing-messages/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>