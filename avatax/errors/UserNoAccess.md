---
layout: page
title: UserNoAccess
number: 196
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This user has a security role that blocks usage of this service. 

## Example

```json
{
  "code": "UserNoAccess",
  "target": "Unknown",
  "details": [
    {
      "code": "UserNoAccess",
      "number": 196,
      "message": "User '-0-' with Id '-1-' has a 'NoAccess' security role.",
      "description": "User with 'NoAccess' security role cannot use this service.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UserNoAccess",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

You attempted to use a service for which your security role is not allowed. Please contact your customer support representative if you think this message is in error. 
