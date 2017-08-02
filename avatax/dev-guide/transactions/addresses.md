---
layout: page
title: 2.6 - Addresses
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/line-items/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-your-transaction/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>
Now that you’ve got an understanding of the different document types, we can move on to another crucial part of the sales tax calculation process: the addresses. There are a number of factors that go into sales tax calculation, but the addresses are probably the most important. The total sales tax rate that you pay is generally made up of several smaller rates, and each of those is allocated to a different taxing jurisdiction (think state, county, city). AvaTax determines the correct taxing jurisdictions based on the addresses provided. This may seem fairly straightforward, but there are a huge number of different taxing jurisdictions, and the boundaries aren't always clean or simple to determine. Avalara has a content research team that does the legwork on this so you don’t have to – you just need to give us the address, and we'll determine the correct taxing jurisdictions for you.

The two address types that factor into sales tax calculation are the <span class="dev-guide-bold">Origin Address</span> (ship-from) and the <span class="dev-guide-bold">Destination Address</span> (ship-to). The simplest type of transaction is a 'retail point of sale' transaction, where the origin address and the destination address are the same. In this scenario, a customer makes a purchase in a retail location and takes possession of the product(s) at that location. This is the type of transaction that we'll focus on for the rest of this chapter, but we'll discuss how to calculate tax for transactions with multiple addresses in <a class="dev-guide-link" href="/avatax/dev-guide/customizing-transaction/">Chapter 3 - Customizing Your Transaction</a>.

While only the city, state, and ZIP code are required for calculation, it’s best practice to provide as much address information as you have available. This will help to ensure the most accurate tax calculation possible. 

<h3>Address Validation</h3>
We recommend validating/resolving addresses against Avalara's address-validation system. If the address can be resolved, this API provides the latitude and longitude of the resolved location to ensure the most accurate sales tax calculation possible. For the purposes of this chapter we'll just stick with using an address that we know is valid, but you can read more about the address validation process in Appendix - TBD.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/line-items/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>