---
layout: page
title: AuthenticationException
number: 30
categories: [AvaTax Error Codes]
disqus: 0
---

## Summary

The credentials you provided to AvaTax could not be validated.

## Example

    {
      "code": "AuthenticationException",
      "target": "Unknown",
      "details": [
        {
          "code": "AuthenticationException",
          "number": 0,
          "message": "The user or account could not be authenticated.",
          "description": "-0-",
          "faultCode": "Client",
          "helpLink": "http://developer.avalara.com/avatax/errors/AuthenticationException",
          "severity": "Exception"
        }
      ]
    }

## Explanation

AvaTax provides multiple modes by which you can authenticate your API call.  You may provide one of the following:

	Basic username:password
	Basic accountid:licensekey
	Bearer token

This error message indicates that the username and password you provided could not be found.  

Common troubleshooting steps:

* Have you forgotten to Base-64 encode your username+password?
* Have you mistyped your username or password?
* Are you attempting to authenticate against the sandbox server when you intended to use the production server, or vice versa?