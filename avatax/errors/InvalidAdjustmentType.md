---
layout: page
title: InvalidAdjustmentType
number: 99
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The adjustment type record permits only a specified list of values.

## Example

```json
{
  "code": "InvalidAdjustmentType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAdjustmentType",
      "number": 99,
      "message": "Adjustment Type must be valid for this form",
      "description": "The adjustment type entered must be valid for the form.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAdjustmentType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please check the value you submitted for `adjustmentType` and set it to a correct value.