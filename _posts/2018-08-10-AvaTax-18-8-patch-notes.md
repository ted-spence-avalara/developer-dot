---
layout: post
title: AvaTax API 18.8 Patch Notes
description: Release Notes for the August 2018 update to the AvaTax API
relevantapimethods:
date: 2018-08-10 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the August 2018 monthly update to the AvaTax API.

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
            <td>2018-08-15</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-08-29</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>API Documentation Updates</h3>

Avalara has updated to the latest revision of Swagger / OpenAPI.  For customers who make use of our automated swagger documentation, you may see a different user interface.

Clarified documentation for the process of declaring Nexus.  Updated the documentation for `NexusModel` to clarify which fields are user-selectable and which fields must be loaded from a previous call to `ListNexus`.

Improved documentation for the TaxContent API and for offline tax calculation logic to emphasize best practices.  Avalara recommends downloading offline tax content once per day, and only downloading tax rate data for the current day. Customers that download offline tax content for time periods further in the future than the upcoming 24 hour period should be aware that rates may change.

Adding more documentation to clarify pagination for large data sets.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Fix bug with RequestNewAccount API that caused a custom email to hide certain fields.</li>
    <li>Corrected issue where createdDate and createdUser were not correctly set when calling Update APIs</li>
    <li>Fix inaccurate error message when creating CompanyUser for a company you can't see</li>
    <li>Ensure RateTypeId is always a string to avoid Enum issues</li>
    <li>Fix error messages for NexusParentDateMismatch</li>
    <li>Improve internal trace logic with more information and higher performance logging</li>
    <li>Fix unhandled exception in RefundTransaction</li>
    <li>Ensure that users can create tax rules for local jurisdictions when the state is set to automatically manage local nexus declarations</li>
    <li>Fix some issues with tax thresholds in the TaxContent API for locations</li>
    <li>Fix some issues with duplicated zip codes in other tax content APIs</li>
    <li>Fix unhandled exception in CreateCompanies using nested objects with null data</li>
    <li>Fix unhandled exception in CreateUsers</li>
    <li>Fixed error message for company creation with nested nexus data</li>
    <li>Improvements to error messages for RequestNewAccount</li>
    <li>Fix null reference exception for NexusModel</li>
    <li>Performance and scaling improvements</li>
</ul>

-- Ted Spence, Director, AvaTax API
