---
layout: page
title: InvalidRequestContentType
number: 1217
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Invalid request content type in the request.

## Example

```json
{
  "code": "InvalidRequestContentType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidRequestContentType",
      "number": 1217,
      "message": "The request content type is invalid.",
      "description": "The request content type must be either 'multipart/form-data' or empty string.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidRequestContentType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The request content type must be either 'multipart/form-data' or empty string.
