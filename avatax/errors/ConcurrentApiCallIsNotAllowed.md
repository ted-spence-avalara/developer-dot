---
layout: page
title: ConcurrentApiCallIsNotAllowed
number: 1802
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You have exceeded the number of concurrent requests for this API call.

## Example

```json
{
  "code": "ConcurrentApiCallIsNotAllowed",
  "target": "Unknown",
  "details": [
    {
      "code": "ConcurrentApiCallIsNotAllowed",
      "number": 1802,
      "message": "There is already a SendSales API call in process for -0---1- on -2-. ",
      "description": "Only one API can be called at the same time. Please wait for the first to finish before calling the API again.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ConcurrentApiCallIsNotAllowed",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The API call you made permits only a limited number of concurrent requests.  Your request exceeded this concurrency threshold.

Please restrict your usage of this API to only the specified number of concurrent requests.