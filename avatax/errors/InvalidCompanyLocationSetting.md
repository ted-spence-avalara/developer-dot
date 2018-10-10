---
layout: page
title: InvalidCompanyLocationSetting
number: 85
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You used a company location that does not exist.

## Example

```json
{
  "code": "InvalidCompanyLocationSetting",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidCompanyLocationSetting",
      "number": 85,
      "message": "The Location setting -0- could not be found.",
      "description": "Please use the /api/v2/definitions/locationquestions api to get a list of valid questions for this location.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidCompanyLocationSetting",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The specified company location does not exist. Some tax jurisdictions require that you register or provide additional information to configure each physical place where your company does business. This information is not usually required in order to calculate tax correctly, but is almost always required to file your tax correctly. 

Please use the <a href="/api/v2/definitions/locationquestions">ListLocationQuestionsByAddress</a> API to determine which additional questions you must answer when declaring a location in certain taxing jurisdictions. You can call this API call for any address and obtain information about what questions must be answered in order to properly file tax in that location.
