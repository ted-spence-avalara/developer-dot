---
layout: page
title: ErrorReadingTaxProfileEntry
number: 1903
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

AvaTax was unable to parse your tax profile entry. 

## Example

```json
{
  "code": "ErrorReadingTaxProfileEntry",
  "target": "Unknown",
  "details": [
    {
      "code": "ErrorReadingTaxProfileEntry",
      "number": 1903,
      "message": "The tax profile entry '-0-' could not be read.",
      "description": "The tax profile entry may be missing, corrupt, using an unsupported compression method, or containing the incorrect type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ErrorReadingTaxProfileEntry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The company tax profile is missing, corrupt, incorrect type, or missing. Please check the company tax profile and try your request again. 

The Tax Profile Import API is only available to Technical Support Administrator roles.

