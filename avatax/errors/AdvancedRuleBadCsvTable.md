---
layout: page
title: AdvancedRuleBadCsvTable
number: 1601
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The advanced rule table did not contain valid CSV file.

## Example

```json
{
  "code": "AdvancedRuleBadCsvTable",
  "target": "Unknown",
  "details": [
    {
      "code": "AdvancedRuleBadCsvTable",
      "number": 1601,
      "message": "The advanced rule table did not contain valid CSV.",
      "description": "An advanced rule table must be a valid CSV file, where all rows have the same number of columns.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AdvancedRuleBadCsvTable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please provide a valid CSV file, note that all rows should have the same number of columns.
