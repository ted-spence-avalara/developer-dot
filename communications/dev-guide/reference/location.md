---
layout: page
title:  Chapter 5.4 - Location
product: communications
doctype: comms_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<h3>Location</h3>

The <code>Location</code> object contains information about the <b>jurisdiction</b>:

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
            <td><code>ctry</code></td>
            <td><code>[string]</code> Country</td>
        </tr>
        <tr>
            <td><code>cnty</code></td>
            <td><code>[string]</code> County</td>
        </tr>
        <tr>
            <td><code>city</code></td>
            <td><code>[string]</code> City</td>
        </tr>
        <tr>
            <td><code>st</code></td>
            <td><code>[string]</code> State</td>
        </tr>
        <tr>
            <td><code>addr</code></td>
            <td><code>[string]</code> Street Address</td>
        </tr>
        <tr>
            <td><code>fips</code></td>
            <td><code>[string]</code> 10-digit USAF FIPS</td>
        </tr>
        <tr>
            <td><code>npa</code></td>
            <td><code>[int]</code> NPANXX (first 6 digits of phone number)</td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td><code>[int]</code> Proprietary code returned from AFC Geo service
                <br>
                PCodes provide the <b>most accurate</b> jurisdiction determination for calculating taxes with our engine.
            </td>
        </tr>
        <tr>
            <td><code>int</code></td>
            <td><code>[bool]</code> Incorporated
                <br>
                <ul>
                    <li><code>true</code>: Address is within city limits</li>
                    <li><code>false</code>: Address is outside of city limits (unincorporated)</li>
                </ul>
            </td>
        </tr>
    </tbody>
  </table>
</div>
<h3>Locations can be specified with a...</h3>

<h4>Street Address</h4>
{% highlight json %}
"bill": {
        "ctry": "USA",
        "addr": "11 West 53 Street",
        "city": "Manhattan",
        "st": "NY",
        "zip": "10019"
}
{% endhighlight %}

<h4>FIPS code</h4>
{% highlight json %}
"to": {
        "fips": "9902604301",
}
{% endhighlight %}

<h4>NPANXX code</h4>
{% highlight json %}
"to": {
        "npa": 212200,
}
{% endhighlight %}

<h4>PCode</h4>
{% highlight json %}
"from": {
        "pcd": 2604301,
}
{% endhighlight %}