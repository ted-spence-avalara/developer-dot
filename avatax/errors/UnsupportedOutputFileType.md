---
layout: page
title: UnsupportedOutputFileType
number: 1801
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You must specify either CSV or JSON file formats.

## Example

```json
{
  "code": "UnsupportedOutputFileType",
  "target": "Unknown",
  "details": [
    {
      "code": "UnsupportedOutputFileType",
      "number": 1801,
      "message": "The requested output file type -0- is invalid.",
      "description": "The requested output file type must either be CSV or JSON file.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnsupportedOutputFileType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Please specify either CSV or JSON.
