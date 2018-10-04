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

<h3>The Commit Request</h3>
The <code>Commit</code> request is used to change the <code>Commit</code> flag for a given <code>DocumentCode</code>.  Let's send a simple <code>Commit</code> call using <a href="https://www.getpostman.com">Postman</a> and inspect the results.

<h3>Headers</h3>
Add the following <a href="/communications/dev-guide/getting-started/authentication/">mandatory headers</a> to your request:
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
The example above assumes you have submitted transactions for the current reporting cycle with a DocumentCode (<code>doc</code>) of "123456789" set.  This specifies the DocumentCode you want to update.

Next comes the Commit flag (<code>cmmt</code>). Set this flag to <code>true</code> to mark the DocumentCode (<code>doc</code>) as commited or <code>false</code> to uncommit the DocumentCode.  Reminder: this action commits or uncommits all transactions with this DocumentCode.

Last is the optional <a href="/communications/dev-guide/reference/key-value-pair/">Key Value Pair</a> (<code>opt</code>).  This is where optional infomraiton about the commit batch, transactions, cutomer, etc. can be stored.

<h3>Response</h3>
The Commit response contains a confirmation of success or failuare:

{% highlight json %}
{
  "ok": true
}
{% endhighlight %}

An <code>ok</code> status of <code>true</code> means that the DocumentCode (<code>doc</code>) was commited or uncommited successfully depending on the value of the Commited (<code>cmmt</code>) flag.  If <code>false</code> is returned in <code>ok</code>, an error code (<code>code</code>) and the error message (<code>msg</code>) are also returned.


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/commit-uncommit/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>