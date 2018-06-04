---
layout: page
title: InvalidEntry
number: 197
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Invalid entry.

## Example

```json
{
  "code": "InvalidEntry",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidEntry",
      "number": 197,
      "message": "The -0- provided does not exist in the database ",
      "description": "The -0- provided exist in the database. Please check your input data.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidEntry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The provided input is invalid, see the description on your error to determine the exact field.
