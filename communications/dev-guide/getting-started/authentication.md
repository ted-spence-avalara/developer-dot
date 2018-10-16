---
layout: page
title: Chapter 1.2 - Authentication
product: communications
doctype: comms_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/getting-started/environments-endpoints/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Required Headers</h3>

Three pieces of information must appear in your request header:

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
        <td><code>api_key</code></td>
        <td>Base64 "username:password"</td>
      </tr>
      <tr>
        <td><code>client_id</code></td>
        <td>Unique identifier for your company. Avalara will provide this to you during <a class="dev-guide-link" href="/communications/dev-guide/getting-started/account-creation/">account creation</a> and your Client ID will be the same across all environments.</td>
      </tr>
      <tr>
      <td><code>Content-Type</code></td>
      <td><code>application/json</code></td>
      </tr>
    </tbody>
  </table>
<div>

<h3>Encode your API Key</h3>

To encode a plaintext string to Base64 in Windows Powershell, you can use the following script:

{% highlight powershell %}
# Encode a string to Base64
[System.Convert]::ToBase64String(
  [System.Text.Encoding]::UTF8.GetBytes("first.last@avalara.com:secretpassword!"));
{% endhighlight %}

For example, if your username is <code>first.last@avalara.com</code> and your password is <code>secretpassword!</code>, your <code>api_key</code> would be <code>Zmlyc3QubGFzdEBhdmFsYXJhLmNvbTpzZWNyZXRwYXNzd29yZCE=</code>

<h3>Optional Headers</h3>

Our tax engine allows for additional customization when calculating taxes and we accomplish this through the creation of <b>Client Profiles</b>. We will discuss how Client Profiles work in more detail in the <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/">Customizing Transactions</a> section. For now, just know that you have the ability to pass an additional header to specify a specific profile:

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
        <td><code>client_profile_id</code></td>
        <td>An integer that specifies which profile you want to use when calculating the taxes in this request</td>
      </tr>
    </tbody>
  </table>
<div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/getting-started/account-creation/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/getting-started/environments-endpoints/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>