---
layout: page
title: Exemptions
product: avaTax
doctype: dev_guide
nav: apis
disqus: 1
---

This chapter is about exemptions - in other words, reasons that certain transactions are not taxed.By the end of this chapter, you will learn the following: 
<ul class="dev-guide-list">
    <li>All the factors that could cause tax on a transaction to be zero</li>
    <li>Which factors are company-related, which are product-related, and which are transaction-related</li>
    <li>How to allow a customer to choose these factors correctly in your user interfact</li>
    <li>Test cases that must be understood to correctly handle tax exemptions</li>
</ul>

Let's begin by understanding what could cause a transaction to have no tax.

<h3>What causes tax to be zero?</h3>

One of the most common questions asked about tax software is, "Why is there no tax on this transaction?"  Because tax is a complicated problem domain (is this sentence necessary - AP), there are many different factors that can lead to a tax result of zero.

Tax can be zero for either a legal reason or a technical reason.  In the case of a legal reason, AvaTax is set up to allow you to configure this legal reason and it will correctly calculate zero tax based on these circumstances:
<ul class="dev-guide-list">
    <li>In the United States, a company may not be compelled to collect tax.  For example, this will occur if the company is selling a product in a jurisdiction where they do not have <u><b>Nexus</b></u>.  In this case, it is legally the responsibility of the buyer to remit Consumer Use Taxes, but the seller is not required to charge taxes on the transaction.</li>
    <li>Some states in the United States have zero sales or use tax rates.</li>
    <li>A product may be non-taxable, or exempt, or have its tax rate set to zero.  Some jurisdictions use the phrase "Nontaxable" to refer to product-taxability, while others refer to this as an "Exemption" or a "Zero-Rate".  This use case is fully described in <a href="#">Chapter 5, "Product Taxability."</a></li>
    <li>A buyer may have an Exemption Certificate, such as a Resale Exemption Certificate or a Direct Pay Permit.</li>
    <li>The purchase may be made for an exempt purpose, which would be identified by an <u><b>EntityUseCode.</b></u>  For example, purchases for diplomatic use are generally exempt in the United States.</li>
</ul>

There are also technical reasons why tax may be zero.  When using AvaTax, you can specifically make a request to specify a <u><b>TaxOverride</b></u>.
<ul class="dev-guide-list">
    <li>A TaxOverride indicates that you are forcing AvaTax to set a specific tax amount for a transaction.  This is useful when importing transactions from a different source; or for comparing functionality between AvaTax and a different tax engine.</li>
</ul>

Although tax overrides may seem to be a very easy way to adjust the taxes for a transaction, we do not recommend using it except when importing transactions whose tax was calculated using a different tax engine.


Let's discuss each condition in turn.

<h3>Zero Tax due to Nexus</h3>

The most common reason that tax could be zero is if your company does not have <b><u>"Nexus"</u></b>, and is not obligated to collect tax.

This definition of the word <b><u>Nexus</u></b> comes from the United States, where a legal ruling by the supreme court established that a company must only collect tax if they have sufficient "Nexus" in a jurisdiction.  Unfortunately, the specific definition of Nexus is complex and changes when new laws are passed or when new legal precedents are established.  

When using AvaTax, your company must decide where it has nexus, and where it does not.  This selection is used to determine whether you are obligated to collect taxes.  For example, if your company has nexus in the state of Massachusetts, but you do not have nexus in the state of Rhode Island, in general a tax calculation for a customer in Rhode Island will result in zero tax.  According to legal precedents in the United States, this zero tax means that it is the responsibility of the buyer, instead, to determine the correct tax to pay to the taxing authority.  This tax obligation is called "Consumer Use Tax".

<h3>Testing Nexus Based Obligations</h3>
<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Setup</th>
                <th>Expected API Call</th>
                <th>Assertions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
Your DEVGUIDE company should ahve nexus in Washington State, but not in Rhode Island.

In your connector, creat the following transaction: 

<ul class="dev-guide-list">
    <li>Transaction Type: SalesInvoice</li>
    <li>Transaction Code: Chapter-8-Test-1</li>
    <li>Document Date: 2017-06-15</li>
    <li>Addresses:</li>
    <ul class="dev-guide-list">
        <li>SingleLocation</li>
        <li>468 Angell Street, Providence, RI 02906</li>
    </ul>
    <li>Line #1</li>
    <ul class="dev-guide-list">
        <li>Amount: 100</li>
        <li>TaxCode: P0000000</li>
    </ul>
</ul>

Calculate tax for your transaction using AvaTax.
                </td>
                <td>
```json
{
    "type": "SalesInvoice",
    "code": "Chapter-8-Test-1",
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "ABC",
    "addresses": {
        "singleLocation": {
            "line1": "468 Angell Street",
            "city": "Providence",
            "region": "RI",
            "country": "US", 
            "postalCode": "02906"
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
```
</td>
<td>
The tax for line 1 should be $0.00.

The Taxable amount for line 1 should be $0.00. 

The Exempt amount for line 1 should be $100.00.
                </td>
            </tr>
        </tbody>
    </table>
</div>

<h3>States that do not collect sales Tax</h3>

<h3>Zero Tax due to Product Taxability</h3>

Another common reason why tax could be zero would be related to product taxability.  A transaction may have zero tax because the products sold in the transaction are exempt from tax, or nontaxable, or have a zero rate, in the jurisdictions involved in that transaction.


Product taxability is discussed in more detail in <a href="#">Chapter 5 - Product Taxability</a>.

<h3>Exempt due to Certificate</h3>

An Exemption Certificate provides information about the buyer or customer, and their tax status. For example it's possible that a customer be sales tax exempt in a specific state due to their being registered as a reseller there.


There are several ways to store/create an exemption record across the service, however they all use a key value; the CustomerCode.


CustomerCode is a unique identifier for that specific customer record that was invoiced or sold an item. This value (must be in one of Avatax repositories to exempt the customer,  CertCapture or Avatax Admin Console- AP) is a part of both exemption records that are created using our CertCapture service and exemption records created in AvaTax via the stand alone functionality built into it.

<h3>Certifcation Requirements for Exemption Certificates Support</h3>

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
                <td>Certified Connector</td>
                <td>Required</td>
                <td>AvaTax Certified Connectors must allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service. <br />Typically this is an account name, customer name, or email address on file for the customer.</td>     
            </tr>
            <tr>
                <td>Custom Integration</td>
                <td>Required</td>
                <td>Customer integrations should also allow for a clear and concise CustomerCode value to be consumed by the AvaTax Service. <br /> This is important for both supporting Tax Exempt Sales as well as Reconciling data between AvaTax and the application that is being integrated with.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Testing Exemption Cerificate Exemptions</h3>

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Setup</th>
                <th>Expected API Call</th>
                <th>Assertions</th>
            </tr>
        </thead>
            <tr>
                <td>Transactions sold to a customer who has an exemption record within the service should be sales tax exempt if the transaction ships to the state they are sales tax exempt in.
                <ol>
                    <li>Create an exemption record within your test account following the steps section <a href="#">Add an ECMS Exemption Certificate Entry"</a></li>
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
                </td>
                <td>
```json
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
```
                </td>
                <td> The tax for line 1 should be $0.00. <br />The Taxable amount for line 1 should be $0.00.<br />The exempt amount for line 1 should be $100.00.</td>
            </tr>
        <tbody>
        </tbody>
    </table>
</div>

<h3>Exempt due to Entity Use Code</h3>

An Entity Use Code provides information about how a transaction will be used by the customer, and information about the type of customer making the purchase.  For example, a purchase made by the US federal government would be designated for government use, and it would generally be exempt or nontaxable for that specific use.

Entity Use Codes are generally displayed in the user interface of a connector as a dropdown, combo box, or selection element.  This element uses the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a> to retrieve the list of available choices, and displays it as a list of values in a dropdown.  The default value should be NULL, indicating that by default a transaction does not have a custom entity use code.

********Insert the dropdown picture here*********

The value of the customer's choice is placed in the <u><b>customerUsageType</b></u> field in the <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/">CreateTransctionModel</a> element.  Here's how to find the values and put them into your transaction.

First, call the  <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Definitions/ListEntityUseCodes/">ListEntityUseCodes API</a>.  The field "code" is the value you will use, and the field "name" is the description you will show to the customer.  You can either show "code - name", like "A - FEDERAL GOV", or you can just show the name field.

```json
{
    "@recordsetCount": 17,
    "value": [
        {
            "code": "A",
            "name": "FEDERAL GOV",
            "description": "",
            "validCountries": [
                "US"
            ]
        },
        {
            "code": "B",
            "name": "STATE GOV",
            "decription": "",
            "validCountries": [
                "US"
            ]
        },
    ]
}
```

If the customer makes a choice, put that value in the "customerUsageType field on the CreateTransactionModel element:

```json
{
    "type": "SalesInvoice",
    "companyCode": "DEFAULT",
    "date": "2017-06-16",
    ...
    "customerUsageType": "A",
    ...
}
```

If the customer does not make a choice, omit the customerUsageType element entirely, or set its value to null.

Since changing this value can make an entire transaction exempt, this field is not generally displayed when building a web storefront.  Developers are encouraged instead to ask their customers for an exemption certificate or other documentation that can validate the claim that the customer is an exempt buyer.

<h3>Certification Requirements for Entity Use Codes</h3>

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
                <td>Certified Connector</td>
                <td>Required</td>
                <td>AvaTax Certified Connectors must allow a salesperson to provide an entity use code for a transaction.<br />The connector must display a dropdown box allowing the salesperson to choose from defined codes.<br />The default code must be null.</td>  
            </tr>
            <tr>
                <td>Custom Integration</td>
                <td>Suggested</td>
                <td>It's suggested for a Custom integration to implement entity use codes, if the application supports Tax Exempt sales.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Testing Entity Use Code Exemptions</h3>

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Setup</th>
                <th>Expected API Call</th>
                <th>Assertions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Transactions sold with an EntityUseCode of "D" are considered sold for foreign diplomatic use.
                In the United States, foreign diplomatic sales are legally exempt from sales taxes.
                In your connector, create the following transaction:
                <ul class="dev-guide-list">
                    <li>Transaction Type: SalesInvoice</li>
                    <li>Transaction Code: Chapter-8-Test-2</li>
                    <li>Document Date: 2017-06-15</li>
                    <li>CompanyCode, Date, CustomerCode set to reasonable default values.</li>
                    <li>CustomerUsageType: D</li>
                    <li>Addresses:</li>
                        <ul class="dev-guide-list">
                            <li>SingleLocation</li>
                            <li>100 Ravine Lane NE, Bainbridge Island, WA, 98110</li>
                        </ul>
                    <li>Line #1:</li>
                        <ul class="dev-guide-list">
                            <li>Amount: 100</li>
                            <li>TaxCode: P0000000</li>
                        </ul>
                </ul>
                Calculate tax for your transaction using AvaTax.</td>
                <td>
```json
{
    "type": "SalesInvoice",
    "code": "Chapter-8-Test-2"
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode:" "ABC",
    "customerUsageType": "D",
    "addresses": {
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
```</td>
                <td>The tax for line 1 should be $0.00.
                The Taxable amount for line 1 should be $0.00.
                The Exempt amount for line 1 should be $100.00.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Zero Tax using Tax Overrides</h3>

If you are using a tax override to import tax calculated by a different tax engine, AvaTax may assign zero tax to your transaction in order to match the functionality of your older software.

Tax Overrides are discussed in more detail in <a href="#">Chapter 6 - Discounts and Overrides</a>.

<h3>Partial Exemptions</h3>
