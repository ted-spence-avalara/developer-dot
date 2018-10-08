---
layout: post
title: AvaTax API 18.9 Patch Notes
description: Release Notes for the September 2018 update to the AvaTax API
relevantapimethods: AddLines, CreateTaxRules, ListParameters, DeleteUsers
date: 2018-09-10 16:00
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
            <td>2018-09-11</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-09-25</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>Pagination Improvements</h3>

The AvaTax API presents a standard method for pagination using the pattern set out in the [Microsoft REST API Guidelines](https://github.com/Microsoft/api-guidelines).  This standard uses the query string parameters `$top` and `$skip` to indicate the number of records you wish to fetch.  

All AvaTax APIs enforce a maximum number of records that can be fetched in a single API request.  The limit is set at 1,000 records.  Your code will receive information about the total number of records detected by your fetch call so that you can display the appropriate pagination information and allow users to browse through records.

The REST API 18.9 release includes more documentation about pagination and standardizes the wording used to be more consistent.

<h3>Improvements to Custom Tax Rules</h3>

Avalara customers can use the [TaxRules API suite](/api-reference/avatax/rest/v2/methods/TaxRules/) to customize the behavior of the tax calculation engine.  If you have received custom tax rulings from your auditor, or if your customers have special rules for exemptions, or for many other cases, these tax rules can help ensure that your software works the way your accounting department wants.

This release contains customized error messages and better documentation for common use cases.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Removed unnecessary parameters for ListNexusByFormCode API</li>
    <li>Fix unhandled exception when filtering transactions by totalDiscount</li>
    <li>Fix unhandled exception in CreateBizTechCustomerAccount</li>
    <li>Fix unhandled exception in ParseFilter for Index outside bounds of array</li>
    <li>Fix unhandled exception in new account request code</li>
    <li>Fix unhandled exception in CertExpressInvites</li>
    <li>Fix unhandled exception in null value inside arrays for object creation</li>
    <li>Fix unhandled exception on ListCertificateExemptReasons</li>
    <li>Fix unhandled exception when creating notifications with null severity level ID</li>
    <li>Fix unhandled exception in DeleteTaxCode</li>
    <li>Fix unhandled exception in ListBatches</li>
    <li>Cleaned up a variety of old exceptions that are no longer in use</li>
    <li>Corrected an issue where the AddLines API would incorrectly flag a transaction into lat/long mode</li>
    <li>Hide disabled parameters from the ListParameters API</li>
    <li>Update documentation around the DeleteUsers API to clarify that account owners can disable users within their account</li>
</ul>

-- Ted Spence, Director, AvaTax API
