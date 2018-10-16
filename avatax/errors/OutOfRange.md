---
layout: page
title: OutOfRange
number: 118
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to set a value that must be within a range, but your value was outside of the range.

## Example

```json
{
  "code": "OutOfRange",
  "target": "Unknown",
  "details": [
    {
      "code": "OutOfRange",
      "number": 118,
      "message": "The request is out of range.",
      "description": "Please ensure the request is between -0- and -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/OutOfRange",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax requires the value of this field to be within the defined parameters.  Please review the data you attempted to upload and correct it so that it is within the specified range.
