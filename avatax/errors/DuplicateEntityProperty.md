---
layout: page
title: DuplicateEntityProperty
number: 149
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to create an object with a duplicate name or code.

## Example

```json
{
  "code": "DuplicateEntityProperty",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateEntityProperty",
      "number": 149,
      "message": "Object is a duplicate of an existing object.",
      "description": "Please rename the object and try again. Each -0- object must have a unique identity. The identity of a -0- is determined by the fields: -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateEntityProperty",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Objects within your account must have unique names, email addresses, and codes.  You cannot create two companies with the same company code, two locations with the same location code, or two contacts with the same email address.

Please check the information you are creating and ensure that this object is unique.
