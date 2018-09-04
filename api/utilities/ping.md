---
layout: page
title: Ping API
date: 2018-06-05 13:00
author: Ted Spence
comments: true
categories: [avatax, api]
product: avatax
doctype: avatax-rest-api
api: Ping
disqus: 1
---

<table class="styled-table">
    <tr>
        <th>PURPOSE</th>
        <td>Tests connectivity and version of the service</td>
    </tr>
    <tr>
        <th>HTTP VERB</th>
        <td><code class="highlight-rouge">GET</code></td>
    </tr>
    <tr>
        <th>URL (SANDBOX)</th>
        <td><a href="https://sandbox-rest.avatax.com/api/v2/utilities/ping">https://sandbox-rest.avatax.com/api/v2/utilities/ping</a></td>
    </tr>
    <tr>
        <th>URL (PRODUCTION)</th>
        <td><a href="https://rest.avatax.com/api/v2/utilities/ping">https://rest.avatax.com/api/v2/utilities/ping</a></td>
    </tr>
    <tr>
        <th>CONTENT-TYPE</th>
        <td><code class="highlight-rouge">application/json</code></td>
    </tr>
    <tr>
        <th>RESPONSE BODY</th>
        <td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/PingResultModel">PingResultModel</a></td>
    </tr>
</table>

## Description

This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even if you do not have verified connection credentials. The results of this API call will help you determine whether your computer can contact AvaTax via the network, whether your authentication credentials are recognized, and the roundtrip time it takes to communicate with AvaTax.

## Relevant Blog Posts

<ul class="normal">
    <li><a href="https://developer.avalara.com/blog/2017/04/18/performance-tuning-with-avatax">Performance Tuning with AvaTax</a></li>
    <li><a href="https://developer.avalara.com/blog/2017/05/15/troubleshooting-connectivity-problems">Troubleshooting Connectivity Problems</a></li>
</ul>

## Parameters

<table class="styled-table">
    <thead>
        <tr>
            <th>LOCATION</th>
            <th>PARAMETER</th>
            <th>ATTRIBUTES</th>
            <th>SUMMARY</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Header</td>
            <td>X-Avalara-Client</td>
            <td>Optional, string</td>
            <td>Identifies the software you are using to call this API. For more information on the client header, see <a href="https://developer.avalara.com/avatax/client-headers/">Client Headers</a>.</td>
        </tr>
    </tbody>
</table>

<div>
    <div class="try-it-now-header" data-target="#Ping-console-body-request" data-toggle="collapse" id="Ping-console-body">
        <div class="documentation-expand-icon rotate" id="Ping-console-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Request</h3>
    </div>
    <div class="collapse" id="Ping-console-body-request">

{% highlight json %}
{
  "version": "1.0.0.0",
  "authenticated": true,
  "authenticationType": "UsernamePassword",
  "authenticatedUserName": "TestUser",
  "authenticatedUserId": 98765,
  "authenticatedAccountId": 123456789,
  "crmid": "1111"
}
{% endhighlight %}

    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#Ping-console-body-response" data-toggle="collapse" id="Ping-console-body">
        <div class="documentation-expand-icon rotate" id="Ping-console-icon-response" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Response</h3>
    </div>
    <div class="collapse" id="Ping-console-body-response">

{% highlight json %}
{
  "version": "1.0.0.0",
  "authenticated": true,
  "authenticationType": "UsernamePassword",
  "authenticatedUserName": "TestUser",
  "authenticatedUserId": 98765,
  "authenticatedAccountId": 123456789,
  "crmid": "1111"
}
{% endhighlight %}

    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#Ping-console-body-curl" data-toggle="collapse" id="Ping-console-body">
        <div class="documentation-expand-icon rotate" id="Ping-console-icon-curl" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Using CURL</h3>
    </div>
    <div class="collapse" id="Ping-console-body-curl">

{% highlight shell %}
curl
    -X GET
    -H 'Accept: application/json'
    -H 'Authorization: Basic aHR0cHdhdGNoOmY='
    https://sandbox-rest.avatax.com/api/v2/utilities/ping
{% endhighlight %}

    </div>
</div>
