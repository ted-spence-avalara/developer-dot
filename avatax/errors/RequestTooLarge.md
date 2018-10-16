---
layout: page
title: RequestTooLarge
number: 187
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The request you submitted was too large to process.

## Example

```json
{
  "code": "RequestTooLarge",
  "target": "Unknown",
  "details": [
    {
      "code": "RequestTooLarge",
      "number": 187,
      "message": "The request was too large.",
      "description": "The request exceeded -0-. Please consider narrowing the scope of the request.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RequestTooLarge",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please review the request you submitted and reduce the size.
