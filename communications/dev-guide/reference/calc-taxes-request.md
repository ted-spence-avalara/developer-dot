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
        <td><a href="/communications/dev-guide/reference/company-data/">Company Data</a></td>
        <td>This object contains information about <b>your</b> company</td>
      </tr>
      <tr>
        <td><a href="/communications/dev-guide/reference/invoice/">Invoice</a></td>
        <td>This object contains information about the <b>transaction</b></td>
      </tr>
      <tr>
<<<<<<< HEAD
      <td><a href="/communications/dev-guide/reference/tax-override/">Override</a></td>
      <td>This object contains information about <b>tax overrides</b> you want to apply to the transaction (see <a href="#note">note</a> below)</td>
      </tr>
      <tr>
      <td><a href="/communications/dev-guide/reference/safe-harbor-override/">Safe Harbor Override</a></td>
      <td>This object contains information about <b>safe harbor overrides</b> you want to apply to the transaction (see <a href="#note">note</a> below)</td>
=======
      <td>Override</td>
      <td>This object contains information about <b>tax overrides</b> you want to apply to the transaction (see <a class="dev-guide-link" href="#note">note</a> below)</td>
      </tr>
      <tr>
      <td>Safe Harbor Override</td>
      <td>This object contains information about <b>safe harbor overrides</b> you want to apply to the transaction (see <a class="dev-guide-link" href="#note">note</a> below)</td>
>>>>>>> cd972b21980052fbec220c3323b06215b7ddadd5
      </tr>
    </tbody>
  </table>
<div>
<br>
<br>
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
Although the <code>CalcTaxes</code> request gives the user the flexibility to input Override/Safe Harbor Override information for each transaction, we recommend using a <a href="/communications/dev-guide/customizing-transactions/client-profiles/">Client Profile</a> with a custom override file applied. This results in better performance from the Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>