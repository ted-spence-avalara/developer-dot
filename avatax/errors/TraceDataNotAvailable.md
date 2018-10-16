---
layout: page
title: TraceDataNotAvailable
number: 2000
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The trace data is not available for the date and time selected.

## Example

```json
{
  "code": "TraceDataNotAvailable",
  "target": "Unknown",
  "details": [
    {
      "code": "TraceDataNotAvailable",
      "number": 2000,
      "message": "Trace data for this date is not available.",
      "description": "Trace data is available based on maintenance policies and may change. For older trace data, please contact your account manager.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TraceDataNotAvailable",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Data storage and maintenance policies are subject to change. Your request and response audit logs are not immediately available. Please contact your account manager for retrieval of older trace data.
