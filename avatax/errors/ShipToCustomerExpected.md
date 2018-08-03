---
layout: page
title: ShipToCustomerExpected
number: 1222
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The API call you made expects a ShipTo customer record, but you supplied a BillTo customer instead.

## Example

```json
{
  "code": "ShipToCustomerExpected",
  "target": "Unknown",
  "details": [
    {
      "code": "ShipToCustomerExpected",
      "number": 1222,
      "message": "Customer -0- is not a ShipTo customer.",
      "description": "Customer -0- should be a ShipTo customer to set parent.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ShipToCustomerExpected",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A customer record in AvaTax can be either a ShipTo or BillTo customer record.  This means that you can keep track of multiple addresses, one for each address where you deliver products and one for each billto address where you send the bills for those transactions.

The API you called requires a ShipTo customer record, but you provided a BillTo customer instead.
