---
layout: page
title: CannotDeleteParentBeforeChildNexus
number: 1500
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

TBD

## Example

```json
{
  "code": "CannotDeleteParentBeforeChildNexus",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotDeleteParentBeforeChildNexus",
      "number": 1500,
      "message": "The nexus can't be deleted because child nexus exists.",
      "description": "You cannot delete or end-date your nexus for -0- because you currently have declared nexus in -1- -2- jurisdictions in -0-. Please delete or end-date those nexus first before changing the -0- nexus.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotDeleteParentBeforeChildNexus",
      "severity": "Error"
    }
  ]
}
```

## Explanation

TBD
