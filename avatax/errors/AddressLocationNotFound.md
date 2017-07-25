---
layout: page
title: AddressLocationNotFound
number: 310
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The specified location code does not exist.

## Example

```json
{
  "code": "AddressLocationNotFound",
  "target": "Unknown",
  "details": [
    {
      "code": "AddressLocationNotFound",
      "number": 310,
      "message": "The location code was not found.",
      "description": "The location code -2- could not be found within company -1- and account -0-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AddressLocationNotFound",
      "severity": "Error"
    }
  ]
}
```

## Explanation

You attempted to use a location code with an AvaTax API, but that location code could not be found.  For example, here's one way to use an address in the Transaction Create API:

```json
{
  "type": "SalesInvoice",
  "companyCode": "DEFAULT",
  "date": "2016-12-30T00:00:00-08:00",
  "customerCode": "ABC",
  "addresses": {
    "ShipFrom": {
      "locationCode": "MAINOFFICE"
    },
    "ShipTo": {
      "line1": "123 Main Street",
      "city": "Irvine",
      "region": "CA",
      "postalCode": "92615",
      "country": "US"
    }
  },
  "lines": [
    {
      "amount": 100
    }
  ]
}
```

Some steps to check:

<ul class="normal">
    <li>Did you use the correct company code when creating the transaction?</li>
    <li>Did you use the correct location code?</li>
    <li>Can you fetch the location using the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Locations/QueryLocations/">QueryLocations API</a>?</li>
</ul>
