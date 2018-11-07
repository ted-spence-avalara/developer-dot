---
layout: post
title: How to Validate Addresses
date: 2018-05-23 10:00
author: Wayne Myer
comments: true
categories: [avatax, how to]
product: avatax
doctype: blog
disqus: 1
---

<h2>Calculating sales tax? Ditch the ZIPs and get rooftop-level accuracy with Avalara’s API!</h2>
Valid addresses are a critical component of accurate tax calculation. I know what you’re thinking – I have the ZIP code, isn’t that enough? Not really. Why? ZIP codes are generally too broad for tax determination because zones are set at the federal level for mail delivery. State and local tax authorities often use other criteria for bounding their tax jurisdictions, such as a special stadium or restaurant tax district. 

So, what’s the best way to ensure your organization has up-to-date, roof-top accurate addresses?

An API.

<h2>The Address Validation API</h2>
<a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/" target="_blank">AvaTax’s Address Validation API</a> provides rooftop accuracy. This helps you develop a more robust user experience for your customers. In addition, the API helps your organization calculate more accurate taxes, so you can minimize overcharging or undercharging sales tax.

One way AvaTax enables accurate address validation is through the use of the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/" target="_blank">ResolveAddress endpoints</a> for your address resolution and correction needs. Make calls to ResolveAddress early in your order pipeline to help your customer complete their order and limit abandonment. By using AvaTax’s address service, you can have a one-stop shop for your deliverability and tax calculation needs.

Sometimes you get incomplete or mistyped information about an address. AvaTax can often resolve addresses with partial information. Let’s say a salesperson from your organization was on the phone with a customer, and they took down all the necessary information, but for some reason they forgot to write down the ZIP code. They provided you with this address:

14 Lawton Road, Wappingers Falls NY

We will send a GET request (more on this in a moment):

```GET /api/v2/addresses/resolve?line1=14%20Lawton%20Rd&city=Wappingers%20Falls&region=NY```
```json
{
  "address": {
    "line1": "14 Lawton Rd",
    "city": "Wappingers Falls",
    "region": "NY"
  },
  "validatedAddresses": [
    {
      "addressType": "StreetOrResidentialAddress",
      "line1": "14 LAWTON RD",
      "line2": "",
      "line3": "",
      "city": "WAPPINGERS FALLS",
      "region": "NY",
      "country": "US",
      "postalCode": "12590-1234",
      "latitude": 41.612867,
      "longitude": -73.931687
    }
  ],
  "coordinates": {
    "latitude": 41.612867,
    "longitude": -73.931687
  },
  "resolutionQuality": "Intersection",
  "taxAuthorities": [
    {
      "avalaraId": "42",
      "jurisdictionName": "NEW YORK",
      "jurisdictionType": "State",
      "signatureCode": "BFEQ"
    },
    {
      "avalaraId": "1859",
      "jurisdictionName": "DUTCHESS",
      "jurisdictionType": "County",
      "signatureCode": "BFRL"
    },
    {
      "avalaraId": "359070",
      "jurisdictionName": "DUTCHESS CO TRANSIT DISTRICT",
      "jurisdictionType": "Special",
      "signatureCode": "BFRM"
    }
  ]
}
```

You can test this out yourself now in our <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddress/" target="_blank">ResolveAddress documentation</a>, one of many Try Now features available for AvaTax endpoints. AvaTax provides both GET and <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Addresses/ResolveAddressPost/" target="_blank">POST Address Resolution endpoints</a> to fit your workflow. The same address as a POST request would be:

```POST /api/v2/addresses/resolve```
```json
{
  "line1": "14 Lawton Rd",
  "city": "Wappingers Falls",
  "region": "NY"
} 
```
The results from both GET and POST API calls contain full information about this address and postal code. We received the correct postal code for 14 Lawton Road, a fully validated postal mailing address, latitude, longitude, and a list of taxing authorities applicable to this location.

<h2>What is all of this data?</h2>
The address object shows the original address you provided. 
```json
"address": {
    "line1": "14 Lawton Rd",
    "city": "Wappingers Falls",
    "region": "NY"
  }
```  
You can use this data in the result set to compare against the validatedAddresses object.
```json
"validatedAddresses": [
    {
      "addressType": "StreetOrResidentialAddress",
      "line1": "14 LAWTON RD",
      "line2": "",
      "line3": "",
      "city": "WAPPINGERS FALLS",
      "region": "NY",
      "country": "US",
      "postalCode": "12590-1234",
      "latitude": 41.612867,
      "longitude": -73.931687
    }
  ]
```  
The validatedAddresses object displays the corrected address. If the raw address and the validated addresses are the same, then you know you didn't mistype anything, and you don't need to correct your user! The validatedAddresses object contains the postal-correct mailing address of the target location. This address object is normalized to postal mailing requirements and can be used for mail sorting.

The coordinates are the best available latitude-longitude measurement of this address. 

```"resolutionQuality": "Intersection",```

The precision available here is measured by the resolutionQuality value; in this case, we didn't match the exact street number, but instead we matched the nearest intersection.

The list of taxAuthorities provides information about which tax authorities have jurisdiction over this address.

```json
"taxAuthorities": [
    {
      "avalaraId": "42",
      "jurisdictionName": "NEW YORK",
      "jurisdictionType": "State",
      "signatureCode": "BFEQ"
    },
    {
      "avalaraId": "1859",
      "jurisdictionName": "DUTCHESS",
      "jurisdictionType": "County",
      "signatureCode": "BFRL"
    },
    {
      "avalaraId": "359070",
      "jurisdictionName": "DUTCHESS CO TRANSIT DISTRICT",
      "jurisdictionType": "Special",
      "signatureCode": "BFRM"
    }
  ]
```  
Next, let’s see what other kinds of results you could get.
<h2>Types of Address Resolution Errors</h2>
If your data is just thoroughly incomplete, AvaTax will try its best to find a valid address. Here’s what would happen if you provide virtually no information at all:
```POST /api/v2/addresses/resolve```
```json
{
  "line1": "2720 W Main Street"
}
```
In this case, there just isn’t enough information in the address to return a valid result. You’ll get an error message that looks like this:
```json
{
    "code": "GetTaxError",
    "number": 300,
    "message": "An Address is incomplete or invalid.",
    "description": "",
    "faultCode": "GetTaxError",
    "helpLink": "/avatax/errors/GetTaxError",
    "refersTo": "Addresses[0]",
    "severity": "Error"
}
```
But if you just had an extra bit of information like a postal code, you’d get a good result again. For example, this request produces a correct validation result:
```POST /api/v2/addresses/resolve```
```json
{
  "line1": "2720 W Main Street",
  "postalCode": "12590"
}
```
Now, what happens if you only have a rough guess of the location? AvaTax will do its best to provide a useful jurisdiction estimate based on a centroid, but it won’t be able to give you a valid mailing address. In this example, there is only a postal code, country, and region. Here’s the request and result:

```POST /api/v2/addresses/resolve```
```json
{
  "postalCode": "98110",
  "region": "WA",
  "country": "US"
}
```
The result shows that we have a rough guess of coordinates, but the resolution quality is low. We consider this a ‘Not Coded’ result. Even though the geocode is somewhat close, we can’t be sure of the actual location they meant. This level of detail might be useful when planning deliveries, but it won’t do for actual shipping – you’ll still have to call the customer back and ask for a full address.
```json
{
  "address": {
    "line1": "",
    "line2": "",
    "line3": "",
    "city": "",
    "region": "WA",
    "country": "US",
    "postalCode": "98110"
  },
  "coordinates": {
    "latitude": 47.640445,
    "longitude": -122.53178
  },
  "resolutionQuality": "NotCoded"
}
```
Next, what happens if you provide what **_looks_** like a good address, but there’s something wrong with it? If I were to try validating the address “123 Main Street” in Irvine, California, I would get an “Undeliverable address” error. That’s because the Main Street in Irvine begins with street number 1000, and there is no such address as 123 Main. In this case, you’ll need to look at the messages component of the result:
```json
  "messages": [
    {
      "summary": "The address is not deliverable.",
      "details": "The physical location exists but there are no homes on this street. One reason might be railroad tracks or rivers running alongside this street, as they would prevent construction of homes in this location.",
      "refersTo": "Address",
      "severity": "Error",
      "source": "Avalara.AvaTax.Services.Address"
    }
  ]
```  
With this information, you should be able to put together address-validation in your user experience. You can show customers map coordinates near to their location easily, and help confirm that your postal code, city name, and region name are correct.

Customers and departments of revenue demand accurate sales tax calculations; they won’t settle for anything less. That’s the minimum barrier to overcome for customer satisfaction, and taxing authorities are making sales tax more complex. Fortunately, with the right sales tax API, you can solve for the critical components that go into accurately calculating sales tax, starting with address validation down to the roof-top level.

That’s where AvaTax comes in. Give our API a test drive for 60 days to see if it is the right solution for your organization. When you sign up for a <a href="https://developer.avalara.com/avatax/signup/" target="_blank">free API trial</a>, you get access to our <a href="https://rest.avatax.com/" target="_blank">full production environment</a>, unlimited API calls (including address validation and deliverability determination), and guidance for your implementation. <a href="https://developer.avalara.com/sdk/" target="_blank">Download the SDK for your language of choice</a> and start sending requests today. 