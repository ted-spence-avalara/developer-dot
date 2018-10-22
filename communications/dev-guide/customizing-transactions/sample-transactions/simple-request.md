---
layout: page
title: Chapter 4.3.1 - Simple Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/multi-line-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Simple Request</h3>
This is an example of a simple request.  It is setting all of the <a class="dev-guide-link" href="/communications/dev-guide/calculate-taxes/required-fields/">required fields</a>, plus a charge (<code>chg</code>) of 100 and the number of lines (<code>line</code>) to 10.

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
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
{% highlight json %}
{
  "inv": [
    {
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
              "tax": 7.826916860000001,
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



<h3>Single Tax Item Request</h3>
This sample contains a little more detail than the previous sample.  This example includes a single <a class="dev-guide-link" href="/communications/dev-guide/reference/line-item">line item</a>.

{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "TEST-VOIP SINGLE TAX ITEM AVA",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Tax Item 001 - VoIP/Access Charge",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": false,
      "dtl": true,
      "summ": false,
      "opt": [
        {
          "key": "1",
          "val": "VoIP Sample Single Tax Item ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP SINGLE TAX ITEM AVA",
      "itms": [
        {
          "ref": "Tax Item 001 - VoIP/Access Charge",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 1.6672499999999997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CASF (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0056,
              "sur": true,
              "tax": 0.19655999999999996,
              "lvl": 1,
              "tid": 453
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.37908,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.12284999999999999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.17549999999999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.26324999999999993,
              "lvl": 1,
              "tid": 161
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
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.184,
              "sur": false,
              "tax": 11.941600000000001,
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
              "lns": 0,
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
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/multi-line-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>