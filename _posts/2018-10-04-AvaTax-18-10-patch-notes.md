---
layout: post
title: AvaTax API 18.10 Patch Notes
description: Release Notes for the October 2018 update to the AvaTax API
relevantapimethods: ListTaxCodes, BuildTaxContentFile, BuildTaxContentFileForLocation
date: 2018-10-04 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the September 2018 monthly update to the AvaTax API.

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
            <td>2018-10-04</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-10-18</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>Case Insensitive Tax Code Search</h3>

The [ListTaxCodes API](/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes/) now supports case insensitive search.  This means that the following searches will all be able to return results with capitalization:

```
GET /api/v2/definitions/taxcodes?$filter=description contains sushi
GET /api/v2/definitions/taxcodes?$filter=description startswith sushi
```

The same feature has been extended to other [definitions APIs](/api-reference/avatax/rest/v2/methods/Definitions/).  If you need definitions data from AvaTax, please look around to see what information is available!

<h3>Optional Tax Breakdown by Tax Group</h3>

For customers developing code to work with multiple tax types, you may need to break down taxes by tax type groups.  This new breakdown is called `$include=TaxDetailsByTaxType`.  Try it out when you use [CreateTransaction](/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/) for your next tax calculation.

<h3>Tax Content API Improvements</h3>

Avalara's [TaxContent API](/api-reference/avatax/rest/v2/methods/TaxContent/) continues to improve with additional coverage and test suites ensuring reliable tax calculation during sales tax holidays in Puerto Rico, Connecticut, and Canada.  If you're interested in working with the tax content API, contact your account manager or read the [AvaTax Developer Guide chapter on offline tax calculation](/avatax/dev-guide/calculating-tax-offline/tax-content-api/).

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Fix unhandled exception in filing calendars</li>
    <li>Fix unhandled exception in ResetPassword</li>
    <li>Fix incorrect severity level value in Notifications API</li>
    <li>Fix index out of bounds exception in $filter parsing</li>
    <li>Fix incorrect response when entering an unknown country or HS code in ListCrossBorderCodes API</li>
    <li>Fix issue with exemption certificate exposure zone field data elements</li>
    <li>Fix description being removed from notices during tech support sessions</li>
    <li>Fix incorrect empty data field in ResetLicenseKey API</li>
    <li>Fix ordering or filtering by TotalDiscount and TaxDependencyLevelId fields</li>
    <li>Remove ReturnName as a required field in filing calendar model</li>
    <li>Update error message for batch not found</li>
    <li>New error message for users of the AuditTrace API that indicates when trace data has been migrated to offline storage</li>
    <li>Updated error message for invalid address</li>
    <li>Fixed some dead links on free trial link on home page</li>
    <li>Improve documentation for DocumentCodeConflict, PendingApproval document status, and AuditTrace API</li>
</ul>

-- Ted Spence, Director, AvaTax API
