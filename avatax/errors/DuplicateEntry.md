---
layout: page
title: DuplicateEntry
number: 193
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The key already exists. The key must be unique.

## Example

```json
{
  "code": "DuplicateEntry",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateEntry",
      "number": 193,
      "message": "The object is a duplicate of an existing object.",
      "description": "The object that you are trying to create already exists. Please check your input data.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateEntry",
      "severity": "Error"
    }
  ]
}
```

## Explanation

AvaTax allows users to designate custom keys for their own objects, such as TaxRules. 

Attempting to use the same key more than once for the same object type results in this error. 
