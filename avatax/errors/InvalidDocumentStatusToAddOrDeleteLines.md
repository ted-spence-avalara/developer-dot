---
layout: page
title: InvalidDocumentStatusToAddOrDeleteLines
number: 1700
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This document is voided, cannot add or delete lines.

## Example

```json
{
  "code": "InvalidDocumentStatusToAddOrDeleteLines",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentStatusToAddOrDeleteLines",
      "number": 1700,
      "message": "This document is voided, cannot add or delete lines.",
      "description": "The document -0- is voided. You cannot add or delete lines from a voided document.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentStatusToAddOrDeleteLines",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Voided document/transaction cannot be edited in AvaTax, please create a new transaction/document with the changes.
