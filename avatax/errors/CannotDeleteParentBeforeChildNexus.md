---
layout: page
title: CannotDeleteParentBeforeChildNexus
number: 1500
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The nexus cannot be deleted due to child nexus tied to it.

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

Nexus must be deleted from the child(s) up to the parent if there are child(s) nexus.
