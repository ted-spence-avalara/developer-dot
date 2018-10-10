---
layout: page
title: RuleTypeRestricted
number: 83
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to use a restricted tax rule type.

## Example

```json
{
  "code": "RuleTypeRestricted",
  "target": "Unknown",
  "details": [
    {
      "code": "RuleTypeRestricted",
      "number": 83,
      "message": "The tax rule type -0- is restricted",
      "description": "The rule type '-0-' is restricted and can be used by Avalara content team only.  Please consider using a different tax rule type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RuleTypeRestricted",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Tax rules represent a change to the behavior of the AvaTax engine for specific products in specifc jurisdictions. If you have received a custom tax ruling from an auditor that changes the taxability of your goods or services, create a TaxRule to override how AvaTax will calculate tax for you.

Only Avalara Content Team members can create tax rules of this type. Please select a different tax type for your tax rule. The full list of <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/MatchingTaxType/" target="_blank">tax types can be viewed in the Avalara Developer documentation</a>.
