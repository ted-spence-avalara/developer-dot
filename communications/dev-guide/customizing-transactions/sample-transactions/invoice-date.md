---
layout: page
title: Chapter 4.3.14 - Invoice Date
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/commit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-mode/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Invoice Date field (<code>date</code>) is normally populated with the bill date, invoice date, or call date (as applicable) and is set at the invoice level.  The field may appear in any of the Standard Date and Time Format Strings for .NET Framework shown in the table below.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Date Format</th>
        <th>Sample</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>yyyymmdd</td>
        <td>20180601</td>
      </tr>
      <tr>
        <td>mm/dd/yyyy</td>
        <td>06/01/2018</td>
      </tr>
      <tr>
        <td>m/d/yyyy</td>
        <td>6/1/2018</td>
      </tr>
      <tr>
        <td>mm-dd-yyyy</td>
        <td>06-01-2018</td>
      </tr>
      <tr>
        <td>m-d-yyyy</td>
        <td>6-1-2018</td>
      </tr>
      <tr>
        <td>yyyy-mm-dd</td>
        <td>2018-06-01</td>
      </tr>
      <tr>
        <td>yyyy-m-d</td>
        <td>2018-6-1</td>
      </tr>
      <tr>
        <td>yyyy-mm-ddThh:MM:ss</td>
        <td>2018-06-01T13:45:30</td>
      </tr>
      <tr>
        <td>yyyy-m-dThh:MM:ss</td>
        <td>2018-6-1T13:45:30</td>
      </tr>
    </tbody>
  </table>
</div>

REST v2 compares this date to the effective date of each tax that applies to the transaction. Historical rates and effective dates are maintained and updated within the AFC tax engine and correct tax information is returned based upon the transaction date. 

<h3>Transaction Date Example</h3>
In this example, the <b>Invoice Date</b> is set to 05/01/2017 and applies to all three line items.
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
          "val": "VoIP Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/commit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-mode/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>