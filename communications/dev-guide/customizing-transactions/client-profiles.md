---
layout: page
title: Chapter 4.1 - Client Profiles
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/account-customizations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>What is a client profile?</h3>
Client profiles provide a way to customize how the AFC tax engine interprets a transaction request and returns the tax results.  There can be multiple client profiles associated to a client.  These customizations include overrides, bundles, exclusions, exemptions, and a few configurations for how tax data is returned.

<h3>Why use client profile?</h3>
There are a few reasons to use client profiles:
<ul class="dev-guide-list">
  <li>Profiles are cached - this speeds up the response times on requests</li>
  <li>The use of profiles eliminates the need to apply the same override, exclusion, exemption, etc. with each request.  Some of the customizations contained within a client profile, such as an override, can be done within an individual transaction request.  However, instead of adding the same override, exclusion, or exemption to each line, a customization file can be added to your client ID as a profile.  When the profile is <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">specified in the header</a> with <code>client_profile_id</code>, the overrides, exclusions, exemptions, and bundles are automatically be applied to all transactions run using that header.</li>
  <li>Multiple profiles can be created for your client ID, meaning that multiple scenarios can be created and utilized.  Examples uses for multiple profiles include:
  <ul class="dev-guide-list">
    <li>Separate configurations for different aspects of your business</li>
    <li>Separate configurations for sub companies</li>
    <li>Testing proposed configurations</li>
  </ul>

<h3>How to apply a client profile to a session</h3>
When <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">authenticating</a> to REST v2, pass the desired client profile ID in the <code>client_profile_id</code> header field.

<h4>Postman example</h4>
Add the following <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">headers</a> to your request:
<ul class="dev-guide-list">
  <li><code>api_key</code></li>
  <li><code>client_id</code></li>
  <li><code>Content-Type: application/json</code></li>
  <li><code>client_profile_id</code></li>
</ul>
<img src="/public/images/comms/dev-guide/comms_dev_guide_2.png"/>

<h3>How to run transactions without a profile</h3>
There are two ways to send send a transaction to AFC Rest v2 without a client profile applied:
<ul class="dev-guide-list">
  <li>Do not include <code>client_profile_id</code> from the <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">header</a>.  <code>client_profile_id</code> is an optional header field</li> 
  <li>Set <code>client_profile_id</code> to 0 in the <a class="dev-guide-link" href="/communications/dev-guide/getting-started/authentication/">header</a></li>
</ul> 

<h3>How to request a new client profile or changes to an existing client profile</h3>
Contact <a class="dev-guide-link" href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a> to request a new client profile for your account.
<ul class="dev-guide-list">
  <li>Request the configuration changes required and any overrides, exclusions, exemptions, or bundles needed.  If you already have <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/account-customizations/">customization files</a>, attach those files to the email.</li>
  <li>Include instructions as to whether the files should be applied to the Sandbox, Production, or both environments.</li>
  <li>If changes are needed to an existing client profile, include the <code>client_profile_id</code> to be updated.</li>
  <li>Once applied, the account could take up to 24 hours to refresh with the new changes.</li>
</ul>

<h4>Note</h4>
Client profiles are numbered in sequential order, starting with <code>client_profile_id</code> "1".  By default, the System Default profile is "0".

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/account-customizations/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>