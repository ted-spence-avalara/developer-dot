---
layout: page
title: TaxRuleRequiresNexus
number: 1701
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Nexus is not declared in this region, therefore no tax rule can be created.

## Example

```json
{
  "code": "TaxRuleRequiresNexus",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxRuleRequiresNexus",
      "number": 1701,
      "message": "You must declare nexus in -0- before creating this tax rule.",
      "description": "Please use the 'CreateNexus' API to create a Nexus for '-0-' before you create this tax rule.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxRuleRequiresNexus",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please create a nexus before declaring tax rule in this region/state, by using CreateNexus API.
