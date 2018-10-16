---
layout: post
title: AvaTax API 18.7 Patch Notes
description: Release Notes for the July 2018 update to the AvaTax API
relevantapimethods:
date: 2018-07-06 16:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the July 2018 monthly update to the AvaTax API.

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
            <td>2018-07-11</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-07-25</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>API Usage Logs</h3>

Starting with the July 2018 release, the AvaTax REST API will capture and make available logs with information about your API call history.  This new feature is intended to allow you to debug problems with your API after the fact by examining your request and response pairs to understand why errors took place.

Be on the lookout as we announce the new API usage system.

<h3>Exemption Certificates</h3>

Added support for "Ship-To Zones", a way to track the places in which you do business with a customer.  Using this feature - also called "Ship-To-States" - you can have a reminder anytime you need to update a certificate for this customer.

Added support for customer-to-customer record linking.  Some users of our certificate system like to keep track of the Bill-To and Ship-To addresses for each customer separately.  With the new customer-to-customer linking system, you can match up Bill-To and Ship-To customer records and link them together directly with the AvaTax API.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>When creating tax rules, you can set the TaxCode value to null to have it apply for all tax codes</li>
    <li>Enforce basic email validation when using the Onboarding API</li>
    <li>Fixed validation for Nexus objects for new jurisdictions where the JurisCode field is longer than three characters</li>
    <li>Fix issue where HSCode field was null when processing a sales order</li>
    <li>Fixed problem where omitting a date for the CreateTransaction API would hide other error messages</li>
    <li>Implement tax type labeling and subscription detail for TaxTypeGroup definition API</li>
    <li>Fix bug where companies endpoint does not provide nextLink field element correctly</li>
    <li>Fixed bug where filtering by end date and sourcing would return incorrect list of nexus</li>
    <li>New uniqueness rule for UPC codes - a customer may have only one record with each UPC code</li>
    <li>Fixed an unhandled exception in MultiDocument Create</li>
    <li>Fixed an unhandled exception in ChangePassword</li>
    <li>Fixed unhandled exception in multipart-form-data-upload</li>
</ul>

-- Ted Spence, Director, AvaTax API
