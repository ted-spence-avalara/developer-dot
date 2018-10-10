---
layout: page
title: InvalidTaxProfile
number: 1901
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The tax profile must be a valid ZIP file.

## Example

```json
{
  "code": "InvalidTaxProfile",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidTaxProfile",
      "number": 1901,
      "message": "The tax profile could not be read.",
      "description": "Ensure that the provided tax profile is a valid ZIP file.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxProfile",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The tax profile cannot be read.  Please check the tax profile ZIP and try your request again.

The Tax Profile Import API is only available to Technical Support Administrator roles.
