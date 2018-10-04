---
layout: page
title: Chapter 2 - Calculate Taxes
product: communications
doctype: comms_dev_guide
chapter: calculate-taxes
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide/calculate-taxes/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Your First CalcTaxes Request</h3>

Let's dive right in. We're going to send a simple <code>CalcTaxes</code> call using <a href="https://www.getpostman.com">Postman</a> and inspect the results.

<h3>Headers</h3>

Add the following <a href="/communications/dev-guide/getting-started/authentication/">mandatory headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
</ul>

<h4>Postman example</h4>
<img src="/public/images/comms/dev-guide/comms_dev_guide_1.png"/>

<h3>Body</h3>
For the body of the <code>POST</code> request, copy and paste the following example:

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 1,
    "fclt": true,
    "frch": true,
    "reg": true
  },
  "inv": [
    {
      "doc": "DocumentXYZ123",
      "bill": {
        "ctry": "USA",
        "st": "NC",
        "cty": "Durham",
        "zip": 27701
      },
      "cust": 1,
      "date": "2018-09-24T11:00:00",
      "itms": [
        {
          "chg": 100,
          "line": 10,
          "sale": 1,
          "tran": 19,
          "serv": 6
        }
      ],
      "cmmt": false
    }
  ]
}
{% endhighlight %}

<h4>What are we sending?</h4>

In the example above, our request body begins with <a href="/communications/dev-guide/reference/company-data/">information that describes your company</a> (<code>cmpn</code>).

Next comes the <a href="/communications/dev-guide/reference/invoice/">Invoice</a> (<code>inv</code>). This object contains details of the transaction(s). We've included a document code so we can <a href="/communications/dev-guide/commit-uncommit/">commit</a> this transaction later. Our Bill To Location (<code>bill</code>) is a <a href="/communications/dev-guide/reference/location/">Location</a> object and can be specified in several ways. In this example we passed in a combination of Country, City, State and Zip Code, but we can also pass a single PCode, FIPS, or NPAXX value. Because we didn't specify a Street Address (<code>addr</code>), the tax engine will make a best effort guess which when determining tax jurisdiction.

The value you assign to the <code>date</code> key is important: this affects which rules are used by our tax engine to calculate taxes. Tax rules change frequently and our Content Team continuously updates our tax engine to reflect these changes.

Inside the Invoice is a <a href="/communications/dev-guide/reference/line-item/">LineItem</a>(<code>itms</code>). This is where information like the Charge, Transaction/Service Pair, number of Lines, etc. is stored.

At the bottom of the JSON object we've set the Commit flag (<code>cmmt</code>) to <code>false</code>. This is the default behavior so this line is optional, but you can set the flag to <code>true</code> if you want to commit the transaction without using the <a href="/communications/dev-guide/commit-uncommit/commit-request/">Commit API</a> later.


<h3>Response</h3>
The response contains a list of tax amounts:

{% highlight json %}
{
    "inv": [
        {
            "doc": "DocumentXYZ123",
            "itms": [
                {
                    "txs": [
                        {
                            "bill": true,
                            "cmpl": true,
                            "tm": 111.813098,
                            "calc": 1,
                            "cat": "SALES AND USE TAXES",
                            "cid": 1,
                            "name": "North Carolina Telecommunications Sales Tax",
                            "exm": 0,
                            "lns": 0,
                            "min": 0,
                            "pcd": 2716900,
                            "rate": 0.07,
                            "sur": false,
                            "tax": 7.8269168600000008,
                            "lvl": 1,
                            "tid": 231
                        },
                        {
                            "bill": true,
                            "cmpl": true,
                            "tm": 64.9,
                            "calc": 1,
                            "cat": "CONNECTIVITY CHARGES",
                            "cid": 5,
                            "name": "FUSF (VoIP)",
                            "exm": 35.099999999999994,
                            "lns": 10,
                            "min": 0,
                            "pcd": 0,
                            "rate": 0.179,
                            "sur": false,
                            "tax": 11.6171,
                            "lvl": 0,
                            "tid": 162
                        },
                        {
                            "bill": true,
                            "cmpl": true,
                            "tm": 64.9,
                            "calc": 1,
                            "cat": "REGULATORY CHARGES",
                            "cid": 6,
                            "name": "FCC Regulatory Fee (VoIP)",
                            "exm": 35.099999999999994,
                            "lns": 10,
                            "min": 0,
                            "pcd": 0,
                            "rate": 0.00302,
                            "sur": false,
                            "tax": 0.19599800000000003,
                            "lvl": 0,
                            "tid": 226
                        }
                    ]
                }
            ]
        }
    ]
}
{% endhighlight %}

Each tax amount returned contains additional infromation including:
<ul class="dev-guide-list">
  <li><code>bill</code>: Is the tax <i>billable</i>? Or, can this tax be passed on to the end-customer?</li>
  <li><code>cmpl</code>: Should the tax be included in <i>compliance</i> reporting?</li>
  <li><code>tm</code>: Taxable Measure</li>
  <li><code>cat</code>: Tax Category</li>
  <li><code>rate</code>: Tax Rate</li>
  <li><code>lvl</code>: Tax Level (Federal, State, County, Local)</li>
  <li><code>tax</code>: Tax Amount</li>
</ul>

More information about the CalcTaxesResponse can be found <a href="/communications/dev-guide/reference/calc-taxes-response/">here</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide/calculate-taxes/required-fields/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>