---
layout: page
title: AvaTax Demo
categories: [avatax, api]
product: avatax
doctype: use_cases
disqus: 1
---

This demo shows how AvaTax can calculate tax on your transactions.

## Relevant Blog Posts

<ul class="normal">
{% for post in site.posts %}
   {% if post.relevantapimethods contains 'CreateTransaction' %}
       <li><a href="{{ post.url }}">{{ post.title }}</a></li>
   {% endif %}
{% endfor %}
</ul>

## Demo



<div class="api-console-output">
    <h5 class="console-output-header">API Endpoint</h5>
    <div class="row" style="margin: 10px;">
        <div class="code-snippet-plaintext" style="display: inline;" id="console-method">POST</div>
        <div class="code-snippet-plaintext" style="display: inline;" id="console-server">https://sandbox-rest.avatax.com</div>
        <div class="code-snippet-plaintext" style="display: inline;" id="console-path">/api/v2/transactions/create</div>
    </div>
    <h5 class="console-output-header">
        Headers
        <i class="glyphicon glyphicon-pencil"></i>
    </h5>
    <div class="code-snippet reqScroll">
        <textarea style="height: 50px;" id="console-headers" >Authorization: (use Developer website demo credentials)
X-Avalara-Client: Avalara Developer Website; 18.8.0; AvaTax SDK; 18.8.0; developer-console</textarea>
    </div>
    <div class="row" style="margin-bottom: 8px;">
        <div class="col-md-6 console-req-container">
            <h5 class="console-output-header">
                Request
                <i class="glyphicon glyphicon-pencil"></i>
            </h5>
            <textarea id="console-input-sample" style="display: none;">{
    "lines": [ {
        "number": "1",
        "quantity": 1.0,
        "amount": 100.0,
        "taxCode": "PS081282",
        "itemCode": "Y0001",
        "description": "Yarn"
    } ],
    "type": "SalesInvoice",
    "companyCode": "DEFAULT",
    "date": "2018-09-05",
    "customerCode": "ABC",
    "purchaseOrderNo": "2018-09-05-001",
    "addresses": {
        "singleLocation": {
            "line1": "2000 Main Street",
            "city": "Irvine",
            "region": "CA",
            "country": "US",
            "postalCode": "92614"
        }
    },
    "commit": true,
    "currencyCode": "USD",
    "description": "Yarn"
}</textarea>
            <div class="code-snippet reqScroll">
                <textarea id="console-input">{ }</textarea>
            </div>
        </div>
        <div class="col-md-6 console-res-container">
             <h5 class="console-output-header">Response</h5>
             <div class="code-snippet respScroll">
                 <pre id="console-output"> </pre>
             </div>
         </div>
     </div>
     <div>
         <button class="btn btn-secondary" style="color: #000000;" type="button" onClick="$('#console-input').empty().val($('#console-input-sample').val());">Fill with Sample Data</button>
         <button class="btn btn-secondary" style="color: #000000;" type="button" onClick="$('#console-input').empty().val('{ }');">Reset</button>
         <button class="btn btn-primary" type="button" onClick="ApiRequest();">Submit</button>
     </div>
</div>
