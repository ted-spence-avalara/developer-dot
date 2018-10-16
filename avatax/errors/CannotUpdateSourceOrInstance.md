---
layout: page
title: CannotUpdateSourceOrInstance
number: 1703
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The DataSource Source and Instance fields cannot be modified.

## Example

```json
{
  "code": "CannotUpdateSourceOrInstance",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotUpdateSourceOrInstance",
      "number": 1703,
      "message": "Source and Instance for a DataSource cannot be modified.",
      "description": "For a DataSource Source and Instance are immutable fields.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotUpdateSourceOrInstance",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The DataSource Source and Instance fields are immutable. Please update your request to the correct Source and Instance for your company, and retry your request.
