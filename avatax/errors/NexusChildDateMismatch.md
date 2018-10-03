---
layout: page
title: NexusChildDateMismatch
number: 1501
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Nexus out of date range with its children.

## Example

```json
{
  "code": "NexusChildDateMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "NexusChildDateMismatch",
      "number": 1501,
      "message": "To change nexus declarations for a state or country, you must ensure that all city or local nexus declarations are within range.",
      "description": "Please ensure that the dates for your nexus declaration for the Country: -0-, Region: -1- match with all local jurisdictions within that state or country.  This error occurs when you have a local nexus whose dates fall outside of the boundary EffectiveDate: -8-, EndDate: -9-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NexusChildDateMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

See the description field in your error message for details.
