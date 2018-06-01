---
layout: page
title: IncorrectFieldValue
number: 174
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to call the Reporting API with an incorrect field value.

## Example

```json
{
  "code": "IncorrectFieldValue",
  "target": "Unknown",
  "details": [
    {
      "code": "IncorrectFieldValue",
      "number": 174,
      "message": "Incorrect data type for '-0-'.",
      "description": "The data type of '-0-' is '-4-'. The value '-1-' cannot be converted to '-4-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/IncorrectFieldValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please review the error message and try the reporting API again with corrected parameters.
