---
layout: page
title: CertificatesNotSetup
number: 1205
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The company has not been configured with this certificate.

## Example

```json
{
  "code": "CertificatesNotSetup",
  "target": "Unknown",
  "details": [
    {
      "code": "CertificatesNotSetup",
      "number": 1205,
      "message": "This company has not been configured.",
      "description": "The company '-0-' is not found for exemption certificates.",
      "faultCode": "Server",
      "helpLink": "http://developer.avalara.com/avatax/errors/CertificatesNotSetup",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please config your certifcate to include this company in your admin console or through 
https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Certificates/RequestCertificateSetup/
