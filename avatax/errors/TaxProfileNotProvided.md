---
layout: page
title: TaxProfileNotProvided
number: 1900
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A tax profile was not included in your request. 

## Example

```json
{
  "code": "TaxProfileNotProvided",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxProfileNotProvided",
      "number": 1900,
      "message": "A tax profile was not provided.",
      "description": "The request body did not contain a tax profile to import.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxProfileNotProvided",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please include a tax profile in the request body. 

The Tax Profile Import API is only available to Technical Support Admin roles.