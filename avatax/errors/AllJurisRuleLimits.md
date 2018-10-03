---
layout: page
title: AllJurisRuleLimits
number: 84
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The field isAllJuris cannot be set to true at this jurisdiction level.  

## Example

```json
{
  "code": "AllJurisRuleLimits",
  "target": "Unknown",
  "details": [
    {
      "code": "AllJurisRuleLimits",
      "number": 84,
      "message": "Tax rules can only be set to 'All Jurisdictions' in the US and Canada",
      "description": "The field 'isAllJuris' may only be set to true when creating country-level rules in Canada or state-level rules in the United States.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AllJurisRuleLimits",
      "severity": "Error"
    }
  ]
}
```

## Explanation

'All Jurisdictions' tax rules are only applicable in the US and Canada, and this feature is only available for US and Canada tax rules. In the US, isAllJuris can only be true at the `State` level. In Canada, isAllJuris can only be set to true at the `Country` level. 

For US tax rules, if `isAllJuris` is set to `true`, the tax rule will apply to the state, county, city, and special taxing jurisdiction levels. For Canadian tax rules, the tax rule will apply to country and state jurisdiction levels. 
