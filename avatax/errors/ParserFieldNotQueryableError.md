---
layout: page
title: ParserFieldNotQueryableError
number: 1408
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This field is not queryable.

## Example

```json
{
  "code": "ParserFieldNotQueryableError",
  "target": "Unknown",
  "details": [
    {
      "code": "ParserFieldNotQueryableError",
      "number": 1408,
      "message": "The field '-0-' in the query '-1-' is not queryable.",
      "description": "The field '-0-' in the query '-1-' is not queryable.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldNotQueryableError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please note that this query cannot be queried.
