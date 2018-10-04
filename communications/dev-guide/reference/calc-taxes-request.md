---
layout: page
title:  Chapter 5.1 - CalcTaxes Request
product: communications
doctype: comms_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>The CalcTaxes Request</h3>

At the highest level, a <code>CalcTaxes</code> request is a JSON object comprised of the following:

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
        <td>Company Data</td>
        <td>This object contains information about <b>your</b> company</td>
      </tr>
      <tr>
        <td>Invoice</td>
        <td>This object contains information about the <b>transaction</b></td>
      </tr>
      <tr>
      <td>Override</td>
      <td>This object contains information about <b>tax overrides</b> you want to apply to the transaction (see <a class="dev-guide-link" href="#note">note</a> below)</td>
      </tr>
      <tr>
      <td>Safe Harbor Override</td>
      <td>This object contains information about <b>safe harbor overrides</b> you want to apply to the transaction (see <a class="dev-guide-link" href="#note">note</a> below)</td>
      </tr>
    </tbody>
  </table>
<div>

{% highlight json %}
{
  "cmpn": {
      // Company Data 
  },
  "inv": [
    {
      // Invoice
    }
  ],
  "ovr": [
    {
      // Override
    }
  ],
  "sovr": [
    {
     // Safe Harbor Override
    }
  ]
}
{% endhighlight %}

<h4 id="note">Note</h4>
Although the <code>CalcTaxes</code> request gives the user the flexibility to input Override/Safe Harbor Override information for each transaction, we recommend utilizing a Client Profile with a custom Override file applied. This results in better performance from the Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>