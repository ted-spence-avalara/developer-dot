---
layout: page
title: ExemptionPaginationLimits
number: 1218
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

AvaTax exemption data does not support this type of pagination.

## Example

```json
{
  "code": "ExemptionPaginationLimits",
  "target": "Unknown",
  "details": [
    {
      "code": "ExemptionPaginationLimits",
      "number": 1218,
      "message": "AvaTax exemption data does not support this type of pagination.",
      "description": "When fetching AvaTax exemption data, you must fetch on a per-page basis where all pages have equal size.  You attempted to fetch -0- records with a page size of -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ExemptionPaginationLimits",
      "severity": "Error"
    }
  ]
}
```

## Explanation

See error description in your error for full detail.
