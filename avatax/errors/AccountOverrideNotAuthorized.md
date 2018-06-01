---
layout: page
title: AccountOverrideNotAuthorized
number: 1407
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The current role you are in does not permit account override function

## Example

```json
{
  "code": "AccountOverrideNotAuthorized",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountOverrideNotAuthorized",
      "number": 1407,
      "message": "Your user role '-0-' is not authorized for account override.",
      "description": "Only 'TechnicalSupportAdmin' and 'TechnicalSupportUser' are allowed for account overrides.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountOverrideNotAuthorized",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Note that only Avalara Technical Support users would have permission to override accounts
