---
layout: page
title: Chapter 4.3.3 - Jurisdiction Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/multi-line-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Set the jurisdiction in the BillTo object (<code>bill</code>) inside the <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">Invoice</a> object.  There are a number of ways to set the jurisdiction, including:
<ul class="dev-guide-list">
    <li><b>PCode</b> (<code>pcd</code>): persisted numeric identifer for a taxing jurisdiction</li>
    <li><b>Address</b>: When using an address to specify the taxing jurisdiction, the more complete the information provided the more accurate the lookup will be. For most foreign nations, other than Canada and Brazil, the Country ISO is sufficient for taxation purposes. For USA and Canada, at a minimum the Country, State and Zip Code must be provided.
      <ul class="dev-guide-list">
        <li>Street Address (<code>addr</code>), Country (<code>ctry</code>), State (<code>st</code>), County (<code>cnty</code>), City (<code>cty</code>), and/or Postal Code (<code>zip</code>) lookup using geocoding (<code>geo</code> = <code>true</code>)</li>
        <li>Country (<code>ctry</code>), State (<code>st</code>), County (<code>cnty</code>), City (<code>cty</code>), and/or Postal Code (<code>zip</code>) lookup without using geocoding (<code>geo</code> = <code>false</code>)</li>
      </ul>
    </li>
    <li><b>FIPS</b> (<code>fips</code>): standardized set of numeric or alphabetic codes issued by the National Institute of Standards and Technology (NIST) to ensure uniform identification of geographic entities through all federal government agencies</li>
    <li><b>NPANXX</b> (<code>npa</code>): 6 digit numbers consisting of the area code and second 3 digits of a North American dialing plan phone number</li>
</ul>

There are a couple things to keep in mind if using the Geocoding functionality (<code>geo</code> set to <code>true</code>):
<ol class="dev-guide-list">
  <li>The geocoding is slower, but provides a more accurate jurisdiction</li>
  <li>If the geocoding process fails, the entire <code>CalcTaxes</code> request fails as well</li>
</ol>

<h4>Note</h4>
When specifying jurisdictions outside of the United States via country/state/county/city lookup, be sure to pass the Country ISO code.  If the country code is not set, errors are generated.  For example, use <code>CAN</code> for Canada or <code>IND</code> for India.

More information regarding the <code>Location</code> object can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/location/">here</a>.

<h3>Canadian Tax Request</h3>
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
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "cmmt": false,
      "bill": {
        "ctry": "CAN",
        "int": true,
        "geo": false,
        "city": "Montreal",
        "st": "PQ",
        "zip": "H1A-0A1"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-06-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - VoIP/Lines",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
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
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "Canada VoIP Sample Line Items Invoice ABC-ZZZ"
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
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Quebec Sales Tax (QST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 9.975000000000001,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 5,
              "lvl": 0,
              "tid": 66
            }
          ]
        },
        {
          "ref": "Line Item 002 - VoIP/Lines",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E-911",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 4945800,
              "rate": 0.46,
              "sur": false,
              "tax": 4.6000000000000005,
              "lvl": 1,
              "tid": 10
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 4.140000000000001,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Quebec Sales Tax (QST)",
              "exm": 0.45999999999999996,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 0.4129650000000001,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 4.140000000000001,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0.45999999999999996,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 0.20700000000000005,
              "lvl": 0,
              "tid": 66
            }
          ]
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Quebec Sales Tax (QST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4882600,
              "rate": 0.09975,
              "sur": false,
              "tax": 2.4937500000000004,
              "lvl": 1,
              "tid": 69
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 25,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Goods and Service Tax (GST)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 4482200,
              "rate": 0.05,
              "sur": false,
              "tax": 1.25,
              "lvl": 0,
              "tid": 66
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 125,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Quebec Sales Tax (QST)",
          "exm": 0,
          "lns": 0,
          "pcd": 4882600,
          "rate": 0.09975,
          "sur": false,
          "tax": 12.468750000000002,
          "lvl": 1,
          "tid": 69
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 125,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Goods and Service Tax (GST)",
          "exm": 0,
          "lns": 0,
          "pcd": 4482200,
          "rate": 0.05,
          "sur": false,
          "tax": 6.25,
          "lvl": 0,
          "tid": 66
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E-911",
          "exm": 0,
          "lns": 10,
          "pcd": 4945800,
          "rate": 0.46,
          "sur": false,
          "tax": 4.6000000000000005,
          "lvl": 1,
          "tid": 10
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 4.140000000000001,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Quebec Sales Tax (QST)",
          "exm": 0.45999999999999996,
          "lns": 0,
          "pcd": 4882600,
          "rate": 0.09975,
          "sur": false,
          "tax": 0.4129650000000001,
          "lvl": 1,
          "tid": 69
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 4.140000000000001,
          "calc": 1,
          "cat": "SALES AND USE TAXES",
          "cid": 1,
          "name": "Goods and Service Tax (GST)",
          "exm": 0.45999999999999996,
          "lns": 0,
          "pcd": 4482200,
          "rate": 0.05,
          "sur": false,
          "tax": 0.20700000000000005,
          "lvl": 0,
          "tid": 66
        }
      ]
    }
  ]
}
{% endhighlight %}


<h3 id="us_geo">United States Tax Request using geocoding</h3>
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
      "doc": "TEST-VOIP INVOICE 2018.01.15:12.02 AVA",
      "cmmt": false,
      "bill": {
        "geo": true,
        "ctry": "USA",
        "st": "CA",
        "city": "Santa Clara",
        "addr": "4900 Marie P DeBartolo Way",  // Levi Stadium
        "zip": "95054"
      },
      "cust": 0,
      "lfln": false,
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - VoIP/Lines",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
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
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "Geo Lookup Sample Line Items Invoice ABC-ZZZ"
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
      "doc": "TEST-VOIP INVOICE 2018.01.15:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Access Charge",
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
          "ref": "Line Item 002 - VoIP/Lines"
        },
        {
          "ref": "Line Item 003 - VoIP/Equip Rental",
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
              "pcd": 390800,
              "rate": 0.0175,
              "sur": false,
              "tax": 0.43750000000000006,
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
              "pcd": 390800,
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
              "pcd": 390800,
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
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 1.6672499999999997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 0.37908,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.12284999999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.17549999999999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 0.26324999999999993,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": 11.2926,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.19599800000000003,
          "lvl": 0,
          "tid": 226
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
          "pcd": 390800,
          "rate": 0.0175,
          "sur": false,
          "tax": 0.43750000000000006,
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
          "pcd": 390800,
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
          "pcd": 390800,
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

<h3>Jurisdiction Determination using PCode, NPANXX, or FIPS</h3>
Using the <a class="dev-guide-link" href="#us_geo">sample above</a>, update the BillTo object (<code>bill</code>) as follows to determine jurisdiction based on PCode, NPANXX, or FIPS.

<h4>PCode</h4>
{% highlight json %}
 "bill": {
        "pcd": 390800
      }
{% endhighlight %}

<h4>NPANXX</h4>
{% highlight json %}
 "bill": {
        "npa": 415226
      }
{% endhighlight %}

<h4>FIPS</h4>
{% highlight json %}
 "bill": {
        "fips": "0608500380"
      }
{% endhighlight %}


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/multi-line-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/exemption/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>