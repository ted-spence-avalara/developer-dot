---
layout: page
title: Chapter 4.3.11 - Transaction Information
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/proration/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

REST v2 looks at the transaction as a whole and bases the returned taxes off of the information provided.  

Each transaction contains the following information:
<ul class="dev-guide-list">
    <li>Company (Seller) Data</li>
    <li>Customer (Buyer) Data</li>
    <li>Transaction (Invoice and Line Item) Data</li>
</ul>

A product (defined by the transaction/service pair) can return different taxes, or no taxes, depending on the selections made.  For example, setting the following details on a transaction returns 0 taxes:
<ul class="dev-guide-list">
    <li>Customer Type (<code>cust</code>): "Residential" (<code>0</code>)</li>
    <li>Jurisdiction (<code>bill</code>): Richmond, OH</li>
    <li>Transaction/Service Pair (<code>tran</code> and <code>serv</code>): Internet/WEB Hosting (5/29)</li>
</ul>

But by changing <b>Customer Type</b> to <b>Business</b> (<code>cust</code> to <code>1</code>), Sales Tax at the State and County tax levels is returned.  Because of this, it is <b>imperative</b> that the transaction information is set correctly in order to get the proper taxes back.

<h3>Company Data</h3>
Company data defines the <b>company</b> or <b>seller</b>.  Set these keys in the <code>CompanyData</code> object.  More information about <code>CompanyData</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/company-data/">here</a>.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Business Class</td>
        <td><code>bscl</code></td>
        <td>Specifies whether the business making the transaction is an Incumbent Local Exchange Company (ILEC) or not an ILEC
            <ul class="dev-guide-list">
                <li><b>Not an ILEC</b> (<span class="t5">default</span>): Engaged in selling services competing with an incumbent provider</li>
                <li><b>ILEC</b>: Engaged in selling services over company-owned lines and equipment</li>
                <li>Use <b>Not an ILEC</b> if neither class applies</li>
            </ul>
            <br/>
            Only impacts Communications transactions in certain jurisdictions, such as Oregon</td>
      </tr>
      <tr>
        <td>Service Class</td>
        <td><code>svcl</code></td>
        <td>Delineates the primary activity of an organization as Local Service or Long Distance 
            <ul class="dev-guide-list">
                <li><b>Primary Local</b> (<span class="t5">default</span>): Carriers vending their services with over 50% of the gross business activities in Local Service revenue</li>
                <li><b>Primary Long Distance</b>: Carriers vending their services with over 50% of the gross business activities in Long Distance revenue</li>
            </ul>
            <br/>
            Only impacts Communications transactions in certain jurisdictions, such as New York</td>
      </tr>
      <tr>
        <td>Facilities</td>
        <td><code>fclt</code></td>
        <td>Specifies whether the transaction is sold over tangible facilities controlled by the seller
            <ul class="dev-guide-list">
                <li><b>True</b> (<span class="t5">default</span>): Seller delivering the service owns or controls the facilities used to provide the service (facilities based)</li>
                <li><b>False</b>: Carrier does not own the facilities (non-facilities based)</li>
            </ul>
            <br/>
            In some jurisdictions, tax outcomes will vary depending on whether the service is delivered over infrastructure controlled by the seller</td>
      </tr>
      <tr>
        <td>Franchise</td>
        <td><code>frch</code></td>
        <td>Indicates that the seller provides services sold pursuant to a franchise agreement between the carrier and the jurisdiction
            <ul class="dev-guide-list">
                <li><b>True</b> (<span class="t5">default</span>): Seller has a franchise agreement with the jurisdiction</li>
                <li><b>False</b>: Franchise fees and taxes do not apply to seller</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>Regulated</td>
        <td><code>reg</code></td>
        <td>Specifies if the company and its services are regulated by the regulatory commission in the state of the service
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): Company is not rate-regulated</li>
                <li><b>True</b>: Company is rate-regulated</li>
            </ul>
            <br/>
            Unless the seller is registered with the state regulatory commission as a rate-regulated, incumbent provider, all transactions should be set to <code>false</code>
        </td>
      </tr>
      <tr>
        <td>Company Identifier</td>
        <td><code>idnt</code></td>
        <td>Used for reporting purposes and does not impact taxation.  
        <br/>
        The typical use for this field is to distinguish transactions for different companies or other delineations</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/exclusion/">Exclusions</a></td>
        <td><code>excl</code></td>
        <td>The Exclusions object allows you to specify the exclusions that apply to the transaction</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>Customer Data</h3>
Customer data defines the customer or buyer.  Set these keys in the <code>Invoice</code> or <code>Location</code> objects.  
More information about <code>Invoice</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">here</a>.
 More information about <code>Location</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/location/">here</a>.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Customer Type</td>
        <td><code>cust</code></td>
        <td>Specifies the type of customer involved in the transaction
            <ul class="dev-guide-list">
                <li><b>Residential</b>: Transactions made by the customer for home use</li>
                <li><b>Business</b>: Transactions made at a place of business</li>
                <li><b>Senior Citizen</b>: Transactions made by the customer who meets the jurisdiction requirements to be considered a senior citizen and qualify for senior citizen tax breaks</li>
                <li><b>Industrial</b>: Transactions made at an industrial business</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>Lifeline</td>
        <td><code>lfln</code></td>
        <td>Indicates if the customer is a Lifeline participant
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): Collects all taxes</li>
                <li><b>True</b>: Turns off the calculation of taxes that are not collected from Lifeline recipients</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>Incorporated</td>
        <td><code>int</code></td>
        <td>Specifies whether the customer is involved in this transaction inside or outside of the Local level of the jurisdiction.
            <ul class="dev-guide-list">
                <li><b>True</b> (<span class="t5">default</span>): Jurisdiction is inside an incorporated location</li>
                <li><b>False</b>: Jurisdiction is outside an incorporated location.  This option usually results in no local taxes returned</li>
            </ul>
            <br/>
            If unsure, set this key to <code>true</code>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/exemption/">Exemptions</a></td>
        <td><code>exms</code></td>
        <td>The Exemptions object allows you to specify the exemptions that apply to the transaction</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>Transaction Data</h3>
Transaction data defines the transaction in terms of where the transaction takes place, what is being be taxed, and other details of the transaction.  Set these keys in the <code>Invoice</code> or <code>LineItem</code> objects.  

In addition to these objects, transactions can also be customized through <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/tax-override/">Tax Overrides</a> and <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/safe-harbor-override/">Safe Harbor Overrides</a>.

<h4>Invoice Keys</h4>
More information about <code>Invoice</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">here</a>.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/commit/">DocumentCode</a></td>
        <td><code>doc</code></td>
        <td>Identifies a single or group of transactions, quotes, or invoices in the calling system. This is a user-defined field limited to 150 characters
            <br/>
            DocumentCode must be set if <b>Commit</b> is <code>true</code>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/commit/">Commit</a></td>
        <td><code>cmmt</code></td>
        <td>Specifies if the DocumentCode should be committed as soon as the tax calculation is processed
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): DocumentCode is not committed or is uncommitted if previously committed and still within the current reporting period</li>
                <li><b>True</b>: DocumentCode is committed</li>
                <li>If <b>DocumentCode</b> is provided but <b>Commit</b> is <code>null</code>, <b>Commit</b> is defaulted to <code>false</code></li>
                <li>If <b>Commit</b> is <code>true</code>, <b>DocumentCode</b> must be set</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/jurisdiction-determination/">Bill To Jurisdiction</a></td>
        <td><code>bill</code></td>
        <td>Identifies the location to be billed</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-date/">Invoice Date</a></td>
        <td><code>date</code></td>
        <td>Date to be applied to the transaction or invoice.  Normally set to the bill date, invoice date, or call date (as applicable)</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/invoice-mode/">Invoice Mode</a></td>
        <td><code>invm</code></td>
        <td>Indicates if all line items within an invoice should be processed individually or as one invoice
            <ul class="dev-guide-list">
                <li><b>True</b> (<span class="t5">default</span>): line items are part of a single invoice</li>
                <li><b>False</b>: line items are unrelated</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>Return Detail</td>
        <td><code>dtl</code></td>
        <td>Indicates if individual line item taxes should be included in response
            <ul class="dev-guide-list">
                <li><b>True</b> (<span class="t5">default</span>): return line item level tax results</li>
                <li><b>False</b>: do not return line item level tax results</li>
                <li>If <code>true</code>, Return Summary must be set to <code>false</code></li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>Return Summary</td>
        <td><code>summ</code></td>
        <td>Indicates if the summarized taxes for the invoice should be included in the response
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): do not return summarized tax results</li>
                <li><b>True</b>: return summarized tax results</li>
                <li>If <code>true</code>, Return Detail must be set to <code>false</code></li>
            </ul>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a></td>
        <td><code>opt</code></td>
        <td>Optional reporting fields useful in reporting.  Optional fields do not impact taxation</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>LineItem Keys</h4>
More information about <code>LineItem</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/line-item/">here</a>.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Key</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reference Code</td>
        <td><code>ref</code></td>
        <td>Reference ID for the line item</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/jurisdiction-determination/">Origination/Ship From Jurisdiction</a></td>
        <td><code>from</code></td>
        <td>Location for the origination point. If <code>null</code>, the invoice's BillTo location is used</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/jurisdiction-determination/">Termination/Ship To Jurisdiction</a></td>
        <td><code>to</code></td>
        <td>Location for the destination point. If <code>null</code>, the invoice's BillTo location is used</td>
      </tr>
      <tr>
        <td>Charge</td>
        <td><code>chg</code></td>
        <td>Specifies the amount of the transaction to be taxed.  For <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/tax-inclusive/">Tax Inclusive</a> transactions, Charge specifies the desired total (base charge + taxes)
            <br/>
            Defaults to <code>0</code> if not set
        </td>
      </tr>
      <tr>
        <td>Lines</td>
        <td><code>line</code></td>
        <td>Specifies the line count.  Defaults to <code>0</code> if not set
            <br/>
            When local service is provided, a transaction should be generated with Lines populated with the number of lines the customer subscribes to.  This information is used to generate per line taxes usually associated with local E911 charges and local telecommunications relay service taxes and other assorted taxes.
        </td>
      </tr>
      <tr>
        <td>Locations</td>
        <td><code>loc</code></td>
        <td>Specifies the number of customer locations
            <br/>
            Defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td>Minutes</td>
        <td><code>min</code></td>
        <td>Specifies the length of a phone call.  Defaults to <code>0</code> if not set
            <br/>
            Used in the generation of taxes that are specified as per minute flat fees in some taxing jurisdictions. The number is a double so any seconds added should be in decimal format.  For example, use <code>20.5</code> for 20 minutes and 30 seconds.
        </td>
      </tr>
      <tr>
        <td>Sale Type</td>
        <td><code>sale</code></td>
        <td>Indicates if the transaction retail or wholesale
            <ul class="dev-guide-list">
                <li><b>wholesale</b>: specifies that the transaction is a sale to another company that will resell the product or service to a consumer</li>
                <li><b>Retail</b>: specifies that the transaction is a sale to an end user</li>
                <li><b>Consumed</b>: <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/sau/">Sales and Use</a> only.  Specifies that the transaction is for an item that is consumed directly</li>
                <li><b>Vendor Use</b>: <a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/sau/">Sales and Use</a> only.  Specifies that the transaction is for an item that is subject to vendor use tax</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/private-line/">Private Line Split</a></td>
        <td><code>plsp</code></td>
        <td>Percentage split for a private line transaction.  Set as a decimal and defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td>Tax Inclusive</td>
        <td><code>incl</code></td>
        <td>Indicates if the charge for the line item includes tax
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): taxes not included in the Line Item charge</li>
                <li><b>True</b>: taxes are included in the Line Item charge</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/proration/">Proration</a></td>
        <td><code>pror</code></td>
        <td>Percentage allocation for a pro-rated calculation of fixed taxes.  Set as a decimal and defaults to <code>0</code> if not set</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/bridge-conferencing/">Bridge Conferencing</a></td>
        <td><code>brdg</code></td>
        <td>Data for conference bridge transactions</td>
      </tr>
      <tr>
        <td>Transaction Type</td>
        <td><code>tran</code></td>
        <td>Transaction Type ID of the service being taxed.  See <a class="dev-guide-link" href="https://github.com/Avalara/Communications-Developer-Content/tree/master/afc_saaspro_tax/support_docs">AFC Telecom Mapping Guidelines</a> for a list of transaction type IDs.</td>
      </tr>
      <tr>
        <td>Service Type</td>
        <td><code>serv</code></td>
        <td>Service Type ID of the service being taxed.  See <a class="dev-guide-link" href="https://github.com/Avalara/Communications-Developer-Content/tree/master/afc_saaspro_tax/support_docs">AFC Telecom Mapping Guidelines</a> for a list of service type IDs.</td>
      </tr>
      <tr>
        <td>Debit</td>
        <td><code>dbt</code></td>
        <td>Indicates if the transaction is prepaid
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): Debit does not apply</li>
                <li><b>True</b>: perform a debit call tax calculation</li>
            </ul>
            <br/>
            Only set <b>Debit</b> to <code>true</code> if you are a prepaid seller
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/adjustment/">Adjustment</a></td>
        <td><code>adj</code></td>
        <td>Indicates if this line item is a credit or adjustment
            <ul class="dev-guide-list">
                <li><b>False</b> (<span class="t5">default</span>): not a credit or adjustment</li>
                <li><b>True</b>: is a credit/adjustment</li>
            </ul></td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/adjustment/">Adjustment Method</a></td>
        <td><code>adjm</code></td>
        <td>Specifies how an adjustment should be processed
            <ul class="dev-guide-list">
                <li><b>Default</b> (<span class="t5">default</span>): adjustment is processed exactly like a similar charge transaction but with a negative tax result.  Standard tax brackets are applied</li>
                <li><b>Least Favorable Rate</b>: tax brackets are applied to produce the smallest tax refund.  This is only useful for taxes with multiple tiers or brackets</li>
                <li><b>Most Favorable Rate</b>: tax brackets are applied to produce the largest tax refund.  This is only useful for taxes with multiple tiers or brackets</li>
            </ul>
            <br/>
            If unsure, use <b>Default</b>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/adjustment/">Discount Type</a></td>
        <td><code>disc</code></td>
        <td>Identifies the discount type for an adjustment
            <ul class="dev-guide-list">
                <li><b>None</b> (<span class="t5">default</span>): discount type not applicable</li>
                <li><b>Retail Product</b>: an amount subtracted from the original price to arrive at a lower price</li>
                <li><b>Manufacturer Product</b>: a credit applied to the total amount reimbursed to either the retailer or the customer by the manufacturer.</li>
                <li><b>Account Level</b>: a stand-alone discount that is not applied against any service but instead as a stand-alone product</li>
                <li><b>Subsidized</b>: a credit for telephone service where the telephone provider provides a service to a lifeline eligible customer. The credit is applied to the subscriber line charge</li>
                <li><b>Goodwill</b>: a credit applied to customer invoices for the purpose of engendering customer goodwill. For example, compensation for a service outage</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/optional-fields/">Optional Fields</a></td>
        <td><code>opt</code></td>
        <td>Optional reporting fields useful in reporting.  Optional fields do not impact taxation</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide/customizing-transactions/sample-transactions/sau/">Attribute Property</a></td>
        <td><code>prop</code></td>
        <td>Attribute/property value for sales and use transaction/service pairs</td>
      </tr>
    </tbody>
  </table>
</div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/proration/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/exclusion/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>