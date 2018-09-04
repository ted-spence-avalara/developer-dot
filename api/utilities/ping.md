---
layout: page
title: Ping API
date: 2018-09-04
comments: true
categories: [avatax, api]
product: avatax
doctype: api-references
api-category: Utilities
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
        <td>https://sandbox-rest.avatax.com/api/v2/utilities/ping</td>

    </tr>
    <tr>
        <th>URL (PRODUCTION)</th>
        <td>https://rest.avatax.com/api/v2/utilities/ping</td>

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

<p>Check connectivity to AvaTax and return information about the AvaTax API server.</p>
<p>This API is intended to help you verify that your connection is working.  This API will always succeed and will
never return a error.  It provides basic information about the server you connect to:</p>
<ul class="normal">
<li><code>version</code> - The version number of the AvaTax API server that responded to your request.  The AvaTax API version number is updated once per month during Avalara's update process.</li>
<li><code>authenticated</code> - A boolean flag indicating whether or not you sent valid credentials with your API request.</li>
<li><code>authenticationType</code> - If you provided valid credentials to the API, this field will tell you whether you used Bearer, Username, or LicenseKey authentication.</li>
<li><code>authenticatedUserName</code> - If you provided valid credentials to the API, this field will tell you the username of the currently logged in user.</li>
<li><code>authenticatedUserId</code> - If you provided valid credentials to the API, this field will tell you the user ID of the currently logged in user.</li>
<li><code>authenticatedAccountId</code> - If you provided valid credentials to the API, this field will contain the account ID of the currently logged in user.</li>
</ul>
<p>This API helps diagnose connectivity problems between your application and AvaTax; you may call this API even
if you do not have verified connection credentials.  If this API fails, either your computer is not connected to
the internet, or there is a routing problem between your office and Avalara, or the Avalara server is not available.
For more information on the uptime of AvaTax, please see <a href="https://status.avalara.com/">Avalara's AvaTax Status Page</a>.</p>



## Relevant Blog Posts

<ul class="normal">
{% for post in site.posts %}
   {% if post.relevantapimethods contains 'Ping' %}
       <li><a href="{{ post.url }}">{{ post.title }}</a></li>
   {% endif %}
{% endfor %}
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
<td><code class="highlight-rouge">X-Avalara-Client</code></td>
<td>String, Optional</td>
<td><p>Identifies the software you are using to call this API.  For more information on the client header, see <a href="https://developer.avalara.com/avatax/client-headers/">Client Headers</a> .</p>
</td>
</tr>

    </tbody>
</table>


<div>
    <div class="try-it-now-header" data-target="#try-it-now" data-toggle="collapse" OnClick="$('#try-it-now-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="try-it-now-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Try It Now</h3>
    </div>
    <div class="collapse" id="try-it-now">

        <div class="api-console-output">
             <h5 class="console-output-header">
                 <span>API Endpoint</span>
             </h5>
             <div class="code-snippet-plaintext">https://sandbox-rest.avatax.com//api/v2/utilities/ping</div>
             <h5 class="console-output-header">Method</h5>
             <div class="code-snippet-plaintext">GET</div>
             <div class="row" style="margin-bottom: 8px;">
                 <div class="col-md-6 console-req-container">
                     <h5 class="console-output-header">
                         <!-- react-text: 1205 -->Request <!-- /react-text -->
                         <i class="glyphicon glyphicon-pencil"></i>
                     </h5>
                     <div class="code-snippet reqScroll">
                         <textarea id="console-input-sample">
                         </textarea>
                         <textarea id="console_input">{ }</textarea>
                     </div>
                 </div>
                 <div class="col-md-6 console-res-container">
                     <h5 class="console-output-header">Response</h5>
                     <div class="code-snippet respScroll">
                         <pre> </pre>
                     </div>
                 </div>
             </div>
             <div>
                 <button class="btn btn-secondary" style="color: #000000;" type="button" OnClick="$('#console-input').empty().append($('#console-input-sample').text());">Fill with Sample Data</button>
                 <button class="btn btn-secondary" style="color: #000000;" type="button" OnClick="$('#console-input').empty().append('{ }');">Reset</button>
                 <button class="btn btn-primary" type="button">Submit</button>
             </div>
        </div>
        
    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#example-request" data-toggle="collapse" OnClick="$('#example-request-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="example-request-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Request</h3>
    </div>
    <div class="collapse" id="example-request">

    <h4>Request Path</h4>
    
{% highlight markdown %}
GET https://sandbox-rest.avatax.com/api/v2/utilities/ping
{% endhighlight %}


    </div>
</div>

<div>
    <div class="try-it-now-header" data-target="#example-response" data-toggle="collapse" OnClick="$('#example-response-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="example-response-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Response</h3>
    </div>
    <div class="collapse" id="example-response">
    <h4>Response Body</h4>
<p>Documentation: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/PingResultModel">PingResultModel</a></p>


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
    <div class="try-it-now-header" data-target="#curl-example" data-toggle="collapse" OnClick="$('#curl-example-icon').toggleClass('rotate');">
        <div class="documentation-expand-icon rotate" id="curl-example-icon" style="display: inline-block; margin-right: 5px;">
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" x="0px" xml:space="preserve" y="0px" style="display: block; margin: auto;"><g transform="rotate(0 256 256)"><g><path d="M254.8,5.9c-139,0-252,113.1-252,252s113.1,252,252,252s252-113.1,252-252S393.8,5.9,254.8,5.9z M254.8,454 c-108.1,0-196-88-196-196s87.9-196,196-196s196,88,196,196S362.9,454,254.8,454z"></path><polygon points="254.8,269.4 172.5,187.1 132.9,226.7 254.8,348.6 376.8,226.7 337.2,187.1"></polygon></g></g></svg>
        </div>
        <h3 class="clickable" style="display: inline-block;">Example Using CURL</h3>
    </div>
    <div class="collapse" id="curl-example">

{% highlight shell %}
curl
    -X GET
    -H 'Accept: application/json'
    -H 'Authorization: Basic aHR0cHdhdGNoOmY='
    https://sandbox-rest.avatax.com/api/v2/utilities/ping

{% endhighlight %}

    </div>
</div>
