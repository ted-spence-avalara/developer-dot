---
layout: page
title: Chapter 2 - Calculate Taxes
product: communications
doctype: comms_dev_guide
chapter: calculate-taxes
nav: apis
disqus: 0
---

<h3>Your First CalcTaxes Request</h3>

Let's dive right in. We're going to send a simple <code>CalcTaxes</code> call using an API testing application like <a href="https://www.getpostman.com">Postman</a> and inspect the results.

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

<h3>Response</h3>
The response contains a list of taxes calculated for the <a href="/communications/dev-guide/reference/line-item/">LineItem</a> you provided above:

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

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/commit-uncommit/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>