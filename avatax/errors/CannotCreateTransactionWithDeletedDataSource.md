---
layout: page
title: CannotCreateTransactionWithDeletedDataSource
number: 1104
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The selected DataSource has been deleted and cannot be used for creating a transaction.

## Example

```json
{
  "code": "CannotCreateTransactionWithDeletedDataSource",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotCreateTransactionWithDeletedDataSource",
      "number": 1104,
      "message": "The DataSource -0- has been deleted",
      "description": "A transaction cannot be created by a deleted datasource.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotCreateTransactionWithDeletedDataSource",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The designated DataSource has been deleted. Please update the DataSource to an active data source instance.
