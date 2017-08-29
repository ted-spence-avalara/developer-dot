---
layout: page
title: 1.1 - Connecting to the API
product: avaTax
doctype: dev_guide
chapter: getting-started-with-avatax
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Avalara provides free trial accounts you can use to begin developing against AvaTax. This trial account will allow you to use advanced AvaTax functionality in the U.S. and Canada only, in an environment called Sandbox.  You can begin by <a class="dev-guide-link" href="https://developer.avalara.com/avatax/get-started/">signing up for a free AvaTax 30-day sandbox account online</a>, or you can <a class="dev-guide-link" href="https://www.avalara.com/contact-us/?referrer=&lastReferrer=developer.avalara.com&sessionId=1499692719266">contact sales</a> to purchase a production account.  Once your 30-day trial is up, you can continue using your account through our <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/">Free API</a> methods. 

You will need to add company profile and tax profile information to calculate sales tax. Because this is a sandbox, you can experiment all you like and your test data will be kept separate from your production accounts.

When your account is provisioned, you will notice that Avalara also provides a <a class="dev-guide-link" href="https://admin-development.avalara.net/">website</a> where you can log on and administer your account.  For information about account administration features, please visit the <a class="dev-guide-link" href="https://help.avalara.com/">Avalara Help Center</a> for setup assistance and other guides and documentation.

<h3>AvaTax Software Development Kit</h3>

In starting to build your connector to AvaTax, we understand that you want to be both efficient and effective.  Therefore, we have created our Avalara Software Development Kits, which have available code samples that are designed to help you get started in writing code using AvaTax.

The AvaTax SDK is fully open source, and you can download the source code for a myriad of languages and frameworks.  You will find officially supported libraries and those that are contributed by our community on the <a class="dev-guide-link" href="https://developer.avalara.com/sdk/">AvaTax SDK page</a>. We welcome your feedback - if you wish to report a bug or submit a question, please contact us using our <a class="dev-guide-link" href="https://community.avalara.com/avalara">community support forums</a> or submit a pull request directly to the GitHub repository for each SDK.

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Language</th>
                <th>Version</th>
                <th>Status</th>
                <th>Github</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>C#</td>
                <td><img src="https://img.shields.io/nuget/v/Avalara.AvaTax.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-DotNet-SDK.svg?branch=master&style=plastic"/></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-DotNet-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-DotNet-SDK</a></td>
            </tr>
            <tr>
                <td>Java</td>
                <td><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic"/><img src="https://img.shields.io/badge/Sonatype%20Snapshots-2.17.3.48--SNAPSHOT-blue.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK.svg?branch=master&style=plastic"/></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-JRE-SDK</a></td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK.svg?branch=master&style=plastic"></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-JS-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-JS-SDK</a></td>
            </tr>
            <tr>
                <td>PHP</td>
                <td><img src="https://img.shields.io/packagist/v/avalara/avataxclient.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-PHP-SDK.svg?branch=master&style=plastic"></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-PHP-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-PHP-SDK</a></td>
            </tr>
            <tr>
                <td>Scala</td>
                <td><img src="https://maven-badges.herokuapp.com/maven-central/net.avalara.avatax/avatax-rest-v2-api-java_2.11/badge.svg?style=plastic"/><img src="https://img.shields.io/badge/Sonatype%20Snapshots-2.17.3.48--SNAPSHOT-blue.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-JRE-SDK.svg?branch=master&style=plastic"></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-JRE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-JRE-SDK</a></td>
            </tr>
            <tr>
                <td>Ruby</td>
                <td><img src="https://img.shields.io/gem/v/avatax.svg?style=plastic"/></td>
                <td><img src="https://api.travis-ci.org/avadev/AvaTax-REST-V2-Ruby-SDK.svg?branch=master&style=plastic"></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-Ruby-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-Ruby-SDK</a></td>
            </tr>
            <tr>
                <td>SalesForce Apex</td>
                <td></td>
                <td></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-Apex-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-Apex-SDK</a></td>
            </tr>
            <tr>
                <td>IBM I RPG</td>
                <td></td>
                <td></td>
                <td><a class="dev-guide-link" href="https://github.com/avadev/AvaTax-REST-V2-RPGLE-SDK?referrer=&lastReferrer=developer.avalara.com&sessionId=1502456322024">AvaTax-REST-V2-RPGLE-SDK</a></td>
            </tr>
        </tbody>
    </table>
</div>

<br />

If you choose, you can always write your own code to contact the AvaTax API directly.  We publish all of our <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/">API reference documentation online</a>. Our internal developers use the exact same documentation that we publish to our partners and customers, so you know you'll always see the latest information online.
<pre>
GET https://sandbox-rest.avatax.com/api/v2/utilities/ping
Type: Basic Authorization
Username/Account Number
Password/License Key
 
{
    "version": "17.7.0-101",
    "authenticated": false,
    "authenticationType": "None"
}
</pre>

Our high-performance API provides tax calculation answers faster than the blink of an eye - but we will always keep challenging ourselves to improve the AvaTax experience. We won’t rest until everyone can calculate tax effortlessly.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/getting-started-with-avatax/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/getting-started-with-avatax/authentication-in-avatax/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>