---
layout: page
title: UPCCodeNotUnique
number: 1702
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A single UPC code can be defined only once for each company.

## Example

```json
{
  "code": "UPCCodeNotUnique",
  "target": "Unknown",
  "details": [
    {
      "code": "UPCCodeNotUnique",
      "number": 1702,
      "message": "The supplied upc -0- is already active for company -1-",
      "description": "A UPC with the same code is currently active for this company. A UPC code has to be unique in a given date range for a company.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UPCCodeNotUnique",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Universal Product Codes (UPCs) are expected to be unique for each company.  Each company in your account can have its own UPC definitions; but within that company, each UPC code can appear at most once.

You have attempted to create two objects with the same UPC code.  To correct this, please identify only one record you wish to use for a UPC code.
