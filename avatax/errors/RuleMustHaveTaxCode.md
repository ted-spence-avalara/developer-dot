---
layout: page
title: RuleMustHaveTaxCode
number: 82
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A tax rule with type ProductTaxabilityRule cannot have a null tax code or be assigned to all tax codes. 

## Example

```json
{
  "code": "RuleMustHaveTaxCode",
  "target": "Unknown",
  "details": [
    {
      "code": "RuleMustHaveTaxCode",
      "number": 82,
      "message": "A product taxability rule must be assigned to a specific tax code",
      "description": "The rule type 'ProductTaxabilityRule' must be assigned to a specific tax code.  It cannot be assigned to a null tax code or to all tax codes.  Please try creating the rule again with a tax code value.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RuleMustHaveTaxCode",
      "severity": "Error"
    }
  ]
}
```

## Explanation

When creating a TaxRule with type ProductTaxabilityRule, a specific TaxCode must be included. The `TaxCode` field is optional in some cases, but leaving `TaxCode` and `TaxCodeId` fields empty will result in an error. To search for appropriate tax codes, use the <a href="" target="_blank">`ListTaxCodes` API</a>. You may also use the <a href="https://taxcode.avatax.avalara.com/" target="_blank">Avalara Tax Code Search page</a>.
