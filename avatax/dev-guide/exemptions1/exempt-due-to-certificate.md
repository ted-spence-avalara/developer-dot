---
layout: page
title: Exempt due to Certificate
product: avaTax
doctype: dev_guide
chapter: exemptions
nav: apis
disqus: 1
---

{% include exemptions_toc.html %}

An Exemption Certificate provides information about the buyer or customer, and their tax status. For example it's possible that a customer be sales tax exempt in a specific state due to their being registered as a reseller there.


There are several ways to store/create an exemption record across the service, however they all use a key value; the CustomerCode.


CustomerCode is a unique identifier for that specific customer record that was invoiced or sold an item. This value (must be in one of Avatax repositories to exempt the customer,  CertCapture or Avatax Admin Console- AP) is a part of both exemption records that are created using our CertCapture service and exemption records created in AvaTax via the stand alone functionality built into it.

<h3 id="exemptions-7">Certifcation Requirements for Exemption Certificates Support</h3>

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th></th>
                <th>Status</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Certified Connector</th>
                <td>Required</td>
                <td>AvaTax Certified Connectors must allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service. <br />Typically this is an account name, customer name, or email address on file for the customer.</td>     
            </tr>
            <tr>
                <th>Custom Integration</th>
                <td>Required</td>
                <td>Customer integrations should also allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service. <br /> This is important for both supporting Tax Exempt Sales as well as Reconciling data between AvaTax and the application that is being integrated with.</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="dev-guide-test">
<h3 id="exemptions-8">Testing Exemption Cerificate Exemptions</h3>
<h4>Setup</h4>

Transactions sold to a customer who has an exemption record within the service should be sales tax exempt if the transaction ships to the state they are sales tax exempt in.
  <ol>
    <li>Create an exemption record within your test account following the steps section <a href="https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/Add_or_Import_ECMS_Exemption_Certificate_Entries">Add an ECMS Exemption Certificate Entry"</a></li>
    <ul class="dev-guide-list">
        <li>Set CustomerCode to "HASEXEMPTION"</li>
        <li>Customer Name can whatever you'd like.</li>
        <li>Use the address information defined below for the SingleLocation</li>
        <li>Set the Certificate Type to "Blanket"</li>
        <li>Choose the Issuing Region of WA</li>
        <li>Choose Effective Date of 6/1/2017</li>
        <li>Use 9999999 for the Exemption No</li>
        <li>Choose any Business Type</li>
        <li>Choose Exempt Reason of G) Resale</li>
    </ul>
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Transaction Type: SalesInvoice</li>
        <li>Transaction Code: Chapter-8-Test-1</li>
        <li>Document Date: 2017-06-15</li>
        <li>CompanyCode, Date set to reasonable default values.</li>
        <li>CustomerCode set for HASEXEMPTION (make sure the customer you invoice for example is HASEXEMPTION)</li>
        <li>CustomerUsageType: NULL</li>
        <li>Addresses:</li>
        <ul class="dev-guide-list">
            <li>SingleLocation</li>
            <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
        </ul>
        <li>Line #1:</li>
        <ul class="dev-guide-list">
            <li>Amount 100</li>
            <li>TaxCode P0000000</li>
        </ul>    
    </ul>
</ol>
Calculate tax for your transaction using AvaTax.

<h4>Expected API Call</h4>

<pre>
{
    "type": "SalesInvoice",
    "code": "Chapter-8-Test-1",
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "HASEXEMPTION",
    "addresses:" {
        "singleLocation": {
            "line1": "100 Ravine Lane NE",
            "city": "Bainbridge Island",
            "region": "WA",
            "country": "US", 
            "postalCode": "98110"
        }
    },
    "lines": [
        {
            "number": "1",
            "amount": 100,
            "taxCode": "P0000000"
        }
    ]
}
</pre>

<h4>Assertions</h4>


The tax for line 1 should be $0.00.


The Taxable amount for line 1 should be $0.00.


The exempt amount for line 1 should be $100.00.

</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions1/exempt-due-to-certificate/">Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions1/exempt-due-to-entity-use-code/">Next</a></li>
</ul>