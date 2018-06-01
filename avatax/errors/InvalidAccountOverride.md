---
layout: page
title: InvalidAccountOverride
number: 1406
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Invalid AccountOverride format.

## Example

```json
{
  "code": "InvalidAccountOverride",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAccountOverride",
      "number": 1406,
      "message": "The AccountOverride format is not valid.",
      "description": "Please append the overriding AccountId to your TechnicalSupport UserName, separated with '%'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAccountOverride",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please append the overriding AccountId to your TechnicalSupport UserName, separated with '%'.
