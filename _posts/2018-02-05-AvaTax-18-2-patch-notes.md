---
layout: post
title: AvaTax API 18.2 Patch Notes
description: Release Notes for the February 2018 update to the AvaTax API
date: 2018-02-05 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the February 2018 monthly update to the AvaTax API.

<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Environment</th>
            <th>URL</th>
            <th>Release Date</th>
        </tr>
        <tr>
            <td>Sandbox</td>
            <td><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
            <td>2018-02-12</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-02-26</td>
        </tr>
    </table>
</div>

<h3>Release Schedule Extended</h3>

Each month, Avalara publishes the latest release of AvaTax to the Sandbox environment first so that customers who wish to test the new release can spend time running regression tests against AvaTax.  In response to customer feedback, we are extending the length of time to a minimum of two weeks in sandbox prior to the production deployment window.

This month's release will deploy to sandbox on Monday, February 12th, and be available for testing for two weeks prior to deployment to production.  Our team is continuing to evaluate whether we can further extend this window to permit additional customer preview time.

We have also added a notification system for patch notes.  To subscribe, please enter your email address at the bottom of this page, and you will receive an email when the monthly patch notes for AvaTax are published.

<h3>Changes to TransactionModel</h3>

The [TransactionModel](/api-reference/avatax/rest/v2/models/TransactionModel/) object has new fields related to Value-Added Tax functionality.  The new fields are documented on the [TransactionLineModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionLineModel/).  Users of older software development kits are encouraged to upgrade to the 18.2 SDK to be able to see those models.

<h3>New features for Cross-Border Taxes</h3>

Besides the new `vatCode` and `vatNumberType` fields on the transaction line models, AvaTax now provides new APIs for listing ISO 4217 currency codes.  This new API will list all supported currency codes.

A new API, `ListPreferredPrograms`, documents a list of cross-border preference programs that can be used to modify customs and duty tax calculation.  A preferred program is an international program such as NAFTA that provides special tax calculation logic to companies that participate.  This value can be set as a parameter to international tax calculation.

<h3>Exemption Certificate Provisioning Update</h3>

From review of our customers' experience with the AvaTax Exemption Certificate system, we have decided to change the behavior for newly provisioned companies.  In 18.1, customers were automatically provisioned when they first called any of the [Certificate](), [Customer](), or [CertExpressInvite]() APIs.  This caused unexpected timeout errors for some customers due to the 3-5 minute delay when a company was provisioned during their first API call.

In AvaTax 18.2, all API calls for a newly created company will fail with an error indicating that the company is not provisioned.  Customers should call the `CheckExemptionSetup` API if they wish to know whether storage has been provisioned, and call the `RequestExemptionSetup` API to provision storage for their exemption certificates.  With this new API, customers can now explicitly choose which companies will use exemption certificate storage.

<h3>Other Improvements and Bug Fixes</h3>

<ul class="normal">
  <li></li>
</ul>

-- Ted Spence, Director, AvaTax API
