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

<div class="dev-guide-certification">
<div class="dev-guide-certification-heading">Certification Requirements - Exemptions Certificates Support</div>
<div class="dev-guide-certification-content">
    <h3>Certified Connector</h3>
    <h4>Required</h4>
    AvaTax Certified Connectors must allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service.
    Typically this is an account name, customer name, or email address on file for the customer.
    The connector must show the following:
    <ul class="dev-guide-list">
        <li>A CustomerCode field for the invoice</li>
        <li>Ability to look up a customer in a dropdown list using the CertCapture federated customer-lookup API</li>
        <li>Ability to add a new customer on the fly (user can input customer number, name, mailing address, ship-to-zones, and email address)</li>
        <li>View and Update customer record</li>
        <li>Ability to list active exemption certificates for a customer (show at a minimum exempt state, exempt reason, expiration date)</li>
        <li>Ability to view an exemption certificate</li>
    </ul>
    <h3>Recommended Connector</h3>
    <h4>Reccommended</h4>
    These features are strongly suggested but are not mandatory:
        <ul class="dev-guide-list">
            <li>Ability to upload a certificate directly in the user interface</li>
            <li>Ability to revoke a certificate</li>
            <li>Ability to load customers via a batch</li>
            <li>Link to CertCapture admin console</li>
        </ul>
    <h3>Customer Integration</h3>
    <h4>Required</h4>
    <ul class="dev-guide-list">
        <li>Customer integrations should also allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service.</li>
        <li>This is important for both supporting Tax Exempt Sales as well as Reconciling data between AvaTax and the application that is being integrated with.</li>
    </ul>
</div>
</div>

<div class="dev-guide-test">
<div class="dev-guide-test-heading">Test Case: Exemption Certificate Exemptions - Case 1</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>

<li>Create two customers directly in your connector folowing the steps section: <a href="https://help.avalara.com/000_Avalara_AvaTax/Exempt_Customers_from_Sales_Tax/Add_or_Import_ECMS_Exemption_Certificate_Entries">"Add an ECMS Exemption Certificate Entry"</a></li>
    <ul class="dev-guide-list">
        <li>Customer #1
            <ul class="dev-guide-list">
                <li>Set CustomerCode to "HASEXEMPTION"</li>
                <li>Customer Name should be "Has Exemptions"</li>
                <li>Address is 100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
        <li> Customer #2
            <ul class="dev-guide-list">
                <li>Set CustomerCode to "NOEXEMPTION"</li>
                <li>Customer Name should be "No Exemptions"</li>
                <li>Address is 100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
            </ul>
        </li>
    </ul>

<h4>Assertions</h4>
Customer should be searchable from the API
</div>
</div>

<div class="dev-guide-test">
<div class="dev-guide-test-heading">Test Case: Exemption Certificate Exemptions - Case 2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
<li>Create an exemption certificate for customer "HASEXEMPTION"</li>
    <ul class="dev-guide-list">
        <li>Set the Certificate Type to "Blanket"</li>
        <li>Choose the Issuing Region of WA</li>
        <li>Choose the Effective Date of 6/1/2017</li>
        <li>Choose 9999999 for the Exemption No</li>
        <li>Choose any Business Type</li>
        <li>Choose Exempt Reaseon of G) Resale</li>
    </ul>
</ul>
</div>
</div>

<div class="dev-guide-test">
<div class="dev-guide-test-heading">Test Case: Exemption Certificate Exemptions - Case 3</div>
<div class="dev-guide-test-content">
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
</div>

<div class="dev-guide-test">
<div class="dev-guide-test-heading">Test Case: Exemption Certificate Exemptions - Case 2</div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
    <ul class="dev-guide-list">
        <li>Using an identical transaction as in step 3, use the company code for the customer that does not have an exemption.</li>
    </ul>
</div>
</div>

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/exemptions1/exempt-due-to-certificate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/exemptions1/exempt-due-to-entity-use-code/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>