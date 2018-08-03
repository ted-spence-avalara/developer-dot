---
layout: page
title: BillToCustomerExpected
number: 1221
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The API call you made requires a BillTo customer as a parameter, but you used a ShipTo customer.

## Example

```json
{
  "code": "BillToCustomerExpected",
  "target": "Unknown",
  "details": [
    {
      "code": "BillToCustomerExpected",
      "number": 1221,
      "message": "Customer -0- is not a BillTo customer.",
      "description": "Customer -0- should be a BillTo customer to set parent.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/BillToCustomerExpected",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A customer record in AvaTax can be either a ShipTo or BillTo customer record.  This means that you can keep track of multiple addresses, one for each address where you deliver products and one for each billto address where you send the bills for those transactions.

The API you called requires a BillTo customer record, but you provided a ShipTo customer instead.