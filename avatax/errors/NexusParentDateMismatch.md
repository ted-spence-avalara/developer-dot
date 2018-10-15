---
layout: page
title: NexusParentDateMismatch
number: 159
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You declared nexus on a date when that nexus was not available.

## Example

```json
{
  "code": "NexusParentDateMismatch",
  "target": "Unknown",
  "details": [
    {
      "code": "NexusParentDateMismatch",
      "number": 159,
      "message": "To declare nexus in a city or local jurisdiction, you must also declare nexus in the state or country.",
      "description": "Please ensure that the dates for your nexus declaration match with the dates for the nexus declaration at the state or country level.  Affected nexus: JurisTypeId: -3-, JurisName: -4-, EffectiveDate: -8-, EndDate: -9- has conflicting effective dates with its parent in Country: -0-, Region: -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NexusParentDateMismatch",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When you declare that your company has nexus in a particular jurisdiction, AvaTax checks to make sure that nexus was in existence on the dates you specified.

Since tax authorities create and change their tax rules periodically, some locations are only available for nexus declarations on some dates.  This error message occurs when there is a mismatch between dates.
