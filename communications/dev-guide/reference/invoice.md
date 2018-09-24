---
layout: page
title:  Chapter 5.3 - Invoice
product: communications
doctype: comms_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<h3>Invoice</h3>

The <code>Invoice</code> object contains information about the <b>transaction</b>:

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
        <td><code>doc</code></td>
        <td><code>[string]</code> Document Code
        <br>
        The Document Code is a unique string that is used to <a href="/communications/dev-guide/commit-uncommit/">Commit or Uncommit</a> transactions in the future
        </td>
      </tr>
      <tr>
        <td><code>cmmt</code></td>
        <td><code>[bool]</code> Commit
        <br>
        <code>true</code>: The transaction is <a href="/communications/dev-guide/commit-uncommit/">committed</a>
        <br>
        <code>true</code>: The transaction is <a href="/communications/dev-guide/commit-uncommit/">uncommitted</a>
        </td>
      </tr>
      <tr>
        <td><code>bill</code></td>
        <td><a href="/communications/dev-guide/reference/location/"><code>[Location]</code></a> Bill To Location
        <br>
        There are several ways to input location information. See the <a href="/communications/dev-guide/reference/location/">Location</a> section for more details.
        </td>
      </tr>
    </tbody>
  </table>
<div>

{% highlight json %}
// Example

"inv": [
    {
      "doc": "string",
      "cmmt": true,
      "bill": {
        "cnty": "string",
        "ctry": "string",
        "int": true,
        "geo": true,
        "pcd": 0,
        "npa": 0,
        "fips": "string",
        "addr": "string",
        "city": "string",
        "st": "string",
        "zip": "string"
      },
      "cust": 0,
      "lfln": true,
      "date": "2018-09-23T20:31:53.452Z",
      "exms": [
        {
          "frc": true,
          "loc": {
            "cnty": "string",
            "ctry": "string",
            "int": true,
            "geo": true,
            "pcd": 0,
            "npa": 0,
            "fips": "string",
            "addr": "string",
            "city": "string",
            "st": "string",
            "zip": "string"
          },
          "tpe": 0,
          "lvl": 0,
          "cat": 0,
          "dom": 0,
          "scp": 0,
          "exnb": true
        }
      ],
      "itms": [
        {
          "ref": "string",
          "from": {
            "cnty": "string",
            "ctry": "string",
            "int": true,
            "geo": true,
            "pcd": 0,
            "npa": 0,
            "fips": "string",
            "addr": "string",
            "city": "string",
            "st": "string",
            "zip": "string"
          },
          "to": {
            "cnty": "string",
            "ctry": "string",
            "int": true,
            "geo": true,
            "pcd": 0,
            "npa": 0,
            "fips": "string",
            "addr": "string",
            "city": "string",
            "st": "string",
            "zip": "string"
          },
          "chg": 0,
          "line": 0,
          "loc": 0,
          "min": 0,
          "sale": 0,
          "plsp": 0,
          "incl": true,
          "pror": 0,
          "brdg": {
            "proc": true,
            "rtrn": true,
            "prts": [
              {
                "ref": "string",
                "loc": {
                  "cnty": "string",
                  "ctry": "string",
                  "int": true,
                  "geo": true,
                  "pcd": 0,
                  "npa": 0,
                  "fips": "string",
                  "addr": "string",
                  "city": "string",
                  "st": "string",
                  "zip": "string"
                }
              }
            ]
          },
          "tran": 0,
          "serv": 0,
          "dbt": true,
          "adj": true,
          "adjm": 0,
          "disc": 0,
          "opt": [
            {
              "key": "string",
              "val": "string"
            }
          ],
          "prop": 0
        }
      ],

{% endhighlight %}

<ul class="pager">
  <li class="next"><a href="/communications/dev-guide/reference/location/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>