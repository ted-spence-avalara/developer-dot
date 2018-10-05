---
layout: page
title: Chapter 4.3.1 - Simple Request
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
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

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/transaction-use-cases/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>