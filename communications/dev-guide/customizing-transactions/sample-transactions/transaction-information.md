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
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/transaction-information/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
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
        <td>Specifies whether the business making the transaction is a Competitive Local Exchange Company (CLEC) or an Incumbent Local Exchange Company (ILEC) 
            <ul class="dev-guide-list">
                <li><b>CLEC</b> (<span class="t5">default</span>): Engaged in selling services competing with an incumbent provider</li>
                <li><b>ILEC</b>: Engaged in selling services over company-owned lines and equipment</li>
                <li>Use <b>CLEC</b> if neither class applies</li>
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
    </tbody>
  </table>
</div>


<h3>Customer Data</h3>
Customer data defines the customer or buyer.  Set these keys in the <code>Invoice</code> or <code>LineItem</code> objects.  
More information about <code>Invoice</code> can be found <a class="dev-guide-link" href="/communications/dev-guide/reference/invoice/">here</a>.
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
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><code></code></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>