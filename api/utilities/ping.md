---
layout: api
title: Ping API
date: 2018-06-05 13:00
author: Ted Spence
comments: true
categories: [avatax, howto]
product: avatax
doctype: blog
disqus: 1
---

# Ping

|PURPOSE|Tests connectivity and version of the service|
|HTTP VERB||
|URL (SANDBOX)||
|URL (PRODUCTION)||
|CONTENT-TYPE||
|RESPONSE BODY||

## Description

This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even if you do not have verified connection credentials. The results of this API call will help you determine whether your computer can contact AvaTax via the network, whether your authentication credentials are recognized, and the roundtrip time it takes to communicate with AvaTax.

## Relevant Blog Posts

* [Performance Tuning with AvaTax](https://developer.avalara.com/blog/2017/04/18/performance-tuning-with-avatax)
* [Troubleshooting Connectivity Problems](https://developer.avalara.com/blog/2017/05/15/troubleshooting-connectivity-problems)

## Parameters

|LOCATION|PARAMETER|ATTRIBUTES|SUMMARY|
|Header|X-Avalara-Client|Optional, string|Identifies the software you are using to call this API. For more information on the client header, see [Client Headers](https://developer.avalara.com/avatax/client-headers/) .|

## Try Ping API Now

<div>
    <div class="try-it-now-header collapsed" data-target="#Ping-console-body" data-toggle="collapse" id="Ping-console" aria-expanded="false">
        <div class="documentation-expand-icon" id="Ping-console-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;">
                <g transform="rotate(0 256 256)">
                    <g>
                        <path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"/>
                        <polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"/>
                    </g>
                </g>
            </svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Try Ping now!</h3>
    </div>
    <div class="collapse" id="Ping-console-body" aria-expanded="false" style="height: 0px;">
        <div>
            <div class="alert alert-warning alert-dismissible" id="tokenExpirationAlert" style="display: none;">
                <strong>Warning!</strong>
                <span> Access token has expired. Log out and login again to renew.</span>
                <button aria-label="Close" class="close" data-dismiss="alert" type="button">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="row api-console">
                <div class="col-md-4 col-xs-12 api-console-form-wrapper">
                    <div>
                        <div>
                            <h3 style="display: inline-block;">Input</h3>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <button class="btn btn-primary submit" type="button">
                                <!-- react-text: 89 -->
                                <!-- /react-text -->
                                <!-- react-text: 90 -->Submit<!-- /react-text -->
                            </button>
                            <span class="m-l-1 clickable hdr-btn-adj-text" type="reset">Reset</span>
                        </div>
                        <div class="consoleScroll"/>
                        <div style="background: blue; height: auto;"/>
                    </div>
                </div>
                <div class="col-md-8 col-xs-12 api-console-output">
                    <div>
                        <h5 class="console-output-header">
                            <span>API Endpoint</span>
                        </h5>
                        <div class="code-snippet-plaintext">https://sandbox-rest.avatax.com/api/v2/utilities/ping</div>
                        <h5 class="console-output-header">Method</h5>
                        <div class="code-snippet-plaintext">GET</div>
                        <div>
                            <h5 class="console-output-header">Response</h5>
                            <div class="code-snippet respScroll">
                                <pre> </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="v2Links">
            <p>Advanced:</p>
            <a href="https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Utilities/Ping?referrer=&amp;lastReferrer=developer.avalara.com&amp;sessionId=1536077210233">https://sandbox-rest.avatax.com/swagger/ui/index.html#!/Utilities/Ping</a>
            <br>
                <a href="https://rest.avatax.com/swagger/ui/index.html#!/Utilities/Ping?referrer=&amp;lastReferrer=developer.avalara.com&amp;sessionId=1536077210233">https://rest.avatax.com/swagger/ui/index.html#!/Utilities/Ping</a>
            </div>
        </div>
    </div>
    
## Example Request

```json
{
  "version": "1.0.0.0",
  "authenticated": true,
  "authenticationType": "UsernamePassword",
  "authenticatedUserName": "TestUser",
  "authenticatedUserId": 98765,
  "authenticatedAccountId": 123456789,
  "crmid": "1111"
}
```

## Example Response

```json
{
  "version": "1.0.0.0",
  "authenticated": true,
  "authenticationType": "UsernamePassword",
  "authenticatedUserName": "TestUser",
  "authenticatedUserId": 98765,
  "authenticatedAccountId": 123456789,
  "crmid": "1111"
}
```

## Example Using CURL

```
curl
    -X GET
    -H 'Accept: application/json'
    -H 'Authorization: Basic aHR0cHdhdGNoOmY='
    https://sandbox-rest.avatax.com/api/v2/utilities/ping
```
