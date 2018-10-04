---
layout: page
title:  Chapter 5.2 - Company Data
product: communications
doctype: comms_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/calc-taxes-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/invoice/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Company Data</h3>

The <code>CompanyData</code> object contains information about <b>your</b> company:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bscl</code></td>
        <td><code>[int]</code> Business Class
        <br>
        <code>0</code>: Incumbent Local Exchange Carrier
        <br>
        <code>1</code>: Competitive Local Exchange Carrier
        </td>
      </tr>
      <tr>
        <td><code>svcl</code></td>
        <td><code>[int]</code> Service Class
        <br>
        <code>0</code>: Primary Local
        <br>
        <code>1</code>: Primary Long Distance
        </td>
      </tr>
      <tr>
        <td><code>fclt</code></td>
        <td><code>[bool]</code> Facilities
        <br>
        <code>true</code>: Seller is facilities based (cable operators and telephone companies)
        <br>
        <code>false</code>: Seller is not facilities based (Internet based providers)
        </td>
      </tr>
      <tr>
        <td><code>frch</code></td>
        <td><code>[bool]</code> Franchise 
        <br>
        <code>true</code>: Seller has a franchise agreement
        <br>
        <code>false</code>: Franchise taxes do not apply to the seller
        </td>
      </tr>
      <tr>
        <td><code>reg</code></td>
        <td><code>[bool]</code> Regulated 
        <br>
        <code>true</code>: Seller is regulated
        <br>
        <code>false</code>: Seller is not regulated
        </td>
      </tr>
      <tr>
        <td><code>excl</code></td>
        <td><a href="/communications/dev-guide/reference/exclusion/"><code>[Exclusion]</code></a> Exclusions 
        <br>
        This is an array of <a href="/communications/dev-guide/reference/exclusion/">Exclusion</a> objects that identify states/provinces/territories where your company is excluded from collecting taxes. For increased performance, we suggest using a Client Profile with an Exclusion file applied.
        </td>
      </tr>
      <tr>
        <td><code>idnt</code></td>
        <td><code>[string]</code> Company Identifier 
        <br>
        This is a 20 byte alphanumeric field that represents your company or, if you are a third-party billing provider, could represent one of your clients.
        </td>
      </tr>
    </tbody>
  </table>
<div>
<br>
<br>
{% highlight json %}
// Example

"cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": true,
    "frch": false,
    "reg": true,
    "excl": [
      {
        "ctry": "USA",
        "st": "CO",
        "excl": true
      }
    ],
    "idnt": "Test Company 1"
  }

{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/calc-taxes-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/invoice/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>