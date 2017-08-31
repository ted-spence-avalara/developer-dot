---
layout: page
title: Glossary
product: avaTax
doctype: dev_guide
nav: apis
disqus: 1
---

In order to provide clarity, we need to define some terminology:

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Word/Phrase</th>
                <th>How we use it:</th>
            </tr>
        </thead>
        <tbody>
            <tr id="nexus">
            <td>Nexus</td>
            <td> There is more information in our <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/NexusModel/">API Reference</a> documentation.</td>
            </tr>
            <tr>
                <td>Customer</td>
                <td>A customer is a person or business that purchases products or services from someone.  In AvaTax, a customer can provide Exemption Certificates using the AvaTax Exemptions or CertCapture products.  These exemption certificates allow the customer to make purchases without paying transactional taxes.  See Chapter 8 - Exemptions for more detail on exemptions.</td>
            </tr>
            <tr>
                <td>Company</td>
                <td>A legal entity tracked by AvaTax that is enabled to use the AvaTax software.  A single business may own one or more companies, and companies may be nested within each other.</td>
            </tr>
            <tr>
                <td>Nexus</td>
                <td>In the United States, Nexus refers to the tax law concept that a Company needs only to collect and remit transactional taxes when they have sufficient business nexus within a jurisdiction.  Nexus is self-determined and self-reported, although auditors may enforce certain rules based on the laws of each jurisdiction.  In AvaTax, a company can declare nexus in countries, states, counties, cities, and other special tax jurisidictions.  AvaTax relies on the company to correctly declare Nexus in order to ensure the correctness of tax calculation.</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>Refers to a place of business where the company has a presence.  Some tax authorities require that you declare all your business locations; others may require that each location be registered with the tax authority.</td>
            </tr>
            <tr>
                <td>Merchant of Record</td>
                <td>Who is the entity that is filing the compliance documents.</td>
            </tr>
        </tbody>
    </table>
</div>