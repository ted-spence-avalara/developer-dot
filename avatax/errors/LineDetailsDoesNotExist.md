---
layout: page
title: LineDetailsDoesNotExist
number: 1104
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The specified line detail ID cannot be found.

## Example

```json
{
  "code": "LineDetailsDoesNotExist",
  "target": "Unknown",
  "details": [
    {
      "code": "LineDetailsDoesNotExist",
      "number": 1104,
      "message": "The line detail doesn't exist.",
      "description": "Line detail with id -0- does not exist.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LineDetailsDoesNotExist",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This error occurs when a line detail input model cannot be found. 

When calling the [TagTransaction](/api/v2/companies/{companyId}/transactions/tag) API, you must specify the lines that you wish to tag.  If you specify a line ID that cannot be found, you will receive this error message.
