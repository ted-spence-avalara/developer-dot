---
layout: page
title: Chapter 4.3.16 - Optional Fields
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-mode/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/adjustment/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Optional Fields object (<code>opt</code>) is a <a class="dev-guide-link" href="/communications/dev-guide/reference/key-value-pair/">Key/Value Pair</a> that allows you to include up to 10 custom fields for use in Reporting.  The Optional Fields are not returned as part of the CalcTaxes response, but Optional Field 1 - Optional Field 10 can be included on reports generated in the <a class="dev-guide-link" href="https://communications.avalara.net">Customer Portal</a>.

The Optional Fields object can be used in both the <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">Invoice</a> and <a class="dev-guide-link" href="/communications/dev-guide/reference/line-item/">LineItem</a> levels.  The 10 available <a class="dev-guide-link" href="/communications/dev-guide/reference/key-value-pair/">Key/Value pairs</a> can be spread across both the invoice and each line item individually.  For example:
<ul class="dev-guide-list">
  <li>The <b>transaction</b> contains 1 Invoice and 5 LineItem objects</li>
  <li>The <b>Invoice</b> object contains Optional Fields keys 1 through 5</li>
  <li>Each <b>LineItem</b> object contains:</li>
    <ul class="dev-guide-list">
      <li>LineItem 001 contains Optional Fields keys 6 through 10</li>
      <li>LineItem 002 contains Optional Fields keys 8 and 9</li>
      <li>LineItem 003 contains Optional Field key 7 only</li>
      <li>LineItem 004 contains Optional Fields keys 6 through 10</li>
      <li>LineItem 005 contains Optional Fields keys 7, 9, and 10</li>
    </ul>
</ul>

This Optional Fields at the <b>Invoice</b> level are applied to all Line Items contained within that Invoice. 

To use the Optional Field object:
<ul class="dev-guide-list">
  <li>Set the Key (<code>key</code>) to a number between 1 and 10</li>
  <li>Add the custom value for the specified key in Value (<code>val</code>)</li>
</ul>

<h4>Note</h4>
The Optional Field value field (<code>val</code>) does not need to be the same across all LineItems even if the Key field is the same.

<h4>Note</h4>
While the distribution of the Optional Field key/value pairs is not mandated by REST v2, it is <b>recommended</b> to set Keys 1-5 at the Invoice level and Keys 5-10 at the LineItem level.

<h3>Optional Fields Example</h3>
This example demonstrates using the Optional Field object in both the <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">Invoice</a> and <a class="dev-guide-link" href="/communications/dev-guide/reference/line-item/">LineItem</a> levels.

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
      "doc": "TEST-OPTIONAL FIELD EXAMPLE",
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
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false,
          "opt": [
            {
              "key": "6",
              "val": "LineItem Value 6"
            },
            {
              "key": "7",
              "val": "LineItem Value 7"
            },
            {
              "key": "8",
              "val": "LineItem Value 8"
            },
            {
              "key": "9",
              "val": "LineItem Value 9"
            },
            {
              "key": "10",
              "val": "LineItem Value 10"
            }
          ]
        },
        {
          "ref": "Line Item 002",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false,
          "opt": [
            {
              "key": "8",
              "val": "LineItem Value 8"
            },
            {
              "key": "9",
              "val": "LineItem 002 Value 9 (different from Key 9 in LineItem 001)"
            }
          ]
        },
        {
          "ref": "Line Item 003",
          "chg": 25,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 37,
          "dbt": false,
          "adj": false,
          "opt": [
            {
              "key": "7",
              "val": "LineItem Value 7"
            }
          ]
        },
        {
          "ref": "Line Item 004",
          "chg": 125,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false,
          "opt": [
            {
              "key": "6",
              "val": "LineItem Value 6"
            },
            {
              "key": "7",
              "val": "LineItem Value 7"
            },
            {
              "key": "8",
              "val": "LineItem Value 8"
            },
            {
              "key": "9",
              "val": "LineItem Value 9"
            },
            {
              "key": "10",
              "val": "LineItem Value 10"
            }
          ]
        },
        {
          "ref": "Line Item 005",
          "chg": 250,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false,
          "opt": [
            {
              "key": "7",
              "val": "Unique Value for LineItem 005 - Key 7"
            },
            {
              "key": "9",
              "val": "LineItem Value 9"
            },
            {
              "key": "10",
              "val": "LineItem Value 10"
            }
          ]
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "Invoice Value 1"
        },
        {
          "key": "2",
          "val": "Invoice Value 2"
        },
        {
          "key": "3",
          "val": "Invoice Value 3"
        },
        {
          "key": "4",
          "val": "Invoice Value 4"
        },
        {
          "key": "5",
          "val": "Invoice Value 5"
        }
      ]
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-mode/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/adjustment/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>