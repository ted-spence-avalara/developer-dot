---
layout: post
title: How to Get Tax
date: 2018-05-22 18:00
author: Jeff Meisner and Wayne Myer
comments: true
categories: [avatax, howto]
product: avatax
doctype: blog
disqus: 1
---

You need to calculate sales tax, but it’s complicated stuff. In Indiana, marshmallows are taxed but marshmallow cream is not. In Texas, boots, belts, and hats are tax-free, but belt buckles are taxed. And in New York, bagels are tax-free, unless, of course, they are sliced. Oh, but it gets worse. Adding to the already insane complexity, the same address can be subject to multiple tax jurisdictions with different rates for different items in your shipment. 
<h2>Boots, belts and bagels — which ones are tax-free? Here’s how to find out using Avalara’s sales tax API!</h2>
Calculating sales tax accurately is crucial to your business. Charging too little exposes your company to liability and penalties. Charging too much sales tax makes your business less competitive and can lead to abandoned sales. 

And the risks of getting it wrong are daunting – take the example of <a href="https://www.bizjournals.com/portland/news/2012/01/04/mattress-world-sunk-by-washington-tax.html" target="_blank">Mattress World</a>, which was sunk by sales tax compliance issues. Fortunately, Avalara is here to help. Not only do we have a tax engine that is constantly updated with the latest tax rules for thousands of jurisdictions across the globe, we have an API that makes building tax compliance solutions quick, easy and accurate.
<h2>Calculate Sales Tax Quickly and Easily</h2>
Most of the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/" target="_blank">methods</a> in AvaTax have a Try Now feature embedded in our online documentation pages. This allows you to easily try out AvaTax calls, models, and fields without any credentials. Most commonly, the first steps are to <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/" target="_blank">validate the address</a> of where you want to ship and then <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/" target="_blank">create a transaction to get a tax calculation</a>. You can try out both API endpoints by clicking on the URLs above. 

To get the most accurate tax calculation, it’s important to use a valid address. This address is the starting point of all things taxation. ZIP codes are not precise enough, especially when special taxing jurisdictions are applicable. AvaTax’s rooftop level calculation lets you quickly and accurately get the applicable sales taxes on what you are selling, where you are selling it. 

AvaTax can handle very complex transactions and use cases. You can <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" target="_blank">read more about the CreateTransactionModel here</a>. For now, let’s start with a simple transaction, selling a $1,000 leather handbag from a business in Seattle and shipping to Wappingers Falls, New York. For this order, we will add a $50 shipping charge and $50 insurance for this pricey handbag. We’ll purposefully use a more complex transaction model in this instance so that we can demonstrate some additional features of the AvaTax REST API. 

`POST /api/v2/transactions/create`
```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "isSellerImporterOfRecord": "true",
  "date": "2018-05-15T00:00:00-07:00",
  "customerCode": "ABC",  
  "addresses": {
    "ShipFrom": {
      "line1": "815 1st Ave",
      "city": "Seattle",
      "region": "WA",
      "country": "US",
      "postalCode": "98104"
    },
    "ShipTo": {
      "line1": "14 Lawton Rd",
      "city": "Wappingers Falls",
      "region": "NY",
      "country": "US",
      "postalCode": "12590"
    }
  },
  "lines": [
    {
      "number": "1",
      "quantity": 1,
      "amount": 1000,
      "description": "Leather handbag",
      "taxCode": "P0000000",      
      "parameters": {
      }
    },
    {
      "number": "2",
      "quantity": 1,
      "amount": 50,
      "description": "Shipping",
      "taxCode": "FR010000"
    },
    {
      "number": "3",
      "quantity": 1,
      "amount": 50,
      "description": "Insurance",
      "taxCode": "FR070100"
    }
  ],
  "parameters": {   
  },
  "taxDate": "2018-05-15T00:00:00-07:00",
  "currencyCode": "USD"
}
```

You can test this transaction out for yourself in the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/" target="_blank">Try CreateTransaction Now feature in the developer documentation pages</a>. A lot of information comes back from this small request – more than 700 lines. Taxes are complex, but for most use cases, the information in the summary is enough. For the sake of brevity, here are only the total tax lines and summary from the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel" target="_blank">TransactionModel</a> response:
```json
…
"totalTax": 89.39,
"totalTaxable": 1100,
"totalTaxCalculated": 89.39,
…
"summary": [
    {
      "country": "US",
      "region": "NY",
      "jurisType": "State",
      "jurisCode": "36",
      "jurisName": "NEW YORK",
      "taxAuthorityType": 45,
      "stateAssignedNo": "",
      "taxType": "Use",
      "taxName": "NY STATE TAX",
      "rateType": "General",
      "taxable": 1100,
      "rate": 0.04,
      "tax": 44,
      "taxCalculated": 44,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "NY",
      "jurisType": "County",
      "jurisCode": "027",
      "jurisName": "DUTCHESS",
      "taxAuthorityType": 45,
      "stateAssignedNo": "DU 1311",
      "taxType": "Use",
      "taxName": "NY COUNTY TAX",
      "rateType": "General",
      "taxable": 1100,
      "rate": 0.0375,
      "tax": 41.25,
      "taxCalculated": 41.25,
      "nonTaxable": 0,
      "exemption": 0
    },
    {
      "country": "US",
      "region": "NY",
      "jurisType": "Special",
      "jurisCode": "359070",
      "jurisName": "DUTCHESS CO TRANSIT DISTRICT",
      "taxAuthorityType": 45,
      "stateAssignedNo": "DU 1311",
      "taxType": "Use",
      "taxName": "NY SPECIAL TAX",
      "rateType": "General",
      "taxable": 1100,
      "rate": 0.00375,
      "tax": 4.14,
      "taxCalculated": 4.14,
      "nonTaxable": 0,
      "exemption": 0
    }
  ] 
```  
We can see from the response that the applicable taxing jurisdictions consider the entirety of this order taxable. New York taxes shipping and insurance on this order the same as if it were physical goods. There are jurisdictions where the shipping might be tax-free, such as certain cases in Illinois. Some jurisdictions may tax these at different rates from physical goods. From one simple request, however, AvaTax can determine what taxes apply to your shipment. 
<h2>Tax Complexity Made Less Complex</h2>
The AvaTax API can simplify your tax calculations. For nearly 3,000 categories of physical items, for more than 10,000 tax jurisdictions (very often overlapping), Avalara has your tax calculation covered. Our tax content researchers constantly monitor government tax authorities around the world. Tax rules are kept up to date and even handle sales tax holidays. From apples to Zambonis, Alabama to Zimbabwe, AvaTax can determine the correct sales tax for your orders. We can help you calculate the accurate sales taxes on your goods all over the world. 

The AvaTax API is easy to use, too. Our API uses human-readable JSON for requests and responses, with RESTful URLs that are easy to read and understand. <a href="https://developer.avalara.com/sdk/" target="_blank">We have SDKs to accelerate your integration with support for Python, C#, Ruby, PHP, Java, and JavaScript</a>. The SDKs wrap the calls to AvaTax in objects and methods and include ready-to-use code examples. <a href="https://github.com/avadev" target="_blank">These SDKs are open-source</a>, easy to use and extensible to suit your workflow. They are updated with each release of the AvaTax REST API, so that the new features and improvements are available at the same time, whether you use the SDKs or native REST calls.  
What about tax exemptions? Avalara’s got your back there, too, whether it’s simply one entity that is tax exempt, all the way up to managing and documenting thousands of exemption certificates.

Sales tax is complex and it can be a big headache, but with the right sales tax API, it doesn’t have to be either. Give AvaTax a test drive for 60 days. When you sign up for a <a href="https://developer.avalara.com/avatax/signup/" target="_blank">free API trial</a>, you get access to our <a href="https://rest.avatax.com/" target="_blank">full production environment</a>, unlimited API calls, and guidance for your implementation. <a href="https://developer.avalara.com/sdk/" target="_blank">Download the SDK for your language of choice</a> and start sending requests today. 

