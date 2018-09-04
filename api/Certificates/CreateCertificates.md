---
layout: page
title: CreateCertificates API
date: 2018-09-04
comments: true
categories: [avatax, api]
product: avatax
doctype: api-references
api-category: Certificates
api: CreateCertificates
disqus: 1
---

<table class="styled-table">
    <tr>
        <th>PURPOSE</th>
        <td>Create certificates for this company</td>
    </tr>
    <tr>
        <th>HTTP VERB</th>
        <td><code class="highlight-rouge">POST</code></td>
    </tr>
    <tr>
        <th>URL (SANDBOX)</th>
        <td>https://sandbox-rest.avatax.com/api/v2/companies/{companyId}/certificates</td>

    </tr>
    <tr>
        <th>URL (PRODUCTION)</th>
        <td>https://rest.avatax.com/api/v2/companies/{companyId}/certificates</td>

    </tr>
    <tr>
        <th>CONTENT-TYPE</th>
        <td><code class="highlight-rouge">application/json</code></td>
    </tr>
    <tr>
        <th>RESPONSE BODY</th>
<td><a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/List<CertificateModel>">List<CertificateModel></a></td>

    </tr>
</table>

## Description

<p>Record one or more certificates document for this company.</p>
<p>A certificate is a document stored in either AvaTax Exemptions or CertCapture.  The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate.  To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.</p>
<p>When you create a certificate, it will be processed by Avalara and will become available for use in
calculating tax exemptions when processing is complete.  For a certificate to be used in calculating exemptions,
it must have the following:</p>
<ul class="normal">
<li>A list of exposure zones indicating where the certificate is valid</li>
<li>A link to the customer that is allowed to use this certificate</li>
<li>Your tax transaction must contain the correct customer code</li>
</ul>
<p>Using exemption certificates endpoints requires setup of an auditable document storage for each company that will use certificates.
Companies that do not have this storage system set up will receive the error <code>CertCaptureNotConfiguredError</code> when they call exemption
certificate related APIs.  To check if this company is set up, call <code>GetCertificateSetup</code>.  To request setup of the auditable document
storage for this company, call <code>RequestCertificateSetup</code>.</p>



## Relevant Blog Posts

<ul class="normal">
{% for post in site.posts %}
   {% if post.relevantapimethods contains 'CreateCertificates' %}
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
<td>UriPath</td>
<td><code class="highlight-rouge">companyId</code></td>
<td>Int32, Required</td>
<td><p>The ID number of the company recording this certificate</p>
</td>
</tr>
<tr>
<td>Header</td>
<td><code class="highlight-rouge">X-Avalara-Client</code></td>
<td>String, Optional</td>
<td><p>Identifies the software you are using to call this API.  For more information on the client header, see <a href="https://developer.avalara.com/avatax/client-headers/">Client Headers</a> .</p>
</td>
</tr>
<tr>
<td>RequestBody</td>
<td><code class="highlight-rouge">model</code></td>
<td>List<CertificateModel>, Optional</td>
<td><p>Certificates to be created</p>
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

        <div>
            <h5 class="console-output-header">
                <span>API Endpoint</span>
            </h5>
            <div class="code-snippet-plaintext">https://sandbox-rest.avatax.com@MethodModel.URI</div>
            <h5 class="console-output-header">Method</h5>
            <div class="code-snippet-plaintext">POST</div>
            <div class="row" style="margin-bottom: 8px;">
                <div class="col-md-6 console-req-container">
                    <h5 class="console-output-header">
                        <!-- react-text: 1205 -->Request <!-- /react-text -->
                        <i class="glyphicon glyphicon-pencil"/>
                    </h5>
                    <div class="code-snippet reqScroll">
                        <textarea id="console_input">


                        </textarea>
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
                <button class="btn submit"> Fill with Sample Data</span>
                <button class="btn submit" type="button">Reset</button>
                <button class="btn btn-primary submit" type="button">Submit</button>
            </div>
        </div>

        <div class="api-console-output">
             <h5 class="console-output-header">
                 <span>API Endpoint</span>
             </h5>
             <div class="code-snippet-plaintext">https://sandbox-rest.avatax.com/api/v2/transactions/create</div>
             <h5 class="console-output-header">Method</h5>
             <div class="code-snippet-plaintext">GET</div>
             <div class="row" style="margin-bottom: 8px;">
                 <div class="col-md-6 console-req-container">
                     <h5 class="console-output-header">
                         <!-- react-text: 1205 -->Request <!-- /react-text -->
                         <i class="glyphicon glyphicon-pencil"></i>
                     </h5>
                     <div class="code-snippet reqScroll">
                         <textarea id="console_input"></textarea>
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
                 <button class="btn btn-secondary" style="color: #000000;" type="button">Fill with Sample Data</button>
                 <button class="btn btn-secondary" style="color: #000000;" type="button" OnClick="$('#console-input').empty();">Reset</button>
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
POST https://sandbox-rest.avatax.com/api/v2/companies/{companyId}/certificates
{% endhighlight %}
<h4>Request Body</h4>
<p>Documentation: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/List<CertificateModel>">List<CertificateModel></a></p>
{% highlight json %}

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
<p>Documentation: <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/List<CertificateModel>">List<CertificateModel></a></p>


{% highlight json %}

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
    -X POST
    -H 'Accept: application/json'
    -H 'Authorization: Basic aHR0cHdhdGNoOmY='

    https://sandbox-rest.avatax.com/api/v2/companies/{companyId}/certificates

{% endhighlight %}

    </div>
</div>
