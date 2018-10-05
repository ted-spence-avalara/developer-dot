---
layout: page
title: Chapter 3.1 - Commit Request
product: communications
doctype: comms_dev_guide
chapter: commit-uncommit
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/commit-uncommit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Commit Endpoint</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/api/v2/afc/commit</code></td>
        <td><code>POST</code> Commits and Uncommits transactions. See <a class="dev-guide-link" href="/communications/dev-guide/commit-uncommit/">Commit/Uncommit</a> for more information.</td>
      </tr>
    </tbody>
  </table>
<div>

<h3>Commit API Data Fields</h3>
The following fields must be provided within a <code>Commit</code> API call in order to support the <a class="dev-guide-link" href="/communications/dev-guide/commit-uncommit/">Commit/Uncommit feature</a>.
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
        <td><code>[string]</code> DocumentCode
            <br/> 
            150-character max user-defined field that identifies a transaction, quote, or invoice in the calling system. The value is provided by the user when performing the tax calculation.</td>
      </tr>
      <tr>
        <td><code>cmmt</code></td>
        <td><code>[bool]</code> Commit
        <br>
          <code>true</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide/commit-uncommit/">committed</a>
          <br>
          <code>false</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide/commit-uncommit/">uncommitted</a>
        </td>
      </tr>
      <tr>
        <td><code>opt</code></td>
        <td><code>[OptionalFields]</code> <span class="t5">optional</span> Key value Pair 
        <br/>
        List of <a class="dev-guide-link" href="/communications/dev-guide/reference/key-value-pair/">Key Value Pairs</a> to provide additional information</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>The Commit Request</h3>
The <code>Commit</code> request is used to change the <code>Commit</code> flag for a given <code>DocumentCode</code>.  Let's send a simple <code>Commit</code> call using <a class="dev-guide-link" href="https://www.getpostman.com">Postman</a> and inspect the results.

<h3>Headers</h3>
Add the following <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">mandatory headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
</ul>

<h4>Postman example</h4>
<img src="/public/images/comms/dev-guide/comms_dev_guide_3.png"/>

<h3>Body</h3>
For the body of the <code>POST</code> request, copy and paste the following example:

{% highlight json %}
{
  "doc": "DocumentXYZ123",
  "cmmt": true,
  "opt": [
    {
      "key": 1,
      "val": "Optional value"
    }
  ]
}
{% endhighlight %}

<h4>What are we sending?</h4>
The example above assumes you have submitted transactions for the current reporting cycle with a DocumentCode (<code>doc</code>) of "123456789".  The <code>doc</code> key identifies the DocumentCode you want to update.

Next comes the Commit flag (<code>cmmt</code>). Set this flag to <code>true</code> to mark the DocumentCode (<code>doc</code>) as committed or <code>false</code> to uncommit the DocumentCode.  <b>Reminder</b>: this action commits or uncommits all transactions with this DocumentCode.

Last is the optional <a class="dev-guide-link" href="/communications/dev-guide/reference/key-value-pair/">Key Value Pair</a> (<code>opt</code>).  This is where optional information about the commit batch, transactions, customer, etc. can be stored.

<h3>Response</h3>
The Commit response contains a confirmation of success or failure:

{% highlight json %}
{
  "ok": true
}
{% endhighlight %}

An <code>ok</code> status of <code>true</code> means that the DocumentCode (<code>doc</code>) was committed or uncommitted successfully depending on the value of the Committed (<code>cmmt</code>) flag.  If <code>false</code> is returned in the <code>ok</code> key, an error code (<code>code</code>) and the error message (<code>msg</code>) are returned.


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/commit-uncommit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>