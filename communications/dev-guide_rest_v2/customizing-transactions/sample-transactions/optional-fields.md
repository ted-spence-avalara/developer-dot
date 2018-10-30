---
layout: page
title: Chapter 4.3.16 - Optional Fields
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/invoice-mode/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Optional Fields object (<code>opt</code>) is a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Key/Value Pair</a> that allows you to include up to 10 custom fields for use in Reporting.  The Optional Fields are not returned as part of the CalcTaxes response, but Optional Field 1 - Optional Field 10 can be included on reports generated in the <a class="dev-guide-link" href="https://communications.avalara.net">Customer Portal</a>.

The Optional Fields object can be used in both the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> levels.  The 10 available <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Key/Value pairs</a> can be spread across both the invoice and each line item individually.  <a class="dev-guide-link" href="#example">For example</a>:
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

<h4>Notes</h4>
<ol class="dev-guide-list">
  <li>The Optional Field value field (<code>val</code>) does not need to be the same across all LineItems even if the Key field is the same</li>
  <li>While the distribution of the Optional Field key/value pairs is not mandated by REST v2, it is <b>recommended</b> to set Keys 1-5 on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and Keys 5-10 on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a></li>
</ol>

<h3 id="example">Optional Fields Example</h3>
This example demonstrates using the Optional Field object on both the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a> and the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItems</a>.

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

<h4>Response</h4>
Taxes (<code>txs</code> and <code>summ</code>) are returned as normal.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-OPTIONAL FIELD EXAMPLE",
      "itms": [
        {
          "ref": "Line Item 001",
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
              "rate": 0.174,
              "sur": false,
              "tax": 11.2926,
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
        },
        {
          "ref": "Line Item 002",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "San Francisco Access line Tax (VoIP)",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 377300,
              "rate": 3.27,
              "sur": false,
              "tax": 32.7,
              "lvl": 3,
              "tid": 250
            }
          ]
        },
        {
          "ref": "Line Item 003",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "District Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377200,
              "rate": 0.0125,
              "sur": false,
              "tax": 0.3125,
              "lvl": 2,
              "tid": 4
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.0125,
              "sur": false,
              "tax": 0.3125,
              "lvl": 2,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.06,
              "sur": false,
              "tax": 1.5,
              "lvl": 1,
              "tid": 1
            }
          ]
        },
        {
          "ref": "Line Item 004",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 43.875,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 81.125,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 2.0840625,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 43.875,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 81.125,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.47385000000000005,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 43.875,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 81.125,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.1535625,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 43.875,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 81.125,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.21937500000000001,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 43.875,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 81.125,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.3290625,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 81.125,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 43.875,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": 14.115749999999998,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 81.125,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 43.875,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.2449975,
              "lvl": 0,
              "tid": 226
            }
          ]
        },
        {
          "ref": "Line Item 005",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 87.75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 162.25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 4.168125,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 87.75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 162.25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.9477000000000001,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 87.75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 162.25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.307125,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 87.75,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 162.25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.43875000000000003,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 87.75,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 162.25,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.658125,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 162.25,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 87.75,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": 28.231499999999997,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 162.25,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 87.75,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.489995,
              "lvl": 0,
              "tid": 226
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 166.725,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 308.275,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 7.919437499999999,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 166.725,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 308.275,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 1.80063,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 166.725,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 308.275,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.5835374999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 166.725,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 308.275,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.8336250000000001,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 166.725,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 308.275,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 1.2504374999999999,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 308.275,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 166.725,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": 53.639849999999996,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 308.275,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 166.725,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.9309905,
          "lvl": 0,
          "tid": 226
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "San Francisco Access line Tax (VoIP)",
          "exm": 0,
          "lns": 10,
          "pcd": 377300,
          "rate": 3.27,
          "sur": false,
          "tax": 32.7,
          "lvl": 3,
          "tid": 250
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "District Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377200,
          "rate": 0.0125,
          "sur": false,
          "tax": 0.3125,
          "lvl": 2,
          "tid": 4
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.0125,
          "sur": false,
          "tax": 0.3125,
          "lvl": 2,
          "tid": 1
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 25,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Sales Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.06,
          "sur": false,
          "tax": 1.5,
          "lvl": 1,
          "tid": 1
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/invoice-mode/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>