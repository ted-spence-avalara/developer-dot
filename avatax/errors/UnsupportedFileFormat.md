---
layout: page
title: UnsupportedFileFormat
number: 1800
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The requested output file format is invalid.

## Example

```json
{
  "code": "UnsupportedFileFormat",
  "target": "Unknown",
  "details": [
    {
      "code": "UnsupportedFileFormat",
      "number": 1800,
      "message": "The requested output file format -0- is invalid.",
      "description": "The requested output file format must either be DMA or STANDARD csv file.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnsupportedFileFormat",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The requested output file format must either be DMA or STANDARD csv file.
