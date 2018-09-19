---
layout: post
title: How to Calculate E-Waste Tax in California
date: 2018-09-20 12:00
author: Genevieve Conty
comments: true
categories: [avatax]
product: blog
doctype: blog
disqus: 1
---

In this post, we will demonstrate how to calculate e-waste tax in California. First, we need to understand unit-based rates and their implementation. Many tax rates and tariffs are ad valorem, which means tax is calculated based on the monetary value of the goods sold or shipped. Rates can also be **unit-based**. Unit-based rates depend on how much of an item is sold or shipped, for example volume, mass, size, or quantity. 

Unit-based rates apply to many goods such as sugar, e-waste and recycling fees for electronics, lodging, and bottles. These rates have a **unit of measurement** and **quantity**. Throughout this post, we will refer to units of measurement as **UOM**. 

Let’s show how to use unit-based rates with the AvaTax API.  

<h2>How Do We Use Unit-based Rates?</h2>
We will start with an example of shipping a computer system with monitor to California, tax code PC080100. California has an e-waste recycling fee on first sales. If you call `CreateTransaction` using a unit-based tax code, AvaTax will tell you exactly which parameter or parameters are need for a more thorough calculation in the response description: 

```json
"description": "Attributes required for this transaction line but could NOT be located in parameter bag item. Missing Attributes/ParameterBagItems are: FirstUse,ScreenSize"
```


For this transaction, we see that the parameters `FirstUse` and `ScreenSize` are needed to give us a more complete tax calculation. What parameters are available in AvaTax? Using the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/" target="_blank">Definitions API</a>, you can see the full list of AvaTax parameters:

`GET /api/v2/definitions/parameters`


We can even use REST filtering to get back only the parameters for which we are looking:

`GET /api/v2/definitions/parameters?%24filter=name%20EQ%20FirstUse%20or%20name%20EQ%20ScreenSize`


In the response, the parameters for which we queried are:
```json
{
  "@recordsetCount": 2,
  "value": [
    {
      "id": 89,
      "category": "",
      "name": "ScreenSize",
      "dataType": "NumericMeasured"
    },
    {
      "id": 90,
      "category": "",
      "name": "FirstUse",
      "dataType": "Boolean"
    }
  ]
}
```

Putting these together, this is our request at the line level:

```json
"lines": [
    {
      "number": "1",
      "amount": 1000,
      "taxCode": "PC080100",
      "parameters": {
          "FirstUse" : true,
          "ScreenSize" : 15
      }
    }
  ]
```

Sending this line item in the request will return a tax calculation. But it comes back with something in the “messages” field that you might not have seen before:
```json
"messages": [
        {
            "summary": "SI UOM used",
            "details": "SI UOM has been used for MeasurementType 'Length'.",
            "refersTo": "UOM Code",
            "severity": "Warning",
            "source": "Avalara.AvaTax.Services.Tax"
        }`
    ]
```

The warning means that AvaTax used the default <a href="https://en.wikipedia.org/wiki/International_System_of_Units" target="_blank">Système Internationale d'Unités</a>, or SI Unit, for calculating screen size. The SI Unit for length is the meter/metre. A screen size of 15 meters is rather large and maybe more than we intended. But how do we tell AvaTax which unit we mean? We will next explore how to tell AvaTax what UOM you want.

<h2>How to Refine E-Waste Sales Tax Requests</h2>
First, we need to know what parameters and units to use for our transaction. Let’s see what UOM are available for length: 

`/api/v2/definitions/unitofmeasurements?$filter=measurementTypeCode%20EQ%20Length`

This request with filter checks for UOMs related to length, which returns this response (abridged):
```json
   …
    {
      "id": 139,
      "code": "FrenchGauge",
      "shortDesc": "French Gauge (charriere, Fg, FR, F)",
      "description": "french; charriere \"French Catheter Scale\"",
      "measurementTypeId": 4,
      "measurementTypeCode": "Length",
      "siUOM": "337",
      "measurementTypeDescription": "Length",
      "isSiUom": false
    },
    {
      "id": 142,
      "code": "Inch",
      "shortDesc": "Inches (in)",
      "description": "",
      "measurementTypeId": 4,
      "measurementTypeCode": "Length",
      "siUOM": "337",
      "measurementTypeDescription": "Length",
      "isSiUom": false
    },
    …
    {
      "id": 157,
      "code": "Mile",
      "shortDesc": "Mile, International (mi)",
      "description": "",
      "measurementTypeId": 4,
      "measurementTypeCode": "Length",
      "siUOM": "337",
      "measurementTypeDescription": "Length",
      "isSiUom": false
    }
    …
```

Now, that we know what units of measurement are available for length, let’s find the relevant parameters for a computer system with monitor. To do this, we can filter the DefinitionsAPI to show ‘Screen’ related parameters:

`/api/v2/definitions/parameters?$filter=name%20contains%20Screen`

When filtering for ‘Screen’, we receive this response:

```json
{
  "@recordsetCount": 2,
  "value": [
    {
      "id": 89,
      "category": "",
      "name": "ScreenSize",
      "dataType": "NumericMeasured"
    },
    {
      "id": 152,
      "category": "",
      "name": "ScreenSize",
      "dataType": "NumericMeasured"
    }
  ]
}
```

From the response, we can see a ScreenSize parameter exists and expects a numeric value. To satisfy this requirement, we need to add the appropriate parameter and measurement information at the line level. The syntax for UOM is:
```
“parameters”: {
	“[parameter name]”: “[number of units of parameter]”,
	“[parameter name].UOM”: “[unit of measurement]”
}
```

For our computer system with monitor example, we fill this tuple of parameters with the relevant data:  
```json
"parameters": {           
          "ScreenSize": "100",
          "ScreenSize.UOM": "Inch"
}
```

When we put in the correct parameters and measurements, we get a response with a correct e-waste calculation (abridged):
```json
{
  "id": 12345678,
  "code": "55aa5555-5aa5-5555-5a55-5555aa5a5555",
  "companyId": 1234567,
  "date": "2018-06-15",
  "status": "Saved",
  "type": "SalesInvoice",
  ...
  "taxOverrideType": "None",
  "taxOverrideAmount": 0,
  "taxOverrideReason": "",
  "totalAmount": 100,
  "totalExempt": 0,
  "totalDiscount": 0,
  "totalTax": 16.5,
  "totalTaxable": 100,
  ...
  "lines": [
    {
      "id": 12345678,
      "transactionId": 12345678,
      "lineNumber": "1",
      ...
      "taxCode": "PC080100",
      "taxCodeId": 6683,
      "taxDate": "2018-06-15",
      "taxEngine": "",
      "taxOverrideType": "None",
      "businessIdentificationNo": "",
      "taxOverrideAmount": 0,
      "taxOverrideReason": "",
      "taxIncluded": false,
      "details": [...],
      "nonPassthroughDetails": [],
      "lineLocationTypes": [...],
      "parameters": {
        "ScreenSize.UOM": "Inch",
        "AvaTax.LandedCost.UnitName": "Inch",
        "AvaTax.LandedCost.UnitAmount": "100",
        "ScreenSize": "100"
      },
      "hsCode": "",
      "vatCode": "",
      "vatNumberTypeId": 0
    }
  ],
  "addresses": [...],
  "locationTypes": [...],
  "summary": [
    ...
    {
      "country": "US",
      "region": "CA",
      "jurisType": "State",
      "jurisCode": "06",
      "jurisName": "CALIFORNIA",
      "taxAuthorityType": 45,
      "stateAssignedNo": "",
      "taxType": "EWaste",
      "taxName": "CA EWaste",
      "rateType": "General",
      "taxable": 0,
      "rate": 7,
      "tax": 7,
      "taxCalculated": 7,
      "nonTaxable": 0,
      "exemption": 0
    },
    ...
  ],
  "parameters": {}
}
```

<h2>Things to Keep in Mind</h2>
Parameters are case-sensitive, so be sure to follow the exact spelling the endpoint gives you. Consequently, when searching for information in the definitions endpoints, try changing the capitalization if you aren’t finding what you need. 

In the parameters section, you will need to include both your parameter and the respective quantity. For the UOM, be sure to concatenate `.UOM` onto the string. 

The `[parameterBagMasterName].UOM` syntax is unique to REST. You might not see this syntax elsewhere, but for REST, it’s the key to the conquering the UOM parameter.

<h2>Rate-Based Calculations Also Apply to Some Duties and Tariffs</h2>
In a <a href="https://developer.avalara.com/blog/2018/03/13/hs-code-search-in-rest/?referrer=&lastReferrer=developer.avalara.com&sessionId=1537231416522" target="_blank">previous blog</a>, we discussed HS Codes and how to find the appropriate HS code for a product. For some transactions, you will need to also include the relevant HS Code at the line level. Let’s take a look at shipping sugar to Canada: 
```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2018-06-15",
  "customerCode": "TESTCUSTOMER",
  "isSellerImporterOfRecord": true,
  "addresses": {
    "shipFrom": {
      "line1": "100 Ravine Lane NE",
      "city": "Bainbridge Island",
      "region": "WA",
      "country": "US",
      "postalCode": "98110"
    },
    "shipTo": {
      "line1": "5222 Sherbrooke St E",
      "city": "Montreal",
      "region": "QC",
      "country": "CA",
      "postalCode": "H1N 1A1"
    }
  },
  "lines": [
    {
      "number": "1",
      "amount": 100,
      "taxCode": "P0000000",
      "hsCode": "1702908910", 
      "parameters": {
          "AvaTax.Units.Mass": "1000", 
          "AvaTax.Units.Mass.UOM": "Ton_UsCustomary"
      }
    }
  ]
}
```

We used the Ton_UsCustomary as the UOM here. Of course, there are several different types of tons because more is more. 

<h2>E-Waste Calculations Are a Breeze!</h2>

The AvaTax API makes e-waste calculations quick and easy, so your project can move forward with accurate and reliable information. All you need are your parameters and relevant UOM, and then, you’re ready to start calculating!
