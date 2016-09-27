---
layout: page
title: RateDependsEuropeError
number: 133
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The RateDepends option is only valid for countries in the European Union.

## Example

    {
      "code": "RateDependsEuropeError",
      "target": "Unknown",
      "details": [
        {
          "code": "RateDependsEuropeError",
          "number": 0,
          "message": "RateDepends option only valid for countries in the European Union.",
          "description": "-0-",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/RateDependsEuropeError",
          "severity": "Error"
        }
      ]
    }

## Explanation

You attempted to create a TaxRule using the RateDepends option for a country that is outside of the European Union.

Please remove the RateDepends option or change the country code to be within the EU.