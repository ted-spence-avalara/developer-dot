---
layout: post
title: AvaTax API 18.6 Patch Notes
description: Release Notes for the June 2018 update to the AvaTax API
relevantapimethods:
date: 2018-06-07 10:00
author: Ted Spence
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the June 2018 monthly update to the AvaTax API.

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
            <td>2018-06-12</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2018-06-26</td>
        </tr>
    </table>
</div>

<h3>Weekly Office Hours Webinar</h3>

Want to discuss these patch notes with the developers who wrote them?  The AvaTax API team hosts a [weekly developer webinar](https://developer.avalara.com/resources/webinars/) where you can meet and talk to developers.  If you would like to ask questions about this release, please sign up and join us for a lively discussion of the AvaTax API.

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>Notifications API</h3>

Avalara doesn't just provide tax rates, we help our customers monitor their tax compliance process.  Our newest API, the Notifications API, tracks issues that have been discovered by our automated monitoring solutions.  The API will allow you to fetch notifications - messages related to your company's tax filings, nexus declarations, exemption certificates, and more.  These notifications will be available both on the AvaTax Website as well as via the API directly.

<h3>Exemption Certificates</h3>

Based on feedback from customers and partners, we are standardizing our support for exemption certificates in our Sandbox environment.  Avalara will track your exemption certificates separately in production and in sandbox, so you can be sure that your testing data won't ever impact your production data.

Using exemption certificates with the AvaTax API requires that you provision data storage for your certificates in advance.  Please call the  [RequestCertificateSetup API](/api-reference/avatax/rest/v2/methods/Certificates/RequestCertificateSetup/) to provision storage for your company.

The 18.6 release also adds a number of small improvements and bugfixes to the certificate exemption system:

<ul class="normal">
  <li>Ability to track "Ship-To Zones" where you send products to a customer, which will help you track what certificates you need from each company</li>
  <li>Ability to link customer bill-to records to customer ship-to records</li>
  <li>Bugfixes to filtering and ordering when retrieving data</li>
  <li>Clarify field names for both the "Exemption Reason" from the "Validated Exemption Reason" for customers who are using the CertCapture certificate audit process</li>
  <li>Improve documentation throughout the certificates API suite</li>
</ul>

<h3>Onboarding API for Avalara Included Partners</h3>

The new RequestNewEntitlement API allows you to attach offers to a customer that already has an existing AvaTax account.  Please contact your partner launch representative for more information about this API.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Improve timer metrics for AvaTax API calls</li>
    <li>Fix a variety of unhandled exceptions</li>
    <li>Update length of "City" field to 50 characters for consistency</li>
    <li>Improve fixing by ListJurisdictions</li>
    <li>Fix problems with AddressType showing up as a number rather than a string in some documentation</li>
    <li>When a company is flagged as "Inactive", all child companies that inherit a tax profile are also flagged as inactive</li>
    <li>Custom error message when you try to create a TaxRule in a jurisdiction where you do not have nexus</li>
    <li>Fix issues with filtering on null values in some definitions APIs</li>
    <li>Fix issue with JurisdictionTypeId being null for sales orders</li>
    <li>Fix issues with sorting for ListNexus</li>
    <li>Improved error codes when creating subscriptions</li>
    <li>Improved documentation for a variety of fields and methods</li>
</ul>

-- Ted Spence, Director, AvaTax API
