---
layout: page
title: Chapter 4.3.18 - Tax Inclusive
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/displaying-tax-results/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A Tax Inclusive transaction specifies the desired total amount of the transaction with the sale amount and expected taxes included.  REST v2 determines the appropriate base sale amount required to arrive at the total desired charge.

The Tax Inclusive flag (<code>incl</code>) is set individually on each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> included in an <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a>.  

To set a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem</a> as tax inclusive:
<ul class="dev-guide-list">
  <li>Set TaxInclusive (<code>incl</code>) to <code>true</code></li>
  <li>Put the <a class="dev-guide-link" href="#dt_note">desired total charge</a> (charge + taxes) in the Charge field (<code>chg</code>)</li>
</ul>

<h4 id="dt_note">Note regarding desired total charge</h4>
The desired total must be a positive value sufficiently large to cover any fixed taxes that may apply.

The calculated base charge can be found for each LineItem in the BaseCharge (<code>base</code>) field in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">CalcTaxes response</a>.

<h3>Tax Inclusive Example - Single Line Item</h3>
In this example, Line Item 001 is designated as TaxInclusive (<code>incl</code> = <code>true</code>) with a desired total charge of 100 (<code>chg</code> = 100).  In the <a class="dev-guide-link" href="#response1">response</a>, the base sale amount (<code>base</code>) is set to 87.64509.  The desired total charge (100) = base sale amount (87.64509) + total taxes returned (12.35491).
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
      "doc": "TAX INCLUSIVE EXAMPLE",
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
          "ref": "Line Item 001 - Tax Inclusive - Desired Total Charge 100",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": true,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": false,
      "dtl": true,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4 id="response1">Response</h4>
{% highlight json %}
{
  "inv": [
    {
      "doc": "TAX INCLUSIVE EXAMPLE",
      "itms": [
        {
          "ref": "Line Item 001 - Tax Inclusive - Desired Total Charge 100",
          "base": 87.64509,
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 1.4612627630249997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.33224500717199995,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.10767199306499999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.15381713294999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.23072569942499996,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 56.88166341,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 30.763426589999995,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": 9.89740943334,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 56.88166341,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 30.763426589999995,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.1717826234982,
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

<h3>Tax Inclusive Example - Multiple Line Items</h3>
In this example, Line Item 001 and Line Item 002 are designated as TaxInclusive (<code>incl</code> = <code>true</code>), both with a desired total charge of 100 (<code>chg</code> = 100).  In the <a class="dev-guide-link" href="#response2">response</a>, the base sale amount (<code>base</code>) is set for Line Item 001 and Line Item 002, but not for Line Item 003 (<code>incl</code> = <code>true</code>).
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
      "doc": "TAX INCLUSIVE EXAMPLE",
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
          "ref": "Line Item 001 - Tax Inclusive - Desired Total Charge 100",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": true,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - Tax Inclusive - Desired Total Lines 100",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": true,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 003 - Not Tax Inclusive",
          "chg": 25,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 37,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4 id="response2">Response</h4>
{% highlight json %}
{
  "inv": [
    {
      "doc": "TAX INCLUSIVE EXAMPLE",
      "itms": [
        {
          "ref": "Line Item 001 - Tax Inclusive - Desired Total Charge 100",
          "base": 87.64509,
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 1.4612627630249997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.33224500717199995,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.10767199306499999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.15381713294999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 30.763426589999995,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 56.88166341,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.23072569942499996,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 56.88166341,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 30.763426589999995,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": 9.89740943334,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 56.88166341,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 30.763426589999995,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.1717826234982,
              "lvl": 0,
              "tid": 226
            }
          ]
        },
        {
          "ref": "Line Item 002 - Tax Inclusive - Desired Total Charge 100",
          "base": 67.3,
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
          "ref": "Line Item 003 - Not Tax Inclusive",
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
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 30.763426589999995,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 56.88166341,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 1.4612627630249997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 30.763426589999995,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 56.88166341,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 0.33224500717199995,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 30.763426589999995,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 56.88166341,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.10767199306499999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 30.763426589999995,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 56.88166341,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.15381713294999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 30.763426589999995,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 56.88166341,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 0.23072569942499996,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 56.88166341,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 30.763426589999995,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": 9.89740943334,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 56.88166341,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 30.763426589999995,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.1717826234982,
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

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/displaying-tax-results/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>