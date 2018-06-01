---
layout: page
title: ExemptionSortLimits
number: 1219
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

AvaTax exemption data does not support sorting by more than one field.

## Example

```json
{
  "code": "ExemptionSortLimits",
  "target": "Unknown",
  "details": [
    {
      "code": "ExemptionSortLimits",
      "number": 1219,
      "message": "AvaTax exemption data does not support sorting by more than one field.",
      "description": "When fetching AvaTax exemption data, you may only sort by a single field at a time.  You attempted to sort by the following fields: '-0-'",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ExemptionSortLimits",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax can only sort your exemption data a single field at a time.
