---
layout: page
title: CustomerCantBeBothShipToAndBillTo
number: 1220
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An AvaTax customer record can be either a BillTo customer address or a ShipTo customer address, but not both.

## Example

```json
{
  "code": "CustomerCantBeBothShipToAndBillTo",
  "target": "Unknown",
  "details": [
    {
      "code": "CustomerCantBeBothShipToAndBillTo",
      "number": 1220,
      "message": "Customer -0- is ShipTo customer and BillTo customer.",
      "description": "Customer -0- can be either ShipTo customer or BillTo customer, but not both.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CustomerCantBeBothShipToAndBillTo",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A customer record represents an address on file for a customer.  Each address can represent a billing address, or a shipping address, but not both.