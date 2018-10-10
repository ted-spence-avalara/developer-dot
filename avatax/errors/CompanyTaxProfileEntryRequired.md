---
layout: page
title: CompanyTaxProfileEntryRequired
number: 1902
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The import tax profile request is missing a company model and company tax profile.

## Example

```json
{
  "code": "CompanyTaxProfileEntryRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "CompanyTaxProfileEntryRequired",
      "number": 1902,
      "message": "A company tax profile entry is required.",
      "description": "The tax profile should contain a '-0-' file with the company model you wish to import.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CompanyTaxProfileEntryRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When importing a tax profile, the request must include a company model with a company tax profile.  

The Tax Profile Import API is only available to Technical Support Administrator roles.
