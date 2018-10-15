---
layout: page
title: UnspecifiedTimeZone
number: 119
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You specified a date/time value without a timezone.

## Example

```json
{
  "code": "UnspecifiedTimeZone",
  "target": "Unknown",
  "details": [
    {
      "code": "UnspecifiedTimeZone",
      "number": 119,
      "message": "A timezone could not be determined from the datetime.",
      "description": "Please include a valid ISO 8601 time zone designator (e.g. 'Z' or '+00:00').",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnspecifiedTimeZone",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please indicate the specified timezone for the date/time field.
