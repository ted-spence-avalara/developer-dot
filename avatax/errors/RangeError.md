---
layout: page
title: RangeError
number: 6
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to set a value that must be within a range, but your value was outside of the range.

## Example

```json
{
  "code": "RangeError",
  "target": "Unknown",
  "details": [
    {
      "code": "RangeError",
      "number": 6,
      "message": "Field -0- is out of bounds.",
      "description": "-0- is expected to be between -1- and -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RangeError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax requires the value of this field to be within the defined parameters.  Please review the data you attempted to upload and correct it so that it is within the specified range.
